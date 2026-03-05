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
    const mStr = Number.isInteger(m) ? String(m) : m.toFixed(2);
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

// -- Algebra 11: Order of Operations (PEMDAS) --
'pemdas-eval': () => {
    const a = randInt(2, 6), b = randInt(1, 5), c = randInt(1, 8);
    const ans = a * b + c;
    return buildMC(
        `Evaluate: <strong>${a} × ${b} + ${c}</strong>`,
        ans, numDistractors(ans),
        `Multiply first: ${a} × ${b} = ${a*b}, then add: ${a*b} + ${c} = <strong>${ans}</strong>`
    );
},
'pemdas-parens': () => {
    const a = randInt(2, 5), b = randInt(1, 6), c = randInt(1, 4);
    const ans = a * (b + c);
    return buildMC(
        `Evaluate: <strong>${a} × (${b} + ${c})</strong>`,
        ans, [a * b + c, a + b * c, a * b * c],
        `Parentheses first: ${b} + ${c} = ${b+c}. Then ${a} × ${b+c} = <strong>${ans}</strong>`
    );
},

// -- Algebra 12: Distributive Property --
'distributive-expand': () => {
    const a = randInt(2, 7), b = randInt(1, 8), c = randInt(1, 9);
    const p1 = a * b, p2 = a * c;
    return buildMC(
        `Expand: <strong>${a}(${b}x + ${c})</strong>`,
        `${p1}x + ${p2}`,
        [`${a+b}x + ${c}`, `${p1}x + ${c}`, `${a}x + ${p2}`],
        `${a} × ${b}x = ${p1}x and ${a} × ${c} = ${p2} → <strong>${p1}x + ${p2}</strong>`
    );
},
'distributive-neg': () => {
    const a = randInt(2, 6), b = randInt(1, 7), c = randInt(1, 8);
    const p1 = -a * b, p2 = -a * c;
    return buildMC(
        `Expand: <strong>−${a}(${b}x + ${c})</strong>`,
        `${p1}x − ${Math.abs(p2)}`,
        [`${Math.abs(p1)}x + ${Math.abs(p2)}`, `${p1}x + ${Math.abs(p2)}`, `−${a}x − ${c}`],
        `−${a} × ${b}x = ${p1}x and −${a} × ${c} = ${p2} → <strong>${p1}x − ${Math.abs(p2)}</strong>`
    );
},

