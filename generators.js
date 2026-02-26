// ============================================================
// IBIS ACADEMY — RANDOMIZED PROBLEM GENERATORS
// Each generator returns { question, choices, correctIndex, explanation }
// with fresh random values every time it's called.
// ============================================================

// --- Utilities ---
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function pickRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function roundN(n, d = 2) { return parseFloat(n.toFixed(d)); }

/**
 * Build a multiple-choice problem from a correct answer + 3 wrong ones.
 * Returns { question, choices, correctIndex, explanation }
 */
function buildMC(question, correct, wrongs, explanation) {
    const all = [
        { text: String(correct), right: true },
        ...wrongs.slice(0, 3).map(w => ({ text: String(w), right: false }))
    ];
    const shuffled = shuffle(all);
    return {
        question,
        choices: shuffled.map(c => c.text),
        correctIndex: shuffled.findIndex(c => c.right),
        explanation
    };
}

/** Generate 3 plausible wrong answers near the correct value */
function numDistractors(correct, spread = 3) {
    const set = new Set();
    const candidates = [
        correct + 1, correct - 1, correct + 2, correct - 2,
        correct + spread, correct - spread,
        correct * 2, Math.abs(correct - spread * 2),
        -correct, correct + spread + 1
    ].map(Math.round).filter(v => v !== correct);
    for (const c of shuffle(candidates)) {
        set.add(c);
        if (set.size >= 3) break;
    }
    while (set.size < 3) set.add(correct + set.size + 2);
    return [...set].slice(0, 3);
}

function decDistractors(correct, step = 0.5) {
    const set = new Set();
    [correct + step, correct - step, correct + step * 2, correct - step * 2,
     correct + step * 3, correct * 2, correct + 1, correct - 1]
        .map(v => roundN(v))
        .filter(v => v !== correct)
        .forEach(v => set.add(v));
    while (set.size < 3) set.add(roundN(correct + (set.size + 1) * step));
    return [...set].slice(0, 3);
}

// =============================================================
// ALGEBRA GENERATORS
// =============================================================

