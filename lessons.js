// ============================================================
// IBIS ACADEMY — FULL LESSON CONTENT
// Sections flow: text → example → generated_practice → tips → static practice
// generated_practice.generators[] references IDs from generators.js
// ============================================================

export const lessonPaths = {
    // ========================================================
    // ALGEBRA PATH
    // ========================================================
    algebra: {
        name: 'Algebra Path',
        icon: '📐',
        lessons: [
            // ---- 1. Intro to Algebra ----
            {
                id: 'intro-algebra',
                title: 'Introduction to Algebra',
                subtitle: 'Understanding variables and expressions',
                xpReward: 30,
                sections: [
                    { type: 'text', content: `
                        <h3>What is Algebra?</h3>
                        <p>Algebra uses <strong>letters</strong> (called <em>variables</em>) to represent unknown numbers. Instead of "some number plus 3 equals 7", we write <strong>x + 3 = 7</strong>.</p>
                        <h3>Expressions vs. Equations</h3>
                        <p>An <strong>expression</strong> combines numbers, variables, and operations (e.g. <em>3x + 5</em>) — no equals sign. An <strong>equation</strong> sets two expressions equal (e.g. <em>3x + 5 = 20</em>).</p>
                    `},
                    { type: 'example', title: 'Evaluating an Expression', content: `
                        <p><strong>Evaluate 2x + 4 when x = 3:</strong></p>
                        <p>2(3) + 4 = 6 + 4 = <strong>10</strong></p>
                    `},
                    { type: 'generated_practice', generators: ['eval-expression'] },
                    { type: 'tips', content: `<h4>💡 Key Takeaways</h4><ul><li>A <strong>coefficient</strong> is the number before a variable (in 5x, it's 5).</li><li>A <strong>constant</strong> is a number with no variable (like the 4 in 2x + 4).</li></ul>` },
                    { type: 'generated_practice', generators: ['identify-parts'] },
                    { type: 'practice', problems: [
                        { question: 'Evaluate <strong>4x + 1</strong> when x = 5.', choices: ['9', '21', '25', '16'], correctIndex: 1, explanation: '4(5) + 1 = 20 + 1 = <strong>21</strong>' },
                        { question: 'Evaluate <strong>7x − 3</strong> when x = 4.', choices: ['21', '25', '28', '31'], correctIndex: 1, explanation: '7(4) − 3 = 28 − 3 = <strong>25</strong>' },
                        { question: 'In <strong>9x + 6</strong>, what is the coefficient of x?', choices: ['6', '9', '15', 'x'], correctIndex: 1, explanation: 'The coefficient is the number multiplying x: <strong>9</strong>.' },
                        { question: 'In <strong>5x + 11</strong>, what is the constant term?', choices: ['5', 'x', '11', '16'], correctIndex: 2, explanation: 'The constant has no variable attached: <strong>11</strong>.' },
                        { question: 'Which of these is an <strong>equation</strong> (not an expression)?', choices: ['3x + 2', '5x − 7', '2x + 4 = 10', '4x²'], correctIndex: 2, explanation: 'An equation has an equals sign: <strong>2x + 4 = 10</strong>.' },
                    ]}
                ]
            },
            // ---- 2. Linear Equations ----
            {
                id: 'linear-equations',
                title: 'Linear Equations',
                subtitle: 'Solve equations of the form ax + b = c',
                xpReward: 50,
                sections: [
                    { type: 'text', content: `
                        <h3>Solving One-Step and Two-Step Equations</h3>
                        <p>The golden rule: <strong>whatever you do to one side, you must do to the other</strong>.</p>
                        <p>To solve <em>ax + b = c</em>: subtract b, then divide by a.</p>
                    `},
                    { type: 'example', title: 'Solving 3x + 7 = 22', content: `
                        <p>Subtract 7 → 3x = 15. Divide by 3 → x = <strong>5</strong>. Check: 3(5)+7 = 22 ✓</p>
                    `},
                    { type: 'generated_practice', generators: ['solve-linear'] },
                    { type: 'text', content: `<h3>Equations with Subtraction</h3><p>For <em>ax − b = c</em>: add b first, then divide by a.</p>` },
                    { type: 'generated_practice', generators: ['solve-linear-subtract'] },
                    { type: 'tips', content: `<h4>💡 Pro Tips</h4><ul><li>Undo addition/subtraction first, then multiplication/division.</li><li>Always <strong>check</strong> by plugging your answer back in.</li></ul>` },
                    { type: 'practice', problems: [
                        { question: 'Solve: <strong>5x + 3 = 28</strong>', choices: ['x = 4', 'x = 5', 'x = 6', 'x = 7'], correctIndex: 1, explanation: '5x = 25 → x = <strong>5</strong>' },
                        { question: 'Solve: <strong>3x − 7 = 11</strong>', choices: ['x = 4', 'x = 5', 'x = 6', 'x = 7'], correctIndex: 2, explanation: '3x = 18 → x = <strong>6</strong>' },
                        { question: 'Solve: <strong>2x + 9 = 3</strong>', choices: ['x = −3', 'x = 3', 'x = 6', 'x = −6'], correctIndex: 0, explanation: '2x = −6 → x = <strong>−3</strong>' },
                        { question: 'Solve: <strong>4x − 1 = 4x + 5</strong>', choices: ['x = 0', 'x = 1', 'x = 6', 'No solution'], correctIndex: 3, explanation: 'Subtract 4x: −1 = 5 — always false → <strong>no solution</strong>.' },
                        { question: 'Which step comes <em>first</em> when solving <strong>6x + 4 = 22</strong>?', choices: ['Divide by 6', 'Subtract 4', 'Multiply by 6', 'Add 4'], correctIndex: 1, explanation: 'Undo addition first: <strong>subtract 4</strong> from both sides.' },
                    ]}
                ]
            },
            // ---- 3. Inequalities ----
            {
                id: 'solving-inequalities',
                title: 'Solving Inequalities',
                subtitle: 'Work with <, >, ≤, and ≥ symbols',
                xpReward: 50,
                sections: [
                    { type: 'text', content: `
                        <h3>Standard Inequalities</h3>
                        <p>Solve the same way as equations — but if you multiply or divide by a <em>negative</em>, <strong>flip the sign</strong>.</p>
                    `},
                    { type: 'example', title: 'No Flip Needed', content: `<p><strong>3x + 4 ≤ 19</strong> → 3x ≤ 15 → x ≤ 5</p>` },
                    { type: 'generated_practice', generators: ['solve-inequality'] },
                    { type: 'text', content: `<h3>The Flip Rule</h3><p>When you divide by a negative number, the inequality sign <strong>reverses</strong>.</p>` },
                    { type: 'example', title: 'Flipping the Sign', content: `<p><strong>−2x + 5 > 11</strong> → −2x > 6 → divide by −2, flip → x < −3</p>` },
                    { type: 'generated_practice', generators: ['inequality-flip'] },
                    { type: 'practice', problems: [
                        { question: 'Solve: <strong>4x − 2 > 14</strong>', choices: ['x > 3', 'x > 4', 'x < 4', 'x > 2'], correctIndex: 1, explanation: '4x > 16 → x > <strong>4</strong>' },
                        { question: 'Solve: <strong>3x + 5 ≤ 20</strong>', choices: ['x ≤ 5', 'x ≤ 8', 'x ≤ 3', 'x ≤ 7'], correctIndex: 0, explanation: '3x ≤ 15 → x ≤ <strong>5</strong>' },
                        { question: 'Solve: <strong>−2x > 8</strong>. What happens to the sign?', choices: ['Stays the same: x > −4', 'Flips: x < −4', 'Stays: x > 4', 'Flips: x < 4'], correctIndex: 1, explanation: 'Dividing by negative flips the sign → x < <strong>−4</strong>.' },
                        { question: 'Solve: <strong>5x − 3 ≥ 2x + 9</strong>', choices: ['x ≥ 2', 'x ≥ 4', 'x ≥ 6', 'x ≥ 3'], correctIndex: 1, explanation: '3x ≥ 12 → x ≥ <strong>4</strong>' },
                        { question: 'Which graph shows <strong>x < 3</strong>?', choices: ['Closed dot at 3, arrow right', 'Open dot at 3, arrow left', 'Open dot at 3, arrow right', 'Closed dot at 3, arrow left'], correctIndex: 1, explanation: 'Strict inequality → <strong>open dot</strong>; x < 3 goes to the left.' },
                    ]}
                ]
            },
            // ---- 4. Graphing Lines ----
            {
                id: 'graphing-lines',
                title: 'Graphing Linear Equations',
                subtitle: 'Plot lines using slope and y-intercept',
                xpReward: 60,
                sections: [
                    { type: 'text', content: `
                        <h3>Slope-Intercept Form: y = mx + b</h3>
                        <ul><li><strong>m</strong> = slope (rise over run)</li><li><strong>b</strong> = y-intercept (where the line crosses the y-axis)</li></ul>
                        <h3>Calculating Slope from Two Points</h3>
                        <p style="text-align:center;"><strong>m = (y₂ − y₁) / (x₂ − x₁)</strong></p>
                    `},
                    { type: 'example', title: 'Finding Slope', content: `<p>Points (2, 3) and (6, 11): m = (11−3)/(6−2) = 8/4 = <strong>2</strong></p>` },
                    { type: 'generated_practice', generators: ['find-slope'] },
                    { type: 'generated_practice', generators: ['identify-slope-intercept'] },
                    { type: 'practice', problems: [
                        { question: 'In <strong>y = 3x − 5</strong>, what is the slope?', choices: ['−5', '3', '5', '−3'], correctIndex: 1, explanation: 'm = <strong>3</strong>' },
                        { question: 'In <strong>y = 3x − 5</strong>, what is the y-intercept?', choices: ['3', '5', '−5', '0'], correctIndex: 2, explanation: 'b = <strong>−5</strong>' },
                        { question: 'Slope between (0, 2) and (4, 10)?', choices: ['1', '2', '3', '4'], correctIndex: 1, explanation: 'm = (10−2)/(4−0) = 8/4 = <strong>2</strong>' },
                        { question: 'A line with slope <strong>0</strong> is?', choices: ['Vertical', 'Horizontal', 'Diagonal', 'Undefined'], correctIndex: 1, explanation: 'Zero slope → <strong>horizontal</strong> line.' },
                        { question: 'Which equation has a <strong>negative slope</strong>?', choices: ['y = 2x + 1', 'y = x + 3', 'y = −4x + 7', 'y = 5x − 2'], correctIndex: 2, explanation: 'y = <strong>−4x</strong> + 7 has slope −4.' },
                    ]}
                ]
            },
            // ---- 5. Systems of Equations ----
            {
                id: 'systems-equations',
                title: 'Systems of Equations',
                subtitle: 'Solve two equations simultaneously',
                xpReward: 75,
                sections: [
                    { type: 'text', content: `
                        <h3>What is a System?</h3>
                        <p>Two equations with the same variables. The solution makes <em>both</em> true.</p>
                        <h3>Elimination Method</h3>
                        <p>Add or subtract the equations to eliminate one variable, then solve for the other.</p>
                        <h3>Substitution Method</h3>
                        <p>Solve one equation for a variable, substitute into the other.</p>
                    `},
                    { type: 'example', title: 'Elimination', content: `<p><strong>x + y = 10, x − y = 4</strong></p><p>Add: 2x = 14 → x = 7, then y = 3</p>` },
                    { type: 'generated_practice', generators: ['solve-system'] },
                    { type: 'generated_practice', generators: ['substitution-system'] },
                    { type: 'practice', problems: [
                        { question: 'Solve: <strong>y = x + 3</strong> and <strong>2x + y = 12</strong>. What is y?', choices: ['3', '5', '6', '8'], correctIndex: 2, explanation: '2x + x + 3 = 12 → 3x = 9 → x = 3, y = <strong>6</strong>' },
                        { question: 'Solve: <strong>x + y = 8</strong> and <strong>x − y = 2</strong>. What is x?', choices: ['3', '5', '4', '6'], correctIndex: 1, explanation: 'Add equations: 2x = 10 → x = <strong>5</strong>' },
                        { question: 'A system has <strong>no solution</strong> when the lines are:', choices: ['Identical', 'Perpendicular', 'Parallel', 'Intersecting'], correctIndex: 2, explanation: '<strong>Parallel</strong> lines never meet → no solution.' },
                        { question: 'Solve by substitution: <strong>y = 2x</strong> and <strong>x + y = 9</strong>. Find x.', choices: ['2', '3', '4', '6'], correctIndex: 1, explanation: 'x + 2x = 9 → 3x = 9 → x = <strong>3</strong>' },
                    ]}
                ]
            },
            // ---- 6. Quadratic Equations ----
            {
                id: 'quadratic-equations',
                title: 'Quadratic Equations',
                subtitle: 'Master equations of the form ax² + bx + c = 0',
                xpReward: 75,
                sections: [
                    { type: 'text', content: `
                        <h3>The Quadratic Formula</h3>
                        <p style="text-align:center; font-size:1.2em;"><strong>x = (−b ± √(b² − 4ac)) / 2a</strong></p>
                        <p>The <strong>discriminant</strong> (b² − 4ac) tells you how many solutions exist: positive → 2, zero → 1, negative → 0.</p>
                    `},
                    { type: 'example', title: 'Using the Formula', content: `<p><strong>x² − 5x + 6 = 0:</strong> disc = 25 − 24 = 1. x = (5 ± 1)/2 → x = <strong>3</strong> or <strong>2</strong></p>` },
                    { type: 'generated_practice', generators: ['find-discriminant'] },
                    { type: 'text', content: `<h3>Simple Quadratics</h3><p>When there's no middle term (x² = k), just take the square root of both sides.</p>` },
                    { type: 'generated_practice', generators: ['solve-quadratic-simple'] },
                    { type: 'practice', problems: [
                        { question: 'Discriminant of <strong>x² + 4x + 4 = 0</strong>?', choices: ['0', '4', '8', '16'], correctIndex: 0, explanation: '16 − 16 = <strong>0</strong> → one solution' },
                        { question: 'How many real solutions when discriminant > 0?', choices: ['0', '1', '2', '3'], correctIndex: 2, explanation: 'Positive discriminant → <strong>two</strong> distinct real solutions.' },
                        { question: 'Solve: <strong>x² − 9 = 0</strong>', choices: ['x = 3 only', 'x = ±3', 'x = 9', 'x = ±9'], correctIndex: 1, explanation: 'x² = 9 → x = <strong>±3</strong>' },
                        { question: 'In the quadratic formula, what does <strong>b² − 4ac</strong> represent?', choices: ['The solution', 'The vertex', 'The discriminant', 'The axis of symmetry'], correctIndex: 2, explanation: 'b² − 4ac is called the <strong>discriminant</strong>.' },
                        { question: 'Discriminant of <strong>x² + 2x + 5 = 0</strong>?', choices: ['−16', '−24', '16', '24'], correctIndex: 0, explanation: '4 − 20 = <strong>−16</strong> → no real solutions.' },
                    ]}
                ]
            },
            // ---- 7. Factoring ----
            {
                id: 'factoring',
                title: 'Factoring Polynomials',
                subtitle: 'Break down expressions into factors',
                xpReward: 70,
                sections: [
                    { type: 'text', content: `
                        <h3>Factoring Trinomials</h3>
                        <p>For x² + bx + c, find two numbers that <strong>multiply to c</strong> and <strong>add to b</strong>.</p>
                    `},
                    { type: 'example', title: 'Trinomial', content: `<p><strong>x² + 7x + 12:</strong> 3 × 4 = 12, 3 + 4 = 7 → (x + 3)(x + 4)</p>` },
                    { type: 'generated_practice', generators: ['factor-trinomial'] },
                    { type: 'text', content: `<h3>Difference of Squares</h3><p><strong>a² − b² = (a + b)(a − b)</strong></p>` },
                    { type: 'example', title: 'Difference of Squares', content: `<p><strong>x² − 25 = (x + 5)(x − 5)</strong></p>` },
                    { type: 'generated_practice', generators: ['factor-diff-squares'] },
                    { type: 'practice', problems: [
                        { question: 'Factor: <strong>x² + 5x + 6</strong>', choices: ['(x+1)(x+6)', '(x+2)(x+3)', '(x+5)(x+1)', '(x−2)(x−3)'], correctIndex: 1, explanation: '2 × 3 = 6, 2 + 3 = 5 → <strong>(x+2)(x+3)</strong>' },
                        { question: 'Factor: <strong>x² − 9</strong>', choices: ['(x−3)²', '(x+9)(x−1)', '(x+3)(x−3)', '(x−9)(x+1)'], correctIndex: 2, explanation: 'Difference of squares: <strong>(x+3)(x−3)</strong>' },
                        { question: 'Factor: <strong>x² − 7x + 10</strong>', choices: ['(x−2)(x−5)', '(x+2)(x+5)', '(x−1)(x−10)', '(x+2)(x−5)'], correctIndex: 0, explanation: '−2 × −5 = 10, −2 + −5 = −7 → <strong>(x−2)(x−5)</strong>' },
                        { question: 'Factor: <strong>x² − 16</strong>', choices: ['(x−4)²', '(x+8)(x−2)', '(x+4)(x−4)', '(x+16)(x−1)'], correctIndex: 2, explanation: 'Difference of squares: <strong>(x+4)(x−4)</strong>' },
                        { question: 'Which pair multiplies to <strong>12</strong> and adds to <strong>7</strong>?', choices: ['2 and 5', '3 and 4', '6 and 1', '2 and 6'], correctIndex: 1, explanation: '<strong>3 × 4 = 12</strong> and <strong>3 + 4 = 7</strong>.' },
                    ]}
                ]
            },
            // ---- 8. Exponents ----
            {
                id: 'exponents',
                title: 'Exponents and Powers',
                subtitle: 'Master exponent rules',
                xpReward: 60,
                sections: [
                    { type: 'text', content: `
                        <h3>Exponent Rules</h3>
                        <ul>
                            <li><strong>Product:</strong> a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup></li>
                            <li><strong>Quotient:</strong> a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup></li>
                            <li><strong>Power:</strong> (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup></li>
                            <li><strong>Zero:</strong> a<sup>0</sup> = 1</li>
                            <li><strong>Negative:</strong> a<sup>−n</sup> = 1/a<sup>n</sup></li>
                        </ul>
                    `},
                    { type: 'example', title: 'Applying the Rules', content: `<p><strong>2³ × 2⁴</strong> = 2<sup>3+4</sup> = 2⁷ = 128</p><p><strong>(x³)²</strong> = x<sup>3×2</sup> = x⁶</p>` },
                    { type: 'generated_practice', generators: ['exponent-product'] },
                    { type: 'generated_practice', generators: ['exponent-evaluate'] },
                    { type: 'practice', problems: [
                        { question: 'What is <strong>4⁰</strong>?', choices: ['0', '4', '1', 'Undefined'], correctIndex: 2, explanation: 'Any nonzero number to the 0 power = <strong>1</strong>' },
                        { question: 'Simplify: <strong>x³ × x⁵</strong>', choices: ['x⁸', 'x¹⁵', 'x²', 'x^35'], correctIndex: 0, explanation: 'Add exponents: 3 + 5 = <strong>x⁸</strong>' },
                        { question: 'Simplify: <strong>x⁶ ÷ x²</strong>', choices: ['x³', 'x⁴', 'x⁸', 'x¹²'], correctIndex: 1, explanation: 'Subtract exponents: 6 − 2 = <strong>x⁴</strong>' },
                        { question: 'Simplify: <strong>(x²)⁴</strong>', choices: ['x⁶', 'x⁸', 'x²', 'x¹⁶'], correctIndex: 1, explanation: 'Multiply exponents: 2 × 4 = <strong>x⁸</strong>' },
                        { question: 'What is <strong>2⁻³</strong>?', choices: ['−8', '−6', '1/8', '1/6'], correctIndex: 2, explanation: 'a⁻ⁿ = 1/aⁿ → 2⁻³ = <strong>1/8</strong>' },
                    ]}
                ]
            },
            // ---- 9. Functions ----
            {
                id: 'functions',
                title: 'Functions & Graphs',
                subtitle: 'Understanding function notation',
                xpReward: 75,
                sections: [
                    { type: 'text', content: `
                        <h3>What is a Function?</h3>
                        <p>A function takes each input and produces exactly <strong>one output</strong>. f(x) means "the output when input is x".</p>
                        <h3>Domain and Range</h3>
                        <ul><li><strong>Domain:</strong> all valid inputs</li><li><strong>Range:</strong> all possible outputs</li></ul>
                    `},
                    { type: 'example', title: 'Evaluating', content: `<p>f(x) = x² − 2x + 1, find f(4): 16 − 8 + 1 = <strong>9</strong></p>` },
                    { type: 'generated_practice', generators: ['evaluate-function'] },
                    { type: 'generated_practice', generators: ['evaluate-function-squared'] },
                    { type: 'practice', problems: [
                        { question: 'If <strong>f(x) = 3x − 7</strong>, what is f(5)?', choices: ['8', '15', '22', '2'], correctIndex: 0, explanation: '3(5) − 7 = <strong>8</strong>' },
                        { question: 'If <strong>g(x) = x² + 1</strong>, what is g(4)?', choices: ['9', '17', '16', '5'], correctIndex: 1, explanation: '4² + 1 = 16 + 1 = <strong>17</strong>' },
                        { question: 'Which set of pairs is <em>not</em> a function?', choices: ['{(1,2),(2,3),(3,4)}', '{(1,5),(2,5),(3,5)}', '{(1,2),(1,3),(2,4)}', '{(0,0),(1,1),(2,2)}'], correctIndex: 2, explanation: 'x = 1 maps to both 2 and 3 — not a function (<strong>one input, two outputs</strong>).' },
                        { question: 'If <strong>h(x) = 2x + 6</strong>, find x when h(x) = 14.', choices: ['x = 4', 'x = 5', 'x = 6', 'x = 10'], correctIndex: 0, explanation: '2x + 6 = 14 → 2x = 8 → x = <strong>4</strong>' },
                    ]}
                ]
            },
            // ---- 10. Rational Expressions ----
            {
                id: 'rational-expressions',
                title: 'Rational Expressions',
                subtitle: 'Work with algebraic fractions',
                xpReward: 80,
                sections: [
                    { type: 'text', content: `
                        <h3>Rational Expressions</h3>
                        <p>A fraction where numerator/denominator are polynomials. To simplify: factor, then cancel common factors.</p>
                        <p><strong>Critical rule:</strong> The denominator can never equal zero — always state excluded values.</p>
                    `},
                    { type: 'example', title: 'Simplifying', content: `<p><strong>(x² + 3x)/(x + 3)</strong> = x(x+3)/(x+3) = <strong>x</strong> (where x ≠ −3)</p>` },
                    { type: 'generated_practice', generators: ['simplify-rational'] },
                    { type: 'generated_practice', generators: ['find-excluded-value'] },
                    { type: 'practice', problems: [
                        { question: 'Simplify: <strong>(x² − 4)/(x − 2)</strong>', choices: ['x − 2', 'x + 2', 'x² − 2', '2x'], correctIndex: 1, explanation: '(x+2)(x−2)/(x−2) = <strong>x + 2</strong>' },
                        { question: 'What value is excluded in <strong>3/(x − 5)</strong>?', choices: ['x = 3', 'x = 0', 'x = 5', 'x = −5'], correctIndex: 2, explanation: 'Denominator can\'t be 0: x − 5 ≠ 0 → x ≠ <strong>5</strong>' },
                        { question: 'Simplify: <strong>(2x² + 4x) / (2x)</strong>', choices: ['x + 4', 'x + 2', '2x + 4', 'x² + 4'], correctIndex: 1, explanation: 'Factor: 2x(x+2)/2x = <strong>x + 2</strong>' },
                        { question: 'What excluded value applies to <strong>(x+1)/(x²−9)</strong>?', choices: ['x ≠ ±1', 'x ≠ ±3', 'x ≠ 9', 'x ≠ 0'], correctIndex: 1, explanation: 'x² − 9 = (x+3)(x−3) → x ≠ <strong>±3</strong>' },
                        { question: 'Simplify: <strong>(x² + 6x + 9)/(x + 3)</strong>', choices: ['x − 3', 'x + 9', 'x + 3', 'x²'], correctIndex: 2, explanation: '(x+3)²/(x+3) = <strong>x + 3</strong>' },
                    ]}
                ]
            }
        ]
    },

    // ========================================================
    // GEOMETRY PATH
    // ========================================================
    geometry: {
        name: 'Geometry Path',
        icon: '📏',
        lessons: [
            // ---- 1. Intro to Geometry ----
            {
                id: 'intro-geometry',
                title: 'Introduction to Geometry',
                subtitle: 'Points, lines, and planes',
                xpReward: 30,
                sections: [
                    { type: 'text', content: `
                        <h3>The Building Blocks</h3>
                        <ul>
                            <li><strong>Point:</strong> A location with no size. Named with a capital letter.</li>
                            <li><strong>Line:</strong> Extends infinitely in both directions through two points.</li>
                            <li><strong>Plane:</strong> A flat surface extending infinitely in all directions.</li>
                        </ul>
                        <h3>Segments and Rays</h3>
                        <ul>
                            <li><strong>Line segment:</strong> Two endpoints — a piece of a line with definite length.</li>
                            <li><strong>Ray:</strong> One endpoint, extends infinitely in one direction.</li>
                        </ul>
                    `},
                    { type: 'generated_practice', generators: ['geo-basic-definitions'] },
                    { type: 'generated_practice', generators: ['geo-basic-definitions'] },
                    { type: 'practice', problems: [
                        { question: 'Which has exactly <strong>two endpoints</strong>?', choices: ['Line', 'Ray', 'Line segment', 'Point'], correctIndex: 2, explanation: 'A <strong>line segment</strong> has two endpoints.' },
                        { question: 'A <strong>ray</strong> has:', choices: ['No endpoints', 'Two endpoints', 'One endpoint', 'Three endpoints'], correctIndex: 2, explanation: 'A ray has <strong>one endpoint</strong> and extends infinitely in one direction.' },
                        { question: 'How many points define a unique line?', choices: ['1', '2', '3', '4'], correctIndex: 1, explanation: '<strong>2</strong> points define exactly one line.' },
                        { question: 'A <strong>plane</strong> has how many dimensions?', choices: ['0', '1', '2', '3'], correctIndex: 2, explanation: 'A plane is a flat <strong>2-dimensional</strong> surface.' },
                    ]}
                ]
            },
            // ---- 2. Angles ----
            {
                id: 'angles',
                title: 'Angles',
                subtitle: 'Types and measurements of angles',
                xpReward: 40,
                sections: [
                    { type: 'text', content: `
                        <h3>Types of Angles</h3>
                        <ul><li><strong>Acute:</strong> &lt; 90°</li><li><strong>Right:</strong> = 90°</li><li><strong>Obtuse:</strong> 90°–180°</li><li><strong>Straight:</strong> = 180°</li></ul>
                        <h3>Angle Relationships</h3>
                        <ul><li><strong>Complementary:</strong> add to 90°</li><li><strong>Supplementary:</strong> add to 180°</li></ul>
                    `},
                    { type: 'generated_practice', generators: ['complementary-angle'] },
                    { type: 'generated_practice', generators: ['supplementary-angle'] },
                    { type: 'practice', problems: [
                        { question: 'An angle is 135°. What type?', choices: ['Acute', 'Right', 'Obtuse', 'Straight'], correctIndex: 2, explanation: 'Between 90° and 180°: <strong>obtuse</strong>' },
                        { question: 'Two angles are complementary. One is 35°. What is the other?', choices: ['145°', '55°', '65°', '45°'], correctIndex: 1, explanation: '90° − 35° = <strong>55°</strong>' },
                        { question: 'Two angles are supplementary. One is 110°. What is the other?', choices: ['70°', '80°', '90°', '250°'], correctIndex: 0, explanation: '180° − 110° = <strong>70°</strong>' },
                        { question: 'A right angle measures exactly:', choices: ['45°', '90°', '180°', '360°'], correctIndex: 1, explanation: 'A right angle = <strong>90°</strong>.' },
                        { question: 'Vertical angles are always:', choices: ['Supplementary', 'Complementary', 'Equal', 'Adjacent'], correctIndex: 2, explanation: 'Vertical angles (formed by intersecting lines) are always <strong>equal</strong>.' },
                    ]}
                ]
            },
            // ---- 3. Triangles ----
            {
                id: 'triangles',
                title: 'Triangles',
                subtitle: 'Properties, types, and theorems',
                xpReward: 50,
                sections: [
                    { type: 'text', content: `
                        <h3>Triangle Basics</h3>
                        <p style="text-align:center; font-size:1.2em;"><strong>Sum of angles = 180°</strong></p>
                        <h3>Types by Sides</h3>
                        <ul><li><strong>Equilateral:</strong> 3 equal sides (all 60°)</li><li><strong>Isosceles:</strong> 2 equal sides</li><li><strong>Scalene:</strong> no equal sides</li></ul>
                    `},
                    { type: 'generated_practice', generators: ['triangle-missing-angle'] },
                    { type: 'generated_practice', generators: ['classify-triangle-sides'] },
                    { type: 'practice', problems: [
                        { question: 'A triangle has angles 60°, 60°, 60°. Type?', choices: ['Isosceles', 'Equilateral', 'Scalene', 'Right'], correctIndex: 1, explanation: 'All equal → <strong>equilateral</strong>' },
                        { question: 'A triangle has angles 90°, 45°, 45°. What type by angles?', choices: ['Equilateral', 'Obtuse', 'Right', 'Acute'], correctIndex: 2, explanation: 'Contains a 90° angle → <strong>right</strong> triangle.' },
                        { question: 'Two angles of a triangle are 50° and 70°. What is the third?', choices: ['40°', '50°', '60°', '80°'], correctIndex: 2, explanation: '180° − 50° − 70° = <strong>60°</strong>' },
                        { question: 'An <strong>isosceles</strong> triangle has:', choices: ['No equal sides', '2 equal sides', '3 equal sides', '4 equal sides'], correctIndex: 1, explanation: 'Isosceles = <strong>2 equal sides</strong> (and 2 equal base angles).' },
                        { question: 'Can a triangle have angles 90°, 95°, and 5°?', choices: ['Yes', 'No — sum exceeds 180°', 'No — must have equal angles', 'Only if it is scalene'], correctIndex: 1, explanation: '90 + 95 + 5 = 190° > 180° → <strong>impossible</strong>.' },
                    ]}
                ]
            },
            // ---- 4. Quadrilaterals ----
            {
                id: 'quadrilaterals',
                title: 'Quadrilaterals',
                subtitle: 'Squares, rectangles, and more',
                xpReward: 50,
                sections: [
                    { type: 'text', content: `
                        <h3>Four-Sided Figures</h3>
                        <p>Sum of interior angles = <strong>360°</strong>.</p>
                        <ul><li><strong>Square:</strong> 4 equal sides, 4 right angles</li><li><strong>Rectangle:</strong> opposite sides equal, 4 right angles</li><li><strong>Rhombus:</strong> 4 equal sides (angles vary)</li><li><strong>Trapezoid:</strong> one pair of parallel sides</li></ul>
                    `},
                    { type: 'generated_practice', generators: ['quad-missing-angle'] },
                    { type: 'practice', problems: [
                        { question: 'Sum of angles in any quadrilateral?', choices: ['180°', '270°', '360°', '540°'], correctIndex: 2, explanation: '<strong>360°</strong>' },
                        { question: '4 equal sides but not necessarily right angles?', choices: ['Square', 'Rectangle', 'Rhombus', 'Trapezoid'], correctIndex: 2, explanation: '<strong>Rhombus</strong>' },
                        { question: 'A rectangle with all 4 sides equal is called a:', choices: ['Rhombus', 'Trapezoid', 'Square', 'Parallelogram'], correctIndex: 2, explanation: 'A rectangle with equal sides is a <strong>square</strong>.' },
                        { question: 'A trapezoid has exactly how many pairs of parallel sides?', choices: ['0', '1', '2', '4'], correctIndex: 1, explanation: 'A trapezoid has exactly <strong>1</strong> pair of parallel sides.' },
                        { question: 'Three angles of a quadrilateral are 80°, 90°, and 110°. The fourth is:', choices: ['70°', '80°', '90°', '100°'], correctIndex: 1, explanation: '360° − 80° − 90° − 110° = <strong>80°</strong>' },
                    ]}
                ]
            },
            // ---- 5. Circles ----
            {
                id: 'circles',
                title: 'Circles',
                subtitle: 'Radius, diameter, circumference, and area',
                xpReward: 50,
                sections: [
                    { type: 'text', content: `
                        <h3>Circle Vocabulary</h3>
                        <ul><li><strong>Radius (r):</strong> center to edge</li><li><strong>Diameter (d):</strong> across through center, d = 2r</li></ul>
                        <h3>Formulas</h3>
                        <p><strong>Circumference:</strong> C = 2πr &nbsp;|&nbsp; <strong>Area:</strong> A = πr²</p>
                    `},
                    { type: 'example', title: 'Circle Calculations', content: `<p>r = 5: C = 10π ≈ 31.42, A = 25π ≈ 78.54</p>` },
                    { type: 'generated_practice', generators: ['circle-area'] },
                    { type: 'generated_practice', generators: ['circle-circumference'] },
                    { type: 'practice', problems: [
                        { question: 'Which formula gives <strong>area</strong>?', choices: ['2πr', 'πd', 'πr²', '2πr²'], correctIndex: 2, explanation: 'Area = <strong>πr²</strong>' },
                        { question: 'A circle has radius 7. What is its diameter?', choices: ['7', '14', '21', '49'], correctIndex: 1, explanation: 'd = 2r = 2 × 7 = <strong>14</strong>' },
                        { question: 'Circle with r = 3. Circumference? (Use π ≈ 3.14)', choices: ['9.42', '18.84', '28.26', '6.28'], correctIndex: 1, explanation: 'C = 2πr = 2 × 3.14 × 3 ≈ <strong>18.84</strong>' },
                        { question: 'Circle with r = 5. Area? (Use π ≈ 3.14)', choices: ['15.7', '31.4', '78.5', '50'], correctIndex: 2, explanation: 'A = πr² = 3.14 × 25 ≈ <strong>78.5</strong>' },
                        { question: 'If diameter = 10, what is the radius?', choices: ['10', '20', '5', '100'], correctIndex: 2, explanation: 'r = d/2 = 10/2 = <strong>5</strong>' },
                    ]}
                ]
            },
            // ---- 6. Perimeter & Area ----
            {
                id: 'perimeter-area',
                title: 'Perimeter and Area',
                subtitle: 'Calculate for various shapes',
                xpReward: 60,
                sections: [
                    { type: 'text', content: `
                        <h3>Common Formulas</h3>
                        <ul>
                            <li><strong>Rectangle:</strong> P = 2(l+w), A = l×w</li>
                            <li><strong>Triangle:</strong> A = ½ × base × height</li>
                            <li><strong>Parallelogram:</strong> A = base × height</li>
                            <li><strong>Trapezoid:</strong> A = ½(b₁+b₂) × height</li>
                        </ul>
                    `},
                    { type: 'generated_practice', generators: ['rectangle-area'] },
                    { type: 'generated_practice', generators: ['triangle-area'] },
                    { type: 'practice', problems: [
                        { question: 'Rectangle: length 12, width 7. Area?', choices: ['38', '84', '19', '42'], correctIndex: 1, explanation: '12 × 7 = <strong>84</strong>' },
                        { question: 'Rectangle: length 12, width 7. Perimeter?', choices: ['38', '84', '19', '26'], correctIndex: 0, explanation: 'P = 2(12 + 7) = 2(19) = <strong>38</strong>' },
                        { question: 'Triangle with base 10 and height 6. Area?', choices: ['16', '60', '30', '15'], correctIndex: 2, explanation: 'A = ½ × 10 × 6 = <strong>30</strong>' },
                        { question: 'Parallelogram with base 8 and height 5. Area?', choices: ['13', '26', '40', '20'], correctIndex: 2, explanation: 'A = base × height = 8 × 5 = <strong>40</strong>' },
                        { question: 'Trapezoid: b₁ = 6, b₂ = 10, height = 4. Area?', choices: ['32', '40', '16', '24'], correctIndex: 0, explanation: 'A = ½(6+10) × 4 = ½ × 16 × 4 = <strong>32</strong>' },
                    ]}
                ]
            },
            // ---- 7. Pythagorean Theorem ----
            {
                id: 'pythagorean',
                title: 'Pythagorean Theorem',
                subtitle: 'Understanding a² + b² = c²',
                xpReward: 75,
                sections: [
                    { type: 'text', content: `
                        <h3>The Pythagorean Theorem</h3>
                        <p style="text-align:center; font-size:1.3em;"><strong>a² + b² = c²</strong></p>
                        <p>c is the hypotenuse (longest side, opposite the right angle).</p>
                        <h3>Common Triples</h3><p>3-4-<strong>5</strong> | 5-12-<strong>13</strong> | 8-15-<strong>17</strong></p>
                    `},
                    { type: 'example', title: 'Finding the Hypotenuse', content: `<p>Legs 6 and 8: c² = 36 + 64 = 100 → c = <strong>10</strong></p>` },
                    { type: 'generated_practice', generators: ['find-hypotenuse'] },
                    { type: 'text', content: `<h3>Finding a Missing Leg</h3><p>Rearrange: b² = c² − a²</p>` },
                    { type: 'generated_practice', generators: ['find-leg'] },
                    { type: 'practice', problems: [
                        { question: 'Legs 3 and 4. Hypotenuse?', choices: ['7', '5', '6', '12'], correctIndex: 1, explanation: '9 + 16 = 25 → √25 = <strong>5</strong>' },
                        { question: 'Legs 5 and 12. Hypotenuse?', choices: ['13', '17', '10', '15'], correctIndex: 0, explanation: '25 + 144 = 169 → √169 = <strong>13</strong>' },
                        { question: 'Hypotenuse = 10, one leg = 6. Other leg?', choices: ['4', '6', '8', '12'], correctIndex: 2, explanation: 'b² = 100 − 36 = 64 → b = <strong>8</strong>' },
                        { question: 'Is 6, 8, 10 a Pythagorean triple?', choices: ['Yes', 'No', 'Only if it is a right triangle', 'Only for whole numbers'], correctIndex: 0, explanation: '36 + 64 = 100 ✓ → <strong>Yes</strong>' },
                        { question: 'In a² + b² = c², which side is c?', choices: ['Any side', 'The shortest', 'The hypotenuse', 'Either leg'], correctIndex: 2, explanation: 'c is always the <strong>hypotenuse</strong> — the longest side, opposite the right angle.' },
                    ]}
                ]
            },
            // ---- 8. Similarity & Congruence ----
            {
                id: 'similarity-congruence',
                title: 'Similarity and Congruence',
                subtitle: 'Comparing shapes',
                xpReward: 70,
                sections: [
                    { type: 'text', content: `
                        <h3>Congruent (≅)</h3><p>Same shape AND size. All corresponding sides and angles equal.</p>
                        <h3>Similar (~)</h3><p>Same shape, possibly different size. Angles equal, sides in proportion (scale factor k). Areas scale by k².</p>
                    `},
                    { type: 'generated_practice', generators: ['scale-factor'] },
                    { type: 'generated_practice', generators: ['congruent-vs-similar'] },
                    { type: 'practice', problems: [
                        { question: 'If two figures are congruent, what must be true?', choices: ['Same shape only', 'Same size only', 'Same shape and size', 'Same area only'], correctIndex: 2, explanation: '<strong>Same shape and same size.</strong>' },
                        { question: 'Two triangles are similar with scale factor 3. If one side is 4, what is the corresponding side?', choices: ['4', '7', '12', '3'], correctIndex: 2, explanation: '4 × 3 = <strong>12</strong>' },
                        { question: 'Similar figures have equal:', choices: ['Side lengths', 'Angles and side lengths', 'Angles only', 'Perimeters'], correctIndex: 2, explanation: 'Similar figures have equal <strong>angles</strong>; sides are proportional, not necessarily equal.' },
                        { question: 'Scale factor = 2. Area scales by:', choices: ['2', '4', '6', '8'], correctIndex: 1, explanation: 'Area scales by k² = 2² = <strong>4</strong>' },
                        { question: 'Which congruence shortcut uses two sides and the included angle?', choices: ['SSS', 'AAS', 'SAS', 'ASA'], correctIndex: 2, explanation: '<strong>SAS</strong> — Side-Angle-Side.' },
                    ]}
                ]
            },
            // ---- 9. Volume & Surface Area ----
            {
                id: 'volume-surface-area',
                title: 'Volume and Surface Area',
                subtitle: '3D shapes and measurements',
                xpReward: 80,
                sections: [
                    { type: 'text', content: `
                        <h3>Key 3D Formulas</h3>
                        <ul>
                            <li><strong>Cube:</strong> V = s³, SA = 6s²</li>
                            <li><strong>Rectangular Prism:</strong> V = lwh</li>
                            <li><strong>Cylinder:</strong> V = πr²h</li>
                            <li><strong>Sphere:</strong> V = (4/3)πr³</li>
                        </ul>
                    `},
                    { type: 'generated_practice', generators: ['cube-volume'] },
                    { type: 'generated_practice', generators: ['cube-surface-area'] },
                    { type: 'practice', problems: [
                        { question: 'Volume of a cube with side 4?', choices: ['12', '16', '48', '64'], correctIndex: 3, explanation: '4³ = <strong>64</strong>' },
                        { question: 'Surface area of a cube with side 3?', choices: ['18', '27', '54', '36'], correctIndex: 2, explanation: 'SA = 6s² = 6 × 9 = <strong>54</strong>' },
                        { question: 'Volume of a rectangular prism: l=5, w=4, h=3?', choices: ['47', '60', '24', '94'], correctIndex: 1, explanation: 'V = 5 × 4 × 3 = <strong>60</strong>' },
                        { question: 'Which formula gives cylinder volume?', choices: ['2πr²h', 'πr²h', '4πr³/3', '2πrh'], correctIndex: 1, explanation: 'Cylinder volume = <strong>πr²h</strong>' },
                        { question: 'Volume of a sphere with r = 3? (Use π ≈ 3.14)', choices: ['28.3', '37.7', '113.1', '75.4'], correctIndex: 2, explanation: 'V = (4/3)π(27) = 4π(9) ≈ <strong>113.1</strong>' },
                    ]}
                ]
            },
            // ---- 10. Transformations ----
            {
                id: 'transformations',
                title: 'Transformations',
                subtitle: 'Translations, rotations, and reflections',
                xpReward: 75,
                sections: [
                    { type: 'text', content: `
                        <h3>Types of Transformations</h3>
                        <ul>
                            <li><strong>Translation (slide):</strong> every point moves same distance/direction</li>
                            <li><strong>Reflection (flip):</strong> mirrored over a line</li>
                            <li><strong>Rotation (turn):</strong> turns around a fixed point</li>
                            <li><strong>Dilation (scale):</strong> enlarges/shrinks by a scale factor</li>
                        </ul>
                        <p>Translations, reflections, rotations = <strong>rigid</strong> (preserve size). Dilation = <strong>non-rigid</strong>.</p>
                    `},
                    { type: 'generated_practice', generators: ['identify-transformation'] },
                    { type: 'generated_practice', generators: ['translate-point'] },
                    { type: 'practice', problems: [
                        { question: 'Which changes the <strong>size</strong>?', choices: ['Translation', 'Reflection', 'Rotation', 'Dilation'], correctIndex: 3, explanation: '<strong>Dilation</strong>' },
                        { question: 'A point (3, −2) is reflected over the x-axis. New coordinates?', choices: ['(−3, −2)', '(3, 2)', '(−3, 2)', '(2, −3)'], correctIndex: 1, explanation: 'Reflecting over x-axis negates y: <strong>(3, 2)</strong>' },
                        { question: 'A translation moves every point the same distance. This means it is a ___ transformation.', choices: ['Non-rigid', 'Rigid', 'Scaling', 'Distorting'], correctIndex: 1, explanation: 'Translations preserve size and shape → <strong>rigid</strong>.' },
                        { question: 'A figure is rotated 360°. It looks:', choices: ['Flipped', 'Stretched', 'The same as original', 'Smaller'], correctIndex: 2, explanation: 'A full 360° rotation brings it back to its <strong>original</strong> position.' },
                        { question: 'Which transformation is a "flip"?', choices: ['Translation', 'Rotation', 'Reflection', 'Dilation'], correctIndex: 2, explanation: 'A <strong>reflection</strong> flips a figure over a line.' },
                    ]}
                ]
            }
        ]
    },

    // ========================================================
    // TRIGONOMETRY PATH
    // ========================================================
    trigonometry: {
        name: 'Trigonometry Path',
        icon: '📊',
        lessons: [
            // ---- 1. Intro to Trig ----
            {
                id: 'intro-trig',
                title: 'Introduction to Trigonometry',
                subtitle: 'Sine, cosine, and tangent basics',
                xpReward: 50,
                sections: [
                    { type: 'text', content: `
                        <h3>SOHCAHTOA</h3>
                        <ul>
                            <li><strong>Sin(θ)</strong> = Opposite / Hypotenuse → <em>SOH</em></li>
                            <li><strong>Cos(θ)</strong> = Adjacent / Hypotenuse → <em>CAH</em></li>
                            <li><strong>Tan(θ)</strong> = Opposite / Adjacent → <em>TOA</em></li>
                        </ul>
                    `},
                    { type: 'example', title: 'Trig Ratios', content: `<p>Opp = 3, Adj = 4, Hyp = 5: sin = 3/5, cos = 4/5, tan = 3/4</p>` },
                    { type: 'generated_practice', generators: ['trig-ratio-from-sides'] },
                    { type: 'generated_practice', generators: ['sohcahtoa-which-func'] },
                    { type: 'practice', problems: [
                        { question: 'Which ratio = Opposite/Adjacent?', choices: ['Sine', 'Cosine', 'Tangent', 'Secant'], correctIndex: 2, explanation: '<strong>Tangent</strong> (TOA)' },
                        { question: 'Which ratio = Adjacent/Hypotenuse?', choices: ['Sine', 'Cosine', 'Tangent', 'Cosecant'], correctIndex: 1, explanation: '<strong>Cosine</strong> (CAH)' },
                        { question: 'Opp = 5, Hyp = 13. What is sin(θ)?', choices: ['13/5', '5/13', '12/13', '5/12'], correctIndex: 1, explanation: 'sin = O/H = <strong>5/13</strong>' },
                        { question: 'In SOHCAHTOA, what does the "H" stand for?', choices: ['Height', 'Horizontal', 'Hypotenuse', 'Half'], correctIndex: 2, explanation: 'H = <strong>Hypotenuse</strong>' },
                        { question: 'Opp = 3, Adj = 4, Hyp = 5. What is cos(θ)?', choices: ['3/5', '3/4', '4/5', '4/3'], correctIndex: 2, explanation: 'cos = A/H = <strong>4/5</strong>' },
                    ]}
                ]
            },
            // ---- 2. Right Triangle Trig ----
            {
                id: 'right-triangles',
                title: 'Right Triangle Trigonometry',
                subtitle: 'Apply trig ratios to find missing sides',
                xpReward: 60,
                sections: [
                    { type: 'text', content: `
                        <h3>Finding Missing Sides</h3>
                        <ol><li>Identify opposite, adjacent, hypotenuse relative to your angle.</li><li>Pick the right function (sin, cos, or tan).</li><li>Solve.</li></ol>
                        <h3>Finding Missing Angles</h3><p>Use inverse functions: sin⁻¹, cos⁻¹, tan⁻¹.</p>
                    `},
                    { type: 'example', title: 'Finding a Side', content: `<p>θ = 30°, hyp = 10: sin(30°) = opp/10 → opp = 10 × 0.5 = <strong>5</strong></p>` },
                    { type: 'generated_practice', generators: ['trig-find-side'] },
                    { type: 'generated_practice', generators: ['which-trig-function'] },
                    { type: 'practice', problems: [
                        { question: 'Opp = 8, adj = 6. Which function finds θ?', choices: ['sin = 8/6', 'cos = 8/6', 'tan = 8/6', 'tan = 6/8'], correctIndex: 2, explanation: '<strong>tan(θ) = O/A = 8/6</strong>' },
                        { question: 'θ = 45°, hyp = 10. What is the opposite side?', choices: ['5', '7.07', '8.66', '10'], correctIndex: 1, explanation: 'opp = 10 × sin(45°) = 10 × 0.707 ≈ <strong>7.07</strong>' },
                        { question: 'θ = 60°, adj = 4. What is the hypotenuse?', choices: ['4', '6', '8', '2'], correctIndex: 2, explanation: 'cos(60°) = 0.5 = adj/hyp → hyp = 4/0.5 = <strong>8</strong>' },
                        { question: 'Which inverse function finds an angle from sin?', choices: ['sin⁻¹ (arcsin)', 'cos⁻¹ (arccos)', 'tan⁻¹ (arctan)', 'csc'], correctIndex: 0, explanation: '<strong>arcsin</strong> (or sin⁻¹) reverses sine to give an angle.' },
                        { question: 'θ = 30°, opp = 5. Find hyp.', choices: ['2.5', '10', '5√3', '5√2'], correctIndex: 1, explanation: 'sin(30°) = 0.5 = 5/hyp → hyp = <strong>10</strong>' },
                    ]}
                ]
            },
            // ---- 3. Special Triangles ----
            {
                id: 'special-triangles',
                title: 'Special Right Triangles',
                subtitle: '30-60-90 and 45-45-90 triangles',
                xpReward: 60,
                sections: [
                    { type: 'text', content: `
                        <h3>45-45-90 Triangle</h3>
                        <p>Ratio: 1 : 1 : √2. Hypotenuse = leg × √2.</p>
                        <h3>30-60-90 Triangle</h3>
                        <p>Ratio: 1 : √3 : 2. Hyp = 2 × short leg. Long leg = short leg × √3.</p>
                    `},
                    { type: 'generated_practice', generators: ['special-45-45-90'] },
                    { type: 'generated_practice', generators: ['special-30-60-90'] },
                    { type: 'practice', problems: [
                        { question: '45-45-90, legs = 5. Hypotenuse?', choices: ['5', '10', '5√2 ≈ 7.07', '5√3 ≈ 8.66'], correctIndex: 2, explanation: '<strong>5√2 ≈ 7.07</strong>' },
                        { question: '30-60-90, short leg = 6. Hypotenuse?', choices: ['6', '9', '12', '6√3'], correctIndex: 2, explanation: 'Hyp = 2 × short leg = 2 × 6 = <strong>12</strong>' },
                        { question: '30-60-90, short leg = 4. Long leg?', choices: ['8', '4√2', '4√3 ≈ 6.93', '4'], correctIndex: 2, explanation: 'Long leg = short leg × √3 = 4√3 ≈ <strong>6.93</strong>' },
                        { question: '45-45-90, hypotenuse = 10. Each leg = ?', choices: ['5', '10√2', '5√2 ≈ 7.07', '10/√2 ≈ 7.07'], correctIndex: 3, explanation: 'leg = hyp/√2 = 10/√2 ≈ <strong>7.07</strong>' },
                    ]}
                ]
            },
            // ---- 4. Unit Circle ----
            {
                id: 'unit-circle',
                title: 'The Unit Circle',
                subtitle: 'Angles and coordinates on a circle of radius 1',
                xpReward: 75,
                sections: [
                    { type: 'text', content: `
                        <h3>Unit Circle</h3>
                        <p>Circle with radius 1 at the origin. Each point = <strong>(cos θ, sin θ)</strong>.</p>
                        <h3>Key Values</h3>
                        <p>0°: (1,0) | 30°: (√3/2, ½) | 45°: (√2/2, √2/2) | 60°: (½, √3/2) | 90°: (0,1) | 180°: (−1,0) | 270°: (0,−1)</p>
                    `},
                    { type: 'generated_practice', generators: ['unit-circle-coords'] },
                    { type: 'generated_practice', generators: ['quadrant-id'] },
                    { type: 'practice', problems: [
                        { question: 'Point at 90° on unit circle?', choices: ['(1,0)', '(0,1)', '(−1,0)', '(0,−1)'], correctIndex: 1, explanation: '<strong>(0, 1)</strong>' },
                        { question: 'sin(180°) = ?', choices: ['1', '0', '−1', '√2/2'], correctIndex: 1, explanation: 'At 180°, sin = <strong>0</strong>' },
                        { question: 'cos(0°) = ?', choices: ['0', '1', '−1', '√3/2'], correctIndex: 1, explanation: 'At 0°, cos = <strong>1</strong>' },
                        { question: 'What are the coordinates at 270°?', choices: ['(0, 1)', '(−1, 0)', '(0, −1)', '(1, 0)'], correctIndex: 2, explanation: 'At 270°: <strong>(0, −1)</strong>' },
                        { question: 'On the unit circle, every point equals (cos θ, sin θ). Which component is the x-coordinate?', choices: ['sin θ', 'cos θ', 'tan θ', '1/cos θ'], correctIndex: 1, explanation: 'x-coordinate = <strong>cos θ</strong>' },
                    ]}
                ]
            },
            // ---- 5. Radians ----
            {
                id: 'radians',
                title: 'Radians',
                subtitle: 'Alternative angle measurement',
                xpReward: 60,
                sections: [
                    { type: 'text', content: `
                        <h3>Conversions</h3>
                        <p>360° = 2π rad. <strong>Deg → Rad:</strong> × π/180 | <strong>Rad → Deg:</strong> × 180/π</p>
                        <h3>Key Equivalents</h3>
                        <p>30° = π/6 | 45° = π/4 | 60° = π/3 | 90° = π/2 | 180° = π</p>
                    `},
                    { type: 'generated_practice', generators: ['deg-to-rad'] },
                    { type: 'generated_practice', generators: ['rad-to-deg'] },
                    { type: 'practice', problems: [
                        { question: 'Convert <strong>90°</strong> to radians.', choices: ['π/6', 'π/4', 'π/3', 'π/2'], correctIndex: 3, explanation: '<strong>π/2</strong>' },
                        { question: 'Convert <strong>π</strong> radians to degrees.', choices: ['90°', '270°', '180°', '360°'], correctIndex: 2, explanation: 'π × 180/π = <strong>180°</strong>' },
                        { question: 'Convert <strong>45°</strong> to radians.', choices: ['π/6', 'π/4', 'π/3', 'π/2'], correctIndex: 1, explanation: '45 × π/180 = <strong>π/4</strong>' },
                        { question: 'How many radians in a full circle?', choices: ['π', '2π', '360', 'π/2'], correctIndex: 1, explanation: 'Full circle = 360° = <strong>2π</strong> radians' },
                        { question: 'Convert <strong>3π/2</strong> radians to degrees.', choices: ['180°', '270°', '360°', '120°'], correctIndex: 1, explanation: '3π/2 × 180/π = 3 × 90 = <strong>270°</strong>' },
                    ]}
                ]
            },
            // ---- 6. Graphing Trig Functions ----
            {
                id: 'graphing-trig',
                title: 'Graphing Trig Functions',
                subtitle: 'Sine, cosine, and tangent graphs',
                xpReward: 80,
                sections: [
                    { type: 'text', content: `
                        <h3>General Form: y = A·sin(Bx + C) + D</h3>
                        <ul><li><strong>A</strong> = amplitude</li><li><strong>Period</strong> = 2π / |B|</li><li><strong>C/B</strong> = phase shift</li><li><strong>D</strong> = vertical shift</li></ul>
                        <p>Standard sin/cos: amplitude 1, period 2π, range [−1, 1].</p>
                    `},
                    { type: 'generated_practice', generators: ['trig-amplitude'] },
                    { type: 'generated_practice', generators: ['trig-period'] },
                    { type: 'practice', problems: [
                        { question: 'Period of <strong>y = sin(x)</strong>?', choices: ['π', '2π', 'π/2', '4π'], correctIndex: 1, explanation: '<strong>2π</strong>' },
                        { question: 'Amplitude of <strong>y = 4cos(x)</strong>?', choices: ['1', '2', '4', '8'], correctIndex: 2, explanation: 'Amplitude = |A| = <strong>4</strong>' },
                        { question: 'Period of <strong>y = sin(3x)</strong>?', choices: ['2π', 'π', '2π/3', '6π'], correctIndex: 2, explanation: 'Period = 2π/|B| = 2π/3 = <strong>2π/3</strong>' },
                        { question: 'The range of <strong>y = sin(x)</strong> is:', choices: ['[0, 1]', '[−1, 1]', '[0, 2π]', 'All reals'], correctIndex: 1, explanation: 'sin oscillates between −1 and 1: range = <strong>[−1, 1]</strong>' },
                        { question: 'In y = A·sin(Bx), what does D represent in the full form y = A·sin(Bx+C)+D?', choices: ['Amplitude', 'Period', 'Phase shift', 'Vertical shift'], correctIndex: 3, explanation: 'D is the <strong>vertical shift</strong> (midline).' },
                    ]}
                ]
            },
            // ---- 7. Trig Identities ----
            {
                id: 'identities',
                title: 'Trigonometric Identities',
                subtitle: 'Essential formulas that are always true',
                xpReward: 100,
                sections: [
                    { type: 'text', content: `
                        <h3>Pythagorean Identity</h3>
                        <p style="text-align:center; font-size:1.2em;"><strong>sin²θ + cos²θ = 1</strong></p>
                        <h3>Other Key Identities</h3>
                        <ul><li>1 + tan²θ = sec²θ</li><li>sin(2θ) = 2·sinθ·cosθ</li><li>cos(2θ) = cos²θ − sin²θ</li></ul>
                    `},
                    { type: 'generated_practice', generators: ['pythagorean-identity'] },
                    { type: 'generated_practice', generators: ['reciprocal-identity'] },
                    { type: 'practice', problems: [
                        { question: '<strong>sin²θ + cos²θ</strong> always equals?', choices: ['0', '1', '2', 'Depends on θ'], correctIndex: 1, explanation: '<strong>1</strong>' },
                        { question: 'If cos(θ) = 0.6, what is sin²(θ)?', choices: ['0.36', '0.6', '0.64', '0.8'], correctIndex: 2, explanation: 'sin²θ = 1 − cos²θ = 1 − 0.36 = <strong>0.64</strong>' },
                        { question: '1 + tan²θ = ?', choices: ['sec²θ', 'csc²θ', 'cos²θ', '2'], correctIndex: 0, explanation: '<strong>sec²θ</strong>' },
                        { question: 'sin(2θ) = ?', choices: ['2sin²θ', '2cosθ', '2sinθcosθ', 'sin²θ − cos²θ'], correctIndex: 2, explanation: 'Double angle: sin(2θ) = <strong>2sinθcosθ</strong>' },
                        { question: 'cos(2θ) = ?', choices: ['2cos²θ', 'cos²θ − sin²θ', '2sinθcosθ', 'sin²θ + cos²θ'], correctIndex: 1, explanation: 'Double angle: cos(2θ) = <strong>cos²θ − sin²θ</strong>' },
                    ]}
                ]
            },
            // ---- 8. Inverse Trig ----
            {
                id: 'inverse-trig',
                title: 'Inverse Trig Functions',
                subtitle: 'arcsin, arccos, arctan',
                xpReward: 85,
                sections: [
                    { type: 'text', content: `
                        <h3>Going Backwards</h3>
                        <p>Inverse functions take a <em>ratio</em> and return an <em>angle</em>.</p>
                        <ul><li><strong>arcsin:</strong> range [−90°, 90°]</li><li><strong>arccos:</strong> range [0°, 180°]</li><li><strong>arctan:</strong> range (−90°, 90°)</li></ul>
                    `},
                    { type: 'example', title: 'Example', content: `<p>arcsin(0.5) = <strong>30°</strong> because sin(30°) = 0.5</p>` },
                    { type: 'generated_practice', generators: ['inverse-trig-eval'] },
                    { type: 'generated_practice', generators: ['inverse-trig-range'] },
                    { type: 'practice', problems: [
                        { question: '<strong>arctan(1)</strong> = ?', choices: ['0°', '30°', '45°', '90°'], correctIndex: 2, explanation: 'tan(45°) = 1 → <strong>45°</strong>' },
                        { question: '<strong>arcsin(1)</strong> = ?', choices: ['0°', '30°', '60°', '90°'], correctIndex: 3, explanation: 'sin(90°) = 1 → <strong>90°</strong>' },
                        { question: '<strong>arccos(1)</strong> = ?', choices: ['0°', '45°', '90°', '180°'], correctIndex: 0, explanation: 'cos(0°) = 1 → <strong>0°</strong>' },
                        { question: 'The range of arcsin is:', choices: ['[0°, 180°]', '[−90°, 90°]', '[0°, 360°]', '(−90°, 90°)'], correctIndex: 1, explanation: 'arcsin outputs angles in <strong>[−90°, 90°]</strong>.' },
                        { question: '<strong>arctan(0)</strong> = ?', choices: ['90°', '45°', '0°', '180°'], correctIndex: 2, explanation: 'tan(0°) = 0 → <strong>0°</strong>' },
                    ]}
                ]
            },
            // ---- 9. Law of Sines ----
            {
                id: 'law-of-sines',
                title: 'Law of Sines',
                subtitle: 'Solve non-right triangles',
                xpReward: 90,
                sections: [
                    { type: 'text', content: `
                        <h3>The Law of Sines</h3>
                        <p style="text-align:center; font-size:1.2em;"><strong>a/sin(A) = b/sin(B) = c/sin(C)</strong></p>
                        <p>Use when you know two angles + one side (AAS/ASA) or two sides + non-included angle (SSA).</p>
                    `},
                    { type: 'example', title: 'Example', content: `<p>A = 40°, B = 60°, a = 8: b = 8 × sin(60°)/sin(40°) ≈ <strong>10.78</strong></p>` },
                    { type: 'generated_practice', generators: ['law-of-sines-calc'] },
                    { type: 'practice', problems: [
                        { question: 'A = 30°, B = 90°, a = 5. Find b.', choices: ['5', '10', '5√2', '2.5'], correctIndex: 1, explanation: '5/sin(30°) = b/sin(90°) → b = <strong>10</strong>' },
                        { question: 'Law of Sines relates sides to the ___ of opposite angles.', choices: ['cosines', 'tangents', 'sines', 'squares'], correctIndex: 2, explanation: '<strong>sines</strong>' },
                        { question: 'When can you use the Law of Sines?', choices: ['Only SAS', 'Only SSS', 'AAS or ASA', 'Only right triangles'], correctIndex: 2, explanation: 'Law of Sines works for <strong>AAS or ASA</strong> (and SSA).' },
                        { question: 'A = 45°, a = 7, B = 60°. Which ratio equals a/sin(A)?', choices: ['b/sin(A)', 'b/sin(B)', 'a/sin(B)', 'sin(B)/b'], correctIndex: 1, explanation: 'a/sin(A) = <strong>b/sin(B)</strong> by the Law of Sines.' },
                    ]}
                ]
            },
            // ---- 10. Law of Cosines ----
            {
                id: 'law-of-cosines',
                title: 'Law of Cosines',
                subtitle: 'Another tool for non-right triangles',
                xpReward: 90,
                sections: [
                    { type: 'text', content: `
                        <h3>The Law of Cosines</h3>
                        <p style="text-align:center; font-size:1.2em;"><strong>c² = a² + b² − 2ab·cos(C)</strong></p>
                        <p>When C = 90°, this becomes the Pythagorean theorem! Use for SAS (two sides + included angle) or SSS (three sides).</p>
                    `},
                    { type: 'example', title: 'Finding a Side', content: `<p>a = 5, b = 7, C = 60°: c² = 25 + 49 − 35 = 39 → c ≈ <strong>6.24</strong></p>` },
                    { type: 'generated_practice', generators: ['law-of-cosines-calc'] },
                    { type: 'practice', problems: [
                        { question: 'a = 3, b = 4, C = 90°. Find c.', choices: ['5', '7', '25', '12'], correctIndex: 0, explanation: '9 + 16 − 0 = 25 → c = <strong>5</strong>' },
                        { question: 'When is Law of Cosines necessary?', choices: ['AAS', 'SAS', 'ASA', 'AAA'], correctIndex: 1, explanation: 'For <strong>SAS</strong>, only Law of Cosines works.' },
                        { question: 'The Law of Cosines reduces to the Pythagorean theorem when C = ?', choices: ['45°', '60°', '90°', '180°'], correctIndex: 2, explanation: 'cos(90°) = 0, so −2ab·cos(C) drops out → <strong>a² + b² = c²</strong>.' },
                        { question: 'a = 5, b = 5, C = 60°. Find c.', choices: ['5', '4', '5√3', '10'], correctIndex: 0, explanation: 'c² = 25 + 25 − 2(25)(0.5) = 25 → c = <strong>5</strong>' },
                    ]}
                ]
            }
        ]
    },
    // ========================================================
    // PRE-ALGEBRA PATH
    // ========================================================
    prealgebra: {
        name: 'Pre-Algebra Path',
        icon: '🔢',
        lessons: [
            { id: 'whole-numbers', title: 'Whole Numbers & Operations', subtitle: 'Addition, subtraction, multiplication, division', xpReward: 25, sections: [
                { type: 'text', content: `<h3>Building Blocks of Math</h3><p>Whole numbers (0, 1, 2, 3 …) are the foundation. Mastering the four operations — <strong>addition, subtraction, multiplication, and division</strong> — prepares you for everything ahead.</p><p><strong>Properties to remember:</strong> Commutative (a + b = b + a), Associative ((a + b) + c = a + (b + c)), and Distributive (a × (b + c) = ab + ac).</p>` },
                { type: 'example', title: 'Distributive Property', content: `<p><strong>4 × 23</strong> = 4 × (20 + 3) = 80 + 12 = <strong>92</strong></p>` },
                { type: 'generated_practice', generators: ['pa-add-subtract'] },
                { type: 'generated_practice', generators: ['pa-multiply'] },
                { type: 'practice', problems: [
                    { question: '347 + 258 = ?', choices: ['505', '595', '605', '615'], correctIndex: 2, explanation: '347 + 258 = <strong>605</strong>' },
                    { question: '12 × 15 = ?', choices: ['150', '170', '180', '192'], correctIndex: 2, explanation: '12 × 15 = <strong>180</strong>' },
                    { question: 'Which property says a + b = b + a?', choices: ['Associative', 'Commutative', 'Distributive', 'Identity'], correctIndex: 1, explanation: 'The <strong>Commutative</strong> property lets you swap order.' },
                    { question: '5 × (10 + 3) = 5 × 10 + 5 × 3. Which property?', choices: ['Commutative', 'Associative', 'Distributive', 'Identity'], correctIndex: 2, explanation: 'The <strong>Distributive</strong> property.' },
                ]}
            ]},
            { id: 'fractions', title: 'Fractions', subtitle: 'Simplifying, adding, and comparing fractions', xpReward: 30, sections: [
                { type: 'text', content: `<h3>Working with Fractions</h3><p>A fraction represents parts of a whole: <strong>numerator / denominator</strong>. To simplify, divide both parts by their GCF. To add fractions with the same denominator, add the numerators and keep the denominator.</p>` },
                { type: 'example', title: 'Simplifying a Fraction', content: `<p><strong>Simplify 8/12:</strong></p><p>GCF of 8 and 12 is 4. Divide both: 8÷4 / 12÷4 = <strong>2/3</strong></p>` },
                { type: 'generated_practice', generators: ['pa-fraction-simplify'] },
                { type: 'generated_practice', generators: ['pa-fraction-add'] },
                { type: 'practice', problems: [
                    { question: 'Simplify: <strong>6/9</strong>', choices: ['1/3', '2/3', '3/6', '6/9'], correctIndex: 1, explanation: 'GCF = 3 → 6÷3 / 9÷3 = <strong>2/3</strong>' },
                    { question: '1/4 + 2/4 = ?', choices: ['3/8', '3/4', '2/4', '1/2'], correctIndex: 1, explanation: '(1+2)/4 = <strong>3/4</strong>' },
                    { question: 'Which is larger: 3/5 or 2/5?', choices: ['3/5', '2/5', 'They\'re equal', 'Cannot tell'], correctIndex: 0, explanation: 'Same denominator, larger numerator wins: <strong>3/5</strong>' },
                    { question: 'Simplify: <strong>15/20</strong>', choices: ['3/5', '3/4', '5/4', '1/5'], correctIndex: 2, explanation: 'GCF = 5 → <strong>3/4</strong>' },
                ]}
            ]},
            { id: 'decimals', title: 'Decimals', subtitle: 'Operations with decimal numbers', xpReward: 30, sections: [
                { type: 'text', content: `<h3>Decimals</h3><p>Decimals are another way to write fractions. 0.5 = 1/2, 0.25 = 1/4. Line up the <strong>decimal points</strong> when adding or subtracting. When multiplying, count total decimal places in both numbers to place the decimal in the answer.</p>` },
                { type: 'generated_practice', generators: ['pa-decimal-add'] },
                { type: 'generated_practice', generators: ['pa-decimal-multiply'] },
                { type: 'practice', problems: [
                    { question: '3.4 + 2.8 = ?', choices: ['5.2', '6.2', '5.12', '6.12'], correctIndex: 1, explanation: '3.4 + 2.8 = <strong>6.2</strong>' },
                    { question: '0.6 × 5 = ?', choices: ['3.0', '0.3', '3.6', '0.56'], correctIndex: 0, explanation: '0.6 × 5 = <strong>3.0</strong>' },
                    { question: 'Convert 3/4 to a decimal.', choices: ['0.25', '0.50', '0.75', '0.34'], correctIndex: 2, explanation: '3 ÷ 4 = <strong>0.75</strong>' },
                    { question: '7.25 − 3.8 = ?', choices: ['3.45', '4.45', '3.17', '4.17'], correctIndex: 0, explanation: '7.25 − 3.80 = <strong>3.45</strong>' },
                ]}
            ]},
            { id: 'ratios', title: 'Ratios & Proportions', subtitle: 'Comparing quantities and solving proportions', xpReward: 30, sections: [
                { type: 'text', content: `<h3>Ratios and Proportions</h3><p>A <strong>ratio</strong> compares two quantities (e.g. 3:5). A <strong>proportion</strong> states two ratios are equal: a/b = c/d. To solve, <strong>cross-multiply</strong>: a × d = b × c.</p>` },
                { type: 'steps', title: 'Solving a Proportion', steps: ['Write the proportion: 3/4 = x/12', 'Cross-multiply: 3 × 12 = 4 × x', 'Simplify: 36 = 4x', 'Divide: x = 36 ÷ 4 = 9'] },
                { type: 'generated_practice', generators: ['pa-ratio-simplify'] },
                { type: 'generated_practice', generators: ['pa-proportion-solve'] },
                { type: 'practice', problems: [
                    { question: 'Simplify the ratio 12:8.', choices: ['3:2', '6:4', '4:3', '2:3'], correctIndex: 0, explanation: 'GCF = 4 → <strong>3:2</strong>' },
                    { question: 'Solve: 2/5 = x/15', choices: ['3', '6', '10', '7.5'], correctIndex: 1, explanation: '2 × 15 = 5 × x → x = <strong>6</strong>' },
                    { question: 'A recipe uses 2 cups flour for 3 cups sugar. For 9 cups sugar, flour = ?', choices: ['4', '5', '6', '4.5'], correctIndex: 2, explanation: '2/3 = x/9 → x = <strong>6</strong>' },
                    { question: 'The ratio 5:10 simplifies to:', choices: ['1:2', '1:5', '2:1', '5:1'], correctIndex: 0, explanation: 'Divide both by 5 → <strong>1:2</strong>' },
                ]}
            ]},
            { id: 'percentages', title: 'Percentages', subtitle: 'Converting and calculating with percents', xpReward: 30, sections: [
                { type: 'text', content: `<h3>Percentages</h3><p>Percent means "per hundred". 25% = 25/100 = 0.25. To find a percent of a number: <strong>multiply the decimal form by the number</strong>. E.g., 30% of 80 = 0.30 × 80 = 24.</p>` },
                { type: 'steps', title: 'Finding 15% of 60', steps: ['Convert: 15% = 15/100 = 0.15', 'Multiply: 0.15 × 60', '= 9', 'So 15% of 60 = 9'] },
                { type: 'generated_practice', generators: ['pa-percent-of'] },
                { type: 'generated_practice', generators: ['pa-percent-convert'] },
                { type: 'practice', problems: [
                    { question: 'What is 25% of 80?', choices: ['15', '20', '25', '40'], correctIndex: 1, explanation: '0.25 × 80 = <strong>20</strong>' },
                    { question: 'Convert 0.6 to a percent.', choices: ['0.6%', '6%', '60%', '600%'], correctIndex: 2, explanation: '0.6 × 100 = <strong>60%</strong>' },
                    { question: 'Convert 75% to a fraction (simplified).', choices: ['7/5', '3/4', '7/10', '75/10'], correctIndex: 1, explanation: '75/100 = <strong>3/4</strong>' },
                    { question: 'A shirt costs $40 and is 20% off. Sale price?', choices: ['$8', '$20', '$32', '$36'], correctIndex: 2, explanation: '20% of 40 = 8. $40 − $8 = <strong>$32</strong>' },
                ]}
            ]},
            { id: 'integers', title: 'Integers & Number Line', subtitle: 'Positive and negative whole numbers', xpReward: 30, sections: [
                { type: 'text', content: `<h3>Integers</h3><p>Integers include negatives, zero, and positives: … −3, −2, −1, 0, 1, 2, 3 … Key rules:<br>• Adding a negative = subtracting<br>• Negative × Negative = Positive<br>• Negative × Positive = Negative</p>` },
                { type: 'generated_practice', generators: ['pa-integer-add'] },
                { type: 'generated_practice', generators: ['pa-integer-multiply'] },
                { type: 'practice', problems: [
                    { question: '−5 + 8 = ?', choices: ['−3', '3', '13', '−13'], correctIndex: 1, explanation: '−5 + 8 = <strong>3</strong>' },
                    { question: '(−4) × (−3) = ?', choices: ['−12', '−7', '7', '12'], correctIndex: 3, explanation: 'Negative × Negative = Positive: <strong>12</strong>' },
                    { question: 'Which is smallest: −2, 0, −5, 3?', choices: ['−2', '0', '−5', '3'], correctIndex: 2, explanation: '<strong>−5</strong> is the smallest (furthest left on number line).' },
                    { question: '−7 + (−3) = ?', choices: ['−10', '−4', '4', '10'], correctIndex: 0, explanation: 'Both negative, add magnitudes: <strong>−10</strong>' },
                ]}
            ]},
            { id: 'order-of-ops', title: 'Order of Operations', subtitle: 'PEMDAS — Parentheses, Exponents, Multiply/Divide, Add/Subtract', xpReward: 30, sections: [
                { type: 'text', content: `<h3>PEMDAS</h3><p>When an expression has multiple operations, follow <strong>PEMDAS</strong>: <strong>P</strong>arentheses → <strong>E</strong>xponents → <strong>M</strong>ultiplication/<strong>D</strong>ivision (left to right) → <strong>A</strong>ddition/<strong>S</strong>ubtraction (left to right).</p>` },
                { type: 'steps', title: 'Evaluating 3 + 4 × 2²', steps: ['Exponents first: 2² = 4', 'Then multiplication: 4 × 4 = 16', 'Then addition: 3 + 16 = 19'] },
                { type: 'generated_practice', generators: ['pa-order-of-ops'] },
                { type: 'generated_practice', generators: ['pa-pemdas-identify'] },
                { type: 'practice', problems: [
                    { question: '2 + 3 × 4 = ?', choices: ['20', '14', '12', '24'], correctIndex: 1, explanation: 'Multiply first: 2 + 12 = <strong>14</strong>' },
                    { question: '(5 + 3) × 2 = ?', choices: ['11', '13', '16', '26'], correctIndex: 2, explanation: 'Parentheses first: 8 × 2 = <strong>16</strong>' },
                    { question: '10 − 2² = ?', choices: ['64', '6', '8', '16'], correctIndex: 1, explanation: 'Exponent: 2² = 4. Then 10 − 4 = <strong>6</strong>' },
                    { question: '6 ÷ 2 × 3 = ?', choices: ['1', '3', '9', '6'], correctIndex: 2, explanation: 'Left to right: 6÷2 = 3, then 3×3 = <strong>9</strong>' },
                ]}
            ]},
            { id: 'factors-multiples', title: 'Factors & Multiples', subtitle: 'GCF, LCM, prime factorization', xpReward: 30, sections: [
                { type: 'text', content: `<h3>Factors and Multiples</h3><p>A <strong>factor</strong> divides evenly into a number. A <strong>multiple</strong> is the result of multiplying a number. The <strong>GCF</strong> is the greatest common factor; the <strong>LCM</strong> is the least common multiple.</p>` },
                { type: 'generated_practice', generators: ['pa-gcf'] },
                { type: 'generated_practice', generators: ['pa-lcm'] },
                { type: 'practice', problems: [
                    { question: 'GCF of 12 and 18?', choices: ['2', '3', '6', '9'], correctIndex: 2, explanation: 'GCF(12, 18) = <strong>6</strong>' },
                    { question: 'LCM of 4 and 6?', choices: ['2', '10', '12', '24'], correctIndex: 2, explanation: 'LCM(4, 6) = <strong>12</strong>' },
                    { question: 'Is 7 prime or composite?', choices: ['Prime', 'Composite', 'Neither', 'Both'], correctIndex: 0, explanation: '7 has only factors 1 and 7 → <strong>Prime</strong>' },
                    { question: 'Prime factorization of 36:', choices: ['2² × 9', '2² × 3²', '4 × 9', '6 × 6'], correctIndex: 1, explanation: '36 = 4 × 9 = <strong>2² × 3²</strong>' },
                ]}
            ]},
            { id: 'intro-variables', title: 'Introduction to Variables', subtitle: 'Translating words to algebraic expressions', xpReward: 30, sections: [
                { type: 'text', content: `<h3>Variables: Letters for Numbers</h3><p>A <strong>variable</strong> is a letter representing an unknown number. We translate English phrases into math: "5 more than x" → <strong>x + 5</strong>. "Triple a number n" → <strong>3n</strong>. Evaluating means plugging in a value.</p>` },
                { type: 'generated_practice', generators: ['pa-translate-expression'] },
                { type: 'generated_practice', generators: ['pa-eval-simple'] },
                { type: 'practice', problems: [
                    { question: 'Write "7 less than x" as an expression.', choices: ['7 − x', 'x − 7', '7x', 'x + 7'], correctIndex: 1, explanation: '"Less than" means subtract from x: <strong>x − 7</strong>' },
                    { question: 'Evaluate 3n + 2 when n = 4.', choices: ['9', '14', '12', '34'], correctIndex: 1, explanation: '3(4) + 2 = 12 + 2 = <strong>14</strong>' },
                    { question: '"Twice a number plus 10" → ?', choices: ['2n + 10', 'n + 20', '2(n + 10)', '10n + 2'], correctIndex: 0, explanation: '<strong>2n + 10</strong>' },
                    { question: 'If x = 5, then x² + 1 = ?', choices: ['11', '26', '36', '51'], correctIndex: 1, explanation: '25 + 1 = <strong>26</strong>' },
                ]}
            ]},
            { id: 'word-problems', title: 'Basic Word Problems', subtitle: 'Turning real-life situations into math', xpReward: 35, sections: [
                { type: 'text', content: `<h3>Solving Word Problems</h3><p>Word problems test whether you can translate a story into math. Follow these steps: <strong>1)</strong> Read carefully. <strong>2)</strong> Identify what's asked. <strong>3)</strong> Write an equation. <strong>4)</strong> Solve. <strong>5)</strong> Check if the answer makes sense.</p>` },
                { type: 'generated_practice', generators: ['pa-word-problem'] },
                { type: 'generated_practice', generators: ['pa-percent-of'] },
                { type: 'practice', problems: [
                    { question: 'A book costs $12. You pay with $20. Change?', choices: ['$6', '$8', '$10', '$12'], correctIndex: 1, explanation: '$20 − $12 = <strong>$8</strong>' },
                    { question: 'You walk 3 miles/day for 5 days. Total?', choices: ['8 miles', '15 miles', '2 miles', '35 miles'], correctIndex: 1, explanation: '3 × 5 = <strong>15 miles</strong>' },
                    { question: 'Share 24 cookies among 6 friends equally:', choices: ['3 each', '4 each', '5 each', '6 each'], correctIndex: 1, explanation: '24 ÷ 6 = <strong>4 each</strong>' },
                    { question: 'A taxi charges $3 base + $2/mile. Cost for 7 miles?', choices: ['$14', '$17', '$21', '$10'], correctIndex: 1, explanation: '$3 + $2(7) = $3 + $14 = <strong>$17</strong>' },
                ]}
            ]}
        ]
    },
    // ========================================================
    // STATISTICS PATH
    // ========================================================
    statistics: {
        name: 'Statistics Path',
        icon: '📈',
        lessons: [
            { id: 'data-types', title: 'Data Collection & Types', subtitle: 'Qualitative vs quantitative, surveys, experiments', xpReward: 25, sections: [
                { type: 'text', content: `<h3>Types of Data</h3><p><strong>Qualitative</strong> (categorical) data describes qualities: color, name, type. <strong>Quantitative</strong> data is numerical: height, count, temperature. Quantitative splits into <strong>discrete</strong> (countable: siblings, shoes) and <strong>continuous</strong> (measurable: height, weight).</p>` },
                { type: 'generated_practice', generators: ['stat-data-types'] },
                { type: 'practice', problems: [
                    { question: 'Eye color is what type of data?', choices: ['Quantitative', 'Qualitative', 'Discrete', 'Continuous'], correctIndex: 1, explanation: 'Eye color describes a quality → <strong>Qualitative</strong>' },
                    { question: 'Number of pets is:', choices: ['Continuous', 'Qualitative', 'Discrete', 'Ordinal'], correctIndex: 2, explanation: 'Countable whole numbers → <strong>Discrete</strong>' },
                    { question: 'A census collects data from:', choices: ['A sample', 'The entire population', 'One person', 'A website'], correctIndex: 1, explanation: 'A census surveys the <strong>entire population</strong>.' },
                    { question: 'Weight in kg is what type?', choices: ['Qualitative', 'Discrete', 'Continuous', 'Nominal'], correctIndex: 2, explanation: 'Measurable on a scale → <strong>Continuous</strong>' },
                ]}
            ]},
            { id: 'central-tendency', title: 'Mean, Median, Mode', subtitle: 'Measures of center', xpReward: 30, sections: [
                { type: 'text', content: `<h3>Measures of Central Tendency</h3><p><strong>Mean</strong> = sum ÷ count (average). <strong>Median</strong> = middle value when sorted. <strong>Mode</strong> = most frequent value. Each tells a different story about your data.</p>` },
                { type: 'steps', title: 'Finding the Mean of 3, 7, 8, 12, 10', steps: ['Add: 3 + 7 + 8 + 12 + 10 = 40', 'Count: 5 values', 'Divide: 40 ÷ 5 = 8', 'Mean = 8'] },
                { type: 'generated_practice', generators: ['stat-mean'] },
                { type: 'generated_practice', generators: ['stat-median'] },
                { type: 'practice', problems: [
                    { question: 'Mean of 4, 6, 8, 10, 12?', choices: ['6', '8', '10', '40'], correctIndex: 1, explanation: '40 ÷ 5 = <strong>8</strong>' },
                    { question: 'Median of 3, 7, 9, 15, 21?', choices: ['7', '9', '11', '15'], correctIndex: 1, explanation: 'Middle of sorted list: <strong>9</strong>' },
                    { question: 'Mode of 2, 3, 3, 5, 7, 3?', choices: ['2', '3', '5', '7'], correctIndex: 1, explanation: '3 appears most often → <strong>3</strong>' },
                    { question: 'Which measure is most affected by outliers?', choices: ['Mean', 'Median', 'Mode', 'Range'], correctIndex: 0, explanation: 'The <strong>mean</strong> is pulled by extreme values.' },
                ]}
            ]},
            { id: 'range-variation', title: 'Range & Variation', subtitle: 'Measuring spread in data', xpReward: 30, sections: [
                { type: 'text', content: `<h3>Spread of Data</h3><p>The <strong>range</strong> = max − min. The <strong>IQR</strong> (interquartile range) = Q3 − Q1, showing the spread of the middle 50%. <strong>Standard deviation</strong> measures how far values typically are from the mean.</p>` },
                { type: 'generated_practice', generators: ['stat-range'] },
                { type: 'generated_practice', generators: ['stat-iqr-concept'] },
                { type: 'practice', problems: [
                    { question: 'Range of 5, 12, 3, 18, 7?', choices: ['13', '15', '9', '18'], correctIndex: 1, explanation: '18 − 3 = <strong>15</strong>' },
                    { question: 'IQR = Q3 − Q1. If Q1=8, Q3=20, IQR =', choices: ['12', '14', '28', '8'], correctIndex: 0, explanation: '20 − 8 = <strong>12</strong>' },
                    { question: 'A small standard deviation means data is:', choices: ['Spread out', 'Clustered near the mean', 'All negative', 'Random'], correctIndex: 1, explanation: 'Small SD → values close to mean → <strong>clustered</strong>' },
                    { question: 'Which is most resistant to outliers?', choices: ['Mean', 'Range', 'Median', 'Standard deviation'], correctIndex: 2, explanation: 'The <strong>median</strong> isn\'t affected much by extreme values.' },
                ]}
            ]},
            { id: 'graphs', title: 'Bar & Line Graphs', subtitle: 'Visualizing and reading data displays', xpReward: 30, sections: [
                { type: 'text', content: `<h3>Data Visualization</h3><p><strong>Bar graphs</strong> compare categories. <strong>Line graphs</strong> show trends over time. <strong>Pie charts</strong> show parts of a whole (percentages). Always label axes and include a title!</p>` },
                { type: 'generated_practice', generators: ['stat-graph-type'] },
                { type: 'generated_practice', generators: ['stat-read-bar'] },
                { type: 'practice', problems: [
                    { question: 'A line graph is best for showing:', choices: ['Categories', 'Change over time', 'Parts of a whole', 'Frequency'], correctIndex: 1, explanation: 'Line graphs track <strong>change over time</strong>.' },
                    { question: 'To compare sales of 4 products, use a:', choices: ['Line graph', 'Bar graph', 'Scatter plot', 'Histogram'], correctIndex: 1, explanation: '<strong>Bar graph</strong> compares categories.' },
                    { question: 'A pie chart always shows:', choices: ['Trends', 'Correlation', 'Parts of a whole', 'Median'], correctIndex: 2, explanation: 'Pie charts show <strong>parts of a whole</strong>.' },
                    { question: 'On a graph, the y-axis is:', choices: ['Horizontal', 'Vertical', 'Diagonal', 'The title'], correctIndex: 1, explanation: 'The y-axis is <strong>vertical</strong>.' },
                ]}
            ]},
            { id: 'histograms', title: 'Histograms & Frequency', subtitle: 'Grouping data into bins', xpReward: 30, sections: [
                { type: 'text', content: `<h3>Histograms and Frequency Tables</h3><p>A <strong>histogram</strong> groups numeric data into bins (ranges) and shows how many values fall in each. Unlike bar graphs, the bars touch because the data is continuous. A <strong>frequency table</strong> lists values and how often each occurs.</p>` },
                { type: 'generated_practice', generators: ['stat-frequency'] },
                { type: 'generated_practice', generators: ['stat-graph-type'] },
                { type: 'practice', problems: [
                    { question: 'In a histogram, bars represent:', choices: ['Individual values', 'Ranges (bins) of values', 'Categories', 'Percentages'], correctIndex: 1, explanation: 'Histograms group data into <strong>bins</strong>.' },
                    { question: 'Histogram bars touch because the data is:', choices: ['Categorical', 'Continuous', 'Alphabetical', 'Random'], correctIndex: 1, explanation: '<strong>Continuous</strong> data has no gaps between ranges.' },
                    { question: 'Data: 2, 3, 3, 4, 4, 4, 5. Frequency of 4?', choices: ['1', '2', '3', '4'], correctIndex: 2, explanation: '4 appears <strong>3</strong> times.' },
                    { question: 'A skewed-right histogram has a long tail on the:', choices: ['Left', 'Right', 'Top', 'Bottom'], correctIndex: 1, explanation: 'Skewed right → long tail on <strong>right</strong>.' },
                ]}
            ]},
            { id: 'probability-basics', title: 'Probability Basics', subtitle: 'Chances, events, and outcomes', xpReward: 30, sections: [
                { type: 'text', content: `<h3>Introduction to Probability</h3><p>Probability measures how likely something is: P(event) = favorable outcomes / total outcomes. It ranges from <strong>0</strong> (impossible) to <strong>1</strong> (certain). P = 0.5 means equally likely.</p>` },
                { type: 'generated_practice', generators: ['stat-probability'] },
                { type: 'generated_practice', generators: ['stat-probability-calc'] },
                { type: 'practice', problems: [
                    { question: 'P(heads on a fair coin) = ?', choices: ['0', '1/4', '1/2', '1'], correctIndex: 2, explanation: '1 favorable out of 2 → <strong>1/2</strong>' },
                    { question: 'A die has 6 sides. P(rolling a 3)?', choices: ['1/2', '1/3', '1/6', '3/6'], correctIndex: 2, explanation: '1 out of 6 → <strong>1/6</strong>' },
                    { question: 'P(impossible event) = ?', choices: ['0', '0.5', '1', '−1'], correctIndex: 0, explanation: 'Impossible → <strong>0</strong>' },
                    { question: '5 red, 3 blue marbles. P(blue)?', choices: ['3/5', '5/8', '3/8', '5/3'], correctIndex: 2, explanation: '3 blue out of 8 total → <strong>3/8</strong>' },
                ]}
            ]},
            { id: 'compound-events', title: 'Compound Events', subtitle: 'Independent events, "and" vs "or"', xpReward: 35, sections: [
                { type: 'text', content: `<h3>Compound Probability</h3><p><strong>Independent events</strong> don't affect each other. P(A and B) = P(A) × P(B). For <strong>"or" events</strong>: P(A or B) = P(A) + P(B) − P(A and B). The <strong>complement</strong>: P(not A) = 1 − P(A).</p>` },
                { type: 'generated_practice', generators: ['stat-compound'] },
                { type: 'practice', problems: [
                    { question: 'P(heads) × P(heads) for two coin flips?', choices: ['1/2', '1/4', '1', '3/4'], correctIndex: 1, explanation: '1/2 × 1/2 = <strong>1/4</strong>' },
                    { question: 'P(rain) = 0.4. P(no rain) = ?', choices: ['0.4', '0.6', '1.4', '0'], correctIndex: 1, explanation: '1 − 0.4 = <strong>0.6</strong>' },
                    { question: 'Two dice: P(both sixes)?', choices: ['1/6', '1/12', '1/36', '2/6'], correctIndex: 2, explanation: '1/6 × 1/6 = <strong>1/36</strong>' },
                    { question: 'Events where one affects the other are:', choices: ['Independent', 'Dependent', 'Complementary', 'Random'], correctIndex: 1, explanation: '<strong>Dependent</strong> events influence each other.' },
                ]}
            ]},
            { id: 'normal-distribution', title: 'Normal Distribution', subtitle: 'Bell curves, z-scores, the 68-95-99.7 rule', xpReward: 35, sections: [
                { type: 'text', content: `<h3>The Normal (Bell) Curve</h3><p>Many natural data sets form a <strong>bell curve</strong> (symmetric, mean = median = mode). The <strong>68-95-99.7 rule</strong>: about 68% within 1 SD, 95% within 2, 99.7% within 3. A <strong>z-score</strong> = (value − mean) / SD tells how many SDs a value is from the mean.</p>` },
                { type: 'generated_practice', generators: ['stat-normal'] },
                { type: 'generated_practice', generators: ['stat-z-score'] },
                { type: 'practice', problems: [
                    { question: 'In a normal distribution, ~68% of data is within:', choices: ['1 SD of mean', '2 SD of mean', '3 SD of mean', 'The mode'], correctIndex: 0, explanation: 'The empirical rule: <strong>68%</strong> within 1 SD.' },
                    { question: 'Mean = 100, SD = 10. Z-score of 120?', choices: ['0.5', '1', '2', '12'], correctIndex: 2, explanation: '(120−100)/10 = <strong>2</strong>' },
                    { question: 'A z-score of −1 means:', choices: ['1 SD above mean', '1 SD below mean', 'At the mean', 'An outlier'], correctIndex: 1, explanation: 'Negative z → <strong>below the mean</strong>.' },
                    { question: 'About 95% of data falls within ___ standard deviations.', choices: ['1', '2', '3', '4'], correctIndex: 1, explanation: 'The 68-95-99.7 rule: <strong>2</strong> SDs.' },
                ]}
            ]},
            { id: 'scatter-correlation', title: 'Scatter Plots & Correlation', subtitle: 'Relationships between two variables', xpReward: 35, sections: [
                { type: 'text', content: `<h3>Scatter Plots and Correlation</h3><p>A <strong>scatter plot</strong> shows two variables as points. Patterns reveal <strong>correlation</strong>: positive (both increase), negative (one up, one down), or none. The correlation coefficient <strong>r</strong> ranges from −1 to +1. Remember: <strong>correlation ≠ causation</strong>.</p>` },
                { type: 'generated_practice', generators: ['stat-correlation'] },
                { type: 'practice', problems: [
                    { question: 'r = 0.92 indicates:', choices: ['Weak positive', 'Strong positive', 'Strong negative', 'No correlation'], correctIndex: 1, explanation: 'Close to +1 → <strong>strong positive</strong>.' },
                    { question: 'r = −0.05 indicates:', choices: ['Strong positive', 'Strong negative', 'Nearly no correlation', 'Perfect negative'], correctIndex: 2, explanation: 'Close to 0 → <strong>nearly no correlation</strong>.' },
                    { question: 'Ice cream sales and drowning rates are correlated. This means:', choices: ['Ice cream causes drowning', 'Drowning causes ice cream', 'Both increase with hot weather (confounding)', 'There is no relationship'], correctIndex: 2, explanation: 'Correlation ≠ causation. A <strong>confounding variable</strong> (heat) causes both.' },
                    { question: 'A line of best fit on a scatter plot is called a:', choices: ['Bar', 'Regression line', 'Histogram', 'Frequency polygon'], correctIndex: 1, explanation: 'The <strong>regression line</strong> summarizes the trend.' },
                ]}
            ]},
            { id: 'statistical-thinking', title: 'Statistical Thinking', subtitle: 'Sampling, bias, and study design', xpReward: 35, sections: [
                { type: 'text', content: `<h3>Thinking Statistically</h3><p>Good conclusions require good data. A <strong>sample</strong> should be random and representative. <strong>Bias</strong> can creep in via leading questions, voluntary response, or convenience sampling. <strong>Experiments</strong> impose treatments; <strong>observational studies</strong> just observe.</p>` },
                { type: 'generated_practice', generators: ['stat-thinking'] },
                { type: 'practice', problems: [
                    { question: 'Best way to select a representative sample?', choices: ['Ask your friends', 'Simple random sampling', 'Online volunteers', 'Whoever is available'], correctIndex: 1, explanation: '<strong>Simple random sampling</strong> gives everyone equal chance.' },
                    { question: '"Do you agree this amazing product works?" is an example of:', choices: ['Random sampling', 'A leading question', 'An experiment', 'Good design'], correctIndex: 1, explanation: 'The wording pushes toward "yes" → <strong>leading question</strong>.' },
                    { question: 'Larger sample sizes generally make results:', choices: ['More biased', 'More reliable', 'Less accurate', 'Unchanged'], correctIndex: 1, explanation: 'More data → <strong>more reliable</strong> estimates.' },
                    { question: 'In an experiment, the group receiving no treatment is the:', choices: ['Experimental group', 'Control group', 'Sample', 'Population'], correctIndex: 1, explanation: 'The <strong>control group</strong> serves as the baseline.' },
                ]}
            ]}
        ]
    },
    // ========================================================
    // CALCULUS PATH
    // ========================================================
    calculus: {
        name: 'Calculus Path',
        icon: '∫',
        lessons: [
            { id: 'limits', title: 'Limits & Continuity', subtitle: 'What functions approach', xpReward: 35, sections: [
                { type: 'text', content: `<h3>The Concept of a Limit</h3><p>A <strong>limit</strong> describes what value f(x) approaches as x gets closer to some number. We write lim(x→a) f(x) = L. A function is <strong>continuous</strong> at x = a if the limit exists and equals f(a).</p>` },
                { type: 'steps', title: 'Evaluating lim(x→3) of 2x + 1', steps: ['For a simple polynomial, substitute directly', 'lim(x→3) 2x + 1 = 2(3) + 1', '= 6 + 1 = 7', 'The limit is 7'] },
                { type: 'generated_practice', generators: ['calc-limit-eval'] },
                { type: 'generated_practice', generators: ['calc-limit-concept'] },
                { type: 'practice', problems: [
                    { question: 'lim(x→2) of 5x − 3 = ?', choices: ['3', '7', '10', '13'], correctIndex: 1, explanation: '5(2) − 3 = <strong>7</strong>' },
                    { question: 'If left and right limits differ, the limit:', choices: ['Equals zero', 'DNE (does not exist)', 'Is the average', 'Is infinite'], correctIndex: 1, explanation: 'Limits must agree from both sides, otherwise <strong>DNE</strong>.' },
                    { question: 'lim(x→0) x²/x = ?', choices: ['0', '1', 'undefined', 'DNE'], correctIndex: 0, explanation: 'Simplify: x²/x = x. lim(x→0) x = <strong>0</strong>' },
                    { question: 'A function is continuous at a point if:', choices: ['It has a vertical asymptote', 'The limit exists and equals the function value', 'The derivative exists', 'It is increasing'], correctIndex: 1, explanation: 'Continuous means <strong>limit = f(a)</strong>.' },
                ]}
            ]},
            { id: 'derivative-def', title: 'Definition of the Derivative', subtitle: 'Rates of change and tangent lines', xpReward: 35, sections: [
                { type: 'text', content: `<h3>The Derivative</h3><p>The <strong>derivative</strong> f′(x) = lim(h→0) [f(x+h) − f(x)] / h. It gives the <strong>instantaneous rate of change</strong> — the slope of the tangent line at each point. If f(x) = c (constant), then f′(x) = 0.</p>` },
                { type: 'generated_practice', generators: ['calc-derivative-def'] },
                { type: 'practice', problems: [
                    { question: 'The derivative represents:', choices: ['The area under a curve', 'The slope of the tangent line', 'The maximum value', 'The y-intercept'], correctIndex: 1, explanation: 'f′(x) = <strong>slope of the tangent line</strong>.' },
                    { question: 'f(x) = 7. f′(x) = ?', choices: ['7', '0', '1', 'x'], correctIndex: 1, explanation: 'Derivative of a constant is <strong>0</strong>.' },
                    { question: 'f(x) = x. f′(x) = ?', choices: ['0', '1', 'x', '2x'], correctIndex: 1, explanation: 'Slope of y = x is <strong>1</strong>.' },
                    { question: 'The derivative of position is:', choices: ['Distance', 'Velocity', 'Acceleration', 'Force'], correctIndex: 1, explanation: 'Rate of change of position = <strong>velocity</strong>.' },
                ]}
            ]},
            { id: 'diff-rules', title: 'Differentiation Rules', subtitle: 'Power rule, sum rule, common derivatives', xpReward: 35, sections: [
                { type: 'text', content: `<h3>Rules for Derivatives</h3><p><strong>Power rule:</strong> d/dx[xⁿ] = nxⁿ⁻¹. <strong>Constant multiple:</strong> d/dx[cf] = c·f′. <strong>Sum rule:</strong> d/dx[f+g] = f′+g′. Common: d/dx[sin x] = cos x, d/dx[eˣ] = eˣ, d/dx[ln x] = 1/x.</p>` },
                { type: 'steps', title: 'Differentiating 3x⁴', steps: ['Apply power rule: bring exponent down', 'd/dx[3x⁴] = 3 · 4 · x⁴⁻¹', '= 12x³'] },
                { type: 'generated_practice', generators: ['calc-power-rule'] },
                { type: 'generated_practice', generators: ['calc-diff-rules'] },
                { type: 'practice', problems: [
                    { question: 'd/dx [x⁵] = ?', choices: ['5x⁴', 'x⁴', '5x⁵', '4x⁵'], correctIndex: 0, explanation: 'Power rule: <strong>5x⁴</strong>' },
                    { question: 'd/dx [3x² + 2x] = ?', choices: ['6x + 2', '3x + 2', '6x² + 2', '6x'], correctIndex: 0, explanation: '6x + 2 by sum and power rules: <strong>6x + 2</strong>' },
                    { question: 'd/dx [sin(x)] = ?', choices: ['cos(x)', '−cos(x)', 'sin(x)', '−sin(x)'], correctIndex: 0, explanation: '<strong>cos(x)</strong>' },
                    { question: 'd/dx [eˣ] = ?', choices: ['xeˣ⁻¹', 'eˣ', 'ln(x)', '1/x'], correctIndex: 1, explanation: 'eˣ is its own derivative: <strong>eˣ</strong>' },
                ]}
            ]},
            { id: 'chain-rule', title: 'Chain Rule', subtitle: 'Derivatives of composite functions', xpReward: 40, sections: [
                { type: 'text', content: `<h3>The Chain Rule</h3><p>For composite functions f(g(x)): <strong>d/dx[f(g(x))] = f′(g(x)) · g′(x)</strong>. Differentiate the "outer" function, keep the "inner" unchanged, then multiply by the derivative of the inner.</p>` },
                { type: 'steps', title: 'Differentiating sin(3x)', steps: ['Outer: sin(□) → derivative is cos(□)', 'Keep inner: cos(3x)', 'Inner: 3x → derivative is 3', 'Multiply: 3 · cos(3x) = 3cos(3x)'] },
                { type: 'generated_practice', generators: ['calc-chain-rule'] },
                { type: 'practice', problems: [
                    { question: 'd/dx [cos(2x)] = ?', choices: ['−2sin(2x)', '−sin(2x)', '2cos(2x)', 'sin(2x)'], correctIndex: 0, explanation: 'Chain rule: −sin(2x) · 2 = <strong>−2sin(2x)</strong>' },
                    { question: 'd/dx [(x²+1)³] = ?', choices: ['3(x²+1)²', '6x(x²+1)²', '(x²+1)²', '2x(x²+1)³'], correctIndex: 1, explanation: '3(x²+1)² · 2x = <strong>6x(x²+1)²</strong>' },
                    { question: 'd/dx [e³ˣ] = ?', choices: ['e³ˣ', '3e³ˣ', '3xe³ˣ', 'e³'], correctIndex: 1, explanation: 'eᵘ · u′ = e³ˣ · 3 = <strong>3e³ˣ</strong>' },
                    { question: 'd/dx [ln(2x)] = ?', choices: ['2/x', '1/(2x)', '1/x', 'ln(2)'], correctIndex: 2, explanation: '1/(2x) · 2 = <strong>1/x</strong>' },
                ]}
            ]},
            { id: 'deriv-applications', title: 'Applications of Derivatives', subtitle: 'Max/min, increasing/decreasing, concavity', xpReward: 40, sections: [
                { type: 'text', content: `<h3>What Derivatives Tell Us</h3><p><strong>f′(x) > 0</strong>: function is increasing. <strong>f′(x) < 0</strong>: decreasing. <strong>f′(x) = 0</strong>: critical point (possible max/min). The second derivative f″ tells us about <strong>concavity</strong>: f″ > 0 means concave up (cup shape), f″ < 0 means concave down.</p>` },
                { type: 'generated_practice', generators: ['calc-increasing-decreasing'] },
                { type: 'generated_practice', generators: ['calc-deriv-app'] },
                { type: 'practice', problems: [
                    { question: 'f\'(x) > 0 means f is:', choices: ['Decreasing', 'Increasing', 'Constant', 'Undefined'], correctIndex: 1, explanation: 'Positive derivative → <strong>increasing</strong>' },
                    { question: 'At a critical point, f\'(x) = ?', choices: ['1', '0', 'undefined', 'Maximum'], correctIndex: 1, explanation: 'Critical points where f′(x) = <strong>0</strong>.' },
                    { question: 'f″(x) > 0 → the graph is:', choices: ['Concave up', 'Concave down', 'Linear', 'Decreasing'], correctIndex: 0, explanation: '<strong>Concave up</strong> (holds water like a cup).' },
                    { question: 'A local minimum occurs when f′ changes from:', choices: ['+ to −', '− to +', '+ to +', '− to −'], correctIndex: 1, explanation: 'f′ goes from negative to positive → <strong>local minimum</strong>.' },
                ]}
            ]},
            { id: 'intro-integration', title: 'Introduction to Integration', subtitle: 'Antiderivatives and indefinite integrals', xpReward: 35, sections: [
                { type: 'text', content: `<h3>Integration: The Reverse of Differentiation</h3><p>An <strong>antiderivative</strong> of f(x) is a function F(x) where F′(x) = f(x). The <strong>indefinite integral</strong> ∫f(x)dx = F(x) + C. Power rule reversed: ∫xⁿdx = xⁿ⁺¹/(n+1) + C.</p>` },
                { type: 'steps', title: 'Finding ∫ x³ dx', steps: ['Apply reverse power rule: add 1 to exponent', 'x³⁺¹ = x⁴', 'Divide by new exponent: x⁴/4', 'Add constant: x⁴/4 + C'] },
                { type: 'generated_practice', generators: ['calc-antiderivative'] },
                { type: 'generated_practice', generators: ['calc-integral-rules'] },
                { type: 'practice', problems: [
                    { question: '∫ x² dx = ?', choices: ['x³/3 + C', '2x + C', 'x³ + C', 'x²/2 + C'], correctIndex: 0, explanation: 'Power rule: <strong>x³/3 + C</strong>' },
                    { question: '∫ 5 dx = ?', choices: ['5x + C', '5', '0', 'x + C'], correctIndex: 0, explanation: 'Integral of constant: <strong>5x + C</strong>' },
                    { question: '∫ cos(x) dx = ?', choices: ['sin(x) + C', '−sin(x) + C', 'cos(x) + C', '−cos(x) + C'], correctIndex: 0, explanation: '<strong>sin(x) + C</strong>' },
                    { question: 'What does the C represent?', choices: ['The coefficient', 'A constant of integration', 'The chain rule', 'Cosine'], correctIndex: 1, explanation: 'C is the <strong>constant of integration</strong>.' },
                ]}
            ]},
            { id: 'ftc', title: 'Fundamental Theorem of Calculus', subtitle: 'Connecting derivatives and integrals', xpReward: 40, sections: [
                { type: 'text', content: `<h3>The Fundamental Theorem</h3><p>The FTC states: ∫ from a to b of f(x)dx = F(b) − F(a), where F is any antiderivative of f. This connects the area under a curve to antiderivatives. A <strong>definite integral</strong> gives a number (the net area).</p>` },
                { type: 'steps', title: 'Evaluating ∫₁³ 2x dx', steps: ['Find antiderivative: F(x) = x²', 'Evaluate: F(3) − F(1)', '= 9 − 1 = 8', '∫₁³ 2x dx = 8'] },
                { type: 'generated_practice', generators: ['calc-ftc'] },
                { type: 'generated_practice', generators: ['calc-ftc-concept'] },
                { type: 'practice', problems: [
                    { question: '∫₀² x dx = ?', choices: ['1', '2', '4', '0'], correctIndex: 1, explanation: 'F(x)=x²/2. F(2)−F(0) = 2 − 0 = <strong>2</strong>' },
                    { question: '∫₁⁴ 1 dx = ?', choices: ['1', '3', '4', '5'], correctIndex: 1, explanation: 'F(x)=x. F(4)−F(1) = <strong>3</strong>' },
                    { question: '∫ₐᵃ f(x)dx always equals:', choices: ['f(a)', '1', '0', 'Undefined'], correctIndex: 2, explanation: 'Same limits → <strong>0</strong>' },
                    { question: 'The FTC connects:', choices: ['Algebra and geometry', 'Derivatives and integrals', 'Probability and statistics', 'Sine and cosine'], correctIndex: 1, explanation: '<strong>Derivatives and integrals</strong> are inverse operations.' },
                ]}
            ]},
            { id: 'u-substitution', title: 'U-Substitution', subtitle: 'Reversing the chain rule for integrals', xpReward: 40, sections: [
                { type: 'text', content: `<h3>U-Substitution</h3><p>U-sub is the "reverse chain rule." Choose u = (inner function), find du, and rewrite the integral entirely in terms of u. After integrating, substitute back to x.</p>` },
                { type: 'steps', title: '∫ 2x·cos(x²) dx', steps: ['Let u = x², then du = 2x dx', 'The integral becomes: ∫ cos(u) du', 'Integrate: sin(u) + C', 'Substitute back: sin(x²) + C'] },
                { type: 'generated_practice', generators: ['calc-u-sub'] },
                { type: 'practice', problems: [
                    { question: '∫ 2x·eˣ² dx. Best u = ?', choices: ['u = 2x', 'u = eˣ²', 'u = x²', 'u = x'], correctIndex: 2, explanation: '<strong>u = x²</strong>, du = 2x dx' },
                    { question: 'After substitution, you must also change:', choices: ['The answer', 'dx to du', 'The constant', 'Nothing'], correctIndex: 1, explanation: 'Must convert <strong>dx to du</strong>.' },
                    { question: '∫ cos(3x) dx = ?', choices: ['sin(3x)/3 + C', 'sin(3x) + C', '3sin(3x) + C', '−sin(3x)/3 + C'], correctIndex: 0, explanation: 'u = 3x: ∫cos(u)·(1/3)du = <strong>sin(3x)/3 + C</strong>' },
                    { question: 'U-sub is essentially the reverse of:', choices: ['Product rule', 'Chain rule', 'Quotient rule', 'Power rule'], correctIndex: 1, explanation: 'U-sub reverses the <strong>chain rule</strong>.' },
                ]}
            ]},
            { id: 'area-between', title: 'Area Between Curves', subtitle: 'Using integrals to find enclosed areas', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Area Between Two Curves</h3><p>To find the area between f(x) and g(x) from a to b: <strong>∫ₐᵇ [f(x) − g(x)] dx</strong> where f(x) ≥ g(x) on [a, b]. If they switch, split into separate integrals.</p>` },
                { type: 'generated_practice', generators: ['calc-area-between'] },
                { type: 'practice', problems: [
                    { question: 'Area between y=x² and y=x from 0 to 1:', choices: ['1/6', '1/3', '1/2', '1'], correctIndex: 0, explanation: '∫₀¹(x−x²)dx = [x²/2−x³/3]₀¹ = 1/2−1/3 = <strong>1/6</strong>' },
                    { question: 'To find area between curves, integrate:', choices: ['Both functions separately', 'Top minus bottom', 'Their product', 'Their sum'], correctIndex: 1, explanation: '<strong>Top minus bottom</strong>: ∫[f(x)−g(x)]dx' },
                    { question: 'If g(x) > f(x), and you compute ∫[f−g]dx, you get:', choices: ['A positive area', 'A negative number', 'Zero', 'The same area'], correctIndex: 1, explanation: 'Wrong order gives <strong>negative</strong>; use |value| or swap.' },
                    { question: 'Area is always:', choices: ['Positive or zero', 'Negative', 'Equal to the integral', 'Undefined'], correctIndex: 0, explanation: 'Area is <strong>positive or zero</strong>.' },
                ]}
            ]},
            { id: 'integral-apps', title: 'Applications of Integrals', subtitle: 'Displacement, average value, and volumes', xpReward: 45, sections: [
                { type: 'text', content: `<h3>What Integrals Can Do</h3><p>Integrals compute: <strong>displacement</strong> (∫v(t)dt), <strong>total distance</strong> (∫|v(t)|dt), <strong>average value</strong> (1/(b−a)·∫f(x)dx), and <strong>volumes of revolution</strong> (disk/washer method: ∫π[r(x)]²dx).</p>` },
                { type: 'generated_practice', generators: ['calc-integral-app'] },
                { type: 'practice', problems: [
                    { question: '∫ velocity dt gives:', choices: ['Acceleration', 'Displacement', 'Speed', 'Force'], correctIndex: 1, explanation: 'Integral of velocity = <strong>displacement</strong>.' },
                    { question: 'Average value of f on [a,b] = ?', choices: ['f(a)+f(b)', '(f(a)+f(b))/2', '1/(b−a) · ∫f(x)dx', '∫f(x)dx'], correctIndex: 2, explanation: '<strong>1/(b−a) · ∫ₐᵇ f(x)dx</strong>' },
                    { question: 'Disk method computes:', choices: ['Area', 'Volume', 'Surface area', 'Arc length'], correctIndex: 1, explanation: 'Disk/washer method finds <strong>volume</strong> of solids of revolution.' },
                    { question: 'Total distance uses |v(t)| instead of v(t) because:', choices: ['Speed is always positive', 'v(t) can be negative when moving backward', 'It simplifies the math', 'It\'s required by the FTC'], correctIndex: 1, explanation: 'Absolute value ensures we count all distance, not net displacement. <strong>v(t) can be negative.</strong>' },
                ]}
            ]}
        ]
    }
};
