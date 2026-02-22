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
    const base = randInt(2, 5), exp = randInt(2, 4);
    const ans = Math.pow(base, exp);
    return buildMC(
        `Evaluate: <strong>${base}<sup>${exp}</sup></strong>`,
        ans, numDistractors(ans, 10),
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
    ];
    const item = pickRandom(items);
    return { question: item.q, choices: shuffle([item.a, ...item.w]), correctIndex: 0, explanation: item.e,
        // fix correctIndex after shuffle
        ...(() => { const s = shuffle([item.a, ...item.w]); return { choices: s, correctIndex: s.indexOf(item.a) }; })()
    };
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
    const triples = [[3,4,5],[5,12,13],[6,8,10],[8,15,17],[9,12,15],[7,24,25]];
    const [a, b, c] = pickRandom(triples);
    return buildMC(
        `A right triangle has legs <strong>${a}</strong> and <strong>${b}</strong>. Find the hypotenuse.`,
        c, numDistractors(c),
        `c² = ${a}² + ${b}² = ${a*a} + ${b*b} = ${c*c}<br>c = √${c*c} = <strong>${c}</strong>`
    );
},
'find-leg': () => {
    const triples = [[3,4,5],[5,12,13],[6,8,10],[8,15,17]];
    const [a, b, c] = pickRandom(triples);
    return buildMC(
        `A right triangle has hypotenuse <strong>${c}</strong> and one leg <strong>${a}</strong>. Find the other leg.`,
        b, numDistractors(b),
        `b² = ${c}² − ${a}² = ${c*c} − ${a*a} = ${b*b}<br>b = √${b*b} = <strong>${b}</strong>`
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
    const s = randInt(2, 8);
    const ans = s * s * s;
    return buildMC(
        `Find the volume of a cube with side <strong>${s}</strong>.`,
        ans, numDistractors(ans, 15),
        `V = s³ = ${s}³ = <strong>${ans}</strong>`
    );
},
'cube-surface-area': () => {
    const s = randInt(2, 7);
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
        { deg: 90, rad: 'π/2' }, { deg: 180, rad: 'π' }, { deg: 360, rad: '2π' }
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
    const sinVal = pickRandom([0.3, 0.4, 0.5, 0.6, 0.8]);
    const cos2 = roundN(1 - sinVal * sinVal);
    return buildMC(
        `If sin(θ) = ${sinVal}, what is <strong>cos²(θ)</strong>?`,
        String(cos2), decDistractors(cos2, 0.1).map(String),
        `sin²θ + cos²θ = 1<br>cos²θ = 1 − (${sinVal})² = 1 − ${roundN(sinVal * sinVal)} = <strong>${cos2}</strong>`
    );
},

// -- Trig 8: Inverse Trig --
'inverse-trig-eval': () => {
    const items = [
        { func: 'arcsin', val: '0.5', ans: '30°', w: ['45°', '60°', '90°'] },
        { func: 'arcsin', val: '1', ans: '90°', w: ['0°', '45°', '180°'] },
        { func: 'arccos', val: '0.5', ans: '60°', w: ['30°', '45°', '90°'] },
        { func: 'arccos', val: '0', ans: '90°', w: ['0°', '45°', '180°'] },
        { func: 'arctan', val: '1', ans: '45°', w: ['30°', '60°', '90°'] },
        { func: 'arctan', val: '0', ans: '0°', w: ['45°', '90°', '30°'] },
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
    const types = [
        { sides: [5,5,5], ans: 'Equilateral', w: ['Isosceles','Scalene','Right'] },
        { sides: [5,5,8], ans: 'Isosceles', w: ['Equilateral','Scalene','Right'] },
        { sides: [3,5,7], ans: 'Scalene', w: ['Equilateral','Isosceles','Right'] },
    ];
    const t = pickRandom(types);
    return buildMC(`A triangle has sides <strong>${t.sides[0]}, ${t.sides[1]}, ${t.sides[2]}</strong>. Classify it.`,
        t.ans, t.w, `${t.ans === 'Equilateral' ? 'All sides equal' : t.ans === 'Isosceles' ? 'Two sides equal' : 'No sides equal'} → <strong>${t.ans}</strong>`);
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
    const r = randInt(2,6);
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
    ];
    const id = pickRandom(ids);
    return buildMC(`Complete: <strong>${id.q}</strong>`, id.ans, id.w, `<strong>${id.q} ${id.ans}</strong>`);
},
'trig-double-angle': () => {
    const items = [
        { q: 'sin(2θ) =', ans: '2 sin θ cos θ', w: ['sin²θ + cos²θ', '2 cos²θ − 1', 'sin θ + cos θ'] },
        { q: 'cos(2θ) =', ans: 'cos²θ − sin²θ', w: ['2 sin θ cos θ', 'sin²θ + cos²θ', '2 sin²θ − 1'] },
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

};

export { generators };