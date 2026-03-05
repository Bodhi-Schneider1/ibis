// ============================================================
// IBIS ACADEMY — SVG VISUAL DIAGRAM LIBRARY
// Each function returns an HTML string containing an inline SVG
//
// Design system:
//   Primary   #667eea  (indigo)
//   Red       #e74c3c
//   Orange    #f59e0b
//   Green     #27ae60
//   Grid      #edeef8  (light lavender-tinted)
//   Axes      #94a3b8  (slate)
//   Card bg   #fafbff
// ============================================================

// --- Shared helpers ---

/** Returns a short random ID safe for SVG attribute use */
function _uid() { return Math.random().toString(36).slice(2, 7); }

/**
 * Standard SVG <defs> block: vertical linear gradient + soft drop shadow.
 * @param {string} gId   - gradient element id
 * @param {string} color - hex/rgb fill color
 * @param {string} fId   - filter element id (pass '' to skip)
 */
function _defs(gId, color, fId = '') {
  const grad = `
    <linearGradient id="${gId}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="${color}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0.04"/>
    </linearGradient>`;
  const filter = fId ? `
    <filter id="${fId}" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="${color}" flood-opacity="0.10"/>
    </filter>` : '';
  return `<defs>${grad}${filter}</defs>`;
}

/** Subtle card background for every SVG — gives diagrams a floating feel */
function _card(W, H) {
  return `<rect x="0" y="0" width="${W}" height="${H}" rx="14"
    fill="#fafbff" stroke="#edeef8" stroke-width="1"/>`;
}

/** Formula/label pill box (white card with colored border) */
function _pill(x, y, w, h, color = '#667eea') {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8"
    fill="white" stroke="${color}" stroke-width="1.2" opacity="0.95"/>`;
}

/** Horizontal grid line helper */
function _hGrid(y, x1, x2) {
  return `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="#edeef8" stroke-width="1"/>`;
}

/** Vertical grid line helper */
function _vGrid(x, y1, y2) {
  return `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="#edeef8" stroke-width="1"/>`;
}

/** Key point dot: white core + colored ring — more legible than solid fill */
function _dot(cx, cy, color, r = 5.5) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="white" stroke="${color}" stroke-width="2.2"/>
          <circle cx="${cx}" cy="${cy}" r="${r * 0.38}" fill="${color}"/>`;
}

