/* Картинки проектов: упрощенные экраны самих продуктов. Все данные выдуманные.
   Каждый экран: function () -> SVG-разметка в области 320 x 180. */
(function () {
  "use strict";
  var lang = "ru";
  function T(ru, en) { return lang === "ru" ? ru : en; }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function r(x, y, w, h, c, rx, extra) { return '<rect class="' + c + '" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (rx == null ? 4 : rx) + '"' + (extra || "") + "/>"; }
  function t(x, y, s, c, anchor) { return '<text class="' + c + '" x="' + x + '" y="' + y + '"' + (anchor ? ' text-anchor="' + anchor + '"' : "") + ">" + esc(s) + "</text>"; }
  function c(x, y, rad, cl, extra) { return '<circle class="' + cl + '" cx="' + x + '" cy="' + y + '" r="' + rad + '"' + (extra || "") + "/>"; }
  function line(x1, y1, x2, y2, cl) { return '<line class="' + cl + '" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"/>'; }
  function frame(title) {
    return r(8, 6, 304, 168, "a-card", 10) + r(8, 6, 304, 22, "a-bar", 10) + r(8, 18, 304, 10, "a-bar", 0) +
      c(21, 17, 3.2, "a-dot") + c(32, 17, 3.2, "a-dot") + c(43, 17, 3.2, "a-dot") + t(56, 20.5, title, "a-b");
  }
  function check(x, y) { return '<path class="a-chk" d="M' + x + " " + y + " l2.6 2.8 l5 -6\"/>"; }

  var S = {};

  S.patient = function () {
    var o = "", vals = [3, 4, 2, 5, 1], names = ["O", "C", "E", "A", "N"];
    o += frame(T("Прием: виртуальный пациент", "Visit: virtual patient"));
    o += r(16, 36, 124, 20, "a-fill2", 9) + t(24, 49.5, T("Что вас беспокоит?", "What brings you here?"), "a-b");
    o += r(54, 62, 140, 34, "a-fill", 10) + t(62, 75, T("Болит в правом боку,", "Pain in my right side,"), "a-w") + t(62, 87, T("мне очень тревожно...", "I am very worried..."), "a-w");
    o += r(16, 102, 138, 20, "a-fill2", 9) + t(24, 115.5, T("С какого времени?", "Since when?"), "a-b");
    o += r(16, 148, 178, 18, "a-card", 9) + t(24, 160, T("Ваш вопрос пациенту...", "Your question..."), "a-s");
    o += line(202, 34, 202, 168, "a-axis");
    o += t(210, 46, T("Профиль OCEAN", "OCEAN profile"), "a-b");
    vals.forEach(function (v, i) {
      var y = 60 + i * 15;
      o += t(210, y + 3.5, names[i], "a-s") + r(224, y, 70, 4, "a-line2", 2) + r(224, y, v * 14, 4, "a-fill", 2) + c(224 + v * 14, y + 2, 4.4, "a-acc");
    });
    o += t(210, 148, T("Анамнез 70%", "History 70%"), "a-s") + r(210, 153, 86, 7, "a-line2", 3.5) + r(210, 153, 60, 7, "a-ok", 3.5);
    return o;
  };

  S.dispatcher = function () {
    var o = frame(T("Оператор 112", "Operator 112"));
    o += c(24, 44, 4, "a-blink") + t(34, 47.5, T("Входящий вызов", "Incoming call"), "a-b") + t(204, 47.5, "00:42", "a-badt", "end");
    o += t(18, 68, T("Дым в подъезде,", "Smoke in the stairwell,"), "a-t") + t(18, 81, T("пахнет гарью", "smell of burning"), "a-t");
    o += t(18, 96, T("ул. Ленина, 12, подъезд 2", "12 Lenin St, entrance 2"), "a-s");
    o += r(18, 104, 58, 17, "a-fill", 8) + t(47, 115.5, T("Пожарные", "Fire"), "a-w", "middle");
    o += r(80, 104, 50, 17, "a-fill", 8) + t(105, 115.5, T("Скорая", "Medical"), "a-w", "middle");
    o += r(134, 104, 56, 17, "a-card", 8) + t(162, 115.5, T("Полиция", "Police"), "a-b", "middle");
    o += r(18, 134, 84, 24, "a-fill", 9) + t(60, 149.5, T("Принять", "Accept"), "a-w", "middle");
    o += r(110, 134, 84, 24, "a-card", 9) + t(152, 149.5, T("Отклонить", "Reject"), "a-b", "middle");
    o += line(212, 34, 212, 168, "a-axis") + t(220, 46, T("Этапы", "Stages"), "a-b");
    var st = T("Уточнить адрес|Оценить угрозу|Вызвать службы|Передать", "Confirm address|Assess threat|Dispatch units|Hand over").split("|");
    st.forEach(function (s, i) {
      var y = 64 + i * 25;
      o += c(226, y - 3, 5.5, i < 2 ? "a-ok" : i === 2 ? "a-acc" : "a-line2") + (i < 2 ? check(222.5, y - 3) : "") + t(236, y, s, "a-b");
    });
    return o;
  };

  S.alfa = function () {
    var o = frame(T("Первый оборот", "First turnover"));
    o += t(18, 46, T("Остаток денег на 14 дней", "Cash balance for 14 days"), "a-b");
    o += r(18, 104, 188, 40, "a-danger", 0) + line(18, 104, 206, 104, "a-zero");
    o += '<polyline class="a-line3" points="20,72 48,64 76,80 104,100 132,122 160,116 188,90 204,78"/>';
    o += c(132, 122, 5, "a-acc") + t(132, 138, T("день 9", "day 9"), "a-s", "middle");
    o += t(20, 160, T("сегодня", "today"), "a-s") + t(206, 160, T("+14 дней", "+14 days"), "a-s", "end");
    o += r(216, 38, 88, 50, "a-card", 8) + t(224, 52, T("Не хватит", "Short by"), "a-s") + t(224, 69, "83 000", "a-big") + t(224, 82, T("руб. на день 9", "rub. on day 9"), "a-s");
    o += t(216, 106, T("Платеж", "Payment"), "a-s") + r(216, 111, 88, 4, "a-line2", 2) + r(216, 111, 50, 4, "a-fill", 2) + c(266, 113, 4.6, "a-acc");
    o += t(216, 132, T("Оплата от клиента", "Client pays in"), "a-s") + r(216, 137, 88, 4, "a-line2", 2) + r(216, 137, 30, 4, "a-fill", 2) + c(246, 139, 4.6, "a-acc");
    o += r(216, 150, 88, 16, "a-fill2", 8) + t(260, 161, T("Перенести платеж", "Move the payment"), "a-b", "middle");
    return o;
  };

  S.kiroden = function () {
    var o = frame("KIRODEN");
    o += r(16, 36, 150, 18, "a-fill2", 9) + t(24, 48.5, T("Выберите, что нужно", "Choose what you need"), "a-b");
    var b = T("Инструкции|Гарантия|Подарок|Поддержка", "Manuals|Warranty|Gift|Support").split("|");
    b.forEach(function (s, i) { o += r(16 + (i % 2) * 80, 60 + Math.floor(i / 2) * 24, 76, 20, "a-card", 8) + t(54 + (i % 2) * 80, 73.5 + Math.floor(i / 2) * 24, s, "a-b", "middle"); });
    o += r(96, 112, 70, 18, "a-fill", 9) + t(131, 124.5, T("Подарок", "Gift"), "a-w", "middle");
    o += r(16, 136, 160, 28, "a-fill2", 9) + t(24, 148, T("Пришлите скриншот", "Send a screenshot"), "a-b") + t(24, 158.5, T("отзыва с номером заказа", "of the review"), "a-b");
    o += line(188, 34, 188, 168, "a-axis") + t(196, 46, T("Заявки", "Requests"), "a-b");
    var rows = [[T("№ 1042 выдан", "No. 1042 sent"), "a-ok"], [T("№ 1043 проверка", "No. 1043 review"), "a-acc"], [T("№ 1044 дубль", "No. 1044 duplicate"), "a-bad"]];
    rows.forEach(function (x, i) { o += r(196, 56 + i * 34, 108, 28, "a-card", 8) + c(207, 70 + i * 34, 5, x[1]) + t(217, 73.5 + i * 34, x[0], "a-b"); });
    return o;
  };

  S.onboarding = function () {
    var o = frame(T("Онбординг сотрудника", "Employee onboarding"));
    o += t(18, 46, T("Анкета", "Form"), "a-t");
    [T("ФИО", "Name"), T("Должность", "Role"), T("Почта", "Email")].forEach(function (s, i) {
      o += t(18, 62 + i * 25, s, "a-s") + r(18, 66 + i * 25, 138, 13, "a-card", 5) + r(24, 71 + i * 25, 50 + i * 16, 4, "a-line2", 2);
    });
    o += r(18, 142, 80, 22, "a-fill", 9) + t(58, 156.5, T("Отправить", "Submit"), "a-w", "middle");
    o += line(170, 34, 170, 168, "a-axis");
    var st = T("Анкета|NDA|Заявка|Ответственный|Доступ", "Form|NDA|Request|Owner|Access").split("|");
    st.forEach(function (s, i) {
      var y = 52 + i * 25;
      o += (i < 4 ? line(194, y + 6, 194, y + 19, "a-axis2") : "") + c(194, y, 6.5, i < 3 ? "a-ok" : i === 3 ? "a-acc" : "a-line2") + (i < 3 ? check(190.5, y) : "") + t(208, y + 3.5, s, "a-b");
    });
    return o;
  };

  S.hydroplate = function () {
    var o = frame(T("KOMPAS-3D: плита", "KOMPAS-3D: plate"));
    o += '<polygon class="a-top" points="100,42 158,71 100,100 42,71"/><polygon class="a-lf" points="42,71 100,100 100,154 42,125"/><polygon class="a-rt" points="100,100 158,71 158,125 100,154"/>';
    o += '<ellipse class="a-hole" cx="100" cy="71" rx="8" ry="4"/>';
    [[76, 59], [124, 59], [76, 83], [124, 83]].forEach(function (p) { o += '<ellipse class="a-hole" cx="' + p[0] + '" cy="' + p[1] + '" rx="5" ry="2.5"/>'; });
    [[60, 105], [82, 117]].forEach(function (p) { o += '<ellipse class="a-hole" cx="' + p[0] + '" cy="' + p[1] + '" rx="6" ry="7.5" transform="rotate(-27 ' + p[0] + " " + p[1] + ')"/>'; });
    [[118, 117], [140, 105]].forEach(function (p) { o += '<ellipse class="a-hole" cx="' + p[0] + '" cy="' + p[1] + '" rx="6" ry="7.5" transform="rotate(27 ' + p[0] + " " + p[1] + ')"/>'; });
    o += t(66, 152, "92", "a-dim", "middle") + t(150, 152, "70", "a-dim", "middle") + t(30, 100, "85", "a-dim", "middle");
    o += line(176, 34, 176, 168, "a-axis");
    var st = T("Блок|Верх|Грани|Торец|Чертеж", "Block|Top|Faces|End|Drawing").split("|");
    st.forEach(function (s, i) {
      var y = 48 + i * 19;
      o += c(190, y, 5.5, i < 4 ? "a-ok" : "a-acc") + (i < 4 ? check(186.7, y) : "") + t(202, y + 3.5, s, "a-b");
    });
    o += r(184, 144, 120, 20, "a-fill2", 9) + t(244, 157.5, T("Отверстий: 14", "Holes: 14"), "a-b", "middle");
    return o;
  };

  S.infra = function () {
    var o = frame(T("Сеть филиала", "Branch network"));
    var n = [[60, 62, "VLAN 10"], [166, 62, "VLAN 20"], [60, 142, "VLAN 30"], [166, 142, "VLAN 40"]];
    n.forEach(function (p) { o += line(p[0], p[1], 113, 102, "a-line"); });
    n.forEach(function (p, i) {
      o += r(p[0] - 38, p[1] - 14, 76, 28, i === 0 ? "a-card a-ghost" : "a-card", 8) + t(p[0], p[1] - 1, p[2], "a-b", "middle") + t(p[0], p[1] + 9, ["domain", "pr", "it", "security"][i], "a-s", "middle");
    });
    o += r(80, 90, 66, 24, "a-acc", 9) + t(113, 105.5, "Router", "a-dk", "middle");
    o += line(212, 34, 212, 168, "a-axis") + t(220, 46, T("Пул VLAN 20", "VLAN 20 pool"), "a-b");
    o += r(220, 54, 84, 8, "a-line2", 4) + r(220, 54, 31, 8, "a-fill", 4) + t(220, 76, T("37 из 100 адресов", "37 of 100 addresses"), "a-s");
    o += t(220, 98, "SSH", "a-b");
    o += r(220, 104, 84, 18, "a-card", 8) + c(231, 113, 4, "a-bad") + t(240, 116.5, T("22 закрыт", "22 closed"), "a-s");
    o += r(220, 128, 84, 18, "a-card", 8) + c(231, 137, 4, "a-ok") + t(240, 140.5, T("2025 открыт", "2025 open"), "a-s");
    return o;
  };

  S.medcenter = function () {
    var o = frame(T("Прием врача", "Doctor visit"));
    o += t(16, 46, T("Запись разговора", "Conversation"), "a-b") + c(28, 62, 5, "a-blink");
    [8, 16, 10, 22, 14, 26, 12, 18, 8, 20, 12].forEach(function (h, i) { o += r(42 + i * 9, 62 - h / 2, 5, h, "a-fill", 2); });
    for (var i = 0; i < 3; i++) o += r(16, 84 + i * 16, 118 - i * 18, 8, "a-line2", 4);
    o += t(16, 146, T("Транскрибация", "Transcription"), "a-s");
    o += '<path class="a-arrow" d="M142 92 H162 M156 86 L162 92 L156 98"/>';
    o += r(170, 36, 134, 130, "a-card", 8) + t(178, 50, T("Карта пациента", "Patient record"), "a-b");
    o += t(178, 66, T("Жалобы", "Complaints"), "a-s") + r(178, 70, 118, 22, "a-fill2", 5) + r(184, 76, 100, 4, "a-fill", 2) + r(184, 84, 70, 4, "a-fill", 2);
    o += t(178, 108, T("Анамнез", "History"), "a-s") + r(178, 112, 118, 22, "a-fill2", 5) + r(184, 118, 90, 4, "a-fill", 2) + r(184, 126, 56, 4, "a-fill", 2);
    o += r(178, 142, 70, 16, "a-fill", 8) + t(213, 153, T("Подтвердить", "Confirm"), "a-w", "middle");
    return o;
  };

  S.sellers = function () {
    var o = frame(T("Аналитика продавца", "Seller analytics"));
    var k = [[T("Выручка", "Revenue"), "94 000"], [T("Маржа", "Margin"), "31%"], [T("Возвраты", "Returns"), "4%"]];
    k.forEach(function (x, i) { o += r(16 + i * 98, 36, 92, 38, "a-card", 8) + t(24 + i * 98, 50, x[0], "a-s") + t(24 + i * 98, 67, x[1], "a-big"); });
    var h = [34, 46, 40, 58, 52, 70, 64, 84];
    h.forEach(function (v, i) { o += r(24 + i * 36, 160 - v, 24, v, i === 7 ? "a-acc" : "a-fill", 4); });
    o += line(16, 160, 304, 160, "a-axis") + t(16, 90, T("Выручка по месяцам", "Revenue by month"), "a-b");
    return o;
  };

  S.aipm = function () {
    var o = frame(T("Оценка заявки на IT-проект", "IT project request review"));
    var p = [[22, 96, T("Заявка", "Request")], [118, 52, T("Аналитик", "Analyst")], [118, 96, T("Архитектор", "Architect")], [118, 140, T("Риски", "Risks")], [214, 96, T("Тех. план", "Tech plan")]];
    [[0, 1], [0, 2], [0, 3], [1, 4], [2, 4], [3, 4]].forEach(function (e) { o += line(p[e[0]][0] + 38, p[e[0]][1], p[e[1]][0] + 38, p[e[1]][1], "a-line"); });
    p.forEach(function (q, i) { o += r(q[0], q[1] - 13, 76, 26, i === 4 ? "a-acc" : "a-card", 9) + t(q[0] + 38, q[1] + 3.5, q[2], i === 4 ? "a-dk" : "a-b", "middle"); });
    o += r(214, 126, 90, 20, "a-fill2", 9) + t(259, 139.5, T("Решение: взять", "Verdict: accept"), "a-b", "middle");
    return o;
  };

  S.jeopardy = function () {
    var o = frame(T("Своя игра", "Quiz game"));
    var cat = T("Наука|Кино|Города", "Science|Film|Cities").split("|");
    cat.forEach(function (s, i) {
      o += r(16 + i * 98, 36, 92, 20, "a-fill", 7) + t(62 + i * 98, 49.5, s, "a-w", "middle");
      [100, 200, 300].forEach(function (v, j) { o += r(16 + i * 98, 62 + j * 26, 92, 22, i === 0 && j === 0 ? "a-line2" : "a-fill2", 7) + (i === 0 && j === 0 ? "" : t(62 + i * 98, 77 + j * 26, v, "a-t", "middle")); });
    });
    o += r(16, 144, 140, 22, "a-acc", 8) + t(86, 158.5, T("Команда 1: 300", "Team 1: 300"), "a-dk", "middle");
    o += r(164, 144, 140, 22, "a-card", 8) + t(234, 158.5, T("Команда 2: 200", "Team 2: 200"), "a-b", "middle");
    return o;
  };

  S.apisec = function () {
    var o = frame(T("API: чужой объект", "API: someone else's object"));
    o += r(16, 36, 130, 44, "a-code", 8) + t(24, 52, "GET /cats/2", "a-ct") + t(24, 66, "user: alice", "a-ct");
    o += t(16, 98, T("Кот №2 принадлежит Bob", "Cat no. 2 belongs to Bob"), "a-s");
    o += r(16, 110, 130, 22, "a-card", 11) + r(22, 114, 36, 14, "a-line2", 7) + c(125, 121, 7, "a-ok") + t(66, 124.5, T("Проверка", "Owner check"), "a-b");
    o += '<path class="a-arrow" d="M152 58 H168 M162 52 L168 58 L162 64"/>';
    o += r(176, 36, 128, 54, "a-card a-bad-b", 8) + t(184, 52, T("Без проверки", "No check"), "a-b") + t(184, 69, "200 OK", "a-badt") + t(184, 82, T("данные Bob у Alice", "Bob's data to Alice"), "a-s");
    o += r(176, 98, 128, 54, "a-card a-ok-b", 8) + t(184, 114, T("С проверкой", "With check"), "a-b") + t(184, 131, "403 Forbidden", "a-okt") + t(184, 144, T("доступ закрыт", "access denied"), "a-s");
    return o;
  };

  S.invites = function () {
    var o = frame(T("Приглашения кандидатам", "Candidate invitations"));
    T("Анна|Игорь|Мария|Олег", "Anna|Igor|Maria|Oleg").split("|").forEach(function (s, i) {
      o += r(16, 38 + i * 28, 90, 22, i === 0 ? "a-fill2" : "a-card", 8) + c(28, 49 + i * 28, 6, i === 0 ? "a-fill" : "a-line2") + t(40, 52.5 + i * 28, s, "a-b");
    });
    o += r(116, 36, 188, 128, "a-card", 8) + t(126, 54, T("Здравствуйте, Анна!", "Hello, Anna!"), "a-t");
    o += r(126, 64, 164, 5, "a-line2", 2) + r(126, 75, 150, 5, "a-line2", 2) + r(126, 86, 160, 5, "a-line2", 2);
    o += r(126, 98, 100, 16, "a-fill2", 6) + t(176, 109, T("Собеседование: пт 15:00", "Interview: Fri 3 pm"), "a-b", "middle");
    o += r(126, 136, 168, 20, "a-fill", 9) + t(210, 149.5, T("Пробный запуск, без отправки", "Dry run, nothing sent"), "a-w", "middle");
    return o;
  };

  S.webots = function () {
    var o = frame(T("Робот в комнате", "Robot in a room"));
    o += r(16, 36, 178, 130, "a-arena", 6) + r(60, 60, 18, 56, "a-fill2", 3) + r(124, 110, 52, 18, "a-fill2", 3);
    o += '<path class="a-line a-dash" d="M34 148 C 60 126, 40 80, 98 82 S 150 72, 176 48"/>' + c(34, 148, 6, "a-acc") + c(176, 48, 7, "a-fill");
    o += line(206, 34, 206, 168, "a-axis");
    T("Исследование|Объезд|Возврат|Остановка", "Explore|Avoid|Return|Stop").split("|").forEach(function (s, i) {
      o += r(214, 40 + i * 24, 90, 19, i === 1 ? "a-fill" : "a-card", 9) + t(259, 53 + i * 24, s, i === 1 ? "a-w" : "a-b", "middle");
    });
    o += t(214, 150, T("Одометрия", "Odometry"), "a-s") + t(214, 162, "x=96  y=238", "a-b");
    return o;
  };

  S.financeqt = function () {
    var o = frame("Finance tracker");
    o += '<polyline class="a-line3" points="20,120 52,100 84,108 116,80 148,88 180,60 212,70 240,48"/>';
    o += r(16, 36, 232, 8, "a-none", 0) + t(18, 46, T("Портфель", "Portfolio"), "a-b") + line(16, 140, 248, 140, "a-axis");
    [[T("Акции", "Stocks"), "+2,1%", 1], [T("Валюта", "FX"), "-0,4%", 0], [T("Крипто", "Crypto"), "+5,8%", 1]].forEach(function (x, i) {
      o += r(256, 38 + i * 42, 48, 36, "a-card", 8) + t(262, 52 + i * 42, x[0], "a-s") + t(262, 67 + i * 42, x[1], x[2] ? "a-okt2" : "a-badt");
    });
    o += t(18, 156, T("Графики и рынки на C++ и Qt", "Charts and markets in C++ and Qt"), "a-s");
    return o;
  };

  S.dashboards = function () {
    var o = frame(T("Набор в специалитет", "Program intake"));
    o += t(16, 46, T("Заявления по годам", "Applications by year"), "a-b");
    [[2024, 52], [2025, 74], [2026, 98]].forEach(function (x, i) { o += r(30 + i * 56, 150 - x[1], 40, x[1], i === 2 ? "a-acc" : "a-fill", 5) + t(50 + i * 56, 162, x[0], "a-s", "middle"); });
    o += line(16, 150, 196, 150, "a-axis") + line(206, 34, 206, 168, "a-axis");
    o += t(214, 46, T("Средний балл", "Average score"), "a-b") + '<polyline class="a-line3" points="214,110 240,96 266,82 298,60"/>';
    o += r(214, 126, 90, 30, "a-card", 8) + t(222, 139, T("Проходной", "Cut-off"), "a-s") + t(222, 151, T("растет", "rising"), "a-b");
    return o;
  };

  window.SCREENS = {
    has: function (id) { return !!S[id]; },
    draw: function (id, lg) { lang = lg; return '<svg viewBox="0 0 320 180" class="art shot" role="img" aria-label="">' + S[id]() + "</svg>"; }
  };
})();
