/* Мини-демо для окон проектов. Каждое демо: function(root, lang) -> cleanup.
   Все данные выдуманные, сеть не нужна. */
(function () {
  "use strict";

  /* ---------- helpers ---------- */
  function h(tag, attrs) {
    var el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v === false || v == null) return;
        if (k === "class") el.className = v;
        else if (k === "text") el.textContent = v;
        else if (k.slice(0, 2) === "on") el.addEventListener(k.slice(2), v);
        else el.setAttribute(k, v === true ? "" : v);
      });
    }
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c == null || c === false) continue;
      if (Array.isArray(c)) c.forEach(function (x) { if (x) el.appendChild(x); });
      else el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return el;
  }
  var NS = "http://www.w3.org/2000/svg";
  function s(tag, attrs) {
    var el = document.createElementNS(NS, tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { el.setAttribute(k, attrs[k]); });
    for (var i = 2; i < arguments.length; i++) if (arguments[i]) el.appendChild(arguments[i]);
    return el;
  }
  function fmt(n) { return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); }
  function slider(label, min, max, step, val, onInput, suffix) {
    var out = h("output", { text: val + (suffix || "") });
    var inp = h("input", { type: "range", min: min, max: max, step: step, value: val, "aria-label": label });
    inp.addEventListener("input", function () { out.textContent = inp.value + (suffix || ""); onInput(+inp.value); });
    return { el: h("label", { class: "d-slider" }, h("span", { text: label }), out, inp), input: inp, out: out };
  }
  function timers() {
    var list = [];
    return {
      later: function (fn, ms) { var t = setTimeout(fn, ms); list.push(t); return t; },
      every: function (fn, ms) { var t = setInterval(fn, ms); list.push(t); return t; },
      clear: function () { list.forEach(function (t) { clearTimeout(t); clearInterval(t); }); list = []; }
    };
  }
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  var D = {};

  /* ---------- 1. Виртуальный пациент: OCEAN ---------- */
  var OCEAN = {
    ru: {
      axes: ["Открытость", "Добросовестность", "Экстраверсия", "Доброжелательность", "Нейротизм"],
      short: ["O", "C", "E", "A", "N"],
      presets: { calm: "Спокойный", anxious: "Тревожный", irritated: "Раздраженный" },
      doctor: "Врач",
      patient: "Пациент",
      qs: ["Что вас беспокоит?", "Когда это началось?", "Принимаете лекарства?"],
      cap: "Профиль меняет манеру ответа, а факты остаются теми же. Именно это мы проверяли промптами.",
      lead: "Подвигайте характеристики и задайте вопрос"
    },
    en: {
      axes: ["Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Neuroticism"],
      short: ["O", "C", "E", "A", "N"],
      presets: { calm: "Calm", anxious: "Anxious", irritated: "Irritated" },
      doctor: "Doctor",
      patient: "Patient",
      qs: ["What brings you here?", "When did it start?", "Are you taking any medicine?"],
      cap: "The profile changes the manner of the answer while the facts stay the same. This is what we tested with prompts.",
      lead: "Move the traits and ask a question"
    }
  };
  function patientReply(lang, q, p) {
    var O = p[0], C = p[1], E = p[2], A = p[3], N = p[4];
    var ru = lang === "ru";
    var base, extra = "", pre = "";
    var lvl = E <= 2 ? 0 : E === 3 ? 1 : 2;
    var T = {
      ru: [
        ["Болит в боку.", "Болит в правом боку, особенно после еды.", "Ох, доктор, у меня уже несколько дней болит в правом боку, особенно после еды, а еще всю неделю на работе завал, почти не высыпаюсь..."],
        ["Дня три назад.", "Дня три назад, в понедельник вечером.", "Это началось в понедельник вечером, мы как раз ужинали у друзей, там было жирное, ну и понеслось..."],
        ["Нет.", "Только обезболивающее, один раз.", "Да вот выпил обезболивающее вчера и еще пару раз чай с ромашкой, но толку мало, честно говоря..."]
      ],
      en: [
        ["Pain in my side.", "Pain in my right side, mostly after eating.", "Oh, doctor, my right side has been hurting for days, mostly after eating, and work has been crazy all week, I barely sleep..."],
        ["Three days ago.", "Three days ago, Monday evening.", "It started Monday evening, we were having dinner at friends, it was greasy food, and then it began..."],
        ["No.", "Only a painkiller, once.", "Well, I took a painkiller yesterday and some chamomile tea a couple of times, but it did not help much, honestly..."]
      ]
    }[lang];
    base = T[q][lvl];
    var add = {
      ru: [
        [" Боль тянущая, примерно шесть из десяти, началась в понедельник утром.", " Мне очень тревожно, вдруг это что-то серьезное?", " Я читал, что так бывает из-за питания, но не уверен.", "Я уже все рассказал медсестре. "],
        [" Точнее, около девяти вечера.", " С тех пор я почти не сплю, все думаю об этом.", " Может, дело в стрессе, а не в еде?", "Вы уже спрашивали. "],
        [" Одну таблетку вчера в 22:00.", " Боюсь, что я принял что-то не то.", " Еще пробовал травяной сбор, говорят, помогает.", "Зачем вам это знать? "]
      ],
      en: [
        [" The pain is dull, about six out of ten, it began Monday morning.", " I am very worried, what if it is something serious?", " I read it can come from diet, but I am not sure.", "I already told the nurse everything. "],
        [" To be exact, around nine in the evening.", " Since then I barely sleep, I keep thinking about it.", " Maybe it is stress and not food?", "You already asked that. "],
        [" One pill yesterday at 10 pm.", " I am afraid I took the wrong thing.", " I also tried an herbal mix, they say it helps.", "Why do you need to know? "]
      ]
    }[lang][q];
    if (C >= 4) extra += add[0];
    if (N >= 4) extra += add[1];
    if (O >= 4) extra += add[2];
    if (A <= 2) pre = add[3];
    return pre + base + extra;
  }
  D.patient = function (root, lang) {
    var L = OCEAN[lang], vals = [3, 3, 3, 3, 3], q = 0;
    var svg = s("svg", { viewBox: "-110 -110 220 220", class: "d-radar", role: "img", "aria-label": "OCEAN" });
    var grid = [1, 2, 3, 4, 5].map(function (r) {
      var pts = [0, 1, 2, 3, 4].map(function (i) { var a = -Math.PI / 2 + i * 2 * Math.PI / 5; return (Math.cos(a) * r * 18) + "," + (Math.sin(a) * r * 18); }).join(" ");
      return s("polygon", { points: pts, class: "d-grid-line" });
    });
    grid.forEach(function (g) { svg.appendChild(g); });
    var labels = [];
    for (var i = 0; i < 5; i++) {
      var a = -Math.PI / 2 + i * 2 * Math.PI / 5;
      svg.appendChild(s("line", { x1: 0, y1: 0, x2: Math.cos(a) * 90, y2: Math.sin(a) * 90, class: "d-grid-line" }));
      var t = s("text", { x: Math.cos(a) * 103, y: Math.sin(a) * 103 + 4, class: "d-radar-label", "text-anchor": "middle" });
      t.textContent = L.short[i];
      svg.appendChild(t);
    }
    var poly = s("polygon", { class: "d-radar-shape" });
    svg.appendChild(poly);
    function draw() {
      poly.setAttribute("points", vals.map(function (v, i) { var a = -Math.PI / 2 + i * 2 * Math.PI / 5; return (Math.cos(a) * v * 18) + "," + (Math.sin(a) * v * 18); }).join(" "));
    }
    var sliders = L.axes.map(function (name, i) {
      return slider(name, 1, 5, 1, 3, function (v) { vals[i] = v; draw(); say(); });
    });
    var bubbleD = h("div", { class: "d-bubble d-doc" });
    var bubbleP = h("div", { class: "d-bubble d-pat", "aria-live": "polite" });
    var chips = L.qs.map(function (text, i) {
      return h("button", { type: "button", class: "d-chip" + (i === 0 ? " on" : ""), onclick: function () { q = i; chips.forEach(function (c, k) { c.classList.toggle("on", k === i); }); say(); } }, text);
    });
    function say() {
      bubbleD.textContent = L.qs[q];
      bubbleP.textContent = patientReply(lang, q, vals);
    }
    function preset(p) { vals = p.slice(); sliders.forEach(function (sl, i) { sl.input.value = vals[i]; sl.out.textContent = vals[i]; }); draw(); say(); }
    var presets = [
      ["calm", [3, 4, 2, 5, 1]],
      ["anxious", [3, 3, 4, 3, 5]],
      ["irritated", [2, 2, 2, 1, 4]]
    ].map(function (p) { return h("button", { type: "button", class: "d-btn", onclick: function () { preset(p[1]); } }, L.presets[p[0]]); });
    root.appendChild(h("div", { class: "d-col" },
      h("div", { class: "d-ocean" }, svg, h("div", { class: "d-col tight" }, sliders.map(function (x) { return x.el; }))),
      h("div", { class: "d-row flexwrap" }, presets),
      h("p", { class: "d-hint", text: L.lead }),
      h("div", { class: "d-row flexwrap" }, chips),
      h("div", { class: "d-chat" },
        h("div", { class: "d-who", text: L.doctor }), bubbleD,
        h("div", { class: "d-who right", text: L.patient }), bubbleP),
      h("p", { class: "d-cap", text: L.cap })));
    draw(); say();
    return function () {};
  };

  /* ---------- 2. Тренажер диспетчера ---------- */
  var DISP = {
    ru: {
      cards: [
        { text: "Из окна третьего этажа идет дым, слышны крики.", addr: "ул. Лесная, 12", accept: true, svc: ["fire", "amb"] },
        { text: "Мужчина упал на остановке и не встает, дышит.", addr: "пр. Мира, 40", accept: true, svc: ["amb"] },
        { text: "В подъезде сильный запах газа.", addr: "ул. Речная, 7", accept: true, svc: ["gas", "fire"] },
        { text: "Абонент ошибся номером и спрашивает про тариф связи.", addr: "не указан", accept: false, svc: [] }
      ],
      svcs: { fire: "Пожарная", amb: "Скорая", pol: "Полиция", gas: "Газовая служба" },
      title: "Карточка из системы 112",
      accept: "Принята",
      reject: "Не принята",
      send: "Отправить бригады",
      status: ["Принята", "Выезд", "Прибыли", "Работают", "Завершено"],
      statusLead: "Отметьте этапы реагирования. Этапы идут только вперед.",
      next: "Новая карточка",
      verdict: "Оценка по правилам",
      rules: ["Решение принять или отклонить", "Нужные службы", "Лишние службы", "Скорость реакции", "Этапы реагирования"],
      pts: " б.",
      hint: "Решите, принимать ли вызов, выберите службы и пройдите этапы. Время идет.",
      reaction: "с на решение",
      total: "Итого"
    },
    en: {
      cards: [
        { text: "Smoke is coming from a third floor window, screams are heard.", addr: "12 Lesnaya St", accept: true, svc: ["fire", "amb"] },
        { text: "A man fell at a bus stop and does not get up, he is breathing.", addr: "40 Mira Ave", accept: true, svc: ["amb"] },
        { text: "A strong smell of gas in the stairwell.", addr: "7 Rechnaya St", accept: true, svc: ["gas", "fire"] },
        { text: "The caller dialed the wrong number and asks about a phone tariff.", addr: "not given", accept: false, svc: [] }
      ],
      svcs: { fire: "Fire", amb: "Ambulance", pol: "Police", gas: "Gas service" },
      title: "Card from the 112 system",
      accept: "Accepted",
      reject: "Rejected",
      send: "Send crews",
      status: ["Accepted", "En route", "Arrived", "Working", "Completed"],
      statusLead: "Mark the response stages. Stages only go forward.",
      next: "New card",
      verdict: "Rule-based grade",
      rules: ["Accept or reject decision", "Required services", "Extra services", "Reaction speed", "Response stages"],
      pts: " pts",
      hint: "Decide whether to accept the call, pick services and go through the stages. The clock is ticking.",
      reaction: "s to decide",
      total: "Total"
    }
  };
  D.dispatcher = function (root, lang) {
    var L = DISP[lang], T = timers(), idx = 0, started, secs = 0, tick;
    var wrap = h("div", { class: "d-disp" });
    root.appendChild(wrap);
    function newCard() {
      var c = L.cards[idx % L.cards.length]; idx++;
      var chosen = {}, decided = null, reactT = 0, stage = -1, skipped = false;
      secs = 0; clearInterval(tick);
      var timer = h("span", { class: "d-timer", text: "00:00" });
      tick = setInterval(function () { secs++; timer.textContent = "00:" + String(secs).padStart(2, "0"); }, 1000);
      T.every(function () {}, 99999);
      wrap.innerHTML = "";
      var card = h("div", { class: "d-incident" },
        h("div", { class: "d-incident-top" }, h("strong", { text: L.title }), timer),
        h("p", { class: "d-incident-text", text: c.text }),
        h("p", { class: "d-incident-addr", text: c.addr }));
      var stepBox = h("div", { class: "d-step" });
      wrap.appendChild(card); wrap.appendChild(stepBox); wrap.appendChild(h("p", { class: "d-hint", text: L.hint }));
      function decisionUI() {
        stepBox.innerHTML = "";
        stepBox.appendChild(h("div", { class: "d-row" },
          h("button", { type: "button", class: "d-btn ok", onclick: function () { decide(true); } }, L.accept),
          h("button", { type: "button", class: "d-btn bad", onclick: function () { decide(false); } }, L.reject)));
      }
      function decide(a) {
        decided = a; reactT = secs;
        if (!a) return finish();
        stepBox.innerHTML = "";
        var boxes = Object.keys(L.svcs).map(function (k) {
          var cb = h("input", { type: "checkbox" });
          cb.addEventListener("change", function () { chosen[k] = cb.checked; });
          return h("label", { class: "d-check" }, cb, h("span", { text: L.svcs[k] }));
        });
        stepBox.appendChild(h("div", { class: "d-row flexwrap" }, boxes));
        stepBox.appendChild(h("button", { type: "button", class: "d-btn primary", onclick: statusUI }, L.send));
      }
      function statusUI() {
        stepBox.innerHTML = "";
        stepBox.appendChild(h("p", { class: "d-hint", text: L.statusLead }));
        var btns = L.status.map(function (name, i) {
          var b = h("button", { type: "button", class: "d-btn step", onclick: function () {
            if (i <= stage) return;
            if (i > stage + 1) skipped = true;
            stage = i;
            btns.forEach(function (x, k) { x.classList.toggle("done", k <= stage); });
            if (i === L.status.length - 1) T.later(finish, 350);
          } }, name);
          return b;
        });
        stepBox.appendChild(h("div", { class: "d-row flexwrap" }, btns));
      }
      function finish() {
        clearInterval(tick);
        var rows = [];
        var okDec = decided === c.accept;
        rows.push([L.rules[0], okDec ? 30 : 0, 30]);
        var need = c.svc, got = Object.keys(chosen).filter(function (k) { return chosen[k]; });
        var hit = need.filter(function (k) { return got.indexOf(k) >= 0; }).length;
        var extra = got.filter(function (k) { return need.indexOf(k) < 0; }).length;
        var svcPts = need.length ? Math.round(30 * hit / need.length) : (c.accept ? 0 : 30);
        rows.push([L.rules[1], decided ? svcPts : (c.accept ? 0 : 30), 30]);
        rows.push([L.rules[2], decided ? -10 * extra : 0, 0]);
        var spd = reactT <= 8 ? 20 : reactT <= 20 ? 10 : 0;
        rows.push([L.rules[3] + " (" + reactT + " " + L.reaction + ")", spd, 20]);
        var stagePts = !c.accept ? 20 : (stage === L.status.length - 1 ? (skipped ? 10 : 20) : 0);
        rows.push([L.rules[4], stagePts, 20]);
        var total = Math.max(0, rows.reduce(function (a, r) { return a + r[1]; }, 0));
        stepBox.innerHTML = "";
        stepBox.appendChild(h("div", { class: "d-verdict" },
          h("strong", { text: L.verdict }),
          rows.map(function (r) {
            var cls = r[1] >= r[2] && r[2] > 0 ? "ok" : (r[1] < 0 || (r[1] === 0 && r[2] > 0) ? "bad" : "mid");
            return h("div", { class: "d-vrow " + cls }, h("span", { text: r[0] }), h("b", { text: (r[1] > 0 ? "+" : "") + r[1] + L.pts }));
          }),
          h("div", { class: "d-vrow total" }, h("span", { text: L.total }), h("b", { text: total + " / 100" })),
          h("button", { type: "button", class: "d-btn primary", onclick: newCard }, L.next)));
      }
      decisionUI();
    }
    newCard();
    return function () { clearInterval(tick); T.clear(); };
  };

  /* ---------- 3. Альфа. Первый оборот ---------- */
  var ALFA = {
    ru: {
      tabs: ["Радар разрыва", "Что мы узнали"],
      rev: "Выручка в день, тыс. руб.", bal: "Остаток сейчас, тыс. руб.", tax: "Откладывать на налоги, %",
      obl: [["Аренда", 2, 35], ["Закупка", 5, 70], ["Налоги", 9, 28], ["Зарплата", 12, 90]],
      day: "день", ok: "На 14 дней вперед разрывов нет.", free: "Свободно после обязательных платежей: ",
      gap: function (d, x) { return "На день " + d + " не хватит " + x + " руб."; },
      next: "Следующий безопасный шаг",
      opts: ["Перенести платеж", "Ускорить оплату от клиента", "Резерв", "Факторинг, если есть подтвержденная дебиторка"],
      split: "Как раскладывается выручка дня", splitN: ["Налоги", "Закупки", "Зарплата", "Свободно"],
      survey: "Какой банк используют для бизнеса", sample: "В нашей выборке, n=84. Это не доля рынка.",
      banks: [["Т-Банк", 38], ["Точка", 27], ["Сбер", 19], ["Альфа", 4]],
      learned: "Главное: 0 из 13 молодых предпринимателей в интервью ведут бизнес в Альфе. Банк выбирают по доверию и рекомендации, а не по тарифу."
    },
    en: {
      tabs: ["Gap radar", "What we learned"],
      rev: "Daily revenue, k RUB", bal: "Balance now, k RUB", tax: "Set aside for taxes, %",
      obl: [["Rent", 2, 35], ["Stock", 5, 70], ["Taxes", 9, 28], ["Payroll", 12, 90]],
      day: "day", ok: "No gaps in the next 14 days.", free: "Free after required payments: ",
      gap: function (d, x) { return "On day " + d + " you are short by " + x + " RUB."; },
      next: "Next safe step",
      opts: ["Move a payment", "Speed up client payment", "Reserve", "Factoring, if receivables are confirmed"],
      split: "How the day's revenue is split", splitN: ["Taxes", "Stock", "Payroll", "Free"],
      survey: "Which bank is used for business", sample: "In our sample, n=84. Not a market share.",
      banks: [["T-Bank", 38], ["Tochka", 27], ["Sber", 19], ["Alfa", 4]],
      learned: "Key point: 0 of 13 young entrepreneurs in the interviews bank with Alfa. They choose a bank by trust and recommendation, not by tariff."
    }
  };
  D.alfa = function (root, lang) {
    var L = ALFA[lang], rev = 22, bal = 80, tax = 6, tab = 0;
    var body = h("div", { class: "d-col" });
    var tabs = h("div", { class: "d-tabs", role: "tablist" }, L.tabs.map(function (t, i) {
      return h("button", { type: "button", role: "tab", class: "d-tab" + (i === 0 ? " on" : ""), onclick: function () { tab = i; Array.prototype.forEach.call(tabs.children, function (b, k) { b.classList.toggle("on", k === i); }); render(); } }, t);
    }));
    root.appendChild(tabs); root.appendChild(body);
    function render() { body.innerHTML = ""; tab === 0 ? radar() : survey(); }
    function radar() {
      var chart = h("div", { class: "d-chart" }), status = h("div", { class: "d-status", "aria-live": "polite" }), split = h("div", { class: "d-split-bar" });
      var s1 = slider(L.rev, 5, 60, 1, rev, function (v) { rev = v; upd(); });
      var s2 = slider(L.bal, 0, 300, 5, bal, function (v) { bal = v; upd(); });
      var s3 = slider(L.tax, 0, 25, 1, tax, function (v) { tax = v; upd(); });
      body.appendChild(h("div", { class: "d-sliders" }, s1.el, s2.el, s3.el));
      body.appendChild(chart); body.appendChild(status);
      body.appendChild(h("p", { class: "d-hint", text: L.split })); body.appendChild(split);
      function upd() {
        var pts = [], b = bal, firstNeg = null, minB = Infinity;
        for (var d = 0; d <= 14; d++) {
          if (d > 0) { b += rev; L.obl.forEach(function (o) { if (o[1] === d) b -= o[2]; }); }
          pts.push(b); if (b < 0 && firstNeg === null) firstNeg = d; minB = Math.min(minB, b);
        }
        var W = 520, H = 170, pad = 24, lo = Math.min(0, minB) - 10, hi = Math.max.apply(null, pts) + 10;
        function X(i) { return pad + i * (W - 2 * pad) / 14; } function Y(v) { return H - pad - (v - lo) * (H - 2 * pad) / (hi - lo); }
        var svg = s("svg", { viewBox: "0 0 " + W + " " + H, class: "d-linechart", role: "img", "aria-label": "14-day balance" });
        svg.appendChild(s("line", { x1: pad, x2: W - pad, y1: Y(0), y2: Y(0), class: "d-zero" }));
        if (firstNeg !== null) svg.appendChild(s("rect", { x: X(firstNeg) - 6, y: pad - 8, width: (W - pad) - X(firstNeg) + 6, height: H - 2 * pad + 16, class: "d-danger-zone" }));
        svg.appendChild(s("polyline", { points: pts.map(function (v, i) { return X(i) + "," + Y(v); }).join(" "), class: "d-line" }));
        L.obl.forEach(function (o) {
          svg.appendChild(s("circle", { cx: X(o[1]), cy: Y(pts[o[1]]), r: 4, class: "d-dot" }));
          var t = s("text", { x: X(o[1]), y: H - 6, "text-anchor": "middle", class: "d-axis" }); t.textContent = o[0]; svg.appendChild(t);
        });
        chart.innerHTML = ""; chart.appendChild(svg);
        status.className = "d-status " + (firstNeg === null ? "ok" : "bad");
        status.innerHTML = "";
        if (firstNeg === null) status.appendChild(h("span", { text: L.ok + " " + L.free + fmt(Math.max(0, minB)) + " " + (lang === "ru" ? "тыс." : "k") }));
        else {
          status.appendChild(h("strong", { text: L.gap(firstNeg, fmt(-minB * 1000)) }));
          status.appendChild(h("div", { class: "d-row flexwrap" }, [h("span", { class: "d-hint", text: L.next + ":" })].concat(L.opts.map(function (o) { return h("span", { class: "d-pill", text: o }); }))));
        }
        var parts = [tax, 35, 25]; var free = Math.max(0, 100 - parts[0] - parts[1] - parts[2]);
        var vals = [parts[0], parts[1], parts[2], free];
        split.innerHTML = "";
        vals.forEach(function (v, i) { split.appendChild(h("div", { class: "seg s" + i, style: "flex:" + Math.max(v, 0.001), title: L.splitN[i] }, v >= 8 ? L.splitN[i] + " " + v + "%" : "")); });
      }
      upd();
    }
    function survey() {
      body.appendChild(h("p", { class: "d-hint", text: L.survey }));
      body.appendChild(h("div", { class: "d-bars" }, L.banks.map(function (b, i) {
        return h("div", { class: "d-bar" }, h("span", { class: "d-bar-name", text: b[0] }), h("div", { class: "d-bar-track" }, h("div", { class: "d-bar-fill" + (i === 3 ? " accent" : ""), style: "width:" + (b[1] / 40 * 100) + "%" })), h("b", { text: b[1] + "%" }));
      })));
      body.appendChild(h("p", { class: "d-cap", text: L.sample }));
      body.appendChild(h("p", { class: "d-callout", text: L.learned }));
    }
    render();
    return function () {};
  };

  /* ---------- 4. KIRODEN: бот ---------- */
  var KIR = {
    ru: {
      bot: "Бот поддержки", mgr: "Очередь менеджера",
      hello: "Здравствуйте! Чем помочь?",
      menu: ["Инструкции", "Поддержка", "Гарантия", "Подарок за отзыв"],
      pick: "Выберите товар:", prods: ["Блендер", "Вакууматор"],
      manual: function (p) { return "Инструкция к товару «" + p + "»: PDF, фото и видео."; },
      sup: "Опишите проблему. Менеджер ответит, а если не успеет, ему придет напоминание.",
      war: "Гарантия 12 месяцев. Для обращения пришлите номер заказа.",
      sub: "Для подарка подпишитесь на официальный канал.", subBtn: "Я подписался", checked: "Подписка подтверждена. Пришлите скриншот отзыва.", shot: "Прикрепить скриншот",
      done: "Заявка принята. Реквизиты и скриншот удалим после обработки.", again: "Подать еще раз",
      dupe: "По этому заказу подарок уже выдан. Повторная заявка заблокирована.",
      ticket: "Заявка на подарок", ticketSup: "Обращение по товару", empty: "Пока пусто",
      remind: "Напоминание через 30 минут, если нет ответа", back: "В меню", hint: "Пройдите сценарий подарка за отзыв, а потом попробуйте подать заявку второй раз."
    },
    en: {
      bot: "Support bot", mgr: "Manager queue",
      hello: "Hello! How can I help?",
      menu: ["Manuals", "Support", "Warranty", "Gift for a review"],
      pick: "Choose a product:", prods: ["Blender", "Vacuum sealer"],
      manual: function (p) { return "Manual for \"" + p + "\": PDF, photos and video."; },
      sup: "Describe the problem. A manager will reply, and if they are late they get a reminder.",
      war: "12 months warranty. Send your order number to make a claim.",
      sub: "To get a gift, subscribe to the official channel.", subBtn: "I subscribed", checked: "Subscription confirmed. Send a screenshot of your review.", shot: "Attach screenshot",
      done: "Request accepted. We will delete your details and screenshot after processing.", again: "Submit again",
      dupe: "A gift for this order was already issued. A second claim is blocked.",
      ticket: "Gift request", ticketSup: "Product request", empty: "Empty for now",
      remind: "Reminder in 30 minutes if no reply", back: "Menu", hint: "Go through the gift scenario, then try to submit a second claim."
    }
  };
  D.kiroden = function (root, lang) {
    var L = KIR[lang], gifted = false;
    var msgs = h("div", { class: "d-tg", "aria-live": "polite" }), keys = h("div", { class: "d-keys" }), queue = h("div", { class: "d-queue" });
    var tickets = [];
    function say(t, me) { msgs.appendChild(h("div", { class: "d-msg" + (me ? " me" : ""), text: t })); msgs.scrollTop = msgs.scrollHeight; }
    function setKeys(arr) { keys.innerHTML = ""; arr.forEach(function (k) { keys.appendChild(h("button", { type: "button", class: "d-key", onclick: function () { say(k[0], true); k[1](); } }, k[0])); }); }
    function renderQueue() {
      queue.innerHTML = "";
      if (!tickets.length) queue.appendChild(h("p", { class: "d-hint", text: L.empty }));
      tickets.forEach(function (t) { queue.appendChild(h("div", { class: "d-ticket" }, h("b", { text: t }), h("span", { class: "d-hint", text: L.remind }))); });
    }
    function menu() { setKeys(L.menu.map(function (m, i) { return [m, [manual, support, warranty, gift][i]]; })); }
    function manual() { say(L.pick); setKeys(L.prods.map(function (p) { return [p, function () { say(L.manual(p)); menu(); }]; })); }
    function support() { say(L.sup); tickets.push(L.ticketSup + " #" + (101 + tickets.length)); renderQueue(); menu(); }
    function warranty() { say(L.war); menu(); }
    function gift() {
      if (gifted) { say(L.dupe); setKeys([[L.back, menu]]); return; }
      say(L.sub); setKeys([[L.subBtn, function () { say(L.checked); setKeys([[L.shot, function () { gifted = true; say(L.done); tickets.push(L.ticket + " #" + (101 + tickets.length)); renderQueue(); setKeys([[L.again, gift], [L.back, menu]]); }]]); }]]);
    }
    root.appendChild(h("div", { class: "d-split" },
      h("div", { class: "d-phone" }, h("div", { class: "d-phone-bar", text: L.bot }), msgs, keys),
      h("div", { class: "d-col" }, h("strong", { text: L.mgr }), queue, h("p", { class: "d-cap", text: L.hint }))));
    say(L.hello); menu(); renderQueue();
    return function () {};
  };

  /* ---------- 5. Onboarding ---------- */
  var ONB = {
    ru: {
      steps: ["Анкета", "Проверка", "Заявка в рабочей системе", "Ответственный", "Доступ выдан"],
      send: "Отправить анкету", reset: "Сначала", disk: "Облачный диск доступен", nda: "NDA в приватную папку",
      queue: "Безопасная очередь", queued: "Диск недоступен: файл ждет в очереди", sent: "Файл отправлен на диск", retry: "Диск вернулся: повторная отправка",
      log: "Журнал", hint: "Отключите диск и отправьте анкету: файл не потеряется.",
      l: ["Анкета получена", "Проверка пройдена", "Заявка создана по API", "Назначен ответственный", "Доступ выдан, статус проверен"]
    },
    en: {
      steps: ["Form", "Check", "Request in the work system", "Responsible person", "Access granted"],
      send: "Submit form", reset: "Reset", disk: "Cloud disk is available", nda: "NDA to a private folder",
      queue: "Safe queue", queued: "Disk unavailable: the file waits in the queue", sent: "File sent to the disk", retry: "Disk is back: retrying",
      log: "Log", hint: "Turn the disk off and submit the form: the file is not lost.",
      l: ["Form received", "Check passed", "Request created via API", "Responsible assigned", "Access granted, status verified"]
    }
  };
  D.onboarding = function (root, lang) {
    var L = ONB[lang], T = timers(), diskOn = true, queued = false, running = false;
    var stepEls = L.steps.map(function (n) { return h("div", { class: "d-pstep" }, h("span", { class: "d-pdot" }), h("span", { text: n })); });
    var logEl = h("div", { class: "d-log", "aria-live": "polite" });
    var ndaEl = h("div", { class: "d-nda" }, h("strong", { text: L.nda }), h("span", { class: "d-hint", text: "-" }));
    var qEl = h("div", { class: "d-qbadge", text: L.queue + ": 0" });
    function log(t) { logEl.appendChild(h("div", { text: t })); logEl.scrollTop = logEl.scrollHeight; }
    function setNda(t, cls) { ndaEl.lastChild.textContent = t; ndaEl.className = "d-nda " + (cls || ""); }
    function updQ() { qEl.textContent = L.queue + ": " + (queued ? 1 : 0); qEl.classList.toggle("warn", queued); }
    var toggle = h("input", { type: "checkbox", checked: true, role: "switch" });
    toggle.addEventListener("change", function () {
      diskOn = toggle.checked;
      if (diskOn && queued) { log(L.retry); T.later(function () { queued = false; updQ(); setNda(L.sent, "ok"); log(L.sent); }, 700); }
    });
    var go = h("button", { type: "button", class: "d-btn primary", onclick: run }, L.send);
    var reset = h("button", { type: "button", class: "d-btn", onclick: function () { T.clear(); running = false; stepEls.forEach(function (e) { e.className = "d-pstep"; }); logEl.innerHTML = ""; queued = false; updQ(); setNda("-", ""); go.disabled = false; } }, L.reset);
    function run() {
      if (running) return; running = true; go.disabled = true;
      stepEls.forEach(function (e) { e.className = "d-pstep"; });
      logEl.innerHTML = "";
      L.steps.forEach(function (_, i) {
        T.later(function () {
          stepEls.forEach(function (e, k) { e.classList.toggle("done", k < i); e.classList.toggle("now", k === i); });
          log(L.l[i]);
          if (i === 0) {
            if (diskOn) { setNda(L.sent, "ok"); log(L.sent); } else { queued = true; updQ(); setNda(L.queued, "warn"); log(L.queued); }
          }
          if (i === L.steps.length - 1) { stepEls[i].classList.remove("now"); stepEls[i].classList.add("done"); running = false; go.disabled = false; }
        }, 600 * (i + 1));
      });
    }
    root.appendChild(h("div", { class: "d-onb" },
      h("div", { class: "d-pipe" }, stepEls),
      h("div", { class: "d-row flexwrap" }, go, reset, h("label", { class: "d-switch" }, toggle, h("span", { text: L.disk }))),
      h("div", { class: "d-row flexwrap" }, ndaEl, qEl),
      h("strong", { text: L.log }), logEl,
      h("p", { class: "d-cap", text: L.hint })));
    return function () { T.clear(); };
  };

  /* ---------- 6. Селлеры: юнит-экономика ---------- */
  var SEL = {
    ru: { fee: "Чек внедрения, руб.", sub: "Абонплата в месяц, руб.", ret: "Остаются на сопровождении, %", mon: "Средний срок, мес.", n: "Новых клиентов в месяц", ltv: "Выручка с одного клиента", year: "Выручка за 12 месяцев", chart: "Выручка по месяцам", note: "Прогноз по допущениям, не факт продаж. Это выручка, не прибыль.", m: "мес", rub: " руб." },
    en: { fee: "Implementation fee, RUB", sub: "Monthly subscription, RUB", ret: "Stay on support, %", mon: "Average months", n: "New clients per month", ltv: "Revenue per client", year: "12 month revenue", chart: "Revenue by month", note: "A forecast under assumptions, not actual sales. This is revenue, not profit.", m: "mo", rub: " RUB" }
  };
  D.sellers = function (root, lang) {
    var L = SEL[lang], v = { fee: 40000, sub: 10000, ret: 60, mon: 9, n: 2.6 };
    var ltv = h("b"), year = h("b"), chart = h("div", { class: "d-months" });
    var sl = [
      slider(L.fee, 10000, 100000, 5000, v.fee, function (x) { v.fee = x; upd(); }),
      slider(L.sub, 3000, 30000, 1000, v.sub, function (x) { v.sub = x; upd(); }),
      slider(L.ret, 0, 100, 5, v.ret, function (x) { v.ret = x; upd(); }, "%"),
      slider(L.mon, 1, 18, 1, v.mon, function (x) { v.mon = x; upd(); }),
      slider(L.n, 1, 10, 0.1, v.n, function (x) { v.n = x; upd(); })
    ];
    function upd() {
      var per = v.fee + v.ret / 100 * v.sub * v.mon;
      ltv.textContent = fmt(per) + L.rub;
      var months = [], total = 0;
      for (var m = 1; m <= 12; m++) { var r = v.n * v.fee + v.n * (v.ret / 100) * v.sub * Math.min(m - 1, v.mon); months.push(r); total += r; }
      year.textContent = fmt(total) + L.rub;
      var mx = Math.max.apply(null, months); chart.innerHTML = "";
      months.forEach(function (r, i) { chart.appendChild(h("div", { class: "d-mcol", title: fmt(r) + L.rub }, h("div", { class: "d-mbar", style: "height:" + Math.max(4, r / mx * 100) + "%" }), h("span", { text: i + 1 }))); });
    }
    root.appendChild(h("div", { class: "d-split" },
      h("div", { class: "d-col" }, sl.map(function (x) { return x.el; })),
      h("div", { class: "d-col" },
        h("div", { class: "d-stat" }, h("span", { text: L.ltv }), ltv),
        h("div", { class: "d-stat" }, h("span", { text: L.year }), year),
        h("p", { class: "d-hint", text: L.chart + " (" + L.m + ")" }), chart,
        h("p", { class: "d-cap", text: L.note }))));
    upd();
    return function () {};
  };

  /* ---------- 7. AI PM: граф агентов ---------- */
  var AIPM = {
    ru: {
      ideas: [
        { n: "Аренда самокатов в кампусе", opt: "Понятная аудитория и частые поездки между корпусами.", pes: "Сезонность, обслуживание парка, ответственность за аварии.", fact: "В городе уже есть крупные сервисы, но кампус можно закрыть договором.", plan: "MVP: приложение и 20 самокатов на одной территории, 8 недель, 3 человека.", verdict: "Жизнеспособно при договоре с кампусом" },
        { n: "Бот для записи в мастерскую", opt: "Быстрый запуск, низкая цена, понятная выгода мастерской.", pes: "Много аналогов, клиент платит неохотно.", fact: "Средний чек подписки на рынке небольшой, нужен сильный канал продаж.", plan: "MVP: Telegram-бот и календарь за 3 недели, 1-2 разработчика.", verdict: "Слабая ниша, нужен канал продаж" }
      ],
      nodes: ["Скорер", "Оптимист", "Критик", "Фактолог", "Синтезатор", "Техгруппа"],
      run: "Запустить", pick: "Заявка:", out: "Результаты агентов", verdict: "Вердикт", plan: "Технический план", hint: "Агенты работают по графу: сначала вопросы, потом три параллельных взгляда, затем сводка и план."
    },
    en: {
      ideas: [
        { n: "Scooter rental on campus", opt: "Clear audience and frequent trips between buildings.", pes: "Seasonality, fleet maintenance, liability for accidents.", fact: "Big services already exist in the city, but a campus can be locked by a contract.", plan: "MVP: an app and 20 scooters on one territory, 8 weeks, 3 people.", verdict: "Viable with a campus contract" },
        { n: "A bot for workshop booking", opt: "Fast launch, low price, clear value for the workshop.", pes: "Many analogs, customers pay reluctantly.", fact: "Average subscription price in the market is small, a strong sales channel is needed.", plan: "MVP: a Telegram bot and a calendar in 3 weeks, 1-2 developers.", verdict: "Weak niche, needs a sales channel" }
      ],
      nodes: ["Scorer", "Optimist", "Critic", "Fact checker", "Synthesizer", "Tech group"],
      run: "Run", pick: "Request:", out: "Agent results", verdict: "Verdict", plan: "Technical plan", hint: "Agents follow a graph: questions first, then three parallel views, then a summary and a plan."
    }
  };
  D.aipm = function (root, lang) {
    var L = AIPM[lang], T = timers(), cur = 0;
    var pos = [[50, 80], [205, 25], [205, 80], [205, 135], [355, 80], [490, 80]];
    var edges = [[0, 1], [0, 2], [0, 3], [1, 4], [2, 4], [3, 4], [4, 5]];
    var svg = s("svg", { viewBox: "0 0 540 160", class: "d-graph", role: "img", "aria-label": "agents graph" });
    edges.forEach(function (e) { svg.appendChild(s("line", { x1: pos[e[0]][0] + 46, y1: pos[e[0]][1], x2: pos[e[1]][0] - 46, y2: pos[e[1]][1], class: "d-edge", "data-e": e.join("-") })); });
    var nodes = L.nodes.map(function (n, i) {
      var g = s("g", { class: "d-node", transform: "translate(" + pos[i][0] + "," + pos[i][1] + ")" }, s("rect", { x: -46, y: -17, width: 92, height: 34, rx: 9 }));
      var t = s("text", { "text-anchor": "middle", y: 4 }); t.textContent = n; g.appendChild(t); svg.appendChild(g); return g;
    });
    var out = h("div", { class: "d-out", "aria-live": "polite" });
    var sel = h("select", { class: "d-select", "aria-label": L.pick }, L.ideas.map(function (x, i) { return h("option", { value: i, text: x.n }); }));
    sel.addEventListener("change", function () { cur = +sel.value; });
    function light(idxs, on) { idxs.forEach(function (i) { nodes[i].classList.toggle("on", on); }); }
    function card(title, text) { return h("div", { class: "d-ocard" }, h("b", { text: title }), h("span", { text: text })); }
    function run() {
      T.clear(); out.innerHTML = ""; nodes.forEach(function (n) { n.classList.remove("on", "done"); });
      var x = L.ideas[cur];
      var seq = [
        [[0], function () { out.appendChild(card(L.nodes[0], lang === "ru" ? "Кто целевая аудитория? Какая главная боль? Как проект заработает?" : "Who is the audience? What is the main pain? How will the project earn?")); }],
        [[1, 2, 3], function () { out.appendChild(card(L.nodes[1], x.opt)); out.appendChild(card(L.nodes[2], x.pes)); out.appendChild(card(L.nodes[3], x.fact)); }],
        [[4], function () { out.appendChild(card(L.verdict, x.verdict)); }],
        [[5], function () { out.appendChild(card(L.plan, x.plan)); }]
      ];
      seq.forEach(function (st, k) {
        T.later(function () { nodes.forEach(function (n) { if (n.classList.contains("on")) { n.classList.remove("on"); n.classList.add("done"); } }); light(st[0], true); st[1](); }, 700 * (k + 1) * (reduce ? 0.2 : 1));
      });
      T.later(function () { nodes.forEach(function (n) { n.classList.remove("on"); n.classList.add("done"); }); }, 700 * 5);
    }
    root.appendChild(h("div", { class: "d-col" }, h("div", { class: "d-row flexwrap" }, h("label", { class: "d-hint" }, L.pick + " "), sel, h("button", { type: "button", class: "d-btn primary", onclick: run }, L.run)), svg, h("strong", { text: L.out }), out, h("p", { class: "d-cap", text: L.hint })));
    return function () { T.clear(); };
  };

  /* ---------- 8. Webots: FSM робот ---------- */
  var WEB = {
    ru: { start: "Старт", home: "Домой", reset: "Сброс", states: { EXPLORE: "Исследование", AVOID: "Объезд", RETURN: "Возврат", STOP: "Остановка" }, odo: "Одометрия", hint: "Робот сам едет по комнате и объезжает препятствия. Нажмите «Домой», и он вернется к точке (0, 0) по одометрии." },
    en: { start: "Start", home: "Home", reset: "Reset", states: { EXPLORE: "Explore", AVOID: "Avoid", RETURN: "Return", STOP: "Stop" }, odo: "Odometry", hint: "The robot drives around and avoids obstacles. Press Home and it returns to (0, 0) using odometry." }
  };
  D.webots = function (root, lang) {
    var L = WEB[lang], W = 520, H = 320;
    var cv = h("canvas", { width: W, height: H, class: "d-canvas", role: "img", "aria-label": "robot simulation" });
    var ctx = cv.getContext("2d");
    var walls = [[0, 0, W, 8], [0, H - 8, W, 8], [0, 0, 8, H], [W - 8, 0, 8, H]];
    var obst = [[150, 70, 40, 110], [300, 190, 120, 34], [380, 50, 34, 90]];
    var rects = walls.concat(obst);
    var home = { x: 60, y: 260 };
    var R, state, trail, raf, running, t0;
    function reset() { R = { x: home.x, y: home.y, a: -0.6 }; state = "STOP"; trail = [[R.x, R.y]]; running = false; t0 = 0; setBadge(); draw(); }
    function hit(x, y) { for (var i = 0; i < rects.length; i++) { var r = rects[i]; if (x > r[0] && x < r[0] + r[2] && y > r[1] && y < r[1] + r[3]) return true; } return false; }
    function ray(a, max) { for (var d = 0; d < max; d += 3) { if (hit(R.x + Math.cos(R.a + a) * d, R.y + Math.sin(R.a + a) * d)) return d; } return max; }
    var badges = {}, badgeBox = h("div", { class: "d-fsm" }, ["EXPLORE", "AVOID", "RETURN", "STOP"].map(function (k) { return badges[k] = h("span", { class: "d-state", text: L.states[k] }); }));
    var odo = h("code", { class: "d-odo" });
    function setBadge() { Object.keys(badges).forEach(function (k) { badges[k].classList.toggle("on", k === state); }); }
    function setState(n) { if (state !== n) { state = n; setBadge(); } }
    var turnDir = 1;
    function step() {
      var f = ray(0, 40), l = ray(-0.7, 40), r = ray(0.7, 40);
      var speed = 1.6;
      if (state === "EXPLORE" || state === "RETURN" || state === "AVOID") {
        if (f < 24 || l < 14 || r < 14) { if (state !== "AVOID") { turnDir = l > r ? -1 : 1; } setState("AVOID"); R.a += 0.09 * turnDir; speed = 0.5; }
        else if (state === "AVOID") { setState(returning ? "RETURN" : "EXPLORE"); }
        if (state === "EXPLORE") { R.a += Math.sin(performance.now() / 700) * 0.012; }
        if (state === "RETURN") {
          var dx = home.x - R.x, dy = home.y - R.y, dist = Math.hypot(dx, dy), want = Math.atan2(dy, dx);
          var diff = Math.atan2(Math.sin(want - R.a), Math.cos(want - R.a));
          R.a += Math.max(-0.07, Math.min(0.07, diff * 0.15));
          if (dist < 10) { setState("STOP"); running = false; }
        }
      }
      if (state !== "STOP") {
        var nx = R.x + Math.cos(R.a) * speed, ny = R.y + Math.sin(R.a) * speed;
        if (!hit(nx, ny)) { R.x = nx; R.y = ny; } else { R.a += 0.2; }
        var last = trail[trail.length - 1];
        if (Math.hypot(R.x - last[0], R.y - last[1]) > 4) trail.push([R.x, R.y]);
        if (trail.length > 600) trail.shift();
      }
    }
    var returning = false;
    function css(n) { return getComputedStyle(root).getPropertyValue(n).trim() || "#2F6FE4"; }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = css("--d-bg"); ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = css("--d-wall"); rects.forEach(function (r) { ctx.fillRect(r[0], r[1], r[2], r[3]); });
      ctx.strokeStyle = css("--d-trail"); ctx.lineWidth = 2; ctx.beginPath();
      trail.forEach(function (p, i) { i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]); }); ctx.stroke();
      ctx.fillStyle = css("--d-home"); ctx.beginPath(); ctx.arc(home.x, home.y, 9, 0, 7); ctx.fill();
      ctx.save(); ctx.translate(R.x, R.y); ctx.rotate(R.a);
      ctx.fillStyle = css("--d-robot"); ctx.beginPath(); ctx.arc(0, 0, 9, 0, 7); ctx.fill();
      ctx.fillStyle = "#fff"; ctx.fillRect(3, -2, 8, 4); ctx.restore();
      odo.textContent = L.odo + ": x=" + Math.round(R.x - home.x) + " y=" + Math.round(home.y - R.y);
    }
    function loop() { if (running) { for (var i = 0; i < 2; i++) step(); } draw(); raf = requestAnimationFrame(loop); }
    var bStart = h("button", { type: "button", class: "d-btn primary", onclick: function () { returning = false; running = true; setState("EXPLORE"); } }, L.start);
    var bHome = h("button", { type: "button", class: "d-btn", onclick: function () { if (state === "STOP" && !running) return; returning = true; running = true; setState("RETURN"); } }, L.home);
    var bReset = h("button", { type: "button", class: "d-btn", onclick: function () { returning = false; reset(); } }, L.reset);
    root.appendChild(h("div", { class: "d-col" }, h("div", { class: "d-row flexwrap" }, bStart, bHome, bReset, odo), cv, badgeBox, h("p", { class: "d-cap", text: L.hint })));
    reset(); loop();
    return function () { cancelAnimationFrame(raf); };
  };

  /* ---------- 9. API security ---------- */
  var SEC = {
    ru: { user: "Вы вошли как Alice", check: "Проверять владельца на сервере", cats: "Объекты: кот №1 принадлежит Alice, кот №2 принадлежит Bob", req: "Запрос", send: "Отправить", hint: "Выключите проверку и запросите чужого кота. Потом включите и повторите.", leak: "Утечка: Alice получила данные Bob", fix: "Сервер сверил владельца и закрыл доступ", code: ["cat = db.get(cat_id)", "if cat.owner != current_user:", "    raise Forbidden  # 403", "return cat"], codeOff: ["cat = db.get(cat_id)", "return cat  # владелец не проверен"] },
    en: { user: "Logged in as Alice", check: "Check owner on the server", cats: "Objects: cat #1 belongs to Alice, cat #2 belongs to Bob", req: "Request", send: "Send", hint: "Turn the check off and request someone else's cat. Then turn it on and repeat.", leak: "Leak: Alice got Bob's data", fix: "The server checked the owner and denied access", code: ["cat = db.get(cat_id)", "if cat.owner != current_user:", "    raise Forbidden  # 403", "return cat"], codeOff: ["cat = db.get(cat_id)", "return cat  # owner is not checked"] }
  };
  D.apisec = function (root, lang) {
    var L = SEC[lang], on = false, id = 2;
    var cats = { 1: { id: 1, name: "Murzik", owner: "alice" }, 2: { id: 2, name: "Barsik", owner: "bob" } };
    var resp = h("pre", { class: "d-code resp" }), note = h("div", { class: "d-status" }), code = h("pre", { class: "d-code" });
    var cb = h("input", { type: "checkbox", role: "switch" });
    var sel = h("select", { class: "d-select", "aria-label": L.req }, h("option", { value: 1, text: "GET /cats/1" }), h("option", { value: 2, text: "GET /cats/2", selected: true }));
    sel.addEventListener("change", function () { id = +sel.value; });
    function send() {
      var c = cats[id];
      if (on && c.owner !== "alice") { resp.textContent = "403 Forbidden\n{\"detail\": \"not your object\"}"; note.className = "d-status ok"; note.textContent = L.fix; }
      else { resp.textContent = "200 OK\n" + JSON.stringify(c, null, 2); if (c.owner !== "alice") { note.className = "d-status bad"; note.textContent = L.leak; } else { note.className = "d-status"; note.textContent = ""; } }
    }
    function codeUpd() { code.textContent = (on ? L.code : L.codeOff).join("\n"); }
    cb.addEventListener("change", function () { on = cb.checked; codeUpd(); });
    root.appendChild(h("div", { class: "d-split" },
      h("div", { class: "d-col" }, h("strong", { text: L.user }), h("p", { class: "d-hint", text: L.cats }), h("label", { class: "d-switch" }, cb, h("span", { text: L.check })), code),
      h("div", { class: "d-col" }, h("div", { class: "d-row flexwrap" }, sel, h("button", { type: "button", class: "d-btn primary", onclick: send }, L.send)), resp, note, h("p", { class: "d-cap", text: L.hint }))));
    codeUpd();
    return function () {};
  };

  /* ---------- 10. Telegram Invites ---------- */
  var INV = {
    ru: { tpl: "Шаблон", tplText: "Здравствуйте, {name}! Приглашаем вас на собеседование {time}. {note}", cand: [["Анна", "завтра в 15:00", "Ссылка на встречу придет за час."], ["Дмитрий", "в четверг в 11:30", "Возьмите с собой портфолио."], ["Мария", "в пятницу в 10:00", ""]], dry: "Проверка без отправки (dry-run)", real: "Реальная отправка требует флага --send", flag: "Включить --send", run: "Запустить", log: "send_log.csv", st: { preview: "preview", sent: "sent" }, hint: "Сначала всегда предпросмотр: сообщения никому не уходят, пока не включен флаг." },
    en: { tpl: "Template", tplText: "Hello, {name}! We invite you to an interview {time}. {note}", cand: [["Anna", "tomorrow at 3 pm", "The meeting link comes an hour before."], ["Dmitry", "on Thursday at 11:30", "Bring your portfolio."], ["Maria", "on Friday at 10 am", ""]], dry: "Dry run, nothing is sent", real: "Real sending needs the --send flag", flag: "Enable --send", run: "Run", log: "send_log.csv", st: { preview: "preview", sent: "sent" }, hint: "Preview first, always: nothing goes out until the flag is on." }
  };
  D.invites = function (root, lang) {
    var L = INV[lang], send = false;
    var out = h("div", { class: "d-out" }), logEl = h("pre", { class: "d-code" });
    var cb = h("input", { type: "checkbox", role: "switch" }); cb.addEventListener("change", function () { send = cb.checked; hintEl.textContent = send ? L.real : L.dry; });
    var hintEl = h("span", { class: "d-hint", text: L.dry });
    function run() {
      out.innerHTML = ""; var rows = ["name,status"];
      L.cand.forEach(function (c) {
        var text = L.tplText.replace("{name}", c[0]).replace("{time}", c[1]).replace("{note}", c[2]).trim();
        out.appendChild(h("div", { class: "d-msg" + (send ? " me" : ""), text: (send ? "-> " : "[preview] ") + text }));
        rows.push(c[0] + "," + (send ? L.st.sent : L.st.preview));
      });
      logEl.textContent = L.log + "\n" + rows.join("\n");
    }
    root.appendChild(h("div", { class: "d-col" },
      h("strong", { text: L.tpl }), h("pre", { class: "d-code", text: L.tplText }),
      h("div", { class: "d-row flexwrap" }, h("label", { class: "d-switch" }, cb, h("span", { text: L.flag })), hintEl, h("button", { type: "button", class: "d-btn primary", onclick: run }, L.run)),
      out, logEl, h("p", { class: "d-cap", text: L.hint })));
    run();
    return function () {};
  };

  /* ---------- 11. Своя игра ---------- */
  var JEO = {
    ru: {
      cats: ["Технологии", "Сириус", "Наука"],
      q: [
        [["Как называется язык разметки страниц в браузере?", "HTML"], ["Что значит буква S в SQL?", "Structured"], ["Протокол защищенного веб-соединения?", "HTTPS"]],
        [["В каком городе находится университет Сириус?", "Сочи"], ["Как называют мероприятие, где команды за день делают проект?", "Хакатон"], ["Сколько курсов программы после 9 класса: 5 или 6?", "5"]],
        [["Сколько будет 2 в степени 10?", "1024"], ["Как называется модель из слоев нейронов?", "Нейросеть"], ["Как зовут числа вида 2, 3, 5, 7?", "Простые"]]
      ],
      pts: [100, 200, 300], bag: "Кот в мешке", bagText: "Ставка: передайте вопрос сопернику и получите очки, если он ответит неверно.",
      reveal: "Показать ответ", ok: "Верно", no: "Неверно", team: "Команда", score: "Счет", hint: "Выберите клетку, прочитайте вопрос и отметьте ответ.", close: "Закрыть вопрос", timer: "с"
    },
    en: {
      cats: ["Technology", "Sirius", "Science"],
      q: [
        [["Which markup language builds web pages in a browser?", "HTML"], ["What does S in SQL stand for?", "Structured"], ["Which protocol secures web connections?", "HTTPS"]],
        [["In which city is Sirius University?", "Sochi"], ["What is an event where teams build a project in a day?", "Hackathon"], ["How many years is the program after grade 9: 5 or 6?", "5"]],
        [["What is 2 to the power 10?", "1024"], ["What is a model made of layers of neurons?", "Neural network"], ["What are numbers like 2, 3, 5, 7?", "Primes"]]
      ],
      pts: [100, 200, 300], bag: "Cat in a bag", bagText: "Bet: pass the question to a rival and get points if they answer wrong.",
      reveal: "Show answer", ok: "Correct", no: "Wrong", team: "Team", score: "Score", hint: "Pick a cell, read the question and mark the answer.", close: "Close question", timer: "s"
    }
  };
  D.jeopardy = function (root, lang) {
    var L = JEO[lang], T = timers(), score = [0, 0], teamNo = 0, used = {};
    var board = h("div", { class: "d-board" }), pane = h("div", { class: "d-qpane" }), sc = h("div", { class: "d-scores" });
    function renderScore() { sc.innerHTML = ""; [0, 1].forEach(function (i) { sc.appendChild(h("button", { type: "button", class: "d-team" + (teamNo === i ? " on" : ""), onclick: function () { teamNo = i; renderScore(); } }, L.team + " " + (i + 1) + ": " + score[i])); }); }
    function open(ci, pi) {
      var key = ci + "-" + pi; if (used[key]) return;
      var qa = L.q[ci][pi], pts = L.pts[pi], bag = (ci === 1 && pi === 1), secs = 20, shown = false;
      pane.innerHTML = ""; pane.classList.add("on");
      var tm = h("span", { class: "d-timer", text: secs + L.timer });
      T.clear(); T.every(function () { if (secs > 0) { secs--; tm.textContent = secs + L.timer; } }, 1000);
      var ans = h("div", { class: "d-answer", hidden: true, text: qa[1] });
      var mark = h("div", { class: "d-row", hidden: true },
        h("button", { type: "button", class: "d-btn ok", onclick: function () { score[teamNo] += pts * (bag ? 2 : 1); done(); } }, L.ok),
        h("button", { type: "button", class: "d-btn bad", onclick: function () { score[teamNo] -= pts; done(); } }, L.no));
      function done() { used[key] = 1; T.clear(); pane.classList.remove("on"); pane.innerHTML = ""; renderBoard(); renderScore(); }
      pane.appendChild(h("div", { class: "d-qhead" }, h("b", { text: L.cats[ci] + " " + pts }), tm));
      if (bag) pane.appendChild(h("div", { class: "d-callout", text: L.bag + ". " + L.bagText }));
      pane.appendChild(h("p", { class: "d-qtext", text: qa[0] }));
      pane.appendChild(ans); pane.appendChild(mark);
      pane.appendChild(h("button", { type: "button", class: "d-btn", onclick: function () { ans.hidden = false; mark.hidden = false; } }, L.reveal));
      pane.appendChild(h("button", { type: "button", class: "d-btn", onclick: function () { T.clear(); pane.classList.remove("on"); pane.innerHTML = ""; } }, L.close));
    }
    function renderBoard() {
      board.innerHTML = "";
      L.cats.forEach(function (c) { board.appendChild(h("div", { class: "d-bcat", text: c })); });
      L.pts.forEach(function (p, pi) { L.cats.forEach(function (c, ci) {
        var key = ci + "-" + pi;
        board.appendChild(h("button", { type: "button", class: "d-cell" + (used[key] ? " used" : ""), disabled: !!used[key], onclick: function () { open(ci, pi); } }, used[key] ? "" : String(p)));
      }); });
    }
    root.appendChild(h("div", { class: "d-col" }, sc, board, pane, h("p", { class: "d-cap", text: L.hint })));
    renderBoard(); renderScore();
    return function () { T.clear(); };
  };

  /* ---------- 12. Медцентр: анонимизация и суммаризация ---------- */
  var MED = {
    ru: {
      title: "Выдуманный разговор", name: "Иванов Иван Иванович",
      talk: [["Врач", "Что вас беспокоит?"], ["Пациент", "Я, Иванов Иван Иванович, кашляю уже неделю, ночью хуже, температура была 37,5."], ["Врач", "Что принимали?"], ["Пациент", "Сироп от кашля и много чая."], ["Врач", "Пейте больше жидкости, сироп продолжайте, приходите через пять дней."]],
      steps: ["Анонимизация", "Модель заполняет поля", "Врач проверяет"], run: "Запустить",
      anon: "ФИО заменено на [ПАЦИЕНТ] до отправки в модель", f1: "Жалобы", v1: "Кашель в течение недели, усиливается ночью, температура до 37,5.", f2: "Лечение", v2: "Обильное питье, продолжить сироп от кашля, повторный прием через 5 дней.",
      check: "Врач читает, правит и подтверждает. Решение остается за ним.", hint: "Принцип: перед моделью стирается личное, модель только предлагает текст."
    },
    en: {
      title: "A made-up conversation", name: "John A. Smith",
      talk: [["Doctor", "What brings you here?"], ["Patient", "I, John A. Smith, have had a cough for a week, worse at night, my temperature was 37.5."], ["Doctor", "What did you take?"], ["Patient", "Cough syrup and a lot of tea."], ["Doctor", "Drink more fluids, keep taking the syrup, come back in five days."]],
      steps: ["Anonymization", "Model fills fields", "Doctor reviews"], run: "Run",
      anon: "The name is replaced with [PATIENT] before it goes to the model", f1: "Complaints", v1: "Cough for a week, worse at night, temperature up to 37.5.", f2: "Treatment", v2: "Plenty of fluids, continue cough syrup, follow-up in 5 days.",
      check: "The doctor reads, edits and confirms. The decision stays with them.", hint: "Principle: personal data is removed before the model, the model only suggests text."
    }
  };
  D.medcenter = function (root, lang) {
    var L = MED[lang], T = timers(), stage = 0;
    var talkEls = L.talk.map(function (t) { return h("div", { class: "d-line" }, h("b", { text: t[0] + ": " }), h("span", { text: t[1] })); });
    var f1 = h("div", { class: "d-field" }, h("b", { text: L.f1 }), h("span", { class: "d-ph", text: "..." }));
    var f2 = h("div", { class: "d-field" }, h("b", { text: L.f2 }), h("span", { class: "d-ph", text: "..." }));
    var info = h("div", { class: "d-status" });
    var chips = L.steps.map(function (n) { return h("span", { class: "d-pill", text: n }); });
    function mark(i) { chips.forEach(function (c, k) { c.classList.toggle("on", k === i); }); }
    function run() {
      T.clear(); mark(-1); f1.lastChild.textContent = "..."; f2.lastChild.textContent = "..."; info.textContent = "";
      talkEls.forEach(function (e) { var sp = e.lastChild; sp.textContent = sp.textContent; });
      T.later(function () { mark(0); talkEls[1].lastChild.textContent = talkEls[1].lastChild.textContent.replace(L.name, "[" + (lang === "ru" ? "ПАЦИЕНТ" : "PATIENT") + "]"); info.className = "d-status"; info.textContent = L.anon; }, 400);
      T.later(function () { mark(1); f1.lastChild.textContent = L.v1; f1.lastChild.className = ""; }, 1500);
      T.later(function () { f2.lastChild.textContent = L.v2; f2.lastChild.className = ""; }, 2100);
      T.later(function () { mark(2); info.className = "d-status ok"; info.textContent = L.check; }, 3000);
    }
    root.appendChild(h("div", { class: "d-split" },
      h("div", { class: "d-col" }, h("strong", { text: L.title }), talkEls),
      h("div", { class: "d-col" }, h("div", { class: "d-row flexwrap" }, chips), f1, f2, info, h("button", { type: "button", class: "d-btn primary", onclick: function () { talkEls.forEach(function (e, i) { e.lastChild.textContent = L.talk[i][1]; }); run(); } }, L.run), h("p", { class: "d-cap", text: L.hint }))));
    return function () { T.clear(); };
  };


  /* ---------- 12. Гидрораспределительная плита ---------- */
  var HYD = {
    ru: {
      steps: ["Блок", "Верх", "Грани", "Торец", "Чертеж"],
      caps: [
        "Эскиз прямоугольника 92 × 70 мм и выдавливание на 85 мм",
        "Девять отверстий на верхней грани: одно центральное и четыре симметричные пары",
        "Ступенчатые отверстия ⌀16 и ⌀9,5 на торцевой и боковой гранях, фаска",
        "Глубокое отверстие ⌀9 в левом торце, глубина около 70 мм. На модели оно скрыто внутри",
        "Чертеж: основные виды и размеры. Разрезы в окне не показаны"
      ],
      size: "Габариты 92 × 70 × 85 мм", holes: "Отверстий", play: "Показать построение", stop: "Остановить",
      front: "Главный вид", top: "Вид сверху", left: "Вид слева", stamp1: "Гидрораспред. плита", stamp2: "Разработал: Шехавцов И.", stamp3: "KOMPAS-3D", mm: "мм",
      hid: "⌀9, глубина ~70", fh: "2 × ⌀16 / ⌀9,5", note: "Положение отверстий условное, размеры блока и диаметры из задания."
    },
    en: {
      steps: ["Block", "Top", "Faces", "End", "Drawing"],
      caps: [
        "Sketch a 92 × 70 mm rectangle and extrude it to 85 mm",
        "Nine holes on the top face: one central and four symmetric pairs",
        "Stepped holes ⌀16 and ⌀9.5 on the end and side faces, a chamfer",
        "A deep ⌀9 hole in the left end, about 70 mm deep. It is hidden inside the model",
        "Drawing: main views and dimensions. Sections are not shown in the window"
      ],
      size: "Size 92 × 70 × 85 mm", holes: "Holes", play: "Show the build", stop: "Stop",
      front: "Front view", top: "Top view", left: "Left view", stamp1: "Hydraulic plate", stamp2: "Author: I. Shekhavtsov", stamp3: "KOMPAS-3D", mm: "mm",
      hid: "⌀9, depth ~70", fh: "2 × ⌀16 / ⌀9.5", note: "Hole positions are approximate, block size and diameters come from the task."
    }
  };
  D.hydroplate = function (root, lang) {
    var L = HYD[lang], T = timers(), step = 0, playing = false;
    var W = 92, Dp = 70, H = 85, u = 1.8, c = Math.cos(Math.PI / 6) * u, sn = 0.5 * u;
    var cx = 260 - (W - Dp) * c / 2, cy = 24 + H * u;
    function r1(n) { return (Math.round(n * 10) / 10); }
    function P(x, y, z) { return r1(cx + (x - y) * c) + "," + r1(cy + (x + y) * sn - z * u); }
    function poly(pts, cls) { return s("polygon", { points: pts.map(function (q) { return P(q[0], q[1], q[2]); }).join(" "), class: "d-face " + cls }); }
    function mtx(a, b, cc, d, e, f) { return "matrix(" + [a, b, cc, d, e, f].map(r1).join(" ") + ")"; }
    function circ(g, x, y, d, cls, old) { g.appendChild(s("circle", { cx: x, cy: y, r: d / 2, class: "d-hole" + (cls ? " " + cls : "") + (old ? " old" : ""), "vector-effect": "non-scaling-stroke" })); }
    var TOP = [[46, 35, 14], [12, 13, 8], [80, 13, 8], [12, 57, 8], [80, 57, 8], [46, 8, 6], [46, 62, 6], [6, 35, 6], [86, 35, 6]];
    var svg = s("svg", { viewBox: "0 0 520 340", class: "d-plate", role: "img", "aria-label": L.size });
    var cap = h("p", { class: "d-callout" }), pills = h("div", { class: "d-row flexwrap" });
    var chips = h("div", { class: "d-row flexwrap", role: "group" }), playBtn;

    function t(x, y, txt, cls, anchor) { var e = s("text", { x: x, y: y, class: cls || "d-dimt" }); if (anchor) e.setAttribute("text-anchor", anchor); e.textContent = txt; return e; }
    function iso() {
      svg.appendChild(poly([[0, 0, H], [W, 0, H], [W, Dp, H], [0, Dp, H]], "t"));
      svg.appendChild(poly([[0, Dp, H], [W, Dp, H], [W, Dp, 0], [0, Dp, 0]], "l"));
      svg.appendChild(poly([[W, 0, H], [W, Dp, H], [W, Dp, 0], [W, 0, 0]], "r"));
      var topG = s("g", { transform: mtx(c, sn, -c, sn, cx, cy - H * u) });
      var leftG = s("g", { transform: mtx(c, sn, 0, -u, cx - Dp * c, cy + Dp * sn) });
      var rightG = s("g", { transform: mtx(-c, sn, 0, -u, cx + W * c, cy + W * sn) });
      if (step >= 1) TOP.forEach(function (q) { circ(topG, q[0], q[1], q[2], "", step > 1); });
      if (step >= 2) {
        [26, 66].forEach(function (x) { circ(leftG, x, 42, 21, "chamfer", step > 2); circ(leftG, x, 42, 16, "step", step > 2); circ(leftG, x, 42, 9.5, "", step > 2); });
        [21, 49].forEach(function (y) { circ(rightG, y, 42, 16, "step", step > 2); circ(rightG, y, 42, 9.5, "", step > 2); });
      }
      svg.appendChild(topG); svg.appendChild(leftG); svg.appendChild(rightG);
      if (step >= 3) {
        var hz = 4.5, d = [P(0, 35, 42 + hz), P(Dp, 35, 42 + hz), P(Dp, 35, 42 - hz), P(0, 35, 42 - hz)].join(" ");
        svg.appendChild(s("polygon", { points: d, class: "d-hole hid" }));
        var m = P(Dp / 2, 35, 42 + hz).split(","); svg.appendChild(t(+m[0], +m[1] - 7, L.hid, "d-dimt", "middle"));
      }
      var a = P(W / 2, Dp, 0).split(","), b = P(W, Dp / 2, 0).split(","), e = P(0, Dp, H / 2).split(",");
      svg.appendChild(t(+a[0] - 10, +a[1] + 18, "92 " + L.mm, "d-dimt", "end"));
      svg.appendChild(t(+b[0] + 12, +b[1] + 16, "70 " + L.mm, "d-dimt", "start"));
      svg.appendChild(t(+e[0] - 10, +e[1], "85 " + L.mm, "d-dimt", "end"));
    }
    function sheet() {
      var k = 1.7, x0 = 56, y0 = 22, gap = 26, gx = 24, fy = y0 + Dp * k + gap, sx = x0 + W * k + gx;
      svg.appendChild(s("rect", { x: 6, y: 6, width: 508, height: 328, rx: 6, class: "d-sheet" }));
      svg.insertBefore(s("defs", null, s("marker", { id: "hy-a", viewBox: "0 0 6 6", refX: 5, refY: 3, markerWidth: 6, markerHeight: 6, orient: "auto-start-reverse" }, s("path", { d: "M0 0 L6 3 L0 6 z", class: "d-arrow" }))), svg.firstChild);
      function body(x, y, w, hh) { svg.appendChild(s("rect", { x: x, y: y, width: w * k, height: hh * k, class: "d-view" })); }
      function cross(x, y, r) { svg.appendChild(s("path", { d: "M" + (x - r) + " " + y + " H" + (x + r) + " M" + x + " " + (y - r) + " V" + (y + r), class: "d-center" })); }
      function ring(x, y, d, cls) { svg.appendChild(s("circle", { cx: x, cy: y, r: d / 2 * k, class: "d-line2" + (cls ? " " + cls : "") })); }
      body(x0, y0, W, Dp); body(x0, fy, W, H); body(sx, fy, Dp, H);
      TOP.forEach(function (q) { ring(x0 + q[0] * k, y0 + q[1] * k, q[2]); cross(x0 + q[0] * k, y0 + q[1] * k, q[2] / 2 * k + 3); });
      [26, 66].forEach(function (x) { var X = x0 + x * k, Y = fy + (H - 42) * k; ring(X, Y, 16); ring(X, Y, 9.5); cross(X, Y, 8 * k + 3); });
      svg.appendChild(t(x0 + W * k / 2, fy + (H - 42) * k + 8 * k + 13, L.fh, "d-dimt2", "middle"));
      [21, 49].forEach(function (y) { ring(sx + y * k, fy + (H - 42) * k, 16, "dash"); ring(sx + y * k, fy + (H - 42) * k, 9.5, "dash"); });
      ring(sx + 35 * k, fy + (H - 42) * k, 9); cross(sx + 35 * k, fy + (H - 42) * k, 4.5 * k + 3);
      function dimH(xa, xb, y, txt) { svg.appendChild(s("line", { x1: xa, y1: y, x2: xb, y2: y, class: "d-dim", "marker-start": "url(#hy-a)", "marker-end": "url(#hy-a)" })); svg.appendChild(t((xa + xb) / 2, y + 11, txt, "d-dimt", "middle")); }
      function dimV(x, ya, yb, txt) { svg.appendChild(s("line", { x1: x, y1: ya, x2: x, y2: yb, class: "d-dim", "marker-start": "url(#hy-a)", "marker-end": "url(#hy-a)" })); var tx = t(x - 5, (ya + yb) / 2, txt, "d-dimt", "middle"); tx.setAttribute("transform", "rotate(-90 " + (x - 5) + " " + ((ya + yb) / 2) + ")"); svg.appendChild(tx); }
      dimH(x0, x0 + W * k, fy + H * k + 8, "92");
      dimV(x0 - 12, y0, y0 + Dp * k, "70");
      dimV(x0 - 12, fy, fy + H * k, "85");
      dimH(sx, sx + Dp * k, fy + H * k + 8, "70");
      svg.appendChild(t(x0 + W * k + 6, y0 + 12, L.top, "d-dimt2", "start"));
      svg.appendChild(t(x0, fy - 6, L.front, "d-dimt2", "start"));
      svg.appendChild(t(sx, fy - 6, L.left, "d-dimt2", "start"));
      svg.appendChild(s("rect", { x: 362, y: 252, width: 146, height: 76, class: "d-stamp" }));
      svg.appendChild(t(370, 272, L.stamp1, "d-stamp-t")); svg.appendChild(t(370, 292, L.stamp2, "d-dimt2")); svg.appendChild(t(370, 312, L.stamp3, "d-dimt2"));
    }
    function holes() { return [0, 9, 13, 14, 14][step]; }
    function render() {
      svg.innerHTML = ""; if (step < 4) iso(); else sheet();
      cap.textContent = L.caps[step];
      pills.innerHTML = ""; pills.appendChild(h("span", { class: "d-pill on", text: L.size })); pills.appendChild(h("span", { class: "d-pill", text: L.holes + ": " + holes() }));
      Array.prototype.forEach.call(chips.children, function (b, i) { b.classList.toggle("on", i === step); b.setAttribute("aria-pressed", i === step ? "true" : "false"); });
    }
    function go(i) { step = i; render(); }
    function stop() { playing = false; T.clear(); if (playBtn) playBtn.textContent = L.play; }
    function play() {
      stop(); playing = true; playBtn.textContent = L.stop; go(0);
      (function next(i) { T.later(function () { if (!playing) return; go(i); if (i < 4) next(i + 1); else stop(); }, 1500); })(1);
    }
    L.steps.forEach(function (n, i) { chips.appendChild(h("button", { type: "button", class: "d-chip", onclick: function () { stop(); go(i); } }, (i + 1) + ". " + n)); });
    playBtn = h("button", { type: "button", class: "d-btn primary", onclick: function () { playing ? stop() : play(); } }, L.play);
    root.appendChild(h("div", { class: "d-col" }, svg, chips, cap, h("div", { class: "d-row flexwrap" }, playBtn, pills), h("p", { class: "d-cap", text: L.note })));
    render();
    if (!reduce) T.later(play, 700);
    return function () { playing = false; T.clear(); };
  };

  /* ---------- 13. Защищенная IT-инфраструктура ---------- */
  var INF = {
    ru: {
      vlans: ["VLAN 10, domain", "VLAN 20, pr", "VLAN 30, it", "VLAN 40, security"],
      router: "Router-01 (CHR)", host: "Сервер виртуализации: ESXi и VMmanager",
      add: "Подключить устройство", add25: "Сразу 25 устройств", reset: "Сбросить",
      pool: "Пул адресов", of: "из 100",
      leased: function (n, ip) { return "DHCP: устройство " + n + " получило " + ip; },
      full: "Пул исчерпан: 101-е устройство адрес не получило. Пул ограничен 100 адресами на сеть.",
      ssh: "Доступ к маршрутизатору", p22: "ssh на порт 22", p2025: "ssh на порт 2025",
      r22: "ssh: connect to host router port 22: Connection refused", s22: "Стандартный порт закрыт.",
      r2025: "Подключено к порту 2025\nВход под отдельным пользователем", s2025: "Основной администратор отключен, вход только под отдельным пользователем.",
      ghost: "Пунктир: ALD Pro, каталог пользователей. Развернуть его не удалось, причина разобрана в отчете.",
      hint: "Адресация условная"
    },
    en: {
      vlans: ["VLAN 10, domain", "VLAN 20, pr", "VLAN 30, it", "VLAN 40, security"],
      router: "Router-01 (CHR)", host: "Virtualization server: ESXi and VMmanager",
      add: "Connect a device", add25: "25 devices at once", reset: "Reset",
      pool: "Address pool", of: "of 100",
      leased: function (n, ip) { return "DHCP: device " + n + " got " + ip; },
      full: "Pool exhausted: the 101st device got no address. Each network is limited to 100 addresses.",
      ssh: "Router access", p22: "ssh to port 22", p2025: "ssh to port 2025",
      r22: "ssh: connect to host router port 22: Connection refused", s22: "The standard port is closed.",
      r2025: "Connected to port 2025\nSigned in as a separate user", s2025: "The main administrator is disabled, sign-in only as a separate user.",
      ghost: "Dashed: ALD Pro, the user directory. I could not deploy it, the report explains why.",
      hint: "Addressing is illustrative"
    }
  };
  D.infra = function (root, lang) {
    var L = INF[lang], T = timers(), dead = false, raf = 0, sel = 1;
    var N = [
      { id: 10, vm: "ALD-01", x: 84, y: 52, ghost: true }, { id: 20, vm: "PR-01", x: 436, y: 52 },
      { id: 30, vm: "IT-01", x: 84, y: 232 }, { id: 40, vm: "SEC-01", x: 436, y: 232 }
    ];
    var cnt = [0, 0, 0, 0], RX = 260, RY = 142;
    var svg = s("svg", { viewBox: "0 0 520 320", class: "d-graph", role: "img", "aria-label": L.router });
    var cnts = [], nodes = [];
    N.forEach(function (n) { svg.appendChild(s("line", { x1: n.x, y1: n.y, x2: RX, y2: RY, class: "d-edge" })); });
    svg.appendChild(s("rect", { x: 70, y: 290, width: 380, height: 22, rx: 8, class: "d-host" }));
    var ht = s("text", { x: 260, y: 305, "text-anchor": "middle", class: "d-axis" }); ht.textContent = L.host; svg.appendChild(ht);
    var rg = s("g", { class: "d-node on" }, s("rect", { x: RX - 62, y: RY - 24, width: 124, height: 48, rx: 12 }));
    var rt = s("text", { x: RX, y: RY + 4, "text-anchor": "middle" }); rt.textContent = L.router; rg.appendChild(rt); svg.appendChild(rg);
    N.forEach(function (n, i) {
      var g = s("g", { class: "d-node" + (n.ghost ? " ghost" : "") }, s("rect", { x: n.x - 68, y: n.y - 28, width: 136, height: 56, rx: 12 }));
      var a = s("text", { x: n.x, y: n.y - 6, "text-anchor": "middle" }); a.textContent = L.vlans[i];
      var b = s("text", { x: n.x, y: n.y + 12, "text-anchor": "middle", class: "d-sub" }); b.textContent = n.vm + (n.ghost ? ", ALD Pro" : "") + ": 0";
      g.appendChild(a); g.appendChild(b); svg.appendChild(g); nodes.push(g); cnts.push(b);
    });
    var log = h("div", { class: "d-log", "aria-live": "polite" }), status = h("div", { class: "d-status" });
    var fill = h("div", { class: "d-bar-fill" }), poolTxt = h("b", { text: "0" });
    var bar = h("div", { class: "d-bar-track" }, fill);
    var chips = h("div", { class: "d-row flexwrap", role: "group" });
    function refresh() {
      N.forEach(function (n, i) { cnts[i].textContent = n.vm + (n.ghost ? ", ALD Pro" : "") + ": " + cnt[i]; nodes[i].classList.toggle("bad", cnt[i] >= 100); });
      fill.style.width = cnt[sel] + "%"; fill.classList.toggle("accent", cnt[sel] >= 100); poolTxt.textContent = cnt[sel] + " " + L.of;
      Array.prototype.forEach.call(chips.children, function (b, i) { b.classList.toggle("on", i === sel); b.setAttribute("aria-pressed", i === sel ? "true" : "false"); });
    }
    function say(m) { log.appendChild(h("div", { text: m })); log.scrollTop = log.scrollHeight; }
    function lease(i, quiet) {
      if (cnt[i] >= 100) { status.className = "d-status bad"; status.textContent = L.full; nodes[i].classList.add("bad"); return false; }
      cnt[i]++; var ip = "192.168." + N[i].id + "." + (10 + cnt[i]);
      if (!quiet) { say(L.leased(N[i].vm + "-" + cnt[i], ip)); status.className = "d-status"; status.textContent = ""; }
      return true;
    }
    function packet(i, done) {
      if (reduce) { done(); return; }
      var dot = s("circle", { r: 5, class: "d-packet", cx: N[i].x, cy: N[i].y }); svg.appendChild(dot); var t0 = performance.now();
      (function f(now) {
        if (dead) return; var p = (now - t0) / 800;
        if (p >= 1) { dot.remove(); done(); return; }
        var q = p < 0.5 ? p * 2 : (1 - p) * 2;
        dot.setAttribute("cx", N[i].x + (RX - N[i].x) * q); dot.setAttribute("cy", N[i].y + (RY - N[i].y) * q);
        raf = requestAnimationFrame(f);
      })(t0);
    }
    var busy = false;
    function addOne() { if (busy) return; busy = true; var i = sel; packet(i, function () { lease(i); refresh(); busy = false; }); }
    function addMany() { var before = cnt[sel]; for (var k = 0; k < 25; k++) if (!lease(sel, true)) break; if (cnt[sel] < 100) { status.className = "d-status"; status.textContent = ""; } if (cnt[sel] > before) say(L.leased(N[sel].vm + "-" + cnt[sel], "192.168." + N[sel].id + "." + (10 + cnt[sel]))); refresh(); }
    function resetAll() { cnt = [0, 0, 0, 0]; log.innerHTML = ""; status.className = "d-status"; status.textContent = ""; refresh(); }
    L.vlans.forEach(function (n, i) { chips.appendChild(h("button", { type: "button", class: "d-chip", onclick: function () { sel = i; refresh(); } }, n)); });
    var sshOut = h("pre", { class: "d-code resp" }), sshSt = h("div", { class: "d-status" });
    function tryPort(p) {
      if (p === 22) { sshOut.textContent = L.r22; sshSt.className = "d-status bad"; sshSt.textContent = L.s22; }
      else { sshOut.textContent = L.r2025; sshSt.className = "d-status ok"; sshSt.textContent = L.s2025; }
    }
    root.appendChild(h("div", { class: "d-col" }, svg, h("p", { class: "d-cap", text: L.ghost }), chips,
      h("div", { class: "d-row flexwrap" }, h("button", { type: "button", class: "d-btn primary", onclick: addOne }, L.add), h("button", { type: "button", class: "d-btn", onclick: addMany }, L.add25), h("button", { type: "button", class: "d-btn", onclick: resetAll }, L.reset)),
      h("div", { class: "d-bar-row" }, h("span", { text: L.pool }), bar, poolTxt), log, status,
      h("strong", { text: L.ssh }),
      h("div", { class: "d-row flexwrap" }, h("button", { type: "button", class: "d-btn", onclick: function () { tryPort(22); } }, L.p22), h("button", { type: "button", class: "d-btn", onclick: function () { tryPort(2025); } }, L.p2025)),
      sshOut, sshSt, h("p", { class: "d-cap", text: L.hint })));
    refresh();
    return function () { dead = true; cancelAnimationFrame(raf); T.clear(); };
  };

  window.DEMOS = D;
})();
