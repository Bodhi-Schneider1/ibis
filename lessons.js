export const lessonPaths = {
    // ========================================================
    // ALGEBRA PATH (27 Lessons)
    // ========================================================
    algebra: {
        name: 'Algebra Path',
        icon: '📐',
        lessons: [

            // ---- 1. Intro to Algebra ----
            { id: 'intro-algebra', title: 'Introduction to Algebra', subtitle: 'Understanding variables and expressions', xpReward: 30, sections: [
                { type: 'text', content: `<h3>What is Algebra?</h3><p>Algebra uses <strong>variables</strong> — letters like <em>x</em>, <em>y</em>, and <em>n</em> — to represent unknown or changing quantities. Instead of "some number plus 3 equals 7," we write <strong>x + 3 = 7</strong>.</p><p>An <strong>expression</strong> combines numbers, variables, and operations (like <code>3x + 5</code>) — there's no equals sign. An <strong>equation</strong> sets two expressions equal (like <code>3x + 5 = 20</code>).</p><p>In the expression <code>5x + 3</code>: <strong>5</strong> is the <em>coefficient</em>, <strong>x</strong> is the variable, <strong>3</strong> is the <em>constant</em>, and <strong>5x</strong> and <strong>3</strong> are each called <em>terms</em>.</p>` },
                { type: 'example', title: 'Evaluating an Expression', content: `<p><strong>Evaluate 2x + 4 when x = 3:</strong></p><p>Replace x with 3: 2(3) + 4 = 6 + 4 = <strong>10</strong></p>` },
                { type: 'steps', title: 'How to Evaluate Any Expression', steps: ['Identify each variable and its given value.', 'Replace every instance of the variable with that number (use parentheses!).', 'Follow PEMDAS to simplify.', 'Write your final answer.'] },
                { type: 'generated_practice', generators: ['eval-expression'] },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p>When you see <code>3x</code>, it means 3 × x — the multiplication sign is hidden!</p><p>A <strong>coefficient</strong> is the number before a variable (in 5x, it's 5). A <strong>constant</strong> is a number with no variable (like the 4 in 2x + 4).</p>` },
                { type: 'generated_practice', generators: ['identify-parts'] },
                { type: 'practice', problems: [
                    { question: 'Evaluate <strong>4x + 1</strong> when x = 5.', choices: ['9', '21', '25', '16'], correctIndex: 1, explanation: '4(5) + 1 = 20 + 1 = <strong>21</strong>' },
                    { question: 'Evaluate <strong>7x − 3</strong> when x = 4.', choices: ['21', '25', '28', '31'], correctIndex: 1, explanation: '7(4) − 3 = 28 − 3 = <strong>25</strong>' },
                    { question: 'In <strong>9x + 6</strong>, what is the coefficient of x?', choices: ['6', '9', '15', 'x'], correctIndex: 1, explanation: 'The coefficient is the number multiplying x: <strong>9</strong>.' },
                    { question: 'In <strong>5x + 11</strong>, what is the constant term?', choices: ['5', 'x', '11', '16'], correctIndex: 2, explanation: 'The constant has no variable attached: <strong>11</strong>.' },
                    { question: 'Which of these is an <strong>equation</strong> (not an expression)?', choices: ['3x + 2', '5x − 7', '2x + 4 = 10', '4x²'], correctIndex: 2, explanation: 'An equation has an equals sign: <strong>2x + 4 = 10</strong>.' },
                ]}
            ]},

            // ---- 2. Order of Operations ----
            { id: 'order-of-operations', title: 'Order of Operations', subtitle: 'Master PEMDAS', xpReward: 35, sections: [
                { type: 'text', content: `<h3>PEMDAS</h3><p>The order of operations tells us which calculations to do first:</p><p><strong>P</strong>arentheses → <strong>E</strong>xponents → <strong>M</strong>ultiplication & <strong>D</strong>ivision (left to right) → <strong>A</strong>ddition & <strong>S</strong>ubtraction (left to right)</p><p>Multiplication and division are done at the same level, left to right. Same for addition and subtraction.</p>` },
                { type: 'example', title: 'Applying PEMDAS', content: `<p><strong>3 + 4 × 2</strong></p><p>Multiply first: 4 × 2 = 8. Then add: 3 + 8 = <strong>11</strong></p><p><strong>Not</strong> (3 + 4) × 2 = 14 — that's wrong without parentheses!</p>` },
                { type: 'generated_practice', generators: ['pemdas-eval'] },
                { type: 'generated_practice', generators: ['pemdas-parens'] },
                { type: 'steps', title: 'Guided: Evaluate 2 × (3 + 5)² ÷ 4', steps: ['Parentheses first: 3 + 5 = 8.', 'Exponents: 8² = 64.', 'Multiplication: 2 × 64 = 128.', 'Division: 128 ÷ 4 = 32.', 'Final answer: 32.'] },
                { type: 'practice', problems: [
                    { question: 'Evaluate: <strong>6 + 3 × 2</strong>', choices: ['18', '12', '9', '15'], correctIndex: 1, explanation: 'Multiply first: 3 × 2 = 6. Then 6 + 6 = <strong>12</strong>' },
                    { question: 'Evaluate: <strong>(4 + 2) × 3</strong>', choices: ['14', '18', '10', '12'], correctIndex: 1, explanation: 'Parentheses: 4 + 2 = 6. Then 6 × 3 = <strong>18</strong>' },
                    { question: 'Evaluate: <strong>2³ + 1</strong>', choices: ['7', '9', '6', '5'], correctIndex: 1, explanation: '2³ = 8. Then 8 + 1 = <strong>9</strong>' },
                    { question: 'What comes first in PEMDAS?', choices: ['Addition', 'Multiplication', 'Parentheses', 'Exponents'], correctIndex: 2, explanation: '<strong>Parentheses</strong> come first.' },
                ]}
            ]},

            // ---- 3. Linear Equations ----
            { id: 'linear-equations', title: 'Linear Equations', subtitle: 'Solve equations of the form ax + b = c', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Solving Linear Equations</h3><p>A <strong>linear equation</strong> has a variable with no exponent higher than 1 — it always graphs as a straight line.</p><p>The golden rule: <strong>whatever you do to one side, you must do to the other</strong>.</p><p>To solve <em>ax + b = c</em>: (1) subtract b from both sides, then (2) divide by a.</p>` },
                { type: 'example', title: 'Solving 3x + 7 = 22', content: `<p><strong>Step 1:</strong> Subtract 7 → 3x = 15</p><p><strong>Step 2:</strong> Divide by 3 → x = <strong>5</strong></p><p><strong>Check:</strong> 3(5) + 7 = 22 ✓</p>` },
                { type: 'steps', title: 'Solving Any Linear Equation', steps: ['Simplify each side (distribute, combine like terms).', 'Move constants to one side using addition/subtraction.', 'Isolate the variable by dividing or multiplying.', 'Check your answer by substituting back.'] },
                { type: 'generated_practice', generators: ['solve-linear'] },
                { type: 'text', content: `<h3>Equations with Subtraction</h3><p>For <em>ax − b = c</em>: add b first, then divide by a.</p>` },
                { type: 'generated_practice', generators: ['solve-linear-subtract'] },
                { type: 'tips', content: `<h4>💡 Pro Tips</h4><p>Undo addition/subtraction first, then multiplication/division. Always <strong>check</strong> by plugging your answer back in.</p><p><strong>No solution:</strong> If you get 0 = 5, the equation is impossible. <strong>Infinite solutions:</strong> If you get 0 = 0, every number works.</p>` },
                { type: 'practice', problems: [
                    { question: 'Solve: <strong>5x + 3 = 28</strong>', choices: ['x = 4', 'x = 5', 'x = 6', 'x = 7'], correctIndex: 1, explanation: '5x = 25 → x = <strong>5</strong>' },
                    { question: 'Solve: <strong>3x − 7 = 11</strong>', choices: ['x = 4', 'x = 5', 'x = 6', 'x = 7'], correctIndex: 2, explanation: '3x = 18 → x = <strong>6</strong>' },
                    { question: 'Solve: <strong>2x + 9 = 3</strong>', choices: ['x = −3', 'x = 3', 'x = 6', 'x = −6'], correctIndex: 0, explanation: '2x = −6 → x = <strong>−3</strong>' },
                    { question: 'Solve: <strong>4x − 1 = 4x + 5</strong>', choices: ['x = 0', 'x = 1', 'x = 6', 'No solution'], correctIndex: 3, explanation: 'Subtract 4x: −1 = 5 — always false → <strong>no solution</strong>.' },
                ]}
            ]},

            // ---- 4. Distributive Property ----
            { id: 'distributive-property', title: 'Distributive Property', subtitle: 'Expanding expressions with parentheses', xpReward: 40, sections: [
                { type: 'text', content: `<h3>The Distributive Property</h3><p><strong>a(b + c) = ab + ac</strong></p><p>Multiply each term inside the parentheses by the factor outside. This works for both addition and subtraction inside.</p>` },
                { type: 'example', title: 'Expanding', content: `<p><strong>3(2x + 5)</strong> = 3 × 2x + 3 × 5 = <strong>6x + 15</strong></p><p><strong>−2(4x − 3)</strong> = −2 × 4x + (−2)(−3) = <strong>−8x + 6</strong></p>` },
                { type: 'generated_practice', generators: ['distributive-expand'] },
                { type: 'generated_practice', generators: ['distributive-neg'] },
                { type: 'steps', title: 'Guided: Expand 5(3x − 2) + 4', steps: ['Distribute 5: 5 × 3x = 15x and 5 × (−2) = −10.', 'Write: 15x − 10 + 4.', 'Combine constants: −10 + 4 = −6.', 'Final answer: 15x − 6.'] },
                { type: 'practice', problems: [
                    { question: 'Expand: <strong>4(x + 3)</strong>', choices: ['4x + 3', '4x + 12', 'x + 12', '4x + 7'], correctIndex: 1, explanation: '4 × x + 4 × 3 = <strong>4x + 12</strong>' },
                    { question: 'Expand: <strong>−3(2x − 1)</strong>', choices: ['−6x − 3', '−6x + 3', '6x − 3', '−6x − 1'], correctIndex: 1, explanation: '−3(2x) + (−3)(−1) = <strong>−6x + 3</strong>' },
                    { question: 'Expand: <strong>2(x + y + 3)</strong>', choices: ['2x + y + 3', '2x + 2y + 6', '2x + 2y + 3', 'x + y + 6'], correctIndex: 1, explanation: '2x + 2y + 6 by distributing 2 to all terms.' },
                    { question: 'Which property does a(b+c) = ab + ac use?', choices: ['Commutative', 'Associative', 'Distributive', 'Identity'], correctIndex: 2, explanation: 'The <strong>Distributive</strong> property.' },
                ]}
            ]},

            // ---- 5. Combining Like Terms ----
            { id: 'combining-like-terms', title: 'Combining Like Terms', subtitle: 'Simplify by grouping similar terms', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Like Terms</h3><p><strong>Like terms</strong> have the same variable(s) raised to the same power. You can add/subtract their coefficients.</p><p>Examples: 3x and 7x are like terms. 5x² and 2x² are like terms. But 3x and 3x² are <em>not</em> like terms.</p>` },
                { type: 'example', title: 'Simplifying', content: `<p><strong>5x + 3 + 2x + 7</strong></p><p>Group: (5x + 2x) + (3 + 7) = <strong>7x + 10</strong></p>` },
                { type: 'generated_practice', generators: ['combine-like-terms-full'] },
                { type: 'generated_practice', generators: ['identify-like-terms'] },
                { type: 'practice', problems: [
                    { question: 'Simplify: <strong>4x + 9 + 3x</strong>', choices: ['7x + 9', '16x', '4x + 12', '7x + 12'], correctIndex: 0, explanation: '4x + 3x = 7x. Constants: 9. Answer: <strong>7x + 9</strong>' },
                    { question: 'Simplify: <strong>2x² + 5x + 3x² − x</strong>', choices: ['5x² + 4x', '10x²', '5x² + 6x', '2x² + 4x'], correctIndex: 0, explanation: '(2+3)x² + (5−1)x = <strong>5x² + 4x</strong>' },
                    { question: 'Are 3xy and 5xy like terms?', choices: ['Yes', 'No', 'Only if x = y', 'Only for integers'], correctIndex: 0, explanation: 'Same variables, same powers → <strong>Yes</strong>.' },
                    { question: 'Simplify: <strong>8 − 3x + 5 + x</strong>', choices: ['−2x + 13', '11x', '−4x + 13', '13 − 2x'], correctIndex: 0, explanation: '(−3x + x) + (8 + 5) = <strong>−2x + 13</strong>' },
                ]}
            ]},

            // ---- 6. Solving Inequalities ----
            { id: 'solving-inequalities', title: 'Solving Inequalities', subtitle: 'Work with <, >, ≤, and ≥ symbols', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Inequalities: When the Answer is a Range</h3><p>An inequality uses &lt;, &gt;, ≤, or ≥ instead of =. The solution is a <em>range</em> of values, not a single number.</p><p>Solve the same way as equations — but if you multiply or divide by a <em>negative</em>, <strong>flip the sign</strong>.</p>` },
                { type: 'example', title: 'No Flip Needed', content: `<p><strong>3x + 4 ≤ 19</strong> → subtract 4 → 3x ≤ 15 → divide by 3 → x ≤ <strong>5</strong></p>` },
                { type: 'generated_practice', generators: ['solve-inequality'] },
                { type: 'text', content: `<h3>The Flip Rule</h3><p>When you divide (or multiply) by a negative number, the inequality sign <strong>reverses</strong>.</p>` },
                { type: 'example', title: 'Flipping the Sign', content: `<p><strong>−2x + 5 > 11</strong> → subtract 5 → −2x > 6 → divide by −2, <em>flip</em> → x &lt; <strong>−3</strong></p>` },
                { type: 'generated_practice', generators: ['inequality-flip'] },
                { type: 'practice', problems: [
                    { question: 'Solve: <strong>4x − 2 > 14</strong>', choices: ['x > 3', 'x > 4', 'x < 4', 'x > 2'], correctIndex: 1, explanation: '4x > 16 → x > <strong>4</strong>' },
                    { question: 'Solve: <strong>−2x > 8</strong>. What happens to the sign?', choices: ['Stays the same: x > −4', 'Flips: x < −4', 'Stays: x > 4', 'Flips: x < 4'], correctIndex: 1, explanation: 'Dividing by negative flips the sign → x < <strong>−4</strong>.' },
                    { question: 'Solve: <strong>5x − 3 ≥ 2x + 9</strong>', choices: ['x ≥ 2', 'x ≥ 4', 'x ≥ 6', 'x ≥ 3'], correctIndex: 1, explanation: '3x ≥ 12 → x ≥ <strong>4</strong>' },
                    { question: 'Which graph shows <strong>x < 3</strong>?', choices: ['Closed dot at 3, arrow right', 'Open dot at 3, arrow left', 'Open dot at 3, arrow right', 'Closed dot at 3, arrow left'], correctIndex: 1, explanation: 'Strict inequality → <strong>open dot</strong>; x < 3 goes to the left.' },
                ]}
            ]},

            // ---- 7. Graphing Linear Equations ----
            { id: 'graphing-lines', title: 'Graphing Linear Equations', subtitle: 'Plot lines using slope and y-intercept', xpReward: 60, sections: [
                { type: 'text', content: `<h3>Slope-Intercept Form: y = mx + b</h3><p><strong>m</strong> = slope (rise over run). <strong>b</strong> = y-intercept (where the line crosses the y-axis).</p><h3>Calculating Slope from Two Points</h3><p style="text-align:center;"><strong>m = (y₂ − y₁) / (x₂ − x₁)</strong></p>` },
                { type: 'example', title: 'Finding Slope', content: `<p>Points (2, 3) and (6, 11): m = (11−3)/(6−2) = 8/4 = <strong>2</strong></p>` },
                { type: 'generated_practice', generators: ['find-slope'] },
                { type: 'generated_practice', generators: ['identify-slope-intercept'] },
                { type: 'practice', problems: [
                    { question: 'In <strong>y = 3x − 5</strong>, what is the slope?', choices: ['−5', '3', '5', '−3'], correctIndex: 1, explanation: 'm = <strong>3</strong>' },
                    { question: 'In <strong>y = 3x − 5</strong>, what is the y-intercept?', choices: ['3', '5', '−5', '0'], correctIndex: 2, explanation: 'b = <strong>−5</strong>' },
                    { question: 'Slope between (0, 2) and (4, 10)?', choices: ['1', '2', '3', '4'], correctIndex: 1, explanation: 'm = (10−2)/(4−0) = 8/4 = <strong>2</strong>' },
                    { question: 'A line with slope <strong>0</strong> is?', choices: ['Vertical', 'Horizontal', 'Diagonal', 'Undefined'], correctIndex: 1, explanation: 'Zero slope → <strong>horizontal</strong> line.' },
                ]}
            ]},

            // ---- 8. Systems of Equations ----
            { id: 'systems-equations', title: 'Systems of Equations', subtitle: 'Solve two equations simultaneously', xpReward: 75, sections: [
                { type: 'text', content: `<h3>What is a System?</h3><p>Two equations with the same variables. The solution makes <em>both</em> true.</p><h3>Elimination Method</h3><p>Add or subtract equations to eliminate one variable.</p><h3>Substitution Method</h3><p>Solve one equation for a variable, substitute into the other.</p>` },
                { type: 'example', title: 'Elimination', content: `<p><strong>x + y = 10, x − y = 4</strong></p><p>Add: 2x = 14 → x = 7, then y = 3</p>` },
                { type: 'generated_practice', generators: ['solve-system'] },
                { type: 'generated_practice', generators: ['substitution-system'] },
                { type: 'practice', problems: [
                    { question: 'Solve: <strong>y = x + 3</strong> and <strong>2x + y = 12</strong>. What is y?', choices: ['3', '5', '6', '8'], correctIndex: 2, explanation: '2x + x + 3 = 12 → 3x = 9 → x = 3, y = <strong>6</strong>' },
                    { question: 'Solve: <strong>x + y = 8</strong> and <strong>x − y = 2</strong>. What is x?', choices: ['3', '5', '4', '6'], correctIndex: 1, explanation: 'Add: 2x = 10 → x = <strong>5</strong>' },
                    { question: 'A system has <strong>no solution</strong> when the lines are:', choices: ['Identical', 'Perpendicular', 'Parallel', 'Intersecting'], correctIndex: 2, explanation: '<strong>Parallel</strong> lines never meet.' },
                    { question: 'Solve: <strong>y = 2x</strong> and <strong>x + y = 9</strong>. Find x.', choices: ['2', '3', '4', '6'], correctIndex: 1, explanation: 'x + 2x = 9 → 3x = 9 → x = <strong>3</strong>' },
                ]}
            ]},

            // ---- 9. Multi-Step Equations ----
            { id: 'multi-step-equations', title: 'Multi-Step Equations', subtitle: 'Equations requiring several operations', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Multi-Step Equations</h3><p>Some equations need more than two steps. Strategy: simplify each side first (distribute, combine like terms), then isolate the variable.</p><p>If the variable appears on <strong>both sides</strong>, collect variable terms on one side and constants on the other.</p>` },
                { type: 'example', title: 'Variables on Both Sides', content: `<p><strong>5x + 3 = 2x + 15</strong></p><p>Subtract 2x: 3x + 3 = 15. Subtract 3: 3x = 12. Divide: x = <strong>4</strong></p>` },
                { type: 'generated_practice', generators: ['multi-step-eq'] },
                { type: 'generated_practice', generators: ['vars-both-sides'] },
                { type: 'practice', problems: [
                    { question: 'Solve: <strong>3(x + 2) = 21</strong>', choices: ['x = 5', 'x = 7', 'x = 6', 'x = 3'], correctIndex: 0, explanation: '3x + 6 = 21 → 3x = 15 → x = <strong>5</strong>' },
                    { question: 'Solve: <strong>7x − 4 = 3x + 12</strong>', choices: ['x = 2', 'x = 4', 'x = 8', 'x = 3'], correctIndex: 1, explanation: '4x = 16 → x = <strong>4</strong>' },
                    { question: 'Solve: <strong>2(x − 3) + 4 = 10</strong>', choices: ['x = 4', 'x = 6', 'x = 5', 'x = 7'], correctIndex: 1, explanation: '2x − 6 + 4 = 10 → 2x − 2 = 10 → 2x = 12 → x = <strong>6</strong>' },
                    { question: 'What is the first step for <strong>4(2x + 1) = 28</strong>?', choices: ['Divide by 4', 'Distribute the 4', 'Subtract 1', 'Add 28'], correctIndex: 1, explanation: '<strong>Distribute</strong> the 4 first: 8x + 4 = 28.' },
                ]}
            ]},

            // ---- 10. Absolute Value ----
            { id: 'absolute-value', title: 'Absolute Value', subtitle: 'Distance from zero on the number line', xpReward: 45, sections: [
                { type: 'text', content: `<h3>What is Absolute Value?</h3><p><strong>|x|</strong> means the distance of x from zero — always non-negative. |5| = 5 and |−5| = 5.</p><p>Solving |x| = a: x = a or x = −a (two solutions when a > 0). |x| = 0 gives x = 0. |x| = negative has <strong>no solution</strong>.</p>` },
                { type: 'example', title: 'Solving Absolute Value Equations', content: `<p><strong>|x − 3| = 7</strong></p><p>Case 1: x − 3 = 7 → x = 10</p><p>Case 2: x − 3 = −7 → x = −4</p>` },
                { type: 'generated_practice', generators: ['absolute-value-eval'] },
                { type: 'generated_practice', generators: ['absolute-value-eq'] },
                { type: 'practice', problems: [
                    { question: 'What is <strong>|−8|</strong>?', choices: ['−8', '8', '0', 'Undefined'], correctIndex: 1, explanation: 'Distance from 0: <strong>8</strong>' },
                    { question: 'Solve: <strong>|x| = 5</strong>', choices: ['x = 5 only', 'x = −5 only', 'x = 5 or x = −5', 'No solution'], correctIndex: 2, explanation: 'x = 5 or x = −5 (two solutions).' },
                    { question: 'Solve: <strong>|x| = −3</strong>', choices: ['x = 3', 'x = −3', 'x = ±3', 'No solution'], correctIndex: 3, explanation: 'Absolute value can\'t be negative → <strong>no solution</strong>.' },
                    { question: '<strong>|0|</strong> = ?', choices: ['Undefined', '1', '0', '−0'], correctIndex: 2, explanation: '|0| = <strong>0</strong>' },
                ]}
            ]},

            // ---- 11. Quadratic Equations ----
            { id: 'quadratic-equations', title: 'Quadratic Equations', subtitle: 'Master equations of the form ax² + bx + c = 0', xpReward: 75, sections: [
                { type: 'text', content: `<h3>The Quadratic Formula</h3><p style="text-align:center; font-size:1.2em;"><strong>x = (−b ± √(b² − 4ac)) / 2a</strong></p><p>The <strong>discriminant</strong> (b² − 4ac) tells you how many solutions exist: positive → 2, zero → 1, negative → 0.</p>` },
                { type: 'example', title: 'Using the Formula', content: `<p><strong>x² − 5x + 6 = 0:</strong> disc = 25 − 24 = 1. x = (5 ± 1)/2 → x = <strong>3</strong> or <strong>2</strong></p>` },
                { type: 'generated_practice', generators: ['find-discriminant'] },
                { type: 'generated_practice', generators: ['solve-quadratic-simple'] },
                { type: 'steps', title: 'Guided: Solve 2x² − 8x + 6 = 0', steps: ['Identify: a = 2, b = −8, c = 6.', 'Discriminant: 64 − 48 = 16 (positive → two real roots).', 'x = (8 ± √16) / 4 = (8 ± 4) / 4.', 'x = 12/4 = 3 and x = 4/4 = 1.'] },
                { type: 'practice', problems: [
                    { question: 'Discriminant of <strong>x² + 4x + 4 = 0</strong>?', choices: ['0', '4', '8', '16'], correctIndex: 0, explanation: '16 − 16 = <strong>0</strong> → one solution' },
                    { question: 'How many real solutions when discriminant > 0?', choices: ['0', '1', '2', '3'], correctIndex: 2, explanation: 'Positive discriminant → <strong>two</strong> solutions.' },
                    { question: 'Solve: <strong>x² − 9 = 0</strong>', choices: ['x = 3 only', 'x = ±3', 'x = 9', 'x = ±9'], correctIndex: 1, explanation: 'x² = 9 → x = <strong>±3</strong>' },
                    { question: 'What is <strong>b² − 4ac</strong> called?', choices: ['The solution', 'The vertex', 'The discriminant', 'The axis'], correctIndex: 2, explanation: '<strong>The discriminant</strong>.' },
                ]}
            ]},

            // ---- 12. Factoring Polynomials ----
            { id: 'factoring', title: 'Factoring Polynomials', subtitle: 'Break down expressions into factors', xpReward: 70, sections: [
                { type: 'text', content: `<h3>Factoring Trinomials</h3><p>For x² + bx + c, find two numbers that <strong>multiply to c</strong> and <strong>add to b</strong>.</p>` },
                { type: 'example', title: 'Trinomial', content: `<p><strong>x² + 7x + 12:</strong> 3 × 4 = 12, 3 + 4 = 7 → (x + 3)(x + 4)</p>` },
                { type: 'generated_practice', generators: ['factor-trinomial'] },
                { type: 'text', content: `<h3>Difference of Squares</h3><p><strong>a² − b² = (a + b)(a − b)</strong></p>` },
                { type: 'generated_practice', generators: ['factor-diff-squares'] },
                { type: 'generated_practice', generators: ['gcf-factor'] },
                { type: 'practice', problems: [
                    { question: 'Factor: <strong>x² + 5x + 6</strong>', choices: ['(x+1)(x+6)', '(x+2)(x+3)', '(x+5)(x+1)', '(x−2)(x−3)'], correctIndex: 1, explanation: '2 × 3 = 6, 2 + 3 = 5 → <strong>(x+2)(x+3)</strong>' },
                    { question: 'Factor: <strong>x² − 9</strong>', choices: ['(x−3)²', '(x+9)(x−1)', '(x+3)(x−3)', '(x−9)(x+1)'], correctIndex: 2, explanation: 'Difference of squares: <strong>(x+3)(x−3)</strong>' },
                    { question: 'Factor: <strong>x² − 7x + 10</strong>', choices: ['(x−2)(x−5)', '(x+2)(x+5)', '(x−1)(x−10)', '(x+2)(x−5)'], correctIndex: 0, explanation: '−2 × −5 = 10, −2 + −5 = −7 → <strong>(x−2)(x−5)</strong>' },
                    { question: 'Factor out GCF: <strong>6x + 12</strong>', choices: ['2(3x + 6)', '6(x + 2)', '3(2x + 4)', '12(x + 1)'], correctIndex: 1, explanation: 'GCF = 6: <strong>6(x + 2)</strong>' },
                ]}
            ]},

            // ---- 13. Exponents and Powers ----
            { id: 'exponents', title: 'Exponents and Powers', subtitle: 'Master exponent rules', xpReward: 60, sections: [
                { type: 'text', content: `<h3>Exponent Rules</h3><p><strong>Product:</strong> a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup> | <strong>Quotient:</strong> a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup> | <strong>Power:</strong> (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup> | <strong>Zero:</strong> a<sup>0</sup> = 1 | <strong>Negative:</strong> a<sup>−n</sup> = 1/a<sup>n</sup></p>` },
                { type: 'generated_practice', generators: ['exponent-product'] },
                { type: 'generated_practice', generators: ['exponent-evaluate'] },
                { type: 'generated_practice', generators: ['exponent-power-rule'] },
                { type: 'generated_practice', generators: ['zero-neg-exponent'] },
                { type: 'practice', problems: [
                    { question: 'What is <strong>4⁰</strong>?', choices: ['0', '4', '1', 'Undefined'], correctIndex: 2, explanation: 'Any nonzero to 0 = <strong>1</strong>' },
                    { question: 'Simplify: <strong>x³ × x⁵</strong>', choices: ['x⁸', 'x¹⁵', 'x²', 'x³⁵'], correctIndex: 0, explanation: 'Add exponents: <strong>x⁸</strong>' },
                    { question: 'Simplify: <strong>(x²)⁴</strong>', choices: ['x⁶', 'x⁸', 'x²', 'x¹⁶'], correctIndex: 1, explanation: 'Multiply exponents: <strong>x⁸</strong>' },
                    { question: 'What is <strong>2⁻³</strong>?', choices: ['−8', '−6', '1/8', '1/6'], correctIndex: 2, explanation: '2⁻³ = 1/2³ = <strong>1/8</strong>' },
                ]}
            ]},

            // ---- 14. Proportions & Ratios ----
            { id: 'proportions-ratios', title: 'Proportions and Ratios', subtitle: 'Understanding and solving proportions', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Ratios and Proportions</h3><p>A <strong>ratio</strong> compares two quantities (like 3:5). A <strong>proportion</strong> says two ratios are equal: a/b = c/d.</p><p>To solve, <strong>cross-multiply</strong>: ad = bc.</p>` },
                { type: 'example', title: 'Cross-Multiplying', content: `<p><strong>3/4 = x/12</strong></p><p>Cross-multiply: 3 × 12 = 4x → 36 = 4x → x = <strong>9</strong></p>` },
                { type: 'generated_practice', generators: ['solve-proportion'] },
                { type: 'generated_practice', generators: ['ratio-simplify'] },
                { type: 'practice', problems: [
                    { question: 'Solve: <strong>2/5 = x/15</strong>', choices: ['x = 3', 'x = 6', 'x = 10', 'x = 7.5'], correctIndex: 1, explanation: '2 × 15 = 5x → 30 = 5x → x = <strong>6</strong>' },
                    { question: 'Simplify: <strong>12 : 8</strong>', choices: ['6 : 4', '3 : 2', '12 : 8', '4 : 3'], correctIndex: 1, explanation: 'Divide both by 4: <strong>3 : 2</strong>' },
                    { question: 'If 3 apples cost $6, how much do 7 apples cost?', choices: ['$10', '$12', '$14', '$21'], correctIndex: 2, explanation: '6/3 = $2 each. 7 × $2 = <strong>$14</strong>' },
                    { question: 'In a proportion a/b = c/d, cross-multiplying gives:', choices: ['a + d = b + c', 'ad = bc', 'ab = cd', 'a/d = b/c'], correctIndex: 1, explanation: '<strong>ad = bc</strong>' },
                ]}
            ]},

            // ---- 15. Percent Problems ----
            { id: 'percent-problems', title: 'Percent Problems', subtitle: 'Calculate percentages and changes', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Percent Basics</h3><p>"Percent" means per hundred. To find a percent of a number: convert to decimal and multiply.</p><p><strong>Percent change</strong> = (change / original) × 100%.</p>` },
                { type: 'example', title: 'Finding a Percent', content: `<p><strong>25% of 80:</strong> 0.25 × 80 = <strong>20</strong></p><p><strong>Increase from 50 to 65:</strong> change = 15. (15/50) × 100 = <strong>30% increase</strong></p>` },
                { type: 'generated_practice', generators: ['percent-of-number'] },
                { type: 'generated_practice', generators: ['percent-change'] },
                { type: 'practice', problems: [
                    { question: 'What is <strong>20%</strong> of 150?', choices: ['15', '30', '20', '35'], correctIndex: 1, explanation: '0.20 × 150 = <strong>30</strong>' },
                    { question: 'A shirt goes from $40 to $50. Percent increase?', choices: ['10%', '20%', '25%', '50%'], correctIndex: 2, explanation: '(10/40) × 100 = <strong>25%</strong>' },
                    { question: '50% of what number is 30?', choices: ['15', '60', '80', '45'], correctIndex: 1, explanation: '0.50 × x = 30 → x = <strong>60</strong>' },
                    { question: 'Convert 3/4 to a percent.', choices: ['34%', '50%', '75%', '80%'], correctIndex: 2, explanation: '3 ÷ 4 = 0.75 = <strong>75%</strong>' },
                ]}
            ]},

            // ---- 16. Functions & Graphs ----
            { id: 'functions', title: 'Functions & Graphs', subtitle: 'Understanding function notation', xpReward: 75, sections: [
                { type: 'text', content: `<h3>What is a Function?</h3><p>A function takes each input and produces exactly <strong>one output</strong>. f(x) means "the output when input is x".</p><h3>Domain and Range</h3><p><strong>Domain:</strong> all valid inputs. <strong>Range:</strong> all possible outputs.</p>` },
                { type: 'example', title: 'Evaluating', content: `<p>f(x) = x² − 2x + 1, find f(4): 16 − 8 + 1 = <strong>9</strong></p>` },
                { type: 'generated_practice', generators: ['evaluate-function'] },
                { type: 'generated_practice', generators: ['evaluate-function-squared'] },
                { type: 'generated_practice', generators: ['domain-check'] },
                { type: 'practice', problems: [
                    { question: 'If <strong>f(x) = 3x − 7</strong>, what is f(5)?', choices: ['8', '15', '22', '2'], correctIndex: 0, explanation: '3(5) − 7 = <strong>8</strong>' },
                    { question: 'Which set is <em>not</em> a function?', choices: ['{(1,2),(2,3),(3,4)}', '{(1,5),(2,5),(3,5)}', '{(1,2),(1,3),(2,4)}', '{(0,0),(1,1),(2,2)}'], correctIndex: 2, explanation: 'x = 1 maps to both 2 and 3 — <strong>not a function</strong>.' },
                    { question: 'If <strong>g(x) = x² + 1</strong>, what is g(4)?', choices: ['9', '17', '16', '5'], correctIndex: 1, explanation: '16 + 1 = <strong>17</strong>' },
                    { question: 'The domain excludes values that make the denominator:', choices: ['Positive', 'Negative', 'Zero', 'Even'], correctIndex: 2, explanation: 'Denominator = <strong>zero</strong> is undefined.' },
                ]}
            ]},

            // ---- 17. Literal Equations ----
            { id: 'literal-equations', title: 'Literal Equations', subtitle: 'Solving formulas for a specific variable', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Rearranging Formulas</h3><p>A literal equation has multiple variables. Solve for a target variable using the same inverse operations as regular equations.</p>` },
                { type: 'example', title: 'Solving for r', content: `<p><strong>A = πr²</strong></p><p>Divide: r² = A/π. Square root: r = √(A/π)</p>` },
                { type: 'generated_practice', generators: ['solve-for-variable'] },
                { type: 'generated_practice', generators: ['rearrange-formula'] },
                { type: 'practice', problems: [
                    { question: 'Solve <strong>d = rt</strong> for t.', choices: ['t = d + r', 't = dr', 't = d/r', 't = r/d'], correctIndex: 2, explanation: 't = <strong>d/r</strong>' },
                    { question: 'Solve <strong>P = 2l + 2w</strong> for w.', choices: ['w = P − 2l', 'w = (P − 2l)/2', 'w = P/2 − l', 'Both B and C'], correctIndex: 3, explanation: 'w = (P − 2l)/2 = P/2 − l. <strong>Both are correct.</strong>' },
                    { question: 'Solve <strong>y = mx + b</strong> for m.', choices: ['m = y − b/x', 'm = (y − b)/x', 'm = y/x − b', 'm = x(y − b)'], correctIndex: 1, explanation: 'm = <strong>(y − b)/x</strong>' },
                ]}
            ]},

            // ---- 18. Compound Inequalities ----
            { id: 'compound-inequalities', title: 'Compound Inequalities', subtitle: 'AND and OR inequalities', xpReward: 55, sections: [
                { type: 'text', content: `<h3>AND vs OR</h3><p><strong>AND</strong>: both must be true (intersection). Written as a &lt; x &lt; b.</p><p><strong>OR</strong>: at least one must be true (union). Written as x &lt; a OR x &gt; b.</p>` },
                { type: 'example', title: 'AND Inequality', content: `<p><strong>−3 ≤ x < 5:</strong> x is between −3 (inclusive) and 5 (exclusive).</p>` },
                { type: 'generated_practice', generators: ['compound-and'] },
                { type: 'generated_practice', generators: ['compound-or'] },
                { type: 'practice', problems: [
                    { question: 'Solve: <strong>2 < x + 1 < 6</strong>. The solution is:', choices: ['1 < x < 5', '3 < x < 7', '1 < x < 6', '2 < x < 5'], correctIndex: 0, explanation: 'Subtract 1: <strong>1 < x < 5</strong>' },
                    { question: '"x > 3 AND x < 7" is equivalent to:', choices: ['3 < x < 7', 'x < 3 or x > 7', 'x = 5', 'No solution'], correctIndex: 0, explanation: 'AND = intersection: <strong>3 < x < 7</strong>' },
                    { question: '"x < −1 OR x > 4" means:', choices: ['One connected region', 'Two separate regions', 'All real numbers', 'No solution'], correctIndex: 1, explanation: 'OR creates <strong>two separate regions</strong>.' },
                ]}
            ]},

            // ---- 19. Polynomial Operations ----
            { id: 'polynomial-operations', title: 'Polynomial Operations', subtitle: 'Add, subtract, and multiply polynomials', xpReward: 60, sections: [
                { type: 'text', content: `<h3>Adding & Subtracting Polynomials</h3><p>Combine like terms. When subtracting, distribute the negative sign first.</p><h3>Multiplying Polynomials</h3><p>Use FOIL for two binomials: <strong>F</strong>irst, <strong>O</strong>uter, <strong>I</strong>nner, <strong>L</strong>ast.</p>` },
                { type: 'generated_practice', generators: ['add-polynomials'] },
                { type: 'generated_practice', generators: ['subtract-polynomials'] },
                { type: 'generated_practice', generators: ['multiply-binomials'] },
                { type: 'practice', problems: [
                    { question: 'Add: <strong>(3x² + 2x) + (x² − 5x)</strong>', choices: ['4x² − 3x', '4x² + 7x', '2x² − 3x', '3x² − 3x'], correctIndex: 0, explanation: '(3+1)x² + (2−5)x = <strong>4x² − 3x</strong>' },
                    { question: 'FOIL: <strong>(x + 2)(x + 5)</strong>', choices: ['x² + 7x + 10', 'x² + 10x + 7', 'x² + 7x + 7', 'x² + 3x + 10'], correctIndex: 0, explanation: 'x² + 5x + 2x + 10 = <strong>x² + 7x + 10</strong>' },
                    { question: 'Subtract: <strong>(5x − 3) − (2x + 1)</strong>', choices: ['3x − 4', '3x − 2', '7x − 2', '3x + 4'], correctIndex: 0, explanation: '5x − 3 − 2x − 1 = <strong>3x − 4</strong>' },
                ]}
            ]},

            // ---- 20. Completing the Square ----
            { id: 'completing-square', title: 'Completing the Square', subtitle: 'Rewrite quadratics in vertex form', xpReward: 65, sections: [
                { type: 'text', content: `<h3>Completing the Square</h3><p>Transform x² + bx into (x + b/2)² − (b/2)². This lets us rewrite <strong>y = x² + bx + c</strong> as <strong>y = (x − h)² + k</strong> (vertex form).</p>` },
                { type: 'steps', title: 'Complete the square for x² + 6x', steps: ['Take half of b: 6/2 = 3.', 'Square it: 3² = 9.', 'x² + 6x + 9 − 9 = (x + 3)² − 9.', 'Vertex form reveals the vertex at (−3, −9).'] },
                { type: 'generated_practice', generators: ['complete-square'] },
                { type: 'generated_practice', generators: ['vertex-from-standard'] },
                { type: 'practice', problems: [
                    { question: 'To complete the square for x² + 8x, add:', choices: ['4', '8', '16', '64'], correctIndex: 2, explanation: '(8/2)² = 4² = <strong>16</strong>' },
                    { question: 'x² + 10x + 25 = ?', choices: ['(x+5)²', '(x+10)²', '(x+25)²', '(x+5)(x−5)'], correctIndex: 0, explanation: 'Perfect square: <strong>(x + 5)²</strong>' },
                    { question: 'The vertex form y = (x − 2)² + 3 has vertex at:', choices: ['(2, 3)', '(−2, 3)', '(2, −3)', '(3, 2)'], correctIndex: 0, explanation: 'Vertex = (h, k) = <strong>(2, 3)</strong>' },
                ]}
            ]},

            // ---- 21. Rational Expressions ----
            { id: 'rational-expressions', title: 'Rational Expressions', subtitle: 'Work with algebraic fractions', xpReward: 80, sections: [
                { type: 'text', content: `<h3>Rational Expressions</h3><p>A fraction where numerator/denominator are polynomials. To simplify: factor, then cancel common factors.</p><p><strong>Critical rule:</strong> The denominator can never equal zero.</p>` },
                { type: 'generated_practice', generators: ['simplify-rational'] },
                { type: 'generated_practice', generators: ['find-excluded-value'] },
                { type: 'practice', problems: [
                    { question: 'Simplify: <strong>(x² − 4)/(x − 2)</strong>', choices: ['x − 2', 'x + 2', 'x² − 2', '2x'], correctIndex: 1, explanation: '(x+2)(x−2)/(x−2) = <strong>x + 2</strong>' },
                    { question: 'What value is excluded in <strong>3/(x − 5)</strong>?', choices: ['x = 3', 'x = 0', 'x = 5', 'x = −5'], correctIndex: 2, explanation: 'x ≠ <strong>5</strong>' },
                    { question: 'Simplify: <strong>(2x² + 4x)/(2x)</strong>', choices: ['x + 4', 'x + 2', '2x + 4', 'x²+ 4'], correctIndex: 1, explanation: '2x(x+2)/(2x) = <strong>x + 2</strong>' },
                ]}
            ]},

            // ---- 22. Radical Expressions ----
            { id: 'radical-expressions', title: 'Radical Expressions', subtitle: 'Simplify and operate with square roots', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Square Roots and Radicals</h3><p>√a × √b = √(ab). √(a/b) = √a/√b. To simplify √n, find the largest perfect square factor.</p><p>Like radicals (same radicand) can be added: 3√5 + 2√5 = 5√5.</p>` },
                { type: 'example', title: 'Simplifying', content: `<p><strong>√50</strong> = √(25 × 2) = 5√2</p><p><strong>3√2 + 7√2</strong> = 10√2</p>` },
                { type: 'generated_practice', generators: ['simplify-radical'] },
                { type: 'generated_practice', generators: ['add-radicals'] },
                { type: 'practice', problems: [
                    { question: 'Simplify: <strong>√36</strong>', choices: ['6', '18', '12', '4'], correctIndex: 0, explanation: '√36 = <strong>6</strong>' },
                    { question: 'Simplify: <strong>√72</strong>', choices: ['6√2', '8√2', '4√3', '36√2'], correctIndex: 0, explanation: '√(36×2) = 6√2' },
                    { question: '<strong>2√5 + 3√5</strong> = ?', choices: ['5√10', '5√5', '6√5', '5√25'], correctIndex: 1, explanation: 'Like radicals: (2+3)√5 = <strong>5√5</strong>' },
                    { question: 'Can <strong>√3 + √5</strong> be simplified further?', choices: ['Yes, √8', 'Yes, √15', 'No', 'Yes, 2√4'], correctIndex: 2, explanation: 'Different radicands → <strong>cannot be combined</strong>.' },
                ]}
            ]},

            // ---- 23. Scientific Notation ----
            { id: 'scientific-notation', title: 'Scientific Notation', subtitle: 'Express very large and small numbers', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Scientific Notation</h3><p>Format: <strong>a × 10ⁿ</strong> where 1 ≤ a < 10. Large numbers have positive n; small numbers have negative n.</p>` },
                { type: 'example', title: 'Converting', content: `<p><strong>45,000</strong> = 4.5 × 10⁴ (moved decimal 4 places left)</p><p><strong>0.0032</strong> = 3.2 × 10⁻³ (moved decimal 3 places right)</p>` },
                { type: 'generated_practice', generators: ['to-scientific'] },
                { type: 'generated_practice', generators: ['from-scientific'] },
                { type: 'practice', problems: [
                    { question: 'Write 300,000 in scientific notation.', choices: ['3 × 10⁴', '30 × 10⁴', '3 × 10⁵', '3 × 10⁶'], correctIndex: 2, explanation: '3 × 10⁵ = <strong>300,000</strong>' },
                    { question: 'Convert <strong>7.2 × 10³</strong> to standard form.', choices: ['72', '720', '7,200', '72,000'], correctIndex: 2, explanation: '7.2 × 1000 = <strong>7,200</strong>' },
                    { question: 'Which is in proper scientific notation?', choices: ['12 × 10³', '1.2 × 10⁴', '0.12 × 10⁵', '120 × 10²'], correctIndex: 1, explanation: 'a must be 1 ≤ a < 10: <strong>1.2 × 10⁴</strong>' },
                ]}
            ]},

            // ---- 24. Arithmetic Sequences ----
            { id: 'arithmetic-sequences', title: 'Arithmetic Sequences', subtitle: 'Patterns with a constant difference', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Arithmetic Sequences</h3><p>Each term adds the same amount (the <strong>common difference d</strong>).</p><p>Formula: <strong>aₙ = a₁ + (n−1)d</strong></p><p>Sum of first n terms: <strong>Sₙ = n(a₁ + aₙ)/2</strong></p>` },
                { type: 'example', title: 'Finding the 10th Term', content: `<p>Sequence: 3, 7, 11, 15, ... d = 4, a₁ = 3</p><p>a₁₀ = 3 + 9(4) = 3 + 36 = <strong>39</strong></p>` },
                { type: 'generated_practice', generators: ['nth-term-arithmetic'] },
                { type: 'generated_practice', generators: ['arithmetic-common-diff'] },
                { type: 'practice', problems: [
                    { question: 'Sequence: 5, 8, 11, 14, ... Common difference?', choices: ['2', '3', '5', '8'], correctIndex: 1, explanation: '8 − 5 = <strong>3</strong>' },
                    { question: 'Find the 8th term: a₁ = 2, d = 5.', choices: ['37', '42', '40', '35'], correctIndex: 0, explanation: '2 + 7(5) = 2 + 35 = <strong>37</strong>' },
                    { question: 'Is 3, 6, 12, 24, ... arithmetic?', choices: ['Yes, d = 3', 'Yes, d = 6', 'No, it\'s geometric', 'No, it\'s random'], correctIndex: 2, explanation: 'The ratio is constant (×2), not the difference → <strong>geometric</strong>.' },
                ]}
            ]},

            // ---- 25. Word Problems ----
            { id: 'word-problems', title: 'Algebraic Word Problems', subtitle: 'Translate words into equations', xpReward: 60, sections: [
                { type: 'text', content: `<h3>Strategy for Word Problems</h3><p>1. Read carefully and identify what's unknown (assign a variable). 2. Translate key phrases into math ("is" = equals, "of" = multiply, "more than" = add). 3. Solve the equation. 4. Check if the answer makes sense.</p>` },
                { type: 'generated_practice', generators: ['translate-to-equation'] },
                { type: 'generated_practice', generators: ['word-problem-solve'] },
                { type: 'steps', title: 'Guided: "The sum of a number and 7 is 15."', steps: ['Let x = the number.', 'Translate: x + 7 = 15.', 'Solve: x = 15 − 7 = 8.', 'Check: 8 + 7 = 15 ✓'] },
                { type: 'practice', problems: [
                    { question: '"Five less than twice a number is 11" → equation?', choices: ['5 − 2x = 11', '2x − 5 = 11', '2x + 5 = 11', '2(x − 5) = 11'], correctIndex: 1, explanation: '"Twice a number" = 2x. "Five less than" = subtract 5: <strong>2x − 5 = 11</strong>' },
                    { question: 'The perimeter of a square is 36. Side length?', choices: ['6', '9', '18', '12'], correctIndex: 1, explanation: 'P = 4s → 36 = 4s → s = <strong>9</strong>' },
                    { question: 'Tom is twice as old as Jane. Together they are 24. Tom\'s age?', choices: ['8', '12', '16', '20'], correctIndex: 2, explanation: 'J + 2J = 24 → 3J = 24 → J = 8, Tom = <strong>16</strong>' },
                ]}
            ]},

            // ---- 26. Logarithms Intro ----
            { id: 'logarithms-intro', title: 'Introduction to Logarithms', subtitle: 'The inverse of exponentiation', xpReward: 70, sections: [
                { type: 'text', content: `<h3>What is a Logarithm?</h3><p><strong>log<sub>b</sub>(x) = y</strong> means b<sup>y</sup> = x. The logarithm asks: "What power of b gives x?"</p><p>Key facts: log<sub>b</sub>(b) = 1, log<sub>b</sub>(1) = 0, log<sub>b</sub>(b<sup>n</sup>) = n.</p>` },
                { type: 'example', title: 'Evaluating Logs', content: `<p><strong>log₂(8)</strong> = ? → 2<sup>?</sup> = 8 → 2³ = 8 → answer is <strong>3</strong></p>` },
                { type: 'generated_practice', generators: ['log-eval'] },
                { type: 'generated_practice', generators: ['log-properties'] },
                { type: 'practice', problems: [
                    { question: '<strong>log₁₀(1000)</strong> = ?', choices: ['2', '3', '10', '100'], correctIndex: 1, explanation: '10³ = 1000 → <strong>3</strong>' },
                    { question: '<strong>log₅(25)</strong> = ?', choices: ['2', '5', '25', '10'], correctIndex: 0, explanation: '5² = 25 → <strong>2</strong>' },
                    { question: 'log(ab) equals:', choices: ['log a × log b', 'log a + log b', 'log a − log b', 'a × log b'], correctIndex: 1, explanation: 'Product rule: <strong>log a + log b</strong>' },
                    { question: 'log_b(1) always equals:', choices: ['b', '1', '0', 'Undefined'], correctIndex: 2, explanation: 'b⁰ = 1 → log_b(1) = <strong>0</strong>' },
                ]}
            ]},

            // ---- 27. Algebra Review ----
            { id: 'algebra-review', title: 'Algebra Review & Problem Solving', subtitle: 'Bringing it all together', xpReward: 100, sections: [
                { type: 'text', content: `<h3>Comprehensive Review</h3><p>This lesson covers key concepts from across the Algebra path. Use it to solidify your understanding and identify areas for further practice.</p>` },
                { type: 'generated_practice', generators: ['solve-linear'] },
                { type: 'generated_practice', generators: ['find-discriminant'] },
                { type: 'generated_practice', generators: ['factor-trinomial'] },
                { type: 'generated_practice', generators: ['evaluate-function'] },
                { type: 'practice', problems: [
                    { question: 'Solve: <strong>3x + 2 = 17</strong>', choices: ['x = 3', 'x = 5', 'x = 7', 'x = 4'], correctIndex: 1, explanation: '3x = 15 → x = <strong>5</strong>' },
                    { question: 'Factor: <strong>x² − 25</strong>', choices: ['(x−5)²', '(x+5)(x−5)', '(x+25)(x−1)', 'Cannot factor'], correctIndex: 1, explanation: 'Diff of squares: <strong>(x+5)(x−5)</strong>' },
                    { question: 'If f(x) = 2x − 1, solve f(x) = 9.', choices: ['x = 4', 'x = 5', 'x = 8', 'x = 3'], correctIndex: 1, explanation: '2x − 1 = 9 → 2x = 10 → x = <strong>5</strong>' },
                    { question: 'Simplify: <strong>x³ · x⁴</strong>', choices: ['x⁷', 'x¹²', 'x⁴³', '2x⁷'], correctIndex: 0, explanation: 'Add exponents: <strong>x⁷</strong>' },
                    { question: 'What does the discriminant tell us?', choices: ['The vertex location', 'The number of real solutions', 'The y-intercept', 'The slope'], correctIndex: 1, explanation: 'The discriminant determines the <strong>number of real solutions</strong>.' },
                ]}
            ]},
        ]
    },

    // ========================================================
    // GEOMETRY PATH (27 Lessons)
    // ========================================================
    geometry: {
        name: 'Geometry Path',
        icon: '📏',
        lessons: [

            // ---- 1. Intro to Geometry ----
            { id: 'intro-geometry', title: 'Introduction to Geometry', subtitle: 'Points, lines, and planes', xpReward: 30, sections: [
                { type: 'text', content: `<h3>Building Blocks of Geometry</h3><p>Geometry begins with three undefined terms: <strong>points</strong> (locations in space, drawn as dots), <strong>lines</strong> (straight paths extending infinitely in both directions), and <strong>planes</strong> (flat surfaces extending infinitely).</p><p>A <strong>line segment</strong> has two endpoints; a <strong>ray</strong> has one endpoint and extends infinitely in one direction. We name points with capital letters (A, B), lines with two points or a lowercase letter, and planes with three non-collinear points.</p><p><strong>Collinear</strong> points lie on the same line. <strong>Coplanar</strong> points lie on the same plane.</p>` },
                { type: 'example', title: 'Identifying Terms', content: `<p><strong>Name two points, a line, and a ray from the figure:</strong></p><p>Points: A and B. Line: line AB (extends both ways). Ray: ray AB (starts at A, goes through B and beyond).</p>` },
                { type: 'generated_practice', generators: ['geo-basic-definitions'] },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p>A line has no endpoints; a segment has two; a ray has one. Two points determine exactly one line. Three non-collinear points determine exactly one plane.</p>` },
                { type: 'practice', problems: [
                    { question: 'How many endpoints does a <strong>ray</strong> have?', choices: ['0', '1', '2', 'Infinite'], correctIndex: 1, explanation: 'A ray starts at one endpoint and extends infinitely in one direction, so it has <strong>1</strong> endpoint.' },
                    { question: 'Which term describes points that lie on the same line?', choices: ['Coplanar', 'Collinear', 'Concurrent', 'Congruent'], correctIndex: 1, explanation: 'Points on the same line are called <strong>collinear</strong>.' },
                    { question: 'How many lines can pass through two distinct points?', choices: ['0', '1', '2', 'Infinite'], correctIndex: 1, explanation: 'Exactly <strong>one</strong> line passes through any two distinct points.' },
                    { question: 'A flat surface that extends infinitely is called a:', choices: ['Line', 'Segment', 'Plane', 'Ray'], correctIndex: 2, explanation: 'A <strong>plane</strong> is a flat surface extending infinitely in all directions.' },
                ]}
            ]},

            // ---- 2. Angles & Classification ----
            { id: 'angle-basics', title: 'Angles & Classification', subtitle: 'Measuring and naming angles', xpReward: 35, sections: [
                { type: 'text', content: `<h3>What Is an Angle?</h3><p>An <strong>angle</strong> is formed by two rays sharing a common endpoint called the <strong>vertex</strong>. We measure angles in degrees (°).</p><p><strong>Acute</strong>: 0° &lt; angle &lt; 90°. <strong>Right</strong>: exactly 90°. <strong>Obtuse</strong>: 90° &lt; angle &lt; 180°. <strong>Straight</strong>: exactly 180°. <strong>Reflex</strong>: 180° &lt; angle &lt; 360°.</p>` },
                { type: 'example', title: 'Classifying Angles', content: `<p>An angle measuring 47° → <strong>Acute</strong> (less than 90°).</p><p>An angle measuring 135° → <strong>Obtuse</strong> (between 90° and 180°).</p>` },
                { type: 'generated_practice', generators: ['classify-angle'] },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p>Right angles are marked with a small square. The keyword "right" = 90°. "Straight" = 180°. Remember: acute = small/sharp, obtuse = large/blunt.</p>` },
                { type: 'practice', problems: [
                    { question: 'An angle of 90° is called:', choices: ['Acute', 'Right', 'Obtuse', 'Straight'], correctIndex: 1, explanation: 'A 90° angle is a <strong>right</strong> angle.' },
                    { question: 'Classify a 162° angle.', choices: ['Acute', 'Right', 'Obtuse', 'Reflex'], correctIndex: 2, explanation: '162° is between 90° and 180°, so it is <strong>obtuse</strong>.' },
                    { question: 'What is a 180° angle called?', choices: ['Right', 'Obtuse', 'Straight', 'Reflex'], correctIndex: 2, explanation: 'A 180° angle forms a <strong>straight</strong> line.' },
                    { question: 'Classify a 15° angle.', choices: ['Acute', 'Right', 'Obtuse', 'Straight'], correctIndex: 0, explanation: '15° is less than 90°, so it is <strong>acute</strong>.' },
                ]}
            ]},

            // ---- 3. Angle Pairs ----
            { id: 'angle-pairs', title: 'Angle Pairs', subtitle: 'Complementary, supplementary, and vertical angles', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Special Angle Relationships</h3><p><strong>Complementary</strong> angles sum to 90°. <strong>Supplementary</strong> angles sum to 180°. <strong>Vertical</strong> angles are formed by two intersecting lines — they are opposite each other and always <em>equal</em>.</p><p><strong>Linear pair</strong>: two adjacent angles whose non-common sides form a straight line. They are supplementary (sum = 180°).</p>` },
                { type: 'example', title: 'Finding a Complement', content: `<p>If one angle is 35°, its complement = 90° − 35° = <strong>55°</strong>.</p><p>If one angle is 110°, its supplement = 180° − 110° = <strong>70°</strong>.</p>` },
                { type: 'generated_practice', generators: ['complementary-angle', 'supplementary-angle'] },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p><strong>C</strong>omplements = <strong>C</strong>orner (90°). <strong>S</strong>upplements = <strong>S</strong>traight line (180°). Vertical angles are always equal!</p>` },
                { type: 'practice', problems: [
                    { question: 'Two angles are complementary. One is 28°. What is the other?', choices: ['62°', '152°', '72°', '28°'], correctIndex: 0, explanation: '90° − 28° = <strong>62°</strong>.' },
                    { question: 'Two angles are supplementary. One is 105°. What is the other?', choices: ['85°', '75°', '105°', '55°'], correctIndex: 1, explanation: '180° − 105° = <strong>75°</strong>.' },
                    { question: 'Vertical angles are always:', choices: ['Supplementary', 'Complementary', 'Equal', 'Adjacent'], correctIndex: 2, explanation: 'Vertical angles are <strong>equal</strong>.' },
                    { question: 'A linear pair of angles sums to:', choices: ['90°', '180°', '270°', '360°'], correctIndex: 1, explanation: 'A linear pair sums to <strong>180°</strong>.' },
                ]}
            ]},

            // ---- 4. Parallel Lines & Transversals ----
            { id: 'parallel-transversals', title: 'Parallel Lines & Transversals', subtitle: 'Angle relationships with parallel lines', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Transversal Angles</h3><p>When a <strong>transversal</strong> crosses two parallel lines, it creates 8 angles with special relationships:</p><p><strong>Corresponding</strong> angles: same position at each intersection → <em>equal</em>.</p><p><strong>Alternate interior</strong> angles: opposite sides, between the lines → <em>equal</em>.</p><p><strong>Alternate exterior</strong> angles: opposite sides, outside the lines → <em>equal</em>.</p><p><strong>Co-interior</strong> (same-side interior) angles: same side, between the lines → <em>supplementary</em> (sum to 180°).</p>` },
                { type: 'example', title: 'Using Transversal Angles', content: `<p>If a corresponding angle is 65°, the matching angle = <strong>65°</strong>. A co-interior partner = 180° − 65° = <strong>115°</strong>.</p>` },
                { type: 'generated_practice', generators: ['transversal-angles', 'angle-relationship-name'] },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p>Equal pairs: corresponding, alternate interior, alternate exterior. Supplementary pair: co-interior (same-side interior).</p>` },
                { type: 'practice', problems: [
                    { question: 'Alternate interior angles are:', choices: ['Supplementary', 'Equal', 'Complementary', 'Adjacent'], correctIndex: 1, explanation: 'Alternate interior angles are <strong>equal</strong> when lines are parallel.' },
                    { question: 'Co-interior angles sum to:', choices: ['90°', '180°', '270°', '360°'], correctIndex: 1, explanation: 'Co-interior angles are <strong>supplementary</strong> (sum to 180°).' },
                    { question: 'A transversal crosses two parallel lines. One angle is 72°. Its corresponding angle is:', choices: ['72°', '108°', '18°', '144°'], correctIndex: 0, explanation: 'Corresponding angles are equal: <strong>72°</strong>.' },
                    { question: 'Same-side interior angle partners with 130° is:', choices: ['130°', '50°', '40°', '60°'], correctIndex: 1, explanation: '180° − 130° = <strong>50°</strong>.' },
                ]}
            ]},

            // ---- 5. Triangles: Angle Sum ----
            { id: 'triangle-angle-sum', title: 'Triangle Angle Sum', subtitle: 'Interior angles of triangles', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Triangle Angle Sum Theorem</h3><p>The three interior angles of any triangle always add up to <strong>180°</strong>. This is one of the most important facts in geometry.</p><p>If you know two angles, subtract their sum from 180° to find the third.</p>` },
                { type: 'example', title: 'Finding a Missing Angle', content: `<p>A triangle has angles 50° and 70°. The third angle = 180° − 50° − 70° = <strong>60°</strong>.</p>` },
                { type: 'generated_practice', generators: ['triangle-missing-angle'] },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p>Every triangle has exactly 180° total. An equilateral triangle has three 60° angles. A right triangle has one 90° angle, so the other two must sum to 90°.</p>` },
                { type: 'practice', problems: [
                    { question: 'A triangle has angles 45° and 85°. What is the third?', choices: ['50°', '40°', '60°', '55°'], correctIndex: 0, explanation: '180° − 45° − 85° = <strong>50°</strong>.' },
                    { question: 'In a right triangle, one acute angle is 32°. The other is:', choices: ['68°', '58°', '148°', '32°'], correctIndex: 1, explanation: '90° − 32° = <strong>58°</strong> (the two acute angles sum to 90°).' },
                    { question: 'Each angle of an equilateral triangle measures:', choices: ['45°', '60°', '90°', '120°'], correctIndex: 1, explanation: '180° ÷ 3 = <strong>60°</strong>.' },
                    { question: 'Can a triangle have two obtuse angles?', choices: ['Yes', 'No', 'Only if isosceles', 'Only if scalene'], correctIndex: 1, explanation: 'Two obtuse angles would exceed 180°, so <strong>no</strong>.' },
                ]}
            ]},

            // ---- 6. Classifying Triangles ----
            { id: 'classifying-triangles', title: 'Classifying Triangles', subtitle: 'By sides and by angles', xpReward: 35, sections: [
                { type: 'text', content: `<h3>Triangles by Sides</h3><p><strong>Equilateral</strong>: all 3 sides equal. <strong>Isosceles</strong>: at least 2 sides equal. <strong>Scalene</strong>: no sides equal.</p><h3>Triangles by Angles</h3><p><strong>Acute</strong>: all angles &lt; 90°. <strong>Right</strong>: one angle = 90°. <strong>Obtuse</strong>: one angle &gt; 90°.</p>` },
                { type: 'generated_practice', generators: ['classify-triangle-sides'] },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p>A triangle can be classified two ways — by sides AND by angles. An "isosceles right triangle" has two equal sides and a 90° angle.</p>` },
                { type: 'practice', problems: [
                    { question: 'A triangle with sides 5, 5, and 8 is:', choices: ['Equilateral', 'Isosceles', 'Scalene', 'Right'], correctIndex: 1, explanation: 'Two sides are equal → <strong>isosceles</strong>.' },
                    { question: 'A triangle with all angles less than 90° is:', choices: ['Right', 'Obtuse', 'Acute', 'Equilateral'], correctIndex: 2, explanation: 'All angles acute → <strong>acute</strong> triangle.' },
                    { question: 'A triangle with sides 3, 4, 5 is:', choices: ['Equilateral', 'Isosceles', 'Scalene', 'Impossible'], correctIndex: 2, explanation: 'All three sides are different → <strong>scalene</strong>.' },
                    { question: 'How many degrees are in an equilateral triangle total?', choices: ['60°', '120°', '180°', '360°'], correctIndex: 2, explanation: 'All triangles have <strong>180°</strong> total.' },
                ]}
            ]},

            // ---- 7. Pythagorean Theorem ----
            { id: 'pythagorean-theorem', title: 'Pythagorean Theorem', subtitle: 'a² + b² = c²', xpReward: 50, sections: [
                { type: 'text', content: `<h3>The Pythagorean Theorem</h3><p>In a <strong>right</strong> triangle, the square of the hypotenuse equals the sum of the squares of the two legs:</p><p style="text-align:center;font-size:1.2em;"><strong>a² + b² = c²</strong></p><p>The <strong>hypotenuse</strong> (c) is always the longest side, opposite the right angle.</p>` },
                { type: 'example', title: 'Finding the Hypotenuse', content: `<p>Legs are 3 and 4. c² = 3² + 4² = 9 + 16 = 25 → c = <strong>5</strong>.</p>` },
                { type: 'steps', title: 'Using the Pythagorean Theorem', steps: ['Identify the right angle and label sides a, b (legs) and c (hypotenuse).', 'Plug known values into a² + b² = c².', 'Solve for the unknown side.', 'Take the square root if needed.'] },
                { type: 'generated_practice', generators: ['find-hypotenuse', 'find-leg'] },
                { type: 'interactive_steps', title: 'Guided: Hypotenuse 13, one leg 5. Find the other leg.', description: 'Rearrange a² + b² = c² to solve for a missing leg.', steps: [
                    { text: 'Write the equation: 5² + b² = {blank}²', answer: '13', hint: 'The hypotenuse is 13' },
                    { text: '5² = {blank}', answer: '25', hint: '5 × 5' },
                    { text: '13² = {blank}', answer: '169', hint: '13 × 13' },
                    { text: 'b² = 169 − 25 = {blank}', answer: '144', hint: 'Subtract' },
                    { text: 'b = √144 = {blank}', answer: '12', hint: 'What number squared is 144?' }
                ], result: 'The other leg is 12. (5, 12, 13) is a Pythagorean triple!' },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p>Common Pythagorean triples: (3,4,5), (5,12,13), (8,15,17), (7,24,25). Multiples also work: (6,8,10) is 2×(3,4,5).</p>` },
                { type: 'practice', problems: [
                    { question: 'Find the hypotenuse: legs 6 and 8.', choices: ['10', '14', '48', '100'], correctIndex: 0, explanation: '6² + 8² = 36 + 64 = 100 → √100 = <strong>10</strong>.' },
                    { question: 'A right triangle has hypotenuse 13 and one leg 5. Find the other leg.', choices: ['8', '12', '18', '10'], correctIndex: 1, explanation: '13² − 5² = 169 − 25 = 144 → √144 = <strong>12</strong>.' },
                    { question: 'Is a triangle with sides 7, 24, 25 a right triangle?', choices: ['Yes', 'No', 'Not enough info', 'Only if isosceles'], correctIndex: 0, explanation: '7² + 24² = 49 + 576 = 625 = 25². <strong>Yes</strong>.' },
                    { question: 'The hypotenuse is always:', choices: ['The shortest side', 'Opposite the right angle', 'Adjacent to the right angle', 'Equal to a leg'], correctIndex: 1, explanation: 'The hypotenuse is <strong>opposite the right angle</strong> and is always the longest side.' },
                ]}
            ]},

            // ---- 8. Perimeter & Area Basics ----
            { id: 'perimeter-area', title: 'Perimeter & Area Basics', subtitle: 'Rectangles, triangles, and parallelograms', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Perimeter & Area</h3><p><strong>Perimeter</strong> is the total distance around a shape. <strong>Area</strong> is the space inside.</p><p>Rectangle: P = 2l + 2w, A = lw. Triangle: A = ½bh. Parallelogram: A = bh.</p>` },
                { type: 'example', title: 'Rectangle Area', content: `<p>Rectangle with l = 8 and w = 5: P = 2(8) + 2(5) = <strong>26</strong>. A = 8 × 5 = <strong>40</strong>.</p>` },
                { type: 'generated_practice', generators: ['rectangle-area', 'perimeter-rectangle', 'triangle-area'] },
                { type: 'interactive_steps', title: 'Guided: Find the area of a triangle with base 14 and height 9', description: 'Apply the triangle area formula step by step.', steps: [
                    { text: 'The formula for triangle area is A = ½ × base × {blank}', answer: 'height', hint: 'Area = ½ × b × h' },
                    { text: 'Plug in: A = ½ × 14 × {blank}', answer: '9', hint: 'The height is 9' },
                    { text: '14 × 9 = {blank}', answer: '126', hint: 'Multiply base times height' },
                    { text: '½ × 126 = {blank}', answer: '63', hint: 'Divide by 2' }
                ], result: 'Area = 63 square units' },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p>Perimeter = sum of all sides. Area = space inside. For triangles, the height must be <em>perpendicular</em> to the base.</p>` },
                { type: 'practice', problems: [
                    { question: 'Area of a rectangle with length 12 and width 7:', choices: ['38', '84', '19', '42'], correctIndex: 1, explanation: '12 × 7 = <strong>84</strong>.' },
                    { question: 'Area of a triangle with base 10 and height 6:', choices: ['60', '30', '16', '36'], correctIndex: 1, explanation: '½ × 10 × 6 = <strong>30</strong>.' },
                    { question: 'Perimeter of a square with side 9:', choices: ['18', '27', '36', '81'], correctIndex: 2, explanation: '4 × 9 = <strong>36</strong>.' },
                    { question: 'Area of a parallelogram with base 8 and height 5:', choices: ['13', '40', '20', '80'], correctIndex: 1, explanation: '8 × 5 = <strong>40</strong>.' },
                ]}
            ]},

            // ---- 9. Circles: Circumference & Area ----
            { id: 'circles-basics', title: 'Circles: Circumference & Area', subtitle: 'Working with π', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Circle Formulas</h3><p><strong>Circumference</strong> (distance around): C = 2πr = πd. <strong>Area</strong>: A = πr².</p><p>The <strong>radius</strong> (r) goes from center to edge. The <strong>diameter</strong> (d) goes all the way across: d = 2r.</p>` },
                { type: 'example', title: 'Finding Circumference & Area', content: `<p>Circle with r = 7: C = 2π(7) = 14π ≈ <strong>43.98</strong>. A = π(7²) = 49π ≈ <strong>153.94</strong>.</p>` },
                { type: 'generated_practice', generators: ['circle-circumference', 'circle-area'] },
                { type: 'interactive_steps', title: 'Guided: Circle with radius 6. Find area and circumference.', description: 'Apply the circle formulas.', steps: [
                    { text: 'Circumference = 2πr = 2π × {blank}', answer: '6', hint: 'The radius is 6' },
                    { text: 'C = {blank}π', answer: '12', hint: '2 × 6 = ?' },
                    { text: 'Area = πr² = π × 6² = π × {blank}', answer: '36', hint: '6 × 6' },
                    { text: 'Area = {blank}π', answer: '36', hint: 'π × 36' }
                ], result: 'C = 12π ≈ 37.7, A = 36π ≈ 113.1' },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p>Always check: is the problem giving you radius or diameter? If diameter, divide by 2 first. Leave answers in terms of π when the problem says "exact."</p>` },
                { type: 'practice', problems: [
                    { question: 'Circumference of a circle with diameter 10:', choices: ['10π', '25π', '100π', '5π'], correctIndex: 0, explanation: 'C = πd = <strong>10π</strong>.' },
                    { question: 'Area of a circle with radius 3:', choices: ['6π', '9π', '3π', '12π'], correctIndex: 1, explanation: 'A = π(3²) = <strong>9π</strong>.' },
                    { question: 'A circle has circumference 20π. What is the radius?', choices: ['5', '10', '20', '40'], correctIndex: 1, explanation: '2πr = 20π → r = <strong>10</strong>.' },
                    { question: 'The diameter is always ___ the radius.', choices: ['Half', 'Equal to', 'Twice', 'π times'], correctIndex: 2, explanation: 'd = 2r. The diameter is <strong>twice</strong> the radius.' },
                ]}
            ]},

            // ---- 10. Quadrilaterals ----
            { id: 'quadrilaterals', title: 'Quadrilaterals', subtitle: 'Properties of four-sided shapes', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Types of Quadrilaterals</h3><p>All quadrilaterals have interior angles summing to <strong>360°</strong>.</p><p><strong>Parallelogram</strong>: opposite sides parallel and equal. <strong>Rectangle</strong>: parallelogram with four right angles. <strong>Rhombus</strong>: parallelogram with four equal sides. <strong>Square</strong>: rectangle + rhombus (all sides equal, all right angles). <strong>Trapezoid</strong>: exactly one pair of parallel sides.</p>` },
                { type: 'generated_practice', generators: ['identify-quadrilateral', 'quad-missing-angle'] },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p>A square is a special rectangle AND a special rhombus. The hierarchy: square → rectangle/rhombus → parallelogram → quadrilateral.</p>` },
                { type: 'practice', problems: [
                    { question: 'Interior angles of any quadrilateral sum to:', choices: ['180°', '270°', '360°', '540°'], correctIndex: 2, explanation: 'All quadrilaterals have interior angles summing to <strong>360°</strong>.' },
                    { question: 'A quadrilateral with one pair of parallel sides is a:', choices: ['Parallelogram', 'Trapezoid', 'Rhombus', 'Square'], correctIndex: 1, explanation: 'One pair of parallel sides defines a <strong>trapezoid</strong>.' },
                    { question: 'Which is always true for a rhombus?', choices: ['All angles are 90°', 'All sides are equal', 'Diagonals are equal', 'It has no parallel sides'], correctIndex: 1, explanation: 'A rhombus has <strong>all four sides equal</strong>.' },
                    { question: 'A square is a special case of:', choices: ['Trapezoid only', 'Rectangle and rhombus', 'Pentagon', 'Triangle'], correctIndex: 1, explanation: 'A square is both a <strong>rectangle</strong> (right angles) and a <strong>rhombus</strong> (equal sides).' },
                ]}
            ]},

            // ---- 11. Polygon Angle Sums ----
            { id: 'polygon-angles', title: 'Polygon Angle Sums', subtitle: 'Interior and exterior angle formulas', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Interior Angle Sum</h3><p>For any convex polygon with <strong>n</strong> sides: Interior angle sum = <strong>(n − 2) × 180°</strong>.</p><p>For a <strong>regular</strong> polygon (all sides and angles equal), each interior angle = (n − 2) × 180° / n.</p><h3>Exterior Angles</h3><p>The exterior angles of any convex polygon always sum to <strong>360°</strong>. For a regular polygon, each exterior angle = 360° / n.</p>` },
                { type: 'example', title: 'Hexagon Angles', content: `<p>Hexagon (n = 6): Sum = (6−2) × 180° = 720°. Each interior angle of a regular hexagon = 720° / 6 = <strong>120°</strong>. Each exterior angle = 360° / 6 = <strong>60°</strong>.</p>` },
                { type: 'generated_practice', generators: ['interior-angle-sum', 'exterior-angle-regular', 'one-interior-angle'] },
                { type: 'interactive_steps', title: 'Guided: Find each interior angle of a regular nonagon (9 sides)', description: 'Use the interior angle sum formula, then divide.', steps: [
                    { text: 'Interior angle sum = (n − 2) × 180°. n = {blank}', answer: '9', hint: 'A nonagon has 9 sides' },
                    { text: '(9 − 2) = {blank}', answer: '7', hint: 'Subtract' },
                    { text: '7 × 180° = {blank}°', answer: '1260', hint: 'Multiply' },
                    { text: 'Each angle of a regular nonagon = 1260° ÷ 9 = {blank}°', answer: '140', hint: 'Divide the sum by the number of angles' }
                ], result: 'Each interior angle of a regular nonagon is 140°' },
                { type: 'practice', problems: [
                    { question: 'Interior angle sum of a pentagon (5 sides):', choices: ['360°', '540°', '720°', '900°'], correctIndex: 1, explanation: '(5−2) × 180° = <strong>540°</strong>.' },
                    { question: 'Each interior angle of a regular octagon:', choices: ['120°', '135°', '144°', '150°'], correctIndex: 1, explanation: '(8−2) × 180° / 8 = 1080° / 8 = <strong>135°</strong>.' },
                    { question: 'Exterior angles of any polygon sum to:', choices: ['180°', '270°', '360°', 'Depends on sides'], correctIndex: 2, explanation: 'Exterior angles always sum to <strong>360°</strong>.' },
                    { question: 'Each exterior angle of a regular decagon (10 sides):', choices: ['36°', '40°', '30°', '24°'], correctIndex: 0, explanation: '360° / 10 = <strong>36°</strong>.' },
                ]}
            ]},

            // ---- 12. Transformations: Translations & Reflections ----
            { id: 'translations-reflections', title: 'Translations & Reflections', subtitle: 'Sliding and flipping shapes', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Translations</h3><p>A <strong>translation</strong> slides every point of a figure the same distance in the same direction. The notation (x, y) → (x + a, y + b) means shift right by a and up by b.</p><h3>Reflections</h3><p>A <strong>reflection</strong> flips a figure over a line (the <strong>line of reflection</strong>). Reflecting over the x-axis: (x, y) → (x, −y). Over the y-axis: (x, y) → (−x, y).</p><p>Both translations and reflections are <strong>rigid motions</strong> — they preserve size and shape.</p>` },
                { type: 'generated_practice', generators: ['translate-point', 'reflection-point'] },
                { type: 'practice', problems: [
                    { question: 'Translate (3, 5) by (x+2, y−3):', choices: ['(5, 2)', '(1, 8)', '(5, 8)', '(1, 2)'], correctIndex: 0, explanation: '(3+2, 5−3) = <strong>(5, 2)</strong>.' },
                    { question: 'Reflect (4, −2) over the x-axis:', choices: ['(−4, −2)', '(4, 2)', '(−4, 2)', '(4, −2)'], correctIndex: 1, explanation: 'Over x-axis: (x, y) → (x, −y) = <strong>(4, 2)</strong>.' },
                    { question: 'Reflect (−3, 7) over the y-axis:', choices: ['(3, 7)', '(−3, −7)', '(3, −7)', '(−3, 7)'], correctIndex: 0, explanation: 'Over y-axis: (x, y) → (−x, y) = <strong>(3, 7)</strong>.' },
                    { question: 'A translation changes a shape\'s:', choices: ['Size', 'Orientation', 'Position', 'Angles'], correctIndex: 2, explanation: 'Translations change <strong>position</strong> only — size and shape stay the same.' },
                ]}
            ]},

            // ---- 13. Transformations: Rotations ----
            { id: 'rotations', title: 'Rotations', subtitle: 'Turning shapes around a point', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Rotations</h3><p>A <strong>rotation</strong> turns a figure around a fixed <strong>center of rotation</strong> by a given angle.</p><p>Common rotations about the origin (counterclockwise):</p><p>90°: (x, y) → (−y, x). 180°: (x, y) → (−x, −y). 270°: (x, y) → (y, −x).</p>` },
                { type: 'example', title: '90° Rotation', content: `<p>Rotate (3, 5) by 90° counterclockwise about the origin: (−5, 3).</p><p>Check: (x, y) → (−y, x) = (−5, 3). ✓</p>` },
                { type: 'generated_practice', generators: ['identify-transformation'] },
                { type: 'practice', problems: [
                    { question: 'Rotate (2, 7) by 180° about the origin:', choices: ['(−2, −7)', '(7, 2)', '(−7, 2)', '(2, −7)'], correctIndex: 0, explanation: '180°: (x,y) → (−x,−y) = <strong>(−2, −7)</strong>.' },
                    { question: 'Rotate (4, −1) by 90° CCW about the origin:', choices: ['(1, 4)', '(−1, −4)', '(−4, 1)', '(4, 1)'], correctIndex: 0, explanation: '90° CCW: (x,y) → (−y,x) = (1, 4). <strong>(1, 4)</strong>.' },
                    { question: 'Rotate (−3, 2) by 270° CCW about the origin:', choices: ['(2, 3)', '(−2, −3)', '(3, −2)', '(−2, 3)'], correctIndex: 0, explanation: '270° CCW: (x,y) → (y,−x) = (2, 3). <strong>(2, 3)</strong>.' },
                    { question: 'A rotation preserves:', choices: ['Position only', 'Size and shape', 'Only angles', 'Only lengths'], correctIndex: 1, explanation: 'Rotations are rigid motions — they preserve <strong>size and shape</strong>.' },
                ]}
            ]},

            // ---- 14. Congruence ----
            { id: 'congruence', title: 'Congruence', subtitle: 'When shapes are identical', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Congruent Figures</h3><p>Two figures are <strong>congruent</strong> (≅) if they have the same shape AND same size. Corresponding sides and corresponding angles are equal.</p><h3>Triangle Congruence Criteria</h3><p><strong>SSS</strong>: all 3 sides match. <strong>SAS</strong>: 2 sides and the included angle. <strong>ASA</strong>: 2 angles and the included side. <strong>AAS</strong>: 2 angles and a non-included side. <strong>HL</strong>: hypotenuse-leg for right triangles.</p><p>Note: <strong>SSA</strong> (or ASS) is NOT a valid congruence criterion!</p>` },
                { type: 'generated_practice', generators: ['congruent-vs-similar'] },
                { type: 'practice', problems: [
                    { question: 'Which is NOT a triangle congruence criterion?', choices: ['SSS', 'SAS', 'SSA', 'ASA'], correctIndex: 2, explanation: '<strong>SSA</strong> is not valid — it can produce two different triangles (the ambiguous case).' },
                    { question: 'Congruent figures have:', choices: ['Same shape only', 'Same size only', 'Same shape and size', 'Same angles only'], correctIndex: 2, explanation: 'Congruent = <strong>same shape AND same size</strong>.' },
                    { question: 'HL applies only to:', choices: ['Equilateral triangles', 'Right triangles', 'Isosceles triangles', 'Obtuse triangles'], correctIndex: 1, explanation: 'Hypotenuse-Leg works only for <strong>right triangles</strong>.' },
                    { question: 'If △ABC ≅ △DEF and AB = 7, then DE =', choices: ['7', '14', '3.5', 'Cannot tell'], correctIndex: 0, explanation: 'Corresponding sides of congruent triangles are equal: DE = <strong>7</strong>.' },
                ]}
            ]},

            // ---- 15. Similarity ----
            { id: 'similarity', title: 'Similarity', subtitle: 'Same shape, different size', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Similar Figures</h3><p>Two figures are <strong>similar</strong> (~) if they have the same shape but possibly different sizes. Corresponding angles are equal and corresponding sides are <em>proportional</em>.</p><p>The <strong>scale factor</strong> is the ratio of corresponding sides. If the scale factor is k, then areas scale by k² and volumes by k³.</p><h3>Triangle Similarity Criteria</h3><p><strong>AA</strong>: two pairs of equal angles. <strong>SSS~</strong>: all three pairs of sides proportional. <strong>SAS~</strong>: two pairs of sides proportional with the included angle equal.</p>` },
                { type: 'example', title: 'Finding a Missing Side', content: `<p>Triangles are similar with scale factor 3:5. If a side of the smaller is 6, the corresponding side of the larger = 6 × (5/3) = <strong>10</strong>.</p>` },
                { type: 'generated_practice', generators: ['scale-factor', 'similar-triangle-side'] },
                { type: 'interactive_steps', title: 'Guided: Similar triangles, scale factor 3:5. Small side = 9. Find large side.', description: 'Use the scale factor to find the corresponding side.', steps: [
                    { text: 'Scale factor = small : large = 3 : {blank}', answer: '5', hint: 'Given in the problem' },
                    { text: 'Set up proportion: 3/5 = 9/{blank}', answer: 'x', hint: 'x is the unknown large side' },
                    { text: 'Cross multiply: 3x = 5 × {blank}', answer: '9', hint: 'Multiply 5 by the known small side' },
                    { text: '3x = 45. x = 45 ÷ 3 = {blank}', answer: '15', hint: 'Divide both sides by 3' }
                ], result: 'The corresponding large side is 15' },
                { type: 'practice', problems: [
                    { question: 'Similar triangles have:', choices: ['Equal sides', 'Proportional sides', 'No equal angles', 'Equal perimeters'], correctIndex: 1, explanation: 'Similar triangles have <strong>proportional</strong> corresponding sides.' },
                    { question: 'Scale factor is 2:3. Small triangle side = 8. Corresponding large side =', choices: ['12', '16', '5.3', '10'], correctIndex: 0, explanation: '8 × (3/2) = <strong>12</strong>.' },
                    { question: 'If scale factor is 4, how do areas compare?', choices: ['4×', '8×', '16×', '64×'], correctIndex: 2, explanation: 'Areas scale by k² = 4² = <strong>16×</strong>.' },
                    { question: 'To prove triangles similar, the minimum needed is:', choices: ['3 pairs of equal angles', '2 pairs of equal angles (AA)', '3 pairs of equal sides', '1 pair of equal angles'], correctIndex: 1, explanation: '<strong>AA</strong> (two pairs of equal angles) is sufficient for similarity.' },
                ]}
            ]},

            // ---- 16. Distance & Midpoint ----
            { id: 'distance-midpoint', title: 'Distance & Midpoint', subtitle: 'Measuring on the coordinate plane', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Distance Formula</h3><p>The distance between (x₁, y₁) and (x₂, y₂):</p><p style="text-align:center;"><strong>d = √[(x₂−x₁)² + (y₂−y₁)²]</strong></p><h3>Midpoint Formula</h3><p>The midpoint of a segment from (x₁, y₁) to (x₂, y₂):</p><p style="text-align:center;"><strong>M = ((x₁+x₂)/2, (y₁+y₂)/2)</strong></p>` },
                { type: 'example', title: 'Distance & Midpoint', content: `<p>Points (1, 2) and (4, 6): d = √[(4−1)² + (6−2)²] = √[9+16] = √25 = <strong>5</strong>. Midpoint = ((1+4)/2, (2+6)/2) = <strong>(2.5, 4)</strong>.</p>` },
                { type: 'generated_practice', generators: ['distance-formula', 'midpoint-formula'] },
                { type: 'interactive_steps', title: 'Guided: Distance and midpoint of A(1, 3) and B(7, 11)', description: 'Apply both formulas.', steps: [
                    { text: 'Δx = 7 − 1 = {blank}', answer: '6', hint: 'x₂ − x₁' },
                    { text: 'Δy = 11 − 3 = {blank}', answer: '8', hint: 'y₂ − y₁' },
                    { text: 'd = √(6² + 8²) = √(36 + 64) = √{blank}', answer: '100', hint: 'Add the squares' },
                    { text: 'd = {blank}', answer: '10', hint: '√100' },
                    { text: 'Midpoint x: (1 + 7)/2 = {blank}', answer: '4', hint: '8 ÷ 2' },
                    { text: 'Midpoint y: (3 + 11)/2 = {blank}', answer: '7', hint: '14 ÷ 2' }
                ], result: 'Distance = 10, Midpoint = (4, 7)' },
                { type: 'practice', problems: [
                    { question: 'Distance between (0, 0) and (3, 4):', choices: ['5', '7', '12', '25'], correctIndex: 0, explanation: '√(9+16) = √25 = <strong>5</strong>.' },
                    { question: 'Midpoint of (2, 8) and (6, 4):', choices: ['(4, 6)', '(8, 12)', '(3, 2)', '(4, 12)'], correctIndex: 0, explanation: '((2+6)/2, (8+4)/2) = <strong>(4, 6)</strong>.' },
                    { question: 'Distance between (−1, 3) and (2, 7):', choices: ['5', '7', '25', '3'], correctIndex: 0, explanation: '√[(3)²+(4)²] = √(9+16) = <strong>5</strong>.' },
                    { question: 'Midpoint of (−4, 0) and (0, 6):', choices: ['(−2, 3)', '(−4, 6)', '(2, 3)', '(4, 6)'], correctIndex: 0, explanation: '((−4+0)/2, (0+6)/2) = <strong>(−2, 3)</strong>.' },
                ]}
            ]},

            // ---- 17. Slope & Parallel/Perpendicular Lines ----
            { id: 'slope-parallel-perp', title: 'Slope & Line Relationships', subtitle: 'Parallel and perpendicular slopes', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Slope Review</h3><p>Slope = rise/run = (y₂ − y₁)/(x₂ − x₁).</p><h3>Parallel Lines</h3><p>Parallel lines have the <strong>same slope</strong>. If m₁ = m₂, the lines are parallel.</p><h3>Perpendicular Lines</h3><p>Perpendicular lines have slopes that are <strong>negative reciprocals</strong>: m₁ × m₂ = −1. If one slope is 2/3, the perpendicular slope is −3/2.</p>` },
                { type: 'generated_practice', generators: ['find-slope', 'slope-parallel-perp'] },
                { type: 'practice', problems: [
                    { question: 'A line has slope 4. A parallel line has slope:', choices: ['−4', '1/4', '4', '−1/4'], correctIndex: 2, explanation: 'Parallel lines share the same slope: <strong>4</strong>.' },
                    { question: 'A line has slope 2/5. A perpendicular line has slope:', choices: ['5/2', '−5/2', '−2/5', '2/5'], correctIndex: 1, explanation: 'Negative reciprocal of 2/5 is <strong>−5/2</strong>.' },
                    { question: 'Slope between (1, 3) and (4, 9):', choices: ['2', '3', '6', '1/2'], correctIndex: 0, explanation: '(9−3)/(4−1) = 6/3 = <strong>2</strong>.' },
                    { question: 'Lines with slopes 3 and −1/3 are:', choices: ['Parallel', 'Perpendicular', 'Neither', 'Same line'], correctIndex: 1, explanation: '3 × (−1/3) = −1, so they are <strong>perpendicular</strong>.' },
                ]}
            ]},

            // ---- 18. Area of Trapezoids & Composite Shapes ----
            { id: 'composite-area', title: 'Trapezoids & Composite Shapes', subtitle: 'Combining area formulas', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Trapezoid Area</h3><p>A = ½(b₁ + b₂)h, where b₁ and b₂ are the two parallel bases and h is the height.</p><h3>Composite Shapes</h3><p>Break complex shapes into rectangles, triangles, trapezoids, and circles. Find each area, then <strong>add</strong> (for combined shapes) or <strong>subtract</strong> (for holes/cutouts).</p>` },
                { type: 'example', title: 'Trapezoid Area', content: `<p>Bases 6 and 10, height 4: A = ½(6+10)(4) = ½(16)(4) = <strong>32</strong>.</p>` },
                { type: 'generated_practice', generators: ['trapezoid-area', 'composite-area'] },
                { type: 'practice', problems: [
                    { question: 'Trapezoid with bases 5 and 9, height 6. Area =', choices: ['42', '45', '27', '84'], correctIndex: 0, explanation: '½(5+9)(6) = ½(14)(6) = <strong>42</strong>.' },
                    { question: 'An L-shaped room is two rectangles: 4×6 and 3×5. Total area:', choices: ['39', '24', '15', '47'], correctIndex: 0, explanation: '24 + 15 = <strong>39</strong>.' },
                    { question: 'A square with side 10 has a circular hole of radius 3. Shaded area ≈', choices: ['71.7', '100', '28.3', '91'], correctIndex: 0, explanation: '100 − 9π ≈ 100 − 28.3 ≈ <strong>71.7</strong>.' },
                    { question: 'To find the area of a shape with a hole, you:', choices: ['Add inner + outer', 'Subtract inner from outer', 'Multiply inner × outer', 'Ignore the hole'], correctIndex: 1, explanation: '<strong>Subtract</strong> the inner area from the outer area.' },
                ]}
            ]},

            // ---- 19. Surface Area ----
            { id: 'surface-area', title: 'Surface Area', subtitle: '3D shapes: prisms, cylinders, spheres', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Surface Area</h3><p>Surface area is the total area of all faces/surfaces of a 3D shape.</p><p><strong>Rectangular prism</strong>: SA = 2lw + 2lh + 2wh. <strong>Cylinder</strong>: SA = 2πr² + 2πrh. <strong>Sphere</strong>: SA = 4πr².</p>` },
                { type: 'example', title: 'Cylinder Surface Area', content: `<p>r = 3, h = 10: SA = 2π(9) + 2π(3)(10) = 18π + 60π = 78π ≈ <strong>245.04</strong>.</p>` },
                { type: 'generated_practice', generators: ['cube-surface-area', 'cylinder-surface-area', 'sphere-surface-area'] },
                { type: 'practice', problems: [
                    { question: 'SA of a cube with side 4:', choices: ['64', '96', '24', '48'], correctIndex: 1, explanation: '6 × 4² = 6 × 16 = <strong>96</strong>.' },
                    { question: 'SA of a sphere with r = 5:', choices: ['100π', '500π/3', '25π', '20π'], correctIndex: 0, explanation: '4π(25) = <strong>100π</strong>.' },
                    { question: 'A cylinder has two circles and a:', choices: ['Square', 'Rectangle (lateral surface)', 'Triangle', 'Pentagon'], correctIndex: 1, explanation: 'The lateral surface unrolls into a <strong>rectangle</strong>.' },
                    { question: 'SA of a rectangular prism 2×3×5:', choices: ['30', '62', '31', '60'], correctIndex: 1, explanation: '2(6)+2(10)+2(15) = 12+20+30 = <strong>62</strong>.' },
                ]}
            ]},

            // ---- 20. Volume ----
            { id: 'volume', title: 'Volume', subtitle: 'Prisms, cylinders, cones, and spheres', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Volume Formulas</h3><p><strong>Prism/Cylinder</strong>: V = Bh (base area × height). <strong>Cone/Pyramid</strong>: V = ⅓Bh. <strong>Sphere</strong>: V = (4/3)πr³.</p><p>Cube: V = s³. Rectangular prism: V = lwh. Cylinder: V = πr²h.</p>` },
                { type: 'generated_practice', generators: ['cube-volume', 'cylinder-volume', 'sphere-volume'] },
                { type: 'interactive_steps', title: 'Guided: Find the volume of a cylinder with r = 4 and h = 10', description: 'Apply V = πr²h step by step.', steps: [
                    { text: 'V = πr²h. r² = 4² = {blank}', answer: '16', hint: '4 × 4' },
                    { text: 'r² × h = 16 × {blank}', answer: '10', hint: 'Height = 10' },
                    { text: '16 × 10 = {blank}', answer: '160', hint: 'Multiply' },
                    { text: 'V = {blank}π', answer: '160', hint: 'V = 160π' }
                ], result: 'V = 160π ≈ 502.7 cubic units' },
                { type: 'practice', problems: [
                    { question: 'Volume of a cube with side 5:', choices: ['25', '125', '150', '75'], correctIndex: 1, explanation: '5³ = <strong>125</strong>.' },
                    { question: 'Volume of a cylinder with r=4, h=10:', choices: ['160π', '40π', '80π', '320π'], correctIndex: 0, explanation: 'π(16)(10) = <strong>160π</strong>.' },
                    { question: 'Volume of a sphere with r=6:', choices: ['144π', '288π', '864π', '216π'], correctIndex: 1, explanation: '(4/3)π(216) = <strong>288π</strong>.' },
                    { question: 'A cone\'s volume is what fraction of a cylinder\'s (same base, same height)?', choices: ['1/2', '1/3', '2/3', '1/4'], correctIndex: 1, explanation: 'V_cone = <strong>1/3</strong> × V_cylinder.' },
                ]}
            ]},

            // ---- 21. Arcs & Sectors ----
            { id: 'arcs-sectors', title: 'Arcs & Sectors', subtitle: 'Parts of circles', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Arc Length</h3><p>Arc length = (θ/360°) × 2πr, where θ is the central angle in degrees.</p><h3>Sector Area</h3><p>Sector area = (θ/360°) × πr².</p><p>Think of a sector as a "pizza slice" — the fraction of the circle is θ/360.</p>` },
                { type: 'generated_practice', generators: ['arc-length-calc', 'sector-area-calc'] },
                { type: 'interactive_steps', title: 'Guided: Arc length and sector area for r = 12, θ = 150°', description: 'Find both using the fraction-of-circle approach.', steps: [
                    { text: 'The fraction of the circle: 150 / 360 = {blank}/12', answer: '5', hint: 'Simplify: 150/360 = 5/12' },
                    { text: 'Arc length = (5/12) × 2π(12) = (5/12) × {blank}π', answer: '24', hint: '2 × 12 = 24' },
                    { text: 'Arc = (5/12) × 24π = {blank}π', answer: '10', hint: '5 × 24 ÷ 12' },
                    { text: 'Sector area = (5/12) × π(12²) = (5/12) × {blank}π', answer: '144', hint: '12² = 144' },
                    { text: 'Area = (5/12) × 144π = {blank}π', answer: '60', hint: '5 × 144 ÷ 12' }
                ], result: 'Arc length = 10π ≈ 31.4, Sector area = 60π ≈ 188.5' },
                { type: 'practice', problems: [
                    { question: 'Arc length for r = 10, θ = 90°:', choices: ['5π', '25π', '10π', '20π'], correctIndex: 0, explanation: '(90/360) × 2π(10) = ¼ × 20π = <strong>5π</strong>.' },
                    { question: 'Sector area for r = 6, θ = 60°:', choices: ['6π', '36π', '12π', '2π'], correctIndex: 0, explanation: '(60/360) × π(36) = ⅙ × 36π = <strong>6π</strong>.' },
                    { question: 'A semicircle is a sector with central angle:', choices: ['90°', '180°', '270°', '360°'], correctIndex: 1, explanation: 'A semicircle has a central angle of <strong>180°</strong>.' },
                    { question: 'What fraction of a circle is a 120° sector?', choices: ['1/4', '1/3', '1/2', '2/3'], correctIndex: 1, explanation: '120/360 = <strong>1/3</strong>.' },
                ]}
            ]},

            // ---- 22. Triangle Inequality ----
            { id: 'triangle-inequality', title: 'Triangle Inequality', subtitle: 'Which side lengths form triangles?', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Triangle Inequality Theorem</h3><p>For three lengths to form a triangle, the sum of any two sides must be <strong>greater than</strong> the third side. Check all three combinations, or just check: the two smaller sides must sum to more than the largest side.</p>` },
                { type: 'example', title: 'Can We Make a Triangle?', content: `<p>Sides 3, 5, 9: Check 3 + 5 = 8, but 8 &lt; 9. <strong>Not a triangle.</strong></p><p>Sides 4, 6, 7: 4 + 6 = 10 &gt; 7 ✓, 4 + 7 = 11 &gt; 6 ✓, 6 + 7 = 13 &gt; 4 ✓. <strong>Valid triangle.</strong></p>` },
                { type: 'generated_practice', generators: ['triangle-inequality-check', 'possible-third-side'] },
                { type: 'practice', problems: [
                    { question: 'Can sides 2, 3, 6 form a triangle?', choices: ['Yes', 'No'], correctIndex: 1, explanation: '2 + 3 = 5 < 6. <strong>No</strong>.' },
                    { question: 'Can sides 5, 7, 10 form a triangle?', choices: ['Yes', 'No'], correctIndex: 0, explanation: '5 + 7 = 12 > 10 ✓. <strong>Yes</strong>.' },
                    { question: 'Two sides are 4 and 9. The third side must be between:', choices: ['4 and 9', '5 and 13', '1 and 13', '5 and 12'], correctIndex: 1, explanation: 'Third side > |9−4| = 5 and < 9+4 = 13. Between <strong>5 and 13</strong> (exclusive).' },
                    { question: 'Can sides 5, 5, 10 form a triangle?', choices: ['Yes', 'No'], correctIndex: 1, explanation: '5 + 5 = 10, not greater than 10. <strong>No</strong> (must be strictly greater).' },
                ]}
            ]},

            // ---- 23. Special Right Triangles ----
            { id: 'special-right-triangles', title: 'Special Right Triangles', subtitle: '45-45-90 and 30-60-90', xpReward: 50, sections: [
                { type: 'text', content: `<h3>45-45-90 Triangle</h3><p>Legs are equal. If each leg = a, the hypotenuse = a√2. Ratio: <strong>1 : 1 : √2</strong>.</p><h3>30-60-90 Triangle</h3><p>Short leg (opposite 30°) = a. Long leg (opposite 60°) = a√3. Hypotenuse = 2a. Ratio: <strong>1 : √3 : 2</strong>.</p>` },
                { type: 'example', title: '45-45-90 Example', content: `<p>Leg = 7. Hypotenuse = 7√2 ≈ <strong>9.90</strong>.</p><p>30-60-90: short leg = 5. Long leg = 5√3 ≈ 8.66. Hypotenuse = 10.</p>` },
                { type: 'generated_practice', generators: ['is-right-triangle'] },
                { type: 'interactive_steps', title: 'Guided: 30-60-90 with hypotenuse = 14. Find both legs.', description: 'Use the ratio 1 : √3 : 2.', steps: [
                    { text: 'Hypotenuse = 2a, so 2a = 14. a = {blank}', answer: '7', hint: 'Divide 14 by 2' },
                    { text: 'Short leg (opposite 30°) = a = {blank}', answer: '7', hint: 'a is the short leg' },
                    { text: 'Long leg (opposite 60°) = a√3 = {blank}√3', answer: '7', hint: 'Multiply a by √3' }
                ], result: 'Short leg = 7, Long leg = 7√3 ≈ 12.1' },
                { type: 'practice', problems: [
                    { question: '45-45-90 triangle with leg = 6. Hypotenuse =', choices: ['6', '6√2', '6√3', '12'], correctIndex: 1, explanation: 'Hypotenuse = leg × √2 = <strong>6√2</strong>.' },
                    { question: '30-60-90 triangle with short leg = 4. Hypotenuse =', choices: ['4√2', '4√3', '8', '2'], correctIndex: 2, explanation: 'Hypotenuse = 2 × short leg = <strong>8</strong>.' },
                    { question: '30-60-90 triangle with short leg = 3. Long leg =', choices: ['3', '3√2', '3√3', '6'], correctIndex: 2, explanation: 'Long leg = short leg × √3 = <strong>3√3</strong>.' },
                    { question: 'In a 45-45-90 triangle, the hypotenuse is 10. Each leg =', choices: ['5', '5√2', '10/√2', '5√2 and 10/√2'], correctIndex: 1, explanation: 'Leg = hypotenuse/√2 = 10/√2 = <strong>5√2</strong>.' },
                ]}
            ]},

            // ---- 24. Circles: Inscribed Angles & Chords ----
            { id: 'inscribed-angles', title: 'Inscribed Angles & Chords', subtitle: 'Angle relationships in circles', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Central vs. Inscribed Angles</h3><p>A <strong>central angle</strong> has its vertex at the center; it equals its intercepted arc. An <strong>inscribed angle</strong> has its vertex on the circle; it equals <strong>half</strong> its intercepted arc.</p><p>If a central angle = 80°, an inscribed angle intercepting the same arc = 40°.</p><p>An inscribed angle intercepting a semicircle (180° arc) is always <strong>90°</strong>.</p>` },
                { type: 'generated_practice', generators: ['inscribed-angle'] },
                { type: 'practice', problems: [
                    { question: 'Central angle = 100°. Inscribed angle on same arc =', choices: ['100°', '50°', '200°', '25°'], correctIndex: 1, explanation: 'Inscribed angle = ½ × central = <strong>50°</strong>.' },
                    { question: 'An inscribed angle is 35°. Its intercepted arc =', choices: ['17.5°', '35°', '70°', '105°'], correctIndex: 2, explanation: 'Arc = 2 × inscribed = <strong>70°</strong>.' },
                    { question: 'An inscribed angle in a semicircle is always:', choices: ['45°', '60°', '90°', '180°'], correctIndex: 2, explanation: 'Inscribed angle in a semicircle = <strong>90°</strong> (Thales\' theorem).' },
                    { question: 'Two inscribed angles intercept the same arc. They are:', choices: ['Supplementary', 'Complementary', 'Equal', 'Unrelated'], correctIndex: 2, explanation: 'Inscribed angles on the same arc are <strong>equal</strong>.' },
                ]}
            ]},

            // ---- 25. Geometric Probability ----
            { id: 'geometric-probability', title: 'Geometric Probability', subtitle: 'Probability using area and length', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Geometric Probability</h3><p>When outcomes are based on position or location, probability = (favorable area or length) / (total area or length).</p><p>Example: A dart lands randomly on a 10×10 board. A circular target has radius 3. P(hit) = π(9)/100 ≈ 28.3%.</p>` },
                { type: 'generated_practice', generators: ['geometric-probability', 'shaded-region-area'] },
                { type: 'practice', problems: [
                    { question: 'A 12×12 square has a 6×6 shaded region. P(landing in shaded) =', choices: ['1/2', '1/4', '1/3', '1/6'], correctIndex: 1, explanation: '36/144 = <strong>1/4</strong>.' },
                    { question: 'A spinner has 3 equal sections. P(landing on one) =', choices: ['1/2', '1/3', '1/4', '1/6'], correctIndex: 1, explanation: 'Equal sections: <strong>1/3</strong>.' },
                    { question: 'A 20 cm segment has a 5 cm red section. P(random point is red) =', choices: ['1/2', '1/3', '1/4', '1/5'], correctIndex: 2, explanation: '5/20 = <strong>1/4</strong>.' },
                    { question: 'Geometric probability always gives values between:', choices: ['−1 and 1', '0 and 1', '0 and 100', '0 and 360'], correctIndex: 1, explanation: 'Probability is always between <strong>0 and 1</strong>.' },
                ]}
            ]},

            // ---- 26. Symmetry & Nets ----
            { id: 'symmetry-nets', title: 'Symmetry & Nets', subtitle: 'Lines of symmetry and 3D nets', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Lines of Symmetry</h3><p>A <strong>line of symmetry</strong> divides a figure into two mirror-image halves. A square has 4 lines of symmetry; an equilateral triangle has 3; a circle has infinitely many.</p><h3>Nets</h3><p>A <strong>net</strong> is a 2D pattern that folds into a 3D shape. A cube net has 6 connected squares. Identifying which net folds into which solid is an important skill.</p>` },
                { type: 'generated_practice', generators: ['line-symmetry', 'identify-net'] },
                { type: 'practice', problems: [
                    { question: 'How many lines of symmetry does a rectangle (non-square) have?', choices: ['0', '1', '2', '4'], correctIndex: 2, explanation: 'A rectangle has <strong>2</strong> lines of symmetry (horizontal and vertical through center).' },
                    { question: 'How many lines of symmetry does a circle have?', choices: ['1', '4', '8', 'Infinite'], correctIndex: 3, explanation: 'A circle has <strong>infinitely many</strong> lines of symmetry.' },
                    { question: 'A cube net consists of how many squares?', choices: ['4', '5', '6', '8'], correctIndex: 2, explanation: 'A cube has 6 faces, so the net has <strong>6</strong> squares.' },
                    { question: 'A cylinder net consists of:', choices: ['2 circles and 1 rectangle', '2 rectangles and 1 circle', '3 circles', '1 circle and 1 triangle'], correctIndex: 0, explanation: 'A cylinder net: <strong>2 circles</strong> (top/bottom) and <strong>1 rectangle</strong> (lateral surface).' },
                ]}
            ]},

            // ---- 27. Geometry Review ----
            { id: 'geometry-review', title: 'Geometry Review & Problem Solving', subtitle: 'Bringing it all together', xpReward: 100, sections: [
                { type: 'text', content: `<h3>Comprehensive Review</h3><p>This final lesson covers the major concepts of the Geometry path: angle relationships, triangle properties, area and volume formulas, coordinate geometry, and transformations.</p>` },
                { type: 'generated_practice', generators: ['find-hypotenuse'] },
                { type: 'generated_practice', generators: ['distance-formula'] },
                { type: 'generated_practice', generators: ['interior-angle-sum'] },
                { type: 'generated_practice', generators: ['sector-area-calc'] },
                { type: 'practice', problems: [
                    { question: 'The Pythagorean theorem applies to:', choices: ['All triangles', 'Right triangles only', 'Equilateral triangles', 'Isosceles triangles'], correctIndex: 1, explanation: 'a² + b² = c² applies to <strong>right triangles only</strong>.' },
                    { question: 'Interior angles of a hexagon sum to:', choices: ['540°', '720°', '900°', '1080°'], correctIndex: 1, explanation: '(6−2)×180° = <strong>720°</strong>.' },
                    { question: 'Volume of a cone with r=3, h=8:', choices: ['24π', '72π', '216π', '8π'], correctIndex: 0, explanation: '⅓π(9)(8) = <strong>24π</strong>.' },
                    { question: 'Two similar figures have scale factor 5. Area ratio is:', choices: ['5', '10', '25', '125'], correctIndex: 2, explanation: 'Area ratio = 5² = <strong>25</strong>.' },
                    { question: 'Reflect (−2, 5) over the x-axis:', choices: ['(2, 5)', '(−2, −5)', '(2, −5)', '(−2, 5)'], correctIndex: 1, explanation: 'Over x-axis: y flips → <strong>(−2, −5)</strong>.' },
                ]}
            ]},
        ]
    },
    // ========================================================
    // TRIGONOMETRY PATH (27 Lessons)
    // ========================================================
    trigonometry: {
        name: 'Trigonometry Path',
        icon: '📊',
        lessons: [

            // ---- 1. Intro to Trigonometry ----
            { id: 'intro-trig', title: 'Introduction to Trigonometry', subtitle: 'Angles and right triangles', xpReward: 30, sections: [
                { type: 'text', content: `<h3>What Is Trigonometry?</h3><p>Trigonometry studies relationships between <strong>angles</strong> and <strong>sides</strong> of triangles. The three primary ratios for a right triangle are:</p><p><strong>sin θ = opposite / hypotenuse</strong></p><p><strong>cos θ = adjacent / hypotenuse</strong></p><p><strong>tan θ = opposite / adjacent</strong></p><p>Remember: <strong>SOH-CAH-TOA</strong>.</p>` },
                { type: 'example', title: 'Identifying Sides', content: `<p>In a right triangle with angle θ, the side across from θ is the <strong>opposite</strong>, the side next to θ (not the hypotenuse) is the <strong>adjacent</strong>, and the longest side opposite the right angle is the <strong>hypotenuse</strong>.</p>` },
                { type: 'generated_practice', generators: ['sohcahtoa-which-func'] },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p>SOH-CAH-TOA is your best friend. The hypotenuse is always the longest side, opposite the 90° angle. Which side is "opposite" or "adjacent" depends on which angle you're looking at.</p>` },
                { type: 'practice', problems: [
                    { question: 'sin θ equals:', choices: ['adjacent/hypotenuse', 'opposite/hypotenuse', 'opposite/adjacent', 'hypotenuse/opposite'], correctIndex: 1, explanation: 'SOH: sin = <strong>opposite / hypotenuse</strong>.' },
                    { question: 'cos θ equals:', choices: ['opposite/hypotenuse', 'adjacent/hypotenuse', 'opposite/adjacent', 'hypotenuse/adjacent'], correctIndex: 1, explanation: 'CAH: cos = <strong>adjacent / hypotenuse</strong>.' },
                    { question: 'tan θ equals:', choices: ['adjacent/opposite', 'opposite/hypotenuse', 'opposite/adjacent', 'adjacent/hypotenuse'], correctIndex: 2, explanation: 'TOA: tan = <strong>opposite / adjacent</strong>.' },
                    { question: 'Which trig ratio uses the opposite side and hypotenuse?', choices: ['cos', 'tan', 'sin', 'cot'], correctIndex: 2, explanation: '<strong>sin θ</strong> = opposite / hypotenuse.' },
                ]}
            ]},

            // ---- 2. Trig Ratios & Evaluation ----
            { id: 'trig-ratios', title: 'Evaluating Trig Ratios', subtitle: 'Finding sin, cos, tan from triangles', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Computing Trig Ratios</h3><p>Given a right triangle with specific side lengths, you can compute the exact trig ratios for any acute angle.</p><p>If the sides are 3-4-5 and θ is opposite the side of length 3: sin θ = 3/5, cos θ = 4/5, tan θ = 3/4.</p>` },
                { type: 'generated_practice', generators: ['trig-ratio-from-sides'] },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p>Always identify which angle you're working with first. The "opposite" and "adjacent" sides switch depending on the angle.</p>` },
                { type: 'practice', problems: [
                    { question: 'Right triangle: opposite = 5, hypotenuse = 13. sin θ =', choices: ['5/13', '12/13', '5/12', '13/5'], correctIndex: 0, explanation: 'sin = opposite/hypotenuse = <strong>5/13</strong>.' },
                    { question: 'Right triangle: adjacent = 8, hypotenuse = 17. cos θ =', choices: ['15/17', '8/17', '8/15', '17/8'], correctIndex: 1, explanation: 'cos = adjacent/hypotenuse = <strong>8/17</strong>.' },
                    { question: 'Right triangle: opposite = 7, adjacent = 24. tan θ =', choices: ['7/25', '24/7', '7/24', '24/25'], correctIndex: 2, explanation: 'tan = opposite/adjacent = <strong>7/24</strong>.' },
                    { question: 'If sin θ = 3/5, what is cos θ? (3-4-5 triangle)', choices: ['3/5', '4/5', '5/4', '3/4'], correctIndex: 1, explanation: 'Adjacent = 4, hypotenuse = 5. cos θ = <strong>4/5</strong>.' },
                ]}
            ]},

            // ---- 3. Finding Sides with Trig ----
            { id: 'trig-find-sides', title: 'Finding Sides with Trig', subtitle: 'Using trig to solve for unknown sides', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Solving for a Side</h3><p>When you know one side and one acute angle, use the appropriate trig ratio to find an unknown side.</p><p>Steps: 1) Label the sides relative to the known angle. 2) Pick the ratio that uses the known side and the unknown side. 3) Set up the equation and solve.</p>` },
                { type: 'example', title: 'Finding an Opposite Side', content: `<p>Angle = 35°, hypotenuse = 10. Find the opposite side.</p><p>sin 35° = x/10 → x = 10 sin 35° ≈ 10(0.574) ≈ <strong>5.74</strong>.</p>` },
                { type: 'generated_practice', generators: ['trig-find-side'] },
                { type: 'interactive_steps', title: 'Guided: Find the opposite side. Angle = 40°, adjacent = 12.', description: 'Choose the right ratio and solve.', steps: [
                    { text: 'We know adjacent and want opposite. Use {blank}', answer: 'tan', hint: 'TOA: tan = opposite/adjacent' },
                    { text: 'tan(40°) = opposite / {blank}', answer: '12', hint: 'The adjacent side is 12' },
                    { text: 'opposite = 12 × tan(40°) = 12 × {blank}', answer: '0.839', hint: 'tan(40°) ≈ 0.839' },
                    { text: 'opposite ≈ {blank}', answer: '10.1', hint: '12 × 0.839 ≈ ?' }
                ], result: 'The opposite side ≈ 10.1' },
                { type: 'practice', problems: [
                    { question: 'Angle 40°, adjacent = 12. Find opposite (use tan).', choices: ['12 tan 40°', '12 sin 40°', '12 cos 40°', '12/tan 40°'], correctIndex: 0, explanation: 'tan 40° = opp/12, so opp = <strong>12 tan 40°</strong>.' },
                    { question: 'Angle 50°, hypotenuse = 20. Find adjacent (use cos).', choices: ['20 sin 50°', '20 tan 50°', '20 cos 50°', '20/cos 50°'], correctIndex: 2, explanation: 'cos 50° = adj/20, so adj = <strong>20 cos 50°</strong>.' },
                    { question: 'Angle 60°, opposite = 9. Find hypotenuse (use sin).', choices: ['9 sin 60°', '9/sin 60°', '9 cos 60°', '9/cos 60°'], correctIndex: 1, explanation: 'sin 60° = 9/hyp, so hyp = <strong>9/sin 60°</strong>.' },
                    { question: 'Which ratio connects opposite and adjacent?', choices: ['sin', 'cos', 'tan', 'sec'], correctIndex: 2, explanation: '<strong>tan θ</strong> = opposite / adjacent.' },
                ]}
            ]},

            // ---- 4. Inverse Trig Functions ----
            { id: 'inverse-trig', title: 'Inverse Trig Functions', subtitle: 'Finding angles from ratios', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Going Backwards: Ratios → Angles</h3><p>If you know a trig ratio, use the <strong>inverse</strong> function to find the angle:</p><p>θ = sin⁻¹(ratio), θ = cos⁻¹(ratio), θ = tan⁻¹(ratio)</p><p>These are also written as arcsin, arccos, arctan.</p>` },
                { type: 'example', title: 'Finding an Angle', content: `<p>sin θ = 0.5 → θ = sin⁻¹(0.5) = <strong>30°</strong>.</p><p>tan θ = 1 → θ = tan⁻¹(1) = <strong>45°</strong>.</p>` },
                { type: 'generated_practice', generators: ['inverse-trig-eval', 'inverse-trig-range'] },
                { type: 'practice', problems: [
                    { question: 'cos θ = √3/2. θ =', choices: ['30°', '45°', '60°', '90°'], correctIndex: 0, explanation: 'cos⁻¹(√3/2) = <strong>30°</strong>.' },
                    { question: 'sin θ = √2/2. θ =', choices: ['30°', '45°', '60°', '90°'], correctIndex: 1, explanation: 'sin⁻¹(√2/2) = <strong>45°</strong>.' },
                    { question: 'tan θ = √3. θ =', choices: ['30°', '45°', '60°', '90°'], correctIndex: 2, explanation: 'tan⁻¹(√3) = <strong>60°</strong>.' },
                    { question: 'The range of sin⁻¹(x) is:', choices: ['[0°, 180°]', '[−90°, 90°]', '[0°, 360°]', '[−180°, 180°]'], correctIndex: 1, explanation: 'arcsin outputs angles in <strong>[−90°, 90°]</strong>.' },
                ]}
            ]},

            // ---- 5. Degrees & Radians ----
            { id: 'degrees-radians', title: 'Degrees & Radians', subtitle: 'Converting between angle units', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Radians</h3><p>A <strong>radian</strong> is the angle where the arc length equals the radius. One full revolution = 2π radians = 360°.</p><p>To convert: <strong>degrees → radians</strong>: multiply by π/180. <strong>Radians → degrees</strong>: multiply by 180/π.</p><p>Key values: 90° = π/2, 180° = π, 270° = 3π/2, 360° = 2π.</p>` },
                { type: 'generated_practice', generators: ['deg-to-rad', 'rad-to-deg'] },
                { type: 'interactive_steps', title: 'Guided: Convert 240° to radians', description: 'Multiply by the conversion factor π/180.', steps: [
                    { text: 'Formula: radians = degrees × π/{blank}', answer: '180', hint: 'π radians = 180°' },
                    { text: '240 × π/180 = {blank}π/180', answer: '240', hint: 'Write the numerator' },
                    { text: 'Simplify 240/180: divide both by 60 → {blank}/3', answer: '4', hint: '240 ÷ 60 = ?, 180 ÷ 60 = 3' },
                    { text: '240° = {blank}π/3 radians', answer: '4', hint: '4π/3' }
                ], result: '240° = 4π/3 radians' },
                { type: 'practice', problems: [
                    { question: 'Convert 60° to radians:', choices: ['π/6', 'π/4', 'π/3', 'π/2'], correctIndex: 2, explanation: '60 × π/180 = <strong>π/3</strong>.' },
                    { question: 'Convert π/4 to degrees:', choices: ['30°', '45°', '60°', '90°'], correctIndex: 1, explanation: '(π/4) × 180/π = <strong>45°</strong>.' },
                    { question: 'Convert 180° to radians:', choices: ['π/2', 'π', '2π', '3π/2'], correctIndex: 1, explanation: '180 × π/180 = <strong>π</strong>.' },
                    { question: '2π radians equals:', choices: ['180°', '270°', '360°', '90°'], correctIndex: 2, explanation: '2π × 180/π = <strong>360°</strong>.' },
                ]}
            ]},

            // ---- 6. Unit Circle Basics ----
            { id: 'unit-circle', title: 'The Unit Circle', subtitle: 'Coordinates and trig values', xpReward: 50, sections: [
                { type: 'text', content: `<h3>The Unit Circle</h3><p>The <strong>unit circle</strong> has radius 1 centered at the origin. For any angle θ, the point on the circle is <strong>(cos θ, sin θ)</strong>.</p><p>Key coordinates: 0° → (1,0), 90° → (0,1), 180° → (−1,0), 270° → (0,−1).</p><p>Special angles: 30° → (√3/2, 1/2), 45° → (√2/2, √2/2), 60° → (1/2, √3/2).</p>` },
                { type: 'generated_practice', generators: ['unit-circle-coords', 'quadrant-id'] },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p>x-coordinate = cos θ, y-coordinate = sin θ. Memorize the special angle values — they come up constantly!</p>` },
                { type: 'practice', problems: [
                    { question: 'On the unit circle, the x-coordinate represents:', choices: ['sin θ', 'cos θ', 'tan θ', 'sec θ'], correctIndex: 1, explanation: 'x = <strong>cos θ</strong>.' },
                    { question: 'cos 90° =', choices: ['1', '0', '−1', '√2/2'], correctIndex: 1, explanation: 'At 90°, the point is (0,1). cos 90° = <strong>0</strong>.' },
                    { question: 'sin 30° =', choices: ['√3/2', '1/2', '√2/2', '1'], correctIndex: 1, explanation: 'sin 30° = <strong>1/2</strong>.' },
                    { question: 'The unit circle has radius:', choices: ['0', '1', '2', 'π'], correctIndex: 1, explanation: 'The unit circle has radius <strong>1</strong>.' },
                ]}
            ]},

            // ---- 7. Reference Angles ----
            { id: 'reference-angles', title: 'Reference Angles', subtitle: 'Finding trig values in any quadrant', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Reference Angles</h3><p>A <strong>reference angle</strong> is the acute angle between the terminal side and the x-axis. It's always between 0° and 90°.</p><p>Q1: ref = θ. Q2: ref = 180° − θ. Q3: ref = θ − 180°. Q4: ref = 360° − θ.</p><p>The trig values use the reference angle's value, with the sign determined by the quadrant (ASTC: All, Sin, Tan, Cos).</p>` },
                { type: 'generated_practice', generators: ['find-reference-angle', 'trig-with-reference'] },
                { type: 'interactive_steps', title: 'Guided: Find sin(210°) using reference angles', description: 'Find the reference angle, then apply the quadrant sign.', steps: [
                    { text: '210° is in Quadrant {blank}', answer: '3', hint: '180° < 210° < 270°' },
                    { text: 'Reference angle = 210° − 180° = {blank}°', answer: '30', hint: 'For Q3: ref = θ − 180°' },
                    { text: 'sin(30°) = {blank}', answer: '0.5', hint: 'Special angle value' },
                    { text: 'In Q3, sin is negative. So sin(210°) = {blank}', answer: '-0.5', hint: 'Apply the negative sign' }
                ], result: 'sin(210°) = −0.5. ASTC: sin is negative in Q3!' },
                { type: 'practice', problems: [
                    { question: 'Reference angle for 150°:', choices: ['30°', '50°', '60°', '150°'], correctIndex: 0, explanation: '180° − 150° = <strong>30°</strong>.' },
                    { question: 'Reference angle for 225°:', choices: ['45°', '55°', '135°', '225°'], correctIndex: 0, explanation: '225° − 180° = <strong>45°</strong>.' },
                    { question: 'Reference angle for 315°:', choices: ['15°', '45°', '60°', '135°'], correctIndex: 1, explanation: '360° − 315° = <strong>45°</strong>.' },
                    { question: 'In which quadrants is sin θ positive?', choices: ['Q1 and Q2', 'Q1 and Q4', 'Q2 and Q3', 'Q3 and Q4'], correctIndex: 0, explanation: 'Sin is positive in <strong>Q1 and Q2</strong> (top half of unit circle).' },
                ]}
            ]},

            // ---- 8. Reciprocal Trig Functions ----
            { id: 'reciprocal-trig', title: 'Reciprocal Trig Functions', subtitle: 'csc, sec, and cot', xpReward: 45, sections: [
                { type: 'text', content: `<h3>The Reciprocals</h3><p><strong>csc θ = 1/sin θ</strong> (cosecant). <strong>sec θ = 1/cos θ</strong> (secant). <strong>cot θ = 1/tan θ = cos θ/sin θ</strong> (cotangent).</p><p>These are undefined when their denominator is zero: csc is undefined when sin = 0, sec when cos = 0, cot when sin = 0.</p>` },
                { type: 'generated_practice', generators: ['reciprocal-trig-eval'] },
                { type: 'practice', problems: [
                    { question: 'csc θ if sin θ = 3/5:', choices: ['5/3', '3/5', '4/5', '5/4'], correctIndex: 0, explanation: 'csc = 1/sin = <strong>5/3</strong>.' },
                    { question: 'sec θ if cos θ = 1/2:', choices: ['1/2', '2', '√3', '√3/2'], correctIndex: 1, explanation: 'sec = 1/cos = 1/(1/2) = <strong>2</strong>.' },
                    { question: 'cot 45° =', choices: ['0', '1', '√2', 'undefined'], correctIndex: 1, explanation: 'tan 45° = 1, so cot 45° = 1/1 = <strong>1</strong>.' },
                    { question: 'sec 90° is:', choices: ['0', '1', '−1', 'Undefined'], correctIndex: 3, explanation: 'cos 90° = 0, so sec 90° = 1/0 = <strong>undefined</strong>.' },
                ]}
            ]},

            // ---- 9. Pythagorean Identities ----
            { id: 'pythagorean-identities', title: 'Pythagorean Identities', subtitle: 'Fundamental trig relationships', xpReward: 45, sections: [
                { type: 'text', content: `<h3>The Three Pythagorean Identities</h3><p>1. <strong>sin²θ + cos²θ = 1</strong></p><p>2. <strong>tan²θ + 1 = sec²θ</strong> (divide identity 1 by cos²θ)</p><p>3. <strong>1 + cot²θ = csc²θ</strong> (divide identity 1 by sin²θ)</p><p>These hold for ALL angles, not just right triangle angles.</p>` },
                { type: 'generated_practice', generators: ['pythagorean-identity', 'reciprocal-identity'] },
                { type: 'practice', problems: [
                    { question: 'sin²θ + cos²θ =', choices: ['0', '1', '2', 'sin θ cos θ'], correctIndex: 1, explanation: 'The fundamental identity: <strong>1</strong>.' },
                    { question: 'If sin θ = 3/5, then cos²θ =', choices: ['4/25', '16/25', '9/25', '7/25'], correctIndex: 1, explanation: 'cos²θ = 1 − sin²θ = 1 − 9/25 = <strong>16/25</strong>.' },
                    { question: 'tan²θ + 1 =', choices: ['csc²θ', 'sec²θ', 'cot²θ', 'sin²θ'], correctIndex: 1, explanation: 'tan²θ + 1 = <strong>sec²θ</strong>.' },
                    { question: 'If cos θ = 5/13, find sin θ (θ in Q1):', choices: ['12/13', '8/13', '5/12', '1/13'], correctIndex: 0, explanation: 'sin²θ = 1 − 25/169 = 144/169. sin θ = <strong>12/13</strong>.' },
                ]}
            ]},

            // ---- 10. Graphing sin & cos ----
            { id: 'graphing-sin-cos', title: 'Graphing sin & cos', subtitle: 'Amplitude, period, and shifts', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Sinusoidal Graphs</h3><p>The general form: <strong>y = A sin(Bx + C) + D</strong>.</p><p><strong>Amplitude</strong> = |A| (height from center to peak). <strong>Period</strong> = 2π/|B| (length of one cycle). <strong>Phase shift</strong> = −C/B (horizontal shift). <strong>Vertical shift</strong> = D.</p>` },
                { type: 'generated_practice', generators: ['trig-amplitude', 'trig-period'] },
                { type: 'practice', problems: [
                    { question: 'Amplitude of y = 3 sin(x):', choices: ['1', '3', '6', 'π'], correctIndex: 1, explanation: 'Amplitude = |A| = <strong>3</strong>.' },
                    { question: 'Period of y = sin(2x):', choices: ['π', '2π', '4π', 'π/2'], correctIndex: 0, explanation: 'Period = 2π/|B| = 2π/2 = <strong>π</strong>.' },
                    { question: 'Vertical shift of y = cos(x) + 5:', choices: ['0', '1', '5', '−5'], correctIndex: 2, explanation: 'D = <strong>5</strong> (shifts the graph up 5 units).' },
                    { question: 'The graph of y = −sin(x) is a reflection over:', choices: ['y-axis', 'x-axis', 'Line y = 1', 'Origin'], correctIndex: 1, explanation: 'The negative flips the graph over the <strong>x-axis</strong>.' },
                ]}
            ]},

            // ---- 11. Graphing tan & Reciprocals ----
            { id: 'graphing-tan', title: 'Graphing tan & Reciprocals', subtitle: 'Asymptotes and behavior', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Tangent Graphs</h3><p>y = tan(x) has period <strong>π</strong> (not 2π!) and vertical asymptotes where cos x = 0 (at x = π/2 + nπ).</p><p>The graph passes through the origin and increases from −∞ to +∞ between each pair of asymptotes.</p><h3>Reciprocal Graphs</h3><p>csc x and sec x have vertical asymptotes where sin x = 0 and cos x = 0 respectively. They form U-shaped curves between asymptotes.</p>` },
                { type: 'practice', problems: [
                    { question: 'The period of y = tan(x) is:', choices: ['π', '2π', 'π/2', '4π'], correctIndex: 0, explanation: 'tan has period <strong>π</strong>.' },
                    { question: 'tan(x) has vertical asymptotes where:', choices: ['sin x = 0', 'cos x = 0', 'tan x = 0', 'sin x = 1'], correctIndex: 1, explanation: 'tan = sin/cos, so asymptotes where <strong>cos x = 0</strong>.' },
                    { question: 'The range of y = tan(x) is:', choices: ['[−1, 1]', '(0, ∞)', '(−∞, ∞)', '[0, 2π]'], correctIndex: 2, explanation: 'tan takes all real values: <strong>(−∞, ∞)</strong>.' },
                    { question: 'csc(x) is undefined when:', choices: ['cos x = 0', 'sin x = 0', 'tan x = 0', 'sin x = 1'], correctIndex: 1, explanation: 'csc = 1/sin, undefined when <strong>sin x = 0</strong>.' },
                ]}
            ]},

            // ---- 12. Solving Basic Trig Equations ----
            { id: 'trig-equations', title: 'Solving Trig Equations', subtitle: 'Finding all solutions', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Solving Trig Equations</h3><p>To solve equations like sin θ = ½: (1) find the reference angle using inverse trig, (2) determine which quadrants give a positive/negative result, (3) write all solutions.</p><p>sin θ = ½ → reference angle = 30°. Sin is positive in Q1 and Q2, so θ = 30° or 150° (plus full rotations: + 360°n).</p>` },
                { type: 'generated_practice', generators: ['solve-trig-eq-basic'] },
                { type: 'practice', problems: [
                    { question: 'cos θ = 0. Solutions in [0°, 360°):', choices: ['0°, 180°', '90°, 270°', '0°, 360°', '45°, 225°'], correctIndex: 1, explanation: 'cos = 0 at <strong>90° and 270°</strong>.' },
                    { question: 'sin θ = −1. Solution in [0°, 360°):', choices: ['90°', '180°', '270°', '360°'], correctIndex: 2, explanation: 'sin = −1 at <strong>270°</strong> (bottom of unit circle).' },
                    { question: 'tan θ = 1. Solutions in [0°, 360°):', choices: ['45° only', '45° and 225°', '45° and 135°', '225° only'], correctIndex: 1, explanation: 'tan = 1 at <strong>45° and 225°</strong> (Q1 and Q3).' },
                    { question: 'How many solutions does sin θ = 0.5 have in [0°, 360°)?', choices: ['1', '2', '3', '4'], correctIndex: 1, explanation: 'Sin = 0.5 at 30° and 150° → <strong>2</strong> solutions.' },
                ]}
            ]},

            // ---- 13. Law of Sines ----
            { id: 'law-of-sines', title: 'Law of Sines', subtitle: 'Solving non-right triangles', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Law of Sines</h3><p>For any triangle with sides a, b, c opposite angles A, B, C:</p><p style="text-align:center;"><strong>a/sin A = b/sin B = c/sin C</strong></p><p>Use when you know: (1) two angles and one side (AAS or ASA), or (2) two sides and an angle opposite one of them (SSA — the ambiguous case).</p>` },
                { type: 'example', title: 'Finding a Side', content: `<p>A = 40°, B = 60°, a = 8. Find b. C = 180° − 40° − 60° = 80°. b/sin 60° = 8/sin 40°. b = 8 sin 60°/sin 40° ≈ <strong>10.78</strong>.</p>` },
                { type: 'interactive_steps', title: 'Guided: A = 35°, B = 70°, a = 10. Find b.', description: 'Set up and solve using the Law of Sines.', steps: [
                    { text: 'First, find C: 180° − 35° − 70° = {blank}°', answer: '75', hint: 'Angles in a triangle sum to 180°' },
                    { text: 'Set up the proportion: a/sin A = b/sin B → 10/sin 35° = b/sin {blank}°', answer: '70', hint: 'We want to find b, which is opposite angle B' },
                    { text: 'Cross multiply: b = 10 · sin 70° / sin {blank}°', answer: '35', hint: 'sin A = sin 35°' },
                    { text: 'sin 70° ≈ 0.940, sin 35° ≈ 0.574. b ≈ 10 × 0.940 / 0.574 ≈ {blank}', answer: '16.4', hint: '9.40 ÷ 0.574 ≈ ?' }
                ], result: 'b ≈ 16.4' },
                { type: 'generated_practice', generators: ['law-of-sines-calc'] },
                { type: 'tips', content: `<h4>💡 Law of Sines vs Law of Cosines</h4><p>Use <strong>Law of Sines</strong> when you have: AAS, ASA, or SSA.</p><p>Use <strong>Law of Cosines</strong> when you have: SAS or SSS.</p><p><strong>Watch out:</strong> SSA can give 0, 1, or 2 triangles (the ambiguous case)!</p>` },
                { type: 'practice', problems: [
                    { question: 'When is Law of Sines most useful?', choices: ['SAS', 'SSS', 'AAS or ASA', 'Right triangles only'], correctIndex: 2, explanation: 'Law of Sines excels with <strong>AAS or ASA</strong> configurations.' },
                    { question: 'In the Law of Sines, each ratio is:', choices: ['side/side', 'angle/angle', 'side/sin(opposite angle)', 'sin(angle)/sin(angle)'], correctIndex: 2, explanation: 'Each ratio is <strong>side / sin(opposite angle)</strong>.' },
                    { question: 'A = 30°, a = 5, B = 45°. Find b.', choices: ['5 sin 45°/sin 30°', '5 sin 30°/sin 45°', '5 cos 45°/sin 30°', '5/sin 30°'], correctIndex: 0, explanation: 'b = a sin B / sin A = <strong>5 sin 45° / sin 30°</strong>.' },
                    { question: 'If you know all three angles but no sides, can you find side lengths?', choices: ['Yes', 'No', 'Only the longest', 'Only ratios'], correctIndex: 1, explanation: '<strong>No</strong> — you need at least one side to find actual lengths.' },
                ]}
            ]},

            // ---- 14. Law of Cosines ----
            { id: 'law-of-cosines', title: 'Law of Cosines', subtitle: 'The generalized Pythagorean theorem', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Law of Cosines</h3><p>For any triangle:</p><p style="text-align:center;"><strong>c² = a² + b² − 2ab cos C</strong></p><p>Use when you know: (1) two sides and the included angle (SAS), or (2) all three sides (SSS) to find an angle.</p><p>When C = 90°, cos 90° = 0 and this reduces to the Pythagorean theorem!</p>` },
                { type: 'generated_practice', generators: ['law-of-cosines-calc', 'law-choice'] },
                { type: 'interactive_steps', title: 'Guided: a = 8, b = 5, C = 60°. Find c.', description: 'Apply c² = a² + b² − 2ab cos C.', steps: [
                    { text: 'a² = 8² = {blank}', answer: '64', hint: '8 × 8' },
                    { text: 'b² = 5² = {blank}', answer: '25', hint: '5 × 5' },
                    { text: '2ab = 2 × 8 × 5 = {blank}', answer: '80', hint: 'Multiply' },
                    { text: 'cos 60° = {blank}', answer: '0.5', hint: 'Special angle value' },
                    { text: 'c² = 64 + 25 − 80(0.5) = 89 − {blank}', answer: '40', hint: '80 × 0.5' },
                    { text: 'c² = {blank}', answer: '49', hint: '89 − 40' },
                    { text: 'c = √49 = {blank}', answer: '7', hint: 'Perfect square!' }
                ], result: 'c = 7' },
                { type: 'practice', problems: [
                    { question: 'When is Law of Cosines most useful?', choices: ['AAS', 'ASA', 'SAS or SSS', 'AAA'], correctIndex: 2, explanation: 'Law of Cosines is ideal for <strong>SAS or SSS</strong>.' },
                    { question: 'a=5, b=7, C=60°. Find c².', choices: ['74 − 70cos60°', '74 + 70cos60°', '74 − 35', '12 − 70cos60°'], correctIndex: 0, explanation: 'c² = 25 + 49 − 2(5)(7)cos60° = <strong>74 − 70cos60°</strong>.' },
                    { question: 'If C = 90°, the Law of Cosines becomes:', choices: ['Law of Sines', 'c² = a² + b²', 'c² = a² − b²', 'c = a + b'], correctIndex: 1, explanation: 'cos 90° = 0, so <strong>c² = a² + b²</strong> (Pythagorean theorem).' },
                    { question: 'To find an angle from three known sides, use:', choices: ['Law of Sines', 'Law of Cosines', 'Pythagorean theorem', 'SOHCAHTOA'], correctIndex: 1, explanation: 'With SSS, use <strong>Law of Cosines</strong> rearranged to solve for the angle.' },
                ]}
            ]},

            // ---- 15. Ambiguous Case (SSA) ----
            { id: 'ambiguous-case', title: 'The Ambiguous Case', subtitle: 'SSA and how many triangles form', xpReward: 50, sections: [
                { type: 'text', content: `<h3>SSA — The Ambiguous Case</h3><p>When you know two sides and an angle <strong>not</strong> between them (SSA), there may be 0, 1, or 2 possible triangles.</p><p>Compare the side opposite the given angle to the height (h = b sin A): if a &lt; h → 0 triangles; a = h → 1 (right triangle); h &lt; a &lt; b → 2 triangles; a ≥ b → 1 triangle.</p>` },
                { type: 'generated_practice', generators: ['ambiguous-case-count'] },
                { type: 'practice', problems: [
                    { question: 'SSA is called the "ambiguous case" because:', choices: ['It always gives 2 answers', 'It might give 0, 1, or 2 triangles', 'The angles are unknown', 'It requires a calculator'], correctIndex: 1, explanation: 'SSA can produce <strong>0, 1, or 2</strong> possible triangles.' },
                    { question: 'A=30°, b=10, a=5. How many triangles? (h = 10 sin 30° = 5)', choices: ['0', '1', '2', 'Cannot determine'], correctIndex: 1, explanation: 'a = h = 5, so exactly <strong>1</strong> right triangle.' },
                    { question: 'A=30°, b=10, a=3. How many triangles? (h = 5)', choices: ['0', '1', '2', 'Infinite'], correctIndex: 0, explanation: 'a = 3 < h = 5, so <strong>0</strong> triangles.' },
                    { question: 'A=30°, b=10, a=7. How many triangles? (h = 5)', choices: ['0', '1', '2', 'Infinite'], correctIndex: 2, explanation: 'h < a < b (5 < 7 < 10), so <strong>2</strong> triangles.' },
                ]}
            ]},

            // ---- 16. Area of a Triangle (Trig) ----
            { id: 'triangle-area-trig', title: 'Triangle Area with Trig', subtitle: 'Using sine to find area', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Trig Area Formula</h3><p>When you know two sides and the included angle: <strong>Area = ½ab sin C</strong>.</p><p>This is derived from the standard ½bh formula by noting that h = a sin C.</p><p>This works for <em>any</em> triangle — not just right triangles.</p>` },
                { type: 'example', title: 'Finding Area', content: `<p><strong>Given: a = 8, b = 6, C = 30°.</strong></p><p>Area = ½(8)(6)sin 30° = 24 × 0.5 = <strong>12</strong></p>` },
                { type: 'interactive_steps', title: 'Guided: Find area when a = 10, b = 7, C = 60°', description: 'Plug into the formula step by step.', steps: [
                    { text: 'Area = ½ · a · b · sin C = ½ · 10 · {blank} · sin 60°', answer: '7', hint: 'b = 7' },
                    { text: '½ · 10 · 7 = {blank}', answer: '35', hint: '10 × 7 ÷ 2' },
                    { text: 'sin 60° = √3/2 ≈ {blank}', answer: '0.866', hint: 'Recall the special angle value' },
                    { text: 'Area = 35 × 0.866 ≈ {blank}', answer: '30.3', hint: '35 × 0.866 ≈ ?' }
                ], result: 'Area ≈ 30.3 square units' },
                { type: 'generated_practice', generators: ['triangle-area-trig'] },
                { type: 'tips', content: `<h4>💡 When to Use This Formula</h4><p>Use Area = ½ab sin C whenever you have <strong>SAS</strong> (two sides and the included angle).</p><p>If C = 90°, sin 90° = 1, and the formula simplifies to the familiar ½bh.</p><p>If C = 0° or 180°, the area is 0 — the triangle degenerates to a line!</p>` },
                { type: 'practice', problems: [
                    { question: 'a=8, b=6, C=30°. Area =', choices: ['12', '24', '48', '6'], correctIndex: 0, explanation: '½(8)(6)sin 30° = 24 × 0.5 = <strong>12</strong>.' },
                    { question: 'a=10, b=10, C=90°. Area =', choices: ['50', '100', '25', '200'], correctIndex: 0, explanation: '½(10)(10)sin 90° = 50 × 1 = <strong>50</strong>.' },
                    { question: 'The formula Area = ½ab sin C requires which piece of info?', choices: ['Three sides', 'Two sides and included angle', 'One side and two angles', 'Three angles'], correctIndex: 1, explanation: 'You need <strong>two sides and the included angle</strong> (SAS).' },
                    { question: 'If C = 0°, the area would be:', choices: ['Maximum', '0', '½ab', 'Undefined'], correctIndex: 1, explanation: 'sin 0° = 0, so area = 0 (the triangle collapses to a line).' },
                ]}
            ]},

            // ---- 17. Sum & Difference Identities ----
            { id: 'sum-difference', title: 'Sum & Difference Identities', subtitle: 'sin(A±B) and cos(A±B)', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Sum & Difference Formulas</h3><p><strong>sin(A + B) = sin A cos B + cos A sin B</strong></p><p><strong>sin(A − B) = sin A cos B − cos A sin B</strong></p><p><strong>cos(A + B) = cos A cos B − sin A sin B</strong></p><p><strong>cos(A − B) = cos A cos B + sin A sin B</strong></p><p>These let you find exact values for angles like 75° = 45° + 30°.</p>` },
                { type: 'example', title: 'Finding sin 75°', content: `<p>sin 75° = sin(45° + 30°) = sin45·cos30 + cos45·sin30</p><p>= (√2/2)(√3/2) + (√2/2)(1/2) = √6/4 + √2/4 = <strong>(√6 + √2)/4</strong></p>` },
                { type: 'interactive_steps', title: 'Guided: Find cos 15° using cos(45° − 30°)', description: 'Apply the cosine difference formula.', steps: [
                    { text: 'cos(A − B) = cos A cos B + sin A sin B. Here A = 45°, B = {blank}', answer: '30', hint: '45° − 30° = 15°' },
                    { text: 'cos 45° = √2/2, cos 30° = {blank}', answer: '√3/2', hint: 'Recall the 30-60-90 triangle values' },
                    { text: 'sin 45° = √2/2, sin 30° = {blank}', answer: '1/2', hint: 'sin 30° is the simplest special value' },
                    { text: 'cos45·cos30 = (√2/2)(√3/2) = {blank}', answer: '√6/4', hint: '√2 × √3 = √6, and 2 × 2 = 4' },
                    { text: 'sin45·sin30 = (√2/2)(1/2) = {blank}', answer: '√2/4', hint: '√2 × 1 = √2, denominator = 4' }
                ], result: 'cos 15° = √6/4 + √2/4 = (√6 + √2)/4' },
                { type: 'generated_practice', generators: ['sum-formula-apply'] },
                { type: 'tips', content: `<h4>💡 Memory Tricks</h4><p><strong>Sine:</strong> "sine-cosine-cosine-sine" — sin(A±B) mixes sin and cos, and the ± sign matches.</p><p><strong>Cosine:</strong> "cosine-cosine-sine-sine" — cos(A±B) pairs same functions, but the sign <em>flips</em> (+ becomes − and vice versa).</p>` },
                { type: 'practice', problems: [
                    { question: 'sin(A + B) =', choices: ['sin A sin B + cos A cos B', 'sin A cos B + cos A sin B', 'sin A cos B − cos A sin B', 'cos A cos B − sin A sin B'], correctIndex: 1, explanation: '<strong>sin A cos B + cos A sin B</strong>.' },
                    { question: 'cos(A + B) =', choices: ['cos A cos B − sin A sin B', 'cos A cos B + sin A sin B', 'sin A cos B + cos A sin B', 'sin A sin B − cos A cos B'], correctIndex: 0, explanation: '<strong>cos A cos B − sin A sin B</strong>.' },
                    { question: 'sin 75° = sin(45° + 30°) = ?', choices: ['(√6+√2)/4', '(√6−√2)/4', '(√3+1)/4', '√3/2'], correctIndex: 0, explanation: 'sin45cos30 + cos45sin30 = (√2/2)(√3/2) + (√2/2)(1/2) = <strong>(√6+√2)/4</strong>.' },
                    { question: 'cos(90° − θ) equals:', choices: ['cos θ', 'sin θ', '−sin θ', '−cos θ'], correctIndex: 1, explanation: 'This is a cofunction identity: cos(90°−θ) = <strong>sin θ</strong>.' },
                ]}
            ]},

            // ---- 18. Double-Angle Identities ----
            { id: 'double-angle', title: 'Double-Angle Identities', subtitle: 'sin 2θ and cos 2θ', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Double-Angle Formulas</h3><p><strong>sin 2θ = 2 sin θ cos θ</strong></p><p><strong>cos 2θ = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ</strong></p><p><strong>tan 2θ = 2tan θ / (1 − tan²θ)</strong></p><p>These are derived by applying the sum formulas with A = B = θ.</p>` },
                { type: 'example', title: 'Using Double-Angle Formulas', content: `<p><strong>Given sin θ = 3/5 and cos θ = 4/5, find sin 2θ and cos 2θ:</strong></p><p>sin 2θ = 2(3/5)(4/5) = 24/25</p><p>cos 2θ = (4/5)² − (3/5)² = 16/25 − 9/25 = <strong>7/25</strong></p>` },
                { type: 'interactive_steps', title: 'Guided: Find cos 2θ if sin θ = 5/13', description: 'Use the identity cos 2θ = 1 − 2sin²θ.', steps: [
                    { text: 'First, find sin²θ: (5/13)² = {blank}', answer: '25/169', hint: 'Square the numerator and denominator separately' },
                    { text: 'Plug into cos 2θ = 1 − 2sin²θ: 1 − 2({blank})', answer: '25/169', hint: 'Use your sin²θ value from step 1' },
                    { text: '2 × 25/169 = {blank}', answer: '50/169', hint: 'Multiply 2 × 25 = 50, keep denominator' },
                    { text: '1 − 50/169 = 169/169 − 50/169 = {blank}', answer: '119/169', hint: '169 − 50 = ?' }
                ], result: 'cos 2θ = 119/169' },
                { type: 'generated_practice', generators: ['trig-double-angle'] },
                { type: 'tips', content: `<h4>💡 Which cos 2θ Form to Use?</h4><p>If you know <strong>only sin θ</strong>, use: cos 2θ = 1 − 2sin²θ.</p><p>If you know <strong>only cos θ</strong>, use: cos 2θ = 2cos²θ − 1.</p><p>If you know <strong>both</strong>, use: cos 2θ = cos²θ − sin²θ.</p>` },
                { type: 'practice', problems: [
                    { question: 'sin 2θ =', choices: ['2 sin θ', '2 sin θ cos θ', 'sin²θ + cos²θ', 'sin θ + cos θ'], correctIndex: 1, explanation: '<strong>2 sin θ cos θ</strong>.' },
                    { question: 'cos 2θ = (choose one form)', choices: ['2cos²θ − 1', '2sin²θ + 1', 'cos θ − sin θ', '2cos θ sin θ'], correctIndex: 0, explanation: '<strong>2cos²θ − 1</strong> (also = cos²θ − sin²θ = 1 − 2sin²θ).' },
                    { question: 'If sin θ = 3/5, cos θ = 4/5, then sin 2θ =', choices: ['6/5', '24/25', '7/25', '12/25'], correctIndex: 1, explanation: 'sin 2θ = 2(3/5)(4/5) = <strong>24/25</strong>.' },
                    { question: 'If cos θ = 1/2, then cos 2θ =', choices: ['1', '0', '−1/2', '1/2'], correctIndex: 2, explanation: 'cos 2θ = 2(1/4) − 1 = 1/2 − 1 = <strong>−1/2</strong>.' },
                ]}
            ]},

            // ---- 19. Half-Angle Identities ----
            { id: 'half-angle', title: 'Half-Angle Identities', subtitle: 'Finding trig values for half angles', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Half-Angle Formulas</h3><p><strong>sin(θ/2) = ±√[(1 − cos θ)/2]</strong></p><p><strong>cos(θ/2) = ±√[(1 + cos θ)/2]</strong></p><p>The ± sign depends on the quadrant of θ/2. These formulas let you find exact values for angles like 22.5° (half of 45°) or 15° (half of 30°).</p>` },
                { type: 'generated_practice', generators: ['half-angle-eval'] },
                { type: 'practice', problems: [
                    { question: 'sin(θ/2) = ±√[?]', choices: ['(1+cosθ)/2', '(1−cosθ)/2', '(sinθ)/2', '(cosθ−1)/2'], correctIndex: 1, explanation: 'sin(θ/2) = ±√[<strong>(1−cosθ)/2</strong>].' },
                    { question: 'To find sin 15° using half-angle, start with:', choices: ['θ = 15°', 'θ = 30°', 'θ = 45°', 'θ = 60°'], correctIndex: 1, explanation: '15° = 30°/2, so use θ = <strong>30°</strong>.' },
                    { question: 'cos(22.5°) uses which angle as θ?', choices: ['11.25°', '22.5°', '45°', '90°'], correctIndex: 2, explanation: '22.5° = 45°/2, so θ = <strong>45°</strong>.' },
                    { question: 'The ± in half-angle formulas is determined by:', choices: ['The original angle', 'The quadrant of the half angle', 'Always positive', 'Always negative'], correctIndex: 1, explanation: 'Choose + or − based on the <strong>quadrant of the half angle</strong>.' },
                ]}
            ]},

            // ---- 20. Trig Identities & Simplification ----
            { id: 'trig-simplification', title: 'Trig Simplification', subtitle: 'Proving and simplifying identities', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Simplifying with Identities</h3><p>Common strategies: (1) Convert everything to sin and cos. (2) Factor expressions. (3) Use Pythagorean identities to combine terms. (4) Multiply by conjugates.</p><p>When proving identities, work on one side only until it matches the other side.</p>` },
                { type: 'generated_practice', generators: ['simplify-trig-expr'] },
                { type: 'practice', problems: [
                    { question: 'Simplify: sin²θ + cos²θ + tan²θ', choices: ['1 + tan²θ', 'sec²θ', '2', 'Both A and B'], correctIndex: 3, explanation: 'sin²θ + cos²θ = 1, so 1 + tan²θ = sec²θ. <strong>Both A and B</strong>.' },
                    { question: 'Simplify: (1 − cos²θ)/sinθ', choices: ['sin θ', 'cos θ', 'tan θ', '1'], correctIndex: 0, explanation: '1 − cos²θ = sin²θ. sin²θ/sinθ = <strong>sin θ</strong>.' },
                    { question: 'sec θ cos θ =', choices: ['0', '1', 'sin θ', 'tan θ'], correctIndex: 1, explanation: 'sec θ = 1/cos θ. (1/cos θ)(cos θ) = <strong>1</strong>.' },
                    { question: 'tan θ / sec θ =', choices: ['sin θ', 'cos θ', 'csc θ', 'cot θ'], correctIndex: 0, explanation: '(sinθ/cosθ)/(1/cosθ) = sinθ/cosθ × cosθ = <strong>sin θ</strong>.' },
                ]}
            ]},

            // ---- 21. Polar Coordinates ----
            { id: 'polar-coords', title: 'Polar Coordinates', subtitle: 'Converting between rectangular and polar', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Polar vs. Rectangular</h3><p>Rectangular: (x, y). Polar: (r, θ) where r = distance from origin, θ = angle from positive x-axis.</p><p><strong>Rectangular → Polar</strong>: r = √(x²+y²), θ = tan⁻¹(y/x).</p><p><strong>Polar → Rectangular</strong>: x = r cos θ, y = r sin θ.</p>` },
                { type: 'generated_practice', generators: ['rect-to-polar', 'polar-to-rect'] },
                { type: 'practice', problems: [
                    { question: 'Convert (3, 4) to polar: r =', choices: ['5', '7', '12', '25'], correctIndex: 0, explanation: 'r = √(9+16) = √25 = <strong>5</strong>.' },
                    { question: 'Convert (5, 60°) to rectangular: x =', choices: ['5', '2.5', '5√3/2', '5√2/2'], correctIndex: 1, explanation: 'x = 5 cos 60° = 5(1/2) = <strong>2.5</strong>.' },
                    { question: 'In polar coordinates, r represents:', choices: ['The x-coordinate', 'The y-coordinate', 'Distance from origin', 'Angle from x-axis'], correctIndex: 2, explanation: 'r is the <strong>distance from the origin</strong>.' },
                    { question: 'θ in polar coordinates is measured from:', choices: ['The y-axis', 'The positive x-axis', 'The origin', 'North'], correctIndex: 1, explanation: 'θ is measured from the <strong>positive x-axis</strong>.' },
                ]}
            ]},

            // ---- 22. Vectors ----
            { id: 'vectors', title: 'Vectors', subtitle: 'Magnitude, direction, and operations', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Vectors</h3><p>A <strong>vector</strong> has both magnitude (length) and direction. Written as ⟨a, b⟩ or with an arrow.</p><p><strong>Magnitude</strong>: |v| = √(a² + b²). <strong>Addition</strong>: ⟨a,b⟩ + ⟨c,d⟩ = ⟨a+c, b+d⟩. <strong>Scalar multiplication</strong>: k⟨a,b⟩ = ⟨ka, kb⟩.</p>` },
                { type: 'generated_practice', generators: ['vector-magnitude', 'vector-add'] },
                { type: 'interactive_steps', title: 'Guided: Find magnitude and direction of v = ⟨3, 4⟩', description: 'Use the magnitude formula and inverse tangent.', steps: [
                    { text: '|v| = √(3² + 4²) = √(9 + {blank})', answer: '16', hint: '4² = 16' },
                    { text: '|v| = √{blank}', answer: '25', hint: '9 + 16' },
                    { text: '|v| = {blank}', answer: '5', hint: '√25' },
                    { text: 'Direction: θ = tan⁻¹(4/3) ≈ {blank}°', answer: '53.1', hint: 'tan⁻¹(1.333...) ≈ ?' }
                ], result: '|v| = 5, θ ≈ 53.1° above the positive x-axis' },
                { type: 'practice', problems: [
                    { question: 'Magnitude of ⟨3, 4⟩:', choices: ['5', '7', '12', '1'], correctIndex: 0, explanation: '√(9+16) = √25 = <strong>5</strong>.' },
                    { question: '⟨2, 5⟩ + ⟨3, −1⟩ =', choices: ['⟨5, 4⟩', '⟨5, 6⟩', '⟨−1, 6⟩', '⟨6, 4⟩'], correctIndex: 0, explanation: '⟨2+3, 5+(−1)⟩ = <strong>⟨5, 4⟩</strong>.' },
                    { question: '3⟨1, −2⟩ =', choices: ['⟨3, −6⟩', '⟨3, −2⟩', '⟨4, 1⟩', '⟨1, −6⟩'], correctIndex: 0, explanation: '⟨3(1), 3(−2)⟩ = <strong>⟨3, −6⟩</strong>.' },
                    { question: 'A vector with magnitude 0 is called:', choices: ['Unit vector', 'Zero vector', 'Normal vector', 'Basis vector'], correctIndex: 1, explanation: 'A vector with magnitude 0 is the <strong>zero vector</strong>.' },
                ]}
            ]},

            // ---- 23. Dot Product ----
            { id: 'dot-product', title: 'The Dot Product', subtitle: 'Combining vectors and finding angles', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Dot Product</h3><p><strong>u · v = u₁v₁ + u₂v₂</strong>. Also: u · v = |u||v| cos θ.</p><p>If u · v = 0, the vectors are <strong>perpendicular</strong> (orthogonal). The dot product returns a <strong>scalar</strong>, not a vector.</p>` },
                { type: 'generated_practice', generators: ['dot-product-calc'] },
                { type: 'practice', problems: [
                    { question: '⟨2,3⟩ · ⟨4,−1⟩ =', choices: ['5', '11', '8', '−5'], correctIndex: 0, explanation: '2(4) + 3(−1) = 8 − 3 = <strong>5</strong>.' },
                    { question: 'If u · v = 0, the vectors are:', choices: ['Parallel', 'Perpendicular', 'Equal', 'Opposite'], correctIndex: 1, explanation: 'Dot product = 0 means <strong>perpendicular</strong>.' },
                    { question: 'The dot product produces:', choices: ['A vector', 'A scalar', 'An angle', 'A matrix'], correctIndex: 1, explanation: 'The dot product is a <strong>scalar</strong> (a number).' },
                    { question: '⟨1,0⟩ · ⟨0,1⟩ =', choices: ['1', '0', '−1', '2'], correctIndex: 1, explanation: '1(0) + 0(1) = <strong>0</strong> (they are perpendicular).' },
                ]}
            ]},

            // ---- 24. Sinusoidal Modeling ----
            { id: 'sinusoidal-modeling', title: 'Sinusoidal Modeling', subtitle: 'Real-world periodic functions', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Modeling with Sinusoidal Functions</h3><p>Many real-world phenomena are periodic: tides, temperatures, sound waves, daylight hours. Model with y = A sin(Bx + C) + D or y = A cos(Bx + C) + D.</p><p>To build a model: amplitude = (max − min)/2, vertical shift = (max + min)/2, period = 2π/B.</p>` },
                { type: 'generated_practice', generators: ['sinusoidal-from-context'] },
                { type: 'practice', problems: [
                    { question: 'Temperature ranges from 20°F to 80°F. Amplitude =', choices: ['30', '50', '60', '100'], correctIndex: 0, explanation: '(80−20)/2 = <strong>30</strong>.' },
                    { question: 'Same temperature range. Vertical shift (midline) =', choices: ['20', '30', '50', '80'], correctIndex: 2, explanation: '(80+20)/2 = <strong>50</strong>.' },
                    { question: 'A Ferris wheel completes one revolution every 40 seconds. Period =', choices: ['20s', '40s', '80s', '2π'], correctIndex: 1, explanation: 'One full cycle = <strong>40 seconds</strong>.' },
                    { question: 'For period = 40s, B =', choices: ['π/20', '2π/40 = π/20', '40/2π', '20π'], correctIndex: 1, explanation: 'B = 2π/period = 2π/40 = <strong>π/20</strong>.' },
                ]}
            ]},

            // ---- 25. Parametric Equations ----
            { id: 'parametric', title: 'Parametric Equations', subtitle: 'Describing motion with a parameter', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Parametric Equations</h3><p>Instead of y = f(x), we write x = f(t) and y = g(t), where t is a <strong>parameter</strong> (often time).</p><p>To convert to rectangular, solve one equation for t and substitute into the other, or use trig identities if x = cos t, y = sin t type.</p>` },
                { type: 'generated_practice', generators: ['parametric-to-rect'] },
                { type: 'practice', problems: [
                    { question: 'x = 2t, y = t + 1. Eliminate t:', choices: ['y = x/2 + 1', 'y = 2x + 1', 'y = x + 2', 'y = x − 1'], correctIndex: 0, explanation: 't = x/2, so y = x/2 + 1. <strong>y = x/2 + 1</strong>.' },
                    { question: 'x = cos t, y = sin t traces out a:', choices: ['Line', 'Parabola', 'Circle', 'Hyperbola'], correctIndex: 2, explanation: 'cos²t + sin²t = 1 → x² + y² = 1, a <strong>circle</strong>.' },
                    { question: 'x = 3cos t, y = 3sin t traces a circle with radius:', choices: ['1', '3', '9', '6'], correctIndex: 1, explanation: 'x²+y² = 9cos²t + 9sin²t = 9 → radius <strong>3</strong>.' },
                    { question: 'The parameter t often represents:', choices: ['Distance', 'Time', 'Angle', 'All of these'], correctIndex: 3, explanation: 't can represent <strong>all of these</strong> depending on context.' },
                ]}
            ]},

            // ---- 26. Complex Numbers in Trig Form ----
            { id: 'complex-trig', title: 'Complex Numbers in Trig Form', subtitle: 'Modulus, argument, and DeMoivre\'s theorem', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Trigonometric Form of Complex Numbers</h3><p>A complex number a + bi can be written as <strong>r(cos θ + i sin θ)</strong>, where r = √(a²+b²) is the modulus and θ = tan⁻¹(b/a) is the argument.</p><h3>DeMoivre's Theorem</h3><p>[r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ). This makes computing powers of complex numbers elegant.</p>` },
                { type: 'generated_practice', generators: ['complex-to-trig', 'demoivre-power'] },
                { type: 'practice', problems: [
                    { question: 'Modulus of 3 + 4i:', choices: ['5', '7', '12', '1'], correctIndex: 0, explanation: '|3+4i| = √(9+16) = <strong>5</strong>.' },
                    { question: 'By DeMoivre\'s, [2(cos30°+isin30°)]³ =', choices: ['8(cos90°+isin90°)', '6(cos90°+isin90°)', '8(cos30°+isin30°)', '2(cos90°+isin90°)'], correctIndex: 0, explanation: '2³(cos(3×30°)+isin(3×30°)) = <strong>8(cos90°+isin90°)</strong>.' },
                    { question: 'The argument of 1 + i is:', choices: ['30°', '45°', '60°', '90°'], correctIndex: 1, explanation: 'tan⁻¹(1/1) = <strong>45°</strong>.' },
                    { question: 'The modulus is also called the:', choices: ['Argument', 'Absolute value', 'Conjugate', 'Imaginary part'], correctIndex: 1, explanation: 'The modulus is the <strong>absolute value</strong> of the complex number.' },
                ]}
            ]},

            // ---- 27. Trigonometry Review ----
            { id: 'trig-review', title: 'Trigonometry Review', subtitle: 'Comprehensive problem solving', xpReward: 100, sections: [
                { type: 'text', content: `<h3>Comprehensive Review</h3><p>This lesson pulls together all major trig topics: ratios, unit circle, identities, laws of sines and cosines, graphing, and advanced applications.</p>` },
                { type: 'generated_practice', generators: ['unit-circle-coords'] },
                { type: 'generated_practice', generators: ['law-of-cosines-calc'] },
                { type: 'generated_practice', generators: ['trig-double-angle'] },
                { type: 'generated_practice', generators: ['vector-magnitude'] },
                { type: 'practice', problems: [
                    { question: 'sin²θ + cos²θ =', choices: ['0', '1', '2', 'tan θ'], correctIndex: 1, explanation: 'Fundamental identity: <strong>1</strong>.' },
                    { question: 'Convert 270° to radians:', choices: ['π/2', 'π', '3π/2', '2π'], correctIndex: 2, explanation: '270 × π/180 = <strong>3π/2</strong>.' },
                    { question: 'Law of Sines relates:', choices: ['Sides only', 'Angles only', 'Sides to sines of opposite angles', 'Area to perimeter'], correctIndex: 2, explanation: 'a/sinA = b/sinB = c/sinC: <strong>sides to sines of opposite angles</strong>.' },
                    { question: 'Amplitude of y = −4cos(3x) + 1:', choices: ['−4', '3', '4', '1'], correctIndex: 2, explanation: 'Amplitude = |−4| = <strong>4</strong>.' },
                    { question: 'Dot product of ⟨1,2⟩ and ⟨−2,1⟩:', choices: ['0', '4', '−4', '5'], correctIndex: 0, explanation: '1(−2)+2(1) = −2+2 = <strong>0</strong> (perpendicular!).' },
                ]}
            ]},
        ]
    },
    // ========================================================
    // CALCULUS PATH (27 Lessons)
    // ========================================================
    calculus: {
        name: 'Calculus Path',
        icon: '∫',
        lessons: [

            // ---- 1. Intro to Limits ----
            { id: 'intro-limits', title: 'Introduction to Limits', subtitle: 'What a function approaches', xpReward: 30, sections: [
                { type: 'text', content: `<h3>What Is a Limit?</h3><p>A <strong>limit</strong> describes the value a function <em>approaches</em> as the input approaches some value. We write <strong>lim(x→c) f(x) = L</strong>.</p><p>The function doesn't need to equal L at x = c — it just needs to get arbitrarily close. Limits are the foundation of calculus.</p>` },
                { type: 'example', title: 'A Simple Limit', content: `<p>lim(x→3) (2x + 1) = 2(3) + 1 = <strong>7</strong>. For continuous functions, you can just substitute!</p>` },
                { type: 'generated_practice', generators: ['calc-limit-eval'] },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p>Limits ask "what does f(x) approach?" not "what does f(x) equal." For most functions you encounter at first, direct substitution works.</p>` },
                { type: 'practice', problems: [
                    { question: 'lim(x→2) (3x − 1) =', choices: ['3', '5', '7', '2'], correctIndex: 1, explanation: '3(2) − 1 = <strong>5</strong>.' },
                    { question: 'lim(x→0) (x² + 4) =', choices: ['0', '4', '16', '8'], correctIndex: 1, explanation: '0² + 4 = <strong>4</strong>.' },
                    { question: 'A limit exists even if the function is undefined at that point.', choices: ['True', 'False'], correctIndex: 0, explanation: '<strong>True</strong> — limits are about approach, not value at the point.' },
                    { question: 'lim(x→1) (x² − 1)/(x − 1) =', choices: ['0', '1', '2', 'Undefined'], correctIndex: 2, explanation: 'Factor: (x+1)(x−1)/(x−1) = x+1. At x=1: 1+1 = <strong>2</strong>.' },
                ]}
            ]},

            // ---- 2. Limit Laws & Techniques ----
            { id: 'limit-techniques', title: 'Limit Laws & Techniques', subtitle: 'Evaluating tricky limits', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Limit Laws</h3><p>Limits obey arithmetic rules: lim(f + g) = lim f + lim g, lim(cf) = c · lim f, lim(fg) = (lim f)(lim g), etc.</p><h3>Techniques for 0/0 Forms</h3><p>When substitution gives 0/0: (1) <strong>Factor and cancel</strong>. (2) <strong>Rationalize</strong> (multiply by conjugate). (3) <strong>Simplify</strong> the expression first.</p>` },
                { type: 'generated_practice', generators: ['calc-limit-concept'] },
                { type: 'practice', problems: [
                    { question: 'lim(x→3) (x²−9)/(x−3) =', choices: ['0', '3', '6', 'DNE'], correctIndex: 2, explanation: '(x+3)(x−3)/(x−3) = x+3. At x=3: <strong>6</strong>.' },
                    { question: 'lim(x→0) sin(x)/x =', choices: ['0', '1', '∞', 'DNE'], correctIndex: 1, explanation: 'This is a famous limit: <strong>1</strong>.' },
                    { question: 'If direct substitution gives 0/0, the limit:', choices: ['Is always 0', 'Does not exist', 'Requires more work', 'Is always ∞'], correctIndex: 2, explanation: '0/0 is <strong>indeterminate</strong> — use algebraic techniques to evaluate.' },
                    { question: 'lim(x→4) (x−4)/(√x−2) =', choices: ['0', '2', '4', '8'], correctIndex: 2, explanation: 'Multiply by (√x+2)/(√x+2): (x−4)(√x+2)/(x−4) = √x+2. At x=4: <strong>4</strong>.' },
                ]}
            ]},

            // ---- 3. Continuity ----
            { id: 'continuity', title: 'Continuity', subtitle: 'When functions have no breaks', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Continuity</h3><p>A function is <strong>continuous at x = c</strong> if three conditions hold: (1) f(c) is defined, (2) lim(x→c) f(x) exists, (3) lim(x→c) f(x) = f(c).</p><p>Types of discontinuity: <strong>removable</strong> (hole), <strong>jump</strong> (step), <strong>infinite</strong> (vertical asymptote).</p>` },
                { type: 'practice', problems: [
                    { question: 'For continuity at x = c, we need:', choices: ['Just f(c) defined', 'Just the limit exists', 'f(c) defined, limit exists, and they\'re equal', 'f(c) = 0'], correctIndex: 2, explanation: 'All three conditions: f(c) defined, limit exists, <strong>limit = f(c)</strong>.' },
                    { question: 'A hole in a graph is what type of discontinuity?', choices: ['Jump', 'Removable', 'Infinite', 'Oscillating'], correctIndex: 1, explanation: 'A hole is a <strong>removable</strong> discontinuity.' },
                    { question: 'A vertical asymptote is what type of discontinuity?', choices: ['Removable', 'Jump', 'Infinite', 'None'], correctIndex: 2, explanation: 'Vertical asymptotes create <strong>infinite</strong> discontinuities.' },
                    { question: 'Polynomials are continuous:', choices: ['Only at integers', 'Only on (0, ∞)', 'Everywhere', 'Nowhere'], correctIndex: 2, explanation: 'Polynomials are continuous <strong>everywhere</strong>.' },
                ]}
            ]},

            // ---- 4. Derivatives: Concept ----
            { id: 'derivative-concept', title: 'The Derivative Concept', subtitle: 'Instantaneous rate of change', xpReward: 40, sections: [
                { type: 'text', content: `<h3>What Is a Derivative?</h3><p>The <strong>derivative</strong> of f(x) at x = a is the <em>instantaneous rate of change</em> — the slope of the tangent line at that point.</p><p>Definition: f′(a) = lim(h→0) [f(a+h) − f(a)] / h.</p><p>Geometrically: the slope of the secant line becomes the slope of the tangent line as the two points get infinitely close.</p>` },
                { type: 'generated_practice', generators: ['calc-derivative-def'] },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p>Derivative = slope of tangent = instantaneous rate of change. The limit definition is the foundation, but we'll learn shortcuts next.</p>` },
                { type: 'practice', problems: [
                    { question: 'The derivative measures:', choices: ['The area under a curve', 'The instantaneous rate of change', 'The total change', 'The average value'], correctIndex: 1, explanation: 'The derivative gives the <strong>instantaneous rate of change</strong>.' },
                    { question: 'Geometrically, f′(a) is the slope of:', choices: ['The secant line', 'The tangent line at x=a', 'The x-axis', 'The y-axis'], correctIndex: 1, explanation: 'f′(a) = slope of the <strong>tangent line</strong> at x = a.' },
                    { question: 'Using the limit definition, f′(x) for f(x)=x² is:', choices: ['x', '2x', 'x²', '2'], correctIndex: 1, explanation: 'lim(h→0) [(x+h)²−x²]/h = lim(h→0)(2x+h) = <strong>2x</strong>.' },
                    { question: 'If f(x) = 5 (constant), then f′(x) =', choices: ['5', '1', '0', 'Undefined'], correctIndex: 2, explanation: 'The derivative of a constant is <strong>0</strong>.' },
                ]}
            ]},

            // ---- 5. Power Rule ----
            { id: 'power-rule', title: 'The Power Rule', subtitle: 'Differentiating xⁿ', xpReward: 45, sections: [
                { type: 'text', content: `<h3>The Power Rule</h3><p>If f(x) = xⁿ, then <strong>f′(x) = nxⁿ⁻¹</strong>.</p><p>Combined with the constant multiple rule (d/dx[cf] = c·f′) and the sum rule (d/dx[f+g] = f′+g′), you can differentiate any polynomial.</p>` },
                { type: 'example', title: 'Applying the Power Rule', content: `<p>f(x) = 3x⁴ − 2x² + 7x − 5. f′(x) = 12x³ − 4x + 7.</p>` },
                { type: 'generated_practice', generators: ['calc-power-rule', 'calc-diff-rules'] },
                { type: 'interactive_steps', title: 'Guided: Differentiate f(x) = 5x⁴ − 3x² + 7x − 2', description: 'Apply the power rule term by term.', steps: [
                    { text: 'd/dx [5x⁴] = 5 · 4 · x³ = {blank}x³', answer: '20', hint: '5 × 4' },
                    { text: 'd/dx [−3x²] = −3 · 2 · x = {blank}x', answer: '-6', hint: '−3 × 2' },
                    { text: 'd/dx [7x] = {blank}', answer: '7', hint: 'x¹ → 1·x⁰ = 1, times coefficient 7' },
                    { text: 'd/dx [−2] = {blank}', answer: '0', hint: 'Derivative of a constant' },
                    { text: 'f′(x) = 20x³ − 6x + {blank}', answer: '7', hint: 'Combine all terms' }
                ], result: 'f′(x) = 20x³ − 6x + 7' },
                { type: 'practice', problems: [
                    { question: 'd/dx [x⁵] =', choices: ['5x⁴', '5x⁵', 'x⁴', '4x⁵'], correctIndex: 0, explanation: '5x⁵⁻¹ = <strong>5x⁴</strong>.' },
                    { question: 'd/dx [4x³] =', choices: ['12x²', '4x²', '12x³', '3x²'], correctIndex: 0, explanation: '4·3x² = <strong>12x²</strong>.' },
                    { question: 'd/dx [x] =', choices: ['0', '1', 'x', '1/x'], correctIndex: 1, explanation: 'x = x¹, so 1·x⁰ = <strong>1</strong>.' },
                    { question: 'd/dx [7] =', choices: ['7', '1', '0', '7x'], correctIndex: 2, explanation: 'Derivative of a constant = <strong>0</strong>.' },
                ]}
            ]},

            // ---- 6. Product Rule ----
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

            // ---- 7. Quotient Rule ----
            { id: 'quotient-rule', title: 'The Quotient Rule', subtitle: 'Differentiating fractions', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Quotient Rule</h3><p>If h(x) = f(x)/g(x), then:</p><p style="text-align:center;"><strong>h′(x) = [f′(x)g(x) − f(x)g′(x)] / [g(x)]²</strong></p><p>Memory: "lo d-hi minus hi d-lo, all over lo squared."</p>` },
                { type: 'generated_practice', generators: ['calc-quotient-rule'] },
                { type: 'interactive_steps', title: 'Guided: Differentiate h(x) = x² / (x + 1)', description: 'Apply the quotient rule: (f′g − fg′) / g².', steps: [
                    { text: 'Let f = x², g = x + 1. f′ = {blank}', answer: '2x', hint: 'Power rule on x²' },
                    { text: 'g′ = {blank}', answer: '1', hint: 'd/dx of (x + 1)' },
                    { text: 'Numerator: f′g − fg′ = 2x(x+1) − x²({blank})', answer: '1', hint: 'Plug in g′' },
                    { text: '= 2x² + 2x − x² = {blank} + 2x', answer: 'x²', hint: 'Combine 2x² − x²' },
                    { text: 'Denominator: g² = {blank}', answer: '(x+1)²', hint: 'Square the denominator' }
                ], result: 'h′(x) = (x² + 2x) / (x + 1)²' },
                { type: 'practice', problems: [
                    { question: 'd/dx [x/(x+1)] at the numerator calculation:', choices: ['1·(x+1) − x·1', '1·(x+1) + x·1', 'x·1 − 1·(x+1)', '(x+1)/x²'], correctIndex: 0, explanation: 'Numerator: f′g − fg′ = <strong>1·(x+1) − x·1</strong> = 1.' },
                    { question: 'The quotient rule denominator is always:', choices: ['f(x)²', 'g(x)²', 'f(x)g(x)', '[f(x)+g(x)]²'], correctIndex: 1, explanation: 'Denominator is <strong>[g(x)]²</strong>.' },
                    { question: 'd/dx [sin x / x] =', choices: ['(x cos x − sin x)/x²', 'cos x / x', '(cos x − sin x)/x', 'sin x / x²'], correctIndex: 0, explanation: '(cos(x)·x − sin(x)·1)/x² = <strong>(x cos x − sin x)/x²</strong>.' },
                    { question: 'An alternative to the quotient rule: rewrite f/g as:', choices: ['f + g⁻¹', 'f · g⁻¹ and use product rule', 'f − g', 'f · g'], correctIndex: 1, explanation: 'You can write f/g = f · g⁻¹ and use the <strong>product rule</strong> with chain rule.' },
                ]}
            ]},

            // ---- 8. Chain Rule ----
            { id: 'chain-rule', title: 'The Chain Rule', subtitle: 'Differentiating compositions', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Chain Rule</h3><p>If h(x) = f(g(x)), then <strong>h′(x) = f′(g(x)) · g′(x)</strong>.</p><p>"Derivative of the outer function (evaluated at the inner) times derivative of the inner."</p><p>This is probably the most-used derivative rule in calculus!</p>` },
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

            // ---- 9. Implicit Differentiation ----
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

            // ---- 10. Applications: Increasing/Decreasing & Extrema ----
            { id: 'increasing-decreasing', title: 'Increasing, Decreasing & Extrema', subtitle: 'First derivative test', xpReward: 50, sections: [
                { type: 'text', content: `<h3>First Derivative Test</h3><p>If f′(x) > 0 on an interval → f is <strong>increasing</strong>. If f′(x) < 0 → f is <strong>decreasing</strong>.</p><p><strong>Critical points</strong>: where f′(x) = 0 or undefined. At a critical point, if f′ changes from + to −, it's a <strong>local max</strong>. If − to +, it's a <strong>local min</strong>.</p>` },
                { type: 'generated_practice', generators: ['calc-increasing-decreasing'] },
                { type: 'practice', problems: [
                    { question: 'f(x) is increasing when f′(x) is:', choices: ['Zero', 'Positive', 'Negative', 'Undefined'], correctIndex: 1, explanation: 'f is increasing when f′(x) > 0 (<strong>positive</strong>).' },
                    { question: 'A critical point occurs when f′(x) =', choices: ['1', '0 or undefined', 'Positive', 'f(x)'], correctIndex: 1, explanation: 'Critical points: where f′(x) = <strong>0 or undefined</strong>.' },
                    { question: 'f′ changes from + to − at x=c. This is a:', choices: ['Local min', 'Local max', 'Inflection point', 'Saddle point'], correctIndex: 1, explanation: 'Positive to negative → <strong>local max</strong>.' },
                    { question: 'f(x) = x² has a critical point at x=0. It is a:', choices: ['Local max', 'Local min', 'Neither', 'Both'], correctIndex: 1, explanation: 'f′(x)=2x: negative before 0, positive after → <strong>local min</strong>.' },
                ]}
            ]},

            // ---- 11. Related Rates ----
            { id: 'related-rates', title: 'Related Rates', subtitle: 'Rates that depend on each other', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Related Rates</h3><p>When two or more quantities change with respect to time, their rates of change are <em>related</em>. Steps: (1) Draw a diagram. (2) Write an equation connecting the variables. (3) Differentiate both sides with respect to time t. (4) Substitute known values and solve.</p>` },
                { type: 'generated_practice', generators: ['related-rates-concept'] },
                { type: 'practice', problems: [
                    { question: 'In related rates, we differentiate with respect to:', choices: ['x', 'y', 't (time)', 'r'], correctIndex: 2, explanation: 'We differentiate with respect to <strong>time (t)</strong>.' },
                    { question: 'A circle\'s area A = πr². If r changes with time, dA/dt =', choices: ['2πr', 'πr²(dr/dt)', '2πr(dr/dt)', 'πr(dr/dt)'], correctIndex: 2, explanation: 'dA/dt = 2πr · (dr/dt) by chain rule: <strong>2πr(dr/dt)</strong>.' },
                    { question: 'A ladder slides down a wall. Which equation connects the variables?', choices: ['a + b = c', 'a² + b² = c²', 'A = ½bh', 'C = 2πr'], correctIndex: 1, explanation: '<strong>Pythagorean theorem</strong>: x² + y² = L² (ladder length).' },
                    { question: 'The first step in any related rates problem should be:', choices: ['Take the derivative', 'Draw a diagram', 'Plug in numbers', 'Find the answer'], correctIndex: 1, explanation: 'Always start by <strong>drawing a diagram</strong>.' },
                ]}
            ]},

            // ---- 12. Mean Value Theorem ----
            { id: 'mvt', title: 'Mean Value Theorem', subtitle: 'Connecting average and instantaneous rates', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Mean Value Theorem</h3><p>If f is continuous on [a,b] and differentiable on (a,b), then there exists some c in (a,b) where:</p><p style="text-align:center;"><strong>f′(c) = [f(b) − f(a)] / (b − a)</strong></p><p>In words: at some point, the instantaneous rate equals the average rate over the interval.</p>` },
                { type: 'generated_practice', generators: ['mvt-concept'] },
                { type: 'practice', problems: [
                    { question: 'MVT guarantees a point where the tangent slope equals the:', choices: ['Maximum slope', 'Minimum slope', 'Average slope over [a,b]', 'Zero'], correctIndex: 2, explanation: 'MVT says the tangent slope equals the <strong>average slope</strong> at some point.' },
                    { question: 'MVT requires the function to be:', choices: ['Differentiable everywhere', 'Continuous on [a,b] and differentiable on (a,b)', 'Polynomial', 'Increasing'], correctIndex: 1, explanation: '<strong>Continuous on [a,b], differentiable on (a,b)</strong>.' },
                    { question: 'f(x)=x² on [1,3]. Average rate = (9−1)/(3−1) = 4. f′(c)=2c=4, so c=', choices: ['1', '2', '3', '4'], correctIndex: 1, explanation: '2c = 4 → c = <strong>2</strong>.' },
                    { question: 'If you drive 120 miles in 2 hours, MVT says at some point your speed was:', choices: ['0 mph', '30 mph', '60 mph', '120 mph'], correctIndex: 2, explanation: 'Average speed = 120/2 = <strong>60 mph</strong>. MVT guarantees you hit exactly 60 mph.' },
                ]}
            ]},

            // ---- 13. L'Hôpital's Rule ----
            { id: 'lhopital', title: "L'Hôpital's Rule", subtitle: 'Evaluating indeterminate limits', xpReward: 50, sections: [
                { type: 'text', content: `<h3>L'Hôpital's Rule</h3><p>If lim(x→c) f(x)/g(x) gives <strong>0/0</strong> or <strong>∞/∞</strong>, then:</p><p style="text-align:center;"><strong>lim(x→c) f(x)/g(x) = lim(x→c) f′(x)/g′(x)</strong></p><p>Differentiate numerator and denominator <em>separately</em> (not as a quotient!), then evaluate again. Repeat if still indeterminate.</p>` },
                { type: 'generated_practice', generators: ['lhopital-eval', 'lhopital-concept'] },
                { type: 'practice', problems: [
                    { question: "L'Hôpital's applies when the limit form is:", choices: ['0/0 or ∞/∞', '1/0', '∞−∞ directly', 'Any fraction'], correctIndex: 0, explanation: "It applies to <strong>0/0 or ∞/∞</strong> indeterminate forms." },
                    { question: 'lim(x→0) sin(x)/x using L\'Hôpital: cos(x)/1 at x=0 =', choices: ['0', '1', '∞', '−1'], correctIndex: 1, explanation: 'cos(0)/1 = <strong>1</strong>.' },
                    { question: 'lim(x→∞) x/eˣ. Apply L\'Hôpital: 1/eˣ as x→∞ =', choices: ['∞', '1', '0', 'DNE'], correctIndex: 2, explanation: '1/eˣ → <strong>0</strong> as x→∞.' },
                    { question: "In L'Hôpital's, you differentiate:", choices: ['The whole fraction as a quotient', 'Top and bottom separately', 'Only the top', 'Only the bottom'], correctIndex: 1, explanation: 'Differentiate numerator and denominator <strong>separately</strong>.' },
                ]}
            ]},

            // ---- 14. Optimization ----
            { id: 'optimization', title: 'Optimization', subtitle: 'Finding maximum and minimum values', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Optimization Problems</h3><p>Steps: (1) Define variables and write the quantity to optimize. (2) Write a constraint equation. (3) Reduce to one variable. (4) Take the derivative, set = 0. (5) Verify it's a max or min. (6) Answer the question.</p>` },
                { type: 'generated_practice', generators: ['optimization-setup'] },
                { type: 'interactive_steps', title: 'Guided: A farmer has 100m of fencing for a rectangular pen against a barn (3 sides). Maximize area.', description: 'Set up the equation and find the maximum.', steps: [
                    { text: 'Let x = width (two sides), y = length (one side). Perimeter: 2x + y = {blank}', answer: '100', hint: 'Total fencing is 100m' },
                    { text: 'Solve for y: y = 100 − {blank}', answer: '2x', hint: 'Rearrange the perimeter equation' },
                    { text: 'Area = x · y = x(100 − 2x) = 100x − {blank}x²', answer: '2', hint: 'Distribute x' },
                    { text: 'A′(x) = 100 − 4x. Set to 0: x = {blank}', answer: '25', hint: '100 ÷ 4' },
                    { text: 'y = 100 − 2(25) = {blank}', answer: '50', hint: '100 − 50' },
                    { text: 'Max area = 25 × 50 = {blank} m²', answer: '1250', hint: 'Multiply' }
                ], result: 'Maximum area = 1250 m² with dimensions 25m × 50m' },
                { type: 'practice', problems: [
                    { question: 'To find a maximum or minimum, set f′(x) =', choices: ['1', '−1', '0', 'f(x)'], correctIndex: 2, explanation: 'Critical points occur where f′(x) = <strong>0</strong>.' },
                    { question: 'A farmer has 100m of fence for a rectangular pen. Maximize area. Constraint:', choices: ['A = lw', '2l + 2w = 100', 'l = w', 'A = 100'], correctIndex: 1, explanation: 'Perimeter constraint: <strong>2l + 2w = 100</strong>.' },
                    { question: 'For the fence problem, max area occurs when:', choices: ['l = 100, w = 0', 'l = w = 25', 'l = 50, w = 0', 'l = 10, w = 40'], correctIndex: 1, explanation: 'A square maximizes area: l = w = <strong>25</strong>, giving A = 625.' },
                    { question: 'After finding a critical point, verify it\'s a max/min using:', choices: ['The original equation', 'First or second derivative test', 'Guessing', 'The constraint only'], correctIndex: 1, explanation: 'Use the <strong>first or second derivative test</strong> to classify.' },
                ]}
            ]},

            // ---- 15. Antiderivatives ----
            { id: 'antiderivatives', title: 'Antiderivatives', subtitle: 'Reversing differentiation', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Antiderivatives</h3><p>An <strong>antiderivative</strong> of f(x) is a function F(x) such that F′(x) = f(x). The <strong>indefinite integral</strong> ∫f(x)dx = F(x) + C.</p><p>Power rule for antiderivatives: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C (for n ≠ −1).</p><p>Don't forget the <strong>+C</strong> (constant of integration)!</p>` },
                { type: 'generated_practice', generators: ['calc-antiderivative'] },
                { type: 'practice', problems: [
                    { question: '∫x³ dx =', choices: ['3x²', 'x⁴/4 + C', 'x⁴ + C', '4x⁴ + C'], correctIndex: 1, explanation: 'x³⁺¹/(3+1) + C = <strong>x⁴/4 + C</strong>.' },
                    { question: '∫5 dx =', choices: ['5x + C', '5', '0', '5x²/2 + C'], correctIndex: 0, explanation: '∫5 dx = <strong>5x + C</strong>.' },
                    { question: '∫cos(x) dx =', choices: ['−sin(x) + C', 'sin(x) + C', 'cos(x) + C', 'tan(x) + C'], correctIndex: 1, explanation: 'Since d/dx[sin x] = cos x, ∫cos x dx = <strong>sin(x) + C</strong>.' },
                    { question: 'Why do we include "+ C"?', choices: ['Convention only', 'Because many functions have the same derivative', 'To make it harder', 'Only for polynomials'], correctIndex: 1, explanation: 'Any constant disappears when differentiated, so <strong>many functions share the same derivative</strong>.' },
                ]}
            ]},

            // ---- 16. Definite Integrals & FTC ----
            { id: 'definite-integrals', title: 'Definite Integrals & FTC', subtitle: 'The Fundamental Theorem of Calculus', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Definite Integrals</h3><p>∫ₐᵇ f(x)dx represents the <strong>signed area</strong> between f(x) and the x-axis from x=a to x=b.</p><h3>Fundamental Theorem of Calculus (Part 1)</h3><p><strong>∫ₐᵇ f(x)dx = F(b) − F(a)</strong>, where F is any antiderivative of f.</p><p>This connects derivatives and integrals — the two main ideas of calculus!</p>` },
                { type: 'generated_practice', generators: ['calc-ftc', 'calc-ftc-concept'] },
                { type: 'interactive_steps', title: 'Guided: Evaluate ∫₁⁴ (2x + 3) dx', description: 'Find the antiderivative, then apply the Fundamental Theorem.', steps: [
                    { text: 'Antiderivative of 2x is {blank}', answer: 'x²', hint: '2x → x² (power rule reversed)' },
                    { text: 'Antiderivative of 3 is {blank}', answer: '3x', hint: 'Constant k → kx' },
                    { text: 'F(x) = x² + 3x. F(4) = 16 + 12 = {blank}', answer: '28', hint: 'Plug in x = 4' },
                    { text: 'F(1) = 1 + 3 = {blank}', answer: '4', hint: 'Plug in x = 1' },
                    { text: '∫₁⁴ (2x+3)dx = F(4) − F(1) = 28 − 4 = {blank}', answer: '24', hint: 'Subtract' }
                ], result: '∫₁⁴ (2x + 3) dx = 24' },
                { type: 'practice', problems: [
                    { question: '∫₁³ 2x dx =', choices: ['4', '8', '6', '10'], correctIndex: 1, explanation: 'F(x) = x². F(3)−F(1) = 9−1 = <strong>8</strong>.' },
                    { question: '∫₀^π sin(x) dx =', choices: ['0', '1', '2', '−1'], correctIndex: 2, explanation: 'F(x) = −cos x. (−cos π)−(−cos 0) = 1+1 = <strong>2</strong>.' },
                    { question: 'The FTC connects:', choices: ['Algebra and geometry', 'Derivatives and integrals', 'Limits and continuity', 'Vectors and matrices'], correctIndex: 1, explanation: 'The FTC links <strong>derivatives and integrals</strong>.' },
                    { question: '∫₂² f(x)dx =', choices: ['f(2)', '2f(2)', '0', 'Undefined'], correctIndex: 2, explanation: 'When upper = lower limit, the integral = <strong>0</strong>.' },
                ]}
            ]},

            // ---- 17. U-Substitution ----
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

            // ---- 18. Integration by Parts ----
            { id: 'integration-by-parts', title: 'Integration by Parts', subtitle: 'Product rule in reverse', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Integration by Parts</h3><p>Formula: <strong>∫u dv = uv − ∫v du</strong>.</p><p>This technique handles integrals of products that u-sub can't touch.</p>` },
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

            // ---- 19. Trig Integrals ----
            { id: 'trig-integrals', title: 'Trig Integrals', subtitle: 'Integrating trig functions', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Basic Trig Integrals</h3><p>∫sin x dx = −cos x + C. ∫cos x dx = sin x + C. ∫sec²x dx = tan x + C. ∫csc²x dx = −cot x + C. ∫sec x tan x dx = sec x + C.</p><h3>Powers of Trig Functions</h3><p>For ∫sinⁿx cosᵐx dx: use Pythagorean identities and u-substitution. If one power is odd, save one factor and convert the rest.</p>` },
                { type: 'generated_practice', generators: ['trig-integral-basic'] },
                { type: 'practice', problems: [
                    { question: '∫sin x dx =', choices: ['cos x + C', '−cos x + C', 'sin x + C', '−sin x + C'], correctIndex: 1, explanation: '<strong>−cos x + C</strong>.' },
                    { question: '∫sec²x dx =', choices: ['sec x + C', 'tan x + C', '2sec x + C', '−cot x + C'], correctIndex: 1, explanation: '<strong>tan x + C</strong>.' },
                    { question: '∫cos²x dx requires which identity?', choices: ['sin²+cos²=1', 'cos²x = (1+cos2x)/2', 'tan²x+1=sec²x', 'sin2x=2sinxcosx'], correctIndex: 1, explanation: 'Use the power-reducing identity: <strong>cos²x = (1+cos2x)/2</strong>.' },
                    { question: '∫tan x dx =', choices: ['sec x + C', 'ln|sec x| + C', '−ln|cos x| + C', 'Both B and C'], correctIndex: 3, explanation: '∫(sin x/cos x)dx = −ln|cos x| + C = ln|sec x| + C. <strong>Both B and C</strong>.' },
                ]}
            ]},

            // ---- 20. Partial Fractions ----
            { id: 'partial-fractions', title: 'Partial Fractions', subtitle: 'Breaking apart rational integrands', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Partial Fraction Decomposition</h3><p>To integrate a rational function P(x)/Q(x): (1) Factor Q(x). (2) Write as sum of simpler fractions. (3) Solve for coefficients. (4) Integrate each piece.</p><p>Linear factors: A/(x−r). Repeated: A/(x−r) + B/(x−r)². Irreducible quadratics: (Ax+B)/(x²+bx+c).</p>` },
                { type: 'generated_practice', generators: ['partial-fraction-setup'] },
                { type: 'practice', problems: [
                    { question: '1/[(x−1)(x+2)] decomposes as:', choices: ['A/(x−1) + B/(x+2)', 'A/(x−1) − B/(x+2)', '(Ax+B)/[(x−1)(x+2)]', 'A/x + B/(x−1)'], correctIndex: 0, explanation: 'Distinct linear factors: <strong>A/(x−1) + B/(x+2)</strong>.' },
                    { question: 'After decomposing, each piece typically integrates to:', choices: ['Polynomials', 'Natural log terms', 'Trig functions', 'Exponentials'], correctIndex: 1, explanation: '∫A/(x−r)dx = A ln|x−r| + C: <strong>natural log terms</strong>.' },
                    { question: 'Before decomposing, the degree of numerator must be:', choices: ['Equal to denominator', 'Greater than denominator', 'Less than denominator', 'Any degree'], correctIndex: 2, explanation: 'Degree of numerator must be <strong>less than</strong> denominator (do polynomial division first if not).' },
                    { question: '(x+3)/[(x−1)²] decomposes as:', choices: ['A/(x−1)²', 'A/(x−1) + B/(x−1)²', '(Ax+B)/(x−1)²', 'A/x + B/(x−1)'], correctIndex: 1, explanation: 'Repeated factor: <strong>A/(x−1) + B/(x−1)²</strong>.' },
                ]}
            ]},

            // ---- 21. Improper Integrals ----
            { id: 'improper-integrals', title: 'Improper Integrals', subtitle: 'Integrals with infinite limits', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Improper Integrals</h3><p>An integral is <strong>improper</strong> if (1) a limit of integration is ±∞, or (2) the integrand has a discontinuity on [a,b].</p><p>Evaluate by replacing the problematic value with a variable, integrating, then taking the limit.</p><p>If the limit is finite, the integral <strong>converges</strong>. If not, it <strong>diverges</strong>.</p>` },
                { type: 'generated_practice', generators: ['improper-converge'] },
                { type: 'practice', problems: [
                    { question: '∫₁^∞ 1/x² dx =', choices: ['∞ (diverges)', '1', '2', '1/2'], correctIndex: 1, explanation: 'lim(b→∞) [−1/x]₁ᵇ = lim(0 − (−1)) = <strong>1</strong>. Converges.' },
                    { question: '∫₁^∞ 1/x dx =', choices: ['1', '0', '∞ (diverges)', 'ln 2'], correctIndex: 2, explanation: 'lim(b→∞) ln b = ∞. <strong>Diverges</strong>.' },
                    { question: 'An improper integral converges when:', choices: ['The integrand is positive', 'The limit exists and is finite', 'The integral has no antiderivative', 'Always'], correctIndex: 1, explanation: 'Converges when the <strong>limit exists and is finite</strong>.' },
                    { question: '∫₁^∞ 1/xᵖ dx converges when:', choices: ['p > 0', 'p > 1', 'p < 1', 'p = 1'], correctIndex: 1, explanation: 'The p-integral converges for <strong>p > 1</strong>.' },
                ]}
            ]},

            // ---- 22. Sequences ----
            { id: 'sequences', title: 'Sequences', subtitle: 'Patterns and convergence', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Sequences</h3><p>A <strong>sequence</strong> is an ordered list of numbers: a₁, a₂, a₃, … defined by a formula aₙ = f(n).</p><p>A sequence <strong>converges</strong> if lim(n→∞) aₙ = L (a finite number). Otherwise it <strong>diverges</strong>.</p>` },
                { type: 'generated_practice', generators: ['sequence-converge'] },
                { type: 'practice', problems: [
                    { question: 'aₙ = 1/n. Does this converge?', choices: ['Yes, to 0', 'Yes, to 1', 'No', 'Yes, to ∞'], correctIndex: 0, explanation: 'lim(1/n) = <strong>0</strong>. Converges.' },
                    { question: 'aₙ = (−1)ⁿ. Does this converge?', choices: ['Yes, to 0', 'Yes, to 1', 'Yes, to −1', 'No (oscillates)'], correctIndex: 3, explanation: 'Alternates between 1 and −1. <strong>Diverges</strong>.' },
                    { question: 'aₙ = (3n+1)/(n+2). Limit as n→∞:', choices: ['0', '1', '3', '∞'], correctIndex: 2, explanation: 'Divide by n: (3+1/n)/(1+2/n) → <strong>3</strong>.' },
                    { question: 'A sequence converges if its terms:', choices: ['Are always positive', 'Approach a single finite value', 'Are always increasing', 'Alternate in sign'], correctIndex: 1, explanation: 'Converges if terms <strong>approach a single finite value</strong>.' },
                ]}
            ]},

            // ---- 23. Series & Convergence Tests ----
            { id: 'series-tests', title: 'Series & Convergence Tests', subtitle: 'Does the infinite sum have a finite value?', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Infinite Series</h3><p>A <strong>series</strong> is the sum of a sequence: Σaₙ = a₁ + a₂ + a₃ + …</p><h3>Key Tests</h3><p><strong>Divergence test</strong>: if lim aₙ ≠ 0, the series diverges. <strong>Geometric series</strong>: Σarⁿ converges if |r| < 1 (sum = a/(1−r)). <strong>p-series</strong>: Σ1/nᵖ converges if p > 1.</p><p>Other tests: ratio test, comparison test, integral test, alternating series test.</p>` },
                { type: 'generated_practice', generators: ['geometric-series-sum', 'series-test-choice'] },
                { type: 'practice', problems: [
                    { question: 'If lim(n→∞) aₙ ≠ 0, the series Σaₙ:', choices: ['Converges', 'Diverges', 'May or may not converge', 'Equals 0'], correctIndex: 1, explanation: 'Divergence test: if terms don\'t → 0, the series <strong>diverges</strong>.' },
                    { question: 'Geometric series Σ(1/2)ⁿ from n=0. Sum =', choices: ['1', '2', '1/2', '∞'], correctIndex: 1, explanation: 'a/(1−r) = 1/(1−1/2) = <strong>2</strong>.' },
                    { question: 'Σ1/n (harmonic series):', choices: ['Converges to 1', 'Converges to ln 2', 'Diverges', 'Converges to π²/6'], correctIndex: 2, explanation: 'The harmonic series <strong>diverges</strong> (p = 1, need p > 1).' },
                    { question: 'The ratio test says: if lim|aₙ₊₁/aₙ| < 1, then:', choices: ['Diverges', 'Converges absolutely', 'Inconclusive', 'Converges conditionally'], correctIndex: 1, explanation: 'Ratio < 1 → <strong>converges absolutely</strong>.' },
                ]}
            ]},

            // ---- 24. Taylor & Maclaurin Series ----
            { id: 'taylor-series', title: 'Taylor & Maclaurin Series', subtitle: 'Polynomial approximations', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Taylor Series</h3><p>A Taylor series represents a function as an infinite polynomial around a point x = a:</p><p>f(x) = Σ f⁽ⁿ⁾(a)/n! · (x−a)ⁿ</p><p>A <strong>Maclaurin series</strong> is a Taylor series centered at a = 0.</p><p>Key series: eˣ = Σxⁿ/n!, sin x = Σ(−1)ⁿx²ⁿ⁺¹/(2n+1)!, cos x = Σ(−1)ⁿx²ⁿ/(2n)!.</p>` },
                { type: 'generated_practice', generators: ['taylor-first-terms'] },
                { type: 'practice', problems: [
                    { question: 'The Maclaurin series is centered at:', choices: ['x = 1', 'x = −1', 'x = 0', 'x = π'], correctIndex: 2, explanation: 'Maclaurin = Taylor centered at <strong>x = 0</strong>.' },
                    { question: 'eˣ Maclaurin series starts: 1 + x + x²/2! + ...', choices: ['True', 'False'], correctIndex: 0, explanation: '<strong>True</strong>: eˣ = 1 + x + x²/2! + x³/3! + …' },
                    { question: 'The nth term of a Taylor series involves:', choices: ['f(a)ⁿ', 'f⁽ⁿ⁾(a)/n!', 'f(x)/n', 'nf(a)'], correctIndex: 1, explanation: 'The nth term is <strong>f⁽ⁿ⁾(a)/n!</strong> · (x−a)ⁿ.' },
                    { question: 'A Taylor polynomial of degree 1 is a:', choices: ['Constant', 'Linear approximation (tangent line)', 'Quadratic', 'Cubic'], correctIndex: 1, explanation: 'Degree 1 Taylor polynomial = <strong>tangent line approximation</strong>.' },
                ]}
            ]},

            // ---- 25. Differential Equations Intro ----
            { id: 'diff-equations', title: 'Differential Equations Intro', subtitle: 'Equations involving derivatives', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Differential Equations</h3><p>A <strong>differential equation</strong> (DE) is an equation containing derivatives. Example: dy/dx = 3x² has solution y = x³ + C.</p><h3>Separable DEs</h3><p>If you can write dy/dx = f(x)g(y), separate: dy/g(y) = f(x)dx. Then integrate both sides.</p>` },
                { type: 'generated_practice', generators: ['separable-de'] },
                { type: 'interactive_steps', title: 'Guided: Solve dy/dx = 2x, with y(0) = 5', description: 'Integrate and apply the initial condition.', steps: [
                    { text: 'Integrate both sides: y = ∫2x dx = {blank} + C', answer: 'x²', hint: '∫2x dx = x²' },
                    { text: 'Apply initial condition: y(0) = 5 → 0² + C = {blank}', answer: '5', hint: 'Plug in x = 0, y = 5' },
                    { text: 'So C = {blank}', answer: '5', hint: '0 + C = 5' },
                    { text: 'Particular solution: y = x² + {blank}', answer: '5', hint: 'Replace C with its value' }
                ], result: 'y = x² + 5' },
                { type: 'practice', problems: [
                    { question: 'dy/dx = 2x. General solution:', choices: ['y = 2x', 'y = x² + C', 'y = 2x²', 'y = x + C'], correctIndex: 1, explanation: 'Integrate: y = x² + C. <strong>y = x² + C</strong>.' },
                    { question: 'dy/dx = y is separable. Solution:', choices: ['y = eˣ + C', 'y = Ceˣ', 'y = x + C', 'y = ln x'], correctIndex: 1, explanation: 'dy/y = dx → ln|y| = x + C₁ → y = <strong>Ceˣ</strong>.' },
                    { question: 'A separable DE can be written as:', choices: ['dy/dx = f(x) + g(y)', 'dy/dx = f(x)·g(y)', 'dy/dx = f(x)/g(x)', 'dy/dx = constant'], correctIndex: 1, explanation: 'Separable means <strong>dy/dx = f(x)·g(y)</strong>.' },
                    { question: 'The "+C" in DE solutions represents:', choices: ['A specific number', 'A family of solutions', 'Zero', 'The initial condition'], correctIndex: 1, explanation: '+C gives a <strong>family of solutions</strong>. An initial condition pins down the specific one.' },
                ]}
            ]},

            // ---- 26. Applications of Integration ----
            { id: 'integration-applications', title: 'Applications of Integration', subtitle: 'Area, volume, and arc length', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Area Between Curves</h3><p>Area = ∫ₐᵇ [top − bottom] dx = ∫ₐᵇ [f(x) − g(x)] dx.</p><h3>Volume by Disks/Washers</h3><p>Rotating around x-axis: V = π∫ₐᵇ [f(x)]² dx (disk) or V = π∫ₐᵇ ([R]²−[r]²) dx (washer).</p><h3>Arc Length</h3><p>L = ∫ₐᵇ √[1 + (f′(x))²] dx.</p>` },
                { type: 'generated_practice', generators: ['calc-area-between', 'arc-length-integral'] },
                { type: 'practice', problems: [
                    { question: 'Area between y=x² and y=x from 0 to 1:', choices: ['∫₀¹(x−x²)dx', '∫₀¹(x²−x)dx', '∫₀¹ x·x² dx', '∫₀¹(x+x²)dx'], correctIndex: 0, explanation: 'x > x² on [0,1], so area = <strong>∫₀¹(x−x²)dx</strong>.' },
                    { question: '∫₀¹(x−x²)dx =', choices: ['1/6', '1/3', '1/2', '1/4'], correctIndex: 0, explanation: '[x²/2−x³/3]₀¹ = 1/2−1/3 = <strong>1/6</strong>.' },
                    { question: 'Volume of revolution (disk method) involves:', choices: ['V = ∫ 2πr dx', 'V = π∫[f(x)]² dx', 'V = ∫f(x)dx', 'V = π[f(x)]²'], correctIndex: 1, explanation: 'Disk method: <strong>V = π∫[f(x)]² dx</strong>.' },
                    { question: 'Arc length formula contains:', choices: ['√(1 + f(x))', '√(1 + [f′(x)]²)', 'f(x)²', '2πf(x)'], correctIndex: 1, explanation: 'Arc length: ∫√(<strong>1 + [f′(x)]²</strong>) dx.' },
                ]}
            ]},

            // ---- 27. Calculus Review ----
            { id: 'calculus-review', title: 'Calculus Review', subtitle: 'Comprehensive problem solving', xpReward: 100, sections: [
                { type: 'text', content: `<h3>Comprehensive Review</h3><p>This final lesson covers the major concepts: limits, derivatives (power, product, quotient, chain rules), applications (optimization, related rates), integrals (FTC, u-sub, by parts), and series.</p>` },
                { type: 'generated_practice', generators: ['calc-power-rule'] },
                { type: 'generated_practice', generators: ['calc-chain-rule'] },
                { type: 'generated_practice', generators: ['calc-ftc'] },
                { type: 'generated_practice', generators: ['geometric-series-sum'] },
                { type: 'practice', problems: [
                    { question: 'd/dx [x⁴] =', choices: ['4x³', 'x³', '4x⁴', '3x⁴'], correctIndex: 0, explanation: '<strong>4x³</strong> by the power rule.' },
                    { question: '∫₀² 3x² dx =', choices: ['6', '8', '12', '24'], correctIndex: 1, explanation: 'x³|₀² = 8 − 0 = <strong>8</strong>.' },
                    { question: 'lim(x→∞) 5x/(2x+1) =', choices: ['0', '5/2', '5', '∞'], correctIndex: 1, explanation: 'Divide by x: 5/(2+1/x) → <strong>5/2</strong>.' },
                    { question: 'The derivative of eˣ is:', choices: ['xeˣ⁻¹', 'eˣ', 'eˣ/x', 'ln(x)eˣ'], correctIndex: 1, explanation: 'The derivative of eˣ is <strong>eˣ</strong> — it\'s its own derivative!' },
                    { question: 'Σ(1/3)ⁿ from n=0 to ∞ =', choices: ['1/3', '3/2', '3', '1'], correctIndex: 1, explanation: 'Geometric: 1/(1−1/3) = 1/(2/3) = <strong>3/2</strong>.' },
                ]}
            ]},
        ]
    }
};
