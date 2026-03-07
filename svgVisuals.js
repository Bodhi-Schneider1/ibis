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
  },

  // ============================================================
  // NEW LESSON-SPECIFIC SVG VISUALS (simple black & white diagrams)
  // ============================================================

  // ---- ALGEBRA ----

  /** Intro to Algebra: labelled parts of an expression */
  expressionParts() {
    const W=300, H=150;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <text x="${W/2}" y="40" text-anchor="middle" font-size="32" font-family="serif" fill="#333">5x + 3</text>
      <!-- braces/labels -->
      <line x1="105" y1="52" x2="105" y2="72" stroke="#333" stroke-width="1.5"/>
      <text x="105" y="88" text-anchor="middle" class="svg-label">coefficient</text>
      <line x1="138" y1="52" x2="138" y2="72" stroke="#333" stroke-width="1.5"/>
      <text x="138" y="88" text-anchor="middle" class="svg-label">variable</text>
      <line x1="188" y1="52" x2="188" y2="72" stroke="#333" stroke-width="1.5"/>
      <text x="188" y="88" text-anchor="middle" class="svg-label">constant</text>
      <line x1="80" y1="106" x2="145" y2="106" stroke="#555" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="112" y="122" text-anchor="middle" class="svg-tick">term</text>
      <line x1="170" y1="106" x2="205" y2="106" stroke="#555" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="188" y="122" text-anchor="middle" class="svg-tick">term</text>
    </svg></div>`;
  },

  /** Order of Operations: PEMDAS hierarchy */
  pemdasOrder() {
    const W=300, H=200;
    const steps=[['P','Parentheses'],['E','Exponents'],['M/D','Multiply / Divide'],['A/S','Add / Subtract']];
    const rows = steps.map((s,i) => {
      const y = 30 + i*42;
      const w = 240 - i*30;
      const x = (W-w)/2;
      return `<rect x="${x}" y="${y}" width="${w}" height="32" rx="8" fill="none" stroke="#333" stroke-width="1.5"/>
        <text x="${x+16}" y="${y+21}" font-size="13" font-weight="bold" fill="#333">${s[0]}</text>
        <text x="${x+w/2+14}" y="${y+21}" text-anchor="middle" font-size="11" fill="#555">${s[1]}</text>`;
    }).join('');
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <text x="${W/2}" y="18" text-anchor="middle" class="svg-note">Order of Operations (top = first)</text>
      ${rows}
      <text x="${W/2}" y="195" text-anchor="middle" class="svg-tick">← left to right within each level →</text>
    </svg></div>`;
  },

  /** Linear Equations: balance scale */
  balanceScale() {
    const W=300, H=180;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <!-- fulcrum -->
      <polygon points="150,150 135,165 165,165" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
      <!-- beam -->
      <line x1="40" y1="150" x2="260" y2="150" stroke="#333" stroke-width="2.5"/>
      <!-- left pan -->
      <line x1="60" y1="150" x2="45" y2="130" stroke="#333" stroke-width="1.5"/>
      <line x1="60" y1="150" x2="75" y2="130" stroke="#333" stroke-width="1.5"/>
      <line x1="40" y1="130" x2="80" y2="130" stroke="#333" stroke-width="1.5"/>
      <text x="60" y="120" text-anchor="middle" font-size="16" font-family="serif" fill="#333">3x + 5</text>
      <!-- right pan -->
      <line x1="240" y1="150" x2="225" y2="130" stroke="#333" stroke-width="1.5"/>
      <line x1="240" y1="150" x2="255" y2="130" stroke="#333" stroke-width="1.5"/>
      <line x1="220" y1="130" x2="260" y2="130" stroke="#333" stroke-width="1.5"/>
      <text x="240" y="120" text-anchor="middle" font-size="16" font-family="serif" fill="#333">20</text>
      <!-- equals -->
      <text x="150" y="40" text-anchor="middle" font-size="12" fill="#555">Whatever you do to one side,</text>
      <text x="150" y="56" text-anchor="middle" font-size="12" fill="#555">do to the other!</text>
      <text x="150" y="140" text-anchor="middle" font-size="20" fill="#333">=</text>
    </svg></div>`;
  },

  /** Distributive Property: area model */
  distributiveArea() {
    const W=300, H=170;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <text x="${W/2}" y="20" text-anchor="middle" class="svg-note">Area Model: a(b + c) = ab + ac</text>
      <!-- outer rect -->
      <rect x="50" y="40" width="200" height="80" fill="none" stroke="#333" stroke-width="2"/>
      <!-- divider -->
      <line x1="170" y1="40" x2="170" y2="120" stroke="#333" stroke-width="1.5" stroke-dasharray="5,4"/>
      <!-- labels -->
      <text x="30" y="85" text-anchor="middle" font-size="16" font-family="serif" fill="#333">a</text>
      <text x="110" y="32" text-anchor="middle" font-size="14" font-family="serif" fill="#333">b</text>
      <text x="215" y="32" text-anchor="middle" font-size="14" font-family="serif" fill="#333">c</text>
      <!-- area labels -->
      <text x="110" y="86" text-anchor="middle" font-size="16" font-family="serif" fill="#555">ab</text>
      <text x="215" y="86" text-anchor="middle" font-size="16" font-family="serif" fill="#555">ac</text>
      <!-- result -->
      <text x="${W/2}" y="150" text-anchor="middle" font-size="13" fill="#333">Total area = ab + ac</text>
    </svg></div>`;
  },

  /** Combining Like Terms: grouping */
  likeTermsGroup() {
    const W=300, H=140;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <text x="${W/2}" y="25" text-anchor="middle" font-size="16" font-family="serif" fill="#333">5x + 3 + 2x + 7</text>
      <!-- group x terms -->
      <rect x="52" y="8" width="35" height="22" rx="4" fill="none" stroke="#333" stroke-width="1.8" stroke-dasharray="4,3"/>
      <rect x="133" y="8" width="35" height="22" rx="4" fill="none" stroke="#333" stroke-width="1.8" stroke-dasharray="4,3"/>
      <path d="M 70,32 Q 70,50 105,50 Q 140,50 140,32" fill="none" stroke="#333" stroke-width="1.2"/>
      <text x="105" y="68" text-anchor="middle" font-size="13" fill="#333">7x</text>
      <!-- group constants -->
      <rect x="178" y="8" width="18" height="22" rx="4" fill="none" stroke="#555" stroke-width="1.8" stroke-dasharray="4,3"/>
      <rect x="222" y="8" width="18" height="22" rx="4" fill="none" stroke="#555" stroke-width="1.8" stroke-dasharray="4,3"/>
      <path d="M 188,32 Q 188,50 210,50 Q 232,50 232,32" fill="none" stroke="#555" stroke-width="1.2"/>
      <text x="210" y="68" text-anchor="middle" font-size="13" fill="#555">10</text>
      <!-- arrow and result -->
      <line x1="150" y1="80" x2="150" y2="95" stroke="#333" stroke-width="1.5" marker-end="url(#arrowB)"/>
      <defs><marker id="arrowB" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#333"/></marker></defs>
      <text x="${W/2}" y="120" text-anchor="middle" font-size="18" font-weight="bold" font-family="serif" fill="#333">= 7x + 10</text>
    </svg></div>`;
  },

  /** Absolute Value: V-shaped graph */
  absoluteValueGraph() {
    const W=280, H=200;
    const ox=140, oy=140, s=22;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <!-- axes -->
      <line x1="30" y1="${oy}" x2="250" y2="${oy}" stroke="#aaa" stroke-width="1"/>
      <line x1="${ox}" y1="20" x2="${ox}" y2="180" stroke="#aaa" stroke-width="1"/>
      <text x="255" y="${oy+4}" class="svg-tick">x</text>
      <text x="${ox+6}" y="18" class="svg-tick">y</text>
      <!-- V shape: y = |x| -->
      <polyline points="${ox-5*s},${oy-5*s} ${ox},${oy} ${ox+5*s},${oy-5*s}" fill="none" stroke="#333" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- vertex dot -->
      <circle cx="${ox}" cy="${oy}" r="3.5" fill="#333"/>
      <text x="${ox+8}" y="${oy+14}" class="svg-label">vertex</text>
      <!-- label -->
      <text x="${W/2}" y="18" text-anchor="middle" class="svg-note">y = |x|</text>
      <!-- ticks -->
      ${[-2,-1,1,2].map(v=>`<line x1="${ox+v*s}" y1="${oy-3}" x2="${ox+v*s}" y2="${oy+3}" stroke="#aaa" stroke-width="1"/>
        <text x="${ox+v*s}" y="${oy+14}" text-anchor="middle" class="svg-tick">${v}</text>`).join('')}
    </svg></div>`;
  },

  /** Systems of Equations: two intersecting lines */
  twoLines() {
    const W=280, H=220;
    const ox=140, oy=140, s=24;
    const toS=(x,y)=>[ox+x*s, oy-y*s];
    const [x1a,y1a]=toS(-4,-1), [x1b,y1b]=toS(4,3);
    const [x2a,y2a]=toS(-3,4), [x2b,y2b]=toS(4,-3);
    const [ix,iy]=toS(1,1);
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <line x1="25" y1="${oy}" x2="255" y2="${oy}" stroke="#bbb" stroke-width="1"/>
      <line x1="${ox}" y1="15" x2="${ox}" y2="195" stroke="#bbb" stroke-width="1"/>
      <!-- line 1: y = 0.5x + 0.5 -->
      <line x1="${x1a}" y1="${y1a}" x2="${x1b}" y2="${y1b}" stroke="#333" stroke-width="2"/>
      <text x="${x1b+4}" y="${y1b-4}" class="svg-label">L₁</text>
      <!-- line 2: y = -x + 2 -->
      <line x1="${x2a}" y1="${y2a}" x2="${x2b}" y2="${y2b}" stroke="#555" stroke-width="2" stroke-dasharray="6,4"/>
      <text x="${x2b+4}" y="${y2b+14}" class="svg-label">L₂</text>
      <!-- intersection -->
      <circle cx="${ix}" cy="${iy}" r="5" fill="white" stroke="#333" stroke-width="2"/>
      <circle cx="${ix}" cy="${iy}" r="2" fill="#333"/>
      <text x="${ix+10}" y="${iy-6}" class="svg-label" font-weight="bold">solution (1, 1)</text>
      <text x="${W/2}" y="18" text-anchor="middle" class="svg-note">The intersection is the solution</text>
    </svg></div>`;
  },

  /** Factoring: area model for x² + bx + c */
  factoringArea() {
    const W=280, H=200;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <text x="${W/2}" y="18" text-anchor="middle" class="svg-note">Area model: (x + 2)(x + 3) = x² + 5x + 6</text>
      <!-- outer box -->
      <rect x="70" y="35" width="160" height="120" fill="none" stroke="#333" stroke-width="2"/>
      <!-- divider -->
      <line x1="170" y1="35" x2="170" y2="155" stroke="#333" stroke-width="1.5"/>
      <line x1="70" y1="105" x2="230" y2="105" stroke="#333" stroke-width="1.5"/>
      <!-- row/col headers -->
      <text x="120" y="30" text-anchor="middle" font-size="14" font-family="serif" fill="#333">x</text>
      <text x="200" y="30" text-anchor="middle" font-size="14" font-family="serif" fill="#333">3</text>
      <text x="58" y="75" text-anchor="middle" font-size="14" font-family="serif" fill="#333">x</text>
      <text x="58" y="135" text-anchor="middle" font-size="14" font-family="serif" fill="#333">2</text>
      <!-- products -->
      <text x="120" y="78" text-anchor="middle" font-size="18" font-family="serif" fill="#333">x²</text>
      <text x="200" y="78" text-anchor="middle" font-size="16" font-family="serif" fill="#555">3x</text>
      <text x="120" y="138" text-anchor="middle" font-size="16" font-family="serif" fill="#555">2x</text>
      <text x="200" y="138" text-anchor="middle" font-size="15" font-family="serif" fill="#333">6</text>
      <text x="${W/2}" y="185" text-anchor="middle" font-size="12" fill="#555">Sum: x² + 3x + 2x + 6 = x² + 5x + 6</text>
    </svg></div>`;
  },

  /** Exponents: power notation */
  exponentTower() {
    const W=280, H=150;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <text x="70" y="65" font-size="36" font-family="serif" fill="#333">2</text>
      <text x="92" y="48" font-size="22" font-family="serif" fill="#333">5</text>
      <text x="115" y="65" font-size="22" fill="#333">= 2 × 2 × 2 × 2 × 2</text>
      <line x1="70" y1="74" x2="75" y2="85" stroke="#333" stroke-width="1"/>
      <text x="55" y="100" class="svg-label">base</text>
      <line x1="97" y1="36" x2="102" y2="26" stroke="#333" stroke-width="1"/>
      <text x="105" y="22" class="svg-label">exponent</text>
      <text x="140" y="100" text-anchor="middle" class="svg-label" font-size="13">= 32</text>
      <text x="140" y="135" text-anchor="middle" class="svg-tick">Exponent tells how many times to multiply the base</text>
    </svg></div>`;
  },

  /** Proportions: ratio bars */
  proportionBars() {
    const W=300, H=140;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <text x="${W/2}" y="20" text-anchor="middle" class="svg-note">Proportion: 2/3 = 4/6</text>
      <!-- top bar: 2 out of 3 -->
      <rect x="40" y="35" width="70" height="25" rx="3" fill="#ddd" stroke="#333" stroke-width="1.5"/>
      <rect x="110" y="35" width="35" height="25" rx="3" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="75" y="52" text-anchor="middle" font-size="12" fill="#333">2</text>
      <text x="145" y="66" class="svg-label">of 3</text>
      <!-- bottom bar: 4 out of 6 -->
      <rect x="40" y="80" width="140" height="25" rx="3" fill="#ddd" stroke="#333" stroke-width="1.5"/>
      <rect x="180" y="80" width="70" height="25" rx="3" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="110" y="97" text-anchor="middle" font-size="12" fill="#333">4</text>
      <text x="255" y="97" class="svg-label">of 6</text>
      <!-- equals -->
      <text x="20" y="72" text-anchor="middle" font-size="18" fill="#333">=</text>
      <text x="${W/2}" y="130" text-anchor="middle" class="svg-tick">Same fraction of the whole</text>
    </svg></div>`;
  },

  /** Percent: bar showing part of 100 */
  percentBar() {
    const W=300, H=130;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <text x="${W/2}" y="22" text-anchor="middle" class="svg-note">Percent means "per hundred"</text>
      <!-- 100% bar -->
      <rect x="30" y="40" width="240" height="30" rx="5" fill="none" stroke="#333" stroke-width="1.5"/>
      <!-- 40% filled -->
      <rect x="30" y="40" width="96" height="30" rx="5" fill="#ddd" stroke="#333" stroke-width="1.5"/>
      <text x="78" y="60" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">40%</text>
      <!-- ticks -->
      ${[0,25,50,75,100].map(p=>{
        const x=30+p*2.4;
        return `<line x1="${x}" y1="72" x2="${x}" y2="80" stroke="#333" stroke-width="1"/>
          <text x="${x}" y="92" text-anchor="middle" class="svg-tick">${p}%</text>`;
      }).join('')}
      <text x="${W/2}" y="115" text-anchor="middle" class="svg-label">40% of 200 = 0.40 × 200 = 80</text>
    </svg></div>`;
  },

  /** Functions: input → box → output machine */
  functionMachine() {
    const W=300, H=140;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <!-- input -->
      <text x="35" y="68" text-anchor="middle" font-size="18" font-family="serif" fill="#333">3</text>
      <line x1="50" y1="62" x2="85" y2="62" stroke="#333" stroke-width="1.5" marker-end="url(#arrFn)"/>
      <defs><marker id="arrFn" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#333"/></marker></defs>
      <!-- machine -->
      <rect x="90" y="38" width="120" height="48" rx="10" fill="none" stroke="#333" stroke-width="2"/>
      <text x="150" y="50" text-anchor="middle" class="svg-tick">function</text>
      <text x="150" y="72" text-anchor="middle" font-size="16" font-family="serif" fill="#333">f(x) = 2x + 1</text>
      <!-- output -->
      <line x1="215" y1="62" x2="245" y2="62" stroke="#333" stroke-width="1.5" marker-end="url(#arrFn)"/>
      <text x="265" y="68" text-anchor="middle" font-size="18" font-family="serif" fill="#333">7</text>
      <!-- labels -->
      <text x="35" y="95" text-anchor="middle" class="svg-label">input (x)</text>
      <text x="265" y="95" text-anchor="middle" class="svg-label">output f(x)</text>
      <text x="${W/2}" y="125" text-anchor="middle" class="svg-tick">Each input produces exactly one output</text>
    </svg></div>`;
  },

  /** Compound Inequalities: number line with two conditions */
  compoundNumberLine() {
    const W=300, H=110;
    const x0=40, xEnd=260, y=50;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <text x="${W/2}" y="20" text-anchor="middle" class="svg-note">Compound inequality: −2 &lt; x ≤ 5</text>
      <!-- number line -->
      <line x1="${x0}" y1="${y}" x2="${xEnd}" y2="${y}" stroke="#333" stroke-width="1.5"/>
      ${[-4,-2,0,2,4,6].map((v,i)=>{
        const px=x0+(i/(5))*(xEnd-x0);
        return `<line x1="${px}" y1="${y-5}" x2="${px}" y2="${y+5}" stroke="#333" stroke-width="1"/>
          <text x="${px}" y="${y+18}" text-anchor="middle" class="svg-tick">${v}</text>`;
      }).join('')}
      <!-- open dot at -2, closed dot at 5 -->
      <circle cx="${x0+(1/5)*(xEnd-x0)}" cy="${y}" r="4.5" fill="white" stroke="#333" stroke-width="2"/>
      <circle cx="${x0+(4.5/5.0)*(xEnd-x0)-8}" cy="${y}" r="4.5" fill="#333" stroke="#333" stroke-width="2"/>
      <!-- shaded region -->
      <line x1="${x0+(1/5)*(xEnd-x0)+5}" y1="${y}" x2="${x0+(4.5/5.0)*(xEnd-x0)-13}" y2="${y}" stroke="#333" stroke-width="4" opacity="0.35"/>
      <text x="${W/2}" y="92" text-anchor="middle" class="svg-label">Open dot = not included, Closed dot = included</text>
    </svg></div>`;
  },

  /** Completing the Square: geometric area model */
  completingSquareArea() {
    const W=280, H=190;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <text x="${W/2}" y="18" text-anchor="middle" class="svg-note">x² + 6x + ? → (x + 3)²</text>
      <!-- big square x² -->
      <rect x="35" y="35" width="80" height="80" fill="#eee" stroke="#333" stroke-width="2"/>
      <text x="75" y="80" text-anchor="middle" font-size="16" font-family="serif" fill="#333">x²</text>
      <!-- right strip 3x -->
      <rect x="115" y="35" width="40" height="80" fill="#ddd" stroke="#333" stroke-width="1.5"/>
      <text x="135" y="80" text-anchor="middle" font-size="13" font-family="serif" fill="#555">3x</text>
      <!-- bottom strip 3x -->
      <rect x="35" y="115" width="80" height="40" fill="#ddd" stroke="#333" stroke-width="1.5"/>
      <text x="75" y="140" text-anchor="middle" font-size="13" font-family="serif" fill="#555">3x</text>
      <!-- corner square 9 (the "completing" piece) -->
      <rect x="115" y="115" width="40" height="40" fill="none" stroke="#333" stroke-width="2" stroke-dasharray="5,4"/>
      <text x="135" y="140" text-anchor="middle" font-size="13" font-family="serif" fill="#333">9</text>
      <!-- labels -->
      <text x="75" y="30" text-anchor="middle" class="svg-label">x</text>
      <text x="135" y="30" text-anchor="middle" class="svg-label">3</text>
      <text x="28" y="80" text-anchor="middle" class="svg-label">x</text>
      <text x="28" y="140" text-anchor="middle" class="svg-label">3</text>
      <text x="210" y="100" class="svg-label">← add 9</text>
      <text x="210" y="115" class="svg-label">to complete</text>
      <text x="${W/2}" y="178" text-anchor="middle" class="svg-label">(x + 3)² = x² + 6x + 9</text>
    </svg></div>`;
  },

  /** Radical Expressions: √ diagram */
  radicalDiagram() {
    const W=280, H=140;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <!-- a square with side s and area A -->
      <rect x="30" y="30" width="80" height="80" fill="#eee" stroke="#333" stroke-width="2"/>
      <text x="70" y="76" text-anchor="middle" font-size="15" fill="#333">Area = 25</text>
      <text x="70" y="125" text-anchor="middle" class="svg-label">side = ?</text>
      <!-- arrow -->
      <line x1="130" y1="70" x2="155" y2="70" stroke="#333" stroke-width="1.5" marker-end="url(#arrRad)"/>
      <defs><marker id="arrRad" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#333"/></marker></defs>
      <!-- result -->
      <text x="210" y="60" text-anchor="middle" font-size="22" font-family="serif" fill="#333">√25 = 5</text>
      <text x="210" y="85" text-anchor="middle" class="svg-label">side = 5</text>
      <text x="210" y="115" text-anchor="middle" class="svg-tick">√ "undoes" squaring</text>
    </svg></div>`;
  },

  /** Arithmetic Sequences: dots with common difference */
  sequenceDots() {
    const W=300, H=130;
    const vals=[3,7,11,15,19];
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <text x="${W/2}" y="18" text-anchor="middle" class="svg-note">Arithmetic Sequence: common difference d = 4</text>
      ${vals.map((v,i)=>{
        const x=50+i*52;
        return `<circle cx="${x}" cy="55" r="18" fill="none" stroke="#333" stroke-width="1.8"/>
          <text x="${x}" y="60" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">${v}</text>
          ${i<vals.length-1?`<text x="${x+26}" y="42" text-anchor="middle" font-size="11" fill="#555">+4</text>
          <line x1="${x+18}" y1="55" x2="${x+34}" y2="55" stroke="#333" stroke-width="1" stroke-dasharray="3,3"/>`:''}`
      }).join('')}
      <text x="${W/2}" y="100" text-anchor="middle" class="svg-label">aₙ = a₁ + (n−1)d = 3 + (n−1)·4</text>
      <text x="${W/2}" y="118" text-anchor="middle" class="svg-tick">Each term = previous + common difference</text>
    </svg></div>`;
  },

  /** Logarithms: log and exponential curves */
  logExpCurves() {
    const W=280, H=200;
    const ox=60, oy=160, sx=28, sy=28;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <line x1="30" y1="${oy}" x2="260" y2="${oy}" stroke="#bbb" stroke-width="1"/>
      <line x1="${ox}" y1="15" x2="${ox}" y2="180" stroke="#bbb" stroke-width="1"/>
      <!-- y = 2^x (exponential) -->
      <path d="M${ox-1*sx},${oy-0.5*sy} Q${ox+1*sx},${oy-2*sy} ${ox+3*sx},${oy-5*sy}" fill="none" stroke="#333" stroke-width="2"/>
      <text x="${ox+3.2*sx}" y="${oy-5.2*sy}" class="svg-label">y = 2ˣ</text>
      <!-- y = log₂(x) -->
      <path d="M${ox+0.5*sx},${oy+1*sy} Q${ox+2*sx},${oy-1*sy} ${ox+5*sx},${oy-3*sy}" fill="none" stroke="#555" stroke-width="2" stroke-dasharray="6,4"/>
      <text x="${ox+5.2*sx}" y="${oy-3*sy}" class="svg-label">y = log₂x</text>
      <!-- y=x line for symmetry -->
      <line x1="${ox-1*sx}" y1="${oy+1*sy}" x2="${ox+5*sx}" y2="${oy-5*sy}" stroke="#ccc" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="${ox+4.5*sx}" y="${oy-4*sy}" class="svg-tick">y = x</text>
      <text x="${W/2}" y="18" text-anchor="middle" class="svg-note">Logarithm is the inverse of exponential</text>
    </svg></div>`;
  },

  // ---- GEOMETRY ----

  /** Intro to Geometry: point, line, ray, segment */
  pointLineRay() {
    const W=300, H=170;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <!-- point -->
      <circle cx="50" cy="30" r="3.5" fill="#333"/>
      <text x="60" y="34" class="svg-label">Point A</text>
      <!-- line (extends both ways) -->
      <line x1="20" y1="65" x2="175" y2="65" stroke="#333" stroke-width="2"/>
      <circle cx="60" cy="65" r="3" fill="#333"/>
      <circle cx="140" cy="65" r="3" fill="#333"/>
      <polygon points="17,65 23,62 23,68" fill="#333"/>
      <polygon points="178,65 172,62 172,68" fill="#333"/>
      <text x="190" y="69" class="svg-label">Line (∞ both ways)</text>
      <!-- ray -->
      <line x1="50" y1="100" x2="175" y2="100" stroke="#333" stroke-width="2"/>
      <circle cx="50" cy="100" r="3" fill="#333"/>
      <polygon points="178,100 172,97 172,103" fill="#333"/>
      <text x="190" y="104" class="svg-label">Ray (one endpoint)</text>
      <!-- segment -->
      <line x1="50" y1="135" x2="140" y2="135" stroke="#333" stroke-width="2"/>
      <circle cx="50" cy="135" r="3" fill="#333"/>
      <circle cx="140" cy="135" r="3" fill="#333"/>
      <text x="190" y="139" class="svg-label">Segment (two endpoints)</text>
    </svg></div>`;
  },

  /** Angle Pairs: supplementary and complementary */
  anglePairsCombo() {
    const W=320, H=160;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <!-- Complementary: 30° + 60° = 90° -->
      <line x1="20" y1="120" x2="100" y2="120" stroke="#333" stroke-width="2"/>
      <line x1="20" y1="120" x2="20" y2="40" stroke="#333" stroke-width="2"/>
      <line x1="20" y1="120" x2="90" y2="50" stroke="#555" stroke-width="1.5" stroke-dasharray="5,3"/>
      <path d="M 40,120 A 20,20 0 0,0 20,100" fill="none" stroke="#333" stroke-width="1.3"/>
      <text x="44" y="108" class="svg-tick">60°</text>
      <path d="M 20,95 A 25,25 0 0,0 37,103" fill="none" stroke="#555" stroke-width="1.3"/>
      <text x="32" y="88" class="svg-tick">30°</text>
      <rect x="20" y="105" width="12" height="12" fill="none" stroke="#333" stroke-width="1"/>
      <text x="60" y="145" text-anchor="middle" class="svg-label">Complementary = 90°</text>
      <!-- Supplementary: 120° + 60° = 180° -->
      <line x1="170" y1="110" x2="300" y2="110" stroke="#333" stroke-width="2"/>
      <line x1="235" y1="110" x2="190" y2="45" stroke="#333" stroke-width="2"/>
      <path d="M 215,110 A 20,20 0 0,1 220,90" fill="none" stroke="#333" stroke-width="1.3"/>
      <text x="207" y="98" class="svg-tick">120°</text>
      <path d="M 253,110 A 18,18 0 0,0 246,94" fill="none" stroke="#555" stroke-width="1.3"/>
      <text x="256" y="100" class="svg-tick">60°</text>
      <text x="235" y="145" text-anchor="middle" class="svg-label">Supplementary = 180°</text>
    </svg></div>`;
  },

  /** Parallel Lines & Transversals */
  parallelTransversal() {
    const W=280, H=200;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <!-- parallel lines -->
      <line x1="30" y1="70" x2="250" y2="70" stroke="#333" stroke-width="2"/>
      <line x1="30" y1="140" x2="250" y2="140" stroke="#333" stroke-width="2"/>
      <!-- arrows indicating parallel -->
      <text x="255" y="68" class="svg-label">ℓ₁</text>
      <text x="255" y="138" class="svg-label">ℓ₂</text>
      <!-- transversal -->
      <line x1="80" y1="20" x2="200" y2="185" stroke="#555" stroke-width="2"/>
      <text x="200" y="195" class="svg-label">t</text>
      <!-- angle arcs at top intersection -->
      <path d="M 125,70 A 15,15 0 0,0 110,58" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="128" y="60" class="svg-tick">α</text>
      <!-- corresponding angle at bottom -->
      <path d="M 175,140 A 15,15 0 0,0 160,128" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="178" y="130" class="svg-tick">α</text>
      <text x="${W/2}" y="18" text-anchor="middle" class="svg-note">Corresponding angles are equal</text>
    </svg></div>`;
  },

  /** Triangle Angle Sum = 180° */
  triangleAngleSum() {
    const W=280, H=180;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <polygon points="140,30 50,140 230,140" fill="none" stroke="#333" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- angle arcs -->
      <path d="M 127,50 A 22,22 0 0,1 153,50" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="140" y="65" text-anchor="middle" class="svg-label">50°</text>
      <path d="M 72,132 A 20,20 0 0,0 58,117" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="78" y="118" class="svg-label">60°</text>
      <path d="M 210,132 A 20,20 0 0,1 222,117" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="205" y="118" class="svg-label">70°</text>
      <!-- sum -->
      <text x="${W/2}" y="170" text-anchor="middle" class="svg-label">50° + 60° + 70° = 180°</text>
    </svg></div>`;
  },

  /** Classifying Triangles by sides */
  triangleTypes() {
    const W=320, H=160;
    const tri=(x,y,pts,label)=>`<polygon points="${pts}" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
      <text x="${x}" y="${y}" text-anchor="middle" class="svg-label">${label}</text>`;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      ${tri(55,140,"55,25 20,120 90,120","Equilateral")}
      ${tri(160,140,"160,25 120,120 195,120","Isosceles")}
      ${tri(265,140,"250,30 225,120 305,120","Scalene")}
      <!-- tick marks for equilateral -->
      <line x1="35" y1="72" x2="40" y2="68" stroke="#333" stroke-width="1.5"/>
      <line x1="73" y1="72" x2="68" y2="68" stroke="#333" stroke-width="1.5"/>
      <line x1="55" y1="122" x2="55" y2="117" stroke="#333" stroke-width="1.5"/>
      <!-- tick marks for isosceles (two equal) -->
      <line x1="138" y1="72" x2="143" y2="68" stroke="#333" stroke-width="1.5"/>
      <line x1="178" y1="72" x2="173" y2="68" stroke="#333" stroke-width="1.5"/>
    </svg></div>`;
  },

  /** Quadrilateral types */
  quadTypes() {
    const W=320, H=160;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <!-- square -->
      <rect x="15" y="25" width="55" height="55" fill="none" stroke="#333" stroke-width="2"/>
      <text x="42" y="105" text-anchor="middle" class="svg-label">Square</text>
      <!-- rectangle -->
      <rect x="90" y="30" width="70" height="45" fill="none" stroke="#333" stroke-width="2"/>
      <text x="125" y="105" text-anchor="middle" class="svg-label">Rectangle</text>
      <!-- parallelogram -->
      <polygon points="195,75 215,30 285,30 265,75" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
      <text x="240" y="105" text-anchor="middle" class="svg-label">Parallelogram</text>
      <!-- trapezoid -->
      <polygon points="35,120 55,120 70,145 20,145" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
      <text x="42" y="155" text-anchor="middle" class="svg-tick">Trapezoid</text>
      <!-- rhombus -->
      <polygon points="145,120 165,135 145,150 125,135" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
      <text x="145" y="155" text-anchor="middle" class="svg-tick">Rhombus</text>
    </svg></div>`;
  },

  /** Polygon Angle Sums: pentagon with diagonals */
  polygonDiagonals() {
    const W=260, H=200;
    const cx=130,cy=95,r=70;
    const pts=[0,1,2,3,4].map(i=>{
      const a=-Math.PI/2+i*2*Math.PI/5;
      return [cx+r*Math.cos(a),cy+r*Math.sin(a)];
    });
    const ptStr=pts.map(p=>p.join(',')).join(' ');
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <polygon points="${ptStr}" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
      <!-- diagonals from one vertex -->
      <line x1="${pts[0][0]}" y1="${pts[0][1]}" x2="${pts[2][0]}" y2="${pts[2][1]}" stroke="#555" stroke-width="1.2" stroke-dasharray="5,4"/>
      <line x1="${pts[0][0]}" y1="${pts[0][1]}" x2="${pts[3][0]}" y2="${pts[3][1]}" stroke="#555" stroke-width="1.2" stroke-dasharray="5,4"/>
      ${pts.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="3" fill="#333"/>`).join('')}
      <text x="${W/2}" y="185" text-anchor="middle" class="svg-label">(5 − 2) × 180° = 540°</text>
      <text x="${W/2}" y="16" text-anchor="middle" class="svg-note">Pentagon: 3 triangles from diagonals</text>
    </svg></div>`;
  },

  /** Rotations: shape rotated around a point */
  rotationDiagram() {
    const W=280, H=200;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <!-- center of rotation -->
      <circle cx="140" cy="110" r="3" fill="#333"/>
      <text x="148" y="114" class="svg-tick">center</text>
      <!-- original triangle -->
      <polygon points="80,50 50,100 110,100" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
      <text x="65" y="45" class="svg-label">original</text>
      <!-- rotated triangle (90° CW) -->
      <polygon points="150,70 200,100 150,100" fill="none" stroke="#555" stroke-width="2" stroke-dasharray="5,3" stroke-linejoin="round"/>
      <text x="200" y="65" class="svg-label">90° rotation</text>
      <!-- rotation arc -->
      <path d="M 90,55 A 60,60 0 0,1 155,75" fill="none" stroke="#333" stroke-width="1.2"/>
      <polygon points="155,75 148,70 150,80" fill="#333"/>
      <text x="140" y="42" text-anchor="middle" class="svg-tick">90°</text>
      <text x="${W/2}" y="190" text-anchor="middle" class="svg-note">Shape rotated around a fixed center point</text>
    </svg></div>`;
  },

  /** Congruence: two congruent triangles */
  congruentShapes() {
    const W=300, H=160;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <polygon points="40,120 80,35 130,120" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="170,120 210,35 260,120" fill="none" stroke="#555" stroke-width="2" stroke-linejoin="round"/>
      <!-- tick marks (equal sides) -->
      <line x1="58" y1="75" x2="63" y2="72" stroke="#333" stroke-width="1.5"/>
      <line x1="188" y1="75" x2="193" y2="72" stroke="#555" stroke-width="1.5"/>
      <line x1="107" y1="75" x2="102" y2="72" stroke="#333" stroke-width="1.5"/>
      <line x1="237" y1="75" x2="232" y2="72" stroke="#555" stroke-width="1.5"/>
      <!-- congruence symbol -->
      <text x="150" y="85" text-anchor="middle" font-size="22" fill="#333">≅</text>
      <text x="85" y="140" text-anchor="middle" class="svg-label">△ABC</text>
      <text x="215" y="140" text-anchor="middle" class="svg-label">△DEF</text>
      <text x="${W/2}" y="155" text-anchor="middle" class="svg-tick">Same shape AND same size</text>
    </svg></div>`;
  },

  /** Similarity: same shape, different size */
  similarShapes() {
    const W=300, H=160;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <polygon points="40,125 70,45 120,125" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="160,125 205,25 270,125" fill="none" stroke="#555" stroke-width="2" stroke-linejoin="round"/>
      <!-- angle marks (equal angles) -->
      <path d="M 52,115 A 12,12 0 0,1 48,103" fill="none" stroke="#333" stroke-width="1.5"/>
      <path d="M 177,115 A 18,18 0 0,1 171,97" fill="none" stroke="#555" stroke-width="1.5"/>
      <!-- labels -->
      <text x="80" y="140" text-anchor="middle" class="svg-label">small</text>
      <text x="215" y="140" text-anchor="middle" class="svg-label">large</text>
      <text x="145" y="80" text-anchor="middle" font-size="18" fill="#333">~</text>
      <text x="${W/2}" y="155" text-anchor="middle" class="svg-tick">Same shape, proportional sides, equal angles</text>
    </svg></div>`;
  },

  /** Distance & Midpoint: two points on coordinate plane */
  distanceMidpoint() {
    const W=280, H=220;
    const ox=50,oy=180,s=28;
    const ax=2,ay=1,bx=6,by=4;
    const px=(x)=>ox+x*s, py=(y)=>oy-y*s;
    const mx=(ax+bx)/2, my=(ay+by)/2;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <line x1="${ox}" y1="${oy}" x2="260" y2="${oy}" stroke="#bbb" stroke-width="1"/>
      <line x1="${ox}" y1="20" x2="${ox}" y2="${oy}" stroke="#bbb" stroke-width="1"/>
      <!-- line between points -->
      <line x1="${px(ax)}" y1="${py(ay)}" x2="${px(bx)}" y2="${py(by)}" stroke="#333" stroke-width="2"/>
      <!-- dashed right triangle -->
      <line x1="${px(ax)}" y1="${py(ay)}" x2="${px(bx)}" y2="${py(ay)}" stroke="#555" stroke-width="1" stroke-dasharray="5,4"/>
      <line x1="${px(bx)}" y1="${py(ay)}" x2="${px(bx)}" y2="${py(by)}" stroke="#555" stroke-width="1" stroke-dasharray="5,4"/>
      <text x="${px((ax+bx)/2)}" y="${py(ay)+14}" text-anchor="middle" class="svg-tick">Δx = ${bx-ax}</text>
      <text x="${px(bx)+18}" y="${py((ay+by)/2)}" class="svg-tick">Δy = ${by-ay}</text>
      <!-- points -->
      <circle cx="${px(ax)}" cy="${py(ay)}" r="4" fill="#333"/>
      <text x="${px(ax)-5}" y="${py(ay)-8}" class="svg-label">A(${ax},${ay})</text>
      <circle cx="${px(bx)}" cy="${py(by)}" r="4" fill="#333"/>
      <text x="${px(bx)+5}" y="${py(by)-8}" class="svg-label">B(${bx},${by})</text>
      <!-- midpoint -->
      <circle cx="${px(mx)}" cy="${py(my)}" r="3" fill="white" stroke="#333" stroke-width="1.5"/>
      <text x="${px(mx)+5}" y="${py(my)+14}" class="svg-tick">M(${mx},${my})</text>
      <text x="${W/2}" y="18" text-anchor="middle" class="svg-note">d = √(Δx² + Δy²) = √(16+9) = 5</text>
    </svg></div>`;
  },

  /** Parallel & Perpendicular lines */
  parallelPerpLines() {
    const W=300, H=180;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <!-- parallel -->
      <line x1="30" y1="45" x2="130" y2="85" stroke="#333" stroke-width="2"/>
      <line x1="30" y1="75" x2="130" y2="115" stroke="#333" stroke-width="2"/>
      <text x="80" y="38" text-anchor="middle" class="svg-label">Parallel</text>
      <text x="80" y="135" text-anchor="middle" class="svg-tick">same slope</text>
      <!-- perpendicular -->
      <line x1="180" y1="40" x2="260" y2="110" stroke="#333" stroke-width="2"/>
      <line x1="260" y1="40" x2="190" y2="110" stroke="#333" stroke-width="2"/>
      <rect x="219" y="69" width="10" height="10" fill="none" stroke="#333" stroke-width="1" transform="rotate(45,224,74)"/>
      <text x="220" y="38" text-anchor="middle" class="svg-label">Perpendicular</text>
      <text x="220" y="135" text-anchor="middle" class="svg-tick">slopes multiply to −1</text>
      <text x="${W/2}" y="168" text-anchor="middle" class="svg-note">∥ = parallel     ⊥ = perpendicular</text>
    </svg></div>`;
  },

  /** Composite/Trapezoid shapes */
  compositeShape() {
    const W=280, H=170;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <text x="${W/2}" y="18" text-anchor="middle" class="svg-note">Composite shape = sum of simpler shapes</text>
      <!-- L-shape -->
      <polygon points="40,35 140,35 140,85 90,85 90,135 40,135" fill="#eee" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
      <!-- dimension labels -->
      <text x="90" y="28" text-anchor="middle" class="svg-label">100</text>
      <text x="147" y="63" class="svg-label">50</text>
      <text x="118" y="92" text-anchor="middle" class="svg-tick">50</text>
      <text x="82" y="113" class="svg-label">50</text>
      <text x="65" y="147" text-anchor="middle" class="svg-label">50</text>
      <text x="33" y="90" class="svg-label" text-anchor="end">100</text>
      <!-- split line -->
      <line x1="90" y1="35" x2="90" y2="85" stroke="#555" stroke-width="1" stroke-dasharray="5,4"/>
      <!-- method -->
      <text x="200" y="60" class="svg-label">= Rectangle A</text>
      <text x="200" y="80" class="svg-label">+ Rectangle B</text>
      <text x="200" y="110" class="svg-label">Split into simple</text>
      <text x="200" y="125" class="svg-label">shapes, then add</text>
    </svg></div>`;
  },

  /** Arc & Sector of a circle */
  arcSector() {
    const W=260, H=210;
    const cx=130,cy=105,r=72;
    const a1=0, a2=Math.PI*0.42;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#ccc" stroke-width="1.5"/>
      <!-- sector -->
      <path d="M${cx},${cy} L${cx+r},${cy} A${r},${r} 0 0,0 ${cx+r*Math.cos(-a2)},${cy-r*Math.sin(a2)} Z" fill="#eee" stroke="#333" stroke-width="2"/>
      <!-- arc (thicker) -->
      <path d="M${cx+r},${cy} A${r},${r} 0 0,0 ${cx+r*Math.cos(-a2)},${cy-r*Math.sin(a2)}" fill="none" stroke="#333" stroke-width="3"/>
      <!-- angle arc -->
      <path d="M${cx+22},${cy} A22,22 0 0,0 ${cx+22*Math.cos(-a2)},${cy-22*Math.sin(a2)}" fill="none" stroke="#333" stroke-width="1.3"/>
      <text x="${cx+30}" y="${cy-10}" class="svg-label">θ</text>
      <!-- labels -->
      <text x="${cx+r/2}" y="${cy+14}" text-anchor="middle" class="svg-label">r</text>
      <text x="${cx+r*0.6}" y="${cy-r*0.35}" class="svg-label" font-weight="bold">arc</text>
      <text x="${cx+25}" y="${cy-30}" class="svg-tick">sector</text>
      <text x="${W/2}" y="195" text-anchor="middle" class="svg-note">Arc length = (θ/360)·2πr  |  Sector area = (θ/360)·πr²</text>
    </svg></div>`;
  },

  /** Triangle Inequality: valid vs invalid */
  triangleInequalityDemo() {
    const W=300, H=150;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <!-- valid triangle: 3, 4, 5 -->
      <polygon points="30,110 110,110 80,45" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
      <text x="70" y="125" text-anchor="middle" class="svg-label">3 + 4 > 5 ✓</text>
      <text x="62" y="70" class="svg-tick">5</text>
      <text x="70" y="108" text-anchor="middle" class="svg-tick">4</text>
      <text x="95" y="82" class="svg-tick">3</text>
      <!-- invalid: 1, 2, 5 -->
      <line x1="170" y1="80" x2="210" y2="80" stroke="#333" stroke-width="2"/>
      <line x1="210" y1="80" x2="270" y2="80" stroke="#555" stroke-width="2" stroke-dasharray="5,3"/>
      <line x1="170" y1="80" x2="190" y2="80" stroke="#333" stroke-width="2"/>
      <text x="190" y="95" class="svg-tick">1</text>
      <text x="220" y="73" class="svg-tick">2</text>
      <text x="250" y="95" class="svg-tick">5</text>
      <text x="220" y="125" text-anchor="middle" class="svg-label">1 + 2 < 5 ✗</text>
      <text x="220" y="43" text-anchor="middle" class="svg-note">Can't close!</text>
      <text x="${W/2}" y="145" text-anchor="middle" class="svg-tick">Sum of any two sides must exceed the third</text>
    </svg></div>`;
  },

  /** Special Right Triangles: 30-60-90 and 45-45-90 */
  specialRightTriangles() {
    const W=320, H=180;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <!-- 45-45-90 -->
      <polygon points="30,140 30,50 120,140" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
      <rect x="30" y="125" width="13" height="13" fill="none" stroke="#333" stroke-width="1"/>
      <text x="20" y="100" text-anchor="end" class="svg-label">s</text>
      <text x="75" y="155" text-anchor="middle" class="svg-label">s</text>
      <text x="85" y="88" class="svg-label">s√2</text>
      <text x="50" y="56" class="svg-tick">45°</text>
      <text x="100" y="135" class="svg-tick">45°</text>
      <text x="75" y="170" text-anchor="middle" class="svg-label">45-45-90</text>
      <!-- 30-60-90 -->
      <polygon points="190,140 190,40 290,140" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
      <rect x="190" y="125" width="13" height="13" fill="none" stroke="#333" stroke-width="1"/>
      <text x="180" y="95" text-anchor="end" class="svg-label">s√3</text>
      <text x="240" y="155" text-anchor="middle" class="svg-label">s</text>
      <text x="248" y="85" class="svg-label">2s</text>
      <text x="205" y="52" class="svg-tick">30°</text>
      <text x="268" y="135" class="svg-tick">60°</text>
      <text x="240" y="170" text-anchor="middle" class="svg-label">30-60-90</text>
    </svg></div>`;
  },

  /** Inscribed Angles: angle in circle */
  inscribedAngle() {
    const W=260, H=220;
    const cx=130,cy=108,r=75;
    const pa=[-Math.PI*0.7], pb=[Math.PI*0.2], pv=[Math.PI*0.8];
    const A=[cx+r*Math.cos(pa),cy-r*Math.sin(pa)];
    const B=[cx+r*Math.cos(pb),cy-r*Math.sin(pb)];
    const V=[cx+r*Math.cos(pv),cy-r*Math.sin(pv)];
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#ccc" stroke-width="1.5"/>
      <!-- inscribed angle -->
      <line x1="${V[0]}" y1="${V[1]}" x2="${A[0]}" y2="${A[1]}" stroke="#333" stroke-width="2"/>
      <line x1="${V[0]}" y1="${V[1]}" x2="${B[0]}" y2="${B[1]}" stroke="#333" stroke-width="2"/>
      <!-- central angle (dashed) -->
      <line x1="${cx}" y1="${cy}" x2="${A[0]}" y2="${A[1]}" stroke="#555" stroke-width="1.2" stroke-dasharray="5,4"/>
      <line x1="${cx}" y1="${cy}" x2="${B[0]}" y2="${B[1]}" stroke="#555" stroke-width="1.2" stroke-dasharray="5,4"/>
      <!-- points -->
      <circle cx="${V[0]}" cy="${V[1]}" r="3.5" fill="#333"/>
      <circle cx="${A[0]}" cy="${A[1]}" r="3.5" fill="#333"/>
      <circle cx="${B[0]}" cy="${B[1]}" r="3.5" fill="#333"/>
      <circle cx="${cx}" cy="${cy}" r="2.5" fill="#333"/>
      <text x="${V[0]-10}" y="${V[1]-6}" class="svg-label">V</text>
      <text x="${A[0]-10}" y="${A[1]+14}" class="svg-label">A</text>
      <text x="${B[0]+6}" y="${B[1]+4}" class="svg-label">B</text>
      <text x="${cx+6}" y="${cy-6}" class="svg-tick">O</text>
      <text x="${W/2}" y="205" text-anchor="middle" class="svg-note">Inscribed angle = ½ × central angle</text>
    </svg></div>`;
  },

  /** Symmetry & Nets */
  symmetryLines() {
    const W=280, H=170;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <!-- butterfly shape with line of symmetry -->
      <polygon points="70,30 100,60 100,100 70,130 40,100 40,60" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
      <line x1="70" y1="20" x2="70" y2="145" stroke="#555" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="70" y="158" text-anchor="middle" class="svg-label">Line of Symmetry</text>
      <!-- cube net -->
      <rect x="170" y="30" width="30" height="30" fill="none" stroke="#333" stroke-width="1.5"/>
      <rect x="170" y="60" width="30" height="30" fill="none" stroke="#333" stroke-width="1.5"/>
      <rect x="140" y="60" width="30" height="30" fill="none" stroke="#333" stroke-width="1.5"/>
      <rect x="200" y="60" width="30" height="30" fill="none" stroke="#333" stroke-width="1.5"/>
      <rect x="170" y="90" width="30" height="30" fill="none" stroke="#333" stroke-width="1.5"/>
      <rect x="170" y="120" width="30" height="30" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="185" y="158" text-anchor="middle" class="svg-label">Net of a Cube</text>
    </svg></div>`;
  },

  /** Geometric Probability: target diagram */
  dartboard() {
    const W=250, H=200;
    const cx=125,cy=95;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <rect x="45" y="25" width="160" height="140" fill="none" stroke="#333" stroke-width="2"/>
      <circle cx="${cx}" cy="${cy}" r="55" fill="#ddd" stroke="#333" stroke-width="1.5"/>
      <circle cx="${cx}" cy="${cy}" r="25" fill="#eee" stroke="#333" stroke-width="1.5"/>
      <!-- labels -->
      <text x="${cx}" y="${cy+4}" text-anchor="middle" class="svg-label" font-weight="bold">target</text>
      <text x="${cx}" y="180" text-anchor="middle" class="svg-note">P(target) = target area ÷ total area</text>
    </svg></div>`;
  },

  // ---- TRIGONOMETRY ----

  /** SOH CAH TOA labeled triangle */
  sohcahtoaTriangle() {
    const W=300, H=200;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <polygon points="50,155 220,155 50,45" fill="none" stroke="#333" stroke-width="2.5" stroke-linejoin="round"/>
      <rect x="50" y="140" width="14" height="14" fill="none" stroke="#333" stroke-width="1"/>
      <!-- angle arc -->
      <path d="M 200,155 A 22,22 0 0,0 210,140" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="195" y="140" class="svg-label">θ</text>
      <!-- side labels -->
      <text x="135" y="172" text-anchor="middle" class="svg-label" font-weight="bold">adjacent</text>
      <text x="35" y="105" text-anchor="middle" class="svg-label" font-weight="bold">opposite</text>
      <text x="150" y="90" text-anchor="middle" class="svg-label" font-weight="bold">hypotenuse</text>
      <!-- SOH CAH TOA -->
      <text x="${W/2}" y="195" text-anchor="middle" font-size="11" fill="#333" font-weight="bold" font-family="monospace">SOH: sin=O/H   CAH: cos=A/H   TOA: tan=O/A</text>
    </svg></div>`;
  },

  /** Finding sides with trig */
  findSideDiagram() {
    const W=280, H=180;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <polygon points="40,140 200,140 40,40" fill="none" stroke="#333" stroke-width="2.5" stroke-linejoin="round"/>
      <rect x="40" y="125" width="14" height="14" fill="none" stroke="#333" stroke-width="1"/>
      <path d="M 180,140 A 22,22 0 0,0 188,125" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="175" y="125" class="svg-label">35°</text>
      <text x="120" y="158" text-anchor="middle" font-size="15" font-family="serif" fill="#333">10</text>
      <text x="28" y="95" text-anchor="middle" font-size="16" font-family="serif" fill="#333">?</text>
      <text x="135" y="80" text-anchor="middle" class="svg-tick">hyp</text>
      <text x="${W/2}" y="18" text-anchor="middle" class="svg-note">Find "?" → tan(35°) = ?/10 → ? = 10·tan(35°)</text>
    </svg></div>`;
  },

  /** Inverse Trig: reverse process */
  inverseTrigDiagram() {
    const W=280, H=170;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <!-- forward: angle → ratio -->
      <rect x="20" y="30" width="60" height="30" rx="6" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="50" y="50" text-anchor="middle" font-size="12" fill="#333">angle</text>
      <line x1="82" y1="45" x2="108" y2="45" stroke="#333" stroke-width="1.5" marker-end="url(#arrInv)"/>
      <defs><marker id="arrInv" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#333"/></marker></defs>
      <rect x="110" y="30" width="50" height="30" rx="6" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="135" y="50" text-anchor="middle" font-size="11" fill="#333">sin/cos</text>
      <line x1="162" y1="45" x2="188" y2="45" stroke="#333" stroke-width="1.5" marker-end="url(#arrInv)"/>
      <rect x="190" y="30" width="60" height="30" rx="6" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="220" y="50" text-anchor="middle" font-size="12" fill="#333">ratio</text>
      <text x="140" y="22" text-anchor="middle" class="svg-tick">Forward</text>
      <!-- inverse: ratio → angle -->
      <rect x="20" y="100" width="60" height="30" rx="6" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="50" y="120" text-anchor="middle" font-size="12" fill="#333">ratio</text>
      <line x1="82" y1="115" x2="108" y2="115" stroke="#333" stroke-width="1.5" marker-end="url(#arrInv)"/>
      <rect x="110" y="100" width="50" height="30" rx="6" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="135" y="120" text-anchor="middle" font-size="10" fill="#333">sin⁻¹/cos⁻¹</text>
      <line x1="162" y1="115" x2="188" y2="115" stroke="#333" stroke-width="1.5" marker-end="url(#arrInv)"/>
      <rect x="190" y="100" width="60" height="30" rx="6" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="220" y="120" text-anchor="middle" font-size="12" fill="#333">angle</text>
      <text x="140" y="92" text-anchor="middle" class="svg-tick">Inverse</text>
      <text x="${W/2}" y="155" text-anchor="middle" class="svg-note">sin⁻¹(0.5) = 30° because sin(30°) = 0.5</text>
    </svg></div>`;
  },

  /** Degrees & Radians arc */
  degreeRadianArc() {
    const W=260, H=200;
    const cx=130,cy=110,r=72;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#ccc" stroke-width="1"/>
      <!-- 1 radian arc -->
      <path d="M${cx+r},${cy} A${r},${r} 0 0,0 ${cx+r*Math.cos(1)},${cy-r*Math.sin(1)}" fill="none" stroke="#333" stroke-width="3"/>
      <line x1="${cx}" y1="${cy}" x2="${cx+r}" y2="${cy}" stroke="#333" stroke-width="1.5"/>
      <line x1="${cx}" y1="${cy}" x2="${cx+r*Math.cos(1)}" y2="${cy-r*Math.sin(1)}" stroke="#333" stroke-width="1.5"/>
      <!-- arc label = r -->
      <text x="${cx+r+8}" y="${cy-r*0.35}" class="svg-label" font-weight="bold">arc = r</text>
      <!-- angle label -->
      <path d="M${cx+20},${cy} A20,20 0 0,0 ${cx+20*Math.cos(1)},${cy-20*Math.sin(1)}" fill="none" stroke="#333" stroke-width="1.2"/>
      <text x="${cx+28}" y="${cy-14}" class="svg-label">1 rad</text>
      <!-- radius labels -->
      <text x="${cx+r/2}" y="${cy+14}" text-anchor="middle" class="svg-label">r</text>
      <!-- conversions -->
      <text x="${W/2}" y="195" text-anchor="middle" class="svg-note">360° = 2π rad  |  180° = π rad  |  1 rad ≈ 57.3°</text>
    </svg></div>`;
  },

  /** Reference Angles */
  referenceAngleDiagram() {
    const W=250, H=220;
    const cx=125,cy=115,r=75;
    const angle=140*Math.PI/180;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <!-- axes -->
      <line x1="30" y1="${cy}" x2="220" y2="${cy}" stroke="#bbb" stroke-width="1"/>
      <line x1="${cx}" y1="20" x2="${cx}" y2="200" stroke="#bbb" stroke-width="1"/>
      <!-- terminal side -->
      <line x1="${cx}" y1="${cy}" x2="${cx+r*Math.cos(angle)}" y2="${cy-r*Math.sin(angle)}" stroke="#333" stroke-width="2"/>
      <!-- reference angle arc (to x-axis) -->
      <path d="M${cx-25},${cy} A25,25 0 0,0 ${cx+25*Math.cos(angle)},${cy-25*Math.sin(angle)}" fill="none" stroke="#555" stroke-width="2"/>
      <text x="${cx-30}" y="${cy-12}" class="svg-label" font-weight="bold">40°</text>
      <!-- full angle arc -->
      <path d="M${cx+18},${cy} A18,18 0 0,1 ${cx+18*Math.cos(angle)},${cy-18*Math.sin(angle)}" fill="none" stroke="#333" stroke-width="1.2"/>
      <text x="${cx+22}" y="${cy-14}" class="svg-tick">140°</text>
      <!-- point on terminal side -->
      <circle cx="${cx+r*Math.cos(angle)}" cy="${cy-r*Math.sin(angle)}" r="3.5" fill="#333"/>
      <text x="${W/2}" y="16" text-anchor="middle" class="svg-note">Reference angle: acute angle to x-axis</text>
      <text x="${W/2}" y="210" text-anchor="middle" class="svg-tick">ref angle of 140° = 180° − 140° = 40°</text>
    </svg></div>`;
  },

  /** Tangent graph */
  tanGraph() {
    const W=300, H=200;
    const ox=150,oy=100,sx=30,sy=20;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <line x1="15" y1="${oy}" x2="285" y2="${oy}" stroke="#bbb" stroke-width="1"/>
      <line x1="${ox}" y1="10" x2="${ox}" y2="190" stroke="#bbb" stroke-width="1"/>
      <!-- asymptotes -->
      <line x1="${ox-Math.PI/2*sx}" y1="10" x2="${ox-Math.PI/2*sx}" y2="190" stroke="#aaa" stroke-width="1" stroke-dasharray="4,4"/>
      <line x1="${ox+Math.PI/2*sx}" y1="10" x2="${ox+Math.PI/2*sx}" y2="190" stroke="#aaa" stroke-width="1" stroke-dasharray="4,4"/>
      <!-- tan curve (approximate with path) -->
      <path d="M${ox-1.4*sx},${oy+3.5*sy} Q${ox-1*sx},${oy+1.5*sy} ${ox-0.7*sx},${oy+0.7*sy} L${ox},${oy} L${ox+0.7*sx},${oy-0.7*sy} Q${ox+1*sx},${oy-1.5*sy} ${ox+1.4*sx},${oy-3.5*sy}" fill="none" stroke="#333" stroke-width="2.5"/>
      <text x="${ox+Math.PI/2*sx+5}" y="20" class="svg-tick">asymptote</text>
      <text x="${W/2}" y="16" text-anchor="middle" class="svg-note">y = tan(x)</text>
      <text x="${W/2}" y="195" text-anchor="middle" class="svg-tick">Period = π, undefined at ±π/2</text>
    </svg></div>`;
  },

  /** Law of Sines: oblique triangle */
  lawSinesTriangle() {
    const W=280, H=190;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <polygon points="60,145 220,145 150,40" fill="none" stroke="#333" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M 73,135 A 15,15 0 0,1 68,123" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="78" y="123" class="svg-label">A</text>
      <path d="M 207,135 A 15,15 0 0,0 213,123" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="195" y="123" class="svg-label">B</text>
      <path d="M 143,52 A 12,12 0 0,1 157,52" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="150" y="65" text-anchor="middle" class="svg-label">C</text>
      <text x="140" y="160" text-anchor="middle" class="svg-label">c</text>
      <text x="98" y="85" text-anchor="middle" class="svg-label">b</text>
      <text x="195" y="85" text-anchor="middle" class="svg-label">a</text>
      <text x="${W/2}" y="185" text-anchor="middle" class="svg-note">a/sin A = b/sin B = c/sin C</text>
    </svg></div>`;
  },

  /** Law of Cosines: oblique triangle */
  lawCosinesTriangle() {
    const W=280, H=190;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <polygon points="50,145 230,145 170,35" fill="none" stroke="#333" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M 63,135 A 15,15 0 0,1 58,122" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="68" y="122" class="svg-label">A</text>
      <text x="105" y="82" text-anchor="middle" class="svg-label" font-weight="bold">b</text>
      <text x="205" y="82" text-anchor="middle" class="svg-label">a</text>
      <text x="140" y="162" text-anchor="middle" class="svg-label">c</text>
      <text x="${W/2}" y="185" text-anchor="middle" class="svg-note">c² = a² + b² − 2ab·cos C</text>
    </svg></div>`;
  },

  /** Ambiguous Case (SSA): two possible triangles */
  ambiguousCaseDiagram() {
    const W=300, H=170;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <text x="${W/2}" y="18" text-anchor="middle" class="svg-note">SSA: Two possible triangles!</text>
      <!-- base + angle -->
      <line x1="40" y1="130" x2="180" y2="130" stroke="#333" stroke-width="2"/>
      <line x1="40" y1="130" x2="130" y2="45" stroke="#333" stroke-width="2"/>
      <!-- two possible third sides (swing arc) -->
      <line x1="130" y1="45" x2="160" y2="130" stroke="#555" stroke-width="2"/>
      <line x1="130" y1="45" x2="100" y2="130" stroke="#555" stroke-width="2" stroke-dasharray="5,3"/>
      <!-- arc showing the "swing" -->
      <path d="M 100,130 A 40,40 0 0,1 160,130" fill="none" stroke="#aaa" stroke-width="1" stroke-dasharray="3,3"/>
      <text x="80" y="145" text-anchor="middle" class="svg-tick">B₁</text>
      <text x="160" y="145" text-anchor="middle" class="svg-tick">B₂</text>
      <text x="40" y="145" class="svg-label">A</text>
      <text x="130" y="38" text-anchor="middle" class="svg-label">C</text>
      <text x="${W/2}" y="162" text-anchor="middle" class="svg-tick">Side "swings" to two positions</text>
    </svg></div>`;
  },

  /** Triangle Area with Trig */
  triangleAreaSinC() {
    const W=280, H=180;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <polygon points="40,140 220,140 150,40" fill="none" stroke="#333" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- height dashed line -->
      <line x1="150" y1="40" x2="150" y2="140" stroke="#555" stroke-width="1.5" stroke-dasharray="5,4"/>
      <rect x="150" y="127" width="10" height="10" fill="none" stroke="#555" stroke-width="1"/>
      <text x="158" y="95" class="svg-label">h</text>
      <!-- labels -->
      <text x="85" y="82" text-anchor="middle" class="svg-label">a</text>
      <text x="130" y="157" text-anchor="middle" class="svg-label">b</text>
      <path d="M 57,130 A 18,18 0 0,1 50,117" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="62" y="118" class="svg-label">C</text>
      <text x="${W/2}" y="178" text-anchor="middle" class="svg-note">Area = ½ · a · b · sin C</text>
    </svg></div>`;
  },

  /** Polar Coordinates grid */
  polarGrid() {
    const W=240, H=230;
    const cx=120,cy=110;
    const circles=[25,50,75];
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      ${circles.map(r=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#ccc" stroke-width="1"/>`).join('')}
      <!-- axes -->
      <line x1="${cx-85}" y1="${cy}" x2="${cx+85}" y2="${cy}" stroke="#bbb" stroke-width="1"/>
      <line x1="${cx}" y1="${cy-85}" x2="${cx}" y2="${cy+85}" stroke="#bbb" stroke-width="1"/>
      <!-- diagonal lines -->
      ${[45,135].map(d=>{const r=85,a=d*Math.PI/180;return `<line x1="${cx-r*Math.cos(a)}" y1="${cy+r*Math.sin(a)}" x2="${cx+r*Math.cos(a)}" y2="${cy-r*Math.sin(a)}" stroke="#ddd" stroke-width="0.8"/>`}).join('')}
      <!-- a sample point -->
      <line x1="${cx}" y1="${cy}" x2="${cx+50*Math.cos(Math.PI/3)}" y2="${cy-50*Math.sin(Math.PI/3)}" stroke="#333" stroke-width="1.5"/>
      <circle cx="${cx+50*Math.cos(Math.PI/3)}" cy="${cy-50*Math.sin(Math.PI/3)}" r="4" fill="#333"/>
      <text x="${cx+50*Math.cos(Math.PI/3)+6}" y="${cy-50*Math.sin(Math.PI/3)-6}" class="svg-label">(r, θ)</text>
      <path d="M${cx+15},${cy} A15,15 0 0,0 ${cx+15*Math.cos(Math.PI/3)},${cy-15*Math.sin(Math.PI/3)}" fill="none" stroke="#333" stroke-width="1.2"/>
      <text x="${cx+20}" y="${cy-8}" class="svg-tick">θ</text>
      <text x="${W/2}" y="210" text-anchor="middle" class="svg-note">Polar: (r, θ) instead of (x, y)</text>
    </svg></div>`;
  },

  /** Vectors: vector with components */
  vectorDiagram() {
    const W=260, H=200;
    const ox=50,oy=160,s=22;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <defs><marker id="arrVec" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><path d="M0,0 L10,3.5 L0,7" fill="#333"/></marker></defs>
      <line x1="${ox}" y1="${oy}" x2="240" y2="${oy}" stroke="#bbb" stroke-width="1"/>
      <line x1="${ox}" y1="20" x2="${ox}" y2="${oy}" stroke="#bbb" stroke-width="1"/>
      <!-- vector -->
      <line x1="${ox}" y1="${oy}" x2="${ox+4*s}" y2="${oy-3*s}" stroke="#333" stroke-width="2.5" marker-end="url(#arrVec)"/>
      <!-- components -->
      <line x1="${ox}" y1="${oy}" x2="${ox+4*s}" y2="${oy}" stroke="#555" stroke-width="1.5" stroke-dasharray="5,4"/>
      <line x1="${ox+4*s}" y1="${oy}" x2="${ox+4*s}" y2="${oy-3*s}" stroke="#555" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="${ox+2*s}" y="${oy+14}" text-anchor="middle" class="svg-label">x-component</text>
      <text x="${ox+4*s+14}" y="${oy-1.5*s}" class="svg-label">y</text>
      <text x="${ox+1.5*s}" y="${oy-2*s}" class="svg-label" font-weight="bold">v⃗</text>
      <path d="M${ox+15},${oy} A15,15 0 0,0 ${ox+15*Math.cos(Math.atan(3/4))},${oy-15*Math.sin(Math.atan(3/4))}" fill="none" stroke="#333" stroke-width="1.2"/>
      <text x="${ox+22}" y="${oy-6}" class="svg-tick">θ</text>
      <text x="${W/2}" y="18" text-anchor="middle" class="svg-note">v⃗ = ⟨vₓ, vᵧ⟩ = |v|⟨cos θ, sin θ⟩</text>
    </svg></div>`;
  },

  /** Dot Product: two vectors with angle */
  dotProductDiagram() {
    const W=260, H=180;
    const ox=60,oy=130;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <defs><marker id="arrDot" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><path d="M0,0 L10,3.5 L0,7" fill="#333"/></marker></defs>
      <line x1="${ox}" y1="${oy}" x2="220" y2="${oy-20}" stroke="#333" stroke-width="2.5" marker-end="url(#arrDot)"/>
      <line x1="${ox}" y1="${oy}" x2="160" y2="30" stroke="#555" stroke-width="2.5" marker-end="url(#arrDot)"/>
      <text x="215" y="${oy-28}" class="svg-label" font-weight="bold">a⃗</text>
      <text x="155" y="24" class="svg-label" font-weight="bold">b⃗</text>
      <path d="M${ox+28},${oy-3} A28,28 0 0,0 ${ox+22},${oy-22}" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="${ox+35}" y="${oy-18}" class="svg-label">θ</text>
      <text x="${W/2}" y="168" text-anchor="middle" class="svg-note">a⃗ · b⃗ = |a||b| cos θ</text>
    </svg></div>`;
  },

  /** Parametric: curve from parametric equations */
  parametricCurve() {
    const W=260, H=200;
    const cx=130,cy=100;
    const pts=[];
    for(let t=0;t<=2*Math.PI;t+=0.15){
      pts.push([cx+60*Math.cos(t), cy-40*Math.sin(2*t)]);
    }
    const d='M'+pts.map(p=>p.join(',')).join(' L');
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <line x1="30" y1="${cy}" x2="230" y2="${cy}" stroke="#bbb" stroke-width="1"/>
      <line x1="${cx}" y1="20" x2="${cx}" y2="180" stroke="#bbb" stroke-width="1"/>
      <path d="${d}" fill="none" stroke="#333" stroke-width="2.5"/>
      <!-- direction arrow at a point -->
      <circle cx="${pts[8][0]}" cy="${pts[8][1]}" r="3" fill="#333"/>
      <text x="${W/2}" y="16" text-anchor="middle" class="svg-note">x(t) = cos t, y(t) = sin 2t</text>
      <text x="${W/2}" y="195" text-anchor="middle" class="svg-tick">Each t value gives a point (x, y)</text>
    </svg></div>`;
  },

  /** Complex Numbers in Trig Form: Argand diagram */
  complexPlane() {
    const W=250, H=220;
    const cx=105,cy=120,s=22;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <line x1="20" y1="${cy}" x2="230" y2="${cy}" stroke="#bbb" stroke-width="1"/>
      <line x1="${cx}" y1="20" x2="${cx}" y2="200" stroke="#bbb" stroke-width="1"/>
      <text x="235" y="${cy+4}" class="svg-tick">Re</text>
      <text x="${cx+4}" y="18" class="svg-tick">Im</text>
      <!-- z = 3 + 2i -->
      <line x1="${cx}" y1="${cy}" x2="${cx+3*s}" y2="${cy-2*s}" stroke="#333" stroke-width="2"/>
      <circle cx="${cx+3*s}" cy="${cy-2*s}" r="4" fill="#333"/>
      <text x="${cx+3*s+6}" y="${cy-2*s-6}" class="svg-label">z = 3 + 2i</text>
      <!-- components -->
      <line x1="${cx}" y1="${cy}" x2="${cx+3*s}" y2="${cy}" stroke="#555" stroke-width="1" stroke-dasharray="4,3"/>
      <line x1="${cx+3*s}" y1="${cy}" x2="${cx+3*s}" y2="${cy-2*s}" stroke="#555" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="${cx+1.5*s}" y="${cy+14}" text-anchor="middle" class="svg-tick">3</text>
      <text x="${cx+3*s+14}" y="${cy-s}" class="svg-tick">2i</text>
      <path d="M${cx+18},${cy} A18,18 0 0,0 ${cx+18*Math.cos(Math.atan(2/3))},${cy-18*Math.sin(Math.atan(2/3))}" fill="none" stroke="#333" stroke-width="1.2"/>
      <text x="${cx+24}" y="${cy-6}" class="svg-tick">θ</text>
      <text x="${W/2}" y="210" text-anchor="middle" class="svg-note">z = r(cos θ + i sin θ) = r·cis θ</text>
    </svg></div>`;
  },

  // ---- CALCULUS ----

  /** Intro to Limits: function approaching a value */
  limitApproach() {
    const W=280, H=200;
    const ox=60,oy=150,sx=30,sy=30;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <line x1="30" y1="${oy}" x2="260" y2="${oy}" stroke="#bbb" stroke-width="1"/>
      <line x1="${ox}" y1="20" x2="${ox}" y2="170" stroke="#bbb" stroke-width="1"/>
      <!-- curve with a hole at x=2 -->
      <path d="M${ox+0.3*sx},${oy-0.5*sy} Q${ox+1*sx},${oy-1.5*sy} ${ox+1.7*sx},${oy-2.5*sy}" fill="none" stroke="#333" stroke-width="2.5"/>
      <path d="M${ox+2.3*sx},${oy-3.5*sy} Q${ox+3*sx},${oy-4*sy} ${ox+5*sx},${oy-4.2*sy}" fill="none" stroke="#333" stroke-width="2.5"/>
      <!-- hole -->
      <circle cx="${ox+2*sx}" cy="${oy-3*sy}" r="4.5" fill="white" stroke="#333" stroke-width="2"/>
      <!-- arrows approaching -->
      <text x="${ox+1.3*sx}" y="${oy-1.2*sy}" class="svg-tick">→</text>
      <text x="${ox+2.8*sx}" y="${oy-3.7*sy}" class="svg-tick">←</text>
      <!-- dashed lines to the limit value -->
      <line x1="${ox+2*sx}" y1="${oy}" x2="${ox+2*sx}" y2="${oy-3*sy}" stroke="#555" stroke-width="1" stroke-dasharray="4,4"/>
      <line x1="${ox}" y1="${oy-3*sy}" x2="${ox+2*sx}" y2="${oy-3*sy}" stroke="#555" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="${ox+2*sx}" y="${oy+14}" text-anchor="middle" class="svg-tick">a</text>
      <text x="${ox-4}" y="${oy-3*sy+4}" text-anchor="end" class="svg-tick">L</text>
      <text x="${W/2}" y="18" text-anchor="middle" class="svg-note">lim f(x) = L as x → a</text>
      <text x="${W/2}" y="195" text-anchor="middle" class="svg-tick">f(a) may not exist, but the limit can!</text>
    </svg></div>`;
  },

  /** Continuity: continuous vs discontinuous */
  continuityTypes() {
    const W=300, H=170;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <!-- continuous -->
      <line x1="20" y1="100" x2="85" y2="100" stroke="#bbb" stroke-width="1"/>
      <line x1="50" y1="25" x2="50" y2="120" stroke="#bbb" stroke-width="1"/>
      <path d="M25,90 Q50,40 80,85" fill="none" stroke="#333" stroke-width="2.5"/>
      <text x="50" y="140" text-anchor="middle" class="svg-label">Continuous</text>
      <!-- jump discontinuity -->
      <line x1="110" y1="100" x2="185" y2="100" stroke="#bbb" stroke-width="1"/>
      <line x1="148" y1="25" x2="148" y2="120" stroke="#bbb" stroke-width="1"/>
      <path d="M115,85 L143,60" fill="none" stroke="#333" stroke-width="2.5"/>
      <circle cx="143" cy="60" r="3.5" fill="white" stroke="#333" stroke-width="1.5"/>
      <circle cx="153" cy="42" r="3.5" fill="#333"/>
      <path d="M158,46 L180,55" fill="none" stroke="#333" stroke-width="2.5"/>
      <text x="148" y="140" text-anchor="middle" class="svg-label">Jump</text>
      <!-- removable (hole) -->
      <line x1="200" y1="100" x2="280" y2="100" stroke="#bbb" stroke-width="1"/>
      <line x1="240" y1="25" x2="240" y2="120" stroke="#bbb" stroke-width="1"/>
      <path d="M205,85 Q240,40 275,85" fill="none" stroke="#333" stroke-width="2.5"/>
      <circle cx="240" cy="52" r="3.5" fill="white" stroke="#333" stroke-width="1.5"/>
      <text x="240" y="140" text-anchor="middle" class="svg-label">Removable</text>
      <text x="${W/2}" y="162" text-anchor="middle" class="svg-tick">A function is continuous if you can draw it without lifting your pen</text>
    </svg></div>`;
  },

  /** Derivative: secant line → tangent line */
  secantTangent() {
    const W=280, H=210;
    const ox=50,oy=170,sx=28,sy=14;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <line x1="30" y1="${oy}" x2="260" y2="${oy}" stroke="#bbb" stroke-width="1"/>
      <line x1="${ox}" y1="15" x2="${ox}" y2="180" stroke="#bbb" stroke-width="1"/>
      <!-- curve y=x² (approx) -->
      <path d="M${ox+0.5*sx},${oy-0.25*sy} Q${ox+3.5*sx},${oy-6*sy} ${ox+6*sx},${oy-10*sy}" fill="none" stroke="#333" stroke-width="2.5"/>
      <!-- secant line (dashed) -->
      <line x1="${ox+1*sx}" y1="${oy-1*sy}" x2="${ox+4*sx}" y2="${oy-7*sy}" stroke="#555" stroke-width="1.5" stroke-dasharray="5,4"/>
      <circle cx="${ox+1*sx}" cy="${oy-1*sy}" r="3" fill="#555"/>
      <circle cx="${ox+4*sx}" cy="${oy-7*sy}" r="3" fill="#555"/>
      <text x="${ox+4.2*sx}" y="${oy-7.5*sy}" class="svg-tick">secant</text>
      <!-- tangent line (solid) -->
      <line x1="${ox+1.5*sx}" y1="${oy-0.5*sy}" x2="${ox+4.5*sx}" y2="${oy-5.5*sy}" stroke="#333" stroke-width="2"/>
      <circle cx="${ox+2.5*sx}" cy="${oy-2.5*sy}" r="4" fill="#333"/>
      <text x="${ox+4.7*sx}" y="${oy-5*sy}" class="svg-label" font-weight="bold">tangent</text>
      <text x="${W/2}" y="16" text-anchor="middle" class="svg-note">As Δx → 0, secant → tangent</text>
      <text x="${W/2}" y="200" text-anchor="middle" class="svg-tick">Derivative = slope of tangent line</text>
    </svg></div>`;
  },

  /** Increasing/Decreasing intervals with extrema */
  incDecGraph() {
    const W=280, H=200;
    const ox=40,oy=160;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <line x1="25" y1="${oy}" x2="260" y2="${oy}" stroke="#bbb" stroke-width="1"/>
      <line x1="${ox}" y1="15" x2="${ox}" y2="170" stroke="#bbb" stroke-width="1"/>
      <!-- cubic-like curve with local max and min -->
      <path d="M${ox+10},${oy-20} Q${ox+50},${oy-120} ${ox+90},${oy-100} Q${ox+120},${oy-85} ${ox+140},${oy-30} Q${ox+170},${oy+10} ${ox+200},${oy-70}" fill="none" stroke="#333" stroke-width="2.5"/>
      <!-- local max dot -->
      <circle cx="${ox+90}" cy="${oy-100}" r="4" fill="#333"/>
      <text x="${ox+90}" y="${oy-108}" text-anchor="middle" class="svg-label">local max</text>
      <!-- local min dot -->
      <circle cx="${ox+148}" cy="${oy-25}" r="4" fill="#333"/>
      <text x="${ox+148}" y="${oy-10}" text-anchor="middle" class="svg-label">local min</text>
      <!-- interval labels -->
      <text x="${ox+50}" y="${oy+14}" text-anchor="middle" class="svg-tick">↗ inc</text>
      <text x="${ox+120}" y="${oy+14}" text-anchor="middle" class="svg-tick">↘ dec</text>
      <text x="${ox+185}" y="${oy+14}" text-anchor="middle" class="svg-tick">↗ inc</text>
      <text x="${W/2}" y="195" text-anchor="middle" class="svg-note">f'(x) > 0: increasing | f'(x) &lt; 0: decreasing</text>
    </svg></div>`;
  },

  /** Mean Value Theorem */
  mvtDiagram() {
    const W=280, H=200;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <line x1="30" y1="160" x2="260" y2="160" stroke="#bbb" stroke-width="1"/>
      <!-- curve -->
      <path d="M60,140 Q100,30 160,90 Q200,130 240,60" fill="none" stroke="#333" stroke-width="2.5"/>
      <!-- secant line a to b -->
      <line x1="60" y1="140" x2="240" y2="60" stroke="#555" stroke-width="1.5" stroke-dasharray="5,4"/>
      <circle cx="60" cy="140" r="3.5" fill="#333"/>
      <circle cx="240" cy="60" r="3.5" fill="#333"/>
      <text x="50" y="155" class="svg-label">a</text>
      <text x="245" y="55" class="svg-label">b</text>
      <!-- parallel tangent at c -->
      <line x1="95" y1="65" x2="195" y2="20" stroke="#333" stroke-width="2"/>
      <circle cx="145" cy="42" r="4" fill="#333"/>
      <text x="155" y="36" class="svg-label">c</text>
      <text x="200" y="18" class="svg-tick">tangent ∥ secant</text>
      <text x="${W/2}" y="190" text-anchor="middle" class="svg-note">f'(c) = [f(b) − f(a)] / (b − a)</text>
    </svg></div>`;
  },

  /** Optimization: open-top box */
  optimizationBox() {
    const W=280, H=180;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <text x="${W/2}" y="18" text-anchor="middle" class="svg-note">Cut corners to maximize volume</text>
      <!-- flat sheet with corner cuts -->
      <rect x="40" y="35" width="120" height="90" fill="none" stroke="#333" stroke-width="1.5"/>
      <!-- corner cuts -->
      <rect x="40" y="35" width="25" height="25" fill="#eee" stroke="#333" stroke-width="1.5" stroke-dasharray="4,3"/>
      <rect x="135" y="35" width="25" height="25" fill="#eee" stroke="#333" stroke-width="1.5" stroke-dasharray="4,3"/>
      <rect x="40" y="100" width="25" height="25" fill="#eee" stroke="#333" stroke-width="1.5" stroke-dasharray="4,3"/>
      <rect x="135" y="100" width="25" height="25" fill="#eee" stroke="#333" stroke-width="1.5" stroke-dasharray="4,3"/>
      <text x="52" y="52" text-anchor="middle" class="svg-tick">x</text>
      <!-- 3D box -->
      <path d="M195,90 L195,55 L250,55 L250,90 L195,90 L210,75 L265,75 L265,110 L250,125 L250,90" fill="none" stroke="#333" stroke-width="2" stroke-linejoin="round"/>
      <line x1="210" y1="75" x2="210" y2="110" stroke="#333" stroke-width="1.5"/>
      <line x1="210" y1="110" x2="265" y2="110" stroke="#333" stroke-width="1.5"/>
      <line x1="210" y1="110" x2="195" y2="125" stroke="#333" stroke-width="1.5" stroke-dasharray="4,3"/>
      <text x="248" y="112" class="svg-tick">x</text>
      <!-- arrow -->
      <text x="170" y="82" font-size="16" fill="#333">→</text>
      <text x="${W/2}" y="160" text-anchor="middle" class="svg-label">V(x) = x(L−2x)(W−2x) → find max</text>
    </svg></div>`;
  },

  /** Improper Integrals: area extending to infinity */
  improperIntegral() {
    const W=280, H=180;
    const ox=50,oy=140,sx=30,sy=30;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <line x1="30" y1="${oy}" x2="260" y2="${oy}" stroke="#bbb" stroke-width="1"/>
      <line x1="${ox}" y1="20" x2="${ox}" y2="155" stroke="#bbb" stroke-width="1"/>
      <!-- 1/x² curve with shaded area from 1 to ∞ -->
      <path d="M${ox+sx},${oy-sy} Q${ox+2*sx},${oy-0.3*sy} ${ox+3*sx},${oy-0.12*sy} L${ox+6*sx},${oy-0.03*sy}" fill="none" stroke="#333" stroke-width="2.5"/>
      <!-- shaded area (approximation) -->
      <path d="M${ox+sx},${oy} L${ox+sx},${oy-sy} Q${ox+2*sx},${oy-0.3*sy} ${ox+3*sx},${oy-0.12*sy} L${ox+6*sx},${oy-0.03*sy} L${ox+6*sx},${oy} Z" fill="#ddd" fill-opacity="0.5" stroke="none"/>
      <text x="${ox+sx}" y="${oy+14}" text-anchor="middle" class="svg-tick">1</text>
      <text x="245" y="${oy+14}" class="svg-tick">→ ∞</text>
      <text x="${W/2}" y="18" text-anchor="middle" class="svg-note">∫₁^∞ 1/x² dx = 1 (converges!)</text>
      <text x="${W/2}" y="172" text-anchor="middle" class="svg-tick">Infinite domain, but finite area</text>
    </svg></div>`;
  },

  /** Sequences: converging dots */
  sequenceConverge() {
    const W=280, H=150;
    const vals=[1, 0.5, 0.75, 0.625, 0.6875, 0.65625];
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <line x1="30" y1="100" x2="260" y2="100" stroke="#bbb" stroke-width="1"/>
      <line x1="40" y1="25" x2="40" y2="115" stroke="#bbb" stroke-width="1"/>
      <!-- limit line -->
      <line x1="40" y1="47" x2="260" y2="47" stroke="#555" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="265" y="50" class="svg-tick">L</text>
      <!-- dots -->
      ${vals.map((v,i)=>{
        const x=55+i*35, y=100-(v*70);
        return `<circle cx="${x}" cy="${y}" r="4" fill="#333"/>
          <text x="${x}" y="115" text-anchor="middle" class="svg-tick">a${i+1}</text>`;
      }).join('')}
      <text x="${W/2}" y="18" text-anchor="middle" class="svg-note">Terms get closer and closer to the limit L</text>
      <text x="${W/2}" y="140" text-anchor="middle" class="svg-tick">Convergent sequence → approaches a fixed value</text>
    </svg></div>`;
  },

  /** Taylor Series: polynomial approximating a curve */
  taylorApprox() {
    const W=280, H=200;
    const ox=50,oy=140,sx=35,sy=35;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <line x1="25" y1="${oy}" x2="260" y2="${oy}" stroke="#bbb" stroke-width="1"/>
      <line x1="${ox}" y1="20" x2="${ox}" y2="170" stroke="#bbb" stroke-width="1"/>
      <!-- e^x curve -->
      <path d="M${ox-0.5*sx},${oy-0.6*sy} Q${ox+1.5*sx},${oy-2.5*sy} ${ox+3*sx},${oy-3.5*sy}" fill="none" stroke="#333" stroke-width="2.5"/>
      <text x="${ox+3.2*sx}" y="${oy-3.5*sy}" class="svg-label">eˣ</text>
      <!-- T1: 1 + x (straight line) -->
      <line x1="${ox-0.5*sx}" y1="${oy-0.5*sy}" x2="${ox+2.5*sx}" y2="${oy-3*sy}" stroke="#aaa" stroke-width="1.5"/>
      <text x="${ox+2.7*sx}" y="${oy-2.8*sy}" class="svg-tick">T₁</text>
      <!-- T2: 1 + x + x²/2 (parabola approx) -->
      <path d="M${ox-0.3*sx},${oy-0.55*sy} Q${ox+1*sx},${oy-1.7*sy} ${ox+2.2*sx},${oy-3.3*sy}" fill="none" stroke="#777" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="${ox+2.4*sx}" y="${oy-3.5*sy+8}" class="svg-tick">T₂</text>
      <!-- center point -->
      <circle cx="${ox}" cy="${oy-sy}" r="3.5" fill="#333"/>
      <text x="${ox-5}" y="${oy-sy-8}" text-anchor="end" class="svg-label">a</text>
      <text x="${W/2}" y="18" text-anchor="middle" class="svg-note">More terms → better approximation near a</text>
      <text x="${W/2}" y="192" text-anchor="middle" class="svg-tick">f(x) ≈ f(a) + f'(a)(x−a) + f''(a)(x−a)²/2! + ...</text>
    </svg></div>`;
  },

  /** Slope Field for differential equations */
  slopeField() {
    const W=240, H=220;
    const ox=120,oy=110,s=25;
    const segs=[];
    for(let xi=-3;xi<=3;xi++){
      for(let yi=-3;yi<=3;yi++){
        const x=ox+xi*s, y=oy-yi*s;
        const slope=xi*0.5;  // dy/dx = x/2 (example)
        const len=8;
        const dx=len/Math.sqrt(1+slope*slope);
        const dy=slope*dx;
        segs.push(`<line x1="${x-dx}" y1="${y+dy}" x2="${x+dx}" y2="${y-dy}" stroke="#333" stroke-width="1.3"/>`);
      }
    }
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <line x1="20" y1="${oy}" x2="220" y2="${oy}" stroke="#bbb" stroke-width="1"/>
      <line x1="${ox}" y1="15" x2="${ox}" y2="205" stroke="#bbb" stroke-width="1"/>
      ${segs.join('')}
      <text x="${W/2}" y="16" text-anchor="middle" class="svg-note">Slope field for dy/dx = x/2</text>
      <text x="${W/2}" y="215" text-anchor="middle" class="svg-tick">Each segment shows the slope at that point</text>
    </svg></div>`;
  },

  /** Solid of Revolution */
  solidRevolution() {
    const W=280, H=190;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <line x1="40" y1="130" x2="260" y2="130" stroke="#bbb" stroke-width="1"/>
      <!-- curve (top half) -->
      <path d="M80,130 Q140,40 230,80" fill="none" stroke="#333" stroke-width="2.5"/>
      <!-- curve (reflected bottom half) -->
      <path d="M80,130 Q140,220 230,180" fill="none" stroke="#555" stroke-width="1.5" stroke-dasharray="5,4"/>
      <!-- ellipses showing rotation -->
      <ellipse cx="80" cy="130" rx="3" ry="0" fill="none" stroke="#333" stroke-width="1.5"/>
      <ellipse cx="140" cy="130" rx="3" ry="52" fill="none" stroke="#aaa" stroke-width="1" stroke-dasharray="3,3"/>
      <ellipse cx="200" cy="130" rx="3" ry="38" fill="none" stroke="#aaa" stroke-width="1" stroke-dasharray="3,3"/>
      <ellipse cx="230" cy="130" rx="3" ry="50" fill="none" stroke="#333" stroke-width="1.5"/>
      <!-- axis label -->
      <text x="250" y="125" class="svg-tick">x-axis</text>
      <text x="${W/2}" y="18" text-anchor="middle" class="svg-note">Rotating a curve around an axis</text>
      <text x="${W/2}" y="182" text-anchor="middle" class="svg-tick">V = π ∫ [f(x)]² dx (disk method)</text>
    </svg></div>`;
  },

  /** Chain Rule: nested functions */
  chainDiagram() {
    const W=290, H=120;
    return `<div class="lesson-svg-visual"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" class="math-svg">
      ${_card(W,H)}
      <defs><marker id="arrCh" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#333"/></marker></defs>
      <rect x="15" y="30" width="50" height="35" rx="6" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="40" y="52" text-anchor="middle" font-size="14" font-family="serif" fill="#333">x</text>
      <line x1="67" y1="48" x2="85" y2="48" stroke="#333" stroke-width="1.5" marker-end="url(#arrCh)"/>
      <rect x="88" y="30" width="60" height="35" rx="6" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="118" y="52" text-anchor="middle" font-size="13" font-family="serif" fill="#333">g(x)</text>
      <line x1="150" y1="48" x2="168" y2="48" stroke="#333" stroke-width="1.5" marker-end="url(#arrCh)"/>
      <rect x="171" y="30" width="60" height="35" rx="6" fill="none" stroke="#333" stroke-width="1.5"/>
      <text x="201" y="52" text-anchor="middle" font-size="13" font-family="serif" fill="#333">f(g(x))</text>
      <line x1="233" y1="48" x2="251" y2="48" stroke="#333" stroke-width="1.5" marker-end="url(#arrCh)"/>
      <text x="268" y="52" text-anchor="middle" font-size="13" font-family="serif" fill="#333">y</text>
      <text x="${W/2}" y="95" text-anchor="middle" class="svg-note">dy/dx = f'(g(x)) · g'(x)</text>
      <text x="${W/2}" y="110" text-anchor="middle" class="svg-tick">Derivative of outer × derivative of inner</text>
    </svg></div>`;
  }
};
