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
                    { type: 'generated_practice', generators: ['solve-system'] },
                    { type: 'practice', problems: [
                        { question: 'Solve: <strong>y = x + 3</strong> and <strong>2x + y = 12</strong>. What is y?', choices: ['3', '5', '6', '8'], correctIndex: 2, explanation: '2x + x + 3 = 12 → 3x = 9 → x = 3, y = <strong>6</strong>' }
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
                    { type: 'generated_practice', generators: ['triangle-missing-angle'] },
                    { type: 'practice', problems: [
                        { question: 'A triangle has angles 60°, 60°, 60°. Type?', choices: ['Isosceles', 'Equilateral', 'Scalene', 'Right'], correctIndex: 1, explanation: 'All equal → <strong>equilateral</strong>' },
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
                        { question: '4 equal sides but not necessarily right angles?', choices: ['Square', 'Rectangle', 'Rhombus', 'Trapezoid'], correctIndex: 2, explanation: '<strong>Rhombus</strong>' }
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
                    { type: 'generated_practice', generators: ['scale-factor'] },
                    { type: 'practice', problems: [
                        { question: 'If two figures are congruent, what must be true?', choices: ['Same shape only', 'Same size only', 'Same shape and size', 'Same area only'], correctIndex: 2, explanation: '<strong>Same shape and same size.</strong>' },
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
                    { type: 'generated_practice', generators: ['trig-ratio-from-sides'] },
                    { type: 'practice', problems: [
                        { question: 'Which ratio = Opposite/Adjacent?', choices: ['Sine', 'Cosine', 'Tangent', 'Secant'], correctIndex: 2, explanation: '<strong>Tangent</strong> (TOA)' },
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
                    { type: 'generated_practice', generators: ['trig-find-side'] },
                    { type: 'practice', problems: [
                        { question: 'Opp = 8, adj = 6. Which function finds θ?', choices: ['sin = 8/6', 'cos = 8/6', 'tan = 8/6', 'tan = 6/8'], correctIndex: 2, explanation: '<strong>tan(θ) = O/A = 8/6</strong>' },
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
                    { type: 'generated_practice', generators: ['unit-circle-coords'] },
                    { type: 'practice', problems: [
                        { question: 'Point at 90° on unit circle?', choices: ['(1,0)', '(0,1)', '(−1,0)', '(0,−1)'], correctIndex: 1, explanation: '<strong>(0, 1)</strong>' },
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
                    { type: 'generated_practice', generators: ['pythagorean-identity'] },
                    { type: 'practice', problems: [
                        { question: '<strong>sin²θ + cos²θ</strong> always equals?', choices: ['0', '1', '2', 'Depends on θ'], correctIndex: 1, explanation: '<strong>1</strong>' },
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
                    { type: 'generated_practice', generators: ['inverse-trig-eval'] },
                    { type: 'practice', problems: [
                        { question: '<strong>arctan(1)</strong> = ?', choices: ['0°', '30°', '45°', '90°'], correctIndex: 2, explanation: 'tan(45°) = 1 → <strong>45°</strong>' },
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
                        { question: 'Law of Sines relates sides to the ___ of opposite angles.', choices: ['cosines', 'tangents', 'sines', 'squares'], correctIndex: 2, explanation: '<strong>sines</strong>' }
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
                        { question: 'When is Law of Cosines necessary?', choices: ['AAS', 'SAS', 'ASA', 'AAA'], correctIndex: 1, explanation: 'For <strong>SAS</strong>, only Law of Cosines works.' }
                    ]}
                ]
            }
        ]
    }
};