const generators = {

// -- Algebra 1: Intro --
'eval-expression': () => {
    const a = randInt(2, 9), b = randInt(1, 12), x = randInt(1, 10);
    const ans = a * x + b;
    return buildMC(
        `Evaluate <strong>${a}x + ${b}</strong> when x = ${x}.`,
        ans, numDistractors(ans),
        `${a}(${x}) + ${b} = ${a * x} + ${b} = <strong>${ans}</strong>`
    );
},
'identify-parts': () => {
    const a = randInt(2, 12), b = randInt(1, 15);
    const part = pickRandom(['coefficient', 'constant']);
    const ans = part === 'coefficient' ? a : b;
    const q = part === 'coefficient'
        ? `In the expression <strong>${a}x + ${b}</strong>, what is the coefficient of x?`
        : `In the expression <strong>${a}x + ${b}</strong>, what is the constant term?`;
    return buildMC(q, ans, numDistractors(ans),
        part === 'coefficient'
            ? `The coefficient is the number multiplied by x: <strong>${a}</strong>.`
            : `The constant term is the number without a variable: <strong>${b}</strong>.`
    );
},

// -- Algebra 2: Linear Equations --
'solve-linear': () => {
    const a = randInt(2, 9), x = randInt(1, 12), b = randInt(1, 15);
    const c = a * x + b;
    return buildMC(
        `Solve for x: <strong>${a}x + ${b} = ${c}</strong>`,
        x, numDistractors(x),
        `${a}x = ${c} − ${b} = ${c - b}<br>x = ${c - b} ÷ ${a} = <strong>${x}</strong>`
    );
},
'solve-linear-subtract': () => {
    const a = randInt(2, 7), x = randInt(1, 10), b = randInt(1, 12);
    const c = a * x - b;
    return buildMC(
        `Solve for x: <strong>${a}x − ${b} = ${c}</strong>`,
        x, numDistractors(x),
        `${a}x = ${c} + ${b} = ${c + b}<br>x = ${c + b} ÷ ${a} = <strong>${x}</strong>`
    );
},

// -- Algebra 3: Inequalities --
'solve-inequality': () => {
    const a = randInt(2, 6), x = randInt(1, 8), b = randInt(1, 10);
    const c = a * x + b;
    const sym = pickRandom(['>', '<', '≥', '≤']);
    return buildMC(
        `Solve: <strong>${a}x + ${b} ${sym} ${c}</strong>`,
        `x ${sym} ${x}`,
        [`x ${sym} ${x + 1}`, `x ${sym} ${x - 1}`, `x ${sym} ${c}`],
        `${a}x ${sym} ${c} − ${b} = ${c - b}<br>x ${sym} ${c - b} ÷ ${a} = <strong>${x}</strong>`
    );
},
'inequality-flip': () => {
    const a = randInt(2, 5), x = randInt(1, 8);
    const c = -a * x;
    const ans = `x ≤ ${x}`;
    return buildMC(
        `Solve: <strong>−${a}x ≥ ${c}</strong>`,
        ans,
        [`x ≥ ${x}`, `x ≤ ${-x}`, `x ≥ ${-x}`],
        `Divide by −${a} and <strong>flip</strong> the sign:<br>x ≤ ${c} ÷ (−${a}) = <strong>${x}</strong>`
    );
},

// -- Algebra 4: Graphing Lines --
'find-slope': () => {
    const x1 = randInt(0, 5), y1 = randInt(0, 8);
    const run = randInt(1, 5), rise = randInt(1, 8);
    const x2 = x1 + run, y2 = y1 + rise;
    const m = roundN(rise / run);
    const mStr = Number.isInteger(m) ? String(m) : String(m);
    return buildMC(
        `Find the slope between <strong>(${x1}, ${y1})</strong> and <strong>(${x2}, ${y2})</strong>.`,
        mStr, decDistractors(m, 1).map(String),
        `m = (${y2} − ${y1}) / (${x2} − ${x1}) = ${rise} / ${run} = <strong>${mStr}</strong>`
    );
},
'identify-slope-intercept': () => {
    const m = randInt(-5, 5), b = randInt(-10, 10);
    const part = pickRandom(['slope', 'y-intercept']);
    const ans = part === 'slope' ? m : b;
    const bSign = b >= 0 ? `+ ${b}` : `− ${Math.abs(b)}`;
    return buildMC(
        `In <strong>y = ${m}x ${bSign}</strong>, what is the ${part}?`,
        ans, numDistractors(ans),
        part === 'slope'
            ? `In y = mx + b, the slope m = <strong>${m}</strong>.`
            : `In y = mx + b, the y-intercept b = <strong>${b}</strong>.`
    );
},

// -- Algebra 5: Systems of Equations --
'solve-system': () => {
    const x = randInt(1, 8), y = randInt(1, 8);
    const s = x + y, d = x - y;
    const askFor = pickRandom(['x', 'y']);
    const ans = askFor === 'x' ? x : y;
    return buildMC(
        `Solve: <strong>x + y = ${s}</strong> and <strong>x − y = ${d}</strong>. What is ${askFor}?`,
        ans, numDistractors(ans),
        `Add both equations: 2x = ${s + d} → x = ${x}.<br>Then y = ${s} − ${x} = ${y}.<br><strong>${askFor} = ${ans}</strong>`
    );
},

// -- Algebra 6: Quadratic Equations --
'find-discriminant': () => {
    const a = 1, b = randInt(-8, 8), c = randInt(-10, 10);
    const disc = b * b - 4 * a * c;
    const bStr = b >= 0 ? `+ ${b}` : `− ${Math.abs(b)}`;
    const cStr = c >= 0 ? `+ ${c}` : `− ${Math.abs(c)}`;
    return buildMC(
        `Find the discriminant of <strong>x² ${bStr}x ${cStr} = 0</strong>.`,
        disc, numDistractors(disc, 5),
        `b² − 4ac = (${b})² − 4(1)(${c}) = ${b * b} − ${4 * c} = <strong>${disc}</strong>`
    );
},
'solve-quadratic-simple': () => {
    const n = randInt(2, 12);
    const nSq = n * n;
    return buildMC(
        `Solve: <strong>x² = ${nSq}</strong>. What is the positive root?`,
        n, numDistractors(n),
        `x = ±√${nSq} = ±${n}. Positive root: <strong>${n}</strong>`
    );
},

// -- Algebra 7: Factoring --
'factor-trinomial': () => {
    const p = randInt(1, 7), q = randInt(1, 7);
    const b = p + q, c = p * q;
    const ans = `(x + ${p})(x + ${q})`;
    const w1 = `(x + ${p + 1})(x + ${q - 1})`;
    const w2 = `(x + 1)(x + ${c})`;
    const w3 = `(x − ${p})(x − ${q})`;
    return buildMC(
        `Factor: <strong>x² + ${b}x + ${c}</strong>`,
        ans, [w1, w2, w3],
        `Find two numbers that multiply to ${c} and add to ${b}: ${p} and ${q}.<br><strong>${ans}</strong>`
    );
},
'factor-diff-squares': () => {
    const n = randInt(2, 12);
    const nSq = n * n;
    const ans = `(x + ${n})(x − ${n})`;
    return buildMC(
        `Factor: <strong>x² − ${nSq}</strong>`,
        ans,
        [`(x − ${n})(x − ${n})`, `(x + ${n})(x + ${n})`, `(x + ${nSq})(x − 1)`],
        `Difference of squares: a² − b² = (a + b)(a − b)<br>x² − ${n}² = <strong>${ans}</strong>`
    );
},

// -- Algebra 8: Exponents --
'exponent-product': () => {
    const base = randInt(2, 6), e1 = randInt(2, 5), e2 = randInt(1, 4);
    const ans = e1 + e2;
    return buildMC(
        `Simplify: <strong>${base}<sup>${e1}</sup> × ${base}<sup>${e2}</sup></strong>. What is the exponent?`,
        ans, numDistractors(ans),
        `Product rule: add exponents → ${base}<sup>${e1}+${e2}</sup> = ${base}<sup><strong>${ans}</strong></sup>`
    );
},
'exponent-evaluate': () => {
    const base = randInt(2, 10), exp = randInt(2, 5);
    const ans = Math.pow(base, exp);
    if (ans > 10000) return generators['exponent-evaluate']();
    return buildMC(
        `Evaluate: <strong>${base}<sup>${exp}</sup></strong>`,
        ans, numDistractors(ans, Math.max(10, Math.floor(ans * 0.15))),
        `${base}<sup>${exp}</sup> = ${Array(exp).fill(base).join(' × ')} = <strong>${ans}</strong>`
    );
},

// -- Algebra 9: Functions --
'evaluate-function': () => {
    const a = randInt(2, 5), b = randInt(-8, 10), x = randInt(1, 7);
    const ans = a * x + b;
    const bStr = b >= 0 ? `+ ${b}` : `− ${Math.abs(b)}`;
    return buildMC(
        `If f(x) = ${a}x ${bStr}, find <strong>f(${x})</strong>.`,
        ans, numDistractors(ans),
        `f(${x}) = ${a}(${x}) ${bStr} = ${a * x} ${bStr} = <strong>${ans}</strong>`
    );
},
'evaluate-function-squared': () => {
    const a = randInt(1, 3), b = randInt(1, 8), x = randInt(2, 6);
    const ans = a * x * x + b;
    return buildMC(
        `If g(x) = ${a}x² + ${b}, find <strong>g(${x})</strong>.`,
        ans, numDistractors(ans, 8),
        `g(${x}) = ${a}(${x})² + ${b} = ${a}(${x * x}) + ${b} = ${a * x * x} + ${b} = <strong>${ans}</strong>`
    );
},

// -- Algebra 10: Rational Expressions --
'simplify-rational': () => {
    const n = randInt(2, 8);
    const nSq = n * n;
    return buildMC(
        `Simplify: <strong>(x² − ${nSq}) / (x − ${n})</strong>`,
        `x + ${n}`,
        [`x − ${n}`, `x² − ${n}`, `${n}x`],
        `Factor numerator: (x + ${n})(x − ${n}) / (x − ${n})<br>Cancel to get <strong>x + ${n}</strong>`
    );
},
'find-excluded-value': () => {
    const n = randInt(1, 10);
    const sign = pickRandom(['+', '−']);
    const val = sign === '+' ? -n : n;
    const expr = `x ${sign} ${n}`;
    return buildMC(
        `For <strong>1 / (${expr})</strong>, what value of x is excluded?`,
        `x = ${val}`,
        [`x = ${-val}`, `x = 0`, `x = ${n + 1}`],
        `Set denominator = 0: ${expr} = 0 → x = <strong>${val}</strong>. This value is excluded.`
    );
},

// =============================================================
// GEOMETRY GENERATORS
// =============================================================

// -- Geometry 1: Intro --
'geo-basic-definitions': () => {
    const items = [
        { q: 'Which has exactly <strong>two endpoints</strong>?', a: 'Line segment', w: ['Line', 'Ray', 'Point'], e: 'A <strong>line segment</strong> has two endpoints.' },
        { q: 'Which extends infinitely in <strong>one direction</strong>?', a: 'Ray', w: ['Line segment', 'Line', 'Point'], e: 'A <strong>ray</strong> has one endpoint and extends infinitely in one direction.' },
        { q: 'How many points define a unique <strong>plane</strong>?', a: '3 non-collinear points', w: ['1 point', '2 points', '4 points'], e: '<strong>3 non-collinear points</strong> define a unique plane.' },
        { q: 'Which extends infinitely in <strong>both directions</strong>?', a: 'Line', w: ['Line segment', 'Ray', 'Point'], e: 'A <strong>line</strong> extends infinitely in both directions.' },
        { q: 'A location with <strong>no size</strong> — only position — is a:', a: 'Point', w: ['Line', 'Ray', 'Plane'], e: 'A <strong>point</strong> has position but no size.' },
        { q: 'How many points are needed to define a unique <strong>line</strong>?', a: '2 points', w: ['1 point', '3 points', '4 points'], e: '<strong>2 points</strong> define a unique line.' },
        { q: 'Two lines that never meet and are not in the same plane are:', a: 'Skew lines', w: ['Parallel lines', 'Perpendicular lines', 'Intersecting lines'], e: '<strong>Skew lines</strong> are non-coplanar and never intersect.' },
        { q: 'Points that lie on the same line are called:', a: 'Collinear', w: ['Coplanar', 'Congruent', 'Parallel'], e: 'Points on the same line are <strong>collinear</strong>.' },
    ];
    const item = pickRandom(items);
    const s = shuffle([item.a, ...item.w]);
    return { question: item.q, choices: s, correctIndex: s.indexOf(item.a), explanation: item.e };
},

// -- Geometry 2: Angles --
'supplementary-angle': () => {
    const a = randInt(20, 150);
    const ans = 180 - a;
    return buildMC(
        `Two angles are supplementary. One is <strong>${a}°</strong>. What is the other?`,
        `${ans}°`, [`${ans + 10}°`, `${ans - 10}°`, `${180 + a}°`],
        `Supplementary angles add to 180°: 180 − ${a} = <strong>${ans}°</strong>`
    );
},
'complementary-angle': () => {
    const a = randInt(10, 80);
    const ans = 90 - a;
    return buildMC(
        `Two angles are complementary. One is <strong>${a}°</strong>. What is the other?`,
        `${ans}°`, [`${ans + 5}°`, `${ans - 5}°`, `${180 - a}°`],
        `Complementary angles add to 90°: 90 − ${a} = <strong>${ans}°</strong>`
    );
},

// -- Geometry 3: Triangles --
'triangle-missing-angle': () => {
    const a = randInt(25, 80), b = randInt(25, 90);
    const c = 180 - a - b;
    if (c <= 0) return generators['triangle-missing-angle']();
    return buildMC(
        `A triangle has angles <strong>${a}°</strong> and <strong>${b}°</strong>. What is the third?`,
        `${c}°`, [`${c + 10}°`, `${c - 10}°`, `${180 - a}°`],
        `180° − ${a}° − ${b}° = <strong>${c}°</strong>`
    );
},

// -- Geometry 4: Quadrilaterals --
'quad-missing-angle': () => {
    const a = randInt(60, 120), b = randInt(60, 120), c = randInt(50, 110);
    const d = 360 - a - b - c;
    if (d <= 0 || d >= 180) return generators['quad-missing-angle']();
    return buildMC(
        `A quadrilateral has angles ${a}°, ${b}°, and ${c}°. Find the fourth angle.`,
        `${d}°`, [`${d + 10}°`, `${d - 10}°`, `${360 - a}°`],
        `360° − ${a}° − ${b}° − ${c}° = <strong>${d}°</strong>`
    );
},

// -- Geometry 5: Circles --
'circle-area': () => {
    const r = randInt(2, 10);
    const ans = roundN(Math.PI * r * r);
    return buildMC(
        `Find the area of a circle with radius <strong>${r}</strong>. (Round to 2 decimals)`,
        String(ans), decDistractors(ans, 5).map(String),
        `A = πr² = π(${r})² = ${r * r}π ≈ <strong>${ans}</strong>`
    );
},
'circle-circumference': () => {
    const r = randInt(2, 10);
    const ans = roundN(2 * Math.PI * r);
    return buildMC(
        `Find the circumference of a circle with radius <strong>${r}</strong>. (Round to 2 decimals)`,
        String(ans), decDistractors(ans, 3).map(String),
        `C = 2πr = 2π(${r}) ≈ <strong>${ans}</strong>`
    );
},

// -- Geometry 6: Perimeter & Area --
'rectangle-area': () => {
    const l = randInt(3, 15), w = randInt(3, 15);
    const ans = l * w;
    return buildMC(
        `Find the area of a rectangle: <strong>length = ${l}, width = ${w}</strong>.`,
        ans, numDistractors(ans, 10),
        `Area = l × w = ${l} × ${w} = <strong>${ans}</strong>`
    );
},
'triangle-area': () => {
    const b = randInt(4, 16), h = randInt(3, 14);
    const ans = (b * h) / 2;
    const ansStr = Number.isInteger(ans) ? String(ans) : String(ans);
    return buildMC(
        `Find the area of a triangle: <strong>base = ${b}, height = ${h}</strong>.`,
        ansStr, numDistractors(ans).map(String),
        `A = ½ × b × h = ½ × ${b} × ${h} = <strong>${ans}</strong>`
    );
},

// -- Geometry 7: Pythagorean Theorem --
'find-hypotenuse': () => {
    const triples = [[3,4,5],[5,12,13],[6,8,10],[8,15,17],[9,12,15],[7,24,25],[9,40,41],[11,60,61],[20,21,29],[12,35,37]];
    const [a, b, c] = pickRandom(triples);
    const k = pickRandom([1, 2, 3]);
    const A = a*k, B = b*k, C = c*k;
    return buildMC(
        `A right triangle has legs <strong>${A}</strong> and <strong>${B}</strong>. Find the hypotenuse.`,
        C, numDistractors(C, 3),
        `c² = ${A}² + ${B}² = ${A*A} + ${B*B} = ${C*C}<br>c = √${C*C} = <strong>${C}</strong>`
    );
},
'find-leg': () => {
    const triples = [[3,4,5],[5,12,13],[6,8,10],[8,15,17],[9,12,15],[7,24,25],[9,40,41],[20,21,29]];
    const [a, b, c] = pickRandom(triples);
    const k = pickRandom([1, 2]);
    const A = a*k, B = b*k, C = c*k;
    const whichLeg = pickRandom(['a','b']);
    const known = whichLeg === 'a' ? A : B;
    const unknown = whichLeg === 'a' ? B : A;
    return buildMC(
        `A right triangle has hypotenuse <strong>${C}</strong> and one leg <strong>${known}</strong>. Find the other leg.`,
        unknown, numDistractors(unknown, 3),
        `b² = ${C}² − ${known}² = ${C*C} − ${known*known} = ${unknown*unknown}<br>b = √${unknown*unknown} = <strong>${unknown}</strong>`
    );
},

// -- Geometry 8: Similarity --
'scale-factor': () => {
    const k = randInt(2, 5), side = randInt(3, 12);
    const ans = side * k;
    return buildMC(
        `Two similar triangles have scale factor <strong>${k}:1</strong>. If the smaller has side ${side}, find the larger side.`,
        ans, numDistractors(ans),
        `${side} × ${k} = <strong>${ans}</strong>`
    );
},

// -- Geometry 9: Volume & Surface Area --
'cube-volume': () => {
    const s = randInt(2, 12);
    const ans = s * s * s;
    return buildMC(
        `Find the volume of a cube with side <strong>${s}</strong>.`,
        ans, numDistractors(ans, 15),
        `V = s³ = ${s}³ = <strong>${ans}</strong>`
    );
},
'cube-surface-area': () => {
    const s = randInt(2, 12);
    const ans = 6 * s * s;
    return buildMC(
        `Find the surface area of a cube with side <strong>${s}</strong>.`,
        ans, numDistractors(ans, 10),
        `SA = 6s² = 6 × ${s}² = 6 × ${s * s} = <strong>${ans}</strong>`
    );
},

// -- Geometry 10: Transformations --
'translate-point': () => {
    const x = randInt(-5, 8), y = randInt(-5, 8);
    const dx = randInt(1, 6), dy = randInt(1, 6);
    const dir = pickRandom([
        { label: `${dx} right and ${dy} up`, nx: x + dx, ny: y + dy },
        { label: `${dx} left and ${dy} down`, nx: x - dx, ny: y - dy },
        { label: `${dx} right and ${dy} down`, nx: x + dx, ny: y - dy },
    ]);
    const ans = `(${dir.nx}, ${dir.ny})`;
    return buildMC(
        `Translate <strong>(${x}, ${y})</strong> by <strong>${dir.label}</strong>.`,
        ans,
        [`(${dir.nx + 1}, ${dir.ny})`, `(${x}, ${dir.ny})`, `(${dir.nx}, ${y})`],
        `Apply the translation to each coordinate → <strong>${ans}</strong>`
    );
},
'identify-transformation': () => {
    const items = [
        { q: 'Which transformation changes the <strong>size</strong> of a figure?', a: 'Dilation', w: ['Translation', 'Reflection', 'Rotation'] },
        { q: 'Which transformation <strong>flips</strong> a figure over a line?', a: 'Reflection', w: ['Translation', 'Dilation', 'Rotation'] },
        { q: 'Which transformation <strong>slides</strong> every point the same distance?', a: 'Translation', w: ['Reflection', 'Dilation', 'Rotation'] },
        { q: 'Which transformation <strong>turns</strong> a figure around a fixed point?', a: 'Rotation', w: ['Translation', 'Reflection', 'Dilation'] },
        { q: 'Which transformation preserves size AND shape but moves the figure?', a: 'Translation', w: ['Dilation', 'Reflection only', 'None of these'] },
        { q: 'Which is NOT a rigid transformation (does not preserve size)?', a: 'Dilation', w: ['Translation', 'Reflection', 'Rotation'] },
    ];
    const item = pickRandom(items);
    const s = shuffle([item.a, ...item.w]);
    return { question: item.q, choices: s, correctIndex: s.indexOf(item.a), explanation: `The answer is <strong>${item.a}</strong>.` };
},

// =============================================================
// TRIGONOMETRY GENERATORS
// =============================================================

// -- Trig 1: Intro (SOHCAHTOA) --
'trig-ratio-from-sides': () => {
    const opp = randInt(3, 12), adj = randInt(3, 12);
    const hyp = roundN(Math.sqrt(opp * opp + adj * adj));
    const func = pickRandom(['sin', 'cos', 'tan']);
    let ans, num, den;
    if (func === 'sin') { num = opp; den = hyp; }
    else if (func === 'cos') { num = adj; den = hyp; }
    else { num = opp; den = adj; }
    const ansStr = `${num}/${den}`;
    const wMap = { sin: [`${adj}/${hyp}`, `${opp}/${adj}`, `${hyp}/${opp}`],
                   cos: [`${opp}/${hyp}`, `${adj}/${opp}`, `${hyp}/${adj}`],
                   tan: [`${adj}/${opp}`, `${opp}/${hyp}`, `${hyp}/${opp}`] };
    return buildMC(
        `Opposite = ${opp}, Adjacent = ${adj}, Hypotenuse ≈ ${hyp}. Find <strong>${func}(θ)</strong>.`,
        ansStr, wMap[func],
        `${func}(θ) = ${func === 'sin' ? 'O/H' : func === 'cos' ? 'A/H' : 'O/A'} = <strong>${ansStr}</strong>`
    );
},

// -- Trig 2: Right Triangle Trig --
'trig-find-side': () => {
    const angle = pickRandom([30, 45, 60]);
    const hyp = randInt(6, 20);
    const sinV = { 30: 0.5, 45: 0.707, 60: 0.866 };
    const cosV = { 30: 0.866, 45: 0.707, 60: 0.5 };
    const useFunc = pickRandom(['sin', 'cos']);
    const ratio = useFunc === 'sin' ? sinV[angle] : cosV[angle];
    const ans = roundN(hyp * ratio, 1);
    const side = useFunc === 'sin' ? 'opposite' : 'adjacent';
    return buildMC(
        `θ = ${angle}°, hypotenuse = ${hyp}. Find the <strong>${side}</strong> side. (Round to 1 decimal)`,
        String(ans), decDistractors(ans, 1.5).map(v => String(roundN(v, 1))),
        `${side} = hyp × ${useFunc}(${angle}°) = ${hyp} × ${ratio} ≈ <strong>${ans}</strong>`
    );
},

// -- Trig 3: Special Triangles --
'special-45-45-90': () => {
    const leg = randInt(2, 10);
    const hyp = roundN(leg * Math.SQRT2, 2);
    return buildMC(
        `In a 45-45-90 triangle, each leg is <strong>${leg}</strong>. What is the hypotenuse?`,
        String(hyp), decDistractors(hyp, 1).map(String),
        `Hypotenuse = leg × √2 = ${leg} × 1.414… ≈ <strong>${hyp}</strong>`
    );
},
'special-30-60-90': () => {
    const shortLeg = randInt(2, 10);
    const what = pickRandom(['hypotenuse', 'long leg']);
    let ans;
    if (what === 'hypotenuse') {
        ans = shortLeg * 2;
        return buildMC(
            `In a 30-60-90 triangle, the short leg is <strong>${shortLeg}</strong>. Find the hypotenuse.`,
            ans, numDistractors(ans),
            `Hypotenuse = 2 × short leg = 2 × ${shortLeg} = <strong>${ans}</strong>`
        );
    } else {
        ans = roundN(shortLeg * Math.sqrt(3), 2);
        return buildMC(
            `In a 30-60-90 triangle, the short leg is <strong>${shortLeg}</strong>. Find the long leg.`,
            String(ans), decDistractors(ans, 1.5).map(String),
            `Long leg = short leg × √3 = ${shortLeg} × 1.732… ≈ <strong>${ans}</strong>`
        );
    }
},

// -- Trig 4: Unit Circle --
'unit-circle-coords': () => {
    const angles = [
        { deg: 0, cos: '1', sin: '0' },
        { deg: 90, cos: '0', sin: '1' },
        { deg: 180, cos: '−1', sin: '0' },
        { deg: 270, cos: '0', sin: '−1' },
        { deg: 30, cos: '√3/2', sin: '1/2' },
        { deg: 60, cos: '1/2', sin: '√3/2' },
        { deg: 45, cos: '√2/2', sin: '√2/2' },
    ];
    const a = pickRandom(angles);
    const func = pickRandom(['cos', 'sin']);
    const correct = func === 'cos' ? a.cos : a.sin;
    const allVals = ['0', '1', '−1', '1/2', '√2/2', '√3/2'];
    const wrongs = shuffle(allVals.filter(v => v !== correct)).slice(0, 3);
    return buildMC(
        `What is <strong>${func}(${a.deg}°)</strong> on the unit circle?`,
        correct, wrongs,
        `At ${a.deg}° on the unit circle: cos = ${a.cos}, sin = ${a.sin}.<br><strong>${func}(${a.deg}°) = ${correct}</strong>`
    );
},

// -- Trig 5: Radians --
'deg-to-rad': () => {
    const pairs = [
        { deg: 30, rad: 'π/6' }, { deg: 45, rad: 'π/4' }, { deg: 60, rad: 'π/3' },
        { deg: 90, rad: 'π/2' }, { deg: 120, rad: '2π/3' }, { deg: 180, rad: 'π' },
        { deg: 270, rad: '3π/2' }, { deg: 360, rad: '2π' }
    ];
    const p = pickRandom(pairs);
    const allRads = pairs.map(x => x.rad);
    const wrongs = shuffle(allRads.filter(r => r !== p.rad)).slice(0, 3);
    return buildMC(
        `Convert <strong>${p.deg}°</strong> to radians.`,
        p.rad, wrongs,
        `${p.deg}° × (π/180) = <strong>${p.rad}</strong>`
    );
},
'rad-to-deg': () => {
    const pairs = [
        { deg: 30, rad: 'π/6' }, { deg: 45, rad: 'π/4' }, { deg: 60, rad: 'π/3' },
        { deg: 90, rad: 'π/2' }, { deg: 120, rad: '2π/3' }, { deg: 135, rad: '3π/4' },
        { deg: 150, rad: '5π/6' }, { deg: 180, rad: 'π' }, { deg: 210, rad: '7π/6' },
        { deg: 240, rad: '4π/3' }, { deg: 270, rad: '3π/2' }, { deg: 300, rad: '5π/3' },
        { deg: 315, rad: '7π/4' }, { deg: 330, rad: '11π/6' }, { deg: 360, rad: '2π' }
    ];
    const p = pickRandom(pairs);
    const wrongs = shuffle(pairs.map(x => `${x.deg}°`).filter(d => d !== `${p.deg}°`)).slice(0, 3);
    return buildMC(
        `Convert <strong>${p.rad}</strong> radians to degrees.`,
        `${p.deg}°`, wrongs,
        `${p.rad} × (180/π) = <strong>${p.deg}°</strong>`
    );
},

// -- Trig 6: Graphing Trig Functions --
'trig-amplitude': () => {
    const a = randInt(1, 8);
    const func = pickRandom(['sin', 'cos']);
    return buildMC(
        `What is the amplitude of <strong>y = ${a}${func}(x)</strong>?`,
        a, numDistractors(a),
        `The amplitude is the coefficient in front of ${func}: <strong>${a}</strong>.`
    );
},
'trig-period': () => {
    const b = pickRandom([1, 2, 3, 4]);
    const func = pickRandom(['sin', 'cos']);
    const period = b === 1 ? '2π' : `2π/${b}`;
    const periodsAll = ['2π', 'π', '2π/3', 'π/2', '4π', '2π/2'];
    const wrongs = shuffle(periodsAll.filter(p => p !== period)).slice(0, 3);
    const bStr = b === 1 ? '' : String(b);
    return buildMC(
        `What is the period of <strong>y = ${func}(${bStr}x)</strong>?`,
        period, wrongs,
        `Period = 2π / |B| = 2π / ${b} = <strong>${period}</strong>`
    );
},

// -- Trig 7: Identities --
'pythagorean-identity': () => {
    const variant = pickRandom(['cos2', 'sin2', 'which']);
    if (variant === 'cos2') {
        const sinVal = pickRandom([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
        const cos2 = roundN(1 - sinVal * sinVal);
        return buildMC(
            `If sin(θ) = ${sinVal}, what is <strong>cos²(θ)</strong>?`,
            String(cos2), decDistractors(cos2, 0.1).map(String),
            `sin²θ + cos²θ = 1<br>cos²θ = 1 − (${sinVal})² = 1 − ${roundN(sinVal * sinVal)} = <strong>${cos2}</strong>`
        );
    } else if (variant === 'sin2') {
        const cosVal = pickRandom([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
        const sin2 = roundN(1 - cosVal * cosVal);
        return buildMC(
            `If cos(θ) = ${cosVal}, what is <strong>sin²(θ)</strong>?`,
            String(sin2), decDistractors(sin2, 0.1).map(String),
            `sin²θ + cos²θ = 1<br>sin²θ = 1 − (${cosVal})² = 1 − ${roundN(cosVal * cosVal)} = <strong>${sin2}</strong>`
        );
    } else {
        const identities = [
            { q: 'sin²θ + cos²θ = ?', a: '1', w: ['0', 'sin θ', 'cos θ'] },
            { q: '1 + tan²θ = ?', a: 'sec²θ', w: ['csc²θ', '1', 'cos²θ'] },
            { q: '1 + cot²θ = ?', a: 'csc²θ', w: ['sec²θ', '1', 'sin²θ'] },
        ];
        const item = pickRandom(identities);
        return buildMC(`Complete: <strong>${item.q}</strong>`, item.a, item.w, `<strong>${item.q.replace('?', item.a)}</strong>`);
    }
},

// -- Trig 8: Inverse Trig --
'inverse-trig-eval': () => {
    const items = [
        { func: 'arcsin', val: '0.5', ans: '30°', w: ['45°', '60°', '90°'] },
        { func: 'arcsin', val: '1', ans: '90°', w: ['0°', '45°', '180°'] },
        { func: 'arcsin', val: '0', ans: '0°', w: ['45°', '90°', '180°'] },
        { func: 'arcsin', val: '√2/2', ans: '45°', w: ['30°', '60°', '90°'] },
        { func: 'arcsin', val: '√3/2', ans: '60°', w: ['30°', '45°', '90°'] },
        { func: 'arccos', val: '0.5', ans: '60°', w: ['30°', '45°', '90°'] },
        { func: 'arccos', val: '0', ans: '90°', w: ['0°', '45°', '180°'] },
        { func: 'arccos', val: '1', ans: '0°', w: ['45°', '90°', '180°'] },
        { func: 'arccos', val: '√2/2', ans: '45°', w: ['30°', '60°', '90°'] },
        { func: 'arccos', val: '√3/2', ans: '30°', w: ['45°', '60°', '90°'] },
        { func: 'arctan', val: '1', ans: '45°', w: ['30°', '60°', '90°'] },
        { func: 'arctan', val: '0', ans: '0°', w: ['45°', '90°', '30°'] },
        { func: 'arctan', val: '√3', ans: '60°', w: ['30°', '45°', '90°'] },
        { func: 'arctan', val: '1/√3', ans: '30°', w: ['45°', '60°', '90°'] },
    ];
    const item = pickRandom(items);
    return buildMC(
        `Evaluate: <strong>${item.func}(${item.val})</strong>`,
        item.ans, item.w,
        `<strong>${item.func}(${item.val}) = ${item.ans}</strong>`
    );
},

// -- Trig 9: Law of Sines --
'law-of-sines-calc': () => {
    const A = randInt(30, 70), B = randInt(30, 70);
    const a = randInt(5, 15);
    const b = roundN(a * Math.sin(B * Math.PI / 180) / Math.sin(A * Math.PI / 180), 1);
    return buildMC(
        `Using Law of Sines: A = ${A}°, a = ${a}, B = ${B}°. Find <strong>b</strong>. (Round to 1 decimal)`,
        String(b), decDistractors(b, 1.5).map(v => String(roundN(v, 1))),
        `b = a × sin(B)/sin(A) = ${a} × sin(${B}°)/sin(${A}°) ≈ <strong>${b}</strong>`
    );
},

// -- Trig 10: Law of Cosines --
'law-of-cosines-calc': () => {
    const a = randInt(4, 10), b = randInt(4, 10), C = pickRandom([30, 45, 60, 90, 120]);
    const cSq = a * a + b * b - 2 * a * b * Math.cos(C * Math.PI / 180);
    if (cSq <= 0) return generators['law-of-cosines-calc']();
    const c = roundN(Math.sqrt(cSq), 1);
    return buildMC(
        `Using Law of Cosines: a = ${a}, b = ${b}, C = ${C}°. Find <strong>c</strong>. (Round to 1 decimal)`,
        String(c), decDistractors(c, 1.5).map(v => String(roundN(v, 1))),
        `c² = ${a}² + ${b}² − 2(${a})(${b})cos(${C}°) ≈ ${roundN(cSq, 1)}<br>c ≈ <strong>${c}</strong>`
    );
},

// =============================================================
// ADDITIONAL GENERATORS — CONCEPT COVERAGE EXPANSION
// =============================================================

// -- Algebra: Expressions & Equations --
'expression-vs-equation': () => {
    const a = randInt(2,9), b = randInt(1,12), c = randInt(1,20);
    const expr = `${a}x + ${b}`;
    const eq = `${a}x + ${b} = ${c}`;
    const isEq = pickRandom([true, false]);
    const shown = isEq ? eq : expr;
    return buildMC(
        `Is <strong>${shown}</strong> an expression or an equation?`,
        isEq ? 'Equation' : 'Expression',
        isEq ? ['Expression', 'Inequality', 'Formula'] : ['Equation', 'Inequality', 'Formula'],
        isEq ? `It has an equals sign → <strong>Equation</strong>.` : `No equals sign → <strong>Expression</strong>.`
    );
},
'simplify-like-terms': () => {
    const a = randInt(2,8), b = randInt(1,7), c = randInt(1,9);
    const ans = a + b;
    return buildMC(
        `Simplify: <strong>${a}x + ${c} + ${b}x</strong>`,
        `${ans}x + ${c}`,
        [`${a+b+c}x`, `${a}x + ${b+c}`, `${a*b}x + ${c}`],
        `Combine like terms: ${a}x + ${b}x = ${ans}x → <strong>${ans}x + ${c}</strong>`
    );
},
'check-solution': () => {
    const a = randInt(2,6), x = randInt(1,8), b = randInt(1,10);
    const c = a * x + b;
    const testVal = pickRandom([x, x+1, x-1, x+2]);
    const isCorrect = testVal === x;
    return buildMC(
        `Is x = ${testVal} a solution to <strong>${a}x + ${b} = ${c}</strong>?`,
        isCorrect ? 'Yes' : 'No',
        isCorrect ? ['No', 'Not enough info', 'Only if x > 0'] : ['Yes', 'Not enough info', 'Only if x > 0'],
        `${a}(${testVal}) + ${b} = ${a*testVal + b}. We need ${c}. ${a*testVal + b === c ? '<strong>Yes</strong>, it works!' : '<strong>No</strong>, it doesn\'t equal ' + c + '.'}`
    );
},
'y-intercept-from-eq': () => {
    const m = randInt(-5,5), b = randInt(-10,10);
    const bSign = b >= 0 ? `+ ${b}` : `− ${Math.abs(b)}`;
    return buildMC(
        `What is the y-intercept of <strong>y = ${m}x ${bSign}</strong>?`,
        `(0, ${b})`,
        [`(${b}, 0)`, `(0, ${m})`, `(${m}, ${b})`],
        `The y-intercept is where x = 0: y = ${m}(0) ${bSign} = ${b} → <strong>(0, ${b})</strong>`
    );
},
'substitution-system': () => {
    const x = randInt(1,6), y = randInt(1,6);
    const a = randInt(2,4), c1 = a * x + y;
    return buildMC(
        `Solve by substitution: <strong>y = ${y}</strong> and <strong>${a}x + y = ${c1}</strong>. Find x.`,
        x, numDistractors(x),
        `Substitute y = ${y}: ${a}x + ${y} = ${c1} → ${a}x = ${c1 - y} → x = <strong>${x}</strong>`
    );
},
'count-solutions': () => {
    const cases = [
        { disc: 'positive', sols: '2 real solutions', w: ['1 real solution', '0 real solutions', 'Infinite solutions'] },
        { disc: 'zero', sols: '1 real solution', w: ['2 real solutions', '0 real solutions', 'Infinite solutions'] },
        { disc: 'negative', sols: '0 real solutions', w: ['1 real solution', '2 real solutions', 'Infinite solutions'] },
    ];
    const c = pickRandom(cases);
    return buildMC(
        `If the discriminant is <strong>${c.disc}</strong>, how many real solutions?`,
        c.sols, c.w,
        `Discriminant ${c.disc} → <strong>${c.sols}</strong>`
    );
},
'gcf-factor': () => {
    const gcf = randInt(2,6);
    const a = randInt(2,5), b = randInt(1,7);
    return buildMC(
        `Factor out the GCF: <strong>${gcf*a}x + ${gcf*b}</strong>`,
        `${gcf}(${a}x + ${b})`,
        [`${a}(${gcf}x + ${b})`, `${gcf*a}(x + ${b})`, `x(${gcf*a} + ${gcf*b})`],
        `GCF = ${gcf}: ${gcf*a}x + ${gcf*b} = <strong>${gcf}(${a}x + ${b})</strong>`
    );
},
'exponent-power-rule': () => {
    const base = pickRandom(['x','y','a','m']);
    const m = randInt(2,5), n = randInt(2,4);
    const ans = m * n;
    return buildMC(
        `Simplify: <strong>(${base}<sup>${m}</sup>)<sup>${n}</sup></strong>. What is the exponent?`,
        ans, numDistractors(ans),
        `Power rule: multiply exponents → ${base}<sup>${m}×${n}</sup> = ${base}<sup><strong>${ans}</strong></sup>`
    );
},
'zero-neg-exponent': () => {
    const isZero = pickRandom([true, false]);
    if (isZero) {
        const base = randInt(2,15);
        return buildMC(`What is <strong>${base}<sup>0</sup></strong>?`, '1', ['0', `${base}`, 'Undefined'],
            `Any nonzero number to the 0 power = <strong>1</strong>`);
    } else {
        const base = randInt(2,5), exp = randInt(1,3);
        const ansClean = `1/${Math.pow(base,exp)}`;
        return buildMC(`Simplify: <strong>${base}<sup>−${exp}</sup></strong>`, ansClean,
            [`${Math.pow(base,exp)}`, `-${Math.pow(base,exp)}`, `−1/${Math.pow(base,exp)}`],
            `a<sup>−n</sup> = 1/a<sup>n</sup> → 1/${base}<sup>${exp}</sup> = <strong>${ansClean}</strong>`);
    }
},
'domain-check': () => {
    const n = randInt(1,10);
    const sign = pickRandom(['+','-']);
    const denom = sign === '+' ? `x + ${n}` : `x − ${n}`;
    const excluded = sign === '+' ? -n : n;
    return buildMC(
        `What value is NOT in the domain of <strong>f(x) = 1/(${denom})</strong>?`,
        `x = ${excluded}`, [`x = ${-excluded}`, `x = 0`, `x = ${n+1}`],
        `Set ${denom} = 0 → x = ${excluded}. This value makes the denominator zero → <strong>excluded</strong>.`
    );
},
'classify-triangle-sides': () => {
    const equilateral = randInt(3, 12);
    const isoLeg = randInt(4, 10), isoBase = randInt(3, isoLeg + 4);
    if (isoBase === isoLeg) return generators['classify-triangle-sides']();
    const sa = randInt(3, 7), sb = randInt(sa + 1, sa + 5), sc = randInt(sb + 1, sb + 4);
    if (sa === sb || sb === sc) return generators['classify-triangle-sides']();
    const types = [
        { sides: [equilateral, equilateral, equilateral], ans: 'Equilateral', w: ['Isosceles','Scalene','Right'] },
        { sides: [isoLeg, isoLeg, isoBase], ans: 'Isosceles', w: ['Equilateral','Scalene','Right'] },
        { sides: [sa, sb, sc], ans: 'Scalene', w: ['Equilateral','Isosceles','Right'] },
    ];
    const t = pickRandom(types);
    const shuffledSides = shuffle(t.sides);
    return buildMC(`A triangle has sides <strong>${shuffledSides[0]}, ${shuffledSides[1]}, ${shuffledSides[2]}</strong>. Classify it.`,
        t.ans, t.w, `${t.ans === 'Equilateral' ? 'All sides equal' : t.ans === 'Isosceles' ? 'Exactly two sides equal' : 'No sides equal'} → <strong>${t.ans}</strong>`);
},
'classify-angle': () => {
    const angle = randInt(1,179);
    let type; if (angle < 90) type = 'Acute'; else if (angle === 90) type = 'Right'; else type = 'Obtuse';
    const allTypes = ['Acute', 'Right', 'Obtuse', 'Straight'];
    return buildMC(`Classify a <strong>${angle}°</strong> angle.`, type, allTypes.filter(t => t !== type).slice(0,3),
        `${angle}° is ${type === 'Acute' ? 'less than 90°' : type === 'Right' ? 'exactly 90°' : 'between 90° and 180°'} → <strong>${type}</strong>`);
},
'identify-quadrilateral': () => {
    const items = [
        { desc: '4 equal sides and 4 right angles', ans: 'Square', w: ['Rectangle','Rhombus','Trapezoid'] },
        { desc: 'Opposite sides equal, 4 right angles, but sides NOT all equal', ans: 'Rectangle', w: ['Square','Rhombus','Parallelogram'] },
        { desc: '4 equal sides but angles NOT all 90°', ans: 'Rhombus', w: ['Square','Rectangle','Trapezoid'] },
        { desc: 'Exactly one pair of parallel sides', ans: 'Trapezoid', w: ['Parallelogram','Rectangle','Rhombus'] },
    ];
    const item = pickRandom(items);
    return buildMC(`Which quadrilateral has: <strong>${item.desc}</strong>?`, item.ans, item.w, `<strong>${item.ans}</strong>`);
},
'diameter-radius': () => {
    const isD2R = pickRandom([true, false]);
    const val = randInt(2,20);
    if (isD2R) return buildMC(`Diameter = <strong>${val*2}</strong>. Radius?`, val, numDistractors(val), `r = d/2 = ${val*2}/2 = <strong>${val}</strong>`);
    else return buildMC(`Radius = <strong>${val}</strong>. Diameter?`, val*2, numDistractors(val*2), `d = 2r = 2×${val} = <strong>${val*2}</strong>`);
},
'perimeter-rectangle': () => {
    const l = randInt(3,15), w = randInt(3,15);
    const ans = 2*(l+w);
    return buildMC(`Perimeter of a rectangle: <strong>length = ${l}, width = ${w}</strong>.`, ans, numDistractors(ans, 5),
        `P = 2(l+w) = 2(${l}+${w}) = <strong>${ans}</strong>`);
},
'trapezoid-area': () => {
    const b1 = randInt(4,12), b2 = randInt(4,12), h = randInt(3,10);
    const ans = (b1+b2)*h/2;
    return buildMC(`Trapezoid: bases <strong>${b1}</strong> and <strong>${b2}</strong>, height <strong>${h}</strong>. Area?`,
        ans, numDistractors(ans, 8).map(String), `A = ½(b₁+b₂)h = ½(${b1}+${b2})×${h} = <strong>${ans}</strong>`);
},
'is-right-triangle': () => {
    const triples = [[3,4,5],[5,12,13],[6,8,10],[8,15,17]];
    const isRight = pickRandom([true, false]);
    if (isRight) {
        const [a,b,c] = pickRandom(triples);
        return buildMC(`Sides: <strong>${a}, ${b}, ${c}</strong>. Right triangle?`, 'Yes', ['No', 'Not enough info', 'Only if acute'],
            `${a}² + ${b}² = ${a*a+b*b} = ${c}² → <strong>Yes</strong>`);
    } else {
        const a = randInt(3,8), b = randInt(3,8), c = a + b - 1;
        if (a*a + b*b === c*c) return generators['is-right-triangle']();
        return buildMC(`Sides: <strong>${a}, ${b}, ${c}</strong>. Right triangle?`, 'No', ['Yes', 'Not enough info', 'Only if obtuse'],
            `${a}² + ${b}² = ${a*a+b*b} ≠ ${c*c} = ${c}² → <strong>No</strong>`);
    }
},
'congruent-vs-similar': () => {
    const items = [
        { q: 'Same shape AND same size', a: 'Congruent', w: ['Similar','Neither','Both'] },
        { q: 'Same shape but possibly different size', a: 'Similar', w: ['Congruent','Neither','Both'] },
        { q: 'All corresponding angles are equal AND all corresponding sides are equal', a: 'Congruent', w: ['Similar','Neither','Proportional'] },
        { q: 'Corresponding angles are equal but sides are in proportion (not necessarily equal)', a: 'Similar', w: ['Congruent','Neither','Identical'] },
        { q: 'A photocopy enlarged to 150% produces a figure that is ___ to the original', a: 'Similar', w: ['Congruent','Neither','Symmetric'] },
    ];
    const item = pickRandom(items);
    return buildMC(`<strong>${item.q}</strong> — congruent or similar?`, item.a, item.w, `<strong>${item.a}</strong>`);
},
'cylinder-volume': () => {
    const r = randInt(2,7), h = randInt(3,10);
    const ans = roundN(Math.PI * r * r * h);
    return buildMC(`Volume of a cylinder: r = <strong>${r}</strong>, h = <strong>${h}</strong>. (Round to 2 decimals)`,
        String(ans), decDistractors(ans, 20).map(String), `V = πr²h = π(${r})²(${h}) ≈ <strong>${ans}</strong>`);
},
'sphere-volume': () => {
    const r = randInt(2,10);
    const ans = roundN((4/3) * Math.PI * r * r * r);
    return buildMC(`Volume of a sphere: r = <strong>${r}</strong>. (Round to 2 decimals)`,
        String(ans), decDistractors(ans, 30).map(String), `V = (4/3)πr³ = (4/3)π(${r})³ ≈ <strong>${ans}</strong>`);
},
'reflection-point': () => {
    const x = randInt(-6,6), y = randInt(-6,6);
    const axis = pickRandom(['x-axis','y-axis']);
    const ans = axis === 'x-axis' ? `(${x}, ${-y})` : `(${-x}, ${y})`;
    return buildMC(`Reflect <strong>(${x}, ${y})</strong> over the <strong>${axis}</strong>.`, ans,
        axis === 'x-axis' ? [`(${-x}, ${y})`, `(${-x}, ${-y})`, `(${x}, ${y})`] : [`(${x}, ${-y})`, `(${-x}, ${-y})`, `(${x}, ${y})`],
        `${axis}: ${axis === 'x-axis' ? 'flip y' : 'flip x'} → <strong>${ans}</strong>`);
},
'sohcahtoa-which-func': () => {
    const scenarios = [
        { known: 'opposite and hypotenuse', ans: 'sin', w: ['cos','tan','cot'] },
        { known: 'adjacent and hypotenuse', ans: 'cos', w: ['sin','tan','sec'] },
        { known: 'opposite and adjacent', ans: 'tan', w: ['sin','cos','csc'] },
    ];
    const s = pickRandom(scenarios);
    return buildMC(`You know the <strong>${s.known}</strong>. Which trig function?`, s.ans, s.w,
        `${s.ans === 'sin' ? 'SOH: sin = O/H' : s.ans === 'cos' ? 'CAH: cos = A/H' : 'TOA: tan = O/A'} → <strong>${s.ans}</strong>`);
},
'which-trig-function': () => {
    const opp = randInt(3,12), adj = randInt(3,12), hyp = randInt(13,20);
    const scenarios = [
        { q: `Find θ given opp = ${opp}, hyp = ${hyp}`, ans: 'sin⁻¹', w: ['cos⁻¹','tan⁻¹','sec⁻¹'] },
        { q: `Find θ given adj = ${adj}, hyp = ${hyp}`, ans: 'cos⁻¹', w: ['sin⁻¹','tan⁻¹','csc⁻¹'] },
        { q: `Find θ given opp = ${opp}, adj = ${adj}`, ans: 'tan⁻¹', w: ['sin⁻¹','cos⁻¹','cot⁻¹'] },
    ];
    const s = pickRandom(scenarios);
    return buildMC(`${s.q}. Which inverse function?`, s.ans, s.w, `<strong>${s.ans}</strong>`);
},
'quadrant-id': () => {
    const angle = pickRandom([45,120,135,200,210,225,300,315,330]);
    let q; if (angle < 90) q = 'I'; else if (angle < 180) q = 'II'; else if (angle < 270) q = 'III'; else q = 'IV';
    const all = ['I','II','III','IV'];
    return buildMC(`In which quadrant is <strong>${angle}°</strong>?`, `Quadrant ${q}`, all.filter(x => x !== q).map(x => `Quadrant ${x}`),
        `${angle}° is in <strong>Quadrant ${q}</strong>`);
},
'inverse-trig-range': () => {
    const funcs = [
        { fn: 'arcsin', range: '[−90°, 90°]', w: ['[0°, 180°]','(−90°, 90°)','[0°, 360°]'] },
        { fn: 'arccos', range: '[0°, 180°]', w: ['[−90°, 90°]','(0°, 180°)','[0°, 360°]'] },
        { fn: 'arctan', range: '(−90°, 90°)', w: ['[−90°, 90°]','[0°, 180°]','[0°, 360°]'] },
    ];
    const f = pickRandom(funcs);
    return buildMC(`Output range of <strong>${f.fn}</strong>?`, f.range, f.w, `<strong>${f.fn}</strong> → <strong>${f.range}</strong>`);
},
'reciprocal-identity': () => {
    const ids = [
        { q: 'csc θ =', ans: '1/sin θ', w: ['1/cos θ','1/tan θ','sin θ/cos θ'] },
        { q: 'sec θ =', ans: '1/cos θ', w: ['1/sin θ','1/tan θ','cos θ/sin θ'] },
        { q: 'cot θ =', ans: '1/tan θ', w: ['1/sin θ','1/cos θ','tan θ'] },
        { q: 'cot θ = cos θ / ?', ans: 'sin θ', w: ['cos θ','tan θ','1'] },
        { q: 'tan θ = sin θ / ?', ans: 'cos θ', w: ['sin θ','tan θ','1'] },
        { q: 'If sin θ = 0.6 and cos θ = 0.8, then csc θ =', ans: '5/3', w: ['5/4','3/5','4/5'] },
    ];
    const id = pickRandom(ids);
    return buildMC(`Complete: <strong>${id.q}</strong>`, id.ans, id.w, `<strong>${id.q} ${id.ans}</strong>`);
},
'trig-double-angle': () => {
    const items = [
        { q: 'sin(2θ) =', ans: '2 sin θ cos θ', w: ['sin²θ + cos²θ', '2 cos²θ − 1', 'sin θ + cos θ'] },
        { q: 'cos(2θ) =', ans: 'cos²θ − sin²θ', w: ['2 sin θ cos θ', 'sin²θ + cos²θ', '2 sin²θ − 1'] },
        { q: 'cos(2θ) = 2cos²θ − ?', ans: '1', w: ['sin²θ', '2', 'cos²θ'] },
        { q: 'cos(2θ) = 1 − ?', ans: '2 sin²θ', w: ['2 cos²θ', 'sin θ cos θ', 'sin²θ'] },
        { q: 'sin(2 × 30°) = sin(60°). Using the formula: 2 sin 30° cos 30° =', ans: '√3/2', w: ['1/2', '1', '√2/2'] },
    ];
    const item = pickRandom(items);
    return buildMC(`Complete: <strong>${item.q}</strong>`, item.ans, item.w, `<strong>${item.q} ${item.ans}</strong>`);
},
'law-choice': () => {
    const scenarios = [
        { given: 'two angles and one side (AAS)', ans: 'Law of Sines', w: ['Law of Cosines','Pythagorean Theorem','SOHCAHTOA'] },
        { given: 'two sides and the included angle (SAS)', ans: 'Law of Cosines', w: ['Law of Sines','Pythagorean Theorem','SOHCAHTOA'] },
        { given: 'three sides and no angles (SSS)', ans: 'Law of Cosines', w: ['Law of Sines','Pythagorean Theorem','SOHCAHTOA'] },
    ];
    const s = pickRandom(scenarios);
    return buildMC(`You know <strong>${s.given}</strong>. Which law?`, s.ans, s.w, `<strong>${s.ans}</strong>`);
},

// =============================================================
// PRE-ALGEBRA GENERATORS
// =============================================================

// -- PreAlgebra 1: Whole Numbers --
'pa-add-subtract': () => {
    const a = randInt(100, 999), b = randInt(100, 999);
    const op = pickRandom(['+', '−']);
    const ans = op === '+' ? a + b : a - b;
    return buildMC(`Compute: <strong>${a} ${op} ${b}</strong>`, ans, numDistractors(ans, 10),
        `${a} ${op} ${b} = <strong>${ans}</strong>`);
},
'pa-multiply': () => {
    const a = randInt(12, 49), b = randInt(3, 12);
    const ans = a * b;
    return buildMC(`Compute: <strong>${a} × ${b}</strong>`, ans, numDistractors(ans, 15),
        `${a} × ${b} = <strong>${ans}</strong>`);
},

// -- PreAlgebra 2: Fractions --
'pa-fraction-simplify': () => {
    const gcds = [[2,4],[3,6],[4,8],[3,9],[5,10],[4,12],[6,12],[5,15],[3,12],[6,18]];
    const [n, d] = pickRandom(gcds);
    const k = randInt(2, 4);
    const num = n * k, den = d * k;
    const gcd = n, sn = num / gcd, sd = den / gcd;
    return buildMC(`Simplify: <strong>${num}/${den}</strong>`, `${sn}/${sd}`,
        [`${num}/${sd}`, `${sn}/${den}`, `${den}/${num}`],
        `Divide both by ${gcd}: ${num}÷${gcd} / ${den}÷${gcd} = <strong>${sn}/${sd}</strong>`);
},
'pa-fraction-add': () => {
    const d = pickRandom([4, 5, 6, 8, 10]);
    const a = randInt(1, d - 1), b = randInt(1, d - 1);
    const sum = a + b;
    const ansStr = sum >= d ? (sum % d === 0 ? `${sum / d}` : `${Math.floor(sum / d)} ${sum % d}/${d}`) : `${sum}/${d}`;
    return buildMC(`Add: <strong>${a}/${d} + ${b}/${d}</strong>`, ansStr,
        [`${a + b + 1}/${d}`, `${a * b}/${d}`, `${a}/${d + b}`],
        `Same denominator: (${a}+${b})/${d} = <strong>${ansStr}</strong>`);
},

// -- PreAlgebra 3: Decimals --
'pa-decimal-add': () => {
    const a = roundN(randInt(10, 99) / 10), b = roundN(randInt(10, 99) / 10);
    const ans = roundN(a + b);
    return buildMC(`Add: <strong>${a} + ${b}</strong>`, String(ans), decDistractors(ans, 0.3).map(String),
        `${a} + ${b} = <strong>${ans}</strong>`);
},
'pa-decimal-multiply': () => {
    const a = roundN(randInt(11, 49) / 10), b = randInt(2, 9);
    const ans = roundN(a * b);
    return buildMC(`Multiply: <strong>${a} × ${b}</strong>`, String(ans), decDistractors(ans, 1).map(String),
        `${a} × ${b} = <strong>${ans}</strong>`);
},

// -- PreAlgebra 4: Ratios --
'pa-ratio-simplify': () => {
    const k = randInt(2, 5), a = randInt(1, 6), b = randInt(1, 6);
    if (a === b) return generators['pa-ratio-simplify']();
    return buildMC(`Simplify the ratio: <strong>${a * k} : ${b * k}</strong>`, `${a} : ${b}`,
        [`${a * k} : ${b}`, `${a} : ${b * k}`, `${b} : ${a}`],
        `Divide both by ${k}: <strong>${a} : ${b}</strong>`);
},
'pa-proportion-solve': () => {
    const a = randInt(2, 8), b = randInt(2, 8), k = randInt(2, 5);
    const ans = b * k;
    return buildMC(`Solve: <strong>${a}/${b} = ${a * k}/x</strong>`, ans, numDistractors(ans),
        `Cross multiply or scale: ${b} × ${k} = <strong>${ans}</strong>`);
},

// -- PreAlgebra 5: Percentages --
'pa-percent-of': () => {
    const pct = pickRandom([10, 15, 20, 25, 30, 40, 50, 60, 75]);
    const whole = pickRandom([40, 50, 60, 80, 100, 120, 200, 250]);
    const ans = (pct / 100) * whole;
    return buildMC(`What is <strong>${pct}%</strong> of <strong>${whole}</strong>?`, ans, numDistractors(ans, 5),
        `${pct}/100 × ${whole} = <strong>${ans}</strong>`);
},
'pa-percent-convert': () => {
    const variant = pickRandom(['to-pct', 'to-dec', 'to-frac']);
    if (variant === 'to-pct') {
        const dec = pickRandom([0.1, 0.25, 0.3, 0.5, 0.6, 0.75, 0.8, 0.05, 0.15, 0.45]);
        const ans = dec * 100 + '%';
        return buildMC(`Convert <strong>${dec}</strong> to a percent.`, ans,
            [`${dec * 10}%`, `${dec * 1000}%`, `${dec}%`],
            `Multiply by 100: ${dec} × 100 = <strong>${ans}</strong>`);
    } else if (variant === 'to-dec') {
        const pct = pickRandom([5, 10, 15, 25, 30, 50, 60, 75, 80, 125]);
        const ans = String(pct / 100);
        return buildMC(`Convert <strong>${pct}%</strong> to a decimal.`, ans,
            [String(pct / 10), String(pct), String(pct / 1000)],
            `Divide by 100: ${pct}/100 = <strong>${ans}</strong>`);
    } else {
        const pairs = [{p:25,f:'1/4'},{p:50,f:'1/2'},{p:75,f:'3/4'},{p:20,f:'1/5'},{p:10,f:'1/10'},{p:33,f:'1/3'},{p:40,f:'2/5'}];
        const item = pickRandom(pairs);
        return buildMC(`Convert <strong>${item.p}%</strong> to a fraction (simplified).`, item.f,
            ['1/3','2/5','3/8','1/6'].filter(f => f !== item.f).slice(0,3),
            `${item.p}% = <strong>${item.f}</strong>`);
    }
},

// -- PreAlgebra 6: Integers --
'pa-integer-add': () => {
    const a = randInt(-15, 15), b = randInt(-15, 15);
    const ans = a + b;
    const bStr = b >= 0 ? `+ ${b}` : `− ${Math.abs(b)}`;
    return buildMC(`Compute: <strong>${a} ${bStr}</strong>`, ans, numDistractors(ans),
        `${a} ${bStr} = <strong>${ans}</strong>`);
},
'pa-integer-multiply': () => {
    const a = randInt(-9, 9), b = randInt(-9, 9);
    if (a === 0 || b === 0) return generators['pa-integer-multiply']();
    const ans = a * b;
    return buildMC(`Compute: <strong>(${a}) × (${b})</strong>`, ans, numDistractors(ans, 5),
        `(${a})(${b}) = <strong>${ans}</strong>. ${(a > 0) === (b > 0) ? 'Same signs → positive' : 'Different signs → negative'}`);
},

// -- PreAlgebra 7: Order of Operations --
'pa-order-of-ops': () => {
    const templates = [
        () => { const a=randInt(2,6),b=randInt(1,5),c=randInt(2,4); return {q:`${a} + ${b} × ${c}`, ans: a+b*c}; },
        () => { const a=randInt(2,5),b=randInt(1,4),c=randInt(1,6); return {q:`(${a} + ${b}) × ${c}`, ans: (a+b)*c}; },
        () => { const a=randInt(2,4),b=randInt(1,5),c=randInt(1,3); return {q:`${a}² + ${b} × ${c}`, ans: a*a+b*c}; },
        () => { const a=randInt(10,25),b=randInt(2,4),c=randInt(1,5); return {q:`${a} − ${b} × ${c}`, ans: a-b*c}; },
    ];
    const t = pickRandom(templates)();
    return buildMC(`Evaluate: <strong>${t.q}</strong>`, t.ans, numDistractors(t.ans, 4),
        `Follow PEMDAS: <strong>${t.ans}</strong>`);
},
'pa-pemdas-identify': () => {
    const items = [
        { q: 'In PEMDAS, what comes first?', a: 'Parentheses', w: ['Exponents', 'Multiplication', 'Addition'] },
        { q: 'In PEMDAS, what does the E stand for?', a: 'Exponents', w: ['Equations', 'Equality', 'Elements'] },
        { q: 'Multiplication and Division are done:', a: 'Left to right (equal priority)', w: ['Multiplication first', 'Division first', 'Right to left'] },
        { q: 'Addition and Subtraction are done:', a: 'Left to right (equal priority)', w: ['Addition first', 'Subtraction first', 'Whichever is larger'] },
    ];
    const item = pickRandom(items);
    const s = shuffle([item.a, ...item.w]);
    return { question: item.q, choices: s, correctIndex: s.indexOf(item.a), explanation: `<strong>${item.a}</strong>` };
},

// -- PreAlgebra 8: Factors & Multiples --
'pa-gcf': () => {
    const gcf = randInt(2, 8), a = gcf * randInt(2, 6), b = gcf * randInt(2, 6);
    if (a === b) return generators['pa-gcf']();
    return buildMC(`Find the GCF of <strong>${a}</strong> and <strong>${b}</strong>.`, gcf, numDistractors(gcf),
        `Largest number dividing both ${a} and ${b} is <strong>${gcf}</strong>`);
},
'pa-lcm': () => {
    const pairs = [[3,4,12],[4,6,12],[3,5,15],[6,8,24],[5,10,10],[4,5,20],[3,7,21],[6,9,18]];
    const [a, b, lcm] = pickRandom(pairs);
    return buildMC(`Find the LCM of <strong>${a}</strong> and <strong>${b}</strong>.`, lcm, numDistractors(lcm, 4),
        `LCM(${a}, ${b}) = <strong>${lcm}</strong>`);
},

// -- PreAlgebra 9: Intro Variables --
'pa-translate-expression': () => {
    const items = [
        { q: '"5 more than a number x"', a: 'x + 5', w: ['5x', 'x − 5', '5 − x'] },
        { q: '"3 times a number n"', a: '3n', w: ['n + 3', 'n − 3', 'n/3'] },
        { q: '"a number y decreased by 7"', a: 'y − 7', w: ['7 − y', 'y + 7', '7y'] },
        { q: '"twice a number w, plus 4"', a: '2w + 4', w: ['w + 24', '2(w + 4)', '4w + 2'] },
        { q: '"the quotient of m and 6"', a: 'm/6', w: ['6m', 'm − 6', '6/m'] },
        { q: '"10 less than a number p"', a: 'p − 10', w: ['10 − p', 'p + 10', '10p'] },
    ];
    const item = pickRandom(items);
    return buildMC(`Write as an algebraic expression: <strong>${item.q}</strong>`, item.a, item.w,
        `<strong>${item.a}</strong>`);
},
'pa-eval-simple': () => {
    const a = randInt(2, 8), b = randInt(1, 10), x = randInt(1, 9);
    const ans = a * x + b;
    return buildMC(`Evaluate <strong>${a}n + ${b}</strong> when n = ${x}.`, ans, numDistractors(ans),
        `${a}(${x}) + ${b} = ${a * x} + ${b} = <strong>${ans}</strong>`);
},

// -- PreAlgebra 10: Word Problems --
'pa-word-problem': () => {
    const templates = [
        () => { const r = randInt(5, 15), h = randInt(2, 8); const ans = r * h;
            return { q: `You earn $${r}/hour. How much for ${h} hours?`, a: `$${ans}`, w: [`$${ans+r}`, `$${r+h}`, `$${ans-r}`] }; },
        () => { const total = randInt(20, 50), spent = randInt(5, total - 5); const left = total - spent;
            return { q: `You have $${total} and spend $${spent}. How much left?`, a: `$${left}`, w: [`$${left+5}`, `$${total}`, `$${left-5}`] }; },
        () => { const each = randInt(3, 8), n = randInt(4, 10); const ans = each * n;
            return { q: `Pencils cost $${each} per pack. ${n} packs cost?`, a: `$${ans}`, w: [`$${ans+each}`, `$${n+each}`, `$${ans-each}`] }; },
        () => { const dist = randInt(10, 30), trips = randInt(2, 5); const ans = dist * trips;
            return { q: `A bus travels ${dist} miles per trip. After ${trips} trips?`, a: `${ans} miles`, w: [`${ans+10} miles`, `${dist+trips} miles`, `${ans-dist} miles`] }; },
    ];
    const t = pickRandom(templates)();
    return buildMC(t.q, t.a, t.w, `The answer is <strong>${t.a}</strong>.`);
},

// =============================================================
// STATISTICS GENERATORS
// =============================================================

// -- Stats 1: Data Types --
'stat-data-types': () => {
    const items = [
        { q: 'Height in centimeters is what type of data?', a: 'Quantitative (continuous)', w: ['Qualitative','Quantitative (discrete)','Categorical'] },
        { q: 'Favorite color is what type of data?', a: 'Qualitative (categorical)', w: ['Quantitative','Continuous','Discrete'] },
        { q: 'Number of siblings is what type?', a: 'Quantitative (discrete)', w: ['Qualitative','Continuous','Categorical'] },
        { q: 'Temperature in °F is what type?', a: 'Quantitative (continuous)', w: ['Qualitative','Discrete','Categorical'] },
        { q: 'Shirt size (S, M, L, XL) is what type?', a: 'Qualitative (ordinal)', w: ['Quantitative','Continuous','Discrete'] },
        { q: 'A survey question is an example of:', a: 'Data collection', w: ['Data visualization','Statistical inference','Probability'] },
    ];
    const item = pickRandom(items);
    const s = shuffle([item.a, ...item.w]);
    return { question: item.q, choices: s, correctIndex: s.indexOf(item.a), explanation: `<strong>${item.a}</strong>` };
},

// -- Stats 2: Mean, Median, Mode --
'stat-mean': () => {
    const n = randInt(4, 6);
    const vals = Array.from({length: n}, () => randInt(2, 20));
    const sum = vals.reduce((a, b) => a + b, 0);
    const mean = roundN(sum / n, 1);
    return buildMC(`Find the mean of: <strong>${vals.join(', ')}</strong>`, String(mean),
        decDistractors(mean, 1).map(String),
        `Sum = ${sum}, count = ${n}. Mean = ${sum}/${n} = <strong>${mean}</strong>`);
},
'stat-median': () => {
    const n = pickRandom([5, 7]);
    const vals = Array.from({length: n}, () => randInt(1, 25)).sort((a,b) => a - b);
    const median = vals[Math.floor(n / 2)];
    return buildMC(`Find the median of: <strong>${vals.join(', ')}</strong>`, median, numDistractors(median),
        `Sorted and middle value: <strong>${median}</strong>`);
},
'stat-mode': () => {
    const mode = randInt(2, 15);
    const vals = [mode, mode, mode, randInt(1, 20), randInt(1, 20), randInt(1, 20)];
    const shuffled = shuffle(vals);
    return buildMC(`Find the mode of: <strong>${shuffled.join(', ')}</strong>`, mode, numDistractors(mode),
        `${mode} appears most often → mode = <strong>${mode}</strong>`);
},

// -- Stats 3: Range & Variation --
'stat-range': () => {
    const vals = Array.from({length: randInt(5, 8)}, () => randInt(3, 50));
    const mn = Math.min(...vals), mx = Math.max(...vals);
    const range = mx - mn;
    return buildMC(`Find the range of: <strong>${vals.join(', ')}</strong>`, range, numDistractors(range),
        `Max − Min = ${mx} − ${mn} = <strong>${range}</strong>`);
},
'stat-iqr-concept': () => {
    const items = [
        { q: 'What does the IQR measure?', a: 'Spread of the middle 50% of data', w: ['The average','The most common value','The total range'] },
        { q: 'IQR = Q3 − Q1. If Q1=10 and Q3=25, IQR =', a: '15', w: ['35','17.5','10'] },
        { q: 'An outlier is a data point that is:', a: 'Far from most other values', w: ['The median','The mode','Always the largest value'] },
        { q: 'A larger standard deviation means data is:', a: 'More spread out', w: ['More clustered','Higher on average','Always positive'] },
    ];
    const item = pickRandom(items);
    const s = shuffle([item.a, ...item.w]);
    return { question: item.q, choices: s, correctIndex: s.indexOf(item.a), explanation: `<strong>${item.a}</strong>` };
},

// -- Stats 4: Graphs --
'stat-graph-type': () => {
    const items = [
        { q: 'Best chart to compare categories (e.g., favorite fruit)?', a: 'Bar graph', w: ['Line graph','Scatter plot','Histogram'] },
        { q: 'Best chart to show change over time?', a: 'Line graph', w: ['Bar graph','Pie chart','Histogram'] },
        { q: 'Best chart to show parts of a whole?', a: 'Pie chart', w: ['Bar graph','Line graph','Scatter plot'] },
        { q: 'Best chart to show the relationship between two quantitative variables?', a: 'Scatter plot', w: ['Pie chart','Bar graph','Histogram'] },
        { q: 'Best chart for frequency of numeric ranges (e.g., test score bins)?', a: 'Histogram', w: ['Pie chart','Line graph','Bar graph'] },
    ];
    const item = pickRandom(items);
    const s = shuffle([item.a, ...item.w]);
    return { question: item.q, choices: s, correctIndex: s.indexOf(item.a), explanation: `<strong>${item.a}</strong>` };
},
'stat-read-bar': () => {
    const categories = shuffle(['Apples','Bananas','Oranges','Grapes','Strawberries']).slice(0, 4);
    const values = categories.map(() => randInt(5, 30));
    const maxIdx = values.indexOf(Math.max(...values));
    return buildMC(`A bar graph shows: ${categories.map((c, i) => `${c}=${values[i]}`).join(', ')}. Which has the highest value?`,
        categories[maxIdx], categories.filter((_, i) => i !== maxIdx),
        `${categories[maxIdx]} has the highest value at ${values[maxIdx]}: <strong>${categories[maxIdx]}</strong>`);
},

// -- Stats 5: Histograms --
'stat-frequency': () => {
    const data = Array.from({length: 10}, () => randInt(1, 6));
    const target = pickRandom([...new Set(data)]);
    const freq = data.filter(d => d === target).length;
    return buildMC(`Data: <strong>${data.join(', ')}</strong>. What is the frequency of <strong>${target}</strong>?`,
        freq, numDistractors(freq, 2),
        `Count of ${target}: <strong>${freq}</strong>`);
},

// -- Stats 6: Probability Basics --
'stat-probability': () => {
    const templates = [
        () => { const n = randInt(2, 4); return {q:`Rolling a fair die, what is P(getting ${n})?`, a:'1/6', w:['1/3','1/2','1/4']}; },
        () => { return {q:'Flipping a fair coin, P(heads)?', a:'1/2', w:['1/3','1/4','1/6']}; },
        () => { const r=randInt(2,5),t=randInt(r+2,12); return {q:`A bag has ${r} red and ${t-r} blue marbles. P(red)?`, a:`${r}/${t}`, w:[`${t-r}/${t}`,`${r}/${t+1}`,`1/${t}`]}; },
        () => { return {q:'The probability of an impossible event is:', a:'0', w:['1','0.5','−1']}; },
        () => { return {q:'The probability of a certain event is:', a:'1', w:['0','0.5','2']}; },
    ];
    const t = pickRandom(templates)();
    return buildMC(t.q, t.a, t.w, `<strong>${t.a}</strong>`);
},
'stat-probability-calc': () => {
    const favorable = randInt(2, 8), total = randInt(favorable + 2, favorable + 12);
    const pct = roundN((favorable / total) * 100, 1);
    return buildMC(`${favorable} favorable outcomes out of ${total} total. Probability as a percent?`,
        `${pct}%`, [`${roundN(pct + 5)}%`, `${roundN(pct - 5)}%`, `${roundN(100 - pct)}%`],
        `${favorable}/${total} = ${roundN(favorable / total, 3)} = <strong>${pct}%</strong>`);
},

// -- Stats 7: Compound Events --
'stat-compound': () => {
    const items = [
        { q: 'P(A) = 1/2, P(B) = 1/3. If independent, P(A and B) =', a: '1/6', w: ['5/6','1/2','1/3'] },
        { q: 'P(A) = 1/4, P(B) = 1/3. If independent, P(A and B) =', a: '1/12', w: ['7/12','1/4','1/3'] },
        { q: '"Or" probabilities use:', a: 'Addition rule (P(A) + P(B) − P(A∩B))', w: ['Multiplication only','Division','Subtraction only'] },
        { q: 'Two events where one doesn\'t affect the other are:', a: 'Independent', w: ['Dependent','Mutually exclusive','Complementary'] },
        { q: 'P(not A) = 1 − P(A). If P(rain) = 0.3, P(no rain) =', a: '0.7', w: ['0.3','1.3','0.03'] },
    ];
    const item = pickRandom(items);
    const s = shuffle([item.a, ...item.w]);
    return { question: item.q, choices: s, correctIndex: s.indexOf(item.a), explanation: `<strong>${item.a}</strong>` };
},

// -- Stats 8: Normal Distribution --
'stat-normal': () => {
    const items = [
        { q: 'In a normal distribution, about ___% of data falls within 1 standard deviation of the mean.', a: '68%', w: ['50%','95%','99.7%'] },
        { q: 'In a normal distribution, about ___% falls within 2 standard deviations.', a: '95%', w: ['68%','99.7%','50%'] },
        { q: 'The mean, median, and mode of a normal distribution are:', a: 'All equal', w: ['All different','Mean > Median','Median > Mean'] },
        { q: 'A z-score of 0 means the value is:', a: 'Equal to the mean', w: ['Below the mean','Above the mean','An outlier'] },
        { q: 'A z-score of 2 means the value is:', a: '2 standard deviations above the mean', w: ['2 below the mean','Twice the mean','At the median'] },
    ];
    const item = pickRandom(items);
    const s = shuffle([item.a, ...item.w]);
    return { question: item.q, choices: s, correctIndex: s.indexOf(item.a), explanation: `<strong>${item.a}</strong>` };
},
'stat-z-score': () => {
    const mean = pickRandom([50, 60, 70, 80, 100]);
    const sd = pickRandom([5, 10, 15]);
    const x = mean + sd * pickRandom([-2, -1, 1, 2]);
    const z = (x - mean) / sd;
    return buildMC(`Mean = ${mean}, SD = ${sd}. What is the z-score of <strong>${x}</strong>?`,
        String(z), [String(z + 1), String(z - 1), String(-z)],
        `z = (${x} − ${mean}) / ${sd} = <strong>${z}</strong>`);
},

// -- Stats 9: Scatter Plots --
'stat-correlation': () => {
    const items = [
        { q: 'As x increases, y increases steadily. The correlation is:', a: 'Positive', w: ['Negative','None','Undefined'] },
        { q: 'As x increases, y decreases steadily. The correlation is:', a: 'Negative', w: ['Positive','None','Zero'] },
        { q: 'Points scattered randomly with no pattern show:', a: 'No correlation', w: ['Positive correlation','Negative correlation','Perfect correlation'] },
        { q: 'r = 0.95 indicates:', a: 'Strong positive correlation', w: ['Weak positive','Strong negative','No correlation'] },
        { q: 'r = −0.85 indicates:', a: 'Strong negative correlation', w: ['Weak negative','Strong positive','No correlation'] },
        { q: 'Correlation does NOT prove:', a: 'Causation', w: ['Association','Pattern','Relationship'] },
    ];
    const item = pickRandom(items);
    const s = shuffle([item.a, ...item.w]);
    return { question: item.q, choices: s, correctIndex: s.indexOf(item.a), explanation: `<strong>${item.a}</strong>` };
},

// -- Stats 10: Statistical Thinking --
'stat-thinking': () => {
    const items = [
        { q: 'A sample is:', a: 'A subset of the population', w: ['The entire population','A hypothesis','A variable'] },
        { q: 'Bias in a survey can be caused by:', a: 'Leading questions', w: ['Large sample size','Random selection','High response rate'] },
        { q: 'The most representative sampling method is:', a: 'Simple random sampling', w: ['Convenience sampling','Voluntary response','Only asking friends'] },
        { q: 'A larger sample size generally makes results:', a: 'More reliable', w: ['Less reliable','Biased','Unchanged'] },
        { q: 'An experiment differs from an observational study because it:', a: 'Actively applies a treatment', w: ['Has more data','Uses surveys','Is always larger'] },
    ];
    const item = pickRandom(items);
    const s = shuffle([item.a, ...item.w]);
    return { question: item.q, choices: s, correctIndex: s.indexOf(item.a), explanation: `<strong>${item.a}</strong>` };
},

// =============================================================
// CALCULUS GENERATORS
// =============================================================

// -- Calc 1: Limits --
'calc-limit-eval': () => {
    const a = randInt(1, 5), b = randInt(-3, 6);
    const c = randInt(1, 4);
    const ans = a * c + b;
    const bStr = b >= 0 ? `+ ${b}` : `− ${Math.abs(b)}`;
    return buildMC(`Evaluate: lim(x→${c}) <strong>${a}x ${bStr}</strong>`, ans, numDistractors(ans),
        `Substitute x = ${c}: ${a}(${c}) ${bStr} = <strong>${ans}</strong>`);
},
'calc-limit-concept': () => {
    const items = [
        { q: 'A limit describes what a function approaches as x approaches a value, even if:', a: 'The function is undefined there', w: ['The function equals zero','x is positive','The graph is a line'] },
        { q: 'If lim(x→a) f(x) ≠ f(a), the function has a:', a: 'Discontinuity at a', w: ['Maximum at a','Zero at a','Derivative at a'] },
        { q: 'lim(x→0) sin(x)/x =', a: '1', w: ['0','∞','undefined'] },
        { q: 'If left-hand and right-hand limits differ, the limit:', a: 'Does not exist', w: ['Equals zero','Equals infinity','Is the average'] },
    ];
    const item = pickRandom(items);
    const s = shuffle([item.a, ...item.w]);
    return { question: item.q, choices: s, correctIndex: s.indexOf(item.a), explanation: `<strong>${item.a}</strong>` };
},

// -- Calc 2: Definition of Derivative --
'calc-derivative-def': () => {
    const items = [
        { q: 'The derivative f\'(x) represents:', a: 'The instantaneous rate of change', w: ['The area under f','The average value','The y-intercept'] },
        { q: 'The derivative is defined as:', a: 'lim(h→0) [f(x+h) − f(x)] / h', w: ['f(x+1) − f(x)','f(x) / x','The integral of f'] },
        { q: 'At a point, the derivative gives the slope of the:', a: 'Tangent line', w: ['Secant line','Normal line','x-axis'] },
        { q: 'If f(x) = 5 (constant), then f\'(x) =', a: '0', w: ['5','1','undefined'] },
        { q: 'The derivative of position with respect to time is:', a: 'Velocity', w: ['Acceleration','Distance','Area'] },
    ];
    const item = pickRandom(items);
    const s = shuffle([item.a, ...item.w]);
    return { question: item.q, choices: s, correctIndex: s.indexOf(item.a), explanation: `<strong>${item.a}</strong>` };
},

// -- Calc 3: Differentiation Rules --
'calc-power-rule': () => {
    const n = randInt(2, 8);
    const coeff = randInt(1, 5);
    const newCoeff = coeff * n;
    const newExp = n - 1;
    const fStr = coeff === 1 ? `x<sup>${n}</sup>` : `${coeff}x<sup>${n}</sup>`;
    const ansStr = newExp === 1 ? `${newCoeff}x` : `${newCoeff}x<sup>${newExp}</sup>`;
    return buildMC(`Find d/dx [<strong>${fStr}</strong>]`, ansStr,
        [`${coeff}x<sup>${n + 1}</sup>`, `${n}x<sup>${newExp}</sup>`, `${coeff * (n + 1)}x<sup>${n}</sup>`],
        `Power rule: ${coeff}·${n}·x<sup>${n}−1</sup> = <strong>${ansStr}</strong>`);
},
'calc-diff-rules': () => {
    const items = [
        { q: 'd/dx [sin(x)] =', a: 'cos(x)', w: ['−cos(x)', 'sin(x)', '−sin(x)'] },
        { q: 'd/dx [cos(x)] =', a: '−sin(x)', w: ['sin(x)', 'cos(x)', '−cos(x)'] },
        { q: 'd/dx [eˣ] =', a: 'eˣ', w: ['xeˣ⁻¹', 'ln(x)', '1/x'] },
        { q: 'd/dx [ln(x)] =', a: '1/x', w: ['x', 'eˣ', 'ln(x)/x'] },
        { q: 'd/dx [x] =', a: '1', w: ['0', 'x', '2x'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Calc 4: Chain Rule --
'calc-chain-rule': () => {
    const items = [
        { q: 'd/dx [sin(3x)] =', a: '3cos(3x)', w: ['cos(3x)', '−3cos(3x)', '3sin(3x)'] },
        { q: 'd/dx [(2x+1)⁴] =', a: '8(2x+1)³', w: ['4(2x+1)³', '(2x+1)³', '2(2x+1)⁴'] },
        { q: 'd/dx [e²ˣ] =', a: '2e²ˣ', w: ['e²ˣ', '2xe²ˣ', 'e²'] },
        { q: 'd/dx [ln(5x)] =', a: '1/x', w: ['5/x', '1/(5x)', 'ln(5)'] },
        { q: 'd/dx [cos(x²)] =', a: '−2x·sin(x²)', w: ['−sin(x²)', '2x·cos(x²)', 'sin(x²)'] },
        { q: 'The chain rule states: d/dx [f(g(x))] =', a: "f'(g(x)) · g'(x)", w: ["f'(x) · g'(x)", "f(g'(x))", "f'(g(x))"] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `Chain rule: <strong>${item.a}</strong>`);
},

// -- Calc 5: Applications of Derivatives --
'calc-deriv-app': () => {
    const a = randInt(1, 3), b = randInt(-6, 6), c = randInt(-10, 10);
    const bStr = b >= 0 ? `+ ${b}` : `− ${Math.abs(b)}`;
    const cStr = c >= 0 ? `+ ${c}` : `− ${Math.abs(c)}`;
    const vertex_x = roundN(-b / (2 * a), 2);
    return buildMC(`f(x) = ${a}x² ${bStr}x ${cStr}. The critical point is at x = ?`,
        String(vertex_x), decDistractors(vertex_x, 0.5).map(String),
        `f'(x) = ${2*a}x ${bStr} = 0 → x = ${-b}/${2*a} = <strong>${vertex_x}</strong>`);
},
'calc-increasing-decreasing': () => {
    const items = [
        { q: 'f\'(x) > 0 on an interval means f is:', a: 'Increasing', w: ['Decreasing', 'Constant', 'Concave up'] },
        { q: 'f\'(x) < 0 on an interval means f is:', a: 'Decreasing', w: ['Increasing', 'Constant', 'Concave down'] },
        { q: 'f\'(x) = 0 at a point is a:', a: 'Critical point', w: ['Inflection point', 'Asymptote', 'Discontinuity'] },
        { q: 'f\'\'(x) > 0 means the graph is:', a: 'Concave up', w: ['Concave down', 'Increasing', 'Decreasing'] },
        { q: 'An inflection point occurs when:', a: 'f\'\'(x) changes sign', w: ['f\'(x) = 0', 'f(x) = 0', 'f\'(x) changes sign'] },
    ];
    const item = pickRandom(items);
    const s = shuffle([item.a, ...item.w]);
    return { question: item.q, choices: s, correctIndex: s.indexOf(item.a), explanation: `<strong>${item.a}</strong>` };
},

// -- Calc 6: Introduction to Integration --
'calc-antiderivative': () => {
    const n = randInt(1, 6);
    const newExp = n + 1;
    const ansStr = `x<sup>${newExp}</sup>/${newExp} + C`;
    return buildMC(`Find: ∫ <strong>x<sup>${n}</sup></strong> dx`, ansStr,
        [`x<sup>${n - 1}</sup>/${n - 1} + C`, `${n}x<sup>${n - 1}</sup> + C`, `x<sup>${newExp}</sup> + C`],
        `Power rule for integrals: x<sup>${n}+1</sup>/(${n}+1) + C = <strong>${ansStr}</strong>`);
},
'calc-integral-rules': () => {
    const items = [
        { q: '∫ cos(x) dx =', a: 'sin(x) + C', w: ['−sin(x) + C', 'cos(x) + C', '−cos(x) + C'] },
        { q: '∫ sin(x) dx =', a: '−cos(x) + C', w: ['cos(x) + C', 'sin(x) + C', '−sin(x) + C'] },
        { q: '∫ eˣ dx =', a: 'eˣ + C', w: ['xeˣ + C', 'ln(x) + C', 'eˣ⁺¹/(x+1) + C'] },
        { q: '∫ 1/x dx =', a: 'ln|x| + C', w: ['x⁻² + C', '−1/x² + C', 'eˣ + C'] },
        { q: '∫ 0 dx =', a: 'C', w: ['0', '1', 'x'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Calc 7: Fundamental Theorem --
'calc-ftc': () => {
    const a = randInt(0, 3), b = randInt(a + 1, a + 4);
    const n = randInt(2, 3);
    const F = x => Math.pow(x, n + 1) / (n + 1);
    const ans = roundN(F(b) - F(a));
    return buildMC(`Evaluate: ∫ from ${a} to ${b} of <strong>x<sup>${n}</sup></strong> dx`, String(ans),
        decDistractors(ans, 2).map(String),
        `F(x) = x<sup>${n + 1}</sup>/${n + 1}. F(${b}) − F(${a}) = <strong>${ans}</strong>`);
},
'calc-ftc-concept': () => {
    const items = [
        { q: 'The Fundamental Theorem of Calculus connects:', a: 'Differentiation and integration', w: ['Limits and continuity', 'Algebra and geometry', 'Probability and statistics'] },
        { q: 'A definite integral gives:', a: 'The net area under the curve', w: ['The derivative', 'The slope', 'The maximum value'] },
        { q: '∫ from a to a of f(x) dx =', a: '0', w: ['f(a)', '1', 'undefined'] },
        { q: '∫ from a to b of f(x) dx = −∫ from b to a of f(x) dx. This property is:', a: 'Reversing limits changes sign', w: ['Always zero','Only for constants','The chain rule'] },
    ];
    const item = pickRandom(items);
    const s = shuffle([item.a, ...item.w]);
    return { question: item.q, choices: s, correctIndex: s.indexOf(item.a), explanation: `<strong>${item.a}</strong>` };
},

// -- Calc 8: U-Substitution --
'calc-u-sub': () => {
    const items = [
        { q: '∫ 2x·cos(x²) dx: what is the best substitution?', a: 'u = x²', w: ['u = cos(x²)', 'u = 2x', 'u = x'] },
        { q: '∫ 3x²·eˣ³ dx: what is u?', a: 'u = x³', w: ['u = eˣ³', 'u = 3x²', 'u = x'] },
        { q: '∫ cos(x)/sin(x) dx: u = sin(x), then du =', a: 'cos(x) dx', w: ['sin(x) dx', '−cos(x) dx', '1/sin(x) dx'] },
        { q: 'After u-substitution, you must also convert:', a: 'dx into du', w: ['The answer back','The constant','Nothing else'] },
        { q: '∫ (2x+1)⁵ · 2 dx: with u = 2x+1, the integral becomes:', a: '∫ u⁵ du', w: ['∫ u⁵ · 2 du', '∫ 2u⁵ du', '∫ (2x+1)⁵ du'] },
    ];
    const item = pickRandom(items);
    const s = shuffle([item.a, ...item.w]);
    return { question: item.q, choices: s, correctIndex: s.indexOf(item.a), explanation: `<strong>${item.a}</strong>` };
},

// -- Calc 9: Area Between Curves --
'calc-area-between': () => {
    const a = randInt(0, 2), b = randInt(a + 1, a + 3);
    const m1 = randInt(1, 3), m2 = randInt(m1 + 1, m1 + 3);
    const area = roundN(0.5 * (m2 - m1) * (b - a) * (b - a), 2);
    return buildMC(`Area between f(x)=${m2}x and g(x)=${m1}x from x=${a} to x=${b}?`,
        String(area), decDistractors(area, 1.5).map(String),
        `∫(${m2}x − ${m1}x)dx from ${a} to ${b} = ∫${m2 - m1}x dx = <strong>${area}</strong>`);
},

// -- Calc 10: Applications of Integrals --
'calc-integral-app': () => {
    const items = [
        { q: 'The integral of velocity with respect to time gives:', a: 'Displacement', w: ['Acceleration', 'Speed', 'Force'] },
        { q: 'The integral of acceleration gives:', a: 'Velocity', w: ['Position', 'Displacement', 'Jerk'] },
        { q: 'To find total distance (not displacement), integrate:', a: '|v(t)|', w: ['v(t)', 'a(t)', 'v²(t)'] },
        { q: 'The average value of f on [a,b] is:', a: '(1/(b−a)) ∫ f(x) dx', w: ['f(a)+f(b)/2', '∫ f(x) dx', 'f((a+b)/2)'] },
        { q: 'Integrals can compute the volume of a solid of revolution using:', a: 'Disk or washer method', w: ['The chain rule','L\'Hôpital\'s rule','The product rule'] },
    ];
    const item = pickRandom(items);
    const s = shuffle([item.a, ...item.w]);
    return { question: item.q, choices: s, correctIndex: s.indexOf(item.a), explanation: `<strong>${item.a}</strong>` };
},

};

export { generators };
