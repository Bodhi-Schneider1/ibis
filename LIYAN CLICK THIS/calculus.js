export const calculusPath = {
        name: 'Calculus Path',
        icon: '∫',
        lessons: [

            // ---- 1. Intro to Limits ----
            { id: 'intro-limits', title: 'Introduction to Limits', subtitle: 'What a function approaches', xpReward: 30, sections: [
                { type: 'text', content: `<h3>What Is a Limit?</h3><p>Imagine driving toward a stop sign. Even before you reach it, you can predict where you're heading. A <strong>limit</strong> captures that idea: it describes the value a function <em>approaches</em> as its input gets closer and closer to some value — without necessarily reaching it.</p><p>We write <strong>lim(x→c) f(x) = L</strong>, which says "as x gets arbitrarily close to c, f(x) gets arbitrarily close to L."</p><p>The function doesn't need to equal L at x = c — it just needs to approach it. This distinction matters: a road closure at the stop sign doesn't change where you were <em>heading</em>. Limits are the foundation that all of calculus is built on.</p>` },
                { type: 'example', title: 'A Simple Limit', content: `<p>lim(x→3) (2x + 1) = 2(3) + 1 = <strong>7</strong>. For continuous functions, you can just substitute!</p>` },
                { type: 'steps', title: 'How to Evaluate a Limit', steps: [
                    'Try direct substitution first — plug c into f(x).',
                    'If you get a real number, that is your limit.',
                    'If you get 0/0 or ∞/∞, you need an algebraic technique (factor, rationalize, simplify).',
                    'If the function approaches different values from the left and right, the limit does not exist (DNE).'
                ]},
                { type: 'generated_practice', generators: ['calc-limit-eval'] },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p>Limits ask "what does f(x) approach?" not "what does f(x) equal." For most functions you encounter at first, direct substitution works.</p>` },
                { type: 'practice', problems: [
                    { question: 'Which technique is needed when direct substitution gives 0/0?', choices: ['Guess the answer', 'Algebraic manipulation (factor, rationalize)', 'The limit does not exist', 'Take the derivative'], correctIndex: 1, explanation: '0/0 is indeterminate — <strong>algebraic manipulation</strong> is needed to evaluate.' },
                    { question: 'lim(x→3) f(x) = 5, but f(3) = 7. Does the limit exist?', choices: ['No, because f(3) ≠ 5', 'Yes — limits depend on approach, not the value at the point', 'No, because f(3) is defined', 'Only if f is continuous'], correctIndex: 1, explanation: '<strong>Yes</strong> — a limit describes what f approaches, not what it equals at that point.' },
                    { question: 'A limit exists even if the function is undefined at that point.', choices: ['True', 'False'], correctIndex: 0, explanation: '<strong>True</strong> — limits are about approach, not value at the point.' },
                    { question: 'lim(x→1) (x² − 1)/(x − 1) =', choices: ['0', '1', '2', 'Undefined'], correctIndex: 2, explanation: 'Factor: (x+1)(x−1)/(x−1) = x+1. At x=1: 1+1 = <strong>2</strong>.' },
                ]}
            ]},

            // ---- 2. Limit Laws & Techniques ----
            { id: 'limit-techniques', title: 'Limit Laws & Techniques', subtitle: 'Evaluating tricky limits', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Limit Laws</h3><p>Limits obey arithmetic rules: lim(f + g) = lim f + lim g, lim(cf) = c · lim f, lim(fg) = (lim f)(lim g), etc.</p><h3>Techniques for 0/0 Forms</h3><p>When substitution gives 0/0: (1) <strong>Factor and cancel</strong>. (2) <strong>Rationalize</strong> (multiply by conjugate). (3) <strong>Simplify</strong> the expression first.</p>` },
                { type: 'example', title: 'Factoring to Resolve 0/0', content: `<p><strong>lim(x→2) (x²−4)/(x−2):</strong> Direct sub gives 0/0. Factor: (x+2)(x−2)/(x−2) = x+2. Now substitute: 2+2 = <strong>4</strong>.</p>` },
                { type: 'steps', title: 'Resolving 0/0 Indeterminate Forms', steps: [
                    'Try direct substitution. If 0/0, proceed.',
                    'Factor: look for common factors in numerator and denominator to cancel.',
                    'Rationalize: if there\'s a square root, multiply by the conjugate.',
                    'Simplify algebraically, then substitute again.',
                    'If still indeterminate, consider L\'Hôpital\'s rule (covered later).'
                ]},
                { type: 'generated_practice', generators: ['calc-limit-concept'] },
                { type: 'practice', problems: [
                    { question: 'If direct substitution gives 5/0 (not 0/0), the limit:', choices: ['Equals 0', 'Equals 5', 'Does not exist (or is ±∞)', 'Needs L\'Hôpital\'s rule'], correctIndex: 2, explanation: 'A non-zero numerator over 0 means the function grows without bound: <strong>DNE or ±∞</strong>.' },
                    { question: 'To evaluate lim(x→1) (x²−1)/(x−1), the best first step is:', choices: ['Use L\'Hôpital\'s rule', 'Factor the numerator', 'Multiply by the conjugate', 'Set x = 0'], correctIndex: 1, explanation: 'x²−1 = (x+1)(x−1), so <strong>factor</strong> to cancel the (x−1).' },
                    { question: 'lim(x→0) sin(x)/x =', choices: ['0', '1', '∞', 'DNE'], correctIndex: 1, explanation: 'This is a famous limit: <strong>1</strong>.' },
                    { question: 'If direct substitution gives 0/0, the limit:', choices: ['Is always 0', 'Does not exist', 'Requires more work', 'Is always ∞'], correctIndex: 2, explanation: '0/0 is <strong>indeterminate</strong> — use algebraic techniques to evaluate.' },
                ]}
            ]},

            // ---- 3. L'Hôpital's Rule ----
            { id: 'lhopital', title: "L'Hôpital's Rule", subtitle: 'Evaluating indeterminate limits', xpReward: 50, sections: [
                { type: 'text', content: `<h3>L'Hôpital's Rule</h3><p>If lim(x→c) f(x)/g(x) gives <strong>0/0</strong> or <strong>∞/∞</strong>, then:</p><p style="text-align:center;"><strong>lim(x→c) f(x)/g(x) = lim(x→c) f′(x)/g′(x)</strong></p><p>Differentiate numerator and denominator <em>separately</em> (not as a quotient!), then evaluate again. Repeat if still indeterminate.</p>` },
                { type: 'example', title: "Applying L'Hôpital's Rule", content: `<p><strong>lim(x→0) (eˣ − 1)/x</strong>: direct sub gives 0/0. Apply L'Hôpital: differentiate top and bottom separately.</p><p>Numerator: d/dx[eˣ − 1] = eˣ. Denominator: d/dx[x] = 1. New limit: eˣ/1 at x=0 = <strong>1</strong>.</p>` },
                { type: 'steps', title: "Using L'Hôpital's Rule", steps: [
                    'Confirm the limit gives an indeterminate form: 0/0 or ∞/∞.',
                    'Differentiate the numerator and denominator SEPARATELY (not as a quotient!).',
                    'Evaluate the new limit by substitution.',
                    'If still indeterminate, apply L\'Hôpital\'s rule again.',
                    'Stop when the limit can be evaluated directly.'
                ]},
                { type: 'generated_practice', generators: ['lhopital-eval', 'lhopital-concept'] },
                { type: 'practice', problems: [
                    { question: "L'Hôpital's applies when the limit form is:", choices: ['0/0 or ∞/∞', '1/0', '∞−∞ directly', 'Any fraction'], correctIndex: 0, explanation: "It applies to <strong>0/0 or ∞/∞</strong> indeterminate forms." },
                    { question: 'lim(x→0) sin(x)/x using L\'Hôpital: cos(x)/1 at x=0 =', choices: ['0', '1', '∞', '−1'], correctIndex: 1, explanation: 'cos(0)/1 = <strong>1</strong>.' },
                    { question: 'lim(x→∞) x/eˣ. Apply L\'Hôpital: 1/eˣ as x→∞ =', choices: ['∞', '1', '0', 'DNE'], correctIndex: 2, explanation: '1/eˣ → <strong>0</strong> as x→∞.' },
                    { question: "In L'Hôpital's, you differentiate:", choices: ['The whole fraction as a quotient', 'Top and bottom separately', 'Only the top', 'Only the bottom'], correctIndex: 1, explanation: 'Differentiate numerator and denominator <strong>separately</strong>.' },
                ]}
            ]},

            // ---- 4. Continuity ----
            { id: 'continuity', title: 'Continuity', subtitle: 'When functions have no breaks', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Continuity</h3><p>A function is <strong>continuous</strong> when its graph has no breaks, holes, or jumps — you could draw it without lifting your pencil. But how do we check this precisely?</p><p>A function is <strong>continuous at x = c</strong> if all three of these hold:</p><ol><li><strong>f(c) is defined</strong> — the function actually has a value there (no division by zero, etc.)</li><li><strong>lim(x→c) f(x) exists</strong> — the function approaches the same value from both sides</li><li><strong>lim(x→c) f(x) = f(c)</strong> — the limit equals the actual value at that point</li></ol><p>If any one condition fails, the function is <em>discontinuous</em> at c. Types of discontinuity: <strong>removable</strong> (a single hole — the limit exists, but the value is missing or wrong), <strong>jump</strong> (the function steps to a different value), <strong>infinite</strong> (the function shoots to ±∞, creating a vertical asymptote).</p>` },
                { type: 'example', title: 'Checking Continuity at a Point', content: `<p>Is f(x) = (x²−1)/(x−1) continuous at x = 1?</p><p>(1) f(1) = 0/0 — <strong>undefined</strong>. Condition 1 fails → <strong>not continuous</strong> at x = 1. This is a removable discontinuity (hole).</p>` },
                { type: 'steps', title: 'Checking Continuity at x = c', steps: [
                    'Check that f(c) is defined (no division by zero, no square root of negative).',
                    'Compute the limit lim(x→c) f(x) — check both sides agree.',
                    'Verify that the limit equals f(c).',
                    'If any condition fails, identify the type: removable (hole), jump, or infinite (asymptote).'
                ]},
                { type: 'practice', problems: [
                    { question: 'For continuity at x = c, we need:', choices: ['Just f(c) defined', 'Just the limit exists', 'f(c) defined, limit exists, and they\'re equal', 'f(c) = 0'], correctIndex: 2, explanation: 'All three conditions: f(c) defined, limit exists, <strong>limit = f(c)</strong>.' },
                    { question: 'A hole in a graph is what type of discontinuity?', choices: ['Jump', 'Removable', 'Infinite', 'Oscillating'], correctIndex: 1, explanation: 'A hole is a <strong>removable</strong> discontinuity.' },
                    { question: 'A vertical asymptote is what type of discontinuity?', choices: ['Removable', 'Jump', 'Infinite', 'None'], correctIndex: 2, explanation: 'Vertical asymptotes create <strong>infinite</strong> discontinuities.' },
                    { question: 'Polynomials are continuous:', choices: ['Only at integers', 'Only on (0, ∞)', 'Everywhere', 'Nowhere'], correctIndex: 2, explanation: 'Polynomials are continuous <strong>everywhere</strong>.' },
                ]}
            ]},

            // ---- 5. Derivatives: Concept ----
            { id: 'derivative-concept', title: 'The Derivative Concept', subtitle: 'Instantaneous rate of change', xpReward: 40, sections: [
                { type: 'text', content: `<h3>What Is a Derivative?</h3><p>Your car has two instruments: an <strong>odometer</strong> (total miles traveled) and a <strong>speedometer</strong> (speed right now). The odometer tracks accumulated change; the speedometer shows the <em>rate</em> of change at this exact moment. The derivative is mathematics' version of a speedometer.</p><p>The <strong>derivative</strong> of f(x) at x = a is the <em>instantaneous rate of change</em> — how fast the output is changing at that specific input value.</p><p>Geometrically, it's the <strong>slope of the tangent line</strong> at that point. A tangent line just touches the curve at one point and matches its direction. To find it, we start with the slope of a secant line (connecting two nearby points), then zoom in until those points are infinitely close:</p><p style="text-align:center;"><strong>f′(a) = lim(h→0) [f(a+h) − f(a)] / h</strong></p><p>This formula is the slope formula (rise over run) where the "run" h shrinks toward zero.</p>` },
                { type: 'example', title: 'Limit Definition in Action', content: `<p>Find f′(x) for f(x) = x².</p><p>f′(x) = lim(h→0) [(x+h)² − x²]/h = lim(h→0) [2xh + h²]/h = lim(h→0) (2x + h) = <strong>2x</strong>.</p>` },
                { type: 'steps', title: 'Using the Limit Definition of the Derivative', steps: [
                    'Write f(x+h) by replacing every x with (x+h).',
                    'Form the difference quotient: [f(x+h) − f(x)] / h.',
                    'Expand and simplify — the goal is to cancel the h in the denominator.',
                    'Take the limit as h → 0.',
                    'The result is f′(x).'
                ]},
                { type: 'generated_practice', generators: ['calc-derivative-def'] },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p>Derivative = slope of tangent = instantaneous rate of change. The limit definition is the foundation, but we'll learn shortcuts next.</p>` },
                { type: 'practice', problems: [
                    { question: 'The derivative measures:', choices: ['The area under a curve', 'The instantaneous rate of change', 'The total change', 'The average value'], correctIndex: 1, explanation: 'The derivative gives the <strong>instantaneous rate of change</strong>.' },
                    { question: 'Geometrically, f′(a) is the slope of:', choices: ['The secant line', 'The tangent line at x=a', 'The x-axis', 'The y-axis'], correctIndex: 1, explanation: 'f′(a) = slope of the <strong>tangent line</strong> at x = a.' },
                    { question: 'Using the limit definition, f′(x) for f(x)=x² is:', choices: ['x', '2x', 'x²', '2'], correctIndex: 1, explanation: 'lim(h→0) [(x+h)²−x²]/h = lim(h→0)(2x+h) = <strong>2x</strong>.' },
                    { question: 'If f(x) = 5 (constant), then f′(x) =', choices: ['5', '1', '0', 'Undefined'], correctIndex: 2, explanation: 'The derivative of a constant is <strong>0</strong>.' },
                ]}
            ]},

            // ---- 6. Power Rule ----
            { id: 'power-rule', title: 'The Power Rule', subtitle: 'Differentiating xⁿ', xpReward: 45, sections: [
                { type: 'text', content: `<h3>The Power Rule</h3><p>If f(x) = x<sup>n</sup>, then:</p><p style="text-align:center;font-size:1.1em;"><strong>f′(x) = n·x<sup>n−1</sup></strong></p><p>Combined with the constant multiple rule and the sum rule, you can differentiate any polynomial.</p>` },
                { type: 'example', title: 'Applying the Power Rule', content: `<p>f(x) = 3x⁴ − 2x² + 7x − 5. f′(x) = 12x³ − 4x + 7.</p>` },
                { type: 'interactive_steps', title: 'Guided: Differentiate f(x) = 5x⁴ − 3x² + 7x − 2', description: 'Apply the power rule term by term.', steps: [
                    { text: 'd/dx [5x⁴] = 5 · 4 · x³ = {blank}x³', answer: '20', hint: '5 × 4' },
                    { text: 'd/dx [−3x²] = −3 · 2 · x = {blank}x', answer: '-6', hint: '−3 × 2' },
                    { text: 'd/dx [7x] = {blank}', answer: '7', hint: 'x¹ → 1·x⁰ = 1, times coefficient 7' },
                    { text: 'd/dx [−2] = {blank}', answer: '0', hint: 'Derivative of a constant' },
                    { text: 'f′(x) = 20x³ − 6x + {blank}', answer: '7', hint: 'Combine all terms' }
                ], result: 'f′(x) = 20x³ − 6x + 7' },
                { type: 'generated_practice', generators: ['calc-power-rule', 'calc-diff-rules'] },
                { type: 'practice', problems: [
                    { question: 'd/dx [x⁵] =', choices: ['5x⁴', '5x⁵', 'x⁴', '4x⁵'], correctIndex: 0, explanation: '5x⁵⁻¹ = <strong>5x⁴</strong>.' },
                    { question: 'The power rule says d/dx[xⁿ] =', choices: ['nxⁿ', 'nxⁿ⁻¹', '(n−1)xⁿ', 'xⁿ⁻¹'], correctIndex: 1, explanation: '<strong>nxⁿ⁻¹</strong> — bring the exponent down and reduce it by 1.' },
                    { question: 'd/dx [x] =', choices: ['0', '1', 'x', '1/x'], correctIndex: 1, explanation: 'x = x¹, so 1·x⁰ = <strong>1</strong>.' },
                    { question: 'Which rule lets you differentiate a sum term by term?', choices: ['Product rule', 'Chain rule', 'Sum rule', 'Quotient rule'], correctIndex: 2, explanation: 'The <strong>sum rule</strong>: d/dx[f + g] = f′ + g′. Differentiate each term separately.' },
                    { question: 'd/dx [7] =', choices: ['7', '1', '0', '7x'], correctIndex: 2, explanation: 'Derivative of a constant = <strong>0</strong>.' },
                ]}
            ]},

            // ---- 7. Derivatives of Trig, Exponential & Log Functions ----
            { id: 'trig-exp-log-derivatives', title: 'Derivatives of Trig, Exponential & Log Functions', subtitle: 'Standard derivatives to memorize', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Standard Derivatives to Memorize</h3><p>Beyond polynomials, these are the building-block derivatives every calculus student needs:</p><ul><li><strong>d/dx[sin x] = cos x</strong></li><li><strong>d/dx[cos x] = −sin x</strong></li><li><strong>d/dx[tan x] = sec²x</strong></li><li><strong>d/dx[csc x] = −csc x cot x</strong></li><li><strong>d/dx[sec x] = sec x tan x</strong></li><li><strong>d/dx[cot x] = −csc²x</strong></li><li><strong>d/dx[e<sup>x</sup>] = e<sup>x</sup></strong> — the exponential function is its own derivative!</li><li><strong>d/dx[a<sup>x</sup>] = a<sup>x</sup> ln a</strong></li><li><strong>d/dx[ln x] = 1/x</strong> (for x &gt; 0)</li><li><strong>d/dx[log<sub>a</sub> x] = 1/(x ln a)</strong></li></ul><h3>Why d/dx[sin x] = cos x?</h3><p>Intuitively: the slope of the sine curve at x = 0 is 1, and cos(0) = 1. The slope of sine at x = π/2 is 0, and cos(π/2) = 0. The cosine function perfectly tracks the slope of the sine curve at every point.</p><p>These rules combine with the power rule, chain rule, product rule, and quotient rule to differentiate virtually any expression.</p>` },
                { type: 'example', title: 'Combining the Rules', content: `<p><strong>d/dx[3e<sup>x</sup> + 2sin x]</strong> = 3e<sup>x</sup> + 2cos x</p><p><strong>d/dx[x² ln x]</strong>: product rule → 2x·ln x + x²·(1/x) = 2x ln x + x</p><p><strong>d/dx[tan(x²)]</strong>: chain rule → sec²(x²) · 2x = 2x sec²(x²)</p>` },
                { type: 'steps', title: 'Differentiating Trig, Exp & Log Expressions', steps: [
                    'Identify the function type: is it a trig function, exponential, or logarithm?',
                    'Apply the matching derivative rule from the list above.',
                    'If it is a composition (e.g., sin(3x) or e^(x²)), apply the chain rule: multiply by the derivative of the inner function.',
                    'For products like x²·ln x, use the product rule combined with the log derivative.',
                    'Always check whether the chain rule is needed — any time the argument is more than just x.'
                ]},
                { type: 'generated_practice', generators: ['calc-trig-deriv', 'calc-exp-log-deriv'] },
                { type: 'practice', problems: [
                    { question: 'd/dx[e<sup>x</sup>] =', choices: ['xe<sup>x−1</sup>', 'e<sup>x</sup>', 'e<sup>x</sup> ln e', '1/e<sup>x</sup>'], correctIndex: 1, explanation: 'The exponential function e<sup>x</sup> is its own derivative: <strong>e<sup>x</sup></strong>.' },
                    { question: 'd/dx[ln x] =', choices: ['ln x', '1/x', 'x ln x', '1/(x ln 10)'], correctIndex: 1, explanation: 'd/dx[ln x] = <strong>1/x</strong> for x &gt; 0.' },
                    { question: 'd/dx[cos x] =', choices: ['sin x', '−sin x', 'cos x', '−cos x'], correctIndex: 1, explanation: 'd/dx[cos x] = <strong>−sin x</strong>.' },
                    { question: 'd/dx[tan x] =', choices: ['sec x', 'csc²x', 'sec²x', 'sin x / cos²x'], correctIndex: 2, explanation: 'd/dx[tan x] = <strong>sec²x</strong>.' },
                    { question: 'd/dx[3sin x + 2e<sup>x</sup>] =', choices: ['3cos x + 2e<sup>x</sup>', '−3cos x + 2e<sup>x</sup>', '3cos x − 2e<sup>x</sup>', '−3sin x + 2e<sup>x</sup>'], correctIndex: 0, explanation: 'd/dx[3sin x] = 3cos x and d/dx[2e<sup>x</sup>] = 2e<sup>x</sup>, so the answer is <strong>3cos x + 2e<sup>x</sup></strong>.' },
                ]}
            ]},

            // ---- 8. Product Rule ----
            { id: 'product-rule', title: 'The Product Rule', subtitle: 'Differentiating products', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Product Rule</h3><p>If h(x) = f(x)·g(x), then <strong>h′(x) = f′(x)g(x) + f(x)g′(x)</strong>.</p><p>You CANNOT just multiply the derivatives: (fg)′ ≠ f′g′. You must use the product rule.</p>` },
                { type: 'example', title: 'Product Rule Example', content: `<p>h(x) = x² · sin(x). h′(x) = 2x·sin(x) + x²·cos(x).</p>` },
                { type: 'interactive_steps', title: 'Guided: Differentiate h(x) = x³ · ln(x)', description: 'Apply the product rule: (fg)′ = f′g + fg′.', steps: [
                    { text: 'Let f(x) = x³. Then f′(x) = {blank}', answer: '3x²', hint: 'Use the power rule' },
                    { text: 'Let g(x) = ln(x). Then g′(x) = {blank}', answer: '1/x', hint: 'The derivative of ln(x) is...' },
                    { text: 'f′g = 3x² · ln(x). fg′ = x³ · {blank}', answer: '1/x', hint: 'Plug in g′(x)' },
                    { text: 'x³ · (1/x) simplifies to {blank}', answer: 'x²', hint: 'x³/x = ?' },
                    { text: 'Final: h′(x) = 3x²ln(x) + {blank}', answer: 'x²', hint: 'From the previous step' }
                ], result: 'h′(x) = 3x²ln(x) + x²' },
                { type: 'generated_practice', generators: ['calc-product-rule'] },
                { type: 'tips', content: `<h4>💡 Memory Aid</h4><p>"First times derivative of second PLUS second times derivative of first." Or think: <strong>f′g + fg′</strong>.</p><p>The order doesn't matter: f′g + fg′ = fg′ + f′g (addition is commutative).</p>` },
                { type: 'practice', problems: [
                    { question: 'd/dx [x · eˣ] =', choices: ['eˣ', 'xeˣ', 'eˣ + xeˣ', 'xeˣ + eˣ'], correctIndex: 2, explanation: '1·eˣ + x·eˣ = <strong>eˣ + xeˣ</strong>.' },
                    { question: 'The product rule gives (fg)′ =', choices: ['f′g′', 'fg′ + f′g', 'f′g − fg′', 'f/g + g/f'], correctIndex: 1, explanation: '<strong>f′g + fg′</strong>.' },
                    { question: 'd/dx [x³ · ln(x)] =', choices: ['3x²ln(x) + x²', '3x²ln(x)', 'x²ln(x) + x³/x', '3x²/x'], correctIndex: 0, explanation: '3x²·ln(x) + x³·(1/x) = 3x²ln(x) + x² = <strong>3x²ln(x) + x²</strong>.' },
                    { question: 'Can you just multiply derivatives? (fg)′ = f′g′?', choices: ['Yes, always', 'No, use product rule', 'Only for polynomials', 'Only for trig'], correctIndex: 1, explanation: '<strong>No</strong> — you must use the product rule.' },
                ]}
            ]},

            // ---- 9. Quotient Rule ----
            { id: 'quotient-rule', title: 'The Quotient Rule', subtitle: 'Differentiating fractions', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Quotient Rule</h3><p>If h(x) = f(x)/g(x), then:</p><p style="text-align:center;"><strong>h′(x) = [f′(x)g(x) − f(x)g′(x)] / [g(x)]²</strong></p><p>Memory: "lo d-hi minus hi d-lo, all over lo squared."</p>` },
                { type: 'interactive_steps', title: 'Guided: Differentiate h(x) = x² / (x + 1)', description: 'Apply the quotient rule: (f′g − fg′) / g².', steps: [
                    { text: 'Let f = x², g = x + 1. f′ = {blank}', answer: '2x', hint: 'Power rule on x²' },
                    { text: 'g′ = {blank}', answer: '1', hint: 'd/dx of (x + 1)' },
                    { text: 'Numerator: f′g − fg′ = 2x(x+1) − x²({blank})', answer: '1', hint: 'Plug in g′' },
                    { text: '= 2x² + 2x − x² = {blank} + 2x', answer: 'x²', hint: 'Combine 2x² − x²' },
                    { text: 'Denominator: g² = {blank}', answer: '(x+1)²', hint: 'Square the denominator' }
                ], result: 'h′(x) = (x² + 2x) / (x + 1)²' },
                { type: 'generated_practice', generators: ['calc-quotient-rule'] },
                { type: 'practice', problems: [
                    { question: 'd/dx [x/(x+1)] at the numerator calculation:', choices: ['1·(x+1) − x·1', '1·(x+1) + x·1', 'x·1 − 1·(x+1)', '(x+1)/x²'], correctIndex: 0, explanation: 'Numerator: f′g − fg′ = <strong>1·(x+1) − x·1</strong> = 1.' },
                    { question: 'The quotient rule denominator is always:', choices: ['f(x)²', 'g(x)²', 'f(x)g(x)', '[f(x)+g(x)]²'], correctIndex: 1, explanation: 'Denominator is <strong>[g(x)]²</strong>.' },
                    { question: 'd/dx [sin x / x] =', choices: ['(x cos x − sin x)/x²', 'cos x / x', '(cos x − sin x)/x', 'sin x / x²'], correctIndex: 0, explanation: '(cos(x)·x − sin(x)·1)/x² = <strong>(x cos x − sin x)/x²</strong>.' },
                    { question: 'An alternative to the quotient rule: rewrite f/g as:', choices: ['f + g⁻¹', 'f · g⁻¹ and use product rule', 'f − g', 'f · g'], correctIndex: 1, explanation: 'You can write f/g = f · g⁻¹ and use the <strong>product rule</strong> with chain rule.' },
                ]}
            ]},

            // ---- 10. Chain Rule ----
            { id: 'chain-rule', title: 'The Chain Rule', subtitle: 'Differentiating compositions', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Chain Rule</h3><p>Think of a chocolate-covered peanut: there's an outer layer (chocolate) and an inner core (peanut). When you have a <strong>function inside another function</strong> — like sin(x²) or (3x+1)⁵ — you have a composition. The chain rule tells you how to differentiate it.</p><p>If h(x) = f(g(x)) — f is the outer function, g is the inner — then:</p><p style="text-align:center;"><strong>h′(x) = f′(g(x)) · g′(x)</strong></p><p>In words: <em>take the derivative of the outer function (leaving the inner untouched), then multiply by the derivative of the inner function</em>.</p><p>This is probably the most-used derivative rule in all of calculus. You'll need it for exponentials, trig functions, logarithms — anytime one function is "plugged into" another.</p>` },
                { type: 'example', title: 'Chain Rule Example', content: `<p>h(x) = (3x + 1)⁵. Outer: u⁵, inner: 3x+1. h′(x) = 5(3x+1)⁴ · 3 = <strong>15(3x+1)⁴</strong>.</p>` },
                { type: 'interactive_steps', title: 'Guided: Differentiate f(x) = sin(x²)', description: 'Identify the outer and inner functions, then apply the chain rule.', steps: [
                    { text: 'The outer function is sin(u). Its derivative is {blank}', answer: 'cos(u)', hint: 'What is the derivative of sin?' },
                    { text: 'The inner function u = x². Its derivative is {blank}', answer: '2x', hint: 'Use the power rule on x²' },
                    { text: 'Chain rule: f′(x) = cos(x²) · {blank}', answer: '2x', hint: 'Multiply by the derivative of the inner' },
                    { text: 'Final answer: f′(x) = {blank}', answer: '2xcos(x²)', hint: 'Put it all together: 2x · cos(x²)' }
                ], result: 'f′(x) = 2x cos(x²) — outer derivative × inner derivative!' },
                { type: 'generated_practice', generators: ['calc-chain-rule'] },
                { type: 'tips', content: `<h4>💡 Common Mistakes</h4><p>The #1 chain rule mistake: <strong>forgetting to multiply by the inner derivative</strong>. d/dx[sin(3x)] is NOT cos(3x) — it's 3cos(3x).</p><p>Look for the chain rule whenever you see a "function inside a function": (...)ⁿ, sin(...), e^(...), ln(...), √(...).</p>` },
                { type: 'practice', problems: [
                    { question: 'd/dx [sin(3x)] =', choices: ['cos(3x)', '3cos(3x)', '3sin(3x)', 'cos(x)·3'], correctIndex: 1, explanation: 'cos(3x)·3 = <strong>3cos(3x)</strong>.' },
                    { question: 'd/dx [e²ˣ] =', choices: ['e²ˣ', '2e²ˣ', '2xe²ˣ', 'e²ˣ/2'], correctIndex: 1, explanation: 'e²ˣ · 2 = <strong>2e²ˣ</strong>.' },
                    { question: 'd/dx [(x²+1)³] =', choices: ['3(x²+1)²', '6x(x²+1)²', '3x(x²+1)²', '2x(x²+1)³'], correctIndex: 1, explanation: '3(x²+1)² · 2x = <strong>6x(x²+1)²</strong>.' },
                    { question: 'The chain rule applies when you have:', choices: ['A sum', 'A product', 'A composition (function inside function)', 'A constant'], correctIndex: 2, explanation: 'Chain rule is for <strong>compositions</strong> — f(g(x)).' },
                ]}
            ]},

            // ---- 11. Implicit Differentiation ----
            { id: 'implicit-diff', title: 'Implicit Differentiation', subtitle: 'When y isn\'t isolated', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Implicit Differentiation</h3><p>When y is defined implicitly (e.g., x² + y² = 25), differentiate both sides with respect to x, treating y as a function of x. Every time you differentiate a y-term, multiply by <strong>dy/dx</strong>. Then solve for dy/dx.</p>` },
                { type: 'example', title: 'Circle Example', content: `<p>x² + y² = 25. Differentiate: 2x + 2y(dy/dx) = 0. Solve: dy/dx = <strong>−x/y</strong>.</p>` },
                { type: 'interactive_steps', title: 'Guided: Find dy/dx for x³ + y³ = 6xy', description: 'Differentiate both sides, collect dy/dx terms, and solve.', steps: [
                    { text: 'd/dx of x³ = {blank}', answer: '3x²', hint: 'Power rule on x³' },
                    { text: 'd/dx of y³ = 3y² · {blank} (chain rule — y is a function of x)', answer: 'dy/dx', hint: 'Multiply by dy/dx when differentiating y' },
                    { text: 'd/dx of 6xy = 6y + 6x·{blank} (product rule)', answer: 'dy/dx', hint: 'd/dx of y = dy/dx' },
                    { text: 'Equation: 3x² + 3y²(dy/dx) = 6y + 6x(dy/dx). Collect dy/dx terms on one side: 3y²(dy/dx) − 6x(dy/dx) = {blank}', answer: '6y-3x²', hint: 'Move non-dy/dx terms to the right' },
                    { text: 'Factor: (3y² − 6x)(dy/dx) = 6y − 3x². So dy/dx = {blank}', answer: '(6y-3x²)/(3y²-6x)', hint: 'Divide both sides by (3y² − 6x)' }
                ], result: 'dy/dx = (6y − 3x²)/(3y² − 6x) = (2y − x²)/(y² − 2x)' },
                { type: 'generated_practice', generators: ['calc-implicit-diff'] },
                { type: 'tips', content: `<h4>💡 Key Rules</h4><p>1. Every time you differentiate a <strong>y</strong> term, tack on <strong>dy/dx</strong>.</p><p>2. Use the <strong>product rule</strong> for terms like xy (since both depend on x).</p><p>3. After differentiating, <strong>collect all dy/dx terms</strong> on one side, factor, and divide.</p>` },
                { type: 'practice', problems: [
                    { question: 'Differentiate x² + y² = 16 implicitly. dy/dx =', choices: ['−x/y', 'x/y', '−y/x', '−2x'], correctIndex: 0, explanation: '2x + 2y(dy/dx) = 0 → dy/dx = <strong>−x/y</strong>.' },
                    { question: 'When differentiating y³ with respect to x, you get:', choices: ['3y²', '3y²(dy/dx)', '3x²', 'y³(dy/dx)'], correctIndex: 1, explanation: 'Chain rule: 3y² · dy/dx = <strong>3y²(dy/dx)</strong>.' },
                    { question: 'Differentiate xy = 6. dy/dx =', choices: ['−y/x', '6/x²', 'y/x', '−6/x'], correctIndex: 0, explanation: 'Product rule: y + x(dy/dx) = 0 → dy/dx = <strong>−y/x</strong>.' },
                    { question: 'Implicit differentiation is needed when:', choices: ['y is isolated', 'y cannot be easily solved for', 'The function is linear', 'x is constant'], correctIndex: 1, explanation: 'Use it when <strong>y can\'t be easily isolated</strong>.' },
                ]}
            ]},

            // ---- 12. Applications: Increasing/Decreasing & Extrema ----
            { id: 'increasing-decreasing', title: 'Increasing, Decreasing & Extrema', subtitle: 'First derivative test', xpReward: 50, sections: [
                { type: 'text', content: `<h3>First Derivative Test</h3><p>If f′(x) > 0 on an interval → f is <strong>increasing</strong>. If f′(x) < 0 → f is <strong>decreasing</strong>.</p><p><strong>Critical points</strong>: where f′(x) = 0 or undefined. At a critical point, if f′ changes from + to −, it's a <strong>local max</strong>. If − to +, it's a <strong>local min</strong>.</p>` },
                { type: 'example', title: 'First Derivative Test', content: `<p>f(x) = x³ − 3x. f′(x) = 3x² − 3 = 3(x+1)(x−1). Critical points at x = ±1.</p><p>Sign of f′: positive for x < −1 (increasing), negative for −1 < x < 1 (decreasing), positive for x > 1 (increasing).</p><p>x = −1: local max. x = 1: local min.</p>` },
                { type: 'steps', title: 'Finding Increasing/Decreasing Intervals and Extrema', steps: [
                    'Find f′(x).',
                    'Set f′(x) = 0 and solve for critical points. Note where f′(x) is undefined.',
                    'Create a sign chart: test f′(x) in each interval between critical points.',
                    'f′ > 0 → increasing; f′ < 0 → decreasing.',
                    'If f′ changes + to − at a critical point → local max. If − to + → local min.'
                ]},
                { type: 'generated_practice', generators: ['calc-increasing-decreasing'] },
                { type: 'tips', content: `<h4>💡 Key Distinctions</h4><p>A <strong>critical point</strong> is just a candidate — not every critical point is a max or min. f′ must actually <em>change sign</em> for it to be an extremum.</p><p><strong>Second derivative test shortcut:</strong> if f′(c) = 0 and f″(c) > 0 → local min; f″(c) < 0 → local max; f″(c) = 0 → inconclusive.</p>` },
                { type: 'practice', problems: [
                    { question: 'f(x) is increasing when f′(x) is:', choices: ['Zero', 'Positive', 'Negative', 'Undefined'], correctIndex: 1, explanation: 'f is increasing when f′(x) > 0 (<strong>positive</strong>).' },
                    { question: 'A critical point occurs when f′(x) =', choices: ['1', '0 or undefined', 'Positive', 'f(x)'], correctIndex: 1, explanation: 'Critical points: where f′(x) = <strong>0 or undefined</strong>.' },
                    { question: 'f′ changes from + to − at x=c. This is a:', choices: ['Local min', 'Local max', 'Inflection point', 'Saddle point'], correctIndex: 1, explanation: 'Positive to negative → <strong>local max</strong>.' },
                    { question: 'f(x) = x² has a critical point at x=0. It is a:', choices: ['Local max', 'Local min', 'Neither', 'Both'], correctIndex: 1, explanation: 'f′(x)=2x: negative before 0, positive after → <strong>local min</strong>.' },
                ]}
            ]},

            // ---- 13. Concavity & the Second Derivative ----
            { id: 'concavity', title: 'Concavity & the Second Derivative', subtitle: 'How the slope changes', xpReward: 55, sections: [
                { type: 'text', content: `<h3>The Second Derivative</h3><p>The second derivative f″(x) tells us about the <strong>rate of change of the slope</strong> — not just whether the function is increasing or decreasing, but whether it is speeding up or slowing down in its ascent or descent.</p><h3>Concavity</h3><ul><li>If <strong>f″(x) &gt; 0</strong> on an interval → the graph is <strong>concave up</strong> (cup shape, like a bowl holding water). The slope is increasing.</li><li>If <strong>f″(x) &lt; 0</strong> on an interval → the graph is <strong>concave down</strong> (dome shape). The slope is decreasing.</li></ul><h3>Inflection Points</h3><p>An <strong>inflection point</strong> is where the concavity changes. To find them: set f″(x) = 0 (or find where f″ is undefined), then verify that the sign of f″ actually changes across that point.</p><h3>Second Derivative Test</h3><p>For classifying critical points where f′(c) = 0:</p><ul><li>f″(c) &gt; 0 → <strong>local minimum</strong> (concave up, like the bottom of a bowl)</li><li>f″(c) &lt; 0 → <strong>local maximum</strong> (concave down, like the top of a hill)</li><li>f″(c) = 0 → <strong>test is inconclusive</strong> — use the first derivative test instead</li></ul><h3>Curve Sketching Checklist</h3><p>Domain → intercepts → first derivative (increasing/decreasing, critical points) → second derivative (concavity, inflection points) → sketch.</p>` },
                { type: 'example', title: 'Full Analysis: f(x) = x³ − 3x', content: `<p><strong>Critical points:</strong> f′(x) = 3x² − 3 = 0 → x = ±1.</p><p><strong>Classify:</strong> f″(x) = 6x. f″(−1) = −6 &lt; 0 → <strong>local max at x = −1</strong>. f″(1) = 6 &gt; 0 → <strong>local min at x = 1</strong>.</p><p><strong>Inflection point:</strong> f″(x) = 6x = 0 → x = 0. Sign changes (negative to positive), so <strong>inflection point at x = 0</strong>.</p>` },
                { type: 'steps', title: 'Complete Curve Sketching', steps: [
                    'Find f′(x) and set equal to 0 to find critical points.',
                    'Find f″(x).',
                    'Evaluate f″ at each critical point: positive → local min, negative → local max, zero → inconclusive.',
                    'Set f″(x) = 0 and find candidate inflection points. Check that the sign of f″ actually changes.',
                    'Determine intervals of concavity using a sign chart for f″.',
                    'Combine all information: plot intercepts, critical points, and inflection points, then sketch.'
                ]},
                { type: 'generated_practice', generators: ['calc-concavity', 'calc-inflection'] },
                { type: 'practice', problems: [
                    { question: 'If f″(x) > 0 on an interval, the graph is:', choices: ['Concave down', 'Decreasing', 'Concave up', 'Linear'], correctIndex: 2, explanation: 'f″ &gt; 0 means the slope is increasing → the graph is <strong>concave up</strong>.' },
                    { question: 'f′(c) = 0 and f″(c) > 0. The point x = c is a:', choices: ['Local max', 'Local min', 'Inflection point', 'Saddle point'], correctIndex: 1, explanation: 'f″ &gt; 0 means concave up at c → <strong>local minimum</strong>.' },
                    { question: 'An inflection point occurs where:', choices: ['f′(x) = 0', 'f(x) = 0', 'f″(x) = 0 and f″ changes sign', 'f′(x) changes from + to −'], correctIndex: 2, explanation: 'Inflection point: f″ = 0 <em>and</em> the <strong>sign of f″ changes</strong>.' },
                    { question: 'If f″(c) = 0, the second derivative test is:', choices: ['Conclusive: always a min', 'Conclusive: always a max', 'Inconclusive', 'Always an inflection point'], correctIndex: 2, explanation: 'f″(c) = 0 means the second derivative test is <strong>inconclusive</strong>.' },
                ]}
            ]},

            // ---- 14. Related Rates ----
            { id: 'related-rates', title: 'Related Rates', subtitle: 'Rates that depend on each other', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Related Rates</h3><p>When two or more quantities change with respect to time, their rates of change are <em>related</em>. Steps: (1) Draw a diagram. (2) Write an equation connecting the variables. (3) Differentiate both sides with respect to time t. (4) Substitute known values and solve.</p>` },
                { type: 'example', title: 'Expanding Balloon', content: `<p>Air is pumped into a balloon at 2 cm³/s. How fast is the radius growing when r = 3 cm?</p><p>V = (4/3)πr³. Differentiate: dV/dt = 4πr²(dr/dt). Plug in: 2 = 4π(9)(dr/dt). dr/dt = 2/(36π) = <strong>1/(18π) cm/s</strong>.</p>` },
                { type: 'steps', title: 'Solving Related Rates Problems', steps: [
                    'Read carefully and identify all quantities that change with time.',
                    'Draw a diagram and label variables.',
                    'Write an equation relating the variables (area, volume, Pythagorean theorem, similar triangles, etc.).',
                    'Differentiate both sides with respect to time t (use chain rule — every variable gets a d/dt).',
                    'Substitute the given values (rates and measurements) at the specific moment asked.',
                    'Solve for the unknown rate.'
                ]},
                { type: 'generated_practice', generators: ['related-rates-concept'] },
                { type: 'tips', content: `<h4>💡 Common Pitfall</h4><p><strong>Don't substitute numerical values before differentiating.</strong> The equation must be differentiated in general form first. Numbers go in only after you've taken the derivative.</p>` },
                { type: 'practice', problems: [
                    { question: 'In related rates, we differentiate with respect to:', choices: ['x', 'y', 't (time)', 'r'], correctIndex: 2, explanation: 'We differentiate with respect to <strong>time (t)</strong>.' },
                    { question: 'A circle\'s area A = πr². If r changes with time, dA/dt =', choices: ['2πr', 'πr²(dr/dt)', '2πr(dr/dt)', 'πr(dr/dt)'], correctIndex: 2, explanation: 'dA/dt = 2πr · (dr/dt) by chain rule: <strong>2πr(dr/dt)</strong>.' },
                    { question: 'A ladder slides down a wall. Which equation connects the variables?', choices: ['a + b = c', 'a² + b² = c²', 'A = ½bh', 'C = 2πr'], correctIndex: 1, explanation: '<strong>Pythagorean theorem</strong>: x² + y² = L² (ladder length).' },
                    { question: 'The first step in any related rates problem should be:', choices: ['Take the derivative', 'Draw a diagram', 'Plug in numbers', 'Find the answer'], correctIndex: 1, explanation: 'Always start by <strong>drawing a diagram</strong>.' },
                ]}
            ]},

            // ---- 15. Mean Value Theorem ----
            { id: 'mvt', title: 'Mean Value Theorem', subtitle: 'Connecting average and instantaneous rates', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Mean Value Theorem</h3><p>If f is continuous on [a,b] and differentiable on (a,b), then there exists some c in (a,b) where:</p><p style="text-align:center;"><strong>f′(c) = [f(b) − f(a)] / (b − a)</strong></p><p>In words: at some point, the instantaneous rate equals the average rate over the interval.</p>` },
                { type: 'example', title: 'Applying the MVT', content: `<p>f(x) = x² on [1, 4]. Average rate = (16−1)/(4−1) = 5. MVT says f′(c) = 5 for some c in (1,4).</p><p>f′(x) = 2x, so 2c = 5 → c = <strong>2.5</strong>. ✓ (2.5 is in (1,4)).</p>` },
                { type: 'steps', title: 'Applying the Mean Value Theorem', steps: [
                    'Verify the function is continuous on [a, b] and differentiable on (a, b).',
                    'Calculate the average rate of change: [f(b) − f(a)] / (b − a).',
                    'Find f′(x).',
                    'Set f′(c) equal to the average rate.',
                    'Solve for c and verify it lies in (a, b).'
                ]},
                { type: 'generated_practice', generators: ['mvt-concept'] },
                { type: 'practice', problems: [
                    { question: 'MVT guarantees a point where the tangent slope equals the:', choices: ['Maximum slope', 'Minimum slope', 'Average slope over [a,b]', 'Zero'], correctIndex: 2, explanation: 'MVT says the tangent slope equals the <strong>average slope</strong> at some point.' },
                    { question: 'MVT requires the function to be:', choices: ['Differentiable everywhere', 'Continuous on [a,b] and differentiable on (a,b)', 'Polynomial', 'Increasing'], correctIndex: 1, explanation: '<strong>Continuous on [a,b], differentiable on (a,b)</strong>.' },
                    { question: 'f(x)=x² on [1,3]. Average rate = (9−1)/(3−1) = 4. f′(c)=2c=4, so c=', choices: ['1', '2', '3', '4'], correctIndex: 1, explanation: '2c = 4 → c = <strong>2</strong>.' },
                    { question: 'If you drive 120 miles in 2 hours, MVT says at some point your speed was:', choices: ['0 mph', '30 mph', '60 mph', '120 mph'], correctIndex: 2, explanation: 'Average speed = 120/2 = <strong>60 mph</strong>. MVT guarantees you hit exactly 60 mph.' },
                ]}
            ]},

            // ---- 16. Optimization ----
            { id: 'optimization', title: 'Optimization', subtitle: 'Finding maximum and minimum values', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Optimization Problems</h3><p>Steps: (1) Define variables and write the quantity to optimize. (2) Write a constraint equation. (3) Reduce to one variable. (4) Take the derivative, set = 0. (5) Verify it's a max or min. (6) Answer the question.</p>` },
                { type: 'interactive_steps', title: 'Guided: A farmer has 100m of fencing for a rectangular pen against a barn (3 sides). Maximize area.', description: 'Set up the equation and find the maximum.', steps: [
                    { text: 'Let x = width (two sides), y = length (one side). Perimeter: 2x + y = {blank}', answer: '100', hint: 'Total fencing is 100m' },
                    { text: 'Solve for y: y = 100 − {blank}', answer: '2x', hint: 'Rearrange the perimeter equation' },
                    { text: 'Area = x · y = x(100 − 2x) = 100x − {blank}x²', answer: '2', hint: 'Distribute x' },
                    { text: 'A′(x) = 100 − 4x. Set to 0: x = {blank}', answer: '25', hint: '100 ÷ 4' },
                    { text: 'y = 100 − 2(25) = {blank}', answer: '50', hint: '100 − 50' },
                    { text: 'Max area = 25 × 50 = {blank} m²', answer: '1250', hint: 'Multiply' }
                ], result: 'Maximum area = 1250 m² with dimensions 25m × 50m' },
                { type: 'generated_practice', generators: ['optimization-setup'] },
                { type: 'practice', problems: [
                    { question: 'To find a maximum or minimum, set f′(x) =', choices: ['1', '−1', '0', 'f(x)'], correctIndex: 2, explanation: 'Critical points occur where f′(x) = <strong>0</strong>.' },
                    { question: 'A farmer has 100m of fence for a rectangular pen. Maximize area. Constraint:', choices: ['A = lw', '2l + 2w = 100', 'l = w', 'A = 100'], correctIndex: 1, explanation: 'Perimeter constraint: <strong>2l + 2w = 100</strong>.' },
                    { question: 'For the fence problem, max area occurs when:', choices: ['l = 100, w = 0', 'l = w = 25', 'l = 50, w = 0', 'l = 10, w = 40'], correctIndex: 1, explanation: 'A square maximizes area: l = w = <strong>25</strong>, giving A = 625.' },
                    { question: 'After finding a critical point, verify it\'s a max/min using:', choices: ['The original equation', 'First or second derivative test', 'Guessing', 'The constraint only'], correctIndex: 1, explanation: 'Use the <strong>first or second derivative test</strong> to classify.' },
                ]}
            ]},

            // ---- 17. Riemann Sums ----
            { id: 'riemann-sums', title: 'Riemann Sums', subtitle: 'Approximating area with rectangles', xpReward: 50, sections: [
                { type: 'text', content: `<h3>The Area Problem</h3><p>How do we find the exact area under a curve f(x) from x = a to x = b? The key idea: approximate it with rectangles, then make the rectangles infinitely thin.</p><h3>Setting Up Rectangles</h3><p>Divide [a, b] into <strong>n equal subintervals</strong>, each of width <strong>Δx = (b − a)/n</strong>. For each subinterval, draw a rectangle whose height is determined by the function value at a chosen point in that subinterval.</p><ul><li><strong>Left Riemann Sum</strong>: use the LEFT endpoint of each subinterval as the rectangle height</li><li><strong>Right Riemann Sum</strong>: use the RIGHT endpoint</li><li><strong>Midpoint Riemann Sum</strong>: use the MIDPOINT of each subinterval</li></ul><p>General formula: <strong>Σᵢ₌₁ⁿ f(xᵢ) · Δx</strong>, where xᵢ is the chosen point in each subinterval.</p><h3>Taking the Limit</h3><p>As n → ∞ (infinitely many, infinitely thin rectangles), the approximation becomes exact — and this <em>is</em> the definite integral: ∫ₐᵇ f(x) dx = lim(n→∞) Σ f(xᵢ)Δx.</p><h3>Over- and Underestimates</h3><p>For an <strong>increasing</strong> function: left sum <em>underestimates</em>, right sum <em>overestimates</em>. For a <strong>decreasing</strong> function it is the opposite.</p>` },
                { type: 'interactive_steps', title: 'Guided: Approximate ∫₀² x² dx using n = 4 left rectangles', description: 'Divide [0,2] into 4 subintervals and sum the left-endpoint rectangles.', steps: [
                    { text: 'Δx = (2 − 0)/4 = {blank}', answer: '0.5', hint: '(b − a)/n' },
                    { text: 'Left endpoints: x₀ = 0, x₁ = 0.5, x₂ = 1, x₃ = {blank}', answer: '1.5', hint: 'Each endpoint is 0.5 apart' },
                    { text: 'Heights: f(0) = 0, f(0.5) = 0.25, f(1) = 1, f(1.5) = {blank}', answer: '2.25', hint: '1.5² = ?' },
                    { text: 'Sum of heights = 0 + 0.25 + 1 + 2.25 = {blank}', answer: '3.5', hint: 'Add them up' },
                    { text: 'Left Riemann Sum = Δx · (sum of heights) = 0.5 × 3.5 = {blank}', answer: '1.75', hint: 'Multiply width by total height' }
                ], result: 'Left sum ≈ 1.75. The exact answer is 8/3 ≈ 2.67, so the left sum underestimates (f is increasing on [0,2]).' },
                { type: 'generated_practice', generators: ['riemann-sum-calc', 'riemann-compare'] },
                { type: 'practice', problems: [
                    { question: 'For n equal subintervals on [a,b], Δx =', choices: ['n/(b−a)', '(b−a)·n', '(b−a)/n', 'n·a'], correctIndex: 2, explanation: 'Width of each subinterval: <strong>Δx = (b − a)/n</strong>.' },
                    { question: 'For an increasing function, the left Riemann sum:', choices: ['Overestimates', 'Underestimates', 'Is exact', 'Equals the midpoint sum'], correctIndex: 1, explanation: 'For an increasing function, left endpoints are lower → left sum <strong>underestimates</strong>.' },
                    { question: 'As n → ∞ in a Riemann sum, the result approaches:', choices: ['0', 'f(b) − f(a)', 'The definite integral', 'The derivative'], correctIndex: 2, explanation: 'The Riemann sum limit is exactly <strong>the definite integral</strong>.' },
                    { question: 'A right Riemann sum uses the _____ of each subinterval as the rectangle height:', choices: ['Left endpoint', 'Midpoint', 'Right endpoint', 'Maximum value'], correctIndex: 2, explanation: 'Right Riemann sum uses the <strong>right endpoint</strong>.' },
                ]}
            ]},

            // ---- 18. Antiderivatives ----
            { id: 'antiderivatives', title: 'Antiderivatives', subtitle: 'Reversing differentiation', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Antiderivatives</h3><p>You've learned to go <em>forward</em>: take a function and find its derivative. Now we go in <em>reverse</em>: given the derivative, find the original function.</p><p>Real-world example: if you know your <strong>velocity</strong> at every moment, integrating (finding the antiderivative) gives you your <strong>position</strong> function. Velocity is the derivative of position — so the antiderivative of velocity is position.</p><p>An <strong>antiderivative</strong> of f(x) is any function F(x) where F′(x) = f(x). The notation <strong>∫f(x)dx</strong> means "find all functions whose derivative is f(x)."</p><p><strong>Power rule in reverse:</strong> ∫xⁿ dx = xⁿ⁺¹/(n+1) + C (for n ≠ −1). To verify: take the derivative of xⁿ⁺¹/(n+1) and you get xⁿ right back.</p><p>Why <strong>+C</strong>? Because the derivative of any constant is 0. That means x² + 5, x² − 7, and x² + 1000 all have the same derivative (2x). When reversing, we must account for any constant that might have disappeared — that's what +C represents.</p>` },
                { type: 'example', title: 'Finding an Antiderivative', content: `<p>Find ∫(4x³ + 2x − 5) dx.</p><p>Apply the power rule in reverse to each term:</p><p>x⁴ + x² − 5x + C = <strong>x⁴ + x² − 5x + C</strong>.</p>` },
                { type: 'steps', title: 'Finding Indefinite Integrals', steps: [
                    'For xⁿ: apply the reverse power rule — increase the exponent by 1, divide by the new exponent.',
                    'For constants: ∫k dx = kx + C.',
                    'Handle each term separately (sum/difference rule).',
                    'For trig, exponential, and log functions, use the known antiderivative pairs.',
                    'Always include + C at the end — every antiderivative is a family of functions.'
                ]},
                { type: 'generated_practice', generators: ['calc-antiderivative'] },
                { type: 'tips', content: `<h4>💡 Check Your Work</h4><p>Always verify an antiderivative by differentiating it — you should get the original integrand back.</p><p>Common pairs: ∫eˣ dx = eˣ + C. ∫1/x dx = ln|x| + C. ∫sin x dx = −cos x + C.</p>` },
                { type: 'practice', problems: [
                    { question: '∫x³ dx =', choices: ['3x²', 'x⁴/4 + C', 'x⁴ + C', '4x⁴ + C'], correctIndex: 1, explanation: 'x³⁺¹/(3+1) + C = <strong>x⁴/4 + C</strong>.' },
                    { question: '∫5 dx =', choices: ['5x + C', '5', '0', '5x²/2 + C'], correctIndex: 0, explanation: '∫5 dx = <strong>5x + C</strong>.' },
                    { question: '∫cos(x) dx =', choices: ['−sin(x) + C', 'sin(x) + C', 'cos(x) + C', 'tan(x) + C'], correctIndex: 1, explanation: 'Since d/dx[sin x] = cos x, ∫cos x dx = <strong>sin(x) + C</strong>.' },
                    { question: 'Why do we include "+ C"?', choices: ['Convention only', 'Because many functions have the same derivative', 'To make it harder', 'Only for polynomials'], correctIndex: 1, explanation: 'Any constant disappears when differentiated, so <strong>many functions share the same derivative</strong>.' },
                ]}
            ]},

            // ---- 20. Definite Integrals & FTC ----
            { id: 'definite-integrals', title: 'Definite Integrals & FTC', subtitle: 'The Fundamental Theorem of Calculus', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Definite Integrals</h3><p>Suppose you're on a road trip and you have a graph of your car's speed over time. To find the total <em>distance</em> traveled between time a and time b, you'd multiply speed × time — but your speed keeps changing! The definite integral solves this: it accumulates tiny slices of (speed × tiny time) and adds them all up.</p><p><strong>∫ₐᵇ f(x)dx</strong> represents the <strong>signed area</strong> between the curve f(x) and the x-axis from x = a to x = b. Area above the axis is positive; area below is negative.</p><h3>Fundamental Theorem of Calculus (Part 1)</h3><p>This is the most important theorem in calculus. It connects the two big ideas — derivatives and integrals — with a surprisingly simple formula:</p><p style="text-align:center;"><strong>∫ₐᵇ f(x)dx = F(b) − F(a)</strong></p><p>where F is <em>any</em> antiderivative of f (i.e., F′(x) = f(x)). Instead of adding up infinitely many tiny slices, you just evaluate the antiderivative at both endpoints and subtract. That's it!</p>` },
                { type: 'interactive_steps', title: 'Guided: Evaluate ∫₁⁴ (2x + 3) dx', description: 'Find the antiderivative, then apply the Fundamental Theorem.', steps: [
                    { text: 'Antiderivative of 2x is {blank}', answer: 'x²', hint: '2x → x² (power rule reversed)' },
                    { text: 'Antiderivative of 3 is {blank}', answer: '3x', hint: 'Constant k → kx' },
                    { text: 'F(x) = x² + 3x. F(4) = 16 + 12 = {blank}', answer: '28', hint: 'Plug in x = 4' },
                    { text: 'F(1) = 1 + 3 = {blank}', answer: '4', hint: 'Plug in x = 1' },
                    { text: '∫₁⁴ (2x+3)dx = F(4) − F(1) = 28 − 4 = {blank}', answer: '24', hint: 'Subtract' }
                ], result: '∫₁⁴ (2x + 3) dx = 24' },
                { type: 'generated_practice', generators: ['calc-ftc', 'calc-ftc-concept'] },
                { type: 'practice', problems: [
                    { question: '∫₁³ 2x dx =', choices: ['4', '8', '6', '10'], correctIndex: 1, explanation: 'F(x) = x². F(3)−F(1) = 9−1 = <strong>8</strong>.' },
                    { question: '∫₀^π sin(x) dx =', choices: ['0', '1', '2', '−1'], correctIndex: 2, explanation: 'F(x) = −cos x. (−cos π)−(−cos 0) = 1+1 = <strong>2</strong>.' },
                    { question: 'The FTC connects:', choices: ['Algebra and geometry', 'Derivatives and integrals', 'Limits and continuity', 'Vectors and matrices'], correctIndex: 1, explanation: 'The FTC links <strong>derivatives and integrals</strong>.' },
                    { question: '∫₂² f(x)dx =', choices: ['f(2)', '2f(2)', '0', 'Undefined'], correctIndex: 2, explanation: 'When upper = lower limit, the integral = <strong>0</strong>.' },
                ]}
            ]},

            // ---- 21. Area Between Curves ----
            { id: 'area-between-curves', title: 'Area Between Curves', subtitle: 'Integrating the difference of two functions', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Area Between Two Curves</h3><p>The area between f(x) and g(x) from x = a to x = b (where f(x) ≥ g(x) on that interval) is:</p><p style="text-align:center;"><strong>Area = ∫ₐᵇ [f(x) − g(x)] dx</strong></p><p>Key steps: (1) Sketch both curves. (2) Find intersection points — set f(x) = g(x) and solve for x, which gives the limits of integration. (3) Determine which function is on top (has larger y-values). (4) Integrate the difference.</p><p><strong>When curves cross:</strong> if f and g switch which one is on top at some point x = c inside [a, b], split the integral at c and take |f − g| on each piece separately.</p>` },
                { type: 'example', title: 'Example 1: y = x² and y = x', content: `<p>Find the area between y = x² and y = x.</p><p><strong>Intersections:</strong> x² = x → x(x−1) = 0 → x = 0 and x = 1.</p><p><strong>Which is on top?</strong> At x = 0.5: y = x gives 0.5, y = x² gives 0.25. So y = x is on top.</p><p><strong>Area</strong> = ∫₀¹ (x − x²) dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = <strong>1/6</strong>.</p>` },
                { type: 'example', title: 'Example 2: y = 4 and y = x²', content: `<p>Find the area between y = 4 and y = x².</p><p><strong>Intersections:</strong> 4 = x² → x = ±2.</p><p><strong>Area</strong> = ∫₋₂² (4 − x²) dx = [4x − x³/3]₋₂² = (8 − 8/3) − (−8 + 8/3) = 16 − 16/3 = <strong>32/3</strong>.</p>` },
                { type: 'steps', title: 'Finding Area Between Curves', steps: [
                    'Sketch both curves on the same axes to see which is on top.',
                    'Find intersection points by setting f(x) = g(x) and solving — these become your limits a and b.',
                    'Confirm which function has larger y-values on [a, b] (test a point).',
                    'Set up the integral: ∫ₐᵇ [top − bottom] dx.',
                    'If the curves cross within [a, b], split into multiple integrals at each crossing.',
                    'Evaluate using the Fundamental Theorem.'
                ]},
                { type: 'generated_practice', generators: ['area-between-curves-calc', 'area-intersection'] },
                { type: 'practice', problems: [
                    { question: 'Area between f and g (where f ≥ g) on [a,b] is:', choices: ['∫ f(x) dx', '∫ g(x) dx', '∫ [f(x) − g(x)] dx', '∫ [f(x) · g(x)] dx'], correctIndex: 2, explanation: 'Area = <strong>∫ [f(x) − g(x)] dx</strong>, integrating top minus bottom.' },
                    { question: 'To find the limits of integration for area between curves, you:', choices: ['Use x = 0 and x = 1 always', 'Find where the curves intersect', 'Differentiate both functions', 'Use the midpoint'], correctIndex: 1, explanation: 'Set f(x) = g(x) and solve to find where the curves <strong>intersect</strong> — those are the limits.' },
                    { question: 'Area between y = x and y = x² from 0 to 1:', choices: ['1/3', '1/6', '1/2', '1'], correctIndex: 1, explanation: '∫₀¹ (x − x²) dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = <strong>1/6</strong>.' },
                    { question: 'If curves cross at x = c inside [a,b], you should:', choices: ['Ignore the crossing', 'Use absolute value on the whole integral', 'Split into ∫ₐᶜ + ∫ᶜᵇ', 'Pick the larger function for the whole interval'], correctIndex: 2, explanation: '<strong>Split</strong> the integral at the crossing point and evaluate each piece separately.' },
                ]}
            ]},

            // ---- 22. U-Substitution ----
            { id: 'u-substitution', title: 'U-Substitution', subtitle: 'The chain rule in reverse', xpReward: 50, sections: [
                { type: 'text', content: `<h3>U-Substitution</h3><p>This is the integration counterpart of the chain rule. When you see a composite function inside an integral, u-sub can simplify it.</p>` },
                { type: 'steps', title: 'The U-Sub Process', steps: ['Choose u = the inner function (the part "inside" another function).', 'Compute du/dx and solve for dx.', 'Rewrite the entire integral in terms of u and du.', 'Integrate with respect to u.', 'Substitute back to the original variable x.'] },
                { type: 'example', title: 'U-Sub Example', content: `<p>∫2x(x²+1)³ dx. Let u = x²+1, du = 2x dx. ∫u³ du = u⁴/4 + C = <strong>(x²+1)⁴/4 + C</strong>.</p>` },
                { type: 'interactive_steps', title: 'Guided: Evaluate ∫cos(3x) dx', description: 'Find the right substitution and integrate.', steps: [
                    { text: 'The inner function is 3x. Let u = {blank}', answer: '3x', hint: 'What\'s inside the cos?' },
                    { text: 'Then du/dx = 3, so du = {blank} dx', answer: '3', hint: 'Differentiate 3x' },
                    { text: 'Solve for dx: dx = du/{blank}', answer: '3', hint: 'Rearrange du = 3dx' },
                    { text: 'Rewrite: (1/3)∫cos(u) du = (1/3){blank} + C', answer: 'sin(u)', hint: '∫cos(u) du = ?' },
                    { text: 'Substitute back: {blank}/3 + C', answer: 'sin(3x)', hint: 'Replace u with 3x' }
                ], result: '∫cos(3x) dx = sin(3x)/3 + C' },
                { type: 'generated_practice', generators: ['calc-u-sub'] },
                { type: 'tips', content: `<h4>💡 How to Pick u</h4><p>Look for a function and its derivative nearby. In ∫xe^(x²)dx, the x is the derivative of x² (off by a constant) — so u = x².</p><p><strong>Common pattern:</strong> if you see f(g(x)) · g′(x), then u = g(x).</p><p><strong>Don't forget:</strong> for definite integrals, either change the limits to u-values OR substitute back before evaluating.</p>` },
                { type: 'practice', problems: [
                    { question: '∫cos(3x) dx. Let u = 3x, du = 3dx. Result:', choices: ['sin(3x) + C', 'sin(3x)/3 + C', '3sin(3x) + C', 'cos(3x)/3 + C'], correctIndex: 1, explanation: '(1/3)∫cos u du = (1/3)sin u + C = <strong>sin(3x)/3 + C</strong>.' },
                    { question: 'For ∫xe^(x²) dx, the best u is:', choices: ['u = x', 'u = eˣ', 'u = x²', 'u = xe^x'], correctIndex: 2, explanation: 'u = x², du = 2x dx. The x in front is part of du. Best choice: <strong>u = x²</strong>.' },
                    { question: 'U-substitution reverses which derivative rule?', choices: ['Product rule', 'Quotient rule', 'Chain rule', 'Power rule'], correctIndex: 2, explanation: 'U-sub is the reverse of the <strong>chain rule</strong>.' },
                    { question: 'After integrating with u-sub, don\'t forget to:', choices: ['Add +C only', 'Substitute back to x', 'Both substitute back and add +C', 'Nothing'], correctIndex: 2, explanation: '<strong>Both</strong>: substitute u back to x AND include +C.' },
                ]}
            ]},

            // ---- 24. Trig Substitution ----
            { id: 'trig-substitution', title: 'Trigonometric Substitution', subtitle: 'Integrals with square roots', xpReward: 60, sections: [
                { type: 'text', content: `<h3>When to Use Trig Substitution</h3><p>When an integral contains <strong>√(a² − x²)</strong>, <strong>√(a² + x²)</strong>, or <strong>√(x² − a²)</strong>, a trigonometric substitution converts the square root into a simple trig expression.</p><h3>The Three Substitution Patterns</h3><ul><li><strong>√(a² − x²)</strong>: let x = a sin θ. Then √(a² − x²) = a cos θ, and dx = a cos θ dθ.</li><li><strong>√(a² + x²)</strong>: let x = a tan θ. Then √(a² + x²) = a sec θ, and dx = a sec²θ dθ.</li><li><strong>√(x² − a²)</strong>: let x = a sec θ. Then √(x² − a²) = a tan θ, and dx = a sec θ tan θ dθ.</li></ul><h3>Converting Back to x</h3><p>After integrating in θ, use a <strong>reference triangle</strong> to convert back. Draw a right triangle where the trig substitution is labelled (e.g., if x = a sin θ, then sin θ = x/a, so the opposite side is x, hypotenuse is a), then read off other trig values from the triangle.</p>` },
                { type: 'example', title: 'Worked Example: ∫√(1 − x²) dx', content: `<p><strong>Substitution:</strong> let x = sin θ, so dx = cos θ dθ and √(1 − x²) = √(1 − sin²θ) = cos θ.</p><p><strong>Integral becomes:</strong> ∫cos θ · cos θ dθ = ∫cos²θ dθ.</p><p><strong>Apply identity:</strong> cos²θ = (1 + cos 2θ)/2. So ∫cos²θ dθ = θ/2 + sin(2θ)/4 + C.</p><p><strong>Convert back:</strong> θ = sin⁻¹(x); sin(2θ) = 2 sin θ cos θ = 2x√(1 − x²).</p><p><strong>Answer:</strong> (1/2)sin⁻¹(x) + (x√(1 − x²))/2 + C.</p>` },
                { type: 'steps', title: 'Applying Trig Substitution', steps: [
                    'Identify which pattern applies: √(a²−x²), √(a²+x²), or √(x²−a²).',
                    'Make the appropriate substitution (sin, tan, or sec).',
                    'Rewrite dx using the differential of the substitution.',
                    'Simplify the square root using the Pythagorean identity.',
                    'Integrate the resulting trig expression (use trig identities as needed).',
                    'Draw a reference triangle and convert all trig functions back to expressions in x.'
                ]},
                { type: 'generated_practice', generators: ['trig-sub-identify', 'trig-sub-eval'] },
                { type: 'practice', problems: [
                    { question: 'For ∫√(9 − x²) dx, the substitution is:', choices: ['x = 3 tan θ', 'x = 3 sin θ', 'x = 3 sec θ', 'x = 3 cos θ'], correctIndex: 1, explanation: '√(a² − x²) pattern with a = 3: use <strong>x = 3 sin θ</strong>.' },
                    { question: 'For ∫√(x² + 4) dx, the substitution is:', choices: ['x = 2 sin θ', 'x = 2 sec θ', 'x = 2 tan θ', 'x = 4 tan θ'], correctIndex: 2, explanation: '√(a² + x²) pattern with a = 2: use <strong>x = 2 tan θ</strong>.' },
                    { question: 'After trig substitution, to return to x you use:', choices: ['Direct substitution', 'A reference triangle', 'The chain rule', 'Another substitution'], correctIndex: 1, explanation: 'Draw a <strong>reference triangle</strong> to read off the trig values in terms of x.' },
                    { question: 'Trig substitution is most useful when the integrand contains:', choices: ['Polynomials only', 'Exponentials', 'A square root of a quadratic expression', 'Rational functions'], correctIndex: 2, explanation: 'Trig sub handles <strong>square roots of quadratic expressions</strong> like √(a² − x²).' },
                ]}
            ]},

            // ---- 25. Integration by Parts ----
            { id: 'integration-by-parts', title: 'Integration by Parts', subtitle: 'Product rule in reverse', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Integration by Parts</h3><p>Formula:</p><p style="text-align:center;font-size:1.1em;"><strong>∫u dv = uv − ∫v du</strong></p><p>This technique handles integrals of products that u-sub can't touch.</p>` },
                { type: 'text', content: `<h3>Choosing u and dv: LIATE</h3><p>Use <strong>LIATE</strong> to choose u — pick from earlier in this list:</p><p><strong>L</strong>ogarithmic → <strong>I</strong>nverse trig → <strong>A</strong>lgebraic → <strong>T</strong>rig → <strong>E</strong>xponential</p><p>Whatever you pick for u, everything else is dv.</p>` },
                { type: 'interactive_steps', title: 'Guided: Evaluate ∫x·eˣ dx', description: 'Apply integration by parts step by step.', steps: [
                    { text: 'Using LIATE, u = x (algebraic). So dv = {blank} dx', answer: 'eˣ', hint: 'Everything that\'s not u becomes dv' },
                    { text: 'Differentiate u: du = {blank} dx', answer: '1', hint: 'What is d/dx of x?' },
                    { text: 'Integrate dv: v = ∫eˣ dx = {blank}', answer: 'eˣ', hint: 'eˣ is its own antiderivative' },
                    { text: 'Apply formula: uv − ∫v du = xeˣ − ∫{blank} dx', answer: 'eˣ', hint: 'v · du = eˣ · 1 dx' },
                    { text: '= xeˣ − {blank} + C', answer: 'eˣ', hint: '∫eˣ dx = eˣ' }
                ], result: '∫xeˣ dx = xeˣ − eˣ + C = eˣ(x − 1) + C' },
                { type: 'generated_practice', generators: ['ibp-choose-u'] },
                { type: 'tips', content: `<h4>💡 When to Use IBP vs U-Sub</h4><p>If you see a <strong>product of two different types</strong> (like x·eˣ or x·sin x), try IBP.</p><p>If you see a <strong>composition</strong> (like sin(x²) or e^(3x)), try u-sub first.</p><p><strong>Special case:</strong> ∫ln x dx — use u = ln x, dv = dx.</p>` },
                { type: 'practice', problems: [
                    { question: '∫x·eˣ dx. Best choice for u:', choices: ['u = eˣ', 'u = x', 'u = xeˣ', 'u = 1'], correctIndex: 1, explanation: 'LIATE: x is Algebraic (before Exponential). <strong>u = x</strong>.' },
                    { question: 'The IBP formula is:', choices: ['∫u dv = uv + ∫v du', '∫u dv = uv − ∫v du', '∫u dv = u/v − ∫du/dv', '∫u dv = v du − ∫u dv'], correctIndex: 1, explanation: '<strong>∫u dv = uv − ∫v du</strong>.' },
                    { question: '∫ln(x) dx. Best choice for u:', choices: ['u = 1 (dv = ln x dx)', 'u = ln x', 'u = x', 'u = 1/x'], correctIndex: 1, explanation: 'LIATE: Logarithmic comes first. <strong>u = ln x</strong>, dv = dx.' },
                    { question: 'IBP reverses which derivative rule?', choices: ['Chain rule', 'Product rule', 'Quotient rule', 'Power rule'], correctIndex: 1, explanation: 'Integration by parts reverses the <strong>product rule</strong>.' },
                ]}
            ]},

            // ---- 26. Trig Integrals ----
            { id: 'trig-integrals', title: 'Trig Integrals', subtitle: 'Integrating trig functions', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Basic Trig Integrals</h3><p>∫sin x dx = −cos x + C. ∫cos x dx = sin x + C. ∫sec²x dx = tan x + C. ∫csc²x dx = −cot x + C. ∫sec x tan x dx = sec x + C.</p><h3>Powers of Trig Functions</h3><p>For ∫sinⁿx cosᵐx dx: use Pythagorean identities and u-substitution. If one power is odd, save one factor and convert the rest.</p>` },
                { type: 'example', title: 'Integrating with a Trig Identity', content: `<p>∫sin²x dx. Use the identity sin²x = (1 − cos 2x)/2.</p><p>∫(1 − cos 2x)/2 dx = x/2 − sin(2x)/4 + C.</p>` },
                { type: 'steps', title: 'Strategy for Trig Integrals', steps: [
                    'Know the basic antiderivatives: ∫sin x = −cos x, ∫cos x = sin x, ∫sec²x = tan x.',
                    'For powers of sin/cos: if an ODD power appears, save one factor and convert the rest using sin²+cos²=1, then u-substitute.',
                    'For even powers: use power-reducing identities (sin²x = (1−cos2x)/2, cos²x = (1+cos2x)/2).',
                    'For products of different trig functions, try u-substitution or product-to-sum identities.'
                ]},
                { type: 'generated_practice', generators: ['trig-integral-basic'] },
                { type: 'practice', problems: [
                    { question: '∫sin x dx =', choices: ['cos x + C', '−cos x + C', 'sin x + C', '−sin x + C'], correctIndex: 1, explanation: '<strong>−cos x + C</strong>.' },
                    { question: '∫sec²x dx =', choices: ['sec x + C', 'tan x + C', '2sec x + C', '−cot x + C'], correctIndex: 1, explanation: '<strong>tan x + C</strong>.' },
                    { question: '∫cos²x dx requires which identity?', choices: ['sin²+cos²=1', 'cos²x = (1+cos2x)/2', 'tan²x+1=sec²x', 'sin2x=2sinxcosx'], correctIndex: 1, explanation: 'Use the power-reducing identity: <strong>cos²x = (1+cos2x)/2</strong>.' },
                    { question: '∫tan x dx =', choices: ['sec x + C', 'ln|sec x| + C', '−ln|cos x| + C', 'Both B and C'], correctIndex: 3, explanation: '∫(sin x/cos x)dx = −ln|cos x| + C = ln|sec x| + C. <strong>Both B and C</strong>.' },
                ]}
            ]},

            // ---- 27. Partial Fractions ----
            { id: 'partial-fractions', title: 'Partial Fractions', subtitle: 'Breaking apart rational integrands', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Partial Fraction Decomposition</h3><p>To integrate a rational function P(x)/Q(x): (1) Factor Q(x). (2) Write as sum of simpler fractions. (3) Solve for coefficients. (4) Integrate each piece.</p><p>Linear factors: A/(x−r). Repeated: A/(x−r) + B/(x−r)². Irreducible quadratics: (Ax+B)/(x²+bx+c).</p>` },
                { type: 'example', title: 'Partial Fraction Decomposition', content: `<p>∫ 1/[(x−1)(x+2)] dx. Decompose: 1/[(x−1)(x+2)] = A/(x−1) + B/(x+2).</p><p>Multiply through: 1 = A(x+2) + B(x−1). Set x=1: 1 = 3A → A = 1/3. Set x=−2: 1 = −3B → B = −1/3.</p><p>∫[1/3/(x−1) − 1/3/(x+2)] dx = (1/3)ln|x−1| − (1/3)ln|x+2| + C.</p>` },
                { type: 'steps', title: 'Integrating with Partial Fractions', steps: [
                    'Check degree: numerator degree must be less than denominator. If not, do polynomial long division first.',
                    'Factor the denominator completely.',
                    'Write the partial fraction form: A/(linear factor) for each distinct linear factor.',
                    'Multiply both sides by the denominator and solve for the constants A, B, C... by substituting convenient x-values.',
                    'Integrate each simpler fraction — linear factors give ln terms.'
                ]},
                { type: 'generated_practice', generators: ['partial-fraction-setup'] },
                { type: 'practice', problems: [
                    { question: '1/[(x−1)(x+2)] decomposes as:', choices: ['A/(x−1) + B/(x+2)', 'A/(x−1) − B/(x+2)', '(Ax+B)/[(x−1)(x+2)]', 'A/x + B/(x−1)'], correctIndex: 0, explanation: 'Distinct linear factors: <strong>A/(x−1) + B/(x+2)</strong>.' },
                    { question: 'After decomposing, each piece typically integrates to:', choices: ['Polynomials', 'Natural log terms', 'Trig functions', 'Exponentials'], correctIndex: 1, explanation: '∫A/(x−r)dx = A ln|x−r| + C: <strong>natural log terms</strong>.' },
                    { question: 'Before decomposing, the degree of numerator must be:', choices: ['Equal to denominator', 'Greater than denominator', 'Less than denominator', 'Any degree'], correctIndex: 2, explanation: 'Degree of numerator must be <strong>less than</strong> denominator (do polynomial division first if not).' },
                    { question: '(x+3)/[(x−1)²] decomposes as:', choices: ['A/(x−1)²', 'A/(x−1) + B/(x−1)²', '(Ax+B)/(x−1)²', 'A/x + B/(x−1)'], correctIndex: 1, explanation: 'Repeated factor: <strong>A/(x−1) + B/(x−1)²</strong>.' },
                ]}
            ]},

            // ---- 28. Improper Integrals ----
            { id: 'improper-integrals', title: 'Improper Integrals', subtitle: 'Integrals with infinite limits', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Improper Integrals</h3><p>An integral is <strong>improper</strong> if (1) a limit of integration is ±∞, or (2) the integrand has a discontinuity on [a,b].</p><p>Evaluate by replacing the problematic value with a variable, integrating, then taking the limit.</p><p>If the limit is finite, the integral <strong>converges</strong>. If not, it <strong>diverges</strong>.</p>` },
                { type: 'example', title: 'Evaluating an Improper Integral', content: `<p>∫₁^∞ 1/x² dx. Replace ∞ with b: lim(b→∞) ∫₁ᵇ x⁻² dx = lim(b→∞) [−1/x]₁ᵇ = lim(b→∞) (−1/b + 1) = 0 + 1 = <strong>1</strong>. Converges.</p>` },
                { type: 'steps', title: 'Evaluating Improper Integrals', steps: [
                    'Replace the infinite limit (or discontinuity) with a variable — use b for upper limits, a for lower.',
                    'Evaluate the integral normally, treating the variable as a finite number.',
                    'Take the limit as b → ∞ (or a → the problem point).',
                    'If the limit is a finite number, the integral converges to that value.',
                    'If the limit is ∞ or does not exist, the integral diverges.'
                ]},
                { type: 'generated_practice', generators: ['improper-converge'] },
                { type: 'practice', problems: [
                    { question: '∫₁^∞ 1/x² dx =', choices: ['∞ (diverges)', '1', '2', '1/2'], correctIndex: 1, explanation: 'lim(b→∞) [−1/x]₁ᵇ = lim(0 − (−1)) = <strong>1</strong>. Converges.' },
                    { question: '∫₁^∞ 1/x dx =', choices: ['1', '0', '∞ (diverges)', 'ln 2'], correctIndex: 2, explanation: 'lim(b→∞) ln b = ∞. <strong>Diverges</strong>.' },
                    { question: 'An improper integral converges when:', choices: ['The integrand is positive', 'The limit exists and is finite', 'The integral has no antiderivative', 'Always'], correctIndex: 1, explanation: 'Converges when the <strong>limit exists and is finite</strong>.' },
                    { question: '∫₁^∞ 1/xᵖ dx converges when:', choices: ['p > 0', 'p > 1', 'p < 1', 'p = 1'], correctIndex: 1, explanation: 'The p-integral converges for <strong>p > 1</strong>.' },
                ]}
            ]},

            // ---- 29. Sequences ----
            { id: 'sequences', title: 'Sequences', subtitle: 'Patterns and convergence', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Sequences</h3><p>A <strong>sequence</strong> is simply an ordered list of numbers — one for each positive integer. For example: 1, 1/2, 1/4, 1/8, … where each term is half the previous. We define sequences with a formula: aₙ = f(n), where n is the term number.</p><p>The key question we ask about a sequence is: <em>what happens to the terms as n gets very large?</em></p><ul><li>A sequence <strong>converges</strong> if the terms settle toward a single finite number L. We write lim(n→∞) aₙ = L.</li><li>A sequence <strong>diverges</strong> if the terms grow without bound, or bounce around without settling.</li></ul><p>Example: 1, 1/2, 1/3, 1/4, … → converges to 0. But 1, 2, 3, 4, … → diverges (grows forever).</p>` },
                { type: 'example', title: 'Testing Sequence Convergence', content: `<p>aₙ = (2n² + 3)/(n² − 1). Divide numerator and denominator by n²: (2 + 3/n²)/(1 − 1/n²). As n→∞: 3/n² → 0 and 1/n² → 0. Limit = 2/1 = <strong>2</strong>. Converges to 2.</p>` },
                { type: 'steps', title: 'Determining Sequence Convergence', steps: [
                    'Write out the general term aₙ and perhaps a few values to get intuition.',
                    'If aₙ = P(n)/Q(n) (rational), divide everything by the highest power of n.',
                    'Apply limit laws: terms with n in denominator go to 0.',
                    'If |r| < 1 for a geometric sequence rⁿ, it converges to 0.',
                    'If the terms grow without bound or oscillate, the sequence diverges.'
                ]},
                { type: 'generated_practice', generators: ['sequence-converge'] },
                { type: 'tips', content: `<h4>💡 Sequence vs. Series</h4><p>A <strong>sequence</strong> is a list: a₁, a₂, a₃, … A <strong>series</strong> is the sum: a₁ + a₂ + a₃ + … They're related but different — a convergent sequence doesn't guarantee a convergent series!</p>` },
                { type: 'practice', problems: [
                    { question: 'aₙ = 1/n. Does this converge?', choices: ['Yes, to 0', 'Yes, to 1', 'No', 'Yes, to ∞'], correctIndex: 0, explanation: 'lim(1/n) = <strong>0</strong>. Converges.' },
                    { question: 'aₙ = (−1)ⁿ. Does this converge?', choices: ['Yes, to 0', 'Yes, to 1', 'Yes, to −1', 'No (oscillates)'], correctIndex: 3, explanation: 'Alternates between 1 and −1. <strong>Diverges</strong>.' },
                    { question: 'aₙ = (3n+1)/(n+2). Limit as n→∞:', choices: ['0', '1', '3', '∞'], correctIndex: 2, explanation: 'Divide by n: (3+1/n)/(1+2/n) → <strong>3</strong>.' },
                    { question: 'A sequence converges if its terms:', choices: ['Are always positive', 'Approach a single finite value', 'Are always increasing', 'Alternate in sign'], correctIndex: 1, explanation: 'Converges if terms <strong>approach a single finite value</strong>.' },
                ]}
            ]},

            // ---- 30. Series & Convergence Tests ----
            { id: 'series-tests', title: 'Series & Convergence Tests', subtitle: 'Does the infinite sum have a finite value?', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Infinite Series</h3><p>A <strong>series</strong> is the sum of a sequence: Σaₙ = a₁ + a₂ + a₃ + …</p><h3>Key Tests</h3><p><strong>Divergence test</strong>: if lim aₙ ≠ 0, the series diverges. <strong>Geometric series</strong>: Σarⁿ converges if |r| < 1 (sum = a/(1−r)). <strong>p-series</strong>: Σ1/nᵖ converges if p > 1.</p><p>Other tests: ratio test, comparison test, integral test, alternating series test.</p>` },
                { type: 'steps', title: 'Choosing and Applying a Convergence Test', steps: [
                    'First: divergence test — if lim aₙ ≠ 0, the series diverges immediately.',
                    'Geometric series (arⁿ): converges if |r| < 1, sum = a/(1−r).',
                    'p-series (1/nᵖ): converges if p > 1.',
                    'For factorials or exponentials, try the ratio test: find lim|aₙ₊₁/aₙ|. < 1 → converges, > 1 → diverges.',
                    'For comparison: compare to a known convergent or divergent series.',
                    'Alternating series (−1)ⁿ aₙ: converges if aₙ decreasing → 0 (alternating series test).'
                ]},
                { type: 'generated_practice', generators: ['geometric-series-sum', 'series-test-choice'] },
                { type: 'tips', content: `<h4>💡 The Divergence Test Trap</h4><p>If lim aₙ = 0, that does <strong>NOT</strong> mean the series converges — it just means the divergence test is inconclusive. The harmonic series Σ1/n has terms → 0, but still diverges!</p>` },
                { type: 'practice', problems: [
                    { question: 'If lim(n→∞) aₙ ≠ 0, the series Σaₙ:', choices: ['Converges', 'Diverges', 'May or may not converge', 'Equals 0'], correctIndex: 1, explanation: 'Divergence test: if terms don\'t → 0, the series <strong>diverges</strong>.' },
                    { question: 'Geometric series Σ(1/2)ⁿ from n=0. Sum =', choices: ['1', '2', '1/2', '∞'], correctIndex: 1, explanation: 'a/(1−r) = 1/(1−1/2) = <strong>2</strong>.' },
                    { question: 'Σ1/n (harmonic series):', choices: ['Converges to 1', 'Converges to ln 2', 'Diverges', 'Converges to π²/6'], correctIndex: 2, explanation: 'The harmonic series <strong>diverges</strong> (p = 1, need p > 1).' },
                    { question: 'The ratio test says: if lim|aₙ₊₁/aₙ| < 1, then:', choices: ['Diverges', 'Converges absolutely', 'Inconclusive', 'Converges conditionally'], correctIndex: 1, explanation: 'Ratio < 1 → <strong>converges absolutely</strong>.' },
                ]}
            ]},

            // ---- 31. Taylor & Maclaurin Series ----
            { id: 'taylor-series', title: 'Taylor & Maclaurin Series', subtitle: 'Polynomial approximations', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Taylor Series</h3><p>A Taylor series represents a function as an infinite polynomial around a point x = a:</p><p>f(x) = Σ f⁽ⁿ⁾(a)/n! · (x−a)ⁿ</p><p>A <strong>Maclaurin series</strong> is a Taylor series centered at a = 0.</p><p>Key series: eˣ = Σxⁿ/n!, sin x = Σ(−1)ⁿx²ⁿ⁺¹/(2n+1)!, cos x = Σ(−1)ⁿx²ⁿ/(2n)!.</p>` },
                { type: 'example', title: 'Building a Maclaurin Series', content: `<p>Find the Maclaurin series for eˣ (first 4 terms).</p><p>f(x)=eˣ: f⁽ⁿ⁾(x) = eˣ for all n, so f⁽ⁿ⁾(0) = 1.</p><p>eˣ ≈ 1 + x + x²/2! + x³/3! = <strong>1 + x + x²/2 + x³/6 + …</strong></p>` },
                { type: 'steps', title: 'Building a Taylor Series', steps: [
                    'Choose the center a (a = 0 gives a Maclaurin series).',
                    'Compute successive derivatives: f(a), f′(a), f″(a), f‴(a), …',
                    'Write each term: f⁽ⁿ⁾(a)/n! · (x−a)ⁿ.',
                    'Assemble the series: f(x) = Σ f⁽ⁿ⁾(a)/n! · (x−a)ⁿ.',
                    'Check the radius of convergence if asked (ratio test on the series terms).'
                ]},
                { type: 'generated_practice', generators: ['taylor-first-terms'] },
                { type: 'tips', content: `<h4>💡 Must-Know Series</h4><p>Memorize these Maclaurin series: <strong>eˣ = Σxⁿ/n!</strong> | <strong>sin x = Σ(−1)ⁿx²ⁿ⁺¹/(2n+1)!</strong> | <strong>cos x = Σ(−1)ⁿx²ⁿ/(2n)!</strong> | <strong>1/(1−x) = Σxⁿ</strong> for |x|<1.</p>` },
                { type: 'practice', problems: [
                    { question: 'The Maclaurin series is centered at:', choices: ['x = 1', 'x = −1', 'x = 0', 'x = π'], correctIndex: 2, explanation: 'Maclaurin = Taylor centered at <strong>x = 0</strong>.' },
                    { question: 'What is a Taylor polynomial of degree 2 used for?', choices: ['Exact computation only', 'Approximating f(x) near x = a using a quadratic', 'Finding the derivative', 'Solving differential equations exactly'], correctIndex: 1, explanation: 'A degree-2 Taylor polynomial gives a <strong>quadratic approximation</strong> of f near x = a.' },
                    { question: 'The nth term of a Taylor series involves:', choices: ['f(a)ⁿ', 'f⁽ⁿ⁾(a)/n!', 'f(x)/n', 'nf(a)'], correctIndex: 1, explanation: 'The nth term is <strong>f⁽ⁿ⁾(a)/n!</strong> · (x−a)ⁿ.' },
                    { question: 'A Taylor polynomial of degree 1 is a:', choices: ['Constant', 'Linear approximation (tangent line)', 'Quadratic', 'Cubic'], correctIndex: 1, explanation: 'Degree 1 Taylor polynomial = <strong>tangent line approximation</strong>.' },
                ]}
            ]},

            // ---- 32. Taylor & Maclaurin Series (Deep Dive) ----
            { id: 'taylor-maclaurin', title: 'Taylor & Maclaurin Series', subtitle: 'Infinite polynomial representations of functions', xpReward: 65, sections: [
                { type: 'text', content: `<h3>The Big Idea</h3><p>Can we write <em>any</em> function as an infinite polynomial? Remarkably — yes! A Taylor series does exactly this. Instead of evaluating a function directly, we express it as an infinite sum of terms built from its derivatives at a single point.</p><h3>Maclaurin Series (centered at x = 0)</h3><p style="text-align:center;"><strong>f(x) = f(0) + f′(0)x + f″(0)x²/2! + f‴(0)x³/3! + … = Σₙ₌₀^∞ f⁽ⁿ⁾(0)/n! · xⁿ</strong></p><h3>Taylor Series (centered at x = a)</h3><p style="text-align:center;"><strong>f(x) = Σₙ₌₀^∞ f⁽ⁿ⁾(a)/n! · (x − a)ⁿ</strong></p><h3>Key Maclaurin Series to Memorize</h3><ul><li><strong>eˣ</strong> = 1 + x + x²/2! + x³/3! + … = Σ xⁿ/n!</li><li><strong>sin x</strong> = x − x³/3! + x⁵/5! − … = Σ (−1)ⁿ x^(2n+1)/(2n+1)!</li><li><strong>cos x</strong> = 1 − x²/2! + x⁴/4! − … = Σ (−1)ⁿ x^(2n)/(2n)!</li><li><strong>1/(1−x)</strong> = 1 + x + x² + … = Σ xⁿ (for |x| &lt; 1 — the geometric series!)</li></ul><h3>Radius of Convergence</h3><p>A Taylor series centered at x = a converges for |x − a| &lt; R, where R is the <strong>radius of convergence</strong> (found via the ratio test).</p><h3>Applications</h3><p><strong>Approximating values:</strong> e ≈ 1 + 1 + 1/2 + 1/6 + 1/24 ≈ 2.708.</p><p><strong>Evaluating tricky limits:</strong> lim(x→0) (sin x)/x = lim(x→0) (x − x³/6 + …)/x = lim(1 − x²/6 + …) = 1.</p>` },
                { type: 'example', title: 'Finding the Maclaurin Series for sin x', content: `<p><strong>Compute derivatives at x = 0:</strong></p><p>f(x) = sin x → f(0) = 0. f′(x) = cos x → f′(0) = 1. f″(x) = −sin x → f″(0) = 0. f‴(x) = −cos x → f‴(0) = −1.</p><p><strong>Pattern repeats</strong> with period 4. Nonzero terms only at odd powers:</p><p>sin x = x − x³/3! + x⁵/5! − x⁷/7! + … = <strong>Σ (−1)ⁿ x^(2n+1)/(2n+1)!</strong></p>` },
                { type: 'steps', title: 'Finding a Maclaurin Series', steps: [
                    'Compute f(0), f′(0), f″(0), f‴(0), … — the values of all derivatives at 0.',
                    'Write each term: f⁽ⁿ⁾(0)/n! · xⁿ.',
                    'Look for a pattern in the coefficients to write the general term.',
                    'Express the series in sigma notation: Σₙ₌₀^∞ f⁽ⁿ⁾(0)/n! · xⁿ.',
                    'Determine the radius of convergence R using the ratio test if needed.'
                ]},
                { type: 'generated_practice', generators: ['maclaurin-series', 'taylor-approx'] },
                { type: 'practice', problems: [
                    { question: 'The Maclaurin series for eˣ begins:', choices: ['1 − x + x²/2 − …', '1 + x + x²/2! + x³/3! + …', 'x + x³/3! + x⁵/5! + …', '1 + x²/2 + x⁴/4 + …'], correctIndex: 1, explanation: 'eˣ = <strong>1 + x + x²/2! + x³/3! + …</strong>' },
                    { question: 'Using the series for sin x, lim(x→0) sin(x)/x =', choices: ['0', '∞', '1', 'DNE'], correctIndex: 2, explanation: 'sin x = x − x³/6 + …, so sin(x)/x = 1 − x²/6 + … → <strong>1</strong> as x → 0.' },
                    { question: 'The general term of the Maclaurin series is:', choices: ['f(a)ⁿ/n!', 'f⁽ⁿ⁾(0)/n! · xⁿ', 'f(x)ⁿ', 'n! · f⁽ⁿ⁾(0)'], correctIndex: 1, explanation: 'Each term is <strong>f⁽ⁿ⁾(0)/n! · xⁿ</strong>.' },
                    { question: 'The Maclaurin series for 1/(1−x) converges for:', choices: ['All x', 'x > 0', '|x| < 1', 'x > 1'], correctIndex: 2, explanation: 'The geometric series Σxⁿ converges for <strong>|x| &lt; 1</strong>.' },
                ]}
            ]},

            // ---- 33. Differential Equations Intro ----
            { id: 'diff-equations', title: 'Differential Equations Intro', subtitle: 'Equations involving derivatives', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Differential Equations</h3><p>A <strong>differential equation</strong> (DE) is an equation containing derivatives. Example: dy/dx = 3x² has solution y = x³ + C.</p><h3>Separable DEs</h3><p>If you can write dy/dx = f(x)g(y), separate: dy/g(y) = f(x)dx. Then integrate both sides.</p>` },
                { type: 'interactive_steps', title: 'Guided: Solve dy/dx = 2x, with y(0) = 5', description: 'Integrate and apply the initial condition.', steps: [
                    { text: 'Integrate both sides: y = ∫2x dx = {blank} + C', answer: 'x²', hint: '∫2x dx = x²' },
                    { text: 'Apply initial condition: y(0) = 5 → 0² + C = {blank}', answer: '5', hint: 'Plug in x = 0, y = 5' },
                    { text: 'So C = {blank}', answer: '5', hint: '0 + C = 5' },
                    { text: 'Particular solution: y = x² + {blank}', answer: '5', hint: 'Replace C with its value' }
                ], result: 'y = x² + 5' },
                { type: 'generated_practice', generators: ['separable-de'] },
                { type: 'practice', problems: [
                    { question: 'dy/dx = 2x. General solution:', choices: ['y = 2x', 'y = x² + C', 'y = 2x²', 'y = x + C'], correctIndex: 1, explanation: 'Integrate: y = x² + C. <strong>y = x² + C</strong>.' },
                    { question: 'dy/dx = y is separable. Solution:', choices: ['y = eˣ + C', 'y = Ceˣ', 'y = x + C', 'y = ln x'], correctIndex: 1, explanation: 'dy/y = dx → ln|y| = x + C₁ → y = <strong>Ceˣ</strong>.' },
                    { question: 'A separable DE can be written as:', choices: ['dy/dx = f(x) + g(y)', 'dy/dx = f(x)·g(y)', 'dy/dx = f(x)/g(x)', 'dy/dx = constant'], correctIndex: 1, explanation: 'Separable means <strong>dy/dx = f(x)·g(y)</strong>.' },
                    { question: 'The "+C" in DE solutions represents:', choices: ['A specific number', 'A family of solutions', 'Zero', 'The initial condition'], correctIndex: 1, explanation: '+C gives a <strong>family of solutions</strong>. An initial condition pins down the specific one.' },
                ]}
            ]},

            // ---- 34. Applications of Integration ----
            { id: 'integration-applications', title: 'Applications of Integration', subtitle: 'Area, volume, and arc length', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Area Between Curves</h3><p>You already know how to find the area between a curve and the x-axis. Now we go further: finding the area <em>between two curves</em>. The idea is simple — subtract the lower curve from the upper one, then integrate over the interval.</p><p style="text-align:center;"><strong>Area = ∫ₐᵇ [f(x) − g(x)] dx</strong></p><p>where f(x) is the top curve and g(x) is the bottom curve on [a, b]. Always check which curve is on top (the one with larger y-values)!</p>` },
                { type: 'example', title: 'Area Between Two Curves', content: `<p>Find the area between y = x and y = x² from x = 0 to x = 1.</p><p>First, determine which is on top: at x = 0.5, y = x gives 0.5 and y = x² gives 0.25, so <strong>y = x is on top</strong>.</p><p>Area = ∫₀¹ (x − x²) dx = [x²/2 − x³/3]₀¹ = (1/2 − 1/3) − 0 = <strong>1/6</strong>.</p>` },
                { type: 'steps', title: 'Finding Area Between Curves', steps: [
                    'Identify which function is the "top" curve and which is the "bottom" — pick a test point in the interval.',
                    'Set up the integral: ∫ₐᵇ [top − bottom] dx.',
                    'If unsure of the limits, find where the curves intersect by setting f(x) = g(x) and solving.',
                    'Find the antiderivative of [top − bottom].',
                    'Evaluate using the Fundamental Theorem: F(b) − F(a).'
                ]},
                { type: 'text', content: `<h3>Volume by Disks/Washers</h3><p>When you rotate a curve around the x-axis, you sweep out a 3D solid. The <strong>disk method</strong> works by stacking infinitely thin circular disks. Each disk has radius f(x) and thickness dx, so its volume is π[f(x)]²dx.</p><p style="text-align:center;"><strong>V = π ∫ₐᵇ [f(x)]² dx</strong> (disk method)</p><p>If there's a hole in the middle (a "washer"), subtract the inner radius squared from the outer:</p><p style="text-align:center;"><strong>V = π ∫ₐᵇ ([R(x)]² − [r(x)]²) dx</strong> (washer method)</p><h3>Arc Length</h3><p>To find the length of a curve (like measuring the actual distance along a winding road), use:</p><p style="text-align:center;"><strong>L = ∫ₐᵇ √(1 + [f′(x)]²) dx</strong></p><p>This comes from the Pythagorean theorem applied to tiny curve segments: each small piece has horizontal length dx and vertical change f′(x)dx, giving a piece length of √(dx² + (f′(x)dx)²) = √(1 + [f′(x)]²) dx.</p>` },
                { type: 'generated_practice', generators: ['calc-area-between', 'arc-length-integral'] },
                { type: 'practice', problems: [
                    { question: 'Area between y=x² and y=x from 0 to 1:', choices: ['∫₀¹(x−x²)dx', '∫₀¹(x²−x)dx', '∫₀¹ x·x² dx', '∫₀¹(x+x²)dx'], correctIndex: 0, explanation: 'x > x² on [0,1], so area = <strong>∫₀¹(x−x²)dx</strong>.' },
                    { question: 'When finding area between two curves, which is the integrand?', choices: ['top function only', 'bottom function only', 'top minus bottom', 'top times bottom'], correctIndex: 2, explanation: 'Area = ∫[<strong>top − bottom</strong>] dx. Always subtract the lower curve from the upper curve.' },
                    { question: 'Volume of revolution (disk method) involves:', choices: ['V = ∫ 2πr dx', 'V = π∫[f(x)]² dx', 'V = ∫f(x)dx', 'V = π[f(x)]²'], correctIndex: 1, explanation: 'Disk method: <strong>V = π∫[f(x)]² dx</strong>.' },
                    { question: 'Arc length formula contains:', choices: ['√(1 + f(x))', '√(1 + [f′(x)]²)', 'f(x)²', '2πf(x)'], correctIndex: 1, explanation: 'Arc length: ∫√(<strong>1 + [f′(x)]²</strong>) dx.' },
                ]}
            ]},

            // ---- 35. Calculus Review ----
            { id: 'calculus-review', title: 'Calculus Review', subtitle: 'Comprehensive problem solving', xpReward: 100, sections: [
                { type: 'text', content: `<h3>Comprehensive Review</h3><p>This final lesson covers the major concepts: limits, derivatives (power, product, quotient, chain rules), applications (optimization, related rates), integrals (FTC, u-sub, by parts), and series.</p>` },
                { type: 'generated_practice', generators: ['calc-power-rule'] },
                { type: 'generated_practice', generators: ['calc-chain-rule'] },
                { type: 'generated_practice', generators: ['calc-ftc'] },
                { type: 'generated_practice', generators: ['geometric-series-sum'] },
                { type: 'practice', problems: [
                    { question: 'Which rule differentiates a function of the form f(g(x))?', choices: ['Product rule', 'Quotient rule', 'Chain rule', 'Power rule'], correctIndex: 2, explanation: 'The <strong>chain rule</strong> handles compositions: d/dx[f(g(x))] = f′(g(x))·g′(x).' },
                    { question: 'The Fundamental Theorem of Calculus says ∫ₐᵇ f(x)dx equals:', choices: ['f(b) + f(a)', 'F(b) − F(a) where F′ = f', 'f′(b) − f′(a)', '(b−a)f(a)'], correctIndex: 1, explanation: 'FTC: ∫ₐᵇ f(x)dx = <strong>F(b) − F(a)</strong> where F is any antiderivative of f.' },
                    { question: 'lim(x→∞) 5x/(2x+1) =', choices: ['0', '5/2', '5', '∞'], correctIndex: 1, explanation: 'Divide by x: 5/(2+1/x) → <strong>5/2</strong>.' },
                    { question: 'The derivative of eˣ is:', choices: ['xeˣ⁻¹', 'eˣ', 'eˣ/x', 'ln(x)eˣ'], correctIndex: 1, explanation: 'The derivative of eˣ is <strong>eˣ</strong> — it\'s its own derivative!' },
                    { question: 'Σ(1/3)ⁿ from n=0 to ∞ =', choices: ['1/3', '3/2', '3', '1'], correctIndex: 1, explanation: 'Geometric: 1/(1−1/3) = 1/(2/3) = <strong>3/2</strong>.' },
                ]}
            ]},
        ]
};