export const svgVisuals = {

  // ---- Right triangle with labeled legs and hypotenuse ----
  rightTriangle({ a, b, c, angle }) {
    const W = 320, H = 240;
    const maxDim = Math.max(a, b, 1);
    const sa = Math.round((a / maxDim) * 160);
    const sb = Math.round((b / maxDim) * 130);
    const gId = _uid(), fId = _uid();

    const rx = 60, ry = 185;
    const ex = rx + sa, ey = ry;
    const tx = rx, ty = ry - sb;
    const hx = (tx + ex) / 2 + 10, hy = (ty + ey) / 2 - 10;

    const cLabel = c !== undefined
      ? (Number.isInteger(c) ? c : c.toFixed(2))
      : `√(${a}²+${b}²)`;

    return `<div class="lesson-svg-visual">
      <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
        ${_defs(gId, '#667eea', fId)}
        ${_card(W, H)}
        <!-- triangle fill -->
        <polygon points="${rx},${ry} ${ex},${ey} ${rx},${ty}"
          fill="url(#${gId})" stroke="#667eea" stroke-width="2.5" stroke-linejoin="round"
          filter="url(#${fId})"/>
        <!-- right-angle marker -->
        <polyline points="${rx+18},${ry} ${rx+18},${ry-18} ${rx},${ry-18}"
          fill="none" stroke="#667eea" stroke-width="1.8" opacity="0.7"/>
        ${angle !== undefined ? `
          <path d="M ${ex-34},${ey} A 34,34 0 0,0 ${ex - 34*Math.cos(angle*Math.PI/180)},${ey - 34*Math.sin(angle*Math.PI/180)}"
            fill="none" stroke="#f59e0b" stroke-width="2.2"/>
          <text x="${ex-58}" y="${ey-16}" class="svg-label svg-orange">θ = ${angle}°</text>` : ''}
        <!-- side labels -->
        <text x="${(rx+ex)/2}" y="${ry+22}" text-anchor="middle" class="svg-label">a = ${a}</text>
        <text x="${rx-38}" y="${(ry+ty)/2+5}" text-anchor="middle" class="svg-label">b = ${b}</text>
        <text x="${hx}" y="${hy}" text-anchor="middle" class="svg-label svg-red">c = ${cLabel}</text>
        <!-- formula badge -->
        ${_pill(W-148, H-32, 140, 22, '#667eea')}
        <text x="${W-78}" y="${H-17}" text-anchor="middle" class="svg-note">a² + b² = c²</text>
      </svg>
    </div>`;
  },

  // ---- Pythagorean theorem with squares on each side ----
  pythSquares({ a, b, c }) {
    const W = 340, H = 268;
    const ox = 65, oy = 195;
    const sa = (a / Math.max(a,b)) * 100;
    const sb = (b / Math.max(a,b)) * 100;
    const gIdA = _uid(), gIdB = _uid();

    return `<div class="lesson-svg-visual">
      <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
        <defs>
          <linearGradient id="${gIdA}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#667eea" stop-opacity="0.22"/>
            <stop offset="100%" stop-color="#667eea" stop-opacity="0.06"/>
          </linearGradient>
          <linearGradient id="${gIdB}" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.22"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.06"/>
          </linearGradient>
        </defs>
        ${_card(W, H)}
        <!-- triangle -->
        <polygon points="${ox},${oy} ${ox+sa},${oy} ${ox},${oy-sb}"
          fill="url(#${gIdA})" stroke="#667eea" stroke-width="2.2" stroke-linejoin="round"/>
        <!-- square on a (below triangle) -->
        <rect x="${ox}" y="${oy}" width="${sa}" height="${sa*0.42}" rx="3"
          fill="url(#${gIdA})" stroke="#667eea" stroke-width="1.5"/>
        <text x="${ox+sa/2}" y="${oy+sa*0.25}" text-anchor="middle" class="svg-formula" fill="#667eea">a² = ${a*a}</text>
        <!-- square on b (left of triangle) -->
        <rect x="${ox-sb*0.42}" y="${oy-sb}" width="${sb*0.42}" height="${sb}" rx="3"
          fill="url(#${gIdB})" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="${ox-sb*0.21}" y="${oy-sb/2+5}" text-anchor="middle" class="svg-formula" fill="#f59e0b">b² = ${b*b}</text>
        <!-- side labels -->
        <text x="${ox+sa/2}" y="${oy-8}" text-anchor="middle" class="svg-label">a = ${a}</text>
        <text x="${ox-12}" y="${oy-sb/2}" text-anchor="end" class="svg-label">b = ${b}</text>
        <text x="${(ox+sa+ox)/2+22}" y="${(oy+oy-sb)/2-10}" class="svg-label svg-red">c = ${c}</text>
        <!-- equation badge -->
        ${_pill(W-178, 8, 170, 28, '#667eea')}
        <text x="${W-93}" y="26" text-anchor="middle" class="svg-formula">${a}² + ${b}² = ${a*a+b*b} = ${c}²</text>
      </svg>
    </div>`;
  },

  // ---- Coordinate plane with a graphed line y = mx + b ----
  coordinateLine({ m, b: bInt, range = 4 }) {
    const W = 310, H = 278;
    const ox = W / 2, oy = H / 2;
    const scale = 30;
    const toSvg = (x, y) => [ox + x * scale, oy - y * scale];

    let grid = '';
    for (let i = -range; i <= range; i++) {
      const [gx] = toSvg(i, 0);
      const [, gy] = toSvg(0, i);
      grid += _vGrid(gx, 10, H-10);
      grid += _hGrid(gy, 10, W-10);
    }

    let ticks = '';
    for (let i = -range; i <= range; i++) {
      if (i === 0) continue;
      const [tx] = toSvg(i, 0);
      const [, ty] = toSvg(0, i);
      ticks += `<text x="${tx}" y="${oy+16}" text-anchor="middle" class="svg-tick">${i}</text>`;
      ticks += `<text x="${ox-12}" y="${ty+4}" text-anchor="end" class="svg-tick">${i}</text>`;
    }
    ticks += `<text x="${ox+7}" y="${oy+16}" class="svg-tick">0</text>`;

    const x1 = -range, x2 = range;
    const [sx1, sy1] = toSvg(x1, m * x1 + bInt);
    const [sx2, sy2] = toSvg(x2, m * x2 + bInt);
    const [bx, by] = toSvg(0, bInt);

    const bSign = bInt > 0 ? `+ ${bInt}` : bInt < 0 ? `− ${Math.abs(bInt)}` : '';
    let eq;
    if (m === 0) {
      eq = bInt === 0 ? 'y = 0' : `y = ${bInt}`;
    } else {
      const mPart = m === 1 ? '' : m === -1 ? '−' : m;
      eq = `y = ${mPart}x ${bSign}`.trim();
    }

    return `<div class="lesson-svg-visual">
      <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
        ${_card(W, H)}
        ${grid}
        <!-- axes -->
        <line x1="10" y1="${oy}" x2="${W-10}" y2="${oy}" stroke="#94a3b8" stroke-width="1.8"/>
        <line x1="${ox}" y1="10" x2="${ox}" y2="${H-10}" stroke="#94a3b8" stroke-width="1.8"/>
        <!-- arrowheads -->
        <polygon points="${W-8},${oy} ${W-16},${oy-5} ${W-16},${oy+5}" fill="#94a3b8"/>
        <polygon points="${ox},8 ${ox-5},16 ${ox+5},16" fill="#94a3b8"/>
        <text x="${W-6}" y="${oy-10}" class="svg-axis-label">x</text>
        <text x="${ox+8}" y="16" class="svg-axis-label">y</text>
        ${ticks}
        <!-- the line -->
        <line x1="${sx1}" y1="${sy1}" x2="${sx2}" y2="${sy2}"
          stroke="#e74c3c" stroke-width="2.8" stroke-linecap="round"/>
        <!-- y-intercept dot -->
        ${_dot(bx, by, '#e74c3c')}
        <!-- equation badge -->
        ${_pill(10, 10, 128, 26, '#e74c3c')}
        <text x="74" y="26" text-anchor="middle" class="svg-equation">${eq}</text>
        <!-- slope note -->
        ${_pill(10, H-32, 106, 22, '#667eea')}
        <text x="63" y="${H-17}" class="svg-note">slope = ${m}</text>
      </svg>
    </div>`;
  },

  // ---- Parabola y = ax² + bx + c on a coordinate grid ----
  parabola({ a = 1, vertex = [0, 0], roots, yIntercept }) {
    const W = 310, H = 278;
    const ox = W / 2, oy = H * 0.65;
    const scale = 28;
    const toSvg = (x, y) => [ox + x * scale, oy - y * scale];
    const gId = _uid();

    let grid = '';
    for (let i = -4; i <= 4; i++) {
      const [gx] = toSvg(i, 0);
      const [, gy] = toSvg(0, i);
      grid += _vGrid(gx, 10, H-10);
      grid += _hGrid(gy, 10, W-10);
    }

    const [vh, vk] = vertex;
    const pts = [];
    for (let px = -5; px <= 5; px += 0.2) {
      const py = a * (px - vh) * (px - vh) + vk;
      const [sx, sy] = toSvg(px, py);
      if (sy > -20 && sy < H + 20) pts.push(`${sx},${sy}`);
    }
    const path = pts.length > 1
      ? `<polyline points="${pts.join(' ')}" fill="none" stroke="#667eea" stroke-width="2.8" stroke-linejoin="round"/>`
      : '';

    const [vx, vy] = toSvg(vh, vk);

    let rootDots = '';
    if (roots) {
      roots.forEach(r => {
        const [rx, ry2] = toSvg(r, 0);
        rootDots += _dot(rx, ry2, '#e74c3c', 5);
        rootDots += `<text x="${rx}" y="${ry2+18}" text-anchor="middle" class="svg-tick svg-red">${r}</text>`;
      });
    }

    return `<div class="lesson-svg-visual">
      <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
        ${_card(W, H)}
        ${grid}
        <line x1="10" y1="${oy}" x2="${W-10}" y2="${oy}" stroke="#94a3b8" stroke-width="1.8"/>
        <line x1="${ox}" y1="10" x2="${ox}" y2="${H-10}" stroke="#94a3b8" stroke-width="1.8"/>
        <polygon points="${W-8},${oy} ${W-16},${oy-5} ${W-16},${oy+5}" fill="#94a3b8"/>
        <polygon points="${ox},8 ${ox-5},16 ${ox+5},16" fill="#94a3b8"/>
        <text x="${W-6}" y="${oy-10}" class="svg-axis-label">x</text>
        <text x="${ox+8}" y="16" class="svg-axis-label">y</text>
        ${path}
        ${_dot(vx, vy, '#667eea', 6)}
        <text x="${vx+10}" y="${vy-12}" class="svg-label" fill="#667eea">vertex (${vh},${vk})</text>
        ${rootDots}
        ${a > 0
          ? `${_pill(10, H-32, 122, 22, '#667eea')}<text x="71" y="${H-17}" class="svg-note">opens up (a &gt; 0)</text>`
          : `${_pill(10, 10, 122, 22, '#667eea')}<text x="71" y="25" class="svg-note">opens down (a &lt; 0)</text>`}
      </svg>
    </div>`;
  },

  // ---- Circle with labeled radius, area, and circumference ----
  circle({ r }) {
    const W = 280, H = 248;
    const cx = W / 2, cy = H / 2 - 16;
    const svgR = Math.min(92, r * 14 + 20);
    const area  = (Math.PI * r * r).toFixed(2);
    const circ  = (2 * Math.PI * r).toFixed(2);
    const gId = _uid();

    return `<div class="lesson-svg-visual">
      <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
        <defs>
          <radialGradient id="${gId}" cx="40%" cy="38%" r="60%">
            <stop offset="0%"   stop-color="#667eea" stop-opacity="0.14"/>
            <stop offset="100%" stop-color="#667eea" stop-opacity="0.03"/>
          </radialGradient>
        </defs>
        ${_card(W, H)}
        <!-- circle -->
        <circle cx="${cx}" cy="${cy}" r="${svgR}"
          fill="url(#${gId})" stroke="#667eea" stroke-width="2.5"/>
        <!-- radius line -->
        <line x1="${cx}" y1="${cy}" x2="${cx+svgR}" y2="${cy}"
          stroke="#e74c3c" stroke-width="2" stroke-dasharray="6 4"/>
        ${_dot(cx, cy, '#667eea', 4)}
        ${_dot(cx+svgR, cy, '#e74c3c', 4)}
        <text x="${cx + svgR/2}" y="${cy-14}" text-anchor="middle" class="svg-label svg-red">r = ${r}</text>
        <!-- formula card -->
        <rect x="6" y="${H-52}" width="${W-12}" height="46" rx="10"
          fill="white" stroke="#edeef8" stroke-width="1.5"/>
        <text x="${W/2}" y="${H-31}" text-anchor="middle" class="svg-formula">A = πr² ≈ ${area}</text>
        <text x="${W/2}" y="${H-10}" text-anchor="middle" class="svg-formula">C = 2πr ≈ ${circ}</text>
      </svg>
    </div>`;
  },

  // ---- Right triangle with SOH-CAH-TOA trig labels ----
  trigTriangle({ angle, opp, adj, hyp }) {
    const W = 320, H = 238;
    const maxSide = Math.max(opp, adj, 1);
    const sa = Math.round((adj / maxSide) * 170);
    const sb = Math.round((opp / maxSide) * 140);
    const rx = 52, ry = 188;
    const ex = rx + sa, ey = ry;
    const ty = ry - sb;
    const hx = (rx + ex) / 2 + 16, hy = (ry + ty) / 2 - 8;
    const gId = _uid();

    const sinV = (opp / hyp).toFixed(3);
    const cosV = (adj / hyp).toFixed(3);
    const tanV = (opp / adj).toFixed(3);

    return `<div class="lesson-svg-visual">
      <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
        <defs>
          <linearGradient id="${gId}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.18"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.04"/>
          </linearGradient>
        </defs>
        ${_card(W, H)}
        <polygon points="${rx},${ry} ${ex},${ey} ${rx},${ty}"
          fill="url(#${gId})" stroke="#f59e0b" stroke-width="2.5" stroke-linejoin="round"/>
        <polyline points="${rx+16},${ry} ${rx+16},${ry-16} ${rx},${ry-16}"
          fill="none" stroke="#667eea" stroke-width="1.8" opacity="0.7"/>
        <path d="M ${ex-34},${ey} A 34,34 0 0,0 ${ex - 34*Math.cos(angle*Math.PI/180)},${ey - 34*Math.sin(angle*Math.PI/180)}"
          fill="none" stroke="#f59e0b" stroke-width="2.2"/>
        <text x="${ex-58}" y="${ey-16}" class="svg-label svg-orange">θ = ${angle}°</text>
        <text x="${(rx+ex)/2}" y="${ry+22}" text-anchor="middle" class="svg-label">adj = ${adj}</text>
        <text x="${rx-38}" y="${(ry+ty)/2+5}" text-anchor="middle" class="svg-label">opp = ${opp}</text>
        <text x="${hx}" y="${hy}" text-anchor="middle" class="svg-label svg-red">hyp = ${hyp}</text>
        <!-- SOH-CAH-TOA card -->
        <rect x="${W-116}" y="8" width="108" height="88" rx="10"
          fill="white" stroke="#edeef8" stroke-width="1.5"/>
        <text x="${W-62}" y="24" text-anchor="middle" class="svg-note" font-weight="bold">SOH-CAH-TOA</text>
        <line x1="${W-108}" y1="30" x2="${W-12}" y2="30" stroke="#edeef8" stroke-width="1"/>
        <text x="${W-62}" y="46" text-anchor="middle" class="svg-tick">sin θ = ${sinV}</text>
        <text x="${W-62}" y="64" text-anchor="middle" class="svg-tick">cos θ = ${cosV}</text>
        <text x="${W-62}" y="82" text-anchor="middle" class="svg-tick">tan θ = ${tanV}</text>
      </svg>
    </div>`;
  },

  // ---- Unit circle with key angle points ----
  unitCircle() {
    const W = 310, H = 318;
    const cx = W / 2, cy = H / 2 + 4;
    const r = 118;

    const angles = [
      { deg: 0,   label: '0°',   cos: '1',    sin: '0'   },
      { deg: 30,  label: '30°',  cos: '√3/2', sin: '1/2' },
      { deg: 45,  label: '45°',  cos: '√2/2', sin: '√2/2' },
      { deg: 60,  label: '60°',  cos: '1/2',  sin: '√3/2' },
      { deg: 90,  label: '90°',  cos: '0',    sin: '1'   },
      { deg: 180, label: '180°', cos: '−1',   sin: '0'   },
      { deg: 270, label: '270°', cos: '0',    sin: '−1'  },
    ];

    let dots = '';
    angles.forEach(a => {
      const rad = a.deg * Math.PI / 180;
      const px = cx + r * Math.cos(rad);
      const py = cy - r * Math.sin(rad);
      const offsetX = Math.cos(rad) * 20;
      const offsetY = -Math.sin(rad) * 20;
      const anchorX = a.deg > 90 && a.deg < 270 ? 'end' : a.deg === 90 || a.deg === 270 ? 'middle' : 'start';
      dots += _dot(px, py, '#e74c3c', 4.5);
      dots += `<text x="${px + offsetX}" y="${py + offsetY + 4}" text-anchor="${anchorX}"
        class="svg-tick" fill="#e74c3c" font-size="10.5">${a.label}</text>`;
    });

    const qLabels = [
      { x: cx+32, y: cy-32, t: 'QI',   sub: 'all +'  },
      { x: cx-32, y: cy-32, t: 'QII',  sub: 'sin +'  },
      { x: cx-32, y: cy+44, t: 'QIII', sub: 'tan +'  },
      { x: cx+32, y: cy+44, t: 'QIV',  sub: 'cos +'  },
    ];
    let qText = '';
    qLabels.forEach(q => {
      qText += `<text x="${q.x}" y="${q.y}" text-anchor="middle" class="svg-tick" fill="#667eea" font-weight="bold">${q.t}</text>`;
      qText += `<text x="${q.x}" y="${q.y+14}" text-anchor="middle" fill="#94a3b8" font-size="10">${q.sub}</text>`;
    });

    return `<div class="lesson-svg-visual">
      <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
        ${_card(W, H)}
        <line x1="12" y1="${cy}" x2="${W-12}" y2="${cy}" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="${cx}" y1="12" x2="${cx}" y2="${H-12}" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="${W-8}" y="${cy-10}" class="svg-axis-label">x</text>
        <text x="${cx+8}" y="20" class="svg-axis-label">y</text>
        <!-- unit circle -->
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="#f5f4ff" stroke="#667eea" stroke-width="2.5"/>
        <!-- axis intercept labels -->
        <text x="${cx+r+6}" y="${cy+14}" class="svg-tick">(1,0)</text>
        <text x="${cx-r-6}" y="${cy+14}" text-anchor="end" class="svg-tick">(−1,0)</text>
        <text x="${cx+8}" y="${cy-r-5}" class="svg-tick">(0,1)</text>
        <text x="${cx+8}" y="${cy+r+16}" class="svg-tick">(0,−1)</text>
        ${dots}
        ${qText}
        <circle cx="${cx}" cy="${cy}" r="3.5" fill="#667eea"/>
        <!-- footer badge -->
        ${_pill(W/2-96, H-28, 192, 22, '#667eea')}
        <text x="${W/2}" y="${H-13}" text-anchor="middle" class="svg-note">Point = (cos θ, sin θ)</text>
      </svg>
    </div>`;
  },

  // ---- Sine / cosine wave graph ----
  sineWave({ func = 'sin', amplitude = 1, period = '2π', periods = 1.5 }) {
    const W = 320, H = 208;
    const ox = 44, oy = H / 2;
    const graphW = W - 64;
    const amp = Math.min(amplitude, 4);
    const scaleY = 55 / Math.max(amp, 1);
    const gId = _uid();

    let pts = '';
    const numPts = 240;
    const totalRad = periods * 2 * Math.PI;
    for (let i = 0; i <= numPts; i++) {
      const t = (i / numPts) * totalRad;
      const x = ox + (i / numPts) * graphW;
      const y = oy - amp * (func === 'cos' ? Math.cos(t) : Math.sin(t)) * scaleY;
      pts += `${x},${y} `;
    }

    const piX1 = ox + (Math.PI / totalRad) * graphW;
    const piX2 = ox + (2 * Math.PI / totalRad) * graphW;
    const color = func === 'sin' ? '#e74c3c' : '#667eea';
    const label = func === 'sin'
      ? `y = ${amp === 1 ? '' : amp}sin(x)`
      : `y = ${amp === 1 ? '' : amp}cos(x)`;

    return `<div class="lesson-svg-visual">
      <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
        <defs>
          <marker id="${gId}" viewBox="0 0 10 10" refX="10" refY="5"
            markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/>
          </marker>
        </defs>
        ${_card(W, H)}
        <!-- amplitude guide lines -->
        <line x1="${ox}" y1="${oy - amp*scaleY}" x2="${W-14}" y2="${oy - amp*scaleY}"
          stroke="#edeef8" stroke-width="1.2" stroke-dasharray="5 5"/>
        <line x1="${ox}" y1="${oy + amp*scaleY}" x2="${W-14}" y2="${oy + amp*scaleY}"
          stroke="#edeef8" stroke-width="1.2" stroke-dasharray="5 5"/>
        <!-- axes -->
        <line x1="${ox}" y1="${oy}" x2="${W-10}" y2="${oy}" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="${ox}" y1="16" x2="${ox}" y2="${H-16}" stroke="#94a3b8" stroke-width="1.5"/>
        <!-- axis tick labels -->
        <text x="${ox-7}" y="${oy - amp*scaleY + 5}" text-anchor="end" class="svg-tick">${amp}</text>
        <text x="${ox-7}" y="${oy + amp*scaleY + 5}" text-anchor="end" class="svg-tick">−${amp}</text>
        <text x="${ox-7}" y="${oy+5}" text-anchor="end" class="svg-tick">0</text>
        <!-- π markers -->
        <line x1="${piX1}" y1="${oy-5}" x2="${piX1}" y2="${oy+5}" stroke="#94a3b8" stroke-width="1.2"/>
        <line x1="${piX2}" y1="${oy-5}" x2="${piX2}" y2="${oy+5}" stroke="#94a3b8" stroke-width="1.2"/>
        <text x="${piX1}" y="${oy+17}" text-anchor="middle" class="svg-tick">π</text>
        <text x="${piX2}" y="${oy+17}" text-anchor="middle" class="svg-tick">2π</text>
        <!-- wave -->
        <polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2.8" stroke-linejoin="round"/>
        <!-- amplitude arrow -->
        <line x1="${ox+18}" y1="${oy}" x2="${ox+18}" y2="${oy - amp*scaleY}"
          stroke="#f59e0b" stroke-width="1.5" marker-end="url(#${gId})"/>
        <text x="${ox+25}" y="${oy - amp*scaleY/2 + 5}" class="svg-tick svg-orange">A=${amp}</text>
        <!-- equation badge -->
        ${_pill(W-148, 8, 136, 24, color)}
        <text x="${W-80}" y="23" text-anchor="middle" class="svg-equation" fill="${color}">${label}</text>
      </svg>
    </div>`;
  },

  // ---- Angle diagram showing an angle with arc ----
  angleDiagram({ degrees, label, type }) {
    const W = 268, H = 188;
    const cx = 62, cy = 146;
    const armLen = 118;
    const rad = degrees * Math.PI / 180;
    const ex = cx + armLen * Math.cos(rad);
    const ey = cy - armLen * Math.sin(rad);
    const arcR = 42;
    const largeArc = degrees > 180 ? 1 : 0;
    const ax = cx + arcR * Math.cos(rad);
    const ay = cy - arcR * Math.sin(rad);

    const typeColor = type === 'acute' ? '#27ae60' : type === 'right' ? '#667eea' : type === 'obtuse' ? '#f59e0b' : '#e74c3c';
    const typeLabel = type || (degrees < 90 ? 'Acute' : degrees === 90 ? 'Right' : degrees < 180 ? 'Obtuse' : 'Straight');

    return `<div class="lesson-svg-visual compact-visual">
      <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg compact">
        ${_card(W, H)}
        <!-- arms -->
        <line x1="${cx}" y1="${cy}" x2="${cx + armLen}" y2="${cy}"
          stroke="#94a3b8" stroke-width="2.8" stroke-linecap="round"/>
        <line x1="${cx}" y1="${cy}" x2="${ex}" y2="${ey}"
          stroke="#94a3b8" stroke-width="2.8" stroke-linecap="round"/>
        <!-- arc with fill -->
        <path d="M ${cx + arcR},${cy} A ${arcR},${arcR} 0 ${largeArc},0 ${ax},${ay}"
          fill="${typeColor}" fill-opacity="0.14" stroke="${typeColor}" stroke-width="2.4"/>
        ${degrees === 90
          ? `<rect x="${cx+13}" y="${cy-13}" width="13" height="13" fill="none" stroke="${typeColor}" stroke-width="1.8"/>`
          : ''}
        <!-- degree label -->
        <text x="${cx + arcR * 0.72 * Math.cos(rad/2) + 16}"
              y="${cy - arcR * 0.72 * Math.sin(rad/2) + 5}"
              class="svg-label" fill="${typeColor}">${label || degrees + '°'}</text>
        <!-- type badge pill -->
        <rect x="${W-92}" y="10" width="80" height="26" rx="13"
          fill="${typeColor}" fill-opacity="0.12" stroke="${typeColor}" stroke-width="1.2"/>
        <text x="${W-52}" y="27" text-anchor="middle" class="svg-tick" fill="${typeColor}" font-weight="bold">${typeLabel}</text>
      </svg>
    </div>`;
  },

  // ---- Area shape with dimensions (rectangle or triangle) ----
  areaShape({ shape, dims, showFormula = true }) {
    const W = 300, H = 188;
    if (shape === 'rectangle') {
      const { l, w } = dims;
      const rw = 186, rh = 104;
      const rx = (W - rw) / 2, ry = 18;
      const gId = _uid();
      return `<div class="lesson-svg-visual compact-visual">
        <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg compact">
          <defs>
            <linearGradient id="${gId}" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#667eea" stop-opacity="0.16"/>
              <stop offset="100%" stop-color="#667eea" stop-opacity="0.04"/>
            </linearGradient>
          </defs>
          ${_card(W, H)}
          <rect x="${rx}" y="${ry}" width="${rw}" height="${rh}" rx="5"
            fill="url(#${gId})" stroke="#667eea" stroke-width="2.5"/>
          <!-- dimension labels outside the shape -->
          <text x="${rx + rw/2}" y="${ry - 9}" text-anchor="middle" class="svg-label">${l}</text>
          <text x="${rx - 14}" y="${ry + rh/2 + 5}" text-anchor="end" class="svg-label">${w}</text>
          ${showFormula ? `
            <rect x="6" y="${H-36}" width="${W-12}" height="28" rx="8" fill="white" stroke="#edeef8" stroke-width="1.5"/>
            <text x="${W/2}" y="${H-17}" text-anchor="middle" class="svg-formula">A = ${l} × ${w} = ${l*w}  |  P = 2(${l}+${w}) = ${2*(l+w)}</text>` : ''}
        </svg>
      </div>`;
    }
    if (shape === 'triangle') {
      const { base: b, height: h } = dims;
      const tw = 162, th = 102;
      const bx = (W - tw) / 2, by = 128;
      const apex = bx + tw * 0.42;
      const gId = _uid();
      return `<div class="lesson-svg-visual compact-visual">
        <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg compact">
          <defs>
            <linearGradient id="${gId}" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.16"/>
              <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.04"/>
            </linearGradient>
          </defs>
          ${_card(W, H)}
          <polygon points="${bx},${by} ${bx+tw},${by} ${apex},${by-th}"
            fill="url(#${gId})" stroke="#f59e0b" stroke-width="2.5" stroke-linejoin="round"/>
          <!-- height dashed line -->
          <line x1="${apex}" y1="${by}" x2="${apex}" y2="${by-th}"
            stroke="#e74c3c" stroke-width="2" stroke-dasharray="5 4"/>
          <text x="${bx + tw/2}" y="${by + 20}" text-anchor="middle" class="svg-label">base = ${b}</text>
          <text x="${apex + 16}" y="${by - th/2 + 5}" class="svg-label svg-red">h = ${h}</text>
          ${showFormula ? `
            <rect x="6" y="${H-36}" width="${W-12}" height="28" rx="8" fill="white" stroke="#edeef8" stroke-width="1.5"/>
            <text x="${W/2}" y="${H-17}" text-anchor="middle" class="svg-formula">A = ½ × ${b} × ${h} = ${b*h/2}</text>` : ''}
        </svg>
      </div>`;
    }
    return '';
  },

  // ---- Derivative / tangent line concept diagram ----
  tangentLine() {
    const W = 312, H = 228;
    const ox = 42, oy = 174;
    const scaleX = 48, scaleY = 28;

    let curvePts = '';
    for (let i = -0.5; i <= 5; i += 0.1) {
      const x = ox + i * scaleX;
      const y = oy - 0.5 * i * i * scaleY;
      if (y > 0 && x < W - 10) curvePts += `${x.toFixed(1)},${y.toFixed(1)} `;
    }

    const tx = 2, ty_val = 2;
    const dotX = ox + tx * scaleX, dotY = oy - ty_val * scaleY;
    const slope = 2;
    const t1x = ox + 0.5 * scaleX, t1y = oy - (ty_val + slope * (0.5 - tx)) * scaleY;
    const t2x = ox + 3.5 * scaleX, t2y = oy - (ty_val + slope * (3.5 - tx)) * scaleY;
    const gId = _uid();

    return `<div class="lesson-svg-visual">
      <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
        ${_card(W, H)}
        <line x1="${ox}" y1="12" x2="${ox}" y2="${oy+12}" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="${ox-12}" y1="${oy}" x2="${W-10}" y2="${oy}" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="${W-8}" y="${oy-10}" class="svg-axis-label">x</text>
        <text x="${ox+8}" y="20" class="svg-axis-label">y</text>
        <!-- curve -->
        <polyline points="${curvePts}" fill="none" stroke="#667eea" stroke-width="2.8" stroke-linejoin="round"/>
        ${_pill(W-116, 12, 106, 22, '#667eea')}
        <text x="${W-63}" y="27" text-anchor="middle" class="svg-label" fill="#667eea">f(x) = ½x²</text>
        <!-- tangent line -->
        <line x1="${t1x}" y1="${t1y}" x2="${t2x}" y2="${t2y}"
          stroke="#e74c3c" stroke-width="2.2" stroke-dasharray="7 4"/>
        <!-- point of tangency -->
        ${_dot(dotX, dotY, '#e74c3c', 6)}
        <text x="${dotX+12}" y="${dotY-12}" class="svg-label svg-red">slope = f ′(2) = 2</text>
        <!-- note badge -->
        ${_pill(8, H-30, W-16, 22, '#667eea')}
        <text x="${W/2}" y="${H-15}" text-anchor="middle" class="svg-note">The derivative = slope of the tangent line at each point</text>
      </svg>
    </div>`;
  },

  // ---- Area under a curve (integral concept) ----
  areaUnderCurve({ f = 'x²', a = 0, b = 2 }) {
    const W = 312, H = 228;
    const ox = 48, oy = 178;
    const scaleX = 54, scaleY = 22;
    const gId = _uid();

    const funcEval = (x) => {
      if (f === 'x²') return x * x;
      if (f === 'x') return x;
      if (f === '2x') return 2 * x;
      return x * x;
    };

    let areaPts = `${ox + a * scaleX},${oy} `;
    for (let i = a; i <= b; i += 0.1) {
      const px = ox + i * scaleX;
      const py = oy - funcEval(i) * scaleY;
      areaPts += `${px.toFixed(1)},${Math.max(py, 12).toFixed(1)} `;
    }
    areaPts += `${ox + b * scaleX},${oy}`;

    let curvePts = '';
    for (let i = -0.3; i <= 4.5; i += 0.1) {
      const px = ox + i * scaleX;
      const py = oy - funcEval(i) * scaleY;
      if (px > ox - 15 && px < W - 5 && py > 5) curvePts += `${px.toFixed(1)},${py.toFixed(1)} `;
    }

    return `<div class="lesson-svg-visual">
      <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
        <defs>
          <linearGradient id="${gId}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#667eea" stop-opacity="0.38"/>
            <stop offset="100%" stop-color="#667eea" stop-opacity="0.08"/>
          </linearGradient>
        </defs>
        ${_card(W, H)}
        <line x1="${ox}" y1="12" x2="${ox}" y2="${oy+12}" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="${ox-12}" y1="${oy}" x2="${W-10}" y2="${oy}" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="${W-8}" y="${oy-10}" class="svg-axis-label">x</text>
        <!-- shaded area -->
        <polygon points="${areaPts}" fill="url(#${gId})" stroke="none"/>
        <!-- "Area" label inside shaded region -->
        <text x="${ox + (a+b)/2 * scaleX}" y="${oy - funcEval((a+b)/2) * scaleY * 0.4}"
          text-anchor="middle" class="svg-label" fill="#667eea">Area</text>
        <!-- curve -->
        <polyline points="${curvePts}" fill="none" stroke="#667eea" stroke-width="2.8" stroke-linejoin="round"/>
        <!-- bound markers -->
        <line x1="${ox + a*scaleX}" y1="${oy}" x2="${ox + a*scaleX}" y2="${oy - funcEval(a)*scaleY}"
          stroke="#e74c3c" stroke-width="1.8" stroke-dasharray="4 3"/>
        <line x1="${ox + b*scaleX}" y1="${oy}" x2="${ox + b*scaleX}" y2="${oy - funcEval(b)*scaleY}"
          stroke="#e74c3c" stroke-width="1.8" stroke-dasharray="4 3"/>
        <text x="${ox + a*scaleX}" y="${oy+17}" text-anchor="middle" class="svg-tick svg-red">a=${a}</text>
        <text x="${ox + b*scaleX}" y="${oy+17}" text-anchor="middle" class="svg-tick svg-red">b=${b}</text>
        <!-- note badge -->
        ${_pill(8, H-30, W-16, 22, '#667eea')}
        <text x="${W/2}" y="${H-15}" text-anchor="middle" class="svg-note">∫ₐᵇ f(x) dx = net signed area</text>
      </svg>
    </div>`;
  },

  // ---- Transformation: translation / reflection grid ----
  transformGrid({ original, transformed, type = 'translate' }) {
    const W = 282, H = 248;
    const cx = W / 2, cy = H / 2;
    const s = 24;
    const toSvg = (x, y) => [cx + x * s, cy - y * s];

    let grid = '';
    for (let i = -5; i <= 5; i++) {
      const [gx] = toSvg(i, 0);
      const [, gy] = toSvg(0, i);
      grid += _vGrid(gx, 10, H-10);
      grid += _hGrid(gy, 10, W-10);
    }

    const drawShape = (pts, color, opacity = 0.2) => {
      const svgPts = pts.map(([x, y]) => toSvg(x, y).join(',')).join(' ');
      return `<polygon points="${svgPts}" fill="${color}" fill-opacity="${opacity}"
        stroke="${color}" stroke-width="2.2" stroke-linejoin="round"/>`;
    };

    const typeLabels = { translate: 'Translation', reflect: 'Reflection', rotate: 'Rotation' };

    return `<div class="lesson-svg-visual">
      <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
        ${_card(W, H)}
        ${grid}
        <line x1="10" y1="${cy}" x2="${W-10}" y2="${cy}" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="${cx}" y1="10" x2="${cx}" y2="${H-10}" stroke="#94a3b8" stroke-width="1.5"/>
        ${drawShape(original, '#667eea', 0.24)}
        ${drawShape(transformed, '#e74c3c', 0.18)}
        <!-- legend card -->
        <rect x="8" y="8" width="78" height="46" rx="8" fill="white" stroke="#edeef8" stroke-width="1.2"/>
        <rect x="16" y="18" width="12" height="12" rx="3" fill="#667eea" fill-opacity="0.5"/>
        <text x="32" y="28" class="svg-tick">Original</text>
        <rect x="16" y="34" width="12" height="12" rx="3" fill="#e74c3c" fill-opacity="0.5"/>
        <text x="32" y="44" class="svg-tick">Image</text>
        <!-- type badge -->
        ${_pill(W/2-52, H-28, 104, 22, '#667eea')}
        <text x="${W/2}" y="${H-13}" text-anchor="middle" class="svg-note">${typeLabels[type] || type}</text>
      </svg>
    </div>`;
  },

  // ---- 3D shape (cube or cylinder) ----
  shape3D({ shape, dims }) {
    const W = 264, H = 208;
    if (shape === 'cube') {
      const s = dims.s || 4;
      const sz = 72;
      const ox = 82, oy = 52;
      const dx = 30, dy = 22;
      return `<div class="lesson-svg-visual compact-visual">
        <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg compact">
          ${_card(W, H)}
          <!-- back face -->
          <polygon points="${ox+dx},${oy-dy} ${ox+sz+dx},${oy-dy} ${ox+sz+dx},${oy+sz-dy} ${ox+dx},${oy+sz-dy}"
            fill="#667eea" fill-opacity="0.06" stroke="#667eea" stroke-width="1.2"/>
          <!-- top face -->
          <polygon points="${ox},${oy} ${ox+dx},${oy-dy} ${ox+sz+dx},${oy-dy} ${ox+sz},${oy}"
            fill="#667eea" fill-opacity="0.18" stroke="#667eea" stroke-width="1.8"/>
          <!-- front face -->
          <polygon points="${ox},${oy} ${ox+sz},${oy} ${ox+sz},${oy+sz} ${ox},${oy+sz}"
            fill="#eef2ff" stroke="#667eea" stroke-width="2.2"/>
          <!-- right face -->
          <polygon points="${ox+sz},${oy} ${ox+sz+dx},${oy-dy} ${ox+sz+dx},${oy+sz-dy} ${ox+sz},${oy+sz}"
            fill="#667eea" fill-opacity="0.12" stroke="#667eea" stroke-width="1.8"/>
          <!-- side label -->
          <text x="${ox+sz/2}" y="${oy+sz+18}" text-anchor="middle" class="svg-label">s = ${s}</text>
          <!-- formula badge -->
          <rect x="6" y="${H-32}" width="${W-12}" height="24" rx="8"
            fill="white" stroke="#edeef8" stroke-width="1.5"/>
          <text x="${W/2}" y="${H-15}" text-anchor="middle" class="svg-formula">V = ${s}³ = ${s*s*s}  |  SA = 6(${s}²) = ${6*s*s}</text>
        </svg>
      </div>`;
    }
    if (shape === 'cylinder') {
      const { r, h } = dims;
      const cw = 92, ch = 82;
      const cx = W / 2, cy = 48;
      return `<div class="lesson-svg-visual compact-visual">
        <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg compact">
          ${_card(W, H)}
          <!-- cylinder body -->
          <rect x="${cx-cw/2}" y="${cy}" width="${cw}" height="${ch}" fill="#eef2ff" stroke="none"/>
          <line x1="${cx-cw/2}" y1="${cy}" x2="${cx-cw/2}" y2="${cy+ch}" stroke="#667eea" stroke-width="2.2"/>
          <line x1="${cx+cw/2}" y1="${cy}" x2="${cx+cw/2}" y2="${cy+ch}" stroke="#667eea" stroke-width="2.2"/>
          <!-- top ellipse -->
          <ellipse cx="${cx}" cy="${cy}" rx="${cw/2}" ry="14"
            fill="#667eea" fill-opacity="0.16" stroke="#667eea" stroke-width="2.2"/>
          <!-- bottom ellipse -->
          <ellipse cx="${cx}" cy="${cy+ch}" rx="${cw/2}" ry="14"
            fill="#eef2ff" stroke="#667eea" stroke-width="2.2"/>
          <!-- radius annotation -->
          <line x1="${cx}" y1="${cy}" x2="${cx+cw/2}" y2="${cy}"
            stroke="#e74c3c" stroke-width="1.8" stroke-dasharray="5 3"/>
          <text x="${cx+cw/4}" y="${cy-8}" text-anchor="middle" class="svg-tick svg-red">r = ${r}</text>
          <!-- height annotation -->
          <line x1="${cx+cw/2+14}" y1="${cy}" x2="${cx+cw/2+14}" y2="${cy+ch}"
            stroke="#f59e0b" stroke-width="1.8"/>
          <line x1="${cx+cw/2+8}" y1="${cy}" x2="${cx+cw/2+20}" y2="${cy}" stroke="#f59e0b" stroke-width="1.5"/>
          <line x1="${cx+cw/2+8}" y1="${cy+ch}" x2="${cx+cw/2+20}" y2="${cy+ch}" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="${cx+cw/2+28}" y="${cy+ch/2+5}" class="svg-tick svg-orange">h = ${h}</text>
          <!-- formula badge -->
          <rect x="6" y="${H-32}" width="${W-12}" height="24" rx="8"
            fill="white" stroke="#edeef8" stroke-width="1.5"/>
          <text x="${W/2}" y="${H-15}" text-anchor="middle" class="svg-formula">V = πr²h = π(${r}²)(${h}) = ${r*r*h}π</text>
        </svg>
      </div>`;
    }
    return '';
  },

  // ---- Number line showing an inequality solution ----
  numberLine({ value, op, min = -6, max = 10 }) {
    const W = 312, H = 90;
    const ly = 46, lx = 30, rx = 280;
    const range = max - min;
    const toX = n => lx + ((n - min) / range) * (rx - lx);
    const dotX = toX(Math.min(Math.max(value, min), max));
    const filled = op === '<=' || op === '>=';
    const goRight = op === '>' || op === '>=';
    const arrowX = goRight ? rx + 12 : lx - 12;

    const step = range > 14 ? 2 : 1;
    let ticks = '';
    for (let i = min; i <= max; i += step) {
      const x = toX(i);
      ticks += `<line x1="${x}" y1="${ly-5}" x2="${x}" y2="${ly+5}" stroke="#94a3b8" stroke-width="1.2"/>`;
      ticks += `<text x="${x}" y="${ly+20}" text-anchor="middle" class="svg-tick">${i}</text>`;
    }

    const opLabels = { '<': '<', '>': '>', '<=': '≤', '>=': '≥' };
    const opLabel = opLabels[op] || op;

    return `<div class="lesson-svg-visual compact-visual">
      <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg compact">
        ${_card(W, H)}
        <!-- track line -->
        <line x1="${lx}" y1="${ly}" x2="${rx}" y2="${ly}" stroke="#d1d5db" stroke-width="3" stroke-linecap="round"/>
        ${ticks}
        <!-- solution ray -->
        <line x1="${dotX}" y1="${ly}" x2="${arrowX}" y2="${ly}"
          stroke="#e74c3c" stroke-width="4.5" stroke-linecap="round"/>
        <!-- arrowhead -->
        <polygon points="${arrowX},${ly} ${arrowX+(goRight?-12:12)},${ly-6} ${arrowX+(goRight?-12:12)},${ly+6}"
          fill="#e74c3c"/>
        <!-- endpoint dot -->
        <circle cx="${dotX}" cy="${ly}" r="8"
          fill="${filled ? '#e74c3c' : 'white'}" stroke="#e74c3c" stroke-width="2.5"/>
        <!-- label -->
        <text x="${dotX}" y="${ly-18}" text-anchor="middle" class="svg-label svg-red">x ${opLabel} ${value}</text>
      </svg>
    </div>`;
  },

  // ---- Bar chart ----
  barChart({ labels, values, title }) {
    const W = 310, H = 218;
    const pad = { l: 44, r: 14, t: 32, b: 44 };
    const chartW = W - pad.l - pad.r;
    const chartH = H - pad.t - pad.b;
    const maxVal = Math.max(...values, 1) * 1.18;
    const barW = (chartW / labels.length) * 0.55;
    const gap = chartW / labels.length;
    const gId = _uid();

    let yTicks = '';
    for (let i = 0; i <= 4; i++) {
      const val = Math.round(maxVal * i / 4);
      const y = pad.t + chartH - (val / maxVal) * chartH;
      yTicks += `<line x1="${pad.l-4}" y1="${y}" x2="${W-pad.r}" y2="${y}" stroke="#edeef8" stroke-width="1"/>`;
      yTicks += `<line x1="${pad.l-4}" y1="${y}" x2="${pad.l}" y2="${y}" stroke="#94a3b8" stroke-width="1.2"/>`;
      yTicks += `<text x="${pad.l-8}" y="${y+4}" text-anchor="end" class="svg-tick">${val}</text>`;
    }

    const bars = labels.map((lbl, i) => {
      const barH = (values[i] / maxVal) * chartH;
      const x = pad.l + i * gap + gap * 0.22;
      const y = pad.t + chartH - barH;
      const barGId = `${gId}_${i}`;
      return `
        <defs>
          <linearGradient id="${barGId}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#667eea" stop-opacity="0.95"/>
            <stop offset="100%" stop-color="#667eea" stop-opacity="0.65"/>
          </linearGradient>
        </defs>
        <rect x="${x}" y="${y}" width="${barW}" height="${barH}" rx="5"
          fill="url(#${barGId})"/>
        <text x="${x+barW/2}" y="${pad.t+chartH+17}" text-anchor="middle" class="svg-tick">${lbl}</text>
        <text x="${x+barW/2}" y="${y-6}" text-anchor="middle" class="svg-tick" font-weight="bold" fill="#667eea">${values[i]}</text>
      `;
    });

    return `<div class="lesson-svg-visual">
      <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
        ${_card(W, H)}
        ${title ? `<text x="${W/2}" y="20" text-anchor="middle" class="svg-note" font-weight="bold">${title}</text>` : ''}
        ${yTicks}
        <!-- axes -->
        <line x1="${pad.l}" y1="${pad.t}" x2="${pad.l}" y2="${pad.t+chartH}" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="${pad.l}" y1="${pad.t+chartH}" x2="${W-pad.r}" y2="${pad.t+chartH}" stroke="#94a3b8" stroke-width="1.5"/>
        ${bars.join('')}
      </svg>
    </div>`;
  }
};