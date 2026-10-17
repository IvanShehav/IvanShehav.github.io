/* Собирает PDF-резюме (RU и EN) из assets/data.js. Телефон не публикуется.
   Запуск: FONT_DIR=<папка с woff2 Montserrat> NODE_PATH=$(npm root -g) node scripts/make-resume.js */
const fs = require("fs"), path = require("path"), vm = require("vm");
const { chromium } = require("playwright");
const root = path.join(__dirname, "..");
const ctx = { window: {} }; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, "assets/data.js"), "utf8"), ctx);
const W = ctx.window, FONT_DIR = process.env.FONT_DIR || "";
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
function fontFaces() {
  if (!FONT_DIR) return "";
  const out = [];
  [["latin", "U+0000-00FF"], ["cyrillic", "U+0400-04FF"]].forEach(([sub, range]) => [400, 600, 800].forEach((w) => {
    const f = path.join(FONT_DIR, `montserrat-${sub}-${w}-normal.woff2`);
    if (fs.existsSync(f)) out.push(`@font-face{font-family:Montserrat;font-weight:${w};src:url(file://${f}) format("woff2");unicode-range:${range}}`);
  }));
  return out.join("\n");
}
function build(lang) {
  const ru = lang === "ru", t = W.UI[lang];
  const proj = W.PROJECTS.filter((p) => p.main);
  const exp = W.EXPERIENCE[lang].map((e) => `<div class="it"><div class="row"><b>${esc(e.title)}</b><span>${esc(e.when)}</span></div><div class="org">${esc(e.org)}</div><ul>${e.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("");
  const edu = W.EDUCATION[lang].map((e) => `<div class="it"><div class="row"><b>${esc(e.title)}</b><span>${esc(e.when)}</span></div><div class="org">${esc(e.sub)}</div></div>`).join("");
  const prj = proj.map((p) => { const L = p[lang]; return `<div class="it"><div class="row"><b>${esc(L.title)}</b><span>${esc(p.year)}</span></div><div class="org">${esc(L.tag)}</div>${L.result ? `<div class="res">${esc(L.result)}</div>` : ""}</div>`; }).join("");
  const skills = W.SKILLS[lang].map((g) => `<div class="sk"><b>${esc(g.g)}:</b> ${g.items.map((i) => esc(i[0])).join(", ")}</div>`).join("");
  const ach = W.ACHIEVEMENTS[lang].map((a) => `<li><b>${esc(a.big)}</b> ${esc(a.text)}</li>`).join("");
  const h = (s) => `<h2>${s}</h2>`;
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><title>${esc(t.hero.name)}</title><style>
${fontFaces()}
@page{size:A4;margin:12mm 15mm}
*{box-sizing:border-box}
body{margin:0;font:400 9pt/1.4 Montserrat,"DejaVu Sans",sans-serif;color:#0c1f36}
h1{font:800 24pt/1.1 Montserrat,sans-serif;margin:0 0 4px}
.role{font-weight:600;font-size:11pt;color:#1c4fb5;margin:0 0 8px}
.lead{margin:0 0 8px}
.contacts{font-size:9pt;color:#334a66;border-bottom:2px solid #2f6fe4;padding-bottom:10px;margin-bottom:6px}
.contacts span{margin-right:14px}
h2{font:800 11pt Montserrat,sans-serif;margin:14px 0 6px;color:#1c4fb5}
.it{margin:0 0 8px;break-inside:avoid}
.row{display:flex;justify-content:space-between;gap:12px}
.row span{color:#52627a;white-space:nowrap;font-size:8.6pt}
.org{color:#334a66;font-size:8.8pt}
.res{font-size:8.8pt;margin-top:1px}
ul{margin:3px 0 0;padding-left:16px}
li{margin:0 0 2px}
.sk{margin:0 0 3px}
</style></head><body>
<h1>${esc(t.hero.name)}</h1>
<p class="role">${esc(t.hero.role)}</p>
<p class="lead">${esc(t.hero.lead)}</p>
<div class="contacts"><span>${esc(W.SITE.email)}</span><span>Telegram: @${esc(W.SITE.telegram)}</span><span>github.com/${esc(W.SITE.github)}</span><span>ivanshehav.github.io</span></div>
${h(ru ? "Опыт" : "Experience")}${exp}
${h(ru ? "Проекты" : "Projects")}${prj}
${h(ru ? "Образование" : "Education")}${edu}
${h(ru ? "Навыки" : "Skills")}${skills}
${h(ru ? "Достижения" : "Achievements")}<ul>${ach}</ul>
</body></html>`;
}
(async () => {
  const b = await chromium.launch(); const tmp = path.join(require("os").tmpdir(), "resume-build"); fs.mkdirSync(tmp, { recursive: true });
  for (const lang of ["ru", "en"]) {
    const f = path.join(tmp, `resume-${lang}.html`); fs.writeFileSync(f, build(lang));
    const p = await b.newPage(); await p.goto("file://" + f); await p.evaluate(() => document.fonts.ready);
    const out = path.join(root, `assets/resume-${lang}.pdf`);
    await p.pdf({ path: out, format: "A4", printBackground: true, preferCSSPageSize: true });
    console.log("ok", out, fs.statSync(out).size);
  }
  await b.close();
})();
