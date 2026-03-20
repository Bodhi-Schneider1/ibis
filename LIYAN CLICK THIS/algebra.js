export const algebraPath = {
        name: 'Algebra Path',
        icon: '📐',
        lessons: [

            // ---- 1. Intro to Algebra ----
            { id: 'intro-algebra', title: 'Introduction to Algebra', subtitle: 'Understanding variables and expressions', xpReward: 30, sections: [
                { type: 'text', content: `<h3>What is Algebra?</h3><p>Think of algebra as a puzzle where some pieces are missing. Instead of writing "some number plus 3 equals 7," we use a <strong>variable</strong> — a letter like <em>x</em> — as a placeholder for the missing piece, and write <strong>x + 3 = 7</strong>. Your job is to figure out what <em>x</em> is!</p><p>There are two key building blocks to know:</p><p>An <strong>expression</strong> is a math phrase — it combines numbers, variables, and operations but has <em>no</em> equals sign (like <code>3x + 5</code>). An <strong>equation</strong> is a full math sentence — it has an equals sign and claims two things are equal (like <code>3x + 5 = 20</code>).</p><p>Let's peek inside the expression <code>5x + 3</code>:</p><p>• <strong>5</strong> is the <em>coefficient</em> — the number multiplying the variable.<br>• <strong>x</strong> is the <em>variable</em> — the unknown we're solving for.<br>• <strong>3</strong> is the <em>constant</em> — a plain number with no variable attached.<br>• <strong>5x</strong> and <strong>3</strong> are each called <em>terms</em> — the separate pieces separated by + or −.</p>` },
                { type: 'example', title: 'Evaluating an Expression', content: `<p><strong>Evaluate 2x + 4 when x = 3:</strong></p><p>Think of it as a substitution: wherever you see <em>x</em>, swap it for 3.</p><p>2(3) + 4 = 6 + 4 = <strong>10</strong></p><p><em>Tip: always wrap the substituted number in parentheses to avoid sign mistakes!</em></p>` },
                { type: 'steps', title: 'How to Evaluate Any Expression', steps: ['Identify each variable and its given value.', 'Replace every instance of the variable with that number — use parentheses around it!', 'Follow PEMDAS (order of operations) to simplify step by step.', 'Write your final answer clearly.'] },
                { type: 'generated_practice', generators: ['eval-expression'] },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p>When you see <code>3x</code>, it means 3 × x — the multiplication sign is hidden as a shortcut in algebra!</p><p>A <strong>coefficient</strong> is the number right before a variable (in 5x, the coefficient is 5). If there's no number written, the coefficient is secretly 1 — so <em>x</em> really means <em>1x</em>.</p><p>A <strong>constant</strong> is a plain number standing alone with no variable (like the 4 in 2x + 4). It never changes, no matter what x is — that's why it's called a constant.</p>` },
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
                { type: 'text', content: `<h3>Why Does Order Matter?</h3><p>Imagine a recipe: if you bake the cake <em>before</em> mixing the batter, it won't work! Math is the same — we need a shared set of rules about which operation to do first, so everyone gets the same answer. That rulebook is called <strong>PEMDAS</strong>.</p><p>Here's what the letters stand for, in the order you should work through them:</p><p><strong>P</strong> — Parentheses (work inside ( ) first)<br><strong>E</strong> — Exponents (powers like 2³)<br><strong>M/D</strong> — Multiplication & Division (equal priority, go left to right)<br><strong>A/S</strong> — Addition & Subtraction (equal priority, go left to right)</p><p>A handy way to remember it: <em>"Please Excuse My Dear Aunt Sally."</em></p><p>⚠️ Important: Multiplication and Division share the same level — just go left to right when you see both. Same rule applies to Addition and Subtraction.</p>` },
                { type: 'example', title: 'Applying PEMDAS', content: `<p><strong>3 + 4 × 2</strong></p><p>Multiplication comes before addition, so do 4 × 2 first: = 8. Then add: 3 + 8 = <strong>11</strong>.</p><p>A common mistake is to add first: (3 + 4) × 2 = 14. That's only correct <em>if</em> there are parentheses around 3 + 4. Without them, multiply first!</p>` },
                { type: 'steps', title: 'Guided: Evaluate 2 × (3 + 5)² ÷ 4', steps: ['Parentheses first: 3 + 5 = 8.', 'Exponents next: 8² = 64.', 'Multiplication: 2 × 64 = 128.', 'Division: 128 ÷ 4 = 32.', 'Final answer: 32.'] },
                { type: 'generated_practice', generators: ['pemdas-eval'] },
                { type: 'generated_practice', generators: ['pemdas-parens'] },
                { type: 'practice', problems: [
                    { question: 'A student computes <strong>5 + 3 × 2 = 16</strong>. What went wrong?', choices: ['Multiplied 3 × 2 incorrectly', 'Added before multiplying', 'Used the wrong numbers', 'Nothing — 16 is correct'], correctIndex: 1, explanation: 'They added first (5 + 3 = 8, × 2 = 16). PEMDAS requires <strong>multiplying first</strong>: 3 × 2 = 6, then 5 + 6 = 11.' },
                    { question: 'When multiplication and division appear together, you should:', choices: ['Always multiply first', 'Always divide first', 'Work left to right', 'Work right to left'], correctIndex: 2, explanation: 'M and D have equal priority — <strong>work left to right</strong>.' },
                    { question: 'Evaluate: <strong>2³ + 1</strong>', choices: ['7', '9', '6', '5'], correctIndex: 1, explanation: '2³ = 8. Then 8 + 1 = <strong>9</strong>' },
                    { question: 'What comes first in PEMDAS?', choices: ['Addition', 'Multiplication', 'Parentheses', 'Exponents'], correctIndex: 2, explanation: '<strong>Parentheses</strong> come first.' },
                ]}
            ]},

            // ---- 3. Linear Equations ----
            { id: 'linear-equations', title: 'Linear Equations', subtitle: 'Solve equations of the form ax + b = c', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Solving Linear Equations</h3><p>A <strong>linear equation</strong> is any equation where the variable has no exponent higher than 1 — like 3x + 7 = 22. When graphed, these always form a straight line (that's where "linear" comes from!).</p><p>The key idea is to think of an equation as a <strong>balanced scale</strong>. Both sides are perfectly even. If you add weight to one side, you <em>must</em> add the same weight to the other side to keep it balanced. That's the golden rule of algebra: <strong>whatever you do to one side, do the exact same thing to the other side.</strong></p><p>To solve <em>ax + b = c</em>, work backwards from what was done to x: first undo the addition/subtraction (subtract b from both sides), then undo the multiplication (divide both sides by a).</p>` },
                { type: 'example', title: 'Solving 3x + 7 = 22', content: `<p>Ask yourself: "What's being done to x?" — it's being multiplied by 3, then 7 is added.</p><p><strong>Step 1:</strong> Undo the +7 by subtracting 7 from both sides → 3x = 15</p><p><strong>Step 2:</strong> Undo the ×3 by dividing both sides by 3 → x = <strong>5</strong></p><p><strong>Check your answer:</strong> Replace x with 5 in the original: 3(5) + 7 = 15 + 7 = 22 ✓ It works!</p>` },
                { type: 'steps', title: 'Solving Any Linear Equation', steps: ['Simplify each side first — distribute any parentheses and combine like terms.', 'Move all constants to one side using addition or subtraction.', 'Isolate the variable by dividing or multiplying both sides.', 'Always check your answer by substituting it back into the original equation!'] },
                { type: 'generated_practice', generators: ['solve-linear'] },
                { type: 'text', content: `<h3>Equations with Subtraction</h3><p>When the equation looks like <em>ax − b = c</em>, the process is the same — just add b to both sides first (to undo the subtraction), then divide by a.</p>` },
                { type: 'generated_practice', generators: ['solve-linear-subtract'] },
                { type: 'tips', content: `<h4>💡 Pro Tips</h4><p><strong>Work in reverse order:</strong> Undo addition/subtraction first, then undo multiplication/division. Think of "unwrapping" what was done to x, like peeling an onion from the outside in.</p><p><strong>Always check!</strong> Plugging your answer back into the original equation takes 10 seconds and saves you from careless mistakes.</p><p><strong>Special cases:</strong> If your algebra leads to something like <code>0 = 5</code> (never true), the equation has <em>no solution</em>. If it leads to <code>0 = 0</code> (always true), there are <em>infinitely many solutions</em> — every number works.</p>` },
                { type: 'practice', problems: [
                    { question: 'Solve: <strong>5x + 3 = 28</strong>', choices: ['x = 4', 'x = 5', 'x = 6', 'x = 7'], correctIndex: 1, explanation: '5x = 25 → x = <strong>5</strong>' },
                    { type: 'fill_in', question: 'Solve for x: <strong>7x − 4 = 31</strong>. x = ?', answer: '5', explanation: '7x = 35 → x = <strong>5</strong>' },
                    { question: 'Solve: <strong>2x + 9 = 3</strong>', choices: ['x = −3', 'x = 3', 'x = 6', 'x = −6'], correctIndex: 0, explanation: '2x = −6 → x = <strong>−3</strong>' },
                    { type: 'fill_in', question: 'Solve for x: <strong>4x + 12 = 36</strong>. x = ?', answer: '6', explanation: '4x = 24 → x = <strong>6</strong>' },
                    { question: 'Solve: <strong>4x − 1 = 4x + 5</strong>', choices: ['x = 0', 'x = 1', 'x = 6', 'No solution'], correctIndex: 3, explanation: 'Subtract 4x: −1 = 5 — always false → <strong>no solution</strong>.' },
                ]}
            ]},

            // ---- 4. Distributive Property ----
            { id: 'distributive-property', title: 'Distributive Property', subtitle: 'Expanding expressions with parentheses', xpReward: 40, sections: [
                { type: 'text', content: `<h3>The Distributive Property</h3><p>Imagine you're handing out 3 bags of goodies, and each bag contains an apple and a banana. You'd have 3 apples and 3 bananas total — you "distributed" the 3 to each item inside. That's exactly how this property works in algebra!</p><p><strong>a(b + c) = ab + ac</strong></p><p>The number (or term) outside the parentheses multiplies <em>every single term</em> inside. This works whether the terms inside are added or subtracted.</p><p>Watch out with negatives! A minus sign outside the parentheses flips the sign of every term inside. For example, −(x − 4) means −1 × x and −1 × (−4), which gives <strong>−x + 4</strong>. The minus and the minus cancel to give a plus!</p>` },
                { type: 'example', title: 'Expanding', content: `<p><strong>3(2x + 5)</strong><br>Multiply 3 by each term inside: 3 × 2x = 6x, and 3 × 5 = 15.<br>Result: <strong>6x + 15</strong></p><p><strong>−2(4x − 3)</strong><br>Multiply −2 by each term: (−2)(4x) = −8x, and (−2)(−3) = +6 (two negatives make a positive!).<br>Result: <strong>−8x + 6</strong></p>` },
                { type: 'steps', title: 'Guided: Expand 5(3x − 2) + 4', steps: ['Distribute 5 to each term inside: 5 × 3x = 15x and 5 × (−2) = −10.', 'Rewrite the full expression: 15x − 10 + 4.', 'Combine the constant terms: −10 + 4 = −6.', 'Final answer: 15x − 6.'] },
                { type: 'generated_practice', generators: ['distributive-expand'] },
                { type: 'generated_practice', generators: ['distributive-neg'] },
                { type: 'practice', problems: [
                    { question: 'A student expands <strong>3(x + 5)</strong> as <strong>3x + 5</strong>. What is their error?', choices: ['Multiplied 3 × x incorrectly', 'Only distributed to the first term', 'Added instead of multiplied', 'The answer is correct'], correctIndex: 1, explanation: 'They forgot to multiply 3 by 5. The correct expansion is <strong>3x + 15</strong>.' },
                    { question: 'Which is equivalent to <strong>−(x − 4)</strong>?', choices: ['−x − 4', '−x + 4', 'x − 4', 'x + 4'], correctIndex: 1, explanation: 'Distribute −1: (−1)(x) + (−1)(−4) = <strong>−x + 4</strong>.' },
                    { question: 'Expand: <strong>2(x + y + 3)</strong>', choices: ['2x + y + 3', '2x + 2y + 6', '2x + 2y + 3', 'x + y + 6'], correctIndex: 1, explanation: 'Distribute 2 to every term: 2x + 2y + 6.' },
                    { question: 'Which property does a(b+c) = ab + ac use?', choices: ['Commutative', 'Associative', 'Distributive', 'Identity'], correctIndex: 2, explanation: 'The <strong>Distributive</strong> property.' },
                ]}
            ]},

            // ---- 5. Combining Like Terms ----
            { id: 'combining-like-terms', title: 'Combining Like Terms', subtitle: 'Simplify by grouping similar terms', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Like Terms</h3><p>Think of it this way: you can add apples to apples and oranges to oranges, but you can't add apples directly to oranges. In algebra, the same rule applies.</p><p><strong>Like terms</strong> are terms that have the exact same variable(s) raised to the exact same power. You can add or subtract them by combining their coefficients.</p><p>✅ Like terms: <code>3x</code> and <code>7x</code> (both are plain x terms) → combine to <code>10x</code><br>✅ Like terms: <code>5x²</code> and <code>2x²</code> (both are x-squared terms) → combine to <code>7x²</code><br>❌ NOT like terms: <code>3x</code> and <code>3x²</code> (different powers — one is x, one is x²)</p><p>Constants (plain numbers) are also like terms with each other: <code>4 + 9 = 13</code>.</p>` },
                { type: 'example', title: 'Simplifying', content: `<p><strong>5x + 3 + 2x + 7</strong></p><p>First, group the like terms together: the x-terms and the constants.<br>(5x + 2x) + (3 + 7)</p><p>Now combine each group: = <strong>7x + 10</strong></p>` },
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
                { type: 'text', content: `<h3>Inequalities: When the Answer is a Range</h3><p>Sometimes instead of asking "what exact number equals this?", we ask "what numbers make this <em>true</em>?" The answer might be a whole range of values — for example, "any number greater than 5." That's what an inequality describes.</p><p>An inequality uses one of these symbols instead of =:</p><p><strong>&lt;</strong> means "less than" &nbsp;|&nbsp; <strong>&gt;</strong> means "greater than"<br><strong>≤</strong> means "less than or equal to" &nbsp;|&nbsp; <strong>≥</strong> means "greater than or equal to"</p><p>Good news: you solve inequalities <em>exactly</em> like equations — with one important exception...</p>` },
                { type: 'example', title: 'No Flip Needed', content: `<p><strong>3x + 4 ≤ 19</strong></p><p>Subtract 4 from both sides → 3x ≤ 15<br>Divide both sides by 3 → x ≤ <strong>5</strong></p><p>This means any number 5 or below is a solution. You could check: x = 3 → 3(3)+4 = 13 ≤ 19 ✓</p>` },
                { type: 'generated_practice', generators: ['solve-inequality'] },
                { type: 'text', content: `<h3>The Flip Rule ⚠️</h3><p>Here's the one big difference from equations: <strong>when you multiply or divide both sides by a negative number, you must flip the inequality sign.</strong></p><p>Why? Think about it with numbers: 2 &lt; 5 is true. Now multiply both sides by −1: −2 and −5. On a number line, −2 is to the <em>right</em> of −5, so now −2 &gt; −5. The relationship flipped!</p>` },
                { type: 'example', title: 'Flipping the Sign', content: `<p><strong>−2x + 5 > 11</strong></p><p>Subtract 5 from both sides → −2x > 6<br>Divide by −2 ... and <em>flip the sign!</em> → x &lt; <strong>−3</strong></p><p>Notice: the > became a <. Always flip when dividing or multiplying by a negative.</p>` },
                { type: 'generated_practice', generators: ['inequality-flip'] },
                { type: 'text', content: `<h3>Graphing Inequalities on a Number Line</h3><p>Once you've solved an inequality, you can show the solution visually on a number line. The key is knowing which kind of dot to draw at the boundary number:</p><p>• <strong>Open dot ○</strong> — use this for <strong>&lt;</strong> or <strong>&gt;</strong> (strict inequalities). The boundary value is <em>not</em> included in the solution.</p><p>• <strong>Closed dot ●</strong> — use this for <strong>≤</strong> or <strong>≥</strong>. The boundary value <em>is</em> included in the solution.</p><p>Then draw an arrow in the direction of the solution: left for "less than," right for "greater than."</p><p>Example: <strong>x &lt; 3</strong> → open dot at 3, arrow pointing left. <strong>x ≥ −2</strong> → closed dot at −2, arrow pointing right.</p>` },
                { type: 'practice', problems: [
                    { question: 'Solve: <strong>4x − 2 > 14</strong>', choices: ['x > 3', 'x > 4', 'x < 4', 'x > 2'], correctIndex: 1, explanation: '4x > 16 → x > <strong>4</strong>' },
                    { question: 'Solve: <strong>−2x > 8</strong>. What happens to the sign?', choices: ['Stays the same: x > −4', 'Flips: x < −4', 'Stays: x > 4', 'Flips: x < 4'], correctIndex: 1, explanation: 'Dividing by negative flips the sign → x < <strong>−4</strong>.' },
                    { question: 'Solve: <strong>5x − 3 ≥ 2x + 9</strong>', choices: ['x ≥ 2', 'x ≥ 4', 'x ≥ 6', 'x ≥ 3'], correctIndex: 1, explanation: '3x ≥ 12 → x ≥ <strong>4</strong>' },
                    { question: 'Which graph shows <strong>x < 3</strong>?', choices: ['Closed dot at 3, arrow right', 'Open dot at 3, arrow left', 'Open dot at 3, arrow right', 'Closed dot at 3, arrow left'], correctIndex: 1, explanation: 'Strict inequality → <strong>open dot</strong>; x < 3 goes to the left.' },
                ]}
            ]},

            // ---- 7. Graphing Linear Equations ----
            { id: 'graphing-lines', title: 'Graphing Linear Equations', subtitle: 'Plot lines using slope and y-intercept', xpReward: 60, sections: [
                { type: 'text', content: `<h3>Slope-Intercept Form: y = mx + b</h3><p>This is the most useful way to write a line's equation because it tells you two things right away:</p><p><strong>m</strong> is the <em>slope</em> — it tells you how steep the line is. You can think of it as "rise over run": for every 1 step you move to the right, how many steps do you go up (or down)?</p><p><strong>b</strong> is the <em>y-intercept</em> — the point where the line crosses the y-axis (the vertical axis). When x = 0, y = b.</p><h3>Calculating Slope from Two Points</h3><p>If you have two points on a line, you can calculate the slope with this formula:</p><p style="text-align:center;"><strong>m = (y₂ − y₁) / (x₂ − x₁)</strong></p><p>In plain English: subtract the y-values, divide by the difference in x-values. It's just "how much did y change" ÷ "how much did x change."</p><p><strong>To graph a line from y = mx + b:</strong> Start by plotting the y-intercept at (0, b). Then use the slope — move 1 unit right and m units up (or down if m is negative) — to find your second point. Connect the dots!</p>` },
                { type: 'example', title: 'Finding Slope', content: `<p>Given points (2, 3) and (6, 11):</p><p>m = (11 − 3) / (6 − 2) = 8 / 4 = <strong>2</strong></p><p>This means for every 1 step to the right, the line goes <em>up</em> 2 steps. A positive slope goes uphill left to right!</p>` },
                { type: 'graph_tool', title: 'Graph It Yourself', prompt: 'Plot the line <strong>y = 2x − 1</strong>. Enter slope m = 2 and y-intercept b = −1, then click Plot Line. When your graph looks right, check your answer.', target: { m: 2, b: -1 } },
                { type: 'graph_tool', title: 'Try Another Line', prompt: 'Now graph <strong>y = −x + 3</strong>. What slope and y-intercept does this line have?', target: { m: -1, b: 3 } },
                { type: 'text', content: `<h3>Special Slopes and Intercepts</h3><p><strong>Slope of 0:</strong> If m = 0, the line is perfectly <em>horizontal</em> — it doesn't rise or fall at all. Example: y = 4 is a flat horizontal line.</p><p><strong>Undefined slope:</strong> A vertical line (like x = 3) has a slope that is undefined, because the "run" is zero and you can't divide by zero.</p><p><strong>The x-intercept</strong> is where the line crosses the x-axis (the horizontal axis). At that point, y = 0. To find it, plug y = 0 into the equation and solve for x. Example: for y = 2x − 6, set 0 = 2x − 6 → x = 3, so the x-intercept is (3, 0).</p><p><strong>Parallel lines</strong> never intersect — they run in the same direction forever. Two lines are parallel if and only if they have the <em>same slope</em>. The y-intercepts can be different, but the slope must match. Example: y = 4x + 1 and y = 4x − 7 are parallel because both have slope 4.</p>` },
                { type: 'generated_practice', generators: ['find-slope'] },
                { type: 'generated_practice', generators: ['identify-slope-intercept'] },
                { type: 'generated_practice', generators: ['graph-write-equation'] },
                { type: 'generated_practice', generators: ['graph-x-intercept'] },
                { type: 'generated_practice', generators: ['graph-parallel-slope'] },
                { type: 'practice', problems: [
                    { question: 'In <strong>y = 3x − 5</strong>, what is the slope?', choices: ['−5', '3', '5', '−3'], correctIndex: 1, explanation: 'm = <strong>3</strong>' },
                    { question: 'In <strong>y = 3x − 5</strong>, what is the y-intercept?', choices: ['3', '5', '−5', '0'], correctIndex: 2, explanation: 'b = <strong>−5</strong>' },
                    { question: 'Slope between (0, 2) and (4, 10)?', choices: ['1', '2', '3', '4'], correctIndex: 1, explanation: 'm = (10−2)/(4−0) = 8/4 = <strong>2</strong>' },
                    { question: 'A line with slope <strong>0</strong> is?', choices: ['Vertical', 'Horizontal', 'Diagonal', 'Undefined'], correctIndex: 1, explanation: 'Zero slope → <strong>horizontal</strong> line.' },
                    { question: 'What is the x-intercept of <strong>y = 2x − 6</strong>?', choices: ['x = 2', 'x = 3', 'x = −3', 'x = 6'], correctIndex: 1, explanation: 'Set y = 0: 0 = 2x − 6 → 2x = 6 → x = <strong>3</strong>' },
                    { question: 'A line parallel to <strong>y = 4x + 1</strong> has slope:', choices: ['1', '−4', '4', '¼'], correctIndex: 2, explanation: 'Parallel lines have the <strong>same slope</strong>: m = <strong>4</strong>.' },
                ]}
            ]},

            // ---- 8. Systems of Equations ----
            { id: 'systems-equations', title: 'Systems of Equations', subtitle: 'Solve two equations simultaneously', xpReward: 75, sections: [
                { type: 'text', content: `<h3>What is a System of Equations?</h3><p>A system is just two equations that share the same variables. You're looking for the one pair of values that makes <em>both</em> equations true at the same time. Graphically, it's the point where two lines cross.</p><h3>Method 1: Elimination</h3><p>The idea: add or subtract the two equations to make one variable disappear (eliminate it), then solve for the one that's left.</p><p>This works best when the same variable has matching (or opposite) coefficients in both equations.</p><h3>Method 2: Substitution</h3><p>The idea: solve one equation for one variable, then "substitute" (plug) that expression into the other equation. You end up with one equation and one unknown — easy to solve!</p><p>This works best when one equation is already in the form "x = ..." or "y = ...".</p>` },
                { type: 'example', title: 'Elimination in Action', content: `<p><strong>Equation 1: x + y = 10</strong><br><strong>Equation 2: x − y = 4</strong></p><p>Add the two equations together. The y terms cancel out: (x + y) + (x − y) = 10 + 4 → 2x = 14 → x = 7.</p><p>Substitute x = 7 back into Equation 1: 7 + y = 10 → y = 3.</p><p>Solution: (7, 3). Check in both equations: 7+3=10 ✓ and 7−3=4 ✓</p>` },
                { type: 'generated_practice', generators: ['solve-system'] },
                { type: 'generated_practice', generators: ['substitution-system'] },
                { type: 'text', content: `<h3>How Many Solutions Can a System Have?</h3><p>When you solve a system, one of three things can happen:</p><p><strong>One solution</strong> (most common) — the two lines intersect at exactly one point. You find a specific (x, y) pair.</p><p><strong>No solution</strong> — the two lines are <em>parallel</em>. They have the same slope but different y-intercepts, so they never meet. Algebraically, you'll end up with a contradiction like 0 = 5.</p><p><strong>Infinitely many solutions</strong> — the two equations describe the <em>same line</em>. Every point on the line is a solution. Algebraically, you'll end up with a tautology like 0 = 0.</p>` },
                { type: 'practice', problems: [
                    { question: 'Solve: <strong>y = x + 3</strong> and <strong>2x + y = 12</strong>. What is y?', choices: ['3', '5', '6', '8'], correctIndex: 2, explanation: '2x + x + 3 = 12 → 3x = 9 → x = 3, y = <strong>6</strong>' },
                    { question: 'Solve: <strong>x + y = 8</strong> and <strong>x − y = 2</strong>. What is x?', choices: ['3', '5', '4', '6'], correctIndex: 1, explanation: 'Add: 2x = 10 → x = <strong>5</strong>' },
                    { question: 'A system has <strong>no solution</strong> when the lines are:', choices: ['Identical', 'Perpendicular', 'Parallel', 'Intersecting'], correctIndex: 2, explanation: '<strong>Parallel</strong> lines never meet.' },
                    { question: 'Solve: <strong>y = 2x</strong> and <strong>x + y = 9</strong>. Find x.', choices: ['2', '3', '4', '6'], correctIndex: 1, explanation: 'x + 2x = 9 → 3x = 9 → x = <strong>3</strong>' },
                ]}
            ]},

            // ---- 9. Multi-Step Equations ----
            { id: 'multi-step-equations', title: 'Multi-Step Equations', subtitle: 'Equations requiring several operations', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Multi-Step Equations</h3><p>Sometimes solving for x takes more than two moves. Don't worry — the process is always the same, just with a few extra steps. Here's a good game plan:</p><p><strong>Step 1 — Clean up each side first:</strong> Distribute any parentheses and combine like terms on each side before you start moving things across the equals sign.</p><p><strong>Step 2 — Gather variable terms on one side:</strong> If x appears on both sides (like 5x = 2x + 9), bring them together by adding or subtracting. It doesn't matter which side you choose — most people prefer the left.</p><p><strong>Step 3 — Isolate the variable:</strong> Use addition/subtraction to move constants, then divide to get x alone.</p>` },
                { type: 'example', title: 'Variables on Both Sides', content: `<p><strong>5x + 3 = 2x + 15</strong></p><p>Variable on both sides? Move them together: subtract 2x from both sides → 3x + 3 = 15.</p><p>Now it's a simple two-step: subtract 3 → 3x = 12. Divide by 3 → x = <strong>4</strong>.</p><p>Check: 5(4)+3 = 23 and 2(4)+15 = 23 ✓</p>` },
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
                { type: 'text', content: `<h3>What is Absolute Value?</h3><p>Imagine you're standing at zero on a number line. Whether you walk 5 steps to the right or 5 steps to the left, you're always <em>5 steps away</em> from where you started. That's absolute value — it measures <strong>distance from zero</strong>, which is always positive (or zero).</p><p>The notation <strong>|x|</strong> means "the distance of x from zero." So |5| = 5 and |−5| = 5, because both are 5 steps away from zero.</p><p>Solving absolute value equations is a bit different:</p><p>• <strong>|x| = a</strong> (where a > 0): two solutions — x = a <em>or</em> x = −a (both are distance a from zero).<br>• <strong>|x| = 0</strong>: only one solution — x = 0.<br>• <strong>|x| = negative number</strong>: <em>no solution</em> — distance can never be negative!</p>` },
                { type: 'example', title: 'Solving Absolute Value Equations', content: `<p><strong>|x − 3| = 7</strong></p><p>The expression inside could equal 7 <em>or</em> −7 (both have absolute value 7), so split into two cases:</p><p>Case 1: x − 3 = 7 → x = <strong>10</strong><br>Case 2: x − 3 = −7 → x = <strong>−4</strong></p><p>Both solutions are valid — always check both!</p>` },
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
                { type: 'text', content: `<h3>What is a Quadratic Equation?</h3><p>A quadratic equation has an x² term in it — like x² − 5x + 6 = 0. Because of that squared term, these equations can have <em>up to two</em> solutions (two values of x that work). When graphed, they form a U-shaped curve called a parabola.</p><h3>The Quadratic Formula</h3><p>When you can't easily factor an equation (more on factoring soon!), this formula always works. Given <strong>ax² + bx + c = 0</strong>, the solutions are:</p><p style="text-align:center; font-size:1.2em;"><strong>x = (−b ± √(b² − 4ac)) / 2a</strong></p><p>The ± means you calculate it twice — once with + and once with − — giving you up to two answers.</p><h3>The Discriminant: A Sneak Peek at the Answers</h3><p>The part under the square root, <strong>b² − 4ac</strong>, is called the <em>discriminant</em>. You can use it to predict how many solutions exist before doing any heavy math:</p><p>• Discriminant <strong>&gt; 0</strong>: two real solutions<br>• Discriminant <strong>= 0</strong>: exactly one solution<br>• Discriminant <strong>&lt; 0</strong>: no real solutions (you'd need imaginary numbers)</p>` },
                { type: 'example', title: 'Using the Formula', content: `<p><strong>x² − 5x + 6 = 0</strong> — here a = 1, b = −5, c = 6.</p><p>Discriminant: b² − 4ac = 25 − 24 = <strong>1</strong> (positive → two solutions).</p><p>x = (5 ± √1) / 2 = (5 ± 1) / 2</p><p>x = 6/2 = <strong>3</strong> or x = 4/2 = <strong>2</strong></p><p>Check: 3² − 5(3) + 6 = 9 − 15 + 6 = 0 ✓</p>` },
                { type: 'steps', title: 'Guided: Solve 2x² − 8x + 6 = 0', steps: ['Identify a, b, c: a = 2, b = −8, c = 6.', 'Calculate the discriminant: b² − 4ac = 64 − 48 = 16. Positive → two real solutions.', 'Plug into the formula: x = (8 ± √16) / 4 = (8 ± 4) / 4.', 'x = 12/4 = 3 and x = 4/4 = 1. Both are solutions.'] },
                { type: 'generated_practice', generators: ['find-discriminant'] },
                { type: 'generated_practice', generators: ['solve-quadratic-simple'] },
                { type: 'practice', problems: [
                    { question: 'Discriminant of <strong>x² + 4x + 4 = 0</strong>?', choices: ['0', '4', '8', '16'], correctIndex: 0, explanation: '16 − 16 = <strong>0</strong> → one solution' },
                    { question: 'How many real solutions when discriminant > 0?', choices: ['0', '1', '2', '3'], correctIndex: 2, explanation: 'Positive discriminant → <strong>two</strong> solutions.' },
                    { question: 'Which equation has <strong>no real solutions</strong>?', choices: ['x² − 4 = 0', 'x² + 4 = 0', 'x² − 4x + 4 = 0', 'x² + 4x − 4 = 0'], correctIndex: 1, explanation: 'x² + 4 = 0 → x² = −4. A square can\'t be negative → <strong>no real solutions</strong>.' },
                    { question: 'What is <strong>b² − 4ac</strong> called?', choices: ['The solution', 'The vertex', 'The discriminant', 'The axis'], correctIndex: 2, explanation: '<strong>The discriminant</strong>.' },
                ]}
            ]},

            // ---- 12. Factoring Polynomials ----
            { id: 'factoring', title: 'Factoring Polynomials', subtitle: 'Break down expressions into factors', xpReward: 70, sections: [
                { type: 'text', content: `<h3>Factoring Trinomials</h3><p>Factoring is like the reverse of expanding. Instead of multiplying (x + 2)(x + 3) to get x² + 5x + 6, we start with x² + 5x + 6 and figure out what two expressions multiply to make it.</p><p>For a trinomial in the form <strong>x² + bx + c</strong>, you're looking for two numbers that:</p><p>• <strong>Multiply together to give c</strong> (the last number)<br>• <strong>Add together to give b</strong> (the middle number)</p><p>Once you find those two numbers (call them p and q), the factored form is <strong>(x + p)(x + q)</strong>.</p>` },
                { type: 'example', title: 'Factoring a Trinomial', content: `<p><strong>x² + 7x + 12</strong></p><p>I need two numbers that multiply to 12 and add to 7. Let's try pairs that multiply to 12: 1×12, 2×6, 3×4... Got it: <strong>3 and 4</strong> (3×4=12 ✓, 3+4=7 ✓).</p><p>Answer: <strong>(x + 3)(x + 4)</strong></p>` },
                { type: 'generated_practice', generators: ['factor-trinomial'] },
                { type: 'text', content: `<h3>Difference of Squares</h3><p>There's a special shortcut when you see a perfect square <em>minus</em> another perfect square — like x² − 9. This pattern always factors neatly:</p><p><strong>a² − b² = (a + b)(a − b)</strong></p><p>For x² − 9: a = x and b = 3, so it factors as <strong>(x + 3)(x − 3)</strong>. Quick tip: you can always check by expanding — (x+3)(x−3) = x² − 9 ✓</p>` },
                { type: 'generated_practice', generators: ['factor-diff-squares'] },
                { type: 'text', content: `<h3>Factoring Out the GCF</h3><p>Before trying any other factoring method, always check if every term shares a common factor — called the <strong>Greatest Common Factor (GCF)</strong>. Factoring it out first makes everything simpler.</p><p>To find the GCF: look for the largest number (and any shared variable) that divides evenly into every term.</p><p>Example: <strong>6x + 12</strong> — both terms are divisible by 6. Factor it out: <strong>6(x + 2)</strong>.<br>Check by distributing: 6(x + 2) = 6x + 12 ✓</p><p>Example: <strong>4x² + 8x</strong> — both terms share 4x. Factor it out: <strong>4x(x + 2)</strong>.</p><p>Think of it like un-distributing. If you can factor the GCF out, do it as your very first step!</p>` },
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
                { type: 'text', content: `<h3>What is an Exponent?</h3><p>An exponent is a shorthand for repeated multiplication. Instead of writing 2 × 2 × 2 × 2, we write <strong>2⁴</strong> and say "2 to the fourth power." The big number (2) is the <em>base</em> and the small raised number (4) is the <em>exponent</em>.</p><h3>The Key Rules</h3><p><strong>Product Rule:</strong> When multiplying same bases, <em>add</em> the exponents.<br><code>a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup></code> &nbsp;→&nbsp; x³ × x⁴ = x⁷</p><p><strong>Quotient Rule:</strong> When dividing same bases, <em>subtract</em> the exponents.<br><code>a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup></code> &nbsp;→&nbsp; x⁵ ÷ x² = x³</p><p><strong>Power Rule:</strong> When raising a power to another power, <em>multiply</em> the exponents.<br><code>(a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup></code> &nbsp;→&nbsp; (x²)⁴ = x⁸</p><p><strong>Zero Exponent:</strong> Anything (except 0) raised to the power of zero equals 1.<br><code>a<sup>0</sup> = 1</code> &nbsp;→&nbsp; 7⁰ = 1. (The "why": x³ ÷ x³ = 1, and by the quotient rule it's x⁰ — so x⁰ must be 1!)</p><p><strong>Negative Exponent:</strong> A negative exponent means "take the reciprocal."<br><code>a<sup>−n</sup> = 1/a<sup>n</sup></code> &nbsp;→&nbsp; 2⁻³ = 1/2³ = 1/8</p>` },
                { type: 'generated_practice', generators: ['exponent-product'] },
                { type: 'generated_practice', generators: ['exponent-evaluate'] },
                { type: 'generated_practice', generators: ['exponent-power-rule'] },
                { type: 'generated_practice', generators: ['zero-neg-exponent'] },
                { type: 'practice', problems: [
                    { question: 'What is <strong>4⁰</strong>?', choices: ['0', '4', '1', 'Undefined'], correctIndex: 2, explanation: 'Any nonzero to 0 = <strong>1</strong>' },
                    { type: 'fill_in', question: 'Simplify: x⁴ × x³ = x^? (enter the exponent)', answer: '7', explanation: 'Add exponents: 4 + 3 = <strong>7</strong>, so x⁷' },
                    { question: 'Simplify: <strong>(x²)⁴</strong>', choices: ['x⁶', 'x⁸', 'x²', 'x¹⁶'], correctIndex: 1, explanation: 'Multiply exponents: <strong>x⁸</strong>' },
                    { type: 'fill_in', question: '3⁴ = ?', answer: '81', explanation: '3 × 3 × 3 × 3 = <strong>81</strong>' },
                    { question: 'What is <strong>2⁻³</strong>?', choices: ['−8', '−6', '1/8', '1/6'], correctIndex: 2, explanation: '2⁻³ = 1/2³ = <strong>1/8</strong>' },
                ]}
            ]},

            // ---- 14. Proportions & Ratios ----
            { id: 'proportions-ratios', title: 'Proportions and Ratios', subtitle: 'Understanding and solving proportions', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Ratios and Proportions</h3><p>A <strong>ratio</strong> is a way to compare two quantities. If a recipe uses 2 cups of flour and 1 cup of sugar, the ratio of flour to sugar is 2:1. Ratios can also be written as fractions: 2/1.</p><p>A <strong>proportion</strong> is a statement that two ratios are equal: <strong>a/b = c/d</strong>. This is super useful when you want to scale things up or down — like "if 2 tickets cost $10, how much do 5 tickets cost?"</p><p>The key tool for solving proportions is <strong>cross-multiplication</strong>: multiply diagonally across the equals sign. If a/b = c/d, then <strong>ad = bc</strong>. This lets you turn the proportion into a simple equation you can solve.</p><p><strong>Simplifying a ratio</strong> works just like reducing a fraction — divide both parts by their GCF. For example, 12:8 — both are divisible by 4 → <strong>3:2</strong>. A simplified ratio uses the smallest whole numbers that keep the same relationship.</p>` },
                { type: 'example', title: 'Cross-Multiplying', content: `<p><strong>3/4 = x/12</strong></p><p>Cross-multiply: 3 × 12 = 4 × x → 36 = 4x → x = <strong>9</strong></p><p>Check: 3/4 = 9/12? Simplify 9/12 = 3/4 ✓</p>` },
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
                { type: 'text', content: `<h3>Percent Basics</h3><p>"Percent" literally means <em>per hundred</em> — so 25% means 25 out of every 100. This makes percents great for comparing things on the same scale, like test scores, discounts, or tips.</p><p><strong>To find a percent of a number:</strong> convert the percent to a decimal by dividing by 100, then multiply. So 30% of 200 = 0.30 × 200 = 60.</p><p><strong>To convert a fraction to a percent:</strong> divide the numerator by the denominator to get a decimal, then multiply by 100. For example, 3/4 = 0.75 = <strong>75%</strong>. (Alternatively, ask yourself: "what equivalent fraction has 100 in the denominator?" 3/4 = 75/100 = 75%.)</p><p><strong>Percent change</strong> tells you how much something grew or shrank relative to where it started:</p><p style="text-align:center;"><strong>Percent change = (amount of change / original value) × 100%</strong></p><p>A positive result is an increase; a negative result is a decrease.</p>` },
                { type: 'example', title: 'Finding a Percent', content: `<p><strong>25% of 80:</strong><br>Convert: 25% = 0.25. Multiply: 0.25 × 80 = <strong>20</strong>.</p><p><strong>Price increase from $50 to $65:</strong><br>Amount of change = 65 − 50 = 15. Divide by original: 15/50 = 0.30. Multiply by 100: <strong>30% increase</strong>.</p>` },
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
                { type: 'text', content: `<h3>What is a Function?</h3><p>Think of a function like a vending machine: you press a button (the input), and you get exactly <em>one</em> snack (the output). The key rule is that the same input always produces the same output — and each input gives only <em>one</em> result, never two at once.</p><p>In math, we write functions using notation like <strong>f(x)</strong>, which is read "f of x." It means: "run x through the function f and see what comes out." The output depends on whatever x is.</p><p><strong>Functions as sets of ordered pairs:</strong> A function can also be shown as a set of (input, output) pairs written as <strong>(x, y)</strong>. For example, {(1, 2), (2, 4), (3, 6)} is a function — each x value appears only once. But {(1, 2), (1, 5), (2, 4)} is <em>not</em> a function, because x = 1 produces two different outputs (2 and 5). The rule is simple: <strong>no x value can appear more than once</strong> in the set.</p><h3>Domain and Range</h3><p><strong>Domain</strong>: the set of all valid inputs — all x values you're allowed to plug in. Watch out for values that would cause division by zero or a square root of a negative number — those are excluded.</p><p><strong>Range</strong>: the set of all possible outputs — all the y (or f(x)) values the function can produce.</p>` },
                { type: 'example', title: 'Evaluating a Function', content: `<p>f(x) = x² − 2x + 1. Find f(4):</p><p>Replace every x with 4: f(4) = (4)² − 2(4) + 1 = 16 − 8 + 1 = <strong>9</strong>.</p><p>So when the input is 4, the output is 9.</p>` },
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
                { type: 'text', content: `<h3>Rearranging Formulas</h3><p>A <strong>literal equation</strong> is an equation with more than one variable — like the distance formula d = rt, or the area formula A = πr². These appear everywhere in science and math.</p><p>Sometimes you need to rearrange a formula to solve for a specific variable. For example, if you know the distance and time of a trip but want the speed, you'd rearrange d = rt to solve for r.</p><p>Good news: the method is identical to solving regular equations. Use inverse operations to move everything else away from the variable you want, keeping the equation balanced at all times.</p>` },
                { type: 'example', title: 'Solving for r', content: `<p><strong>A = πr²</strong> — solve for r.</p><p>Step 1: Divide both sides by π → r² = A/π</p><p>Step 2: Take the square root of both sides → r = √(A/π)</p><p>Now you have a formula for radius when you know the area!</p>` },
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
                { type: 'text', content: `<h3>Combining Two Inequalities</h3><p>A compound inequality joins two conditions together using <strong>AND</strong> or <strong>OR</strong>. Think of AND and OR the same way you would in everyday conversation:</p><p><strong>AND</strong> — both conditions must be true at the same time. This creates an <em>intersection</em> (the overlap). For example, "the temperature is above 60° AND below 80°" describes a specific comfortable range. Written in math: <code>60 &lt; x &lt; 80</code>.</p><p><strong>OR</strong> — at least one condition must be true. This creates a <em>union</em> (both regions combined). For example, "the score is below 50 OR above 90" describes two separate failing/excellent ranges. Written in math: <code>x &lt; 50 OR x &gt; 90</code>.</p><p>To solve a compound inequality, work on each part separately using the same steps as regular inequalities.</p>` },
                { type: 'example', title: 'AND Inequality', content: `<p><strong>−3 ≤ x &lt; 5</strong></p><p>This is shorthand for "x ≥ −3 AND x &lt; 5." On a number line, you shade the region between −3 and 5.</p><p>Use a <em>closed dot</em> at −3 (because ≤ includes −3) and an <em>open dot</em> at 5 (because &lt; excludes 5).</p>` },
                { type: 'example', title: 'Solving a Compound Inequality Algebraically', content: `<p><strong>Solve: 2 &lt; x + 1 &lt; 6</strong></p><p>This means x + 1 is greater than 2 AND less than 6. Work on all three parts at once — whatever you do to the middle, do to both sides.</p><p>Subtract 1 from all three parts: 2 − 1 &lt; x + 1 − 1 &lt; 6 − 1</p><p>→ <strong>1 &lt; x &lt; 5</strong></p><p>The solution is all numbers between 1 and 5, not including the endpoints.</p>` },
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
                { type: 'text', content: `<h3>Adding & Subtracting Polynomials</h3><p>Adding polynomials is just like combining like terms — line up the matching terms and add (or subtract) their coefficients. The variables and exponents stay the same; only the numbers change.</p><p>⚠️ When <em>subtracting</em> a polynomial, distribute the negative sign to <em>every</em> term in the second polynomial before combining. For example, (5x − 3) − (2x + 1) becomes 5x − 3 − 2x − 1 = 3x − 4.</p><h3>Multiplying Polynomials: FOIL</h3><p>To multiply two binomials (expressions with two terms), use <strong>FOIL</strong> — it's a checklist to make sure you multiply every term by every other term:</p><p><strong>F</strong>irst — multiply the first terms of each binomial.<br><strong>O</strong>uter — multiply the outer terms (first of first, last of second).<br><strong>I</strong>nner — multiply the inner terms (last of first, first of second).<br><strong>L</strong>ast — multiply the last terms of each binomial.</p><p>Then combine any like terms in your result.</p>` },
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
                { type: 'text', content: `<h3>Completing the Square</h3><p>Have you noticed that expressions like (x + 3)² expand perfectly? The goal of "completing the square" is to rewrite a messy quadratic so it looks like one of those clean perfect squares. This is incredibly useful for finding the vertex of a parabola and for deriving the quadratic formula.</p><p>The key insight: to turn x² + bx into a perfect square, you add (b/2)² to it. This gives you (x + b/2)². But since we can't just add something to an equation without balance, we also subtract (b/2)² to keep it equal.</p><p>In short: <strong>x² + bx = (x + b/2)² − (b/2)²</strong></p><p>Once you've completed the square, the equation is in <em>vertex form</em>: <strong>y = (x − h)² + k</strong>, where (h, k) is the vertex of the parabola.</p>` },
                { type: 'steps', title: 'Complete the Square for x² + 6x', steps: ['Take half of the middle coefficient: 6/2 = 3.', 'Square that result: 3² = 9.', 'Add and subtract 9: x² + 6x + 9 − 9.', 'The first three terms form a perfect square: (x + 3)² − 9.', 'This tells us the vertex is at (−3, −9) when set equal to y.'] },
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
                { type: 'text', content: `<h3>Rational Expressions</h3><p>A rational expression is just a fraction where the numerator and/or denominator are polynomials instead of plain numbers — for example, (x² − 4)/(x − 2). They work exactly like regular fractions, so your fraction skills still apply!</p><p><strong>Simplifying:</strong> Just like you'd reduce 6/8 to 3/4 by canceling a common factor of 2, you can simplify rational expressions by factoring both top and bottom, then canceling common factors.</p><p><strong>⚠️ Critical rule:</strong> The denominator can <em>never</em> equal zero (division by zero is undefined). Before you simplify, figure out which values of x would make the denominator zero — those are "excluded values" and are not in the domain.</p>` },
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
                { type: 'text', content: `<h3>Square Roots and Radicals</h3><p>The square root symbol √ is asking a question: "What number, multiplied by itself, gives me this?" For example, √25 = 5 because 5 × 5 = 25.</p><p>To simplify a square root like √72, look for the largest <em>perfect square factor</em> hiding inside:</p><p>72 = 36 × 2, and √36 = 6, so √72 = √(36 × 2) = 6√2.</p><p>Two handy rules for working with radicals:</p><p>• <strong>√a × √b = √(ab)</strong> — you can multiply what's under the signs together.<br>• <strong>√(a/b) = √a / √b</strong> — or split them into separate roots.</p><p><strong>Adding radicals:</strong> You can only add radicals with the <em>same number under the root</em> (called the radicand). It's just like like terms: 3√5 + 2√5 = 5√5. But √3 + √5 cannot be simplified — different radicands.</p>` },
                { type: 'example', title: 'Simplifying Radicals', content: `<p><strong>√50</strong> — find the largest perfect square factor: 50 = 25 × 2<br>√50 = √25 × √2 = <strong>5√2</strong></p><p><strong>3√2 + 7√2</strong> — same radicand, so just add the coefficients: = <strong>10√2</strong></p>` },
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
                { type: 'text', content: `<h3>Scientific Notation</h3><p>Scientists often work with enormous or microscopic numbers — like the distance to a star (93,000,000 miles from Earth to the Sun) or the size of a virus (0.0000001 meters). Writing all those zeros is tedious and error-prone. Scientific notation is a cleaner way to express these numbers.</p><p>The format is: <strong>a × 10ⁿ</strong>, where <strong>1 ≤ a &lt; 10</strong> (one digit before the decimal point) and n is an integer.</p><p>• Large numbers have a <em>positive</em> n: the decimal point moves left (93,000,000 = 9.3 × 10⁷).<br>• Small numbers have a <em>negative</em> n: the decimal point moves right (0.0000001 = 1 × 10⁻⁷).</p><p>A quick trick: count how many places you move the decimal, and that's |n|. If you moved it left, n is positive. If you moved it right, n is negative.</p>` },
                { type: 'example', title: 'Converting', content: `<p><strong>45,000 → scientific notation:</strong><br>Move the decimal 4 places to the left to get 4.5. Answer: <strong>4.5 × 10⁴</strong></p><p><strong>0.0032 → scientific notation:</strong><br>Move the decimal 3 places to the right to get 3.2. Answer: <strong>3.2 × 10⁻³</strong></p>` },
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
                { type: 'text', content: `<h3>Arithmetic Sequences</h3><p>An arithmetic sequence is a list of numbers where you <em>add the same amount each time</em>. Think of it like climbing stairs: each step is the same height. The staircase is predictable!</p><p>That constant amount you add is called the <strong>common difference (d)</strong>. You can always find it by subtracting any term from the one after it.</p><p>To find any term in the sequence without listing them all out, use this formula:</p><p style="text-align:center;"><strong>aₙ = a₁ + (n − 1)d</strong></p><p>Where: <strong>aₙ</strong> is the term you want, <strong>a₁</strong> is the first term, <strong>d</strong> is the common difference, and <strong>n</strong> is the position of the term.</p><p>To find the sum of the first n terms:</p><p style="text-align:center;"><strong>Sₙ = n(a₁ + aₙ)/2</strong></p><p>This is just the average of the first and last terms, times how many terms there are.</p>` },
                { type: 'example', title: 'Finding the 10th Term', content: `<p>Sequence: 3, 7, 11, 15, ...</p><p>First term: a₁ = 3. Common difference: d = 7 − 3 = 4.</p><p>Using the formula for n = 10:<br>a₁₀ = 3 + (10 − 1) × 4 = 3 + 36 = <strong>39</strong></p>` },
                { type: 'generated_practice', generators: ['nth-term-arithmetic'] },
                { type: 'generated_practice', generators: ['arithmetic-common-diff'] },
                { type: 'text', content: `<h3>Arithmetic vs. Geometric Sequences</h3><p>It's easy to confuse arithmetic sequences with a similar type called <strong>geometric sequences</strong>. Here's the key difference:</p><p>• <strong>Arithmetic</strong>: you <em>add</em> the same number each time (constant difference). Example: 3, 7, 11, 15 ... (add 4 each time).</p><p>• <strong>Geometric</strong>: you <em>multiply</em> by the same number each time (constant ratio). Example: 3, 6, 12, 24 ... (multiply by 2 each time).</p><p>Quick check: subtract consecutive terms — if the difference is constant, it's arithmetic. Divide consecutive terms — if the ratio is constant, it's geometric.</p>` },
                { type: 'practice', problems: [
                    { question: 'Sequence: 5, 8, 11, 14, ... Common difference?', choices: ['2', '3', '5', '8'], correctIndex: 1, explanation: '8 − 5 = <strong>3</strong>' },
                    { question: 'Find the 8th term: a₁ = 2, d = 5.', choices: ['37', '42', '40', '35'], correctIndex: 0, explanation: '2 + 7(5) = 2 + 35 = <strong>37</strong>' },
                    { question: 'Is 3, 6, 12, 24, ... arithmetic?', choices: ['Yes, d = 3', 'Yes, d = 6', 'No, it\'s geometric', 'No, it\'s random'], correctIndex: 2, explanation: 'The ratio is constant (×2), not the difference → <strong>geometric</strong>.' },
                ]}
            ]},

            // ---- 25. Word Problems ----
            { id: 'word-problems', title: 'Algebraic Word Problems', subtitle: 'Translate words into equations', xpReward: 60, sections: [
                { type: 'text', content: `<h3>Strategy for Word Problems</h3><p>Word problems can feel intimidating, but they're just regular algebra problems wearing a disguise. The trick is to <em>translate</em> the English into math. Here's a reliable four-step approach:</p><p><strong>1. Read carefully and name your unknown.</strong> Decide what you're solving for, assign it a variable (usually x), and write it down. ("Let x = the number of tickets sold.")</p><p><strong>2. Translate key phrases into math symbols.</strong> Some common translations:</p><p>• "is" or "equals" → =<br>• "more than" or "increased by" → +<br>• "less than" or "decreased by" → −<br>• "of" or "times" → ×<br>• "twice" or "double" → 2×<br>• "half of" → ÷ 2</p><p><strong>Useful geometry formulas</strong> that often appear in word problems:</p><p>• Perimeter of a square: <strong>P = 4s</strong> (s = side length)<br>• Perimeter of a rectangle: <strong>P = 2l + 2w</strong><br>• Area of a rectangle: <strong>A = l × w</strong></p><p><strong>3. Solve the equation</strong> using the methods you've learned.</p><p><strong>4. Check if your answer makes sense in the real world.</strong> Can you have a negative number of people? Does the answer fit the story?</p>` },
                { type: 'steps', title: 'Guided: "The sum of a number and 7 is 15."', steps: ['Let x = the unknown number.', 'Translate: "sum of a number and 7" = x + 7. "is 15" = = 15. Equation: x + 7 = 15.', 'Solve: x = 15 − 7 = 8.', 'Check: 8 + 7 = 15 ✓ Makes sense!'] },
                { type: 'generated_practice', generators: ['translate-to-equation'] },
                { type: 'generated_practice', generators: ['word-problem-solve'] },
                { type: 'practice', problems: [
                    { question: '"Five less than twice a number is 11" → equation?', choices: ['5 − 2x = 11', '2x − 5 = 11', '2x + 5 = 11', '2(x − 5) = 11'], correctIndex: 1, explanation: '"Twice a number" = 2x. "Five less than" = subtract 5: <strong>2x − 5 = 11</strong>' },
                    { question: 'The perimeter of a square is 36. Side length?', choices: ['6', '9', '18', '12'], correctIndex: 1, explanation: 'P = 4s → 36 = 4s → s = <strong>9</strong>' },
                    { question: 'Tom is twice as old as Jane. Together they are 24. Tom\'s age?', choices: ['8', '12', '16', '20'], correctIndex: 2, explanation: 'J + 2J = 24 → 3J = 24 → J = 8, Tom = <strong>16</strong>' },
                ]}
            ]},

            // ---- 26. Logarithms Intro ----
            { id: 'logarithms-intro', title: 'Introduction to Logarithms', subtitle: 'The inverse of exponentiation', xpReward: 70, sections: [
                { type: 'text', content: `<h3>What is a Logarithm?</h3><p>You already know that 2³ = 8. But what if the question was flipped: "2 to what power gives 8?" That flipped question is exactly what a logarithm answers.</p><p><strong>log₂(8) = 3</strong> asks: "What power must I raise 2 to in order to get 8?" The answer is 3, because 2³ = 8.</p><p>The general form: <strong>log<sub>b</sub>(x) = y</strong> means the same thing as <strong>b<sup>y</sup> = x</strong>. Logarithms and exponents are two sides of the same coin — if you understand one, you understand both.</p><p>A few key facts worth memorizing:</p><p>• <strong>log<sub>b</sub>(b) = 1</strong> — any base to the first power is itself.<br>• <strong>log<sub>b</sub>(1) = 0</strong> — any base to the zero power is 1.<br>• <strong>log<sub>b</sub>(bⁿ) = n</strong> — the log "undoes" the exponent.</p><h3>Logarithm Properties</h3><p>Logs have three key properties that let you break apart or combine expressions. These mirror the exponent rules you already know:</p><p>• <strong>Product Rule:</strong> log(a × b) = log(a) + log(b) — a log of a product becomes a <em>sum</em> of logs.<br>• <strong>Quotient Rule:</strong> log(a / b) = log(a) − log(b) — a log of a quotient becomes a <em>difference</em> of logs.<br>• <strong>Power Rule:</strong> log(aⁿ) = n × log(a) — an exponent inside a log moves to the front as a multiplier.</p><p>Example: log(3 × 5) = log(3) + log(5). You don't need to calculate the individual values — just know the rules!</p>` },
                { type: 'example', title: 'Evaluating Logs', content: `<p><strong>log₂(8) = ?</strong></p><p>Ask yourself: "2 to what power equals 8?"<br>2¹ = 2, 2² = 4, 2³ = 8 → the answer is <strong>3</strong>.</p><p><strong>log₁₀(100) = ?</strong></p><p>"10 to what power equals 100?" → 10² = 100 → answer is <strong>2</strong>.</p>` },
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
                { type: 'text', content: `<h3>You've Made It — Let's Bring It All Together!</h3><p>You've covered a tremendous amount of ground across this Algebra path — from the very first steps of evaluating expressions all the way through logarithms. This final lesson is your chance to revisit the big ideas and make sure they've really clicked.</p><p>Don't worry if some topics feel shakier than others — that's completely normal! Use this review to spot any gaps, then revisit those earlier lessons for a quick refresher. Each topic you've learned builds on the ones before it, so solidifying your foundation here will pay off in every future math course.</p><p>Key concepts you've mastered:</p><p>• Solving linear and quadratic equations<br>• Factoring expressions and working with polynomials<br>• Understanding functions, graphs, and their properties<br>• Working with exponents, radicals, and rational expressions<br>• Applying algebra to real-world word problems</p>` },
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
};
