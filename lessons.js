// ============================================================
// IBIS ACADEMY — FULL LESSON CONTENT
// Each lesson has: text sections, worked examples, tips,
// and mandatory guided practice problems.
// ============================================================

export const lessonPaths = {
    // ========================================================
    // ALGEBRA PATH (10 lessons)
    // ========================================================
    algebra: {
        name: 'Algebra Path',
        icon: '📐',
        lessons: [
            // ---- LESSON 1 ----
            {
                id: 'intro-algebra',
                title: 'Introduction to Algebra',
                subtitle: 'Understanding variables and expressions',
                xpReward: 30,
                sections: [
                    { type: 'text', content: `
                        <h3>What is Algebra?</h3>
                        <p>Algebra is a branch of mathematics that uses <strong>letters</strong> (called <em>variables</em>) to represent unknown numbers. Instead of saying "some number plus 3 equals 7", we write:</p>
                        <p style="text-align:center; font-size:1.3em;"><strong>x + 3 = 7</strong></p>
                        <p>The letter <strong>x</strong> is a <em>variable</em> — it stands in for the number we want to find.</p>
                        <h3>Expressions vs. Equations</h3>
                        <p>An <strong>expression</strong> is a mathematical phrase that combines numbers, variables, and operations — for example <em>3x + 5</em>. It does not have an equals sign.</p>
                        <p>An <strong>equation</strong> sets two expressions equal to each other — for example <em>3x + 5 = 20</em>. Our job is to find the value of x that makes both sides equal.</p>
                    `},
                    { type: 'example', title: 'Evaluating an Expression', content: `
                        <p><strong>Evaluate 2x + 4 when x = 3</strong></p>
                        <p>Replace x with 3:</p>
                        <p>2(3) + 4 = 6 + 4 = <strong>10</strong></p>
                    `},
                    { type: 'tips', content: `
                        <h4>💡 Key Takeaways</h4>
                        <ul>
                            <li>A <strong>variable</strong> is a letter that represents an unknown value.</li>
                            <li>A <strong>coefficient</strong> is the number multiplied by a variable (in 5x, the coefficient is 5).</li>
                            <li>A <strong>constant</strong> is a plain number with no variable (like the 4 in 2x + 4).</li>
                            <li>To <strong>evaluate</strong> an expression, substitute the given value for the variable and compute.</li>
                        </ul>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'Evaluate <strong>4x + 1</strong> when x = 5.',
                            choices: ['9', '21', '25', '16'],
                            correctIndex: 1,
                            explanation: 'Substitute x = 5: 4(5) + 1 = 20 + 1 = <strong>21</strong>'
                        },
                        {
                            question: 'In the expression <strong>7y − 3</strong>, what is the coefficient of y?',
                            choices: ['3', 'y', '−3', '7'],
                            correctIndex: 3,
                            explanation: 'The coefficient is the number in front of the variable. In 7y, the coefficient is <strong>7</strong>.'
                        }
                    ]}
                ]
            },
            // ---- LESSON 2 ----
            {
                id: 'linear-equations',
                title: 'Linear Equations',
                subtitle: 'Solve equations of the form ax + b = c',
                xpReward: 50,
                sections: [
                    { type: 'text', content: `
                        <h3>Solving One-Step and Two-Step Equations</h3>
                        <p>The golden rule of equations: <strong>whatever you do to one side, you must do to the other</strong>. This keeps the equation balanced.</p>
                        <p>To solve <em>ax + b = c</em>:</p>
                        <ol>
                            <li><strong>Subtract b</strong> from both sides → ax = c − b</li>
                            <li><strong>Divide by a</strong> on both sides → x = (c − b) / a</li>
                        </ol>
                    `},
                    { type: 'example', title: 'Solving a Two-Step Equation', content: `
                        <p><strong>Solve: 3x + 7 = 22</strong></p>
                        <p>Step 1: Subtract 7 from both sides<br>3x = 22 − 7 = 15</p>
                        <p>Step 2: Divide both sides by 3<br>x = 15 ÷ 3 = <strong>5</strong></p>
                        <p><em>Check: 3(5) + 7 = 15 + 7 = 22</em> ✓</p>
                    `},
                    { type: 'tips', content: `
                        <h4>💡 Pro Tips</h4>
                        <ul>
                            <li>Always <strong>undo addition/subtraction first</strong>, then multiplication/division.</li>
                            <li><strong>Check your answer</strong> by plugging it back into the original equation.</li>
                            <li>If the variable is negative (e.g., −x = 4), multiply both sides by −1 to get x = −4.</li>
                        </ul>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'Solve for x: <strong>5x + 3 = 28</strong>',
                            choices: ['x = 4', 'x = 5', 'x = 6', 'x = 7'],
                            correctIndex: 1,
                            explanation: '5x + 3 = 28 → 5x = 25 → x = <strong>5</strong>. Check: 5(5) + 3 = 28 ✓'
                        },
                        {
                            question: 'Solve for x: <strong>2x − 8 = 12</strong>',
                            choices: ['x = 2', 'x = 4', 'x = 8', 'x = 10'],
                            correctIndex: 3,
                            explanation: '2x − 8 = 12 → 2x = 20 → x = <strong>10</strong>. Check: 2(10) − 8 = 12 ✓'
                        }
                    ]}
                ]
            },
            // ---- LESSON 3 ----
            {
                id: 'solving-inequalities',
                title: 'Solving Inequalities',
                subtitle: 'Work with <, >, ≤, and ≥ symbols',
                xpReward: 50,
                sections: [
                    { type: 'text', content: `
                        <h3>What are Inequalities?</h3>
                        <p>An inequality is like an equation, but instead of = it uses one of these symbols:</p>
                        <ul>
                            <li><strong>&lt;</strong> — less than</li>
                            <li><strong>&gt;</strong> — greater than</li>
                            <li><strong>≤</strong> — less than or equal to</li>
                            <li><strong>≥</strong> — greater than or equal to</li>
                        </ul>
                        <p>You solve inequalities the same way as equations, with <strong>one critical rule</strong>: if you multiply or divide both sides by a <em>negative number</em>, you must <strong>flip the inequality sign</strong>.</p>
                    `},
                    { type: 'example', title: 'Solving an Inequality', content: `
                        <p><strong>Solve: −2x + 5 > 11</strong></p>
                        <p>Step 1: Subtract 5 → −2x > 6</p>
                        <p>Step 2: Divide by −2 and <strong>flip the sign</strong> → x < −3</p>
                        <p>The solution is all values less than −3.</p>
                    `},
                    { type: 'example', title: 'No Sign Flip Needed', content: `
                        <p><strong>Solve: 3x + 4 ≤ 19</strong></p>
                        <p>Step 1: Subtract 4 → 3x ≤ 15</p>
                        <p>Step 2: Divide by 3 (positive, so no flip) → x ≤ 5</p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'Solve: <strong>4x − 2 > 14</strong>',
                            choices: ['x > 3', 'x > 4', 'x < 4', 'x > 2'],
                            correctIndex: 1,
                            explanation: '4x − 2 > 14 → 4x > 16 → x > <strong>4</strong>. No sign flip because we divided by a positive number.'
                        },
                        {
                            question: 'Solve: <strong>−3x ≥ 12</strong>',
                            choices: ['x ≥ −4', 'x ≤ −4', 'x ≥ 4', 'x ≤ 4'],
                            correctIndex: 1,
                            explanation: 'Divide by −3 and <strong>flip</strong> ≥ to ≤: x ≤ <strong>−4</strong>'
                        }
                    ]}
                ]
            },
            // ---- LESSON 4 ----
            {
                id: 'graphing-lines',
                title: 'Graphing Linear Equations',
                subtitle: 'Plot lines using slope and y-intercept',
                xpReward: 60,
                sections: [
                    { type: 'text', content: `
                        <h3>Slope-Intercept Form</h3>
                        <p>The most common way to write a linear equation is <strong>slope-intercept form</strong>:</p>
                        <p style="text-align:center; font-size:1.3em;"><strong>y = mx + b</strong></p>
                        <ul>
                            <li><strong>m</strong> = the <em>slope</em> (how steep the line is). It tells you: for every 1 unit you move right, the line goes up by m units.</li>
                            <li><strong>b</strong> = the <em>y-intercept</em> (where the line crosses the y-axis).</li>
                        </ul>
                        <h3>Calculating Slope</h3>
                        <p>Given two points (x₁, y₁) and (x₂, y₂), the slope is:</p>
                        <p style="text-align:center; font-size:1.2em;"><strong>m = (y₂ − y₁) / (x₂ − x₁)</strong></p>
                        <p>This is often called "rise over run".</p>
                    `},
                    { type: 'example', title: 'Finding Slope from Two Points', content: `
                        <p><strong>Find the slope between (2, 3) and (6, 11)</strong></p>
                        <p>m = (11 − 3) / (6 − 2) = 8 / 4 = <strong>2</strong></p>
                        <p>This means the line rises 2 units for every 1 unit to the right.</p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'In the equation <strong>y = 3x − 5</strong>, what is the slope?',
                            choices: ['−5', '3', '5', '−3'],
                            correctIndex: 1,
                            explanation: 'In y = mx + b, m is the slope. Here m = <strong>3</strong> and b = −5.'
                        },
                        {
                            question: 'What is the slope between the points <strong>(1, 4)</strong> and <strong>(3, 10)</strong>?',
                            choices: ['2', '3', '6', '7'],
                            correctIndex: 1,
                            explanation: 'm = (10 − 4) / (3 − 1) = 6 / 2 = <strong>3</strong>'
                        }
                    ]}
                ]
            },
            // ---- LESSON 5 ----
            {
                id: 'systems-equations',
                title: 'Systems of Equations',
                subtitle: 'Solve two equations simultaneously',
                xpReward: 75,
                sections: [
                    { type: 'text', content: `
                        <h3>What is a System of Equations?</h3>
                        <p>A system is a set of two (or more) equations with the same variables. The solution is the values that make <em>all</em> equations true at the same time.</p>
                        <h3>Substitution Method</h3>
                        <ol>
                            <li>Solve one equation for a variable.</li>
                            <li>Substitute that expression into the other equation.</li>
                            <li>Solve for the remaining variable, then back-substitute.</li>
                        </ol>
                        <h3>Elimination Method</h3>
                        <ol>
                            <li>Line up the equations.</li>
                            <li>Add or subtract them to eliminate one variable.</li>
                            <li>Solve for the remaining variable, then back-substitute.</li>
                        </ol>
                    `},
                    { type: 'example', title: 'Substitution Method', content: `
                        <p><strong>Solve: y = 2x + 1 and 3x + y = 16</strong></p>
                        <p>Substitute y = 2x + 1 into the second equation:</p>
                        <p>3x + (2x + 1) = 16</p>
                        <p>5x + 1 = 16 → 5x = 15 → x = <strong>3</strong></p>
                        <p>Then y = 2(3) + 1 = <strong>7</strong></p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'Solve the system: <strong>x + y = 10</strong> and <strong>x − y = 4</strong>. What is x?',
                            choices: ['3', '5', '7', '4'],
                            correctIndex: 2,
                            explanation: 'Add both equations: 2x = 14 → x = <strong>7</strong>. Then y = 10 − 7 = 3.'
                        },
                        {
                            question: 'Solve: <strong>y = x + 3</strong> and <strong>2x + y = 12</strong>. What is y?',
                            choices: ['3', '5', '6', '8'],
                            correctIndex: 2,
                            explanation: 'Substitute: 2x + (x + 3) = 12 → 3x = 9 → x = 3. Then y = 3 + 3 = <strong>6</strong>.'
                        }
                    ]}
                ]
            },
            // ---- LESSON 6 ----
            {
                id: 'quadratic-equations',
                title: 'Quadratic Equations',
                subtitle: 'Master equations of the form ax² + bx + c = 0',
                xpReward: 75,
                sections: [
                    { type: 'text', content: `
                        <h3>What is a Quadratic Equation?</h3>
                        <p>A quadratic equation has the form <strong>ax² + bx + c = 0</strong>, where a ≠ 0. The highest power of x is 2, which gives the graph a U-shape called a <em>parabola</em>.</p>
                        <h3>The Quadratic Formula</h3>
                        <p style="text-align:center; font-size:1.2em;"><strong>x = (−b ± √(b² − 4ac)) / 2a</strong></p>
                        <p>The expression under the square root, <strong>b² − 4ac</strong>, is called the <em>discriminant</em>:</p>
                        <ul>
                            <li>If positive → two real solutions</li>
                            <li>If zero → one real solution</li>
                            <li>If negative → no real solutions</li>
                        </ul>
                    `},
                    { type: 'example', title: 'Using the Quadratic Formula', content: `
                        <p><strong>Solve: x² − 5x + 6 = 0</strong></p>
                        <p>Here a = 1, b = −5, c = 6</p>
                        <p>Discriminant = (−5)² − 4(1)(6) = 25 − 24 = 1</p>
                        <p>x = (5 ± √1) / 2 = (5 ± 1) / 2</p>
                        <p>x = <strong>3</strong> or x = <strong>2</strong></p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'What is the discriminant of <strong>x² + 4x + 4 = 0</strong>?',
                            choices: ['0', '4', '8', '16'],
                            correctIndex: 0,
                            explanation: 'b² − 4ac = (4)² − 4(1)(4) = 16 − 16 = <strong>0</strong>. This means there is exactly one real solution.'
                        },
                        {
                            question: 'Solve: <strong>x² − 9 = 0</strong>. What is the positive root?',
                            choices: ['1', '3', '9', '81'],
                            correctIndex: 1,
                            explanation: 'x² = 9 → x = ±√9 → x = ±3. The positive root is <strong>3</strong>.'
                        }
                    ]}
                ]
            },
            // ---- LESSON 7 ----
            {
                id: 'factoring',
                title: 'Factoring Polynomials',
                subtitle: 'Break down expressions into factors',
                xpReward: 70,
                sections: [
                    { type: 'text', content: `
                        <h3>Why Factor?</h3>
                        <p>Factoring rewrites an expression as a product of simpler pieces. This is essential for solving equations, simplifying fractions, and understanding graphs.</p>
                        <h3>Common Factoring Techniques</h3>
                        <ul>
                            <li><strong>Greatest Common Factor (GCF):</strong> Pull out the largest factor shared by all terms. E.g., 6x² + 9x = 3x(2x + 3)</li>
                            <li><strong>Factoring Trinomials:</strong> For x² + bx + c, find two numbers that multiply to c and add to b.</li>
                            <li><strong>Difference of Squares:</strong> a² − b² = (a + b)(a − b)</li>
                        </ul>
                    `},
                    { type: 'example', title: 'Factoring a Trinomial', content: `
                        <p><strong>Factor: x² + 7x + 12</strong></p>
                        <p>Find two numbers that multiply to 12 and add to 7:</p>
                        <p>3 × 4 = 12 and 3 + 4 = 7 ✓</p>
                        <p>So: x² + 7x + 12 = <strong>(x + 3)(x + 4)</strong></p>
                    `},
                    { type: 'example', title: 'Difference of Squares', content: `
                        <p><strong>Factor: x² − 25</strong></p>
                        <p>This is a² − b² where a = x and b = 5</p>
                        <p>x² − 25 = <strong>(x + 5)(x − 5)</strong></p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'Factor: <strong>x² + 5x + 6</strong>',
                            choices: ['(x + 1)(x + 6)', '(x + 2)(x + 3)', '(x + 5)(x + 1)', '(x − 2)(x − 3)'],
                            correctIndex: 1,
                            explanation: 'We need two numbers that multiply to 6 and add to 5: that\'s 2 and 3. Answer: <strong>(x + 2)(x + 3)</strong>'
                        },
                        {
                            question: 'Factor: <strong>x² − 16</strong>',
                            choices: ['(x − 8)(x + 2)', '(x + 4)(x + 4)', '(x + 4)(x − 4)', '(x − 2)(x + 8)'],
                            correctIndex: 2,
                            explanation: 'This is a difference of squares: x² − 4² = <strong>(x + 4)(x − 4)</strong>'
                        }
                    ]}
                ]
            },
            // ---- LESSON 8 ----
            {
                id: 'exponents',
                title: 'Exponents and Powers',
                subtitle: 'Master exponent rules',
                xpReward: 60,
                sections: [
                    { type: 'text', content: `
                        <h3>Exponent Rules</h3>
                        <p>Exponents tell you how many times to multiply a base by itself. Here are the essential rules:</p>
                        <ul>
                            <li><strong>Product Rule:</strong> a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup></li>
                            <li><strong>Quotient Rule:</strong> a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup></li>
                            <li><strong>Power Rule:</strong> (a<sup>m</sup>)<sup>n</sup> = a<sup>m×n</sup></li>
                            <li><strong>Zero Exponent:</strong> a<sup>0</sup> = 1 (as long as a ≠ 0)</li>
                            <li><strong>Negative Exponent:</strong> a<sup>−n</sup> = 1/a<sup>n</sup></li>
                        </ul>
                    `},
                    { type: 'example', title: 'Applying the Rules', content: `
                        <p><strong>Simplify: 2<sup>3</sup> × 2<sup>4</sup></strong></p>
                        <p>Product rule: 2<sup>3+4</sup> = 2<sup>7</sup> = <strong>128</strong></p>
                        <p><strong>Simplify: (x<sup>3</sup>)<sup>2</sup></strong></p>
                        <p>Power rule: x<sup>3×2</sup> = <strong>x<sup>6</sup></strong></p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'Simplify <strong>5<sup>3</sup> × 5<sup>2</sup></strong>. What is the exponent of the result?',
                            choices: ['6', '5', '1', '15'],
                            correctIndex: 1,
                            explanation: 'Product rule: 5<sup>3</sup> × 5<sup>2</sup> = 5<sup>3+2</sup> = 5<sup><strong>5</strong></sup>'
                        },
                        {
                            question: 'What is the value of <strong>4<sup>0</sup></strong>?',
                            choices: ['0', '4', '1', 'Undefined'],
                            correctIndex: 2,
                            explanation: 'Any nonzero number raised to the power of 0 equals <strong>1</strong>. So 4<sup>0</sup> = 1.'
                        }
                    ]}
                ]
            },
            // ---- LESSON 9 ----
            {
                id: 'functions',
                title: 'Functions & Graphs',
                subtitle: 'Understanding function notation',
                xpReward: 75,
                sections: [
                    { type: 'text', content: `
                        <h3>What is a Function?</h3>
                        <p>A function is a rule that takes each input and produces exactly <strong>one output</strong>. We write <strong>f(x)</strong> to mean "the output of function f when the input is x".</p>
                        <p>Think of it as a machine: you feed in x, and out comes f(x).</p>
                        <h3>Domain and Range</h3>
                        <ul>
                            <li><strong>Domain:</strong> the set of all valid inputs (x-values).</li>
                            <li><strong>Range:</strong> the set of all possible outputs (y-values).</li>
                        </ul>
                        <p>For example, f(x) = √x has domain x ≥ 0 (you can't take the square root of a negative number in real numbers) and range y ≥ 0.</p>
                    `},
                    { type: 'example', title: 'Evaluating a Function', content: `
                        <p><strong>If f(x) = x² − 2x + 1, find f(4).</strong></p>
                        <p>f(4) = (4)² − 2(4) + 1 = 16 − 8 + 1 = <strong>9</strong></p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'If <strong>f(x) = 3x − 7</strong>, what is f(5)?',
                            choices: ['8', '15', '22', '2'],
                            correctIndex: 0,
                            explanation: 'f(5) = 3(5) − 7 = 15 − 7 = <strong>8</strong>'
                        },
                        {
                            question: 'If <strong>g(x) = x² + 1</strong>, what is g(3)?',
                            choices: ['4', '7', '10', '12'],
                            correctIndex: 2,
                            explanation: 'g(3) = (3)² + 1 = 9 + 1 = <strong>10</strong>'
                        }
                    ]}
                ]
            },
            // ---- LESSON 10 ----
            {
                id: 'rational-expressions',
                title: 'Rational Expressions',
                subtitle: 'Work with algebraic fractions',
                xpReward: 80,
                sections: [
                    { type: 'text', content: `
                        <h3>What is a Rational Expression?</h3>
                        <p>A rational expression is a fraction where the numerator and/or denominator are polynomials. For example:</p>
                        <p style="text-align:center; font-size:1.2em;">(x² + 3x) / (x + 3)</p>
                        <h3>Simplifying</h3>
                        <p>To simplify, factor numerator and denominator, then cancel common factors.</p>
                        <h3>Important Restriction</h3>
                        <p>The denominator can <strong>never equal zero</strong>. Always state the values of x that are excluded.</p>
                    `},
                    { type: 'example', title: 'Simplifying a Rational Expression', content: `
                        <p><strong>Simplify: (x² + 3x) / (x + 3)</strong></p>
                        <p>Factor numerator: x(x + 3) / (x + 3)</p>
                        <p>Cancel (x + 3): = <strong>x</strong>&nbsp;&nbsp;(where x ≠ −3)</p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'Simplify: <strong>(x² − 4) / (x − 2)</strong>',
                            choices: ['x − 2', 'x + 2', 'x² − 2', '2x'],
                            correctIndex: 1,
                            explanation: 'Factor numerator as a difference of squares: (x+2)(x−2) / (x−2). Cancel (x−2) to get <strong>x + 2</strong> (where x ≠ 2).'
                        },
                        {
                            question: 'For the expression <strong>5 / (x − 3)</strong>, what value of x is excluded?',
                            choices: ['x = 0', 'x = 5', 'x = −3', 'x = 3'],
                            correctIndex: 3,
                            explanation: 'The denominator cannot be zero: x − 3 ≠ 0, so <strong>x ≠ 3</strong>.'
                        }
                    ]}
                ]
            }
        ]
    },

    // ========================================================
    // GEOMETRY PATH (10 lessons)
    // ========================================================
    geometry: {
        name: 'Geometry Path',
        icon: '📏',
        lessons: [
            // ---- LESSON 1 ----
            {
                id: 'intro-geometry',
                title: 'Introduction to Geometry',
                subtitle: 'Points, lines, and planes',
                xpReward: 30,
                sections: [
                    { type: 'text', content: `
                        <h3>The Building Blocks</h3>
                        <p>Geometry is the study of shapes, sizes, and the relationships between them. Everything starts with three undefined terms:</p>
                        <ul>
                            <li><strong>Point:</strong> A location in space with no size — just a position. We name it with a capital letter (Point A).</li>
                            <li><strong>Line:</strong> A straight path that extends infinitely in both directions. Defined by two points.</li>
                            <li><strong>Plane:</strong> A flat surface that extends infinitely in all directions.</li>
                        </ul>
                        <h3>Segments and Rays</h3>
                        <ul>
                            <li>A <strong>line segment</strong> has two endpoints — it's a piece of a line with a definite length.</li>
                            <li>A <strong>ray</strong> has one endpoint and extends infinitely in one direction.</li>
                        </ul>
                    `},
                    { type: 'example', title: 'Identifying Figures', content: `
                        <p><strong>How many points determine a line?</strong></p>
                        <p>Exactly <strong>2 points</strong>. Through any two distinct points, there is exactly one line.</p>
                        <p><strong>How many points determine a plane?</strong></p>
                        <p>Exactly <strong>3 non-collinear points</strong> (points not all on the same line).</p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'Which geometric figure has exactly <strong>two endpoints</strong>?',
                            choices: ['Line', 'Ray', 'Line segment', 'Point'],
                            correctIndex: 2,
                            explanation: 'A <strong>line segment</strong> has two endpoints. A line has none (infinite in both directions), and a ray has exactly one.'
                        },
                        {
                            question: 'How many points are needed to define a unique line?',
                            choices: ['1', '2', '3', '4'],
                            correctIndex: 1,
                            explanation: 'Through any <strong>2</strong> distinct points, there is exactly one line.'
                        }
                    ]}
                ]
            },
            // ---- LESSON 2 ----
            {
                id: 'angles',
                title: 'Angles',
                subtitle: 'Types and measurements of angles',
                xpReward: 40,
                sections: [
                    { type: 'text', content: `
                        <h3>What is an Angle?</h3>
                        <p>An angle is formed by two rays that share a common endpoint called the <strong>vertex</strong>. We measure angles in <strong>degrees (°)</strong>.</p>
                        <h3>Types of Angles</h3>
                        <ul>
                            <li><strong>Acute:</strong> Less than 90°</li>
                            <li><strong>Right:</strong> Exactly 90°</li>
                            <li><strong>Obtuse:</strong> Between 90° and 180°</li>
                            <li><strong>Straight:</strong> Exactly 180°</li>
                        </ul>
                        <h3>Angle Relationships</h3>
                        <ul>
                            <li><strong>Complementary angles</strong> add up to 90°.</li>
                            <li><strong>Supplementary angles</strong> add up to 180°.</li>
                            <li><strong>Vertical angles</strong> (formed by intersecting lines) are equal.</li>
                        </ul>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'An angle measures 135°. What type of angle is it?',
                            choices: ['Acute', 'Right', 'Obtuse', 'Straight'],
                            correctIndex: 2,
                            explanation: '135° is between 90° and 180°, so it is an <strong>obtuse</strong> angle.'
                        },
                        {
                            question: 'Two angles are supplementary. One measures 65°. What is the other?',
                            choices: ['25°', '115°', '90°', '35°'],
                            correctIndex: 1,
                            explanation: 'Supplementary angles add to 180°: 180° − 65° = <strong>115°</strong>'
                        }
                    ]}
                ]
            },
            // ---- LESSON 3 ----
            {
                id: 'triangles',
                title: 'Triangles',
                subtitle: 'Properties, types, and theorems',
                xpReward: 50,
                sections: [
                    { type: 'text', content: `
                        <h3>Triangle Basics</h3>
                        <p>A triangle is a polygon with three sides and three angles. The most important fact:</p>
                        <p style="text-align:center; font-size:1.2em;"><strong>The sum of all angles in a triangle = 180°</strong></p>
                        <h3>Types by Sides</h3>
                        <ul>
                            <li><strong>Equilateral:</strong> All 3 sides equal (all angles are 60°).</li>
                            <li><strong>Isosceles:</strong> 2 sides equal (the base angles are equal).</li>
                            <li><strong>Scalene:</strong> No sides equal.</li>
                        </ul>
                        <h3>Types by Angles</h3>
                        <ul>
                            <li><strong>Acute:</strong> All angles less than 90°.</li>
                            <li><strong>Right:</strong> One angle equals exactly 90°.</li>
                            <li><strong>Obtuse:</strong> One angle greater than 90°.</li>
                        </ul>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'A triangle has angles 60°, 60°, and 60°. What type is it?',
                            choices: ['Isosceles', 'Equilateral', 'Scalene', 'Right'],
                            correctIndex: 1,
                            explanation: 'All three angles are equal, so all three sides are equal. This is an <strong>equilateral</strong> triangle.'
                        },
                        {
                            question: 'Two angles of a triangle are 45° and 90°. What is the third angle?',
                            choices: ['90°', '45°', '55°', '35°'],
                            correctIndex: 1,
                            explanation: '180° − 45° − 90° = <strong>45°</strong>. This is a right isosceles triangle!'
                        }
                    ]}
                ]
            },
            // ---- LESSON 4 ----
            {
                id: 'quadrilaterals',
                title: 'Quadrilaterals',
                subtitle: 'Squares, rectangles, and more',
                xpReward: 50,
                sections: [
                    { type: 'text', content: `
                        <h3>Four-Sided Figures</h3>
                        <p>A quadrilateral is any polygon with four sides. The sum of interior angles is always <strong>360°</strong>.</p>
                        <h3>Types of Quadrilaterals</h3>
                        <ul>
                            <li><strong>Square:</strong> 4 equal sides, 4 right angles.</li>
                            <li><strong>Rectangle:</strong> Opposite sides equal, 4 right angles.</li>
                            <li><strong>Parallelogram:</strong> Opposite sides parallel and equal, opposite angles equal.</li>
                            <li><strong>Rhombus:</strong> 4 equal sides (like a tilted square), opposite angles equal.</li>
                            <li><strong>Trapezoid:</strong> Exactly one pair of parallel sides.</li>
                        </ul>
                    `},
                    { type: 'example', title: 'Finding a Missing Angle', content: `
                        <p><strong>A quadrilateral has angles 90°, 90°, and 110°. Find the fourth angle.</strong></p>
                        <p>360° − 90° − 90° − 110° = <strong>70°</strong></p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'What is the sum of interior angles in any quadrilateral?',
                            choices: ['180°', '270°', '360°', '540°'],
                            correctIndex: 2,
                            explanation: 'The sum of interior angles in a quadrilateral is always <strong>360°</strong>.'
                        },
                        {
                            question: 'Which quadrilateral has 4 equal sides but does NOT necessarily have right angles?',
                            choices: ['Square', 'Rectangle', 'Rhombus', 'Trapezoid'],
                            correctIndex: 2,
                            explanation: 'A <strong>rhombus</strong> has 4 equal sides but its angles can be any measure (as long as they add to 360°).'
                        }
                    ]}
                ]
            },
            // ---- LESSON 5 ----
            {
                id: 'circles',
                title: 'Circles',
                subtitle: 'Radius, diameter, circumference, and area',
                xpReward: 50,
                sections: [
                    { type: 'text', content: `
                        <h3>Circle Vocabulary</h3>
                        <ul>
                            <li><strong>Center:</strong> The point in the middle of the circle.</li>
                            <li><strong>Radius (r):</strong> Distance from center to edge.</li>
                            <li><strong>Diameter (d):</strong> Distance across the circle through the center. d = 2r.</li>
                        </ul>
                        <h3>Key Formulas</h3>
                        <p><strong>Circumference</strong> (distance around): C = 2πr = πd</p>
                        <p><strong>Area</strong> (space inside): A = πr²</p>
                        <p>π (pi) ≈ 3.14159…</p>
                    `},
                    { type: 'example', title: 'Circle Calculations', content: `
                        <p><strong>A circle has radius 5. Find its circumference and area.</strong></p>
                        <p>C = 2π(5) = 10π ≈ <strong>31.42</strong></p>
                        <p>A = π(5²) = 25π ≈ <strong>78.54</strong></p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'A circle has a diameter of 10. What is its radius?',
                            choices: ['20', '5', '10', '15'],
                            correctIndex: 1,
                            explanation: 'Radius = diameter / 2 = 10 / 2 = <strong>5</strong>'
                        },
                        {
                            question: 'Which formula gives the <strong>area</strong> of a circle?',
                            choices: ['2πr', 'πd', 'πr²', '2πr²'],
                            correctIndex: 2,
                            explanation: 'The area of a circle is <strong>πr²</strong>. Circumference is 2πr.'
                        }
                    ]}
                ]
            },
            // ---- LESSON 6 ----
            {
                id: 'perimeter-area',
                title: 'Perimeter and Area',
                subtitle: 'Calculate for various shapes',
                xpReward: 60,
                sections: [
                    { type: 'text', content: `
                        <h3>Perimeter vs. Area</h3>
                        <p><strong>Perimeter</strong> is the total distance around the outside of a shape (measured in units like cm, m).</p>
                        <p><strong>Area</strong> is the amount of space inside a shape (measured in square units like cm², m²).</p>
                        <h3>Common Formulas</h3>
                        <ul>
                            <li><strong>Rectangle:</strong> P = 2(l + w), A = l × w</li>
                            <li><strong>Square:</strong> P = 4s, A = s²</li>
                            <li><strong>Triangle:</strong> P = a + b + c, A = ½ × base × height</li>
                            <li><strong>Parallelogram:</strong> A = base × height</li>
                            <li><strong>Trapezoid:</strong> A = ½(b₁ + b₂) × height</li>
                        </ul>
                    `},
                    { type: 'example', title: 'Trapezoid Area', content: `
                        <p><strong>Find the area of a trapezoid with bases 8 and 12, and height 5.</strong></p>
                        <p>A = ½(8 + 12) × 5 = ½(20) × 5 = 10 × 5 = <strong>50</strong></p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'A rectangle has length 12 and width 7. What is its area?',
                            choices: ['38', '84', '19', '42'],
                            correctIndex: 1,
                            explanation: 'Area = length × width = 12 × 7 = <strong>84</strong>'
                        },
                        {
                            question: 'A triangle has base 10 and height 6. What is its area?',
                            choices: ['60', '30', '16', '36'],
                            correctIndex: 1,
                            explanation: 'Area = ½ × base × height = ½ × 10 × 6 = <strong>30</strong>'
                        }
                    ]}
                ]
            },
            // ---- LESSON 7 ----
            {
                id: 'pythagorean',
                title: 'Pythagorean Theorem',
                subtitle: 'Understanding a² + b² = c²',
                xpReward: 75,
                sections: [
                    { type: 'text', content: `
                        <h3>The Pythagorean Theorem</h3>
                        <p>In any <strong>right triangle</strong>, the square of the hypotenuse (the side opposite the right angle) equals the sum of the squares of the other two sides:</p>
                        <p style="text-align:center; font-size:1.3em;"><strong>a² + b² = c²</strong></p>
                        <p>where <strong>c</strong> is always the hypotenuse (the longest side).</p>
                        <h3>Common Pythagorean Triples</h3>
                        <p>These are whole-number solutions worth memorizing:</p>
                        <ul>
                            <li>3, 4, <strong>5</strong></li>
                            <li>5, 12, <strong>13</strong></li>
                            <li>8, 15, <strong>17</strong></li>
                        </ul>
                    `},
                    { type: 'example', title: 'Finding the Hypotenuse', content: `
                        <p><strong>A right triangle has legs 6 and 8. Find the hypotenuse.</strong></p>
                        <p>c² = 6² + 8² = 36 + 64 = 100</p>
                        <p>c = √100 = <strong>10</strong></p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'A right triangle has legs 3 and 4. What is the hypotenuse?',
                            choices: ['7', '5', '6', '12'],
                            correctIndex: 1,
                            explanation: 'c² = 3² + 4² = 9 + 16 = 25 → c = √25 = <strong>5</strong>'
                        },
                        {
                            question: 'A right triangle has hypotenuse 13 and one leg 5. What is the other leg?',
                            choices: ['8', '18', '12', '10'],
                            correctIndex: 2,
                            explanation: 'b² = 13² − 5² = 169 − 25 = 144 → b = √144 = <strong>12</strong>'
                        }
                    ]}
                ]
            },
            // ---- LESSON 8 ----
            {
                id: 'similarity-congruence',
                title: 'Similarity and Congruence',
                subtitle: 'Comparing shapes',
                xpReward: 70,
                sections: [
                    { type: 'text', content: `
                        <h3>Congruent Shapes</h3>
                        <p>Two figures are <strong>congruent</strong> (≅) if they have the <em>exact same shape and size</em>. All corresponding sides and angles are equal.</p>
                        <h3>Similar Shapes</h3>
                        <p>Two figures are <strong>similar</strong> (~) if they have the same shape but possibly different sizes. Corresponding angles are equal, and corresponding sides are in the same <strong>ratio</strong> (called the <em>scale factor</em>).</p>
                        <p>If two triangles are similar with scale factor k, then:</p>
                        <ul>
                            <li>Corresponding sides: multiplied by k</li>
                            <li>Areas: multiplied by k²</li>
                        </ul>
                    `},
                    { type: 'example', title: 'Using a Scale Factor', content: `
                        <p><strong>Two similar triangles have a scale factor of 3. If a side of the smaller is 4, what is the corresponding side of the larger?</strong></p>
                        <p>4 × 3 = <strong>12</strong></p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'Two triangles are similar with a scale factor of 2. A side of the smaller triangle is 7. What is the corresponding side of the larger?',
                            choices: ['9', '3.5', '14', '49'],
                            correctIndex: 2,
                            explanation: 'Multiply by the scale factor: 7 × 2 = <strong>14</strong>'
                        },
                        {
                            question: 'If two figures are <strong>congruent</strong>, what must be true?',
                            choices: ['Same shape only', 'Same size only', 'Same shape and same size', 'Same area only'],
                            correctIndex: 2,
                            explanation: 'Congruent figures have the <strong>same shape and same size</strong>. All corresponding sides and angles are equal.'
                        }
                    ]}
                ]
            },
            // ---- LESSON 9 ----
            {
                id: 'volume-surface-area',
                title: 'Volume and Surface Area',
                subtitle: '3D shapes and measurements',
                xpReward: 80,
                sections: [
                    { type: 'text', content: `
                        <h3>3D Geometry</h3>
                        <p><strong>Volume</strong> is the amount of space inside a 3D shape (measured in cubic units).</p>
                        <p><strong>Surface area</strong> is the total area of all outer faces.</p>
                        <h3>Key Formulas</h3>
                        <ul>
                            <li><strong>Rectangular Prism (Box):</strong> V = l × w × h, SA = 2(lw + lh + wh)</li>
                            <li><strong>Cube:</strong> V = s³, SA = 6s²</li>
                            <li><strong>Cylinder:</strong> V = πr²h, SA = 2πr² + 2πrh</li>
                            <li><strong>Sphere:</strong> V = (4/3)πr³, SA = 4πr²</li>
                            <li><strong>Cone:</strong> V = (1/3)πr²h</li>
                        </ul>
                    `},
                    { type: 'example', title: 'Volume of a Cylinder', content: `
                        <p><strong>Find the volume of a cylinder with radius 3 and height 10.</strong></p>
                        <p>V = πr²h = π(3²)(10) = π(9)(10) = 90π ≈ <strong>282.74</strong></p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'What is the volume of a cube with side length 4?',
                            choices: ['12', '16', '48', '64'],
                            correctIndex: 3,
                            explanation: 'V = s³ = 4³ = 4 × 4 × 4 = <strong>64</strong>'
                        },
                        {
                            question: 'What is the surface area of a cube with side length 3?',
                            choices: ['27', '36', '54', '9'],
                            correctIndex: 2,
                            explanation: 'SA = 6s² = 6 × 3² = 6 × 9 = <strong>54</strong>'
                        }
                    ]}
                ]
            },
            // ---- LESSON 10 ----
            {
                id: 'transformations',
                title: 'Transformations',
                subtitle: 'Translations, rotations, and reflections',
                xpReward: 75,
                sections: [
                    { type: 'text', content: `
                        <h3>Types of Transformations</h3>
                        <p>A transformation changes a figure's position, orientation, or size on a plane.</p>
                        <ul>
                            <li><strong>Translation (slide):</strong> Every point moves the same distance in the same direction. The shape and size stay the same.</li>
                            <li><strong>Reflection (flip):</strong> The figure is mirrored over a line (like a mirror). The shape and size stay the same, but orientation reverses.</li>
                            <li><strong>Rotation (turn):</strong> The figure turns around a fixed point by a given angle. Shape and size are preserved.</li>
                            <li><strong>Dilation (scale):</strong> The figure is enlarged or shrunk by a scale factor from a center point. Angles stay the same but side lengths change.</li>
                        </ul>
                        <h3>Rigid vs. Non-Rigid</h3>
                        <p>Translations, reflections, and rotations are <strong>rigid</strong> (they preserve size and shape — the result is congruent). Dilation is <strong>non-rigid</strong> (it changes size — the result is similar).</p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'Which transformation changes the <strong>size</strong> of a figure?',
                            choices: ['Translation', 'Reflection', 'Rotation', 'Dilation'],
                            correctIndex: 3,
                            explanation: '<strong>Dilation</strong> changes the size of a figure by a scale factor. The other three are rigid transformations that preserve size.'
                        },
                        {
                            question: 'A point at (3, 2) is translated 4 units right and 1 unit down. What are the new coordinates?',
                            choices: ['(7, 3)', '(7, 1)', '(−1, 3)', '(3, 6)'],
                            correctIndex: 1,
                            explanation: 'Move right → add to x: 3 + 4 = 7. Move down → subtract from y: 2 − 1 = 1. New point: <strong>(7, 1)</strong>'
                        }
                    ]}
                ]
            }
        ]
    },

    // ========================================================
    // TRIGONOMETRY PATH (10 lessons)
    // ========================================================
    trigonometry: {
        name: 'Trigonometry Path',
        icon: '📊',
        lessons: [
            // ---- LESSON 1 ----
            {
                id: 'intro-trig',
                title: 'Introduction to Trigonometry',
                subtitle: 'Sine, cosine, and tangent basics',
                xpReward: 50,
                sections: [
                    { type: 'text', content: `
                        <h3>SOHCAHTOA</h3>
                        <p>Trigonometry studies the relationships between angles and side lengths in triangles. The three primary ratios for a <strong>right triangle</strong> are:</p>
                        <ul>
                            <li><strong>Sine:</strong> sin(θ) = Opposite / Hypotenuse → <em>SOH</em></li>
                            <li><strong>Cosine:</strong> cos(θ) = Adjacent / Hypotenuse → <em>CAH</em></li>
                            <li><strong>Tangent:</strong> tan(θ) = Opposite / Adjacent → <em>TOA</em></li>
                        </ul>
                        <p>The <strong>hypotenuse</strong> is always the longest side (opposite the right angle). The <strong>opposite</strong> side is across from your angle θ, and the <strong>adjacent</strong> side is next to your angle θ.</p>
                    `},
                    { type: 'example', title: 'Finding a Trig Ratio', content: `
                        <p><strong>In a right triangle, the side opposite θ is 3, the adjacent side is 4, and the hypotenuse is 5. Find sin(θ), cos(θ), and tan(θ).</strong></p>
                        <p>sin(θ) = 3/5 = 0.6</p>
                        <p>cos(θ) = 4/5 = 0.8</p>
                        <p>tan(θ) = 3/4 = 0.75</p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'In a right triangle, the opposite side is 5 and the hypotenuse is 13. What is sin(θ)?',
                            choices: ['5/12', '12/13', '5/13', '13/5'],
                            correctIndex: 2,
                            explanation: 'sin(θ) = Opposite / Hypotenuse = <strong>5/13</strong>'
                        },
                        {
                            question: 'Which trig ratio equals <strong>Opposite / Adjacent</strong>?',
                            choices: ['Sine', 'Cosine', 'Tangent', 'Secant'],
                            correctIndex: 2,
                            explanation: '<strong>Tangent</strong> = Opposite / Adjacent (the TOA in SOHCAHTOA).'
                        }
                    ]}
                ]
            },
            // ---- LESSON 2 ----
            {
                id: 'right-triangles',
                title: 'Right Triangle Trigonometry',
                subtitle: 'Apply trig ratios to find missing sides and angles',
                xpReward: 60,
                sections: [
                    { type: 'text', content: `
                        <h3>Solving Right Triangles</h3>
                        <p>If you know one angle and one side of a right triangle, you can find all other sides using trig ratios.</p>
                        <h3>Finding a Missing Side</h3>
                        <ol>
                            <li>Identify which sides you have and need (opposite, adjacent, hypotenuse).</li>
                            <li>Choose the right trig function (sin, cos, or tan).</li>
                            <li>Set up the equation and solve.</li>
                        </ol>
                        <h3>Finding a Missing Angle</h3>
                        <p>Use the <strong>inverse trig functions</strong>: if sin(θ) = 0.5, then θ = sin⁻¹(0.5) = 30°.</p>
                    `},
                    { type: 'example', title: 'Finding a Side', content: `
                        <p><strong>Find the opposite side. Angle = 30°, hypotenuse = 10.</strong></p>
                        <p>sin(30°) = opposite / 10</p>
                        <p>0.5 = opposite / 10</p>
                        <p>opposite = 10 × 0.5 = <strong>5</strong></p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'Angle = 45°, hypotenuse = 10. What is the adjacent side? (cos 45° ≈ 0.707)',
                            choices: ['5', '7.07', '10', '14.14'],
                            correctIndex: 1,
                            explanation: 'adjacent = hypotenuse × cos(45°) = 10 × 0.707 ≈ <strong>7.07</strong>'
                        },
                        {
                            question: 'The opposite side is 8 and the adjacent side is 6. Which function should you use to find angle θ?',
                            choices: ['sin(θ) = 8/6', 'cos(θ) = 8/6', 'tan(θ) = 8/6', 'tan(θ) = 6/8'],
                            correctIndex: 2,
                            explanation: 'You have opposite and adjacent, so use <strong>tan(θ) = opposite/adjacent = 8/6</strong>.'
                        }
                    ]}
                ]
            },
            // ---- LESSON 3 ----
            {
                id: 'special-triangles',
                title: 'Special Right Triangles',
                subtitle: '30-60-90 and 45-45-90 triangles',
                xpReward: 60,
                sections: [
                    { type: 'text', content: `
                        <h3>45-45-90 Triangle</h3>
                        <p>An isosceles right triangle where the two legs are equal. If each leg = 1:</p>
                        <ul>
                            <li>Legs: <strong>1</strong></li>
                            <li>Hypotenuse: <strong>√2 ≈ 1.414</strong></li>
                        </ul>
                        <p>Ratio → 1 : 1 : √2</p>
                        <h3>30-60-90 Triangle</h3>
                        <p>Half of an equilateral triangle. If the shortest side = 1:</p>
                        <ul>
                            <li>Short leg (opposite 30°): <strong>1</strong></li>
                            <li>Long leg (opposite 60°): <strong>√3 ≈ 1.732</strong></li>
                            <li>Hypotenuse (opposite 90°): <strong>2</strong></li>
                        </ul>
                        <p>Ratio → 1 : √3 : 2</p>
                    `},
                    { type: 'example', title: '30-60-90 in Action', content: `
                        <p><strong>A 30-60-90 triangle has a hypotenuse of 12. Find both legs.</strong></p>
                        <p>Short leg = hypotenuse / 2 = 12 / 2 = <strong>6</strong></p>
                        <p>Long leg = short leg × √3 = 6√3 ≈ <strong>10.39</strong></p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'In a <strong>45-45-90</strong> triangle, each leg is 5. What is the hypotenuse?',
                            choices: ['5', '10', '5√2 ≈ 7.07', '5√3 ≈ 8.66'],
                            correctIndex: 2,
                            explanation: 'In a 45-45-90 triangle, hypotenuse = leg × √2 = <strong>5√2 ≈ 7.07</strong>'
                        },
                        {
                            question: 'In a <strong>30-60-90</strong> triangle, the short leg is 4. What is the hypotenuse?',
                            choices: ['4√3 ≈ 6.93', '4√2 ≈ 5.66', '8', '2'],
                            correctIndex: 2,
                            explanation: 'Hypotenuse = 2 × short leg = 2 × 4 = <strong>8</strong>'
                        }
                    ]}
                ]
            },
            // ---- LESSON 4 ----
            {
                id: 'unit-circle',
                title: 'The Unit Circle',
                subtitle: 'Angles and coordinates on a circle of radius 1',
                xpReward: 75,
                sections: [
                    { type: 'text', content: `
                        <h3>What is the Unit Circle?</h3>
                        <p>The unit circle is a circle with <strong>radius 1</strong> centered at the origin. Every point on the circle can be written as:</p>
                        <p style="text-align:center; font-size:1.2em;"><strong>(cos θ, sin θ)</strong></p>
                        <p>This means cos θ gives the x-coordinate and sin θ gives the y-coordinate of the point at angle θ.</p>
                        <h3>Key Angles to Memorize</h3>
                        <ul>
                            <li>0°: (1, 0)</li>
                            <li>30°: (√3/2, 1/2)</li>
                            <li>45°: (√2/2, √2/2)</li>
                            <li>60°: (1/2, √3/2)</li>
                            <li>90°: (0, 1)</li>
                            <li>180°: (−1, 0)</li>
                            <li>270°: (0, −1)</li>
                            <li>360°: (1, 0)</li>
                        </ul>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'On the unit circle, the point at 90° is:',
                            choices: ['(1, 0)', '(0, 1)', '(−1, 0)', '(0, −1)'],
                            correctIndex: 1,
                            explanation: 'At 90°, cos(90°) = 0 and sin(90°) = 1, so the point is <strong>(0, 1)</strong>.'
                        },
                        {
                            question: 'What is <strong>cos(180°)</strong>?',
                            choices: ['1', '0', '−1', '−0.5'],
                            correctIndex: 2,
                            explanation: 'At 180° on the unit circle, the x-coordinate (cos) is <strong>−1</strong>.'
                        }
                    ]}
                ]
            },
            // ---- LESSON 5 ----
            {
                id: 'radians',
                title: 'Radians',
                subtitle: 'Alternative angle measurement',
                xpReward: 60,
                sections: [
                    { type: 'text', content: `
                        <h3>What is a Radian?</h3>
                        <p>A radian measures an angle by the length of the arc it creates on a unit circle. One full revolution = <strong>2π radians = 360°</strong>.</p>
                        <h3>Conversion Formulas</h3>
                        <ul>
                            <li><strong>Degrees → Radians:</strong> multiply by π/180</li>
                            <li><strong>Radians → Degrees:</strong> multiply by 180/π</li>
                        </ul>
                        <h3>Key Equivalents</h3>
                        <p>30° = π/6 &nbsp;|&nbsp; 45° = π/4 &nbsp;|&nbsp; 60° = π/3 &nbsp;|&nbsp; 90° = π/2 &nbsp;|&nbsp; 180° = π &nbsp;|&nbsp; 360° = 2π</p>
                    `},
                    { type: 'example', title: 'Converting Degrees to Radians', content: `
                        <p><strong>Convert 120° to radians:</strong></p>
                        <p>120 × (π/180) = 120π/180 = <strong>2π/3</strong> ≈ 2.094</p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'Convert <strong>90°</strong> to radians.',
                            choices: ['π/6', 'π/4', 'π/3', 'π/2'],
                            correctIndex: 3,
                            explanation: '90° × (π/180) = <strong>π/2</strong>'
                        },
                        {
                            question: 'How many degrees is <strong>π radians</strong>?',
                            choices: ['90°', '180°', '270°', '360°'],
                            correctIndex: 1,
                            explanation: 'π × (180/π) = <strong>180°</strong>'
                        }
                    ]}
                ]
            },
            // ---- LESSON 6 ----
            {
                id: 'graphing-trig',
                title: 'Graphing Trig Functions',
                subtitle: 'Sine, cosine, and tangent graphs',
                xpReward: 80,
                sections: [
                    { type: 'text', content: `
                        <h3>Periodic Functions</h3>
                        <p>Trig functions are <strong>periodic</strong> — they repeat the same pattern over and over. The length of one full cycle is called the <strong>period</strong>.</p>
                        <h3>Sine and Cosine Graphs</h3>
                        <p>y = sin(x) and y = cos(x) both have:</p>
                        <ul>
                            <li><strong>Amplitude:</strong> 1 (the height from center to peak)</li>
                            <li><strong>Period:</strong> 2π (one full wave)</li>
                            <li><strong>Range:</strong> [−1, 1]</li>
                        </ul>
                        <p>The cosine graph is the same as sine shifted left by π/2.</p>
                        <h3>General Form: y = A·sin(Bx + C) + D</h3>
                        <ul>
                            <li><strong>A</strong> = amplitude (height of the wave)</li>
                            <li><strong>Period</strong> = 2π / |B|</li>
                            <li><strong>C/B</strong> = phase shift (horizontal shift)</li>
                            <li><strong>D</strong> = vertical shift</li>
                        </ul>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'What is the period of <strong>y = sin(x)</strong>?',
                            choices: ['π', '2π', 'π/2', '4π'],
                            correctIndex: 1,
                            explanation: 'The standard sine function has a period of <strong>2π</strong> (one full cycle).'
                        },
                        {
                            question: 'What is the amplitude of <strong>y = 3sin(x)</strong>?',
                            choices: ['1', '2', '3', '6'],
                            correctIndex: 2,
                            explanation: 'The amplitude is the coefficient in front of sin: <strong>3</strong>.'
                        }
                    ]}
                ]
            },
            // ---- LESSON 7 ----
            {
                id: 'identities',
                title: 'Trigonometric Identities',
                subtitle: 'Essential formulas that are always true',
                xpReward: 100,
                sections: [
                    { type: 'text', content: `
                        <h3>Fundamental Identities</h3>
                        <p>These identities are true for <em>all</em> values of θ:</p>
                        <h3>Pythagorean Identities</h3>
                        <ul>
                            <li><strong>sin²θ + cos²θ = 1</strong> (the most important one!)</li>
                            <li>1 + tan²θ = sec²θ</li>
                            <li>1 + cot²θ = csc²θ</li>
                        </ul>
                        <h3>Reciprocal Identities</h3>
                        <ul>
                            <li>csc θ = 1/sin θ</li>
                            <li>sec θ = 1/cos θ</li>
                            <li>cot θ = 1/tan θ = cos θ/sin θ</li>
                        </ul>
                        <h3>Double Angle Formulas</h3>
                        <ul>
                            <li>sin(2θ) = 2·sin θ·cos θ</li>
                            <li>cos(2θ) = cos²θ − sin²θ</li>
                        </ul>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'What does <strong>sin²θ + cos²θ</strong> always equal?',
                            choices: ['0', '1', '2', 'It depends on θ'],
                            correctIndex: 1,
                            explanation: 'The Pythagorean identity states that sin²θ + cos²θ = <strong>1</strong> for all θ.'
                        },
                        {
                            question: 'If sin θ = 0.6, what is cos²θ?',
                            choices: ['0.36', '0.4', '0.64', '0.8'],
                            correctIndex: 2,
                            explanation: 'From sin²θ + cos²θ = 1: cos²θ = 1 − sin²θ = 1 − 0.36 = <strong>0.64</strong>'
                        }
                    ]}
                ]
            },
            // ---- LESSON 8 ----
            {
                id: 'inverse-trig',
                title: 'Inverse Trig Functions',
                subtitle: 'arcsin, arccos, arctan',
                xpReward: 85,
                sections: [
                    { type: 'text', content: `
                        <h3>Going Backwards</h3>
                        <p>Regular trig functions take an <em>angle</em> and return a <em>ratio</em>. Inverse trig functions take a <em>ratio</em> and return an <em>angle</em>.</p>
                        <ul>
                            <li><strong>arcsin(x)</strong> or sin⁻¹(x): "What angle has a sine of x?"</li>
                            <li><strong>arccos(x)</strong> or cos⁻¹(x): "What angle has a cosine of x?"</li>
                            <li><strong>arctan(x)</strong> or tan⁻¹(x): "What angle has a tangent of x?"</li>
                        </ul>
                        <h3>Restricted Ranges</h3>
                        <p>To make inverses unique, their outputs are limited:</p>
                        <ul>
                            <li>arcsin: [−90°, 90°]</li>
                            <li>arccos: [0°, 180°]</li>
                            <li>arctan: (−90°, 90°)</li>
                        </ul>
                    `},
                    { type: 'example', title: 'Using Inverse Trig', content: `
                        <p><strong>Find the angle whose sine is 0.5</strong></p>
                        <p>θ = arcsin(0.5) = <strong>30°</strong></p>
                        <p>Because sin(30°) = 0.5</p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'What is <strong>arccos(0)</strong>?',
                            choices: ['0°', '45°', '90°', '180°'],
                            correctIndex: 2,
                            explanation: 'cos(90°) = 0, so arccos(0) = <strong>90°</strong>'
                        },
                        {
                            question: 'What is <strong>arctan(1)</strong>?',
                            choices: ['0°', '30°', '45°', '90°'],
                            correctIndex: 2,
                            explanation: 'tan(45°) = 1, so arctan(1) = <strong>45°</strong>'
                        }
                    ]}
                ]
            },
            // ---- LESSON 9 ----
            {
                id: 'law-of-sines',
                title: 'Law of Sines',
                subtitle: 'Solve non-right triangles',
                xpReward: 90,
                sections: [
                    { type: 'text', content: `
                        <h3>Beyond Right Triangles</h3>
                        <p>SOHCAHTOA only works for right triangles. For <em>any</em> triangle (including non-right ones), we use the <strong>Law of Sines</strong>:</p>
                        <p style="text-align:center; font-size:1.2em;"><strong>a/sin(A) = b/sin(B) = c/sin(C)</strong></p>
                        <p>where a, b, c are side lengths and A, B, C are the opposite angles.</p>
                        <h3>When to Use It</h3>
                        <ul>
                            <li>You know <strong>two angles and one side</strong> (AAS or ASA)</li>
                            <li>You know <strong>two sides and a non-included angle</strong> (SSA — but watch for the ambiguous case!)</li>
                        </ul>
                    `},
                    { type: 'example', title: 'Law of Sines in Action', content: `
                        <p><strong>In triangle ABC: A = 40°, B = 60°, a = 8. Find b.</strong></p>
                        <p>a/sin(A) = b/sin(B)</p>
                        <p>8/sin(40°) = b/sin(60°)</p>
                        <p>b = 8 × sin(60°)/sin(40°) ≈ 8 × 0.866/0.643 ≈ <strong>10.78</strong></p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'In triangle ABC: A = 30°, B = 90°, a = 5. Using the Law of Sines, find b.',
                            choices: ['5', '10', '5√2', '2.5'],
                            correctIndex: 1,
                            explanation: '5/sin(30°) = b/sin(90°) → 5/0.5 = b/1 → b = <strong>10</strong>'
                        },
                        {
                            question: 'The Law of Sines relates sides to the <strong>___</strong> of their opposite angles.',
                            choices: ['cosines', 'tangents', 'sines', 'squares'],
                            correctIndex: 2,
                            explanation: 'The Law of Sines: a/sin(A) = b/sin(B). It relates sides to the <strong>sines</strong> of their opposite angles.'
                        }
                    ]}
                ]
            },
            // ---- LESSON 10 ----
            {
                id: 'law-of-cosines',
                title: 'Law of Cosines',
                subtitle: 'Another tool for non-right triangles',
                xpReward: 90,
                sections: [
                    { type: 'text', content: `
                        <h3>The Law of Cosines</h3>
                        <p>When you can't use the Law of Sines (e.g., you know two sides and the included angle), use the <strong>Law of Cosines</strong>:</p>
                        <p style="text-align:center; font-size:1.2em;"><strong>c² = a² + b² − 2ab·cos(C)</strong></p>
                        <p>Notice: when C = 90°, cos(90°) = 0 and this simplifies to the Pythagorean theorem! So the Pythagorean theorem is actually a special case of the Law of Cosines.</p>
                        <h3>When to Use It</h3>
                        <ul>
                            <li>You know <strong>two sides and the included angle</strong> (SAS) → find the third side.</li>
                            <li>You know <strong>all three sides</strong> (SSS) → find any angle.</li>
                        </ul>
                    `},
                    { type: 'example', title: 'Finding a Missing Side', content: `
                        <p><strong>In triangle ABC: a = 5, b = 7, C = 60°. Find c.</strong></p>
                        <p>c² = 5² + 7² − 2(5)(7)cos(60°)</p>
                        <p>c² = 25 + 49 − 70(0.5) = 74 − 35 = 39</p>
                        <p>c = √39 ≈ <strong>6.24</strong></p>
                    `},
                    { type: 'practice', problems: [
                        {
                            question: 'Using the Law of Cosines: a = 3, b = 4, C = 90°. What is c?',
                            choices: ['5', '7', '25', '12'],
                            correctIndex: 0,
                            explanation: 'c² = 9 + 16 − 24·cos(90°) = 25 − 0 = 25 → c = <strong>5</strong>. (Same as Pythagorean theorem when angle is 90°!)'
                        },
                        {
                            question: 'When is the Law of Cosines <strong>necessary</strong> (Law of Sines won\'t work)?',
                            choices: ['AAS (two angles, one side)', 'SAS (two sides, included angle)', 'ASA (two angles, included side)', 'AAA (three angles)'],
                            correctIndex: 1,
                            explanation: 'For <strong>SAS</strong> (two sides and the included angle), only the Law of Cosines works — the Law of Sines requires an angle-side pair.'
                        }
                    ]}
                ]
            }
        ]
    }
};