// -- Algebra 13: Combining Like Terms --
'combine-like-terms-full': () => {
    const a = randInt(2, 8), b = randInt(1, 7), c = randInt(1, 9), d = randInt(1, 6);
    const xCoeff = a + b, constant = c + d;
    return buildMC(
        `Simplify: <strong>${a}x + ${c} + ${b}x + ${d}</strong>`,
        `${xCoeff}x + ${constant}`,
        [`${a+c}x + ${b+d}`, `${a*b}x + ${c*d}`, `${xCoeff}x + ${c}`],
        `Combine x terms: ${a}x + ${b}x = ${xCoeff}x. Constants: ${c} + ${d} = ${constant}. → <strong>${xCoeff}x + ${constant}</strong>`
    );
},
'identify-like-terms': () => {
    const items = [
        { q: 'Which are like terms?', a: '3x and 7x', w: ['3x and 3y', '3x and 3', 'x² and x'] },
        { q: 'Which are like terms?', a: '5x² and −2x²', w: ['5x² and 5x', '5x and 5', 'x² and x³'] },
        { q: 'Which pair can be combined?', a: '4ab and −ab', w: ['4a and 4b', 'ab and a²b', '4ab and 4a'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `Like terms have the same variable(s) with the same exponent(s): <strong>${item.a}</strong>`);
},

// -- Algebra 14: Multi-Step Equations --
'multi-step-eq': () => {
    const x = randInt(1, 8), a = randInt(2, 5), b = randInt(1, 6), c = randInt(1, 5);
    const rhs = a * x + b - c;
    return buildMC(
        `Solve: <strong>${a}x + ${b} − ${c} = ${rhs}</strong>`,
        `x = ${x}`, [`x = ${x+1}`, `x = ${x-1}`, `x = ${x+2}`],
        `Simplify left: ${a}x + ${b-c} = ${rhs} → ${a}x = ${rhs-(b-c)} → x = <strong>${x}</strong>`
    );
},
'vars-both-sides': () => {
    const x = randInt(1, 7), a = randInt(3, 7), b = randInt(1, 5), c = randInt(1, a-1);
    const rhs = (a - c) * x + b;
    return buildMC(
        `Solve: <strong>${a}x = ${c}x + ${rhs - c*x}</strong>`,
        `x = ${x}`, [`x = ${x+1}`, `x = ${x-1}`, `x = ${x*2}`],
        `Subtract ${c}x: ${a-c}x = ${rhs - c*x} → x = <strong>${x}</strong>`
    );
},

// -- Algebra 15: Absolute Value --
'absolute-value-eval': () => {
    const n = randInt(-15, -1);
    return buildMC(
        `Evaluate: <strong>|${n}|</strong>`,
        Math.abs(n), [n, n - 1, -(Math.abs(n) + 1)],
        `The absolute value removes the negative: |${n}| = <strong>${Math.abs(n)}</strong>`
    );
},
'absolute-value-eq': () => {
    const a = randInt(1, 10);
    return buildMC(
        `How many solutions does <strong>|x| = ${a}</strong> have?`,
        '2', ['0', '1', 'Infinite'],
        `|x| = ${a} gives x = ${a} or x = −${a} → <strong>2 solutions</strong>`
    );
},

// -- Algebra 16: Proportions & Ratios --
'solve-proportion': () => {
    const a = randInt(2, 8), b = randInt(2, 8), c = randInt(2, 6);
    const d = (b * c) / a;
    if (!Number.isInteger(d) || d <= 0) return generators['solve-proportion']();
    return buildMC(
        `Solve: <strong>${a}/${b} = ${c}/x</strong>`,
        `x = ${d}`, [`x = ${d+1}`, `x = ${d-1}`, `x = ${a*c}`],
        `Cross multiply: ${a}x = ${b} × ${c} = ${b*c} → x = <strong>${d}</strong>`
    );
},
'ratio-simplify': () => {
    const g = randInt(2, 6), a = randInt(1, 5), b = randInt(1, 5);
    if (a === b) return generators['ratio-simplify']();
    return buildMC(
        `Simplify the ratio: <strong>${g*a} : ${g*b}</strong>`,
        `${a} : ${b}`, [`${g*a} : ${b}`, `${a} : ${g*b}`, `${g} : ${g}`],
        `Divide both by GCF (${g}): ${g*a}/${g} : ${g*b}/${g} = <strong>${a} : ${b}</strong>`
    );
},

// -- Algebra 17: Percent Problems --
'percent-of-number': () => {
    const p = pickRandom([10, 15, 20, 25, 30, 40, 50, 75]);
    const n = randInt(2, 20) * 10;
    const ans = p * n / 100;
    return buildMC(
        `What is <strong>${p}%</strong> of <strong>${n}</strong>?`,
        ans, numDistractors(ans, 5),
        `${p}% × ${n} = ${p/100} × ${n} = <strong>${ans}</strong>`
    );
},
'percent-change': () => {
    const old = randInt(4, 20) * 5;
    const newVal = old + pickRandom([1, 2, 3, 4, 5]) * (old / 10);
    const change = roundN(((newVal - old) / old) * 100);
    return buildMC(
        `A price went from <strong>$${old}</strong> to <strong>$${newVal}</strong>. What is the percent increase?`,
        `${change}%`, [`${change + 10}%`, `${change - 10}%`, `${roundN(newVal/old * 100)}%`],
        `Change = ${newVal} − ${old} = ${newVal - old}. (${newVal - old}/${old}) × 100 = <strong>${change}%</strong>`
    );
},

// -- Algebra 18: Literal Equations --
'solve-for-variable': () => {
    const items = [
        { eq: 'A = lw', target: 'w', ans: 'w = A/l', w: ['w = Al', 'w = A − l', 'w = l/A'] },
        { eq: 'd = rt', target: 't', ans: 't = d/r', w: ['t = dr', 't = d − r', 't = r/d'] },
        { eq: 'P = 2l + 2w', target: 'l', ans: 'l = (P − 2w)/2', w: ['l = P − 2w', 'l = P/2 − w', 'l = (P + 2w)/2'] },
        { eq: 'V = lwh', target: 'h', ans: 'h = V/(lw)', w: ['h = Vlw', 'h = V − lw', 'h = lw/V'] },
    ];
    const item = pickRandom(items);
    return buildMC(`Given <strong>${item.eq}</strong>, solve for <strong>${item.target}</strong>.`,
        item.ans, item.w, `Isolate ${item.target}: <strong>${item.ans}</strong>`);
},
'rearrange-formula': () => {
    const items = [
        { eq: 'y = mx + b', target: 'x', ans: 'x = (y − b)/m', w: ['x = y − b', 'x = ym − b', 'x = y/m + b'] },
        { eq: 'C = 2πr', target: 'r', ans: 'r = C/(2π)', w: ['r = 2πC', 'r = C − 2π', 'r = C/π'] },
        { eq: 'F = ma', target: 'a', ans: 'a = F/m', w: ['a = Fm', 'a = F − m', 'a = m/F'] },
    ];
    const item = pickRandom(items);
    return buildMC(`Rearrange <strong>${item.eq}</strong> to solve for <strong>${item.target}</strong>.`,
        item.ans, item.w, `<strong>${item.ans}</strong>`);
},

// -- Algebra 19: Compound Inequalities --
'compound-and': () => {
    const a = randInt(-3, 3), b = randInt(a + 2, a + 8);
    return buildMC(
        `Which graph shows <strong>${a} < x < ${b}</strong>?`,
        `Open dots at ${a} and ${b}, shaded between`,
        [`Closed dots at ${a} and ${b}, shaded between`, `Open dot at ${a}, arrow right`, `Arrows going outward from ${a} and ${b}`],
        `Strict inequality means open dots; "and" means <strong>shaded between</strong> the two values.`
    );
},
'compound-or': () => {
    const items = [
        { q: 'Solve: x < −2 OR x > 5. Which values work?', a: 'x = −3 and x = 7', w: ['x = 0', 'x = 3', 'x = −1 and x = 4'] },
        { q: 'x ≤ 1 OR x ≥ 6 means the solution is:', a: 'Two separate regions', w: ['One connected region', 'A single point', 'No solution'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `"OR" means values in <strong>either</strong> region work. <strong>${item.a}</strong>`);
},

// -- Algebra 20: Polynomial Addition/Subtraction --
'add-polynomials': () => {
    const a = randInt(2, 5), b = randInt(1, 6), c = randInt(1, 4), d = randInt(1, 7);
    const rA = a + c, rB = b + d;
    return buildMC(
        `Add: <strong>(${a}x + ${b}) + (${c}x + ${d})</strong>`,
        `${rA}x + ${rB}`, [`${a*c}x + ${b*d}`, `${rA}x + ${b}`, `${a}x + ${rB}`],
        `Combine like terms: (${a}+${c})x + (${b}+${d}) = <strong>${rA}x + ${rB}</strong>`
    );
},
'subtract-polynomials': () => {
    const a = randInt(4, 9), b = randInt(3, 8), c = randInt(1, a-1), d = randInt(1, b-1);
    const rA = a - c, rB = b - d;
    return buildMC(
        `Subtract: <strong>(${a}x + ${b}) − (${c}x + ${d})</strong>`,
        `${rA}x + ${rB}`, [`${a+c}x + ${b+d}`, `${rA}x − ${rB}`, `${a}x + ${rB}`],
        `Distribute the negative: ${a}x + ${b} − ${c}x − ${d} = <strong>${rA}x + ${rB}</strong>`
    );
},

// -- Algebra 21: Polynomial Multiplication --
'multiply-binomials': () => {
    const a = randInt(1, 5), b = randInt(1, 5);
    const ans = `x² + ${a+b}x + ${a*b}`;
    return buildMC(
        `Expand: <strong>(x + ${a})(x + ${b})</strong>`,
        ans,
        [`x² + ${a*b}x + ${a+b}`, `x² + ${a}x + ${b}`, `x + ${a+b}`],
        `FOIL: x² + ${b}x + ${a}x + ${a*b} = <strong>${ans}</strong>`
    );
},
'foil-method': () => {
    const a = randInt(2, 4), b = randInt(1, 5);
    const ans = `${a}x² + ${a*b + b}x + ${b*b}`;
    const mid = a * b + b;
    return buildMC(
        `Expand: <strong>(${a}x + ${b})(x + ${b})</strong>`,
        `${a}x² + ${mid}x + ${b*b}`,
        [`${a}x² + ${a*b}x + ${b}`, `${a}x² + ${b*b}`, `${a+1}x² + ${mid}x + ${b}`],
        `FOIL: ${a}x·x + ${a}x·${b} + ${b}·x + ${b}·${b} = <strong>${a}x² + ${mid}x + ${b*b}</strong>`
    );
},

// -- Algebra 22: Completing the Square --
'complete-square': () => {
    const b = randInt(1, 6) * 2;
    const half = b / 2;
    const sq = half * half;
    return buildMC(
        `To complete the square for x² + ${b}x, what number must be added?`,
        sq, numDistractors(sq),
        `(b/2)² = (${b}/2)² = ${half}² = <strong>${sq}</strong>`
    );
},
'vertex-from-standard': () => {
    const h = randInt(-4, 4), k = randInt(-5, 5);
    const b = -2 * h, c = h * h + k;
    const bStr = b >= 0 ? `+ ${b}` : `− ${Math.abs(b)}`;
    const cStr = c >= 0 ? `+ ${c}` : `− ${Math.abs(c)}`;
    return buildMC(
        `Find the vertex of <strong>y = x² ${bStr}x ${cStr}</strong>.`,
        `(${h}, ${k})`, [`(${-h}, ${k})`, `(${h}, ${-k})`, `(${b}, ${c})`],
        `x = −b/(2a) = ${-b}/2 = ${h}. y = (${h})² ${bStr}(${h}) ${cStr} = ${k}. Vertex: <strong>(${h}, ${k})</strong>`
    );
},

// -- Algebra 23: Radical Expressions --
'simplify-radical': () => {
    const n = pickRandom([4, 9, 16, 25, 36, 49, 64]);
    const root = Math.sqrt(n);
    return buildMC(
        `Simplify: <strong>√${n}</strong>`,
        root, numDistractors(root),
        `√${n} = <strong>${root}</strong> because ${root}² = ${n}`
    );
},
'add-radicals': () => {
    const a = randInt(2, 5), b = randInt(1, 4);
    const ans = a + b;
    return buildMC(
        `Simplify: <strong>${a}√3 + ${b}√3</strong>`,
        `${ans}√3`, [`${a*b}√3`, `${ans}√6`, `${a}√3`],
        `Like radicals: (${a} + ${b})√3 = <strong>${ans}√3</strong>`
    );
},

// -- Algebra 24: Scientific Notation --
'to-scientific': () => {
    const sig = randInt(1, 9), exp = randInt(3, 7);
    const num = sig * Math.pow(10, exp);
    return buildMC(
        `Write <strong>${num.toLocaleString()}</strong> in scientific notation.`,
        `${sig} × 10^${exp}`,
        [`${sig} × 10^${exp-1}`, `${sig} × 10^${exp+1}`, `${sig*10} × 10^${exp-1}`],
        `Move the decimal ${exp} places left: <strong>${sig} × 10^${exp}</strong>`
    );
},
'from-scientific': () => {
    const sig = randInt(1, 9), exp = randInt(2, 5);
    const ans = sig * Math.pow(10, exp);
    return buildMC(
        `Convert: <strong>${sig} × 10<sup>${exp}</sup></strong> to standard form.`,
        ans.toLocaleString(), numDistractors(ans, ans / 2).map(v => Math.abs(v).toLocaleString()),
        `Move decimal ${exp} places right: <strong>${ans.toLocaleString()}</strong>`
    );
},

// -- Algebra 25: Arithmetic Sequences --
'nth-term-arithmetic': () => {
    const a1 = randInt(1, 10), d = randInt(2, 6), n = randInt(5, 12);
    const ans = a1 + (n - 1) * d;
    return buildMC(
        `Find the ${n}th term: first term = ${a1}, common difference = ${d}.`,
        ans, numDistractors(ans, 5),
        `aₙ = a₁ + (n−1)d = ${a1} + ${n-1}(${d}) = ${a1} + ${(n-1)*d} = <strong>${ans}</strong>`
    );
},
'arithmetic-common-diff': () => {
    const a1 = randInt(1, 10), d = randInt(2, 7);
    const a2 = a1 + d, a3 = a1 + 2*d;
    return buildMC(
        `Sequence: ${a1}, ${a2}, ${a3}, ... What is the common difference?`,
        d, numDistractors(d),
        `d = ${a2} − ${a1} = <strong>${d}</strong>`
    );
},

// -- Algebra 26: Word Problems --
'translate-to-equation': () => {
    const items = [
        { q: '"A number doubled plus 5 equals 17" translates to:', a: '2x + 5 = 17', w: ['x + 5 = 17', '2x − 5 = 17', '2(x + 5) = 17'] },
        { q: '"Three less than four times a number is 25" translates to:', a: '4x − 3 = 25', w: ['3 − 4x = 25', '4x + 3 = 25', '3(4x) = 25'] },
        { q: '"Half a number increased by 7 is 15" translates to:', a: 'x/2 + 7 = 15', w: ['x + 7/2 = 15', '2x + 7 = 15', '(x + 7)/2 = 15'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},
'word-problem-solve': () => {
    const price = randInt(3, 12), qty = randInt(2, 8), total = price * qty;
    return buildMC(
        `${qty} identical items cost $${total}. What is the price of one item?`,
        `$${price}`, [`$${price + 1}`, `$${price - 1}`, `$${total}`],
        `${total} ÷ ${qty} = <strong>$${price}</strong>`
    );
},

// -- Algebra 27: Logarithms Intro --
'log-eval': () => {
    const pairs = [
        { base: 2, arg: 8, ans: 3 }, { base: 2, arg: 16, ans: 4 }, { base: 2, arg: 32, ans: 5 },
        { base: 3, arg: 9, ans: 2 }, { base: 3, arg: 27, ans: 3 }, { base: 5, arg: 25, ans: 2 },
        { base: 10, arg: 100, ans: 2 }, { base: 10, arg: 1000, ans: 3 },
    ];
    const p = pickRandom(pairs);
    return buildMC(
        `Evaluate: <strong>log<sub>${p.base}</sub>(${p.arg})</strong>`,
        p.ans, numDistractors(p.ans),
        `${p.base}<sup>${p.ans}</sup> = ${p.arg} → log<sub>${p.base}</sub>(${p.arg}) = <strong>${p.ans}</strong>`
    );
},
'log-properties': () => {
    const items = [
        { q: 'log(ab) = ?', a: 'log a + log b', w: ['log a × log b', 'log a − log b', 'a log b'] },
        { q: 'log(a/b) = ?', a: 'log a − log b', w: ['log a + log b', 'log a / log b', '(log a)(log b)'] },
        { q: 'log(aⁿ) = ?', a: 'n log a', w: ['log(na)', 'a log n', 'log a + n'] },
        { q: 'log_b(b) always equals?', a: '1', w: ['0', 'b', 'undefined'] },
        { q: 'log_b(1) always equals?', a: '0', w: ['1', 'b', 'undefined'] },
    ];
    const item = pickRandom(items);
    return buildMC(`Complete: <strong>${item.q}</strong>`, item.a, item.w, `<strong>${item.a}</strong>`);
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
    return buildMC(`Two angles are supplementary. One is <strong>${a}°</strong>. What is the other?`,
        `${ans}°`, [`${ans + 10}°`, `${ans - 10}°`, `${180 + a}°`],
        `Supplementary angles add to 180°: 180 − ${a} = <strong>${ans}°</strong>`);
},
'complementary-angle': () => {
    const a = randInt(10, 80);
    const ans = 90 - a;
    return buildMC(`Two angles are complementary. One is <strong>${a}°</strong>. What is the other?`,
        `${ans}°`, [`${ans + 5}°`, `${ans - 5}°`, `${180 - a}°`],
        `Complementary angles add to 90°: 90 − ${a} = <strong>${ans}°</strong>`);
},

// -- Geometry 3: Triangles --
'triangle-missing-angle': () => {
    const a = randInt(25, 80), b = randInt(25, 90);
    const c = 180 - a - b;
    if (c <= 0) return generators['triangle-missing-angle']();
    return buildMC(`A triangle has angles <strong>${a}°</strong> and <strong>${b}°</strong>. What is the third?`,
        `${c}°`, [`${c + 10}°`, `${c - 10}°`, `${180 - a}°`],
        `180° − ${a}° − ${b}° = <strong>${c}°</strong>`);
},

// -- Geometry 4: Quadrilaterals --
'quad-missing-angle': () => {
    const a = randInt(60, 120), b = randInt(60, 120), c = randInt(50, 110);
    const d = 360 - a - b - c;
    if (d <= 0 || d >= 180) return generators['quad-missing-angle']();
    return buildMC(`A quadrilateral has angles ${a}°, ${b}°, and ${c}°. Find the fourth angle.`,
        `${d}°`, [`${d + 10}°`, `${d - 10}°`, `${360 - a}°`],
        `360° − ${a}° − ${b}° − ${c}° = <strong>${d}°</strong>`);
},

// -- Geometry 5: Circles --
'circle-area': () => {
    const r = randInt(2, 10);
    const ans = roundN(Math.PI * r * r);
    return buildMC(`Find the area of a circle with radius <strong>${r}</strong>. (Round to 2 decimals)`,
        String(ans), decDistractors(ans, 5).map(String),
        `A = πr² = π(${r})² = ${r * r}π ≈ <strong>${ans}</strong>`);
},
'circle-circumference': () => {
    const r = randInt(2, 10);
    const ans = roundN(2 * Math.PI * r);
    return buildMC(`Find the circumference of a circle with radius <strong>${r}</strong>. (Round to 2 decimals)`,
        String(ans), decDistractors(ans, 3).map(String),
        `C = 2πr = 2π(${r}) ≈ <strong>${ans}</strong>`);
},

// -- Geometry 6: Perimeter & Area --
'rectangle-area': () => {
    const l = randInt(3, 15), w = randInt(3, 15);
    const ans = l * w;
    return buildMC(`Find the area of a rectangle: <strong>length = ${l}, width = ${w}</strong>.`,
        ans, numDistractors(ans, 10),
        `Area = l × w = ${l} × ${w} = <strong>${ans}</strong>`);
},
'triangle-area': () => {
    const b = randInt(4, 16), h = randInt(3, 14);
    const ans = (b * h) / 2;
    const ansStr = Number.isInteger(ans) ? String(ans) : ans.toFixed(1);
    return buildMC(`Find the area of a triangle: <strong>base = ${b}, height = ${h}</strong>.`,
        ansStr, numDistractors(ans).map(String),
        `A = ½ × b × h = ½ × ${b} × ${h} = <strong>${ans}</strong>`);
},

// -- Geometry 7: Pythagorean Theorem --
'find-hypotenuse': () => {
    const triples = [[3,4,5],[5,12,13],[6,8,10],[8,15,17],[9,12,15],[7,24,25],[9,40,41],[11,60,61],[20,21,29],[12,35,37]];
    const [a, b, c] = pickRandom(triples);
    const k = pickRandom([1, 2, 3]);
    const A = a*k, B = b*k, C = c*k;
    return buildMC(`A right triangle has legs <strong>${A}</strong> and <strong>${B}</strong>. Find the hypotenuse.`,
        C, numDistractors(C, 3),
        `c² = ${A}² + ${B}² = ${A*A} + ${B*B} = ${C*C}<br>c = √${C*C} = <strong>${C}</strong>`);
},
'find-leg': () => {
    const triples = [[3,4,5],[5,12,13],[6,8,10],[8,15,17],[9,12,15],[7,24,25],[9,40,41],[20,21,29]];
    const [a, b, c] = pickRandom(triples);
    const k = pickRandom([1, 2]);
    const A = a*k, B = b*k, C = c*k;
    const whichLeg = pickRandom(['a','b']);
    const known = whichLeg === 'a' ? A : B;
    const unknown = whichLeg === 'a' ? B : A;
    return buildMC(`A right triangle has hypotenuse <strong>${C}</strong> and one leg <strong>${known}</strong>. Find the other leg.`,
        unknown, numDistractors(unknown, 3),
        `b² = ${C}² − ${known}² = ${C*C} − ${known*known} = ${unknown*unknown}<br>b = √${unknown*unknown} = <strong>${unknown}</strong>`);
},

// -- Geometry 8: Similarity --
'scale-factor': () => {
    const k = randInt(2, 5), side = randInt(3, 12);
    const ans = side * k;
    return buildMC(`Two similar triangles have scale factor <strong>${k}:1</strong>. If the smaller has side ${side}, find the larger side.`,
        ans, numDistractors(ans), `${side} × ${k} = <strong>${ans}</strong>`);
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

// -- Geometry 9: Volume & Surface Area --
'cube-volume': () => {
    const s = randInt(2, 12);
    const ans = s * s * s;
    return buildMC(`Find the volume of a cube with side <strong>${s}</strong>.`,
        ans, numDistractors(ans, 15), `V = s³ = ${s}³ = <strong>${ans}</strong>`);
},
'cube-surface-area': () => {
    const s = randInt(2, 12);
    const ans = 6 * s * s;
    return buildMC(`Find the surface area of a cube with side <strong>${s}</strong>.`,
        ans, numDistractors(ans, 10), `SA = 6s² = 6 × ${s}² = 6 × ${s * s} = <strong>${ans}</strong>`);
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
    return buildMC(`Translate <strong>(${x}, ${y})</strong> by <strong>${dir.label}</strong>.`,
        ans, [`(${dir.nx + 1}, ${dir.ny})`, `(${x}, ${dir.ny})`, `(${dir.nx}, ${y})`],
        `Apply the translation to each coordinate → <strong>${ans}</strong>`);
},
'identify-transformation': () => {
    const items = [
        { q: 'Which transformation changes the <strong>size</strong> of a figure?', a: 'Dilation', w: ['Translation', 'Reflection', 'Rotation'] },
        { q: 'Which transformation <strong>flips</strong> a figure over a line?', a: 'Reflection', w: ['Translation', 'Dilation', 'Rotation'] },
        { q: 'Which transformation <strong>slides</strong> every point the same distance?', a: 'Translation', w: ['Reflection', 'Dilation', 'Rotation'] },
        { q: 'Which transformation <strong>turns</strong> a figure around a fixed point?', a: 'Rotation', w: ['Translation', 'Reflection', 'Dilation'] },
        { q: 'Which is NOT a rigid transformation (does not preserve size)?', a: 'Dilation', w: ['Translation', 'Reflection', 'Rotation'] },
    ];
    const item = pickRandom(items);
    const s = shuffle([item.a, ...item.w]);
    return { question: item.q, choices: s, correctIndex: s.indexOf(item.a), explanation: `The answer is <strong>${item.a}</strong>.` };
},

// -- Geometry 11: Parallel Lines & Transversals --
'transversal-angles': () => {
    const angle = randInt(40, 140);
    const alt = angle;
    const coInt = 180 - angle;
    const type = pickRandom(['alternate interior', 'co-interior (same-side)']);
    if (type === 'alternate interior') {
        return buildMC(`A transversal crosses parallel lines. One alternate interior angle is ${angle}°. The other is:`,
            `${alt}°`, [`${coInt}°`, `${angle + 10}°`, `${angle - 10}°`],
            `Alternate interior angles are <strong>equal</strong>: <strong>${alt}°</strong>`);
    }
    return buildMC(`A transversal crosses parallel lines. One co-interior angle is ${angle}°. The other is:`,
        `${coInt}°`, [`${angle}°`, `${angle + 10}°`, `${360 - angle}°`],
        `Co-interior (same-side) angles are <strong>supplementary</strong>: 180 − ${angle} = <strong>${coInt}°</strong>`);
},
'angle-relationship-name': () => {
    const items = [
        { q: 'Angles on opposite sides of the transversal, between the parallel lines:', a: 'Alternate interior', w: ['Corresponding', 'Co-interior', 'Alternate exterior'] },
        { q: 'Angles in the same position at each intersection:', a: 'Corresponding', w: ['Alternate interior', 'Co-interior', 'Vertical'] },
        { q: 'Angles on the same side of the transversal, between the parallel lines:', a: 'Co-interior (same-side interior)', w: ['Alternate interior', 'Corresponding', 'Alternate exterior'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Geometry 12: Polygon Angles --
'interior-angle-sum': () => {
    const n = randInt(5, 10);
    const ans = (n - 2) * 180;
    return buildMC(`What is the sum of interior angles of a <strong>${n}-sided</strong> polygon?`,
        `${ans}°`, [`${n * 180}°`, `${(n-1)*180}°`, `${(n-3)*180}°`],
        `(n − 2) × 180 = (${n} − 2) × 180 = <strong>${ans}°</strong>`);
},
'exterior-angle-regular': () => {
    const n = pickRandom([3, 4, 5, 6, 8, 9, 10, 12]);
    const ans = 360 / n;
    return buildMC(`Each exterior angle of a regular <strong>${n}-gon</strong>?`,
        `${ans}°`, [`${180/n}°`, `${(n-2)*180/n}°`, `${360/(n-1)}°`],
        `Exterior angles sum to 360°: 360/${n} = <strong>${ans}°</strong>`);
},

// -- Geometry 13: Coordinate Distance & Midpoint --
'distance-formula': () => {
    const x1 = randInt(0, 5), y1 = randInt(0, 5), x2 = x1 + randInt(3, 6), y2 = y1 + randInt(3, 6);
    const d = roundN(Math.sqrt((x2-x1)**2 + (y2-y1)**2));
    return buildMC(`Distance between <strong>(${x1},${y1})</strong> and <strong>(${x2},${y2})</strong>? (Round to 2 decimals)`,
        String(d), decDistractors(d, 1).map(String),
        `d = √((${x2}−${x1})² + (${y2}−${y1})²) = √(${(x2-x1)**2} + ${(y2-y1)**2}) ≈ <strong>${d}</strong>`);
},
'midpoint-formula': () => {
    const x1 = randInt(0, 8), y1 = randInt(0, 8), x2 = randInt(0, 8), y2 = randInt(0, 8);
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    const mxStr = Number.isInteger(mx) ? String(mx) : mx.toFixed(1);
    const myStr = Number.isInteger(my) ? String(my) : my.toFixed(1);
    return buildMC(`Midpoint of <strong>(${x1},${y1})</strong> and <strong>(${x2},${y2})</strong>?`,
        `(${mxStr}, ${myStr})`,
        [`(${x1+x2}, ${y1+y2})`, `(${mxStr}, ${y1})`, `(${x1}, ${myStr})`],
        `M = ((${x1}+${x2})/2, (${y1}+${y2})/2) = <strong>(${mxStr}, ${myStr})</strong>`);
},

// -- Geometry 14: Arc Length & Sector Area --
'arc-length-calc': () => {
    const r = randInt(3, 10), deg = pickRandom([60, 90, 120, 180, 270]);
    const ans = roundN((deg / 360) * 2 * Math.PI * r);
    return buildMC(`Arc length: r = ${r}, central angle = ${deg}°. (Round to 2 decimals)`,
        String(ans), decDistractors(ans, 2).map(String),
        `L = (θ/360) × 2πr = (${deg}/360) × 2π(${r}) ≈ <strong>${ans}</strong>`);
},
'sector-area-calc': () => {
    const r = randInt(3, 8), deg = pickRandom([60, 90, 120, 180]);
    const ans = roundN((deg / 360) * Math.PI * r * r);
    return buildMC(`Sector area: r = ${r}, central angle = ${deg}°. (Round to 2 decimals)`,
        String(ans), decDistractors(ans, 3).map(String),
        `A = (θ/360) × πr² = (${deg}/360) × π(${r})² ≈ <strong>${ans}</strong>`);
},

// -- Geometry 15: Composite Shapes --
'composite-area': () => {
    const l = randInt(6, 12), w = randInt(4, 8), r = randInt(2, Math.min(w, 4));
    const rectA = l * w;
    const semiA = roundN(0.5 * Math.PI * r * r);
    const total = roundN(rectA + semiA);
    return buildMC(`A ${l}×${w} rectangle has a semicircle (r=${r}) attached. Total area? (Round to 2 decimals)`,
        String(total), decDistractors(total, 5).map(String),
        `Rectangle: ${rectA}. Semicircle: ½π(${r})² ≈ ${semiA}. Total ≈ <strong>${total}</strong>`);
},
'shaded-region-area': () => {
    const R = randInt(5, 10), r = randInt(2, R - 2);
    const ans = roundN(Math.PI * (R * R - r * r));
    return buildMC(`A circle (R=${R}) has a hole (r=${r}). Shaded area? (Round to 2 decimals)`,
        String(ans), decDistractors(ans, 10).map(String),
        `A = π(R² − r²) = π(${R*R} − ${r*r}) = π(${R*R - r*r}) ≈ <strong>${ans}</strong>`);
},

// -- Geometry 16: Surface Area (Cylinders/Spheres) --
'cylinder-surface-area': () => {
    const r = randInt(2, 6), h = randInt(3, 10);
    const ans = roundN(2 * Math.PI * r * r + 2 * Math.PI * r * h);
    return buildMC(`Surface area of a cylinder: r = ${r}, h = ${h}. (Round to 2 decimals)`,
        String(ans), decDistractors(ans, 15).map(String),
        `SA = 2πr² + 2πrh = 2π(${r})² + 2π(${r})(${h}) ≈ <strong>${ans}</strong>`);
},
'sphere-surface-area': () => {
    const r = randInt(2, 8);
    const ans = roundN(4 * Math.PI * r * r);
    return buildMC(`Surface area of a sphere: r = ${r}. (Round to 2 decimals)`,
        String(ans), decDistractors(ans, 20).map(String),
        `SA = 4πr² = 4π(${r})² ≈ <strong>${ans}</strong>`);
},

// -- Geometry 17: Geometric Probability --
'geometric-probability': () => {
    const big = randInt(8, 15), small = randInt(2, big - 3);
    const prob = roundN((small * small) / (big * big) * 100);
    return buildMC(`A ${small}×${small} target is inside a ${big}×${big} board. Probability of hitting the target?`,
        `${prob}%`, decDistractors(prob, 5).map(v => `${roundN(v)}%`),
        `P = (${small}²)/(${big}²) = ${small*small}/${big*big} ≈ <strong>${prob}%</strong>`);
},

// -- Geometry 18: Symmetry --
'line-symmetry': () => {
    const items = [
        { shape: 'equilateral triangle', lines: 3 }, { shape: 'square', lines: 4 },
        { shape: 'rectangle (non-square)', lines: 2 }, { shape: 'regular hexagon', lines: 6 },
        { shape: 'isosceles triangle', lines: 1 }, { shape: 'circle', lines: 'Infinite' },
    ];
    const item = pickRandom(items);
    const wrongs = ['0', '1', '2', '3', '4', '6', 'Infinite'].filter(v => String(v) !== String(item.lines)).slice(0, 3);
    return buildMC(`How many lines of symmetry does a <strong>${item.shape}</strong> have?`,
        String(item.lines), wrongs,
        `A ${item.shape} has <strong>${item.lines}</strong> line(s) of symmetry.`);
},

// -- Geometry 19: Triangle Inequality --
'triangle-inequality-check': () => {
    const a = randInt(3, 10), b = randInt(3, 10);
    const isValid = pickRandom([true, false]);
    let c;
    if (isValid) { c = randInt(Math.abs(a - b) + 1, a + b - 1); }
    else { c = a + b + randInt(1, 3); }
    return buildMC(`Can sides <strong>${a}, ${b}, ${c}</strong> form a triangle?`,
        isValid ? 'Yes' : 'No', isValid ? ['No', 'Only if right', 'Not enough info'] : ['Yes', 'Only if right', 'Not enough info'],
        `${a} + ${b} = ${a+b} ${a+b > c ? '>' : '≤'} ${c}. ${isValid ? '<strong>Yes</strong>, triangle inequality satisfied.' : '<strong>No</strong>, fails triangle inequality.'}`);
},
'possible-third-side': () => {
    const a = randInt(3, 10), b = randInt(3, 10);
    const low = Math.abs(a - b) + 1, high = a + b - 1;
    return buildMC(`Two sides are ${a} and ${b}. The third side must be between:`,
        `${low} and ${high}`, [`1 and ${a+b}`, `${a} and ${b}`, `0 and ${a*b}`],
        `|${a}−${b}| < c < ${a}+${b} → <strong>${low} < c < ${a+b}</strong> (i.e., ${low} to ${high})`);
},

// -- Geometry 20: Medians & Centroids --
'centroid-coords': () => {
    const x1 = randInt(0, 6), y1 = randInt(0, 6), x2 = randInt(0, 6), y2 = randInt(0, 6), x3 = randInt(0, 6), y3 = randInt(0, 6);
    const cx = roundN((x1 + x2 + x3) / 3, 1), cy = roundN((y1 + y2 + y3) / 3, 1);
    return buildMC(`Centroid of triangle (${x1},${y1}), (${x2},${y2}), (${x3},${y3})?`,
        `(${cx}, ${cy})`,
        [`(${roundN(cx+1,1)}, ${cy})`, `(${cx}, ${roundN(cy+1,1)})`, `(${x1}, ${y1})`],
        `Centroid = ((${x1}+${x2}+${x3})/3, (${y1}+${y2}+${y3})/3) = <strong>(${cx}, ${cy})</strong>`);
},

// -- Geometry 21: Inscribed & Central Angles --
'inscribed-angle': () => {
    const central = randInt(40, 160) * 2 <= 360 ? randInt(20, 80) * 2 : randInt(20, 80) * 2;
    const inscribed = central / 2;
    return buildMC(`Central angle is ${central}°. What is the inscribed angle intercepting the same arc?`,
        `${inscribed}°`, [`${central}°`, `${central * 2}°`, `${inscribed + 10}°`],
        `Inscribed angle = ½ × central angle = ${central}/2 = <strong>${inscribed}°</strong>`);
},

// -- Geometry 22: Coordinate Proofs --
'slope-parallel-perp': () => {
    const m1 = randInt(1, 5), m2_opt = pickRandom(['parallel', 'perpendicular']);
    if (m2_opt === 'parallel') {
        return buildMC(`Line 1 has slope ${m1}. A parallel line has slope:`,
            String(m1), [String(-m1), String(m1 + 1), `−1/${m1}`],
            `Parallel lines have <strong>equal slopes</strong>: <strong>${m1}</strong>`);
    }
    const neg_recip = `−1/${m1}`;
    return buildMC(`Line 1 has slope ${m1}. A perpendicular line has slope:`,
        neg_recip, [String(m1), String(-m1), `1/${m1}`],
        `Perpendicular slopes are negative reciprocals: <strong>${neg_recip}</strong>`);
},

// -- Geometry 23: Proportions in Geometry --
'similar-triangle-side': () => {
    const a = randInt(3, 8), b = randInt(3, 8), k = randInt(2, 4);
    const aK = a * k, bK = b * k;
    return buildMC(`Similar triangles: small has sides ${a} and ${b}. Large has side ${aK} corresponding to ${a}. What corresponds to ${b}?`,
        bK, numDistractors(bK),
        `Scale factor = ${aK}/${a} = ${k}. Other side = ${b} × ${k} = <strong>${bK}</strong>`);
},

// -- Geometry 24: Nets & Cross-Sections --
'identify-net': () => {
    const items = [
        { solid: 'cube', net: '6 squares', w: ['4 squares', '6 triangles', '4 rectangles + 2 triangles'] },
        { solid: 'triangular prism', net: '3 rectangles + 2 triangles', w: ['5 triangles', '5 rectangles', '2 rectangles + 3 triangles'] },
        { solid: 'cylinder', net: '2 circles + 1 rectangle', w: ['1 circle + 1 rectangle', '2 circles', '3 rectangles'] },
    ];
    const item = pickRandom(items);
    return buildMC(`The net of a <strong>${item.solid}</strong> consists of:`, item.net, item.w, `<strong>${item.net}</strong>`);
},
'cross-section-shape': () => {
    const items = [
        { solid: 'a cube cut horizontally', shape: 'Square', w: ['Triangle', 'Circle', 'Rectangle'] },
        { solid: 'a sphere cut by any plane', shape: 'Circle', w: ['Ellipse', 'Square', 'Oval'] },
        { solid: 'a cylinder cut perpendicular to its axis', shape: 'Circle', w: ['Rectangle', 'Ellipse', 'Square'] },
        { solid: 'a cylinder cut parallel to its axis', shape: 'Rectangle', w: ['Circle', 'Triangle', 'Ellipse'] },
    ];
    const item = pickRandom(items);
    return buildMC(`Cross-section of <strong>${item.solid}</strong>?`, item.shape, item.w, `<strong>${item.shape}</strong>`);
},

// -- Geometry 25: Logic & Proofs Basics --
'converse-inverse': () => {
    const items = [
        { q: 'The converse of "If P then Q" is:', a: 'If Q then P', w: ['If not P then not Q', 'If not Q then not P', 'P and Q'] },
        { q: 'The contrapositive of "If P then Q" is:', a: 'If not Q then not P', w: ['If Q then P', 'If not P then not Q', 'Not P or Q'] },
        { q: 'The inverse of "If P then Q" is:', a: 'If not P then not Q', w: ['If Q then P', 'If not Q then not P', 'P and not Q'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Geometry 26: Regular Polygons --
'one-interior-angle': () => {
    const n = pickRandom([3, 4, 5, 6, 8, 10, 12]);
    const ans = (n - 2) * 180 / n;
    return buildMC(`One interior angle of a regular <strong>${n}-gon</strong>?`,
        `${ans}°`, [`${180/n}°`, `${360/n}°`, `${(n-1)*180/n}°`],
        `(n−2)×180/n = (${n}−2)×180/${n} = <strong>${ans}°</strong>`);
},

// -- Geometry 27: Rigid Motions Composition --
'double-reflection': () => {
    const items = [
        { q: 'Two reflections over parallel lines equal:', a: 'A translation', w: ['A rotation', 'A dilation', 'A single reflection'] },
        { q: 'Two reflections over intersecting lines equal:', a: 'A rotation', w: ['A translation', 'A dilation', 'A single reflection'] },
        { q: 'A glide reflection is:', a: 'A reflection followed by a translation', w: ['Two reflections', 'A rotation + dilation', 'A translation only'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// =============================================================
// ADDITIONAL GEOMETRY GENERATORS (from original)
// =============================================================

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

// =============================================================
// TRIGONOMETRY GENERATORS
// =============================================================

// -- Trig 1: Intro (SOHCAHTOA) --
'trig-ratio-from-sides': () => {
    const opp = randInt(3, 12), adj = randInt(3, 12);
    const hyp = roundN(Math.sqrt(opp * opp + adj * adj));
    const func = pickRandom(['sin', 'cos', 'tan']);
    let num, den;
    if (func === 'sin') { num = opp; den = hyp; }
    else if (func === 'cos') { num = adj; den = hyp; }
    else { num = opp; den = adj; }
    const ansStr = `${num}/${den}`;
    const wMap = { sin: [`${adj}/${hyp}`, `${opp}/${adj}`, `${hyp}/${opp}`],
                   cos: [`${opp}/${hyp}`, `${adj}/${opp}`, `${hyp}/${adj}`],
                   tan: [`${adj}/${opp}`, `${opp}/${hyp}`, `${hyp}/${opp}`] };
    return buildMC(`Opposite = ${opp}, Adjacent = ${adj}, Hypotenuse ≈ ${hyp}. Find <strong>${func}(θ)</strong>.`,
        ansStr, wMap[func],
        `${func}(θ) = ${func === 'sin' ? 'O/H' : func === 'cos' ? 'A/H' : 'O/A'} = <strong>${ansStr}</strong>`);
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
    return buildMC(`θ = ${angle}°, hypotenuse = ${hyp}. Find the <strong>${side}</strong> side. (Round to 1 decimal)`,
        String(ans), decDistractors(ans, 1.5).map(v => String(roundN(v, 1))),
        `${side} = hyp × ${useFunc}(${angle}°) = ${hyp} × ${ratio} ≈ <strong>${ans}</strong>`);
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

// -- Trig 3: Special Triangles --
'special-45-45-90': () => {
    const leg = randInt(2, 10);
    const hyp = roundN(leg * Math.SQRT2, 2);
    return buildMC(`In a 45-45-90 triangle, each leg is <strong>${leg}</strong>. What is the hypotenuse?`,
        String(hyp), decDistractors(hyp, 1).map(String),
        `Hypotenuse = leg × √2 = ${leg} × 1.414… ≈ <strong>${hyp}</strong>`);
},
'special-30-60-90': () => {
    const shortLeg = randInt(2, 10);
    const what = pickRandom(['hypotenuse', 'long leg']);
    if (what === 'hypotenuse') {
        const ans = shortLeg * 2;
        return buildMC(`In a 30-60-90 triangle, the short leg is <strong>${shortLeg}</strong>. Find the hypotenuse.`,
            ans, numDistractors(ans),
            `Hypotenuse = 2 × short leg = 2 × ${shortLeg} = <strong>${ans}</strong>`);
    } else {
        const ans = roundN(shortLeg * Math.sqrt(3), 2);
        return buildMC(`In a 30-60-90 triangle, the short leg is <strong>${shortLeg}</strong>. Find the long leg.`,
            String(ans), decDistractors(ans, 1.5).map(String),
            `Long leg = short leg × √3 = ${shortLeg} × 1.732… ≈ <strong>${ans}</strong>`);
    }
},

// -- Trig 4: Unit Circle --
'unit-circle-coords': () => {
    const angles = [
        { deg: 0, cos: '1', sin: '0' }, { deg: 90, cos: '0', sin: '1' },
        { deg: 180, cos: '−1', sin: '0' }, { deg: 270, cos: '0', sin: '−1' },
        { deg: 30, cos: '√3/2', sin: '1/2' }, { deg: 60, cos: '1/2', sin: '√3/2' },
        { deg: 45, cos: '√2/2', sin: '√2/2' },
    ];
    const a = pickRandom(angles);
    const func = pickRandom(['cos', 'sin']);
    const correct = func === 'cos' ? a.cos : a.sin;
    const allVals = ['0', '1', '−1', '1/2', '√2/2', '√3/2'];
    const wrongs = shuffle(allVals.filter(v => v !== correct)).slice(0, 3);
    return buildMC(`What is <strong>${func}(${a.deg}°)</strong> on the unit circle?`,
        correct, wrongs,
        `At ${a.deg}° on the unit circle: cos = ${a.cos}, sin = ${a.sin}.<br><strong>${func}(${a.deg}°) = ${correct}</strong>`);
},
'quadrant-id': () => {
    const angle = pickRandom([45,120,135,200,210,225,300,315,330]);
    let q; if (angle < 90) q = 'I'; else if (angle < 180) q = 'II'; else if (angle < 270) q = 'III'; else q = 'IV';
    const all = ['I','II','III','IV'];
    return buildMC(`In which quadrant is <strong>${angle}°</strong>?`, `Quadrant ${q}`, all.filter(x => x !== q).map(x => `Quadrant ${x}`),
        `${angle}° is in <strong>Quadrant ${q}</strong>`);
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
    return buildMC(`Convert <strong>${p.deg}°</strong> to radians.`, p.rad, wrongs,
        `${p.deg}° × (π/180) = <strong>${p.rad}</strong>`);
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
    return buildMC(`Convert <strong>${p.rad}</strong> radians to degrees.`, `${p.deg}°`, wrongs,
        `${p.rad} × (180/π) = <strong>${p.deg}°</strong>`);
},

// -- Trig 6: Graphing Trig Functions --
'trig-amplitude': () => {
    const a = randInt(1, 8);
    const func = pickRandom(['sin', 'cos']);
    return buildMC(`What is the amplitude of <strong>y = ${a}${func}(x)</strong>?`,
        a, numDistractors(a),
        `The amplitude is the coefficient in front of ${func}: <strong>${a}</strong>.`);
},
'trig-period': () => {
    const b = pickRandom([1, 2, 3, 4]);
    const func = pickRandom(['sin', 'cos']);
    const periodMap = { 1: '2π', 2: 'π', 3: '2π/3', 4: 'π/2' };
    const period = periodMap[b];
    const periodsAll = ['2π', 'π', '2π/3', 'π/2', '4π'];
    const wrongs = shuffle(periodsAll.filter(p => p !== period)).slice(0, 3);
    const bStr = b === 1 ? '' : String(b);
    return buildMC(`What is the period of <strong>y = ${func}(${bStr}x)</strong>?`,
        period, wrongs, `Period = 2π / |B| = 2π / ${b} = <strong>${period}</strong>`);
},

// -- Trig 7: Identities --
'pythagorean-identity': () => {
    const variant = pickRandom(['cos2', 'sin2', 'which']);
    if (variant === 'cos2') {
        const sinVal = pickRandom([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
        const cos2 = roundN(1 - sinVal * sinVal);
        return buildMC(`If sin(θ) = ${sinVal}, what is <strong>cos²(θ)</strong>?`,
            String(cos2), decDistractors(cos2, 0.1).map(String),
            `sin²θ + cos²θ = 1<br>cos²θ = 1 − (${sinVal})² = 1 − ${roundN(sinVal * sinVal)} = <strong>${cos2}</strong>`);
    } else if (variant === 'sin2') {
        const cosVal = pickRandom([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
        const sin2 = roundN(1 - cosVal * cosVal);
        return buildMC(`If cos(θ) = ${cosVal}, what is <strong>sin²(θ)</strong>?`,
            String(sin2), decDistractors(sin2, 0.1).map(String),
            `sin²θ + cos²θ = 1<br>sin²θ = 1 − (${cosVal})² = 1 − ${roundN(cosVal * cosVal)} = <strong>${sin2}</strong>`);
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
'reciprocal-identity': () => {
    const ids = [
        { q: 'csc θ =', ans: '1/sin θ', w: ['1/cos θ','1/tan θ','sin θ/cos θ'] },
        { q: 'sec θ =', ans: '1/cos θ', w: ['1/sin θ','1/tan θ','cos θ/sin θ'] },
        { q: 'cot θ =', ans: '1/tan θ', w: ['1/sin θ','1/cos θ','tan θ'] },
        { q: 'cot θ = cos θ / ?', ans: 'sin θ', w: ['cos θ','tan θ','1'] },
        { q: 'tan θ = sin θ / ?', ans: 'cos θ', w: ['sin θ','tan θ','1'] },
    ];
    const id = pickRandom(ids);
    return buildMC(`Complete: <strong>${id.q}</strong>`, id.ans, id.w, `<strong>${id.q} ${id.ans}</strong>`);
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
        { func: 'arctan', val: '1', ans: '45°', w: ['30°', '60°', '90°'] },
        { func: 'arctan', val: '0', ans: '0°', w: ['45°', '90°', '30°'] },
        { func: 'arctan', val: '√3', ans: '60°', w: ['30°', '45°', '90°'] },
    ];
    const item = pickRandom(items);
    return buildMC(`Evaluate: <strong>${item.func}(${item.val})</strong>`,
        item.ans, item.w, `<strong>${item.func}(${item.val}) = ${item.ans}</strong>`);
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

// -- Trig 9: Law of Sines --
'law-of-sines-calc': () => {
    const A = randInt(30, 70), B = randInt(30, 70);
    const a = randInt(5, 15);
    const b = roundN(a * Math.sin(B * Math.PI / 180) / Math.sin(A * Math.PI / 180), 1);
    return buildMC(`Using Law of Sines: A = ${A}°, a = ${a}, B = ${B}°. Find <strong>b</strong>. (Round to 1 decimal)`,
        String(b), decDistractors(b, 1.5).map(v => String(roundN(v, 1))),
        `b = a × sin(B)/sin(A) = ${a} × sin(${B}°)/sin(${A}°) ≈ <strong>${b}</strong>`);
},

// -- Trig 10: Law of Cosines --
'law-of-cosines-calc': () => {
    const a = randInt(4, 10), b = randInt(4, 10), C = pickRandom([30, 45, 60, 90, 120]);
    const cSq = a * a + b * b - 2 * a * b * Math.cos(C * Math.PI / 180);
    if (cSq <= 0) return generators['law-of-cosines-calc']();
    const c = roundN(Math.sqrt(cSq), 1);
    return buildMC(`Using Law of Cosines: a = ${a}, b = ${b}, C = ${C}°. Find <strong>c</strong>. (Round to 1 decimal)`,
        String(c), decDistractors(c, 1.5).map(v => String(roundN(v, 1))),
        `c² = ${a}² + ${b}² − 2(${a})(${b})cos(${C}°) ≈ ${roundN(cSq, 1)}<br>c ≈ <strong>${c}</strong>`);
},

// -- Trig 11: Reference Angles --
'find-reference-angle': () => {
    const angle = pickRandom([120, 135, 150, 210, 225, 240, 300, 315, 330]);
    let ref;
    if (angle <= 180) ref = 180 - angle;
    else if (angle <= 270) ref = angle - 180;
    else ref = 360 - angle;
    return buildMC(`What is the reference angle for <strong>${angle}°</strong>?`,
        `${ref}°`, [`${180-ref}°`, `${angle}°`, `${360-ref}°`],
        `Reference angle for ${angle}° = <strong>${ref}°</strong>`);
},
'trig-with-reference': () => {
    const items = [
        { q: 'sin(150°) = ?', a: '1/2', w: ['−1/2', '√3/2', '−√3/2'], e: 'ref = 30°, QII → sin positive: <strong>1/2</strong>' },
        { q: 'cos(120°) = ?', a: '−1/2', w: ['1/2', '−√3/2', '√3/2'], e: 'ref = 60°, QII → cos negative: <strong>−1/2</strong>' },
        { q: 'sin(210°) = ?', a: '−1/2', w: ['1/2', '−√3/2', '√3/2'], e: 'ref = 30°, QIII → sin negative: <strong>−1/2</strong>' },
        { q: 'cos(330°) = ?', a: '√3/2', w: ['−√3/2', '1/2', '−1/2'], e: 'ref = 30°, QIV → cos positive: <strong>√3/2</strong>' },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, item.e);
},

// -- Trig 12: Sec, Csc, Cot --
'reciprocal-trig-eval': () => {
    const items = [
        { q: 'If sin(θ) = 3/5, then csc(θ) = ?', a: '5/3', w: ['3/5', '5/4', '4/3'] },
        { q: 'If cos(θ) = 4/5, then sec(θ) = ?', a: '5/4', w: ['4/5', '5/3', '3/4'] },
        { q: 'If tan(θ) = 3/4, then cot(θ) = ?', a: '4/3', w: ['3/4', '5/3', '5/4'] },
        { q: 'sec(0°) = ?', a: '1', w: ['0', 'undefined', '−1'] },
        { q: 'csc(90°) = ?', a: '1', w: ['0', 'undefined', '−1'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Trig 13: Solving Trig Equations --
'solve-trig-eq-basic': () => {
    const items = [
        { q: 'Solve: sin(x) = 1. x = ?', a: '90° (π/2)', w: ['0°', '180°', '270°'] },
        { q: 'Solve: cos(x) = 0 for 0° ≤ x ≤ 360°. Solutions:', a: '90° and 270°', w: ['0° and 180°', '0° and 360°', '180° only'] },
        { q: 'Solve: sin(x) = 0 for 0° ≤ x ≤ 360°. How many solutions?', a: '3 (0°, 180°, 360°)', w: ['1', '2', '4'] },
        { q: 'Solve: tan(x) = 0 for 0° ≤ x < 360°. Solutions:', a: '0° and 180°', w: ['90° and 270°', '0° only', '45° and 225°'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Trig 14: Sum & Difference Formulas --
'sum-formula-apply': () => {
    const items = [
        { q: 'sin(A + B) = ?', a: 'sinA cosB + cosA sinB', w: ['sinA sinB + cosA cosB', 'cosA cosB − sinA sinB', 'sinA cosB − cosA sinB'] },
        { q: 'cos(A + B) = ?', a: 'cosA cosB − sinA sinB', w: ['cosA cosB + sinA sinB', 'sinA cosB + cosA sinB', 'sinA sinB − cosA cosB'] },
        { q: 'cos(A − B) = ?', a: 'cosA cosB + sinA sinB', w: ['cosA cosB − sinA sinB', 'sinA cosB − cosA sinB', 'sinA cosB + cosA sinB'] },
    ];
    const item = pickRandom(items);
    return buildMC(`Complete: <strong>${item.q}</strong>`, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Trig 15: Half-Angle Formulas --
'half-angle-eval': () => {
    const items = [
        { q: 'Using half-angle: sin(15°) = sin(30°/2). This involves:', a: 'The half-angle formula for sine', w: ['The double-angle formula', 'The sum formula', 'The Pythagorean identity'] },
        { q: 'cos(θ/2) = ±√((1 + cosθ)/2). If cos(60°) = 1/2, then cos(30°) = ?', a: '√3/2', w: ['1/2', '√2/2', '1'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Trig 16: Verifying Identities --
'simplify-trig-expr': () => {
    const items = [
        { q: 'Simplify: sin²θ + cos²θ', a: '1', w: ['sin θ', 'cos θ', '2'] },
        { q: 'Simplify: secθ × cosθ', a: '1', w: ['sec²θ', 'cos²θ', '0'] },
        { q: 'Simplify: tanθ × cosθ', a: 'sinθ', w: ['cosθ', 'tanθ', '1'] },
        { q: 'Simplify: (1 − cos²θ)/sinθ', a: 'sinθ', w: ['cosθ', '1', 'tanθ'] },
        { q: 'Simplify: cscθ × sinθ', a: '1', w: ['csc²θ', 'sin²θ', '0'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Trig 17: Polar Coordinates --
'rect-to-polar': () => {
    const x = 3, y = 4;
    const r = 5;
    return buildMC(`Convert (${x}, ${y}) to polar. What is r?`,
        String(r), ['7', '4', '3'],
        `r = √(${x}² + ${y}²) = √(${x*x} + ${y*y}) = √25 = <strong>${r}</strong>`);
},
'polar-to-rect': () => {
    const items = [
        { r: 4, theta: '0°', x: 4, y: 0 },
        { r: 5, theta: '90°', x: 0, y: 5 },
        { r: 6, theta: '180°', x: -6, y: 0 },
    ];
    const item = pickRandom(items);
    return buildMC(`Convert polar (${item.r}, ${item.theta}) to rectangular.`,
        `(${item.x}, ${item.y})`,
        [`(${item.y}, ${item.x})`, `(${item.r}, ${item.r})`, `(${-item.x}, ${-item.y})`],
        `x = r·cos(θ), y = r·sin(θ) → <strong>(${item.x}, ${item.y})</strong>`);
},

// -- Trig 18: Sinusoidal Modeling --
'sinusoidal-from-context': () => {
    const items = [
        { q: 'A Ferris wheel completes one rotation in 40 seconds. The period is:', a: '40 seconds', w: ['20 seconds', '80 seconds', '2π seconds'] },
        { q: 'Ocean tides vary between 2 ft and 10 ft. The amplitude is:', a: '4 ft', w: ['10 ft', '6 ft', '8 ft'] },
        { q: 'Temperature oscillates between 50°F and 90°F. The midline is:', a: '70°F', w: ['50°F', '90°F', '40°F'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Trig 19: Vectors --
'vector-magnitude': () => {
    const a = randInt(3, 8), b = randInt(3, 8);
    const mag = roundN(Math.sqrt(a*a + b*b));
    return buildMC(`Find the magnitude of vector <strong>⟨${a}, ${b}⟩</strong>. (Round to 2 decimals)`,
        String(mag), decDistractors(mag, 1).map(String),
        `|v| = √(${a}² + ${b}²) = √(${a*a + b*b}) ≈ <strong>${mag}</strong>`);
},
'vector-add': () => {
    const a1 = randInt(1, 6), a2 = randInt(1, 6), b1 = randInt(1, 6), b2 = randInt(1, 6);
    return buildMC(`Add vectors: <strong>⟨${a1}, ${a2}⟩ + ⟨${b1}, ${b2}⟩</strong>`,
        `⟨${a1+b1}, ${a2+b2}⟩`,
        [`⟨${a1*b1}, ${a2*b2}⟩`, `⟨${a1-b1}, ${a2-b2}⟩`, `⟨${a1+b2}, ${a2+b1}⟩`],
        `Add component-wise: ⟨${a1}+${b1}, ${a2}+${b2}⟩ = <strong>⟨${a1+b1}, ${a2+b2}⟩</strong>`);
},

// -- Trig 20: Dot Product --
'dot-product-calc': () => {
    const a1 = randInt(1, 6), a2 = randInt(1, 6), b1 = randInt(1, 6), b2 = randInt(1, 6);
    const ans = a1*b1 + a2*b2;
    return buildMC(`Dot product: <strong>⟨${a1}, ${a2}⟩ · ⟨${b1}, ${b2}⟩</strong>`,
        ans, numDistractors(ans),
        `${a1}(${b1}) + ${a2}(${b2}) = ${a1*b1} + ${a2*b2} = <strong>${ans}</strong>`);
},

// -- Trig 21: Arc Length & Angular Speed --
'arc-length-trig': () => {
    const r = randInt(3, 10), theta = pickRandom([1, 2, 3, Math.PI]);
    const thetaStr = theta === Math.PI ? 'π' : String(theta);
    const ans = roundN(r * theta);
    return buildMC(`Arc length: r = ${r}, θ = ${thetaStr} radians.`,
        String(ans), decDistractors(ans, 2).map(String),
        `s = rθ = ${r} × ${thetaStr} ≈ <strong>${ans}</strong>`);
},

// -- Trig 22: Ambiguous Case --
'ambiguous-case-count': () => {
    const items = [
        { q: 'SSA with sin(B) > 1:', a: '0 triangles', w: ['1 triangle', '2 triangles', 'Infinite'] },
        { q: 'SSA with sin(B) = 1:', a: '1 triangle (right)', w: ['0 triangles', '2 triangles', 'Infinite'] },
        { q: 'SSA with sin(B) < 1 and a < b:', a: '2 possible triangles', w: ['0 triangles', '1 triangle', 'Infinite'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Trig 23: Area of Triangles (Trig) --
'triangle-area-trig': () => {
    const a = randInt(4, 10), b = randInt(4, 10), C = pickRandom([30, 45, 60, 90]);
    const sinC = { 30: 0.5, 45: 0.707, 60: 0.866, 90: 1 };
    const ans = roundN(0.5 * a * b * sinC[C]);
    return buildMC(`Area of triangle: a=${a}, b=${b}, C=${C}°. (Round to 2 decimals)`,
        String(ans), decDistractors(ans, 2).map(String),
        `A = ½ab·sin(C) = ½(${a})(${b})·sin(${C}°) ≈ <strong>${ans}</strong>`);
},

// -- Trig 24: Parametric Equations --
'parametric-to-rect': () => {
    const items = [
        { q: 'x = t, y = t². Eliminate t:', a: 'y = x²', w: ['y = 2x', 'x = y²', 'y = √x'] },
        { q: 'x = 2t, y = t + 1. Eliminate t:', a: 'y = x/2 + 1', w: ['y = 2x + 1', 'y = x − 1', 'y = x/2 − 1'] },
        { q: 'x = cos(t), y = sin(t). Eliminate t:', a: 'x² + y² = 1', w: ['y = x', 'x − y = 1', 'y = √(1−x)'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Trig 25: Complex Numbers & Trig --
'complex-to-trig': () => {
    const items = [
        { q: 'The modulus of 3 + 4i is:', a: '5', w: ['7', '4', '3'] },
        { q: 'In trig form, r(cosθ + isinθ), r represents:', a: 'The modulus (distance from origin)', w: ['The angle', 'The real part', 'The imaginary part'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Trig 26: De Moivre's Theorem --
'demoivre-power': () => {
    const items = [
        { q: 'De Moivre\'s Theorem: [r(cosθ + isinθ)]ⁿ = ?', a: 'rⁿ(cos(nθ) + isin(nθ))', w: ['nr(cosθ + isinθ)', 'r(cos(nθ) + isin(nθ))', 'rⁿ(cosθ + isinθ)ⁿ'] },
        { q: '[cos(30°) + isin(30°)]⁶ simplifies using De Moivre to angle:', a: '180°', w: ['30°', '36°', '360°'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Trig 27: Mixed Review --
'mixed-trig-concept': () => {
    const items = [
        { q: 'tan(45°) = ?', a: '1', w: ['0', '√2', 'undefined'] },
        { q: 'sin(30°) = ?', a: '1/2', w: ['√3/2', '√2/2', '1'] },
        { q: 'cos(60°) = ?', a: '1/2', w: ['√3/2', '√2/2', '0'] },
        { q: 'In which quadrant are both sin and cos negative?', a: 'III', w: ['I', 'II', 'IV'] },
        { q: 'The period of tan(x) is:', a: 'π', w: ['2π', 'π/2', '4π'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},
'trig-word-problem': () => {
    const h = randInt(30, 80), angle = pickRandom([30, 45, 60]);
    const tanV = { 30: 0.577, 45: 1, 60: 1.732 };
    const d = roundN(h / tanV[angle]);
    return buildMC(`A ${h}-ft building has an angle of elevation of ${angle}° from point P. Distance from P to base? (Round to 2 decimals)`,
        String(d), decDistractors(d, 5).map(String),
        `tan(${angle}°) = ${h}/d → d = ${h}/tan(${angle}°) ≈ <strong>${d}</strong>`);
},

// -- Additional Trig generators from original --
'trig-double-angle': () => {
    const items = [
        { q: 'sin(2θ) =', ans: '2 sin θ cos θ', w: ['sin²θ + cos²θ', '2 cos²θ − 1', 'sin θ + cos θ'] },
        { q: 'cos(2θ) =', ans: 'cos²θ − sin²θ', w: ['2 sin θ cos θ', 'sin²θ + cos²θ', '2 sin²θ − 1'] },
        { q: 'cos(2θ) = 2cos²θ − ?', ans: '1', w: ['sin²θ', '2', 'cos²θ'] },
        { q: 'cos(2θ) = 1 − ?', ans: '2 sin²θ', w: ['2 cos²θ', 'sin θ cos θ', 'sin²θ'] },
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
// CALCULUS GENERATORS
// =============================================================

// -- Calc 1: Limits --
'calc-limit-eval': () => {
    const a = randInt(1, 5), b = randInt(-3, 6), c = randInt(1, 4);
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
    const n = randInt(2, 8), coeff = randInt(1, 5);
    const newCoeff = coeff * n, newExp = n - 1;
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

// -- Calc 11: Product & Quotient Rule --
'calc-product-rule': () => {
    const items = [
        { q: 'd/dx [x·eˣ] = ?', a: 'eˣ + xeˣ', w: ['xeˣ', 'eˣ', 'x + eˣ'] },
        { q: 'd/dx [x²·sin(x)] = ?', a: '2x·sin(x) + x²·cos(x)', w: ['2x·cos(x)', 'x²·sin(x)', '2x·sin(x) − x²·cos(x)'] },
        { q: 'The product rule: d/dx[fg] = ?', a: "f'g + fg'", w: ["f'g'", "fg + f'g'", "(fg)'"] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `Product rule: <strong>${item.a}</strong>`);
},
'calc-quotient-rule': () => {
    const items = [
        { q: 'The quotient rule: d/dx[f/g] = ?', a: "(f'g − fg') / g²", w: ["f'/g'", "(f'g + fg') / g²", "f'g − fg'"] },
        { q: 'd/dx [x/eˣ] = ?', a: '(eˣ − xeˣ)/e²ˣ', w: ['1/eˣ', 'x/eˣ', '(1 − x)/eˣ'] },
        { q: 'd/dx [sin(x)/x] at a point requires:', a: 'The quotient rule', w: ['The power rule only', 'The chain rule only', 'No rule needed'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Calc 12: Implicit Differentiation --
'calc-implicit-diff': () => {
    const items = [
        { q: 'Differentiate x² + y² = 25 implicitly. dy/dx = ?', a: '−x/y', w: ['x/y', '−y/x', 'y/x'] },
        { q: 'When differentiating y² implicitly, the result is:', a: "2y · dy/dx", w: ['2y', 'y²', '2x'] },
        { q: 'Implicit differentiation is used when:', a: 'y is not isolated', w: ['y is a constant', 'The function is linear', 'Only for polynomials'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Calc 13: Related Rates --
'related-rates-concept': () => {
    const items = [
        { q: 'Related rates problems involve:', a: 'Rates of change of related quantities', w: ['Only position and time', 'Static measurements', 'Only geometric formulas'] },
        { q: 'A balloon inflating: V = (4/3)πr³. dV/dt relates to dr/dt by:', a: 'dV/dt = 4πr² · dr/dt', w: ['dV/dt = (4/3)πr²', 'dV/dt = dr/dt', 'dV/dt = 4πr³ · dr/dt'] },
        { q: 'In related rates, after setting up the equation, you:', a: 'Differentiate both sides with respect to time', w: ['Solve for x', 'Integrate', 'Factor'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Calc 14: Linear Approximation --
'tangent-line-approx': () => {
    const items = [
        { q: 'The linear approximation of f at x = a is:', a: 'L(x) = f(a) + f\'(a)(x − a)', w: ['L(x) = f(a) × x', 'L(x) = f\'(a)', 'L(x) = f(a) + f(a)(x − a)'] },
        { q: 'Linear approximation uses the ___ at a point.', a: 'Tangent line', w: ['Secant line', 'Normal line', 'Asymptote'] },
        { q: 'f(x) = √x, f\'(x) = 1/(2√x). Approximate √4.1 using x=4:', a: '≈ 2.025', w: ['≈ 2.05', '≈ 2.1', '≈ 2.005'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Calc 15: Mean Value Theorem --
'mvt-concept': () => {
    const items = [
        { q: 'The MVT guarantees a point c where f\'(c) equals:', a: 'The average rate of change on [a,b]', w: ['f(a)', 'f(b)', 'Zero'] },
        { q: 'MVT requires f to be:', a: 'Continuous on [a,b] and differentiable on (a,b)', w: ['Just continuous', 'Just differentiable', 'Neither'] },
        { q: 'Rolle\'s Theorem is a special case of MVT where:', a: 'f(a) = f(b)', w: ['f\'(a) = 0', 'f is constant', 'a = b'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Calc 16: L'Hôpital's Rule --
'lhopital-eval': () => {
    const items = [
        { q: 'lim(x→0) sin(x)/x using L\'Hôpital:', a: '1', w: ['0', '∞', 'undefined'] },
        { q: 'lim(x→∞) x/eˣ using L\'Hôpital:', a: '0', w: ['1', '∞', 'e'] },
        { q: 'lim(x→0) (eˣ − 1)/x using L\'Hôpital:', a: '1', w: ['0', 'e', '∞'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},
'lhopital-concept': () => {
    const items = [
        { q: 'L\'Hôpital\'s Rule applies when a limit gives:', a: '0/0 or ∞/∞', w: ['Any fraction', '0 × ∞ only', '1/0'] },
        { q: 'L\'Hôpital\'s Rule says: lim f/g = ?', a: "lim f'/g' (if conditions met)", w: ['lim f × g', "lim (f + g)'/2", "f'(a)/g'(a) always"] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Calc 17: Optimization --
'optimization-setup': () => {
    const items = [
        { q: 'To find the maximum area with a fixed perimeter, you:', a: 'Express area in one variable, find where A\'(x) = 0', w: ['Just use the largest numbers', 'Integrate the perimeter', 'Set perimeter = 0'] },
        { q: 'After finding a critical point in optimization, confirm it\'s a max/min by:', a: 'Using the second derivative test', w: ['Ignoring it', 'Checking if x > 0', 'Taking the integral'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Calc 18: Integration by Parts --
'ibp-choose-u': () => {
    const items = [
        { q: '∫ x·eˣ dx: using LIATE, u should be:', a: 'x', w: ['eˣ', 'xeˣ', '1'] },
        { q: '∫ x·sin(x) dx: u = ?', a: 'x', w: ['sin(x)', 'x sin(x)', 'cos(x)'] },
        { q: '∫ ln(x) dx: u = ?', a: 'ln(x)', w: ['1', 'x', '1/x'] },
        { q: 'Integration by parts formula: ∫u dv = ?', a: 'uv − ∫v du', w: ['uv + ∫v du', 'u dv − v du', 'u/v − ∫v/u'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Calc 19: Trigonometric Integrals --
'trig-integral-basic': () => {
    const items = [
        { q: '∫ sin²(x) dx uses which identity?', a: 'sin²(x) = (1 − cos(2x))/2', w: ['sin²(x) + cos²(x) = 1', 'sin(2x) = 2sin(x)cos(x)', 'cos²(x) = 1 − sin²(x)'] },
        { q: '∫ sin(x)cos(x) dx = ?', a: 'sin²(x)/2 + C', w: ['cos²(x) + C', '−cos(2x) + C', 'sin(x) + C'] },
        { q: '∫ sec²(x) dx = ?', a: 'tan(x) + C', w: ['sec(x) + C', '−csc(x) + C', 'sin(x)/cos²(x) + C'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Calc 20: Partial Fractions --
'partial-fraction-setup': () => {
    const items = [
        { q: '1/((x+1)(x+2)) decomposes to:', a: 'A/(x+1) + B/(x+2)', w: ['(A+B)/((x+1)(x+2))', 'A(x+2) + B(x+1)', 'AB/((x+1)(x+2))'] },
        { q: 'Partial fractions is used to integrate:', a: 'Rational functions (polynomial/polynomial)', w: ['Trig functions', 'Exponentials', 'Logarithms only'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Calc 21: Improper Integrals --
'improper-converge': () => {
    const items = [
        { q: '∫₁^∞ 1/x² dx:', a: 'Converges to 1', w: ['Diverges', 'Converges to 0', 'Converges to ∞'] },
        { q: '∫₁^∞ 1/x dx:', a: 'Diverges', w: ['Converges to 1', 'Converges to 0', 'Converges to ln(2)'] },
        { q: '∫₁^∞ 1/x^p converges when:', a: 'p > 1', w: ['p > 0', 'p < 1', 'p = 1'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Calc 22: Sequences --
'sequence-converge': () => {
    const items = [
        { q: 'Does aₙ = 1/n converge?', a: 'Yes, to 0', w: ['No', 'Yes, to 1', 'Yes, to ∞'] },
        { q: 'Does aₙ = (−1)ⁿ converge?', a: 'No, it oscillates', w: ['Yes, to 0', 'Yes, to 1', 'Yes, to −1'] },
        { q: 'Does aₙ = n/(n+1) converge?', a: 'Yes, to 1', w: ['No', 'Yes, to 0', 'Yes, to ∞'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Calc 23: Series & Convergence --
'geometric-series-sum': () => {
    const a = randInt(1, 5), r_num = 1, r_den = pickRandom([2, 3, 4]);
    const sum = roundN(a / (1 - r_num / r_den));
    return buildMC(`Sum of infinite geometric series: a = ${a}, r = 1/${r_den}. S = ?`,
        String(sum), decDistractors(sum, 1).map(String),
        `S = a/(1−r) = ${a}/(1 − 1/${r_den}) = ${a}/(${r_den-1}/${r_den}) = <strong>${sum}</strong>`);
},
'series-test-choice': () => {
    const items = [
        { q: 'For a geometric series, converges when:', a: '|r| < 1', w: ['|r| > 1', 'r > 0', 'r = 1'] },
        { q: 'The nth-term test says: if lim aₙ ≠ 0, the series:', a: 'Diverges', w: ['Converges', 'May converge', 'Equals zero'] },
        { q: 'The p-series ∑1/nᵖ converges when:', a: 'p > 1', w: ['p > 0', 'p < 1', 'p = 1'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Calc 24: Taylor/Maclaurin --
'taylor-first-terms': () => {
    const items = [
        { q: 'First 3 terms of eˣ Maclaurin series:', a: '1 + x + x²/2', w: ['x + x² + x³', '1 + x + x²', '1 + 2x + 3x²'] },
        { q: 'First 3 terms of sin(x) Maclaurin:', a: 'x − x³/6 + x⁵/120', w: ['1 − x² + x⁴', 'x + x³ + x⁵', 'x − x²/2 + x³/6'] },
        { q: 'Maclaurin series is a Taylor series centered at:', a: 'x = 0', w: ['x = 1', 'x = a', 'x = ∞'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Calc 25: Differential Equations --
'separable-de': () => {
    const items = [
        { q: 'dy/dx = 2y is a separable DE. Solution form:', a: 'y = Ce²ˣ', w: ['y = 2x + C', 'y = x² + C', 'y = C/e²ˣ'] },
        { q: 'A differential equation is separable if:', a: 'You can write it as f(y)dy = g(x)dx', w: ['It has constant coefficients', 'It is linear', 'It has no solution'] },
        { q: 'dy/dx = x/y. After separating: y dy = x dx. Integrate both sides:', a: 'y²/2 = x²/2 + C', w: ['y = x + C', 'y² = x + C', 'ln(y) = ln(x) + C'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Calc 26: Arc Length --
'arc-length-integral': () => {
    const items = [
        { q: 'Arc length formula: L = ∫ √(1 + [f\'(x)]²) dx requires:', a: 'The derivative of f', w: ['The integral of f', 'f(x) only', 'The second derivative'] },
        { q: 'For f(x) = x, f\'(x) = 1. Arc length from 0 to 1:', a: '√2', w: ['1', '2', 'π'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// -- Calc 27: Mixed Review --
'mixed-calc-concept': () => {
    const items = [
        { q: 'd/dx [x³] = ?', a: '3x²', w: ['x²', '3x³', 'x³/3'] },
        { q: '∫ 2x dx = ?', a: 'x² + C', w: ['2x² + C', 'x + C', '2 + C'] },
        { q: 'If f\'(x) = 0 everywhere, f(x) is:', a: 'A constant', w: ['Zero', 'Increasing', 'Undefined'] },
        { q: 'FTC Part 2: d/dx [∫ₐˣ f(t) dt] = ?', a: 'f(x)', w: ['F(x)', '∫ f(x) dx', 'f(a)'] },
        { q: 'The derivative of velocity is:', a: 'Acceleration', w: ['Position', 'Displacement', 'Speed'] },
    ];
    const item = pickRandom(items);
    return buildMC(item.q, item.a, item.w, `<strong>${item.a}</strong>`);
},

// =============================================================
// EXTRA GENERATORS FROM ORIGINAL (referenced in old lessons)
// =============================================================

'expression-vs-equation': () => {
    const a = randInt(2,9), b = randInt(1,12), c = randInt(1,20);
    const expr = `${a}x + ${b}`;
    const eq = `${a}x + ${b} = ${c}`;
    const isEq = pickRandom([true, false]);
    const shown = isEq ? eq : expr;
    return buildMC(`Is <strong>${shown}</strong> an expression or an equation?`,
        isEq ? 'Equation' : 'Expression',
        isEq ? ['Expression', 'Inequality', 'Formula'] : ['Equation', 'Inequality', 'Formula'],
        isEq ? `It has an equals sign → <strong>Equation</strong>.` : `No equals sign → <strong>Expression</strong>.`);
},
'simplify-like-terms': () => {
    const a = randInt(2,8), b = randInt(1,7), c = randInt(1,9);
    const ans = a + b;
    return buildMC(`Simplify: <strong>${a}x + ${c} + ${b}x</strong>`,
        `${ans}x + ${c}`,
        [`${a+b+c}x`, `${a}x + ${b+c}`, `${a*b}x + ${c}`],
        `Combine like terms: ${a}x + ${b}x = ${ans}x → <strong>${ans}x + ${c}</strong>`);
},
'check-solution': () => {
    const a = randInt(2,6), x = randInt(1,8), b = randInt(1,10);
    const c = a * x + b;
    const testVal = pickRandom([x, x+1, x-1, x+2]);
    const isCorrect = testVal === x;
    return buildMC(`Is x = ${testVal} a solution to <strong>${a}x + ${b} = ${c}</strong>?`,
        isCorrect ? 'Yes' : 'No',
        isCorrect ? ['No', 'Not enough info', 'Only if x > 0'] : ['Yes', 'Not enough info', 'Only if x > 0'],
        `${a}(${testVal}) + ${b} = ${a*testVal + b}. We need ${c}. ${a*testVal + b === c ? '<strong>Yes</strong>, it works!' : '<strong>No</strong>, it doesn\'t equal ' + c + '.'}`);
},
'y-intercept-from-eq': () => {
    const m = randInt(-5,5), b = randInt(-10,10);
    const bSign = b >= 0 ? `+ ${b}` : `− ${Math.abs(b)}`;
    return buildMC(`What is the y-intercept of <strong>y = ${m}x ${bSign}</strong>?`,
        `(0, ${b})`, [`(${b}, 0)`, `(0, ${m})`, `(${m}, ${b})`],
        `The y-intercept is where x = 0: y = ${m}(0) ${bSign} = ${b} → <strong>(0, ${b})</strong>`);
},
'substitution-system': () => {
    const x = randInt(1,6), y = randInt(1,6);
    const a = randInt(2,4), c1 = a * x + y;
    return buildMC(`Solve by substitution: <strong>y = ${y}</strong> and <strong>${a}x + y = ${c1}</strong>. Find x.`,
        x, numDistractors(x),
        `Substitute y = ${y}: ${a}x + ${y} = ${c1} → ${a}x = ${c1 - y} → x = <strong>${x}</strong>`);
},
'count-solutions': () => {
    const cases = [
        { disc: 'positive', sols: '2 real solutions', w: ['1 real solution', '0 real solutions', 'Infinite solutions'] },
        { disc: 'zero', sols: '1 real solution', w: ['2 real solutions', '0 real solutions', 'Infinite solutions'] },
        { disc: 'negative', sols: '0 real solutions', w: ['1 real solution', '2 real solutions', 'Infinite solutions'] },
    ];
    const c = pickRandom(cases);
    return buildMC(`If the discriminant is <strong>${c.disc}</strong>, how many real solutions?`, c.sols, c.w, `Discriminant ${c.disc} → <strong>${c.sols}</strong>`);
},
'gcf-factor': () => {
    const gcf = randInt(2,6);
    const a = randInt(2,5), b = randInt(1,7);
    return buildMC(`Factor out the GCF: <strong>${gcf*a}x + ${gcf*b}</strong>`,
        `${gcf}(${a}x + ${b})`, [`${a}(${gcf}x + ${b})`, `${gcf*a}(x + ${b})`, `x(${gcf*a} + ${gcf*b})`],
        `GCF = ${gcf}: ${gcf*a}x + ${gcf*b} = <strong>${gcf}(${a}x + ${b})</strong>`);
},
'exponent-power-rule': () => {
    const base = pickRandom(['x','y','a','m']);
    const m = randInt(2,5), n = randInt(2,4);
    const ans = m * n;
    return buildMC(`Simplify: <strong>(${base}<sup>${m}</sup>)<sup>${n}</sup></strong>. What is the exponent?`,
        ans, numDistractors(ans),
        `Power rule: multiply exponents → ${base}<sup>${m}×${n}</sup> = ${base}<sup><strong>${ans}</strong></sup>`);
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
    return buildMC(`What value is NOT in the domain of <strong>f(x) = 1/(${denom})</strong>?`,
        `x = ${excluded}`, [`x = ${-excluded}`, `x = 0`, `x = ${n+1}`],
        `Set ${denom} = 0 → x = ${excluded}. This value makes the denominator zero → <strong>excluded</strong>.`);
},

};

export { generators };
