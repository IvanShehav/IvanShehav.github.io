/* Генерирует вращающийся 3D-поезд для баннера GitHub-профиля: SVG-кадры, переключаемые SMIL-анимацией (скрипты на GitHub не работают).
   Запуск: node scripts/make-banner-train.js <banner.svg> */
const fs = require("fs"), vm = require("vm"), path = require("path");
const file = process.argv[2];
const win = { matchMedia: () => ({ matches: false }) };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, "../assets/train3d.js"), "utf8"), { window: win, Math, Object, document: {} });
const T = win.Train3D, model = T.build(true);
const N = 60, W = 200, H = 168, DUR = 12, PITCH = 0.5, OY = 18;
const f1 = (x) => Math.round(x * 4) / 4;
function recorder() {
  const out = []; let d = "", filled = false, alpha = 1, cap = "butt";
  const ctx = {
    fillStyle: "#000", strokeStyle: "#000", lineWidth: 1, globalAlpha: 1, lineCap: "butt", lineJoin: "miter",
    clearRect() {}, setTransform() {},
    beginPath() { d = ""; filled = false; },
    moveTo(x, y) { d += "M" + f1(x) + " " + f1(y + OY); }, lineTo(x, y) { d += "L" + f1(x) + " " + f1(y + OY); }, closePath() { d += "Z"; },
    fill() { filled = true; out.push(`<path d="${d}" fill="${ctx.fillStyle}"${ctx.globalAlpha < 1 ? ` fill-opacity="${ctx.globalAlpha}"` : ""} stroke="${ctx.fillStyle}" stroke-width=".6" stroke-linejoin="round"${ctx.globalAlpha < 1 ? ` stroke-opacity="${ctx.globalAlpha}"` : ""}/>`); },
    stroke() { if (!filled) out.push(`<path d="${d}" fill="none" stroke="${ctx.strokeStyle}" stroke-width="${f1(ctx.lineWidth)}" stroke-linecap="round" stroke-linejoin="round"/>`); }
  };
  return { ctx, out };
}
let frames = "";
for (let i = 0; i < N; i++) {
  const r = recorder();
  T.paint(r.ctx, model, W, H, -0.75 + (Math.PI * 2 * i) / N, PITCH, 1.12);
  const kt = [0], v = [i === 0 ? 1 : 0];
  if (i > 0) { kt.push(i / N); v.push(1); }
  if (i < N - 1) { kt.push((i + 1) / N); v.push(0); }
  if (kt[kt.length - 1] !== 1) { kt.push(1); v.push(i === N - 1 ? 1 : 0); }
  frames += `<g opacity="${i === 0 ? 1 : 0}"><animate attributeName="opacity" calcMode="discrete" values="${v.join(";")}" keyTimes="${kt.map((x) => +x.toFixed(4)).join(";")}" dur="${DUR}s" repeatCount="indefinite"/>${r.out.join("")}</g>`;
}
const block = `<!-- экран 2: 3D-поезд -->
    <g transform="translate(950 40)">
      <rect width="200" height="210" rx="14" fill="#F4F7FB" fill-opacity=".97"/>
      <rect width="200" height="30" rx="14" fill="#DCE6F5"/><rect y="16" width="200" height="14" fill="#DCE6F5"/>
      <circle cx="16" cy="15" r="4" fill="#9DB0CE"/><circle cx="30" cy="15" r="4" fill="#9DB0CE"/><circle cx="44" cy="15" r="4" fill="#9DB0CE"/>
      <text x="62" y="19" font-size="11" font-weight="700" fill="#52627A">3D-модель поезда</text>
      <clipPath id="trainclip"><rect x="0" y="30" width="200" height="180" rx="14"/></clipPath>
      <g clip-path="url(#trainclip)">${frames}</g>
    </g>`;
let svg = fs.readFileSync(file, "utf8");
const a = svg.indexOf("<!-- экран 2");
const end = svg.lastIndexOf("</g>\n</svg>");
svg = svg.slice(0, a) + block + "\n  " + svg.slice(end);
fs.writeFileSync(file, svg);
console.log("ok", file, svg.length);
