(function () {
  "use strict";
  var UI = window.UI, PROJECTS = window.PROJECTS, SITE = window.SITE;
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var state = { lang: "ru", filter: "all", skill: null, openId: null, opener: null, cleanup: null };

  function $(id) { return document.getElementById(id); }
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function T() { return UI[state.lang]; }
  function P(p) { return p[state.lang]; }
  function pById(id) { return PROJECTS.filter(function (p) { return p.id === id; })[0]; }

  /* ---------- картинки для карточек ---------- */
  var STACK_EN = { "Опрос": "Survey", "AI-архитектура": "AI architecture", "Транскрибация": "Transcription", "Суммаризация": "Summarization", "Анонимизация": "Anonymization", "Финмодель": "Financial model", "Исследование": "Research", "Образовательный дизайн": "Learning design", "Медиаплан": "Media plan", "Управление": "Management", "Фасилитация": "Facilitation", "Партнеры": "Partners", "Презентация": "Presentation", "Требования": "Requirements", "3D-моделирование": "3D modeling", "Черчение по ГОСТ": "GOST drafting", "Обмеры штангенциркулем": "Caliper measuring", "VLAN и DHCP": "VLAN and DHCP", "Виртуализация": "Virtualization" };
  var LINK_EN = { "GitHub команды": "Team GitHub", "Портфолио 3D": "3D portfolio", "Векторный редактор": "Vector editor", "Нейросети": "Neural networks", "Банк на Bash": "Bank in Bash", "Все репозитории": "All repositories" };

  var ART = {
    radar: function () {
      var pts = function (r) { return [0, 1, 2, 3, 4].map(function (i) { var a = -Math.PI / 2 + i * 2 * Math.PI / 5; return (160 + Math.cos(a) * r) + "," + (90 + Math.sin(a) * r); }).join(" "); };
      return '<polygon class="a-line" points="' + pts(70) + '"/><polygon class="a-line" points="' + pts(46) + '"/><polygon class="a-line" points="' + pts(22) + '"/><polygon class="a-fill a-pulse" points="' + pts(54).replace(/(\d+\.?\d*),(\d+\.?\d*)/g, function (m, x, y) { return (160 + (x - 160) * (0.7 + Math.random() * 0.5)).toFixed(1) + "," + (90 + (y - 90) * (0.7 + Math.random() * 0.5)).toFixed(1); }) + '"/>';
    },
    incident: function () {
      return '<rect class="a-card" x="70" y="26" width="180" height="128" rx="10"/><rect class="a-fill2" x="84" y="40" width="70" height="8" rx="4"/><circle class="a-blink" cx="232" cy="44" r="5"/><rect class="a-line2" x="84" y="62" width="150" height="6" rx="3"/><rect class="a-line2" x="84" y="76" width="120" height="6" rx="3"/><rect class="a-fill" x="84" y="108" width="62" height="28" rx="8"/><rect class="a-line" x="158" y="108" width="62" height="28" rx="8"/>';
    },
    bars: function () {
      var h = [60, 96, 78, 124, 52, 110];
      return h.map(function (v, i) { return '<rect class="' + (i === 3 ? "a-acc" : "a-fill") + ' a-grow" style="animation-delay:' + i * 90 + 'ms" x="' + (52 + i * 38) + '" y="' + (150 - v) + '" width="24" height="' + v + '" rx="5"/>'; }).join("") + '<line class="a-line" x1="40" y1="152" x2="280" y2="152"/>';
    },
    chat: function () {
      return '<rect class="a-card" x="96" y="14" width="128" height="152" rx="14"/><rect class="a-line2" x="108" y="30" width="70" height="20" rx="8"/><rect class="a-fill" x="138" y="58" width="74" height="20" rx="8"/><rect class="a-line2" x="108" y="86" width="86" height="20" rx="8"/><rect class="a-fill2" x="108" y="122" width="46" height="18" rx="6"/><rect class="a-fill2" x="160" y="122" width="52" height="18" rx="6"/>';
    },
    flow: function () {
      var x = [40, 100, 160, 220, 280], out = '<path class="a-line" d="M40 90 L280 90"/>';
      x.forEach(function (v, i) { out += '<circle class="' + (i === 2 ? "a-acc" : "a-card") + '" cx="' + v + '" cy="90" r="14"/>'; });
      if (!reduce) out += '<circle class="a-fill" r="5"><animateMotion dur="3.4s" repeatCount="indefinite" path="M40 90 L280 90"/></circle>';
      out += '<rect class="a-line2" x="130" y="130" width="60" height="22" rx="8"/><path class="a-line" d="M160 104 L160 130" stroke-dasharray="4 4"/>';
      return out;
    },
    doc: function () {
      return '<rect class="a-card" x="92" y="18" width="136" height="144" rx="10"/><rect class="a-line2" x="106" y="36" width="80" height="7" rx="3"/><rect class="a-line2" x="106" y="52" width="108" height="7" rx="3"/><rect class="a-fill2 a-sweep" x="106" y="72" width="108" height="40" rx="6"/><rect class="a-line2" x="106" y="124" width="100" height="7" rx="3"/><rect class="a-line2" x="106" y="138" width="60" height="7" rx="3"/>';
    },
    calc: function () {
      var out = "";
      [[40, 120], [84, 190], [128, 150]].forEach(function (r) { out += '<rect class="a-line2" x="60" y="' + r[0] + '" width="200" height="6" rx="3"/><circle class="a-fill" cx="' + r[1] + '" cy="' + (r[0] + 3) + '" r="9"/>'; });
      return out;
    },
    nodes: function () {
      var p = [[60, 90], [140, 40], [140, 140], [220, 90], [270, 40], [270, 140]], e = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5]];
      return e.map(function (k) { return '<line class="a-line" x1="' + p[k[0]][0] + '" y1="' + p[k[0]][1] + '" x2="' + p[k[1]][0] + '" y2="' + p[k[1]][1] + '"/>'; }).join("") + p.map(function (q, i) { return '<circle class="' + (i === 3 ? "a-acc" : "a-card") + '" cx="' + q[0] + '" cy="' + q[1] + '" r="' + (i === 3 ? 16 : 12) + '"/>'; }).join("");
    },
    grid: function () {
      var out = "";
      for (var r = 0; r < 3; r++) for (var c = 0; c < 5; c++) out += '<rect class="' + ((r * 5 + c) % 7 === 3 ? "a-acc" : (r + c) % 3 === 0 ? "a-fill2" : "a-card") + '" x="' + (46 + c * 44) + '" y="' + (32 + r * 42) + '" width="36" height="34" rx="8"/>';
      return out;
    },
    robot: function () {
      return '<rect class="a-line" x="40" y="22" width="240" height="136" rx="8"/><rect class="a-fill2" x="110" y="50" width="22" height="70" rx="3"/><rect class="a-fill2" x="190" y="100" width="56" height="18" rx="3"/><path class="a-line a-dash" d="M64 134 C 90 110, 80 70, 160 78 S 232 60, 250 40"/><circle class="a-acc" cx="64" cy="134" r="7"/><circle class="a-fill" cx="250" cy="40" r="9"/>';
    },
    plate: function () {
      return '<polygon class="a-card" points="160,28 244,70 160,112 76,70"/><polygon class="a-fill2" points="76,70 160,112 160,160 76,118"/><polygon class="a-fill" points="160,112 244,70 244,118 160,160"/><ellipse class="a-acc" cx="160" cy="70" rx="16" ry="8"/><ellipse class="a-line" cx="130" cy="58" rx="8" ry="4"/><ellipse class="a-line" cx="190" cy="58" rx="8" ry="4"/><ellipse class="a-line" cx="130" cy="82" rx="8" ry="4"/><ellipse class="a-line" cx="190" cy="82" rx="8" ry="4"/><ellipse class="a-line a-pulse" cx="118" cy="104" rx="9" ry="12" transform="rotate(-30 118 104)"/><ellipse class="a-line a-pulse" cx="204" cy="104" rx="9" ry="12" transform="rotate(30 204 104)"/>';
    },
    network: function () {
      var p = [[60, 40], [260, 40], [60, 140], [260, 140]], out = "";
      p.forEach(function (q) { out += '<line class="a-line" x1="' + q[0] + '" y1="' + q[1] + '" x2="160" y2="90"/>'; });
      p.forEach(function (q, i) { out += '<rect class="' + (i === 0 ? "a-line2" : "a-card") + '" x="' + (q[0] - 30) + '" y="' + (q[1] - 16) + '" width="60" height="32" rx="8"' + (i === 0 ? ' stroke-dasharray="5 4"' : "") + "/>"; });
      out += '<rect class="a-acc" x="130" y="72" width="60" height="36" rx="10"/>';
      if (!reduce) out += '<circle class="a-fill" r="5"><animateMotion dur="2.6s" repeatCount="indefinite" path="M260 140 L160 90 L60 40 L160 90 L260 140"/></circle>';
      return out;
    },
    lock: function () {
      return '<rect class="a-card" x="126" y="78" width="68" height="56" rx="10"/><path class="a-line" d="M142 78 v-14 a18 18 0 0 1 36 0 v14"/><circle class="a-acc" cx="160" cy="104" r="7"/><circle class="a-fill" cx="70" cy="60" r="16"/><circle class="a-fill2" cx="250" cy="120" r="16"/><path class="a-line" d="M86 62 L124 90" stroke-dasharray="4 4"/>';
    }
  };
  function art(type) { return '<svg viewBox="0 0 320 180" class="art" aria-hidden="true">' + (ART[type] || ART.grid)() + "</svg>"; }

  /* ---------- рендер ---------- */
  function renderStatic() {
    var t = T(); document.documentElement.lang = state.lang;
    document.title = (state.lang === "ru" ? "Иван Шехавцов, AI-продукты и автоматизация" : "Ivan Shekhavtsov, AI products and automation");
    $("nav-links").innerHTML = ["about", "projects", "experience", "education", "skills", "contacts"].map(function (k) { return '<a href="#' + k + '" data-sec="' + k + '">' + esc(t.nav[k]) + "</a>"; }).join("");
    $("lang-btn").textContent = t.lang; $("theme-btn").setAttribute("aria-label", t.theme);
    $("hero-name").textContent = t.hero.name; $("hero-role").textContent = t.hero.role; $("hero-lead").textContent = t.hero.lead;
    $("logo-name").textContent = t.hero.name; $("cta1").textContent = t.hero.cta1; $("cta2").textContent = t.hero.cta2;
    $("hero-photo").alt = t.hero.photoAlt; $("mini-chat-title").textContent = t.hero.chatTitle; $("mini-plate-title").textContent = t.hero.plateTitle;
    $("about-title").textContent = t.about.title;
    $("about-text").innerHTML = t.about.text.map(function (x) { return "<p>" + esc(x) + "</p>"; }).join("");
    $("about-facts").innerHTML = "<h3>" + esc(t.about.factsTitle) + "</h3>" + t.about.facts.map(function (f) { return "<div><dt>" + esc(f[0]) + "</dt><dd>" + esc(f[1]) + "</dd></div>"; }).join("");
    $("about-goals").innerHTML = "<h3>" + esc(t.about.goalsTitle) + "</h3><div class='goal-list'>" + t.about.goals.map(function (g) { return "<article><h4>" + esc(g.t) + "</h4><p>" + esc(g.d) + "</p></article>"; }).join("") + "</div>";
    $("about-quals").innerHTML = "<h3>" + esc(t.about.qualTitle) + "</h3><ul>" + t.about.quals.map(function (g) { return "<li><b>" + esc(g.t) + "</b><span>" + esc(g.d) + "</span></li>"; }).join("") + "</ul>";
    $("projects-title").textContent = t.projects.title; $("projects-lead").textContent = t.projects.lead;
    $("sub-main").textContent = t.projects.main; $("sub-more").textContent = t.projects.more;
    $("experience-title").textContent = t.experience.title; $("education-title").textContent = t.education.title;
    $("skills-title").textContent = t.skills.title; $("skills-lead").textContent = t.skills.lead;
    $("achievements-title").textContent = t.achievements.title;
    $("contacts-title").textContent = t.contacts.title; $("contacts-lead").textContent = t.contacts.lead; 
    $("copy-btn").textContent = t.contacts.copy; $("footer-text").textContent = t.footer; $("to-top").textContent = t.top;
    $("win-close").setAttribute("aria-label", t.projects.close); $("win-prev").setAttribute("aria-label", t.projects.prev); $("win-next").setAttribute("aria-label", t.projects.next);
    renderTimeline(); renderEdu(); renderSkills(); renderAch(); renderContacts(); renderFilters(); renderProjects();
    observeNav();
  }

  function renderTimeline() {
    $("timeline").innerHTML = window.EXPERIENCE[state.lang].map(function (e) {
      return '<article class="tl-item"><div class="tl-when">' + esc(e.when) + '</div><div class="tl-card"><h3>' + esc(e.title) + '</h3><p class="tl-org">' + esc(e.org) + "</p><ul>" + e.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + '</ul><a class="tl-link" href="#p-' + e.project + '" data-open="' + e.project + '">' + esc(T().projects.open) + "</a></div></article>";
    }).join("");
  }
  function renderEdu() {
    $("edu").innerHTML = window.EDUCATION[state.lang].map(function (e) {
      return '<article class="edu-item"><div class="edu-when">' + esc(e.when) + "</div><div><h3>" + esc(e.title) + "</h3><p>" + esc(e.sub) + "</p><ul>" + e.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul></div></article>";
    }).join("");
  }
  function renderAch() {
    $("ach").innerHTML = window.ACHIEVEMENTS[state.lang].map(function (a) { return "<li><b>" + esc(a.big) + "</b><span>" + esc(a.text) + "</span></li>"; }).join("");
  }
  function renderContacts() {
    var t = T().contacts;
    var items = [
      [t.telegram, "@" + SITE.telegram, "https://t.me/" + SITE.telegram],
      [t.email, SITE.email, "mailto:" + SITE.email],
      [t.github, "github.com/" + SITE.github, "https://github.com/" + SITE.github]
    ];
    $("contact-links").innerHTML = items.map(function (i) { return '<li><a href="' + esc(i[2]) + '" target="_blank" rel="noopener"><span>' + esc(i[0]) + "</span><b>" + esc(i[1]) + "</b></a></li>"; }).join("");
  }

  function renderSkills() {
    $("skill-groups").innerHTML = window.SKILLS[state.lang].map(function (g, gi) {
      return '<div class="sg"><h3>' + esc(g.g) + '</h3><div class="chips">' + g.items.map(function (it, ii) {
        var key = gi + "-" + ii;
        return '<button type="button" class="chip' + (state.skill === key ? " on" : "") + '" data-skill="' + key + '" aria-pressed="' + (state.skill === key) + '">' + esc(it[0]) + "</button>";
      }).join("") + "</div></div>";
    }).join("");
    renderSkillUsed();
  }
  function skillItem() {
    if (!state.skill) return null;
    var k = state.skill.split("-"); return window.SKILLS[state.lang][+k[0]].items[+k[1]];
  }
  function renderSkillUsed() {
    var it = skillItem(), box = $("skill-used");
    if (!it) { box.innerHTML = ""; box.classList.remove("on"); return; }
    box.classList.add("on");
    box.innerHTML = "<span>" + esc(T().skills.used) + "</span>" + it[1].map(function (id) { var p = pById(id); return p ? '<a href="#p-' + id + '" data-open="' + id + '">' + esc(P(p).title) + "</a>" : ""; }).join("") + '<button type="button" class="link-btn" data-clear="1">' + esc(T().skills.clear) + "</button>";
  }

  /* ---------- проекты ---------- */
  function renderFilters() {
    var f = T().projects.filters, cats = ["all", "ai", "product", "auto", "data", "eng", "team", "lab"];
    $("filters").innerHTML = cats.map(function (c) {
      var n = c === "all" ? PROJECTS.length : PROJECTS.filter(function (p) { return p.cat.indexOf(c) >= 0; }).length;
      return '<button type="button" class="chip' + (state.filter === c ? " on" : "") + '" data-filter="' + c + '" aria-pressed="' + (state.filter === c) + '">' + esc(f[c]) + " <small>" + n + "</small></button>";
    }).join("");
    $("filters").setAttribute("aria-label", T().projects.title);
  }
  function match(p) { return state.filter === "all" || p.cat.indexOf(state.filter) >= 0; }
  function renderProjects() {
    var t = T().projects, f = t.filters, it = skillItem();
    function cls(p) { return it ? (it[1].indexOf(p.id) >= 0 ? " hit" : " dim") : ""; }
    var main = PROJECTS.filter(function (p) { return p.main && match(p); }), more = PROJECTS.filter(function (p) { return !p.main && match(p); });
    $("tiles").classList.toggle("filtered", state.filter !== "all");
    $("tiles").innerHTML = main.map(function (p) {
      return '<a class="tile' + cls(p) + '" href="#p-' + p.id + '" data-open="' + p.id + '"><div class="win-bar slim"><span class="dots"><i></i><i></i><i></i></span><span class="tile-cat">' + esc(f[p.cat[0]]) + '</span><span class="tile-year">' + esc(p.year) + '</span></div><div class="tile-art">' + art(p.art) + '</div><div class="tile-body"><h3>' + esc(P(p).title) + "</h3><p>" + esc(P(p).tag) + '</p><span class="tile-open">' + esc(t.open) + "</span></div></a>";
    }).join("");
    $("rows").innerHTML = more.map(function (p) {
      return '<a class="row' + cls(p) + '" href="#p-' + p.id + '" data-open="' + p.id + '"><span class="row-year">' + esc(p.year) + '</span><span class="row-main"><b>' + esc(P(p).title) + "</b><small>" + esc(P(p).tag) + '</small></span><span class="row-cats">' + p.cat.map(function (c) { return "<i>" + esc(f[c]) + "</i>"; }).join("") + "</span></a>";
    }).join("");
    $("sub-main").hidden = !main.length; $("sub-more").hidden = !more.length;
    var none = !main.length && !more.length; $("projects-empty").hidden = !none; $("projects-empty").textContent = t.empty;
  }

  /* ---------- окно проекта ---------- */
  var win = $("win");
  function openProject(id, opener) {
    var p = pById(id); if (!p) return;
    if (state.cleanup) { state.cleanup(); state.cleanup = null; }
    state.openId = id; if (opener) state.opener = opener;
    var L = P(p), t = T().projects;
    $("win-title").textContent = L.title;
    var stack = p.stack.map(function (x) { return state.lang === "en" && STACK_EN[x] ? STACK_EN[x] : x; });
    var links = p.links.map(function (l) { return '<a class="plink" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(state.lang === "en" && LINK_EN[l.l] ? LINK_EN[l.l] : l.l) + "</a>"; }).join("");
    var hasDemo = !!(p.demo && window.DEMOS[p.demo]);
    $("win-body").innerHTML =
      '<section class="win-demo"><h3>' + esc(hasDemo ? t.demoTitle : "") + '</h3><div id="demo-root" class="demo-root">' + (hasDemo ? "" : '<div class="art-big">' + art(p.art) + "</div><p class='d-hint'>" + esc(t.noDemo) + "</p>") + "</div>" + (hasDemo ? '<p class="win-note">' + esc(t.simplified) + "</p>" : "") + "</section>" +
      '<section class="win-info"><p class="win-tag">' + esc(L.tag) + '</p><dl class="meta"><div><dt>' + esc(t.role) + "</dt><dd>" + esc(L.role) + "</dd></div><div><dt>" + esc(t.period) + "</dt><dd>" + esc(L.period) + "</dd></div></dl>" + (p.photo ? '<figure class="win-photo"><img src="' + esc(p.photo.src) + '" alt="' + esc(p.photo[state.lang]) + '" loading="lazy"><figcaption>' + esc(p.photo[state.lang]) + "</figcaption></figure>" : "") + "<p>" + esc(L.summary) + "</p><h3>" + esc(t.did) + "</h3><ul>" + L.did.map(function (d) { return "<li>" + esc(d) + "</li>"; }).join("") + "</ul><h3>" + esc(t.stack) + '</h3><div class="chips">' + stack.map(function (s) { return '<span class="chip static">' + esc(s) + "</span>"; }).join("") + "</div>" + (links ? "<h3>" + esc(t.links) + '</h3><div class="plinks">' + links + "</div>" : "") + (L.note ? '<p class="win-note warn">' + esc(L.note) + "</p>" : "") + "</section>";
    $("win-body").scrollTop = 0;
    if (hasDemo) { var cl = window.DEMOS[p.demo]($("demo-root"), state.lang); state.cleanup = cl; }
    if (!win.open) { if (win.showModal) win.showModal(); else win.setAttribute("open", ""); document.documentElement.classList.add("lock"); }
    $("win-box").focus({ preventScroll: true });
    try { history.replaceState(null, "", "#p-" + id); } catch (e) { /* file:// */ }
  }
  function closeProject() { if (win.open) win.close(); }
  function onClosed() {
    if (state.cleanup) { state.cleanup(); state.cleanup = null; }
    document.documentElement.classList.remove("lock");
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) { /* noop */ }
    var o = state.opener; state.openId = null; if (o && document.contains(o)) o.focus();
  }
  win.addEventListener("close", onClosed);
  win.addEventListener("click", function (e) { if (e.target === win) closeProject(); });
  $("win-close").addEventListener("click", closeProject);
  function step(d) { var i = PROJECTS.map(function (p) { return p.id; }).indexOf(state.openId); var n = (i + d + PROJECTS.length) % PROJECTS.length; openProject(PROJECTS[n].id); }
  $("win-prev").addEventListener("click", function () { step(-1); });
  $("win-next").addEventListener("click", function () { step(1); });

  /* ---------- события ---------- */
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-open]");
    if (a) { e.preventDefault(); openProject(a.getAttribute("data-open"), a); return; }
    var f = e.target.closest("[data-filter]");
    if (f) { state.filter = f.getAttribute("data-filter"); renderFilters(); renderProjects(); return; }
    var s = e.target.closest("[data-skill]");
    if (s) { var k = s.getAttribute("data-skill"); state.skill = state.skill === k ? null : k; renderSkills(); renderProjects(); return; }
    if (e.target.closest("[data-clear]")) { state.skill = null; renderSkills(); renderProjects(); return; }
  });
  $("lang-btn").addEventListener("click", function () {
    state.lang = state.lang === "ru" ? "en" : "ru"; store("lang", state.lang); renderStatic(); startHero();
    if (win.open && state.openId) openProject(state.openId);
  });
  $("theme-btn").addEventListener("click", function () {
    var n = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", n); store("theme", n);
  });
  $("menu-btn").addEventListener("click", function () {
    var open = $("nav-links").classList.toggle("open"); this.setAttribute("aria-expanded", open);
  });
  $("nav-links").addEventListener("click", function (e) { if (e.target.tagName === "A") { $("nav-links").classList.remove("open"); $("menu-btn").setAttribute("aria-expanded", "false"); } });
  $("copy-btn").addEventListener("click", function () {
    var b = this, ok = function () { var o = T().contacts.copy; b.textContent = T().contacts.copied; setTimeout(function () { b.textContent = T().contacts.copy; }, 1600); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(SITE.email).then(ok, function () { });
    else { var ta = document.createElement("textarea"); ta.value = SITE.email; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); ok(); } catch (x) { } document.body.removeChild(ta); }
  });

  /* подсветка раздела в меню */
  var io;
  function observeNav() {
    if (io) io.disconnect(); if (!("IntersectionObserver" in window)) return;
    io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { document.querySelectorAll(".nav-links a").forEach(function (a) { a.classList.toggle("on", a.getAttribute("data-sec") === en.target.id); }); } });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["about", "projects", "experience", "education", "skills", "contacts"].forEach(function (id) { io.observe($(id)); });
  }

  /* ---------- живые окошки в первом экране ---------- */
  var heroTimers = [];
  function startHero() {
    heroTimers.forEach(function (t) { clearTimeout(t); clearInterval(t); }); heroTimers = [];
    var ru = state.lang === "ru";
    var seq = ru
      ? [["Что вас беспокоит?", "Болит в правом боку, особенно после еды."], ["Что вас беспокоит?", "Мне очень тревожно, болит в боку, вдруг это серьезно?"], ["Что вас беспокоит?", "Я уже все рассказал медсестре. Болит бок."]]
      : [["What brings you here?", "Pain in my right side, mostly after eating."], ["What brings you here?", "I am very worried, my side hurts, what if it is serious?"], ["What brings you here?", "I already told the nurse. My side hurts."]];
    var body = $("mini-chat-body");
    function bubble(text, cls) { var d = document.createElement("div"); d.className = "mc " + cls; d.textContent = text; body.appendChild(d); while (body.children.length > 4) body.removeChild(body.firstChild); return d; }
    var i = 0;
    function play() {
      var s = seq[i % seq.length]; i++;
      body.innerHTML = "";
      bubble(s[0], "doc");
      var typing = bubble("...", "pat typing");
      heroTimers.push(setTimeout(function () { typing.classList.remove("typing"); typing.textContent = s[1]; }, 900));
    }
    play();
    if (!reduce) heroTimers.push(setInterval(play, 4800));
    /* плита: отверстия появляются по очереди */
    var ps = $("mini-plate-svg"), NS = "http://www.w3.org/2000/svg";
    function el(tag, a) { var e = document.createElementNS(NS, tag); Object.keys(a).forEach(function (k) { e.setAttribute(k, a[k]); }); ps.appendChild(e); return e; }
    ps.innerHTML = "";
    el("polygon", { points: "70,10 124,37 70,64 16,37", class: "mp-face t" });
    el("polygon", { points: "16,37 70,64 70,106 16,79", class: "mp-face l" });
    el("polygon", { points: "70,64 124,37 124,79 70,106", class: "mp-face r" });
    [[70, 37, 7, 3.6], [48, 26, 4.5, 2.3], [92, 26, 4.5, 2.3], [48, 48, 4.5, 2.3], [92, 48, 4.5, 2.3]].forEach(function (h, n) {
      el("ellipse", { cx: h[0], cy: h[1], rx: h[2], ry: h[3], class: "mp-hole", style: "animation-delay:" + (n * 0.35) + "s" });
    });
    [[34, 66], [54, 76]].forEach(function (h, n) { el("ellipse", { cx: h[0], cy: h[1], rx: 6, ry: 7.5, transform: "rotate(-26 " + h[0] + " " + h[1] + ")", class: "mp-hole", style: "animation-delay:" + (1.9 + n * 0.35) + "s" }); });
    [[88, 76], [108, 66]].forEach(function (h, n) { el("ellipse", { cx: h[0], cy: h[1], rx: 6, ry: 7.5, transform: "rotate(26 " + h[0] + " " + h[1] + ")", class: "mp-hole", style: "animation-delay:" + (2.6 + n * 0.35) + "s" }); });
  }

  /* ---------- старт ---------- */
  (function init() {
    var saved = store("lang");
    state.lang = saved === "en" || saved === "ru" ? saved : ((navigator.language || "ru").toLowerCase().indexOf("ru") === 0 ? "ru" : "en");
    renderStatic(); startHero();
    if (/^#p-/.test(location.hash)) { var id = location.hash.slice(3); if (pById(id)) openProject(id); }
    window.addEventListener("hashchange", function () { if (/^#p-/.test(location.hash)) { var id = location.hash.slice(3); if (pById(id) && state.openId !== id) openProject(id); } });
  })();
})();
