/* Маленький 3D-движок без библиотек: электропоезд из плоских граней на canvas.
   Модель упрощенная, сделана по мотивам работ из портфолио. Вращение: мышь или палец, масштаб: колесо, щипок или кнопки. */
(function () {
  "use strict";

  /* ---------- геометрия ---------- */
  var CENTER = [0.7, 1.5, 0];
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
    body: [236, 239, 244], low: [196, 203, 214], roof: [168, 177, 190], dark: [24, 32, 44], glass: [24, 36, 54], glassHi: [66, 94, 128],
    stripe: [240, 138, 40], red: [212, 62, 44], frame: [44, 50, 58], frame2: [70, 78, 90], lamp: [255, 240, 190], ac: [214, 220, 228],
    wheel: [38, 42, 48], hub: [176, 182, 190], rail: [132, 138, 146], sleeper: [98, 88, 78], door: [202, 209, 219], gap: [140, 148, 160]
  };
  function lerp3(a, b, t) { return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]; }

  /* контур сечения (z, y): скругленный прямоугольник, одинаковое число точек в каждом сечении */
  function ring(w, y0, y1, rb, rt, seg) {
    var pts = [], k, a;
    function corner(cz, cy, r, from) { for (k = 0; k <= seg; k++) { a = (from + 90 * k / seg) * Math.PI / 180; pts.push([cz + r * Math.cos(a), cy + r * Math.sin(a)]); } }
    corner(w - rb, y0 + rb, rb, -90); corner(w - rt, y1 - rt, rt, 0); corner(-(w - rt), y1 - rt, rt, 90); corner(-(w - rb), y0 + rb, rb, 180);
    return pts;
  }

  function build(lite) {
    var solid = [], flat = [], seg = lite ? 2 : 5;
    function add(list, v, n, col, decals) { var f = { v: v, n: n || autoNormal(v), c: col, d: decals || [] }; list.push(f); return f; }
    function box(x0, x1, y0, y1, z0, z1, col) {
      var P = function (x, y, z) { return [x, y, z]; };
      add(solid, [P(x1, y0, z0), P(x1, y1, z0), P(x1, y1, z1), P(x1, y0, z1)], [1, 0, 0], col);
      add(solid, [P(x0, y0, z1), P(x0, y1, z1), P(x0, y1, z0), P(x0, y0, z0)], [-1, 0, 0], col);
      add(solid, [P(x0, y1, z0), P(x0, y1, z1), P(x1, y1, z1), P(x1, y1, z0)], [0, 1, 0], col);
      add(solid, [P(x0, y0, z1), P(x0, y0, z0), P(x1, y0, z0), P(x1, y0, z1)], [0, -1, 0], col);
      add(solid, [P(x0, y0, z1), P(x1, y0, z1), P(x1, y1, z1), P(x0, y1, z1)], [0, 0, 1], col);
      add(solid, [P(x1, y0, z0), P(x0, y0, z0), P(x0, y1, z0), P(x1, y1, z0)], [0, 0, -1], col);
    }

    /* путь, шпалы, рельсы, тень */
    if (!lite) flat.push({ v: [[-13, 0, -2.4], [13, 0, -2.4], [13, 0, 2.4], [-13, 0, 2.4]], c: [70, 100, 150], a: 0.10 });
    flat.push({ v: [[-6, 0.01, -1.8], [7.2, 0.01, -1.8], [7.2, 0.01, 1.8], [-6, 0.01, 1.8]], c: [0, 0, 0], a: 0.10 });
    flat.push({ v: [[-5.6, 0.02, -1.5], [6.9, 0.02, -1.5], [6.9, 0.02, 1.5], [-5.6, 0.02, 1.5]], c: [0, 0, 0], a: 0.12 });
    var RL = lite ? 7.6 : 13;
    for (var s = lite ? -7.2 : -12; s <= (lite ? 7.2 : 12); s += lite ? 2.4 : 1.2) flat.push({ v: [[s - 0.17, 0.04, -1.5], [s + 0.17, 0.04, -1.5], [s + 0.17, 0.04, 1.5], [s - 0.17, 0.04, 1.5]], c: C.sleeper });
    box(-RL, RL, 0.04, 0.15, 0.68, 0.8, C.rail); box(-RL, RL, 0.04, 0.15, -0.8, -0.68, C.rail);

    /* тележки */
    [-3.2, 2.8].forEach(function (bx) {
      box(bx - 1.0, bx + 1.0, 0.52, 0.8, -0.58, 0.58, C.frame);
      box(bx - 0.5, bx + 0.5, 0.8, 0.98, -0.7, 0.7, C.frame2);
      [-0.74, 0.74].forEach(function (ax) {
        [-0.9, 0.9].forEach(function (wz) {
          var v = [], hub = [], k, n = lite ? 10 : 18;
          for (k = 0; k < n; k++) { var a = k / n * Math.PI * 2; v.push([bx + ax + Math.cos(a) * 0.42, 0.54 + Math.sin(a) * 0.42, wz]); hub.push([bx + ax + Math.cos(a) * 0.16, 0.54 + Math.sin(a) * 0.16, wz + (wz > 0 ? 0.012 : -0.012)]); }
          add(solid, v, [0, 0, wz > 0 ? 1 : -1], C.wheel, lite ? [] : [{ v: hub, c: C.hub }]);
          box(bx + ax - 0.12, bx + ax + 0.12, 0.44, 0.64, wz > 0 ? 0.74 : -0.9, wz > 0 ? 0.9 : -0.74, C.frame2);
        });
      });
    });

    /* кузов: набор сечений, между ними грани */
    var X0 = -5, X1 = 4.6, BL = X1 - X0;
    var secs = [
      [X0, 1.2, 1.1, 2.7, 0.12, 0.34, C.low], [X1, 1.2, 1.1, 2.7, 0.12, 0.34, C.low],
      [5.25, 1.14, 1.14, 2.6, 0.16, 0.4, C.red], [5.85, 1.0, 1.2, 2.47, 0.2, 0.44, C.red], [6.28, 0.8, 1.3, 2.3, 0.22, 0.46, C.red]
    ].map(function (q) { return { x: q[0], r: ring(q[1], q[2], q[3], q[4], q[5], seg), low: q[6], w: q[1], y0: q[2], y1: q[3], rb: q[4], rt: q[5] }; });
    var sideR = [], sideL = [], kR = seg, kL = 3 * seg + 2, n = secs[0].r.length;
    for (var i = 0; i < secs.length - 1; i++) {
      var A = secs[i], B = secs[i + 1];
      for (var k = 0; k < n; k++) {
        var k2 = (k + 1) % n, pa = A.r[k], pb = A.r[k2], pc = B.r[k2], pd = B.r[k];
        var v = [[A.x, pa[1], pa[0]], [A.x, pb[1], pb[0]], [B.x, pc[1], pc[0]], [B.x, pd[1], pd[0]]];
        var ym = (pa[1] + pb[1] + pc[1] + pd[1]) / 4, top = A.y1 - A.rt * 0.8, bot = A.y0 + A.rb + 0.05;
        var col = ym > top ? C.roof : (ym < bot ? (i >= 1 ? C.red : C.low) : C.body);
        if (ym > top && ym < A.y1 - 0.02 && Math.abs((pa[0] + pb[0]) / 2) > A.w - A.rt * 0.75) col = lerp3(C.body, C.roof, 0.55);
        var f = add(solid, v, null, col);
        if (k === kR) sideR[i] = { f: f, lo0: v[0], hi0: v[1], hi1: v[2], lo1: v[3] };
        if (k === kL) sideL[i] = { f: f, hi0: v[0], lo0: v[1], lo1: v[2], hi1: v[3] };
      }
    }
    /* точка на боковой грани: u вдоль поезда, v по высоте, чуть над поверхностью */
    function at(sd, u, v, off) {
      var lo = lerp3(sd.lo0, sd.lo1, u), hi = lerp3(sd.hi0, sd.hi1, u), p = lerp3(lo, hi, v), nn = sd.f.n;
      return [p[0] + nn[0] * off, p[1] + nn[1] * off, p[2] + nn[2] * off];
    }
    function pane(sd, u0, u1, v0, v1, col, ru, rv, off) {
      if (lite && (col === C.glassHi || col === C.gap)) return;
      ru = ru || 0.02; rv = rv || 0.08; off = off || 0.012;
      var q = [[u0 + ru, v0], [u1 - ru, v0], [u1, v0 + rv], [u1, v1 - rv], [u1 - ru, v1], [u0 + ru, v1], [u0, v1 - rv], [u0, v0 + rv]];
      sd.f.d.push({ v: q.map(function (p) { return at(sd, p[0], p[1], off); }), c: col });
    }
    var bodyR = sideR[0], bodyL = sideL[0];
    [bodyR, bodyL].forEach(function (sd) {
      pane(sd, 0, 1, 0.1, 0.17, C.stripe, 0, 0, 0.01);
      pane(sd, 0, 1, 0.0, 0.1, C.gap, 0, 0, 0.008);
      for (var c = 0; c < 8; c++) {
        var cu = c / 8, cw = 1 / 8, door = c === 2 || c === 6;
        if (door) {
          pane(sd, cu + cw * 0.08, cu + cw * 0.92, 0.12, 0.94, C.door, 0.01, 0.03, 0.011);
          pane(sd, cu + cw * 0.46, cu + cw * 0.54, 0.12, 0.94, C.gap, 0, 0, 0.013);
          pane(sd, cu + cw * 0.17, cu + cw * 0.41, 0.4, 0.88, C.glass, 0.006, 0.05, 0.015);
          pane(sd, cu + cw * 0.59, cu + cw * 0.83, 0.4, 0.88, C.glass, 0.006, 0.05, 0.015);
        } else {
          pane(sd, cu + cw * 0.09, cu + cw * 0.91, 0.38, 0.9, C.glass, 0.012, 0.07, 0.012);
          pane(sd, cu + cw * 0.13, cu + cw * 0.87, 0.74, 0.86, C.glassHi, 0.01, 0.04, 0.014);
        }
      }
    });
    /* окна кабины на скосе носа */
    [sideR, sideL].forEach(function (S) {
      pane(S[1], 0.15, 0.95, 0.4, 0.9, C.glass, 0.03, 0.08, 0.012);
      pane(S[1], 0.2, 0.9, 0.76, 0.86, C.glassHi, 0.02, 0.04, 0.014);
      pane(S[2], 0.1, 0.75, 0.4, 0.88, C.glass, 0.04, 0.08, 0.012);
    });
    /* торцы */
    function cap(sec, flip, col) { return add(solid, sec.r.map(function (p) { return [sec.x, p[1], p[0]]; }), [flip, 0, 0], col); }
    var back = cap(secs[0], -1, C.body), front = cap(secs[secs.length - 1], 1, C.red);
    function fpoly(cx, pts, col, x) { return { v: pts.map(function (p) { return [x, p[1], p[0] * cx]; }), c: col }; }
    var fx = secs[secs.length - 1].x + 0.012;
    front.d.push(fpoly(1, [[0.62, 1.68], [-0.62, 1.68], [-0.66, 1.78], [-0.6, 2.12], [-0.46, 2.2], [0.46, 2.2], [0.6, 2.12], [0.66, 1.78]], C.glass, fx));
    front.d.push(fpoly(1, [[0.5, 1.98], [-0.2, 1.98], [-0.32, 2.14], [0.46, 2.14]], C.glassHi, fx + 0.004));
    [0.56, -0.56].forEach(function (z) { var q = [], k; for (k = 0; k < 10; k++) { var a = k / 10 * Math.PI * 2; q.push([z + Math.cos(a) * 0.09, 1.46 + Math.sin(a) * 0.075]); } front.d.push(fpoly(1, q, C.lamp, fx)); });
    front.d.push(fpoly(1, [[0.45, 1.35], [-0.45, 1.35], [-0.45, 1.42], [0.45, 1.42]], C.dark, fx));
    back.d.push(fpoly(1, [[0.55, 1.4], [-0.55, 1.4], [-0.6, 2.3], [0.6, 2.3]], C.dark, secs[0].x - 0.012));

    /* подвагонное оборудование, крыша */
    box(X0, X1, 0.95, 1.1, -1.0, 1.0, C.frame);
    box(-2.2, -0.5, 0.72, 0.95, -0.8, 0.8, C.frame2); box(0.4, 1.9, 0.72, 0.95, -0.8, 0.8, C.frame2); box(-0.2, 0.3, 0.82, 0.95, -0.6, 0.6, C.frame);
    box(5.95, 6.55, 0.88, 1.3, -0.7, 0.7, C.frame2);
    [[-4.2, -2.6], [1.4, 3.0]].forEach(function (r) { box(r[0], r[1], 2.62, 2.9, -0.55, 0.55, C.ac); box(r[0] + 0.15, r[1] - 0.15, 2.9, 2.98, -0.4, 0.4, C.low); });
    box(-0.5, 0.5, 2.62, 2.8, -0.35, 0.35, C.frame2);

    return { solid: solid, flat: flat, pantograph: [[[-0.9, 2.8, 0], [0, 3.55, 0], [0.9, 2.8, 0]], [[0, 3.55, 0.45], [0, 3.55, -0.45]]] };
  }

  /* общая отрисовка: ctx может быть canvas или записывающим объектом (для SVG-анимации в README) */
  function paint(ctx, model, W, H, yaw, pitch, zoom) {
  function tf(p, cy, sy, cp, sp, D) {
    var x = p[0] - CENTER[0], y = p[1] - CENTER[1], z = p[2] - CENTER[2];
    var X = x * cy + z * sy, Z = -x * sy + z * cy;
    return [X, y * cp + Z * sp, -y * sp + Z * cp + D];
  }
  function rot(n, cy, sy, cp, sp) {
    var X = n[0] * cy + n[2] * sy, Z = -n[0] * sy + n[2] * cy;
    return [X, n[1] * cp + Z * sp, -n[1] * sp + Z * cp];
  }
  var LIGHT = norm([-0.35, 0.75, -0.6]);
  function shade(col, n, m) { var k = (0.52 + 0.55 * Math.max(0, dot(n, LIGHT))) * (m || 1); if (k > 1.08) k = 1.08; return "rgb(" + Math.round(col[0] * k) + "," + Math.round(col[1] * k) + "," + Math.round(col[2] * k) + ")"; }
    var cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
    var D = 30 / zoom, f = Math.min(W * 1.2, H * 2.0) * 30 / 19;
    ctx.clearRect(0, 0, W, H);
    var ox = W / 2, oy = H * 0.52;
    function proj(q) { return [ox + f * q[0] / q[2], oy - f * q[1] / q[2]]; }
    function poly(v, fill, alpha, edge) {
      ctx.beginPath(); for (var i = 0; i < v.length; i++) { var s = proj(v[i]); i ? ctx.lineTo(s[0], s[1]) : ctx.moveTo(s[0], s[1]); }
      ctx.closePath(); if (alpha != null) ctx.globalAlpha = alpha; ctx.fillStyle = fill; ctx.fill(); ctx.strokeStyle = edge || fill; ctx.lineWidth = 0.6; ctx.stroke(); if (alpha != null) ctx.globalAlpha = 1;
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
      poly(it.v, shade(it.f.c, it.n), null, shade(it.f.c, it.n, 0.72));
      it.f.d.forEach(function (dc) {
        if (!dc) return;
        poly(dc.v.map(function (p) { return tf(p, cy, sy, cp, sp, D); }), shade(dc.c, it.n), null, shade(dc.c, it.n, 0.8));
      });
    });
    /* токоприемник на крыше */
    ctx.strokeStyle = "rgb(60,66,76)"; ctx.lineWidth = Math.max(1.4, f * 0.011); ctx.lineCap = "round"; ctx.lineJoin = "round";
    var pg = model.pantograph;
    var a = proj(tf(pg[0][0], cy, sy, cp, sp, D)), b = proj(tf(pg[0][1], cy, sy, cp, sp, D)), c = proj(tf(pg[0][2], cy, sy, cp, sp, D));
    ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.lineTo(c[0], c[1]); ctx.stroke();
    var d1 = proj(tf(pg[1][0], cy, sy, cp, sp, D)), d2 = proj(tf(pg[1][1], cy, sy, cp, sp, D));
    ctx.beginPath(); ctx.moveTo(d1[0], d1[1]); ctx.lineTo(d2[0], d2[1]); ctx.stroke();
  }

  /* ---------- отрисовка ---------- */
  function mount(canvas, opts) {
    opts = opts || {};
    var model = build(), ctx = canvas.getContext("2d");
    var st = { yaw: -0.75, pitch: 0.42, zoom: 1, auto: opts.auto !== false, lastTouch: 0, dirty: true, visible: true, dead: false };
    var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    var W = 0, H = 0, dpr = 1, raf = 0, prev = 0;
    var pointers = {}, pinch0 = 0, zoom0 = 1;

    function resize() {
      var w = canvas.clientWidth, h = canvas.clientHeight; dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (!w || !h) return false;
      if (w !== W || h !== H || canvas.width !== Math.round(w * dpr)) { W = w; H = h; canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); st.dirty = true; }
      return true;
    }
    function draw() {
      if (!resize()) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      paint(ctx, model, W, H, st.yaw, st.pitch, st.zoom);
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
      pointers[e.pointerId] = { x: e.clientX, y: e.clientY }; canvas._moved = false; canvas._sx = e.clientX; canvas._sy = e.clientY;
      try { canvas.setPointerCapture(e.pointerId); } catch (x) { /* noop */ }
      var ids = Object.keys(pointers);
      if (ids.length === 2) { var p = pointers[ids[0]], q = pointers[ids[1]]; pinch0 = Math.hypot(p.x - q.x, p.y - q.y); zoom0 = st.zoom; }
      canvas.style.cursor = "grabbing"; touch();
    });
    canvas.addEventListener("pointermove", function (e) {
      var p = pointers[e.pointerId]; if (!p) return;
      if (Math.abs(e.clientX - canvas._sx) + Math.abs(e.clientY - canvas._sy) > 6) canvas._moved = true;
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
      reset: function () { st.yaw = -0.75; st.pitch = 0.42; st.zoom = 1; touch(); },
      destroy: function () { st.dead = true; cancelAnimationFrame(raf); if (io) io.disconnect(); if (ro) ro.disconnect(); }
    };
  }

  window.Train3D = { mount: mount, paint: paint, build: build };
})();
