/* Маленький 3D-движок без библиотек: электропоезд из плоских граней на canvas.
   Модель упрощенная, сделана по мотивам работ из портфолио. Вращение: мышь или палец, масштаб: колесо, щипок или кнопки. */
(function () {
  "use strict";

  /* ---------- геометрия ---------- */
  var CENTER = [0, 1.5, 0];
  function sub(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
  function cross(a, b) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
  function norm(a) { var l = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; }
  function dot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
  function centroid(v) { var c = [0, 0, 0]; v.forEach(function (p) { c[0] += p[0]; c[1] += p[1]; c[2] += p[2]; }); return [c[0] / v.length, c[1] / v.length, c[2] / v.length]; }
  function autoNormal(v) {
    var n = norm(cross(sub(v[1], v[0]), sub(v[2], v[0])));
    if (dot(n, sub(centroid(v), CENTER)) < 0) n = [-n[0], -n[1], -n[2]];
    return n;
  }

  var C = {
    body: [128, 138, 150], dark: [26, 33, 43], roof: [200, 207, 216], frame: [52, 58, 66], frame2: [70, 78, 88],
    stripe: [232, 144, 58], red: [208, 66, 58], glass: [34, 46, 62], lit: [236, 226, 196], lamp: [255, 238, 170],
    wheel: [44, 48, 54], hub: [150, 156, 164], rail: [120, 126, 134], sleeper: [88, 80, 72]
  };

  function build() {
    var solid = [], flat = [];
    function add(list, v, n, col, decals) { var f = { v: v, n: n || autoNormal(v), c: col, d: decals || [] }; list.push(f); return f; }
    function box(x0, x1, y0, y1, z0, z1, col) {
      var P = function (x, y, z) { return [x, y, z]; };
      return {
        px: add(solid, [P(x1, y0, z0), P(x1, y1, z0), P(x1, y1, z1), P(x1, y0, z1)], [1, 0, 0], col),
        nx: add(solid, [P(x0, y0, z1), P(x0, y1, z1), P(x0, y1, z0), P(x0, y0, z0)], [-1, 0, 0], col),
        py: add(solid, [P(x0, y1, z0), P(x0, y1, z1), P(x1, y1, z1), P(x1, y1, z0)], [0, 1, 0], col),
        ny: add(solid, [P(x0, y0, z1), P(x0, y0, z0), P(x1, y0, z0), P(x1, y0, z1)], [0, -1, 0], col),
        pz: add(solid, [P(x0, y0, z1), P(x1, y0, z1), P(x1, y1, z1), P(x0, y1, z1)], [0, 0, 1], col),
        nz: add(solid, [P(x1, y0, z0), P(x0, y0, z0), P(x0, y1, z0), P(x1, y1, z0)], [0, 0, -1], col)
      };
    }
    function qz(x0, x1, y0, y1, z, col) { return { v: [[x0, y0, z], [x1, y0, z], [x1, y1, z], [x0, y1, z]], c: col }; }

    /* путь: земля, шпалы, рельсы */
    flat.push({ v: [[-13, 0, -2.2], [13, 0, -2.2], [13, 0, 2.2], [-13, 0, 2.2]], c: [20, 30, 44], a: 0.22 });
    for (var s = -11.4; s <= 11.4; s += 1.2) flat.push({ v: [[s - 0.17, 0.04, -1.5], [s + 0.17, 0.04, -1.5], [s + 0.17, 0.04, 1.5], [s - 0.17, 0.04, 1.5]], c: C.sleeper });
    box(-13, 13, 0.04, 0.14, 0.66, 0.8, C.rail); box(-13, 13, 0.04, 0.14, -0.8, -0.66, C.rail);

    /* подвеска и тележки */
    box(-2.5, -0.7, 0.8, 0.93, -0.7, 0.7, C.frame2); box(0.5, 2.1, 0.8, 0.93, -0.7, 0.7, C.frame2);
    [-3.2, 2.8].forEach(function (bx) {
      box(bx - 0.95, bx + 0.95, 0.5, 0.78, -0.55, 0.55, C.frame);
      [-0.72, 0.72].forEach(function (ax) {
        [-0.86, 0.86].forEach(function (wz) {
          var v = [], hub = [], k;
          for (k = 0; k < 14; k++) { var a = k / 14 * Math.PI * 2; v.push([bx + ax + Math.cos(a) * 0.4, 0.52 + Math.sin(a) * 0.4, wz]); hub.push([bx + ax + Math.cos(a) * 0.14, 0.52 + Math.sin(a) * 0.14, wz + (wz > 0 ? 0.012 : -0.012)]); }
          add(solid, v, [0, 0, wz > 0 ? 1 : -1], C.wheel, [{ v: hub, c: C.hub }]);
        });
      });
    });

    /* кузов */
    box(-5, 4.6, 0.93, 1.1, -1.1, 1.1, C.frame);
    var body = box(-5, 4.6, 1.1, 2.7, -1.2, 1.2, C.body);
    [[body.pz, 1.212], [body.nz, -1.212]].forEach(function (pair) {
      var f = pair[0], z = pair[1];
      f.d.push(qz(-5, 4.6, 1.6, 2.5, z, C.dark));
      f.d.push(qz(-5, 4.6, 1.3, 1.38, z, C.stripe));
      for (var i = 0; i < 8; i++) {
        var x = -4.4 + i * 1.15;
        f.d.push(qz(x, x + 0.8, 1.72, 2.38, z * 1.002, i % 3 === 1 ? C.lit : C.glass));
      }
    });
    body.nx.d.push({ v: [[-5.012, 1.6, 0.5], [-5.012, 1.6, -0.5], [-5.012, 2.5, -0.5], [-5.012, 2.5, 0.5]], c: C.dark });
    body.nx.d.push({ v: [[-5.014, 1.75, 0.38], [-5.014, 1.75, -0.38], [-5.014, 2.35, -0.38], [-5.014, 2.35, 0.38]], c: C.glass });

    /* крыша и оборудование */
    box(-4.9, 4.4, 2.7, 2.95, -0.9, 0.9, C.roof);
    box(-2.2, -0.6, 2.95, 3.2, -0.6, 0.6, C.roof); box(0.7, 2.3, 2.95, 3.2, -0.6, 0.6, C.roof);

    /* нос */
    var bt = [4.6, 2.7], bb = [4.6, 1.1], ft = [6.3, 2.3], fb = [6.3, 1.25], bz = 1.2, fz = 0.82;
    var N = {
      top: [[bt[0], bt[1], -bz], [bt[0], bt[1], bz], [ft[0], ft[1], fz], [ft[0], ft[1], -fz]],
      bottom: [[bb[0], bb[1], bz], [bb[0], bb[1], -bz], [fb[0], fb[1], -fz], [fb[0], fb[1], fz]],
      right: [[bb[0], bb[1], bz], [fb[0], fb[1], fz], [ft[0], ft[1], fz], [bt[0], bt[1], bz]],
      left: [[fb[0], fb[1], -fz], [bb[0], bb[1], -bz], [bt[0], bt[1], -bz], [ft[0], ft[1], -fz]],
      front: [[fb[0], fb[1], fz], [fb[0], fb[1], -fz], [ft[0], ft[1], -fz], [ft[0], ft[1], fz]]
    };
    add(solid, N.top, null, C.body); add(solid, N.bottom, null, C.frame);
    add(solid, N.right, null, C.body, [{ v: [[4.8, 1.75, 1.18], [5.8, 1.78, 0.86], [5.8, 2.2, 0.85], [4.8, 2.4, 1.17]], c: C.glass }]);
    add(solid, N.left, null, C.body, [{ v: [[5.8, 1.78, -0.86], [4.8, 1.75, -1.18], [4.8, 2.4, -1.17], [5.8, 2.2, -0.85]], c: C.glass }]);
    add(solid, N.front, null, C.body, [
      { v: [[6.312, 1.6, 0.62], [6.312, 1.6, -0.62], [6.312, 2.2, -0.55], [6.312, 2.2, 0.55]], c: C.glass },
      { v: [[6.312, 1.36, 0.6], [6.312, 1.36, 0.42], [6.312, 1.5, 0.42], [6.312, 1.5, 0.6]], c: C.lamp },
      { v: [[6.312, 1.36, -0.42], [6.312, 1.36, -0.6], [6.312, 1.5, -0.6], [6.312, 1.5, -0.42]], c: C.lamp }
    ]);
    box(5.9, 6.4, 0.85, 1.28, -0.82, 0.82, C.red);

    return { solid: solid, flat: flat, pantograph: [[[-0.8, 3.2, 0], [0, 3.85, 0], [0.8, 3.2, 0]], [[0, 3.85, 0.42], [0, 3.85, -0.42]]] };
  }

  /* ---------- отрисовка ---------- */
  function mount(canvas, opts) {
    opts = opts || {};
    var model = build(), ctx = canvas.getContext("2d");
    var st = { yaw: -0.75, pitch: 0.3, zoom: 1, auto: opts.auto !== false, lastTouch: 0, dirty: true, visible: true, dead: false };
    var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    var W = 0, H = 0, dpr = 1, raf = 0, prev = 0;
    var pointers = {}, pinch0 = 0, zoom0 = 1;

    function resize() {
      var w = canvas.clientWidth, h = canvas.clientHeight; dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (!w || !h) return false;
      if (w !== W || h !== H || canvas.width !== Math.round(w * dpr)) { W = w; H = h; canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); st.dirty = true; }
      return true;
    }
    function tf(p, cy, sy, cp, sp, D) {
      var x = p[0] - CENTER[0], y = p[1] - CENTER[1], z = p[2] - CENTER[2];
      var X = x * cy + z * sy, Z = -x * sy + z * cy;
      return [X, y * cp - Z * sp, y * sp + Z * cp + D];
    }
    function rot(n, cy, sy, cp, sp) {
      var X = n[0] * cy + n[2] * sy, Z = -n[0] * sy + n[2] * cy;
      return [X, n[1] * cp - Z * sp, n[1] * sp + Z * cp];
    }
    var LIGHT = norm([-0.35, 0.75, -0.6]);
    function shade(col, n) { var k = 0.42 + 0.58 * Math.max(0, dot(n, LIGHT)); return "rgb(" + Math.round(col[0] * k) + "," + Math.round(col[1] * k) + "," + Math.round(col[2] * k) + ")"; }

    function draw() {
      if (!resize()) return;
      var cy = Math.cos(st.yaw), sy = Math.sin(st.yaw), cp = Math.cos(st.pitch), sp = Math.sin(st.pitch);
      var D = 30 / st.zoom, f = Math.min(W * 1.2, H * 2.0) * 30 / 19 * 1.2;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
      var ox = W / 2, oy = H * 0.52;
      function proj(q) { return [ox + f * q[0] / q[2], oy - f * q[1] / q[2]]; }
      function poly(v, fill, alpha) {
        ctx.beginPath(); for (var i = 0; i < v.length; i++) { var s = proj(v[i]); i ? ctx.lineTo(s[0], s[1]) : ctx.moveTo(s[0], s[1]); }
        ctx.closePath(); if (alpha != null) ctx.globalAlpha = alpha; ctx.fillStyle = fill; ctx.fill(); ctx.strokeStyle = fill; ctx.lineWidth = 0.7; ctx.stroke(); if (alpha != null) ctx.globalAlpha = 1;
      }
      model.flat.forEach(function (fc) {
        var v = fc.v.map(function (p) { return tf(p, cy, sy, cp, sp, D); });
        if (v.some(function (q) { return q[2] < 1; })) return;
        poly(v, fc.a != null ? "rgb(" + fc.c.join(",") + ")" : shade(fc.c, [0, 1, 0]), fc.a);
      });
      var list = [];
      model.solid.forEach(function (fc) {
        var v = fc.v.map(function (p) { return tf(p, cy, sy, cp, sp, D); });
        var c = centroid(v), n = rot(fc.n, cy, sy, cp, sp);
        if (dot(n, c) >= 0) return;
        list.push({ f: fc, v: v, n: n, d: c[0] * c[0] + c[1] * c[1] + c[2] * c[2], cy: cy, sy: sy });
      });
      list.sort(function (a, b) { return b.d - a.d; });
      list.forEach(function (it) {
        poly(it.v, shade(it.f.c, it.n));
        it.f.d.forEach(function (dc) {
          if (!dc) return;
          poly(dc.v.map(function (p) { return tf(p, cy, sy, cp, sp, D); }), shade(dc.c, it.n));
        });
      });
      /* токоприемник на крыше */
      ctx.strokeStyle = "rgb(" + shade(C.red, [0, 0, -1]).slice(4, -1) + ")"; ctx.lineWidth = Math.max(1.4, f * 0.012); ctx.lineCap = "round"; ctx.lineJoin = "round";
      var pg = model.pantograph;
      var a = proj(tf(pg[0][0], cy, sy, cp, sp, D)), b = proj(tf(pg[0][1], cy, sy, cp, sp, D)), c = proj(tf(pg[0][2], cy, sy, cp, sp, D));
      ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.lineTo(c[0], c[1]); ctx.stroke();
      var d1 = proj(tf(pg[1][0], cy, sy, cp, sp, D)), d2 = proj(tf(pg[1][1], cy, sy, cp, sp, D));
      ctx.beginPath(); ctx.moveTo(d1[0], d1[1]); ctx.lineTo(d2[0], d2[1]); ctx.stroke();
    }

    function loop(t) {
      if (st.dead) return;
      raf = requestAnimationFrame(loop);
      if (!st.visible || document.hidden) { prev = t; return; }
      var dt = Math.min(0.05, (t - (prev || t)) / 1000); prev = t;
      if (st.auto && !reduce && !Object.keys(pointers).length && t - st.lastTouch > 2200) { st.yaw += dt * 0.42; st.dirty = true; }
      if (st.dirty) { st.dirty = false; draw(); }
    }
    raf = requestAnimationFrame(loop);

    function touch() { st.lastTouch = performance.now(); st.dirty = true; }
    function clampZoom() { st.zoom = Math.max(0.65, Math.min(2.6, st.zoom)); }
    canvas.style.cursor = "grab";
    canvas.addEventListener("pointerdown", function (e) {
      pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
      try { canvas.setPointerCapture(e.pointerId); } catch (x) { /* noop */ }
      var ids = Object.keys(pointers);
      if (ids.length === 2) { var p = pointers[ids[0]], q = pointers[ids[1]]; pinch0 = Math.hypot(p.x - q.x, p.y - q.y); zoom0 = st.zoom; }
      canvas.style.cursor = "grabbing"; touch();
    });
    canvas.addEventListener("pointermove", function (e) {
      var p = pointers[e.pointerId]; if (!p) return;
      var ids = Object.keys(pointers);
      if (ids.length >= 2) {
        pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
        var a = pointers[ids[0]], b = pointers[ids[1]], dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (pinch0) { st.zoom = zoom0 * dist / pinch0; clampZoom(); }
      } else {
        st.yaw += (e.clientX - p.x) * 0.011; if (!opts.horizontalOnly) st.pitch = Math.max(0.04, Math.min(1.3, st.pitch + (e.clientY - p.y) * 0.008));
        pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
      }
      touch();
    });
    function up(e) { delete pointers[e.pointerId]; pinch0 = 0; canvas.style.cursor = "grab"; touch(); }
    canvas.addEventListener("pointerup", up); canvas.addEventListener("pointercancel", up);
    canvas.addEventListener("wheel", function (e) {
      if (!opts.wheel && !(e.ctrlKey || e.metaKey)) return;
      e.preventDefault(); st.zoom *= Math.exp(-e.deltaY * 0.0016); clampZoom(); touch();
    }, { passive: false });
    canvas.addEventListener("keydown", function (e) {
      var k = e.key, h = true;
      if (k === "ArrowLeft") st.yaw -= 0.15; else if (k === "ArrowRight") st.yaw += 0.15; else if (k === "ArrowUp") st.pitch = Math.min(1.3, st.pitch + 0.08); else if (k === "ArrowDown") st.pitch = Math.max(0.04, st.pitch - 0.08);
      else if (k === "+" || k === "=") { st.zoom *= 1.15; clampZoom(); } else if (k === "-") { st.zoom /= 1.15; clampZoom(); } else h = false;
      if (h) { e.preventDefault(); touch(); }
    });
    var io = window.IntersectionObserver ? new IntersectionObserver(function (en) { st.visible = en[0].isIntersecting; if (st.visible) st.dirty = true; }) : null;
    if (io) io.observe(canvas);
    var ro = window.ResizeObserver ? new ResizeObserver(function () { st.dirty = true; }) : null;
    if (ro) ro.observe(canvas);

    return {
      zoomBy: function (k) { st.zoom *= k; clampZoom(); touch(); },
      reset: function () { st.yaw = -0.75; st.pitch = 0.3; st.zoom = 1; touch(); },
      destroy: function () { st.dead = true; cancelAnimationFrame(raf); if (io) io.disconnect(); if (ro) ro.disconnect(); }
    };
  }

  window.Train3D = { mount: mount };
})();
