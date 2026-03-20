export const geometryPath = {
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
                { type: 'interactive_steps', title: 'Guided: Classify each angle by its measure', description: 'Identify the angle type based on its degree measure.', steps: [
                    { text: 'An angle of 47°: since 0° < 47° < 90°, it is {blank}', answer: 'acute', hint: 'Less than 90°' },
                    { text: 'An angle of 90°: this is exactly a {blank} angle', answer: 'right', hint: 'Exactly 90°' },
                    { text: 'An angle of 135°: since 90° < 135° < 180°, it is {blank}', answer: 'obtuse', hint: 'Between 90° and 180°' },
                    { text: 'An angle of 180°: this forms a {blank} angle', answer: 'straight', hint: 'Exactly 180°' }
                ], result: 'Acute < 90° · Right = 90° · Obtuse 90°–180° · Straight = 180°' },
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
                { type: 'example', title: 'Finding a Complement and Supplement', content: `<p>If one angle is 35°, its complement = 90° − 35° = <strong>55°</strong>.</p><p>If one angle is 110°, its supplement = 180° − 110° = <strong>70°</strong>.</p>` },
                { type: 'generated_practice', generators: ['complementary-angle', 'supplementary-angle'] },
                { type: 'interactive_steps', title: 'Guided: Find the complement and supplement of 53°', description: 'Apply the definitions of complementary and supplementary angles.', steps: [
                    { text: 'Complementary angles sum to {blank}°', answer: '90', hint: 'Think: C for Corner (right angle)' },
                    { text: 'Complement of 53° = 90° − 53° = {blank}°', answer: '37', hint: 'Subtract from 90' },
                    { text: 'Supplementary angles sum to {blank}°', answer: '180', hint: 'Think: S for Straight line' },
                    { text: 'Supplement of 53° = 180° − 53° = {blank}°', answer: '127', hint: 'Subtract from 180' }
                ], result: 'Complement = 37°, Supplement = 127°' },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p><strong>C</strong>omplements = <strong>C</strong>orner (90°). <strong>S</strong>upplements = <strong>S</strong>traight line (180°). Vertical angles are always equal!</p>` },
                { type: 'practice', problems: [
                    { question: 'Two angles are complementary. One is 28°. What is the other?', choices: ['62°', '152°', '72°', '28°'], correctIndex: 0, explanation: '90° − 28° = <strong>62°</strong>.' },
                    { question: 'Two angles are supplementary. One is 105°. What is the other?', choices: ['85°', '75°', '105°', '55°'], correctIndex: 1, explanation: '180° − 105° = <strong>75°</strong>.' },
                    { question: 'Vertical angles are always:', choices: ['Supplementary', 'Complementary', 'Equal', 'Adjacent'], correctIndex: 2, explanation: 'Vertical angles are <strong>equal</strong>.' },
                    { question: 'A linear pair of angles sums to:', choices: ['90°', '180°', '270°', '360°'], correctIndex: 1, explanation: 'A linear pair sums to <strong>180°</strong>.' },
                ]}
            ]},

            // ---- 4. Introduction to Proofs ----
            { id: 'intro-to-proofs', title: 'Introduction to Proofs', subtitle: 'Two-column proofs and logical reasoning', xpReward: 50, sections: [
                { type: 'text', content: `<h3>What Is a Mathematical Proof?</h3><p>A <strong>proof</strong> is a logical argument that uses definitions, postulates, and previously proven theorems to demonstrate that a statement is always true. In geometry, proofs are the standard way we <em>know</em> something is true — not just that it seems true from examples.</p><h3>The Two-Column Proof Format</h3><p>The most common format in geometry is the <strong>two-column proof</strong>. It has two columns:</p><ul><li><strong>Statements</strong>: each step in the logical argument, written as a mathematical equation or fact.</li><li><strong>Reasons</strong>: the justification for each statement — a definition, postulate, or theorem.</li></ul><h3>Common Reasons / Justifications</h3><ul><li><strong>Given</strong>: information provided in the problem setup.</li><li><strong>Definition of midpoint</strong>: a midpoint divides a segment into two equal halves.</li><li><strong>Definition of angle bisector</strong>: an angle bisector divides an angle into two equal angles.</li><li><strong>Segment Addition Postulate</strong>: if B is between A and C, then AB + BC = AC.</li><li><strong>Angle Addition Postulate</strong>: if D is in the interior of ∠ABC, then m∠ABD + m∠DBC = m∠ABC.</li><li><strong>Reflexive Property</strong>: any quantity equals itself (AB = AB).</li><li><strong>Symmetric Property</strong>: if a = b, then b = a.</li><li><strong>Transitive Property</strong>: if a = b and b = c, then a = c.</li><li><strong>Substitution Property</strong>: if a = b, you may replace a with b (or b with a) in any expression.</li><li><strong>Addition Property of Equality</strong>: if a = b, then a + c = b + c.</li><li><strong>Vertical Angles Theorem</strong>: vertical angles are equal.</li><li><strong>Linear Pair Theorem</strong>: angles in a linear pair are supplementary (sum to 180°).</li></ul><h3>Reading a Given/Prove Setup</h3><p>Every proof begins with a <strong>Given</strong> (what you know) and a <strong>Prove</strong> (what you must show). Your job is to build a logical chain from the Given to the Prove, one justified step at a time.</p>` },
                { type: 'example', title: 'Example Proof 1: Segment Addition', content: `<p><strong>Given:</strong> AB = CD and BC = BC</p><p><strong>Prove:</strong> AC = BD</p><table style="border-collapse:collapse;width:100%;margin-top:8px;"><thead><tr><th style="border:1px solid #ccc;padding:8px;background:#f5f5f5;text-align:left;">Statements</th><th style="border:1px solid #ccc;padding:8px;background:#f5f5f5;text-align:left;">Reasons</th></tr></thead><tbody><tr><td style="border:1px solid #ccc;padding:8px;">1. AB = CD</td><td style="border:1px solid #ccc;padding:8px;">1. Given</td></tr><tr><td style="border:1px solid #ccc;padding:8px;">2. BC = BC</td><td style="border:1px solid #ccc;padding:8px;">2. Reflexive Property</td></tr><tr><td style="border:1px solid #ccc;padding:8px;">3. AB + BC = CD + BC</td><td style="border:1px solid #ccc;padding:8px;">3. Addition Property of Equality</td></tr><tr><td style="border:1px solid #ccc;padding:8px;">4. AB + BC = AC</td><td style="border:1px solid #ccc;padding:8px;">4. Segment Addition Postulate</td></tr><tr><td style="border:1px solid #ccc;padding:8px;">5. CD + BC = BD</td><td style="border:1px solid #ccc;padding:8px;">5. Segment Addition Postulate</td></tr><tr><td style="border:1px solid #ccc;padding:8px;">6. AC = BD</td><td style="border:1px solid #ccc;padding:8px;">6. Substitution Property (steps 3, 4, 5)</td></tr></tbody></table>` },
                { type: 'example', title: 'Example Proof 2: Vertical Angles', content: `<p><strong>Given:</strong> ∠1 and ∠2 are vertical angles</p><p><strong>Prove:</strong> ∠1 = ∠2</p><table style="border-collapse:collapse;width:100%;margin-top:8px;"><thead><tr><th style="border:1px solid #ccc;padding:8px;background:#f5f5f5;text-align:left;">Statements</th><th style="border:1px solid #ccc;padding:8px;background:#f5f5f5;text-align:left;">Reasons</th></tr></thead><tbody><tr><td style="border:1px solid #ccc;padding:8px;">1. ∠1 and ∠2 are vertical angles</td><td style="border:1px solid #ccc;padding:8px;">1. Given</td></tr><tr><td style="border:1px solid #ccc;padding:8px;">2. ∠1 and ∠3 form a linear pair; ∠2 and ∠3 form a linear pair</td><td style="border:1px solid #ccc;padding:8px;">2. Definition of linear pair (from the figure)</td></tr><tr><td style="border:1px solid #ccc;padding:8px;">3. ∠1 + ∠3 = 180°</td><td style="border:1px solid #ccc;padding:8px;">3. Linear Pair Theorem</td></tr><tr><td style="border:1px solid #ccc;padding:8px;">4. ∠2 + ∠3 = 180°</td><td style="border:1px solid #ccc;padding:8px;">4. Linear Pair Theorem</td></tr><tr><td style="border:1px solid #ccc;padding:8px;">5. ∠1 + ∠3 = ∠2 + ∠3</td><td style="border:1px solid #ccc;padding:8px;">5. Substitution Property (steps 3 and 4)</td></tr><tr><td style="border:1px solid #ccc;padding:8px;">6. ∠1 = ∠2</td><td style="border:1px solid #ccc;padding:8px;">6. Subtraction Property of Equality</td></tr></tbody></table>` },
                { type: 'steps', title: 'How to Write a Two-Column Proof', steps: [
                    'Read the Given and Prove carefully. Write them down.',
                    'Start your Statements column with the Given information (Reason: "Given").',
                    'Ask: what can I conclude directly from the Given? Write that statement and its reason.',
                    'Keep building — each new statement should follow logically from previous statements.',
                    'Work toward the Prove. Your last statement must be exactly what you are trying to prove.',
                    'Every statement needs a reason. Never skip a step — each line justifies the next.',
                ] },
                { type: 'tips', content: `<h4>💡 Key Tips for Proofs</h4><p>Start from the <strong>Given</strong> and work toward the <strong>Prove</strong>. When stuck, look at what the Prove needs — work backwards to figure out what step would produce it. The Reflexive Property (a = a) is often useful when the same segment or angle appears on both sides. Use the Segment Addition Postulate whenever you split or combine segments.</p>` },
                { type: 'practice', problems: [
                    { question: 'In a two-column proof, what goes in the "Reasons" column?', choices: ['The steps you calculate', 'Definitions, postulates, or theorems that justify each statement', 'The Given information only', 'Your guesses about what is true'], correctIndex: 1, explanation: 'The Reasons column contains <strong>definitions, postulates, or theorems</strong> that justify each statement in the proof.' },
                    { question: 'Which reason justifies the statement "AB = AB"?', choices: ['Symmetric Property', 'Transitive Property', 'Reflexive Property', 'Substitution Property'], correctIndex: 2, explanation: 'Any quantity equals itself — this is the <strong>Reflexive Property</strong>.' },
                    { question: 'If B is between A and C, which postulate lets you write AB + BC = AC?', choices: ['Angle Addition Postulate', 'Segment Addition Postulate', 'Linear Pair Theorem', 'Reflexive Property'], correctIndex: 1, explanation: 'The <strong>Segment Addition Postulate</strong> states that if B is between A and C, then AB + BC = AC.' },
                    { question: 'The first statement in most two-column proofs has what reason?', choices: ['Reflexive Property', 'Definition of midpoint', 'Given', 'Vertical Angles Theorem'], correctIndex: 2, explanation: 'The first statement is always the information from the problem setup — its reason is <strong>Given</strong>.' },
                ]}
            ]},

            // ---- 5. Parallel Lines & Transversals ----
            { id: 'parallel-transversals', title: 'Parallel Lines & Transversals', subtitle: 'Angle relationships with parallel lines', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Transversal Angles</h3><p>When a <strong>transversal</strong> crosses two parallel lines, it creates 8 angles with special relationships:</p><p><strong>Corresponding</strong> angles: same position at each intersection → <em>equal</em>.</p><p><strong>Alternate interior</strong> angles: opposite sides, between the lines → <em>equal</em>.</p><p><strong>Alternate exterior</strong> angles: opposite sides, outside the lines → <em>equal</em>.</p><p><strong>Co-interior</strong> (same-side interior) angles: same side, between the lines → <em>supplementary</em> (sum to 180°).</p>` },
                { type: 'example', title: 'Using Transversal Angles', content: `<p>If a corresponding angle is 65°, the matching angle = <strong>65°</strong>. A co-interior partner = 180° − 65° = <strong>115°</strong>.</p>` },
                { type: 'generated_practice', generators: ['transversal-angles', 'angle-relationship-name'] },
                { type: 'interactive_steps', title: 'Guided: Parallel lines cut by a transversal — one angle is 72°', description: 'Find all related angles using the rules you learned.', steps: [
                    { text: 'The corresponding angle equals {blank}°', answer: '72', hint: 'Corresponding angles are equal' },
                    { text: 'The alternate interior angle equals {blank}°', answer: '72', hint: 'Alternate interior angles are equal' },
                    { text: 'The co-interior (same-side interior) angle = 180° − 72° = {blank}°', answer: '108', hint: 'Co-interior angles are supplementary' },
                    { text: 'The vertical angle at the same intersection equals {blank}°', answer: '72', hint: 'Vertical angles are equal' }
                ], result: 'Corresponding = 72°, Alternate interior = 72°, Co-interior = 108°' },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p>Equal pairs: corresponding, alternate interior, alternate exterior. Supplementary pair: co-interior (same-side interior).</p>` },
                { type: 'practice', problems: [
                    { question: 'Alternate interior angles are:', choices: ['Supplementary', 'Equal', 'Complementary', 'Adjacent'], correctIndex: 1, explanation: 'Alternate interior angles are <strong>equal</strong> when lines are parallel.' },
                    { question: 'Co-interior angles sum to:', choices: ['90°', '180°', '270°', '360°'], correctIndex: 1, explanation: 'Co-interior angles are <strong>supplementary</strong> (sum to 180°).' },
                    { question: 'A transversal crosses two parallel lines. One angle is 72°. Its corresponding angle is:', choices: ['72°', '108°', '18°', '144°'], correctIndex: 0, explanation: 'Corresponding angles are equal: <strong>72°</strong>.' },
                    { question: 'Same-side interior angle partners with 130° is:', choices: ['130°', '50°', '40°', '60°'], correctIndex: 1, explanation: '180° − 130° = <strong>50°</strong>.' },
                ]}
            ]},

            // ---- 6. Triangles: Angle Sum ----
            { id: 'triangle-angle-sum', title: 'Triangle Angle Sum', subtitle: 'Interior angles of triangles', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Triangle Angle Sum Theorem</h3><p>The three interior angles of any triangle always add up to <strong>180°</strong>. This is one of the most important facts in geometry.</p><p>If you know two angles, subtract their sum from 180° to find the third.</p>` },
                { type: 'example', title: 'Finding a Missing Angle', content: `<p>A triangle has angles 50° and 70°. The third angle = 180° − 50° − 70° = <strong>60°</strong>.</p>` },
                { type: 'generated_practice', generators: ['triangle-missing-angle'] },
                { type: 'interactive_steps', title: 'Guided: Find the missing angle in a triangle with 62° and 84°', description: 'Use the Triangle Angle Sum Theorem.', steps: [
                    { text: 'All angles of a triangle sum to {blank}°', answer: '180', hint: 'Triangle Angle Sum Theorem' },
                    { text: '62° + 84° = {blank}°', answer: '146', hint: 'Add the two known angles' },
                    { text: 'Third angle = 180° − 146° = {blank}°', answer: '34', hint: 'Subtract from 180' }
                ], result: 'The missing angle is 34°' },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p>Every triangle has exactly 180° total. An equilateral triangle has three 60° angles. A right triangle has one 90° angle, so the other two must sum to 90°.</p>` },
                { type: 'practice', problems: [
                    { question: 'A triangle has angles 45° and 85°. What is the third?', choices: ['50°', '40°', '60°', '55°'], correctIndex: 0, explanation: '180° − 45° − 85° = <strong>50°</strong>.' },
                    { question: 'In a right triangle, one acute angle is 32°. The other is:', choices: ['68°', '58°', '148°', '32°'], correctIndex: 1, explanation: '90° − 32° = <strong>58°</strong> (the two acute angles sum to 90°).' },
                    { question: 'Each angle of an equilateral triangle measures:', choices: ['45°', '60°', '90°', '120°'], correctIndex: 1, explanation: '180° ÷ 3 = <strong>60°</strong>.' },
                    { question: 'Can a triangle have two obtuse angles?', choices: ['Yes', 'No', 'Only if isosceles', 'Only if scalene'], correctIndex: 1, explanation: 'Two obtuse angles would exceed 180°, so <strong>no</strong>.' },
                ]}
            ]},

            // ---- 7. Classifying Triangles ----
            { id: 'classifying-triangles', title: 'Classifying Triangles', subtitle: 'By sides and by angles', xpReward: 35, sections: [
                { type: 'text', content: `<h3>Triangles by Sides</h3><p><strong>Equilateral</strong>: all 3 sides equal. <strong>Isosceles</strong>: at least 2 sides equal. <strong>Scalene</strong>: no sides equal.</p><h3>Triangles by Angles</h3><p><strong>Acute</strong>: all angles &lt; 90°. <strong>Right</strong>: one angle = 90°. <strong>Obtuse</strong>: one angle &gt; 90°.</p>` },
                { type: 'example', title: 'Classify by Sides and Angles', content: `<p>Sides 5, 5, 9 with angles 40°, 40°, 100°: two equal sides → <strong>isosceles</strong> by sides; one obtuse angle → <strong>obtuse</strong> by angles. It is an <em>obtuse isosceles</em> triangle.</p><p>Sides 3, 4, 5 with angles 37°, 53°, 90°: no equal sides → <strong>scalene</strong>; one right angle → <strong>right</strong> triangle.</p>` },
                { type: 'generated_practice', generators: ['classify-triangle-sides'] },
                { type: 'interactive_steps', title: 'Guided: Classify a triangle with sides 6, 6, 6', description: 'Classify by both sides and angles.', steps: [
                    { text: 'All three sides are equal, so by sides it is {blank}', answer: 'equilateral', hint: 'All sides equal → equilateral' },
                    { text: 'Each angle = 180° ÷ 3 = {blank}°', answer: '60', hint: 'All angles are equal in an equilateral triangle' },
                    { text: 'Since all angles are 60° (all less than 90°), by angles it is {blank}', answer: 'acute', hint: 'All angles < 90° → acute' }
                ], result: 'An equilateral triangle is always acute — all angles are exactly 60°' },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p>A triangle can be classified two ways — by sides AND by angles. An "isosceles right triangle" has two equal sides and a 90° angle.</p>` },
                { type: 'practice', problems: [
                    { question: 'A triangle with sides 5, 5, and 8 is:', choices: ['Equilateral', 'Isosceles', 'Scalene', 'Right'], correctIndex: 1, explanation: 'Two sides are equal → <strong>isosceles</strong>.' },
                    { question: 'A triangle with all angles less than 90° is:', choices: ['Right', 'Obtuse', 'Acute', 'Equilateral'], correctIndex: 2, explanation: 'All angles acute → <strong>acute</strong> triangle.' },
                    { question: 'A triangle with sides 3, 4, 5 is:', choices: ['Equilateral', 'Isosceles', 'Scalene', 'Impossible'], correctIndex: 2, explanation: 'All three sides are different → <strong>scalene</strong>.' },
                    { question: 'How many degrees are in an equilateral triangle total?', choices: ['60°', '120°', '180°', '360°'], correctIndex: 2, explanation: 'All triangles have <strong>180°</strong> total.' },
                ]}
            ]},

            // ---- 8. Triangle Inequality ----
            { id: 'triangle-inequality', title: 'Triangle Inequality', subtitle: 'Which side lengths form triangles?', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Triangle Inequality Theorem</h3><p>For three lengths to form a triangle, the sum of any two sides must be <strong>greater than</strong> the third side. Check all three combinations, or just check: the two smaller sides must sum to more than the largest side.</p>` },
                { type: 'example', title: 'Can We Make a Triangle?', content: `<p>Sides 3, 5, 9: Check 3 + 5 = 8, but 8 &lt; 9. <strong>Not a triangle.</strong></p><p>Sides 4, 6, 7: 4 + 6 = 10 &gt; 7 ✓, 4 + 7 = 11 &gt; 6 ✓, 6 + 7 = 13 &gt; 4 ✓. <strong>Valid triangle.</strong></p>` },
                { type: 'generated_practice', generators: ['triangle-inequality-check', 'possible-third-side'] },
                { type: 'interactive_steps', title: 'Guided: Can sides 5, 8, and 12 form a triangle?', description: 'Check all three combinations of the triangle inequality.', steps: [
                    { text: 'Identify the largest side: {blank}', answer: '12', hint: 'The biggest of 5, 8, 12' },
                    { text: 'Sum of the other two sides: 5 + 8 = {blank}', answer: '13', hint: 'Add 5 and 8' },
                    { text: 'Is 13 > 12? Answer: {blank}', answer: 'yes', hint: 'Compare the sum to the largest side' },
                    { text: 'So can these sides form a triangle? {blank}', answer: 'yes', hint: 'The inequality is satisfied' }
                ], result: '5 + 8 = 13 > 12 ✓ — valid triangle. The two smaller sides must sum to MORE than the largest.' },
                { type: 'practice', problems: [
                    { question: 'Can sides 2, 3, 6 form a triangle?', choices: ['Yes', 'No'], correctIndex: 1, explanation: '2 + 3 = 5 < 6. <strong>No</strong>.' },
                    { question: 'Can sides 5, 7, 10 form a triangle?', choices: ['Yes', 'No'], correctIndex: 0, explanation: '5 + 7 = 12 > 10 ✓. <strong>Yes</strong>.' },
                    { question: 'Two sides are 4 and 9. The third side must be between:', choices: ['4 and 9', '5 and 13', '1 and 13', '5 and 12'], correctIndex: 1, explanation: 'Third side > |9−4| = 5 and < 9+4 = 13. Between <strong>5 and 13</strong> (exclusive).' },
                    { question: 'Can sides 5, 5, 10 form a triangle?', choices: ['Yes', 'No'], correctIndex: 1, explanation: '5 + 5 = 10, not greater than 10. <strong>No</strong> (must be strictly greater).' },
                ]}
            ]},

            // ---- 9. Triangle Centers & Special Segments ----
            { id: 'triangle-centers', title: 'Triangle Centers & Special Segments', subtitle: 'Medians, altitudes, perpendicular bisectors, and angle bisectors', xpReward: 55, sections: [
                { type: 'text', content: `<h3>Special Segments in Triangles</h3><p>Every triangle has four important types of special segments, and each set of three meets at a special point called a <strong>triangle center</strong>.</p><h3>Median &amp; Centroid</h3><p>A <strong>median</strong> is a segment from a vertex to the <strong>midpoint</strong> of the opposite side. Every triangle has three medians. All three medians meet at the <strong>centroid</strong> — the triangle's center of mass (balance point). The centroid is located <strong>2/3 of the way</strong> from each vertex to the opposite midpoint. If you cut a triangle out of cardboard, it would balance perfectly at the centroid.</p><h3>Altitude &amp; Orthocenter</h3><p>An <strong>altitude</strong> is a segment from a vertex drawn <strong>perpendicular</strong> to the opposite side (or the line extending that side). All three altitudes meet at the <strong>orthocenter</strong>. In an acute triangle the orthocenter is inside; in a right triangle it is at the right-angle vertex; in an obtuse triangle it falls outside the triangle.</p><h3>Perpendicular Bisector &amp; Circumcenter</h3><p>A <strong>perpendicular bisector</strong> of a side is perpendicular to that side and passes through its midpoint. All three perpendicular bisectors meet at the <strong>circumcenter</strong>. The circumcenter is equidistant from all three vertices, making it the center of the <strong>circumscribed circle</strong> (the circle that passes through all three vertices).</p><h3>Angle Bisector &amp; Incenter</h3><p>An <strong>angle bisector</strong> divides a vertex angle into two equal angles. All three angle bisectors meet at the <strong>incenter</strong>. The incenter is equidistant from all three sides, making it the center of the <strong>inscribed circle</strong> (the largest circle that fits inside the triangle).</p><h3>Midsegment Theorem</h3><p>A <strong>midsegment</strong> connects the midpoints of two sides of a triangle. The Midsegment Theorem states: a midsegment is <strong>parallel to the third side</strong> and exactly <strong>half as long</strong>. Every triangle has three midsegments.</p>` },
                { type: 'example', title: 'Centroid Location', content: `<p>Triangle with vertices A(0, 0), B(6, 0), C(3, 9). The midpoint M of BC = ((6+3)/2, (0+9)/2) = (4.5, 4.5). The centroid G divides the median from A to M in a 2:1 ratio from A: G = A + (2/3)(M − A) = (0 + (2/3)(4.5), 0 + (2/3)(4.5)) = <strong>(3, 3)</strong>.</p><p>Notice: the centroid is always 2/3 of the way along the median from the vertex.</p>` },
                { type: 'example', title: 'Midsegment Theorem', content: `<p>Triangle with sides of length 8, 10, and 12. The midsegment connecting the midpoints of the sides of length 8 and 10 is parallel to the side of length 12 and has length <strong>12 ÷ 2 = 6</strong>.</p><p>In general: midsegment length = (1/2) × (length of the parallel side).</p>` },
                { type: 'generated_practice', generators: ['triangle-centers', 'midsegment-theorem'] },
                { type: 'steps', title: 'Remembering the Four Triangle Centers', steps: [
                    'CENTROID — Medians — 2/3 from vertex — Center of mass (balance point)',
                    'ORTHOCENTER — Altitudes — Perpendicular from vertex to opposite side',
                    'CIRCUMCENTER — Perpendicular bisectors — Equidistant from all 3 vertices — Center of circumscribed circle',
                    'INCENTER — Angle bisectors — Equidistant from all 3 sides — Center of inscribed circle',
                ] },
                { type: 'tips', content: `<h4>💡 Memory Tricks</h4><p><strong>Circumcenter</strong>: the CIRCUMscribed circle goes around the outside — vertices are on the circle. <strong>Incenter</strong>: the INscribed circle goes on the INside — sides are tangent to the circle. <strong>Centroid</strong>: the CENTER of mass — the 2/3 rule always applies. For the midsegment, remember "half the parallel side."</p>` },
                { type: 'practice', problems: [
                    { question: 'The point where all three medians of a triangle meet is called the:', choices: ['Orthocenter', 'Circumcenter', 'Centroid', 'Incenter'], correctIndex: 2, explanation: 'The three medians meet at the <strong>centroid</strong>, which is the triangle\'s center of mass.' },
                    { question: 'The circumcenter of a triangle is equidistant from:', choices: ['All three sides', 'All three vertices', 'The centroid and incenter', 'The midpoints of the sides'], correctIndex: 1, explanation: 'The circumcenter is equidistant from all three <strong>vertices</strong> — it is the center of the circumscribed circle.' },
                    { question: 'A midsegment of a triangle has length 7. The side it is parallel to has length:', choices: ['3.5', '7', '14', '21'], correctIndex: 2, explanation: 'By the Midsegment Theorem, the midsegment is half the parallel side. So the parallel side = 2 × 7 = <strong>14</strong>.' },
                    { question: 'The incenter of a triangle is the center of the:', choices: ['Circumscribed circle (passes through vertices)', 'Inscribed circle (tangent to all sides)', 'Midsegment triangle', 'Altitude foot triangle'], correctIndex: 1, explanation: 'The incenter is the center of the <strong>inscribed circle</strong>, which is tangent to all three sides.' },
                ]}
            ]},

            // ---- 10. Pythagorean Theorem ----
            { id: 'pythagorean-theorem', title: 'Pythagorean Theorem', subtitle: 'a² + b² = c²', xpReward: 50, sections: [
                { type: 'text', content: `<h3>The Pythagorean Theorem</h3><p>In a <strong>right</strong> triangle, the square of the hypotenuse equals the sum of the squares of the two legs:</p><p style="text-align:center;font-size:1.2em;">$$a^2 + b^2 = c^2$$</p><p>The <strong>hypotenuse</strong> ($c$) is always the longest side, opposite the right angle.</p>` },
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
                    { type: 'fill_in', question: 'A right triangle has legs 5 and 12. Hypotenuse = ?', answer: '13', explanation: '5² + 12² = 25 + 144 = 169 → √169 = <strong>13</strong>' },
                    { question: 'Is a triangle with sides 7, 24, 25 a right triangle?', choices: ['Yes', 'No', 'Not enough info', 'Only if isosceles'], correctIndex: 0, explanation: '7² + 24² = 49 + 576 = 625 = 25². <strong>Yes</strong>.' },
                    { type: 'fill_in', question: 'A right triangle has hypotenuse 10 and one leg 6. The other leg = ?', answer: '8', explanation: '10² − 6² = 100 − 36 = 64 → √64 = <strong>8</strong>' },
                    { question: 'The hypotenuse is always:', choices: ['The shortest side', 'Opposite the right angle', 'Adjacent to the right angle', 'Equal to a leg'], correctIndex: 1, explanation: 'The hypotenuse is <strong>opposite the right angle</strong> and is always the longest side.' },
                ]}
            ]},

            // ---- 11. Special Right Triangles ----
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

            // ---- 12. Perimeter & Area Basics ----
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

            // ---- 13. Circles: Circumference & Area ----
            { id: 'circles-basics', title: 'Circles: Circumference & Area', subtitle: 'Working with π', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Circle Formulas</h3><p><strong>Circumference</strong> (distance around): $C = 2\\pi r = \\pi d$. <strong>Area</strong>: $A = \\pi r^2$.</p><p>The <strong>radius</strong> ($r$) goes from center to edge. The <strong>diameter</strong> ($d$) goes all the way across: $d = 2r$.</p>` },
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
                    { type: 'fill_in', question: 'Area of a circle with radius 5 (in terms of π): ?π', answer: '25', explanation: 'A = πr² = π(25) = <strong>25π</strong>' },
                    { question: 'A circle has circumference 20π. What is the radius?', choices: ['5', '10', '20', '40'], correctIndex: 1, explanation: '2πr = 20π → r = <strong>10</strong>.' },
                    { type: 'fill_in', question: 'A circle has area 49π. What is the radius?', answer: '7', explanation: 'πr² = 49π → r² = 49 → r = <strong>7</strong>' },
                    { question: 'The diameter is always ___ the radius.', choices: ['Half', 'Equal to', 'Twice', 'π times'], correctIndex: 2, explanation: 'd = 2r. The diameter is <strong>twice</strong> the radius.' },
                ]}
            ]},

            // ---- 14. Quadrilaterals ----
            { id: 'quadrilaterals', title: 'Quadrilaterals', subtitle: 'Properties of four-sided shapes', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Types of Quadrilaterals</h3><p>All quadrilaterals have interior angles summing to <strong>360°</strong>.</p><p><strong>Parallelogram</strong>: opposite sides parallel and equal. <strong>Rectangle</strong>: parallelogram with four right angles. <strong>Rhombus</strong>: parallelogram with four equal sides. <strong>Square</strong>: rectangle + rhombus (all sides equal, all right angles). <strong>Trapezoid</strong>: exactly one pair of parallel sides.</p>` },
                { type: 'example', title: 'Finding a Missing Angle', content: `<p>A quadrilateral has angles 80°, 110°, 95°, and x. Since all four angles sum to 360°:</p><p>x = 360° − 80° − 110° − 95° = <strong>75°</strong>.</p>` },
                { type: 'generated_practice', generators: ['identify-quadrilateral', 'quad-missing-angle'] },
                { type: 'interactive_steps', title: 'Guided: Identify a shape with 4 equal sides and 4 right angles', description: 'Work through the quadrilateral hierarchy.', steps: [
                    { text: 'A shape with all 4 sides equal is a rhombus or a {blank}', answer: 'square', hint: 'A square also has right angles' },
                    { text: 'A shape with 4 right angles is a rectangle or a {blank}', answer: 'square', hint: 'A square also has equal sides' },
                    { text: 'A shape that is BOTH a rhombus and a rectangle is a {blank}', answer: 'square', hint: 'Equal sides AND right angles' }
                ], result: 'Equal sides + right angles = square. The square is the most special quadrilateral.' },
                { type: 'tips', content: `<h4>💡 Key Takeaways</h4><p>A square is a special rectangle AND a special rhombus. The hierarchy: square → rectangle/rhombus → parallelogram → quadrilateral.</p>` },
                { type: 'practice', problems: [
                    { question: 'Interior angles of any quadrilateral sum to:', choices: ['180°', '270°', '360°', '540°'], correctIndex: 2, explanation: 'All quadrilaterals have interior angles summing to <strong>360°</strong>.' },
                    { question: 'A quadrilateral with one pair of parallel sides is a:', choices: ['Parallelogram', 'Trapezoid', 'Rhombus', 'Square'], correctIndex: 1, explanation: 'One pair of parallel sides defines a <strong>trapezoid</strong>.' },
                    { question: 'Which is always true for a rhombus?', choices: ['All angles are 90°', 'All sides are equal', 'Diagonals are equal', 'It has no parallel sides'], correctIndex: 1, explanation: 'A rhombus has <strong>all four sides equal</strong>.' },
                    { question: 'A square is a special case of:', choices: ['Trapezoid only', 'Rectangle and rhombus', 'Pentagon', 'Triangle'], correctIndex: 1, explanation: 'A square is both a <strong>rectangle</strong> (right angles) and a <strong>rhombus</strong> (equal sides).' },
                ]}
            ]},

            // ---- 15. Polygon Angle Sums ----
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

            // ---- 16. Transformations: Translations & Reflections ----
            { id: 'translations-reflections', title: 'Translations & Reflections', subtitle: 'Sliding and flipping shapes', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Translations</h3><p>A <strong>translation</strong> slides every point of a figure the same distance in the same direction. The notation (x, y) → (x + a, y + b) means shift right by a and up by b.</p><h3>Reflections</h3><p>A <strong>reflection</strong> flips a figure over a line (the <strong>line of reflection</strong>). Reflecting over the x-axis: (x, y) → (x, −y). Over the y-axis: (x, y) → (−x, y).</p><p>Both translations and reflections are <strong>rigid motions</strong> — they preserve size and shape.</p>` },
                { type: 'example', title: 'Translation and Reflection', content: `<p>Translate (2, 5) right 3 and down 4: (2+3, 5−4) = <strong>(5, 1)</strong>.</p><p>Reflect (3, −2) over the y-axis: (x, y) → (−x, y) = <strong>(−3, −2)</strong>.</p>` },
                { type: 'generated_practice', generators: ['translate-point', 'reflection-point'] },
                { type: 'interactive_steps', title: 'Guided: Reflect (4, 3) over the x-axis, then translate right 2', description: 'Apply two transformations in sequence.', steps: [
                    { text: 'Reflect (4, 3) over the x-axis: (x, y) → (x, −y). New point: (4, {blank})', answer: '-3', hint: 'Negate the y-coordinate' },
                    { text: 'Now translate (4, −3) right 2: new x = 4 + 2 = {blank}', answer: '6', hint: 'Add 2 to x' },
                    { text: 'y stays the same. Final point: ({blank}, −3)', answer: '6', hint: 'x from step 2' }
                ], result: '(4, 3) → reflect over x-axis → (4, −3) → translate right 2 → (6, −3)' },
                { type: 'practice', problems: [
                    { question: 'Translate (3, 5) by (x+2, y−3):', choices: ['(5, 2)', '(1, 8)', '(5, 8)', '(1, 2)'], correctIndex: 0, explanation: '(3+2, 5−3) = <strong>(5, 2)</strong>.' },
                    { question: 'Reflect (4, −2) over the x-axis:', choices: ['(−4, −2)', '(4, 2)', '(−4, 2)', '(4, −2)'], correctIndex: 1, explanation: 'Over x-axis: (x, y) → (x, −y) = <strong>(4, 2)</strong>.' },
                    { question: 'Reflect (−3, 7) over the y-axis:', choices: ['(3, 7)', '(−3, −7)', '(3, −7)', '(−3, 7)'], correctIndex: 0, explanation: 'Over y-axis: (x, y) → (−x, y) = <strong>(3, 7)</strong>.' },
                    { question: 'A translation changes a shape\'s:', choices: ['Size', 'Orientation', 'Position', 'Angles'], correctIndex: 2, explanation: 'Translations change <strong>position</strong> only — size and shape stay the same.' },
                ]}
            ]},

            // ---- 17. Transformations: Rotations ----
            { id: 'rotations', title: 'Rotations', subtitle: 'Turning shapes around a point', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Rotations</h3><p>A <strong>rotation</strong> turns a figure around a fixed <strong>center of rotation</strong> by a given angle.</p><p>Common rotations about the origin (counterclockwise):</p><p>90°: (x, y) → (−y, x). 180°: (x, y) → (−x, −y). 270°: (x, y) → (y, −x).</p>` },
                { type: 'example', title: '90° Rotation', content: `<p>Rotate (3, 5) by 90° counterclockwise about the origin: apply (x, y) → (−y, x).</p><p>(−5, 3). ✓</p>` },
                { type: 'generated_practice', generators: ['identify-transformation'] },
                { type: 'interactive_steps', title: 'Guided: Rotate (5, 2) by 90° CCW about the origin', description: 'Apply the rotation rule (x, y) → (−y, x).', steps: [
                    { text: 'For 90° CCW: (x, y) → (−y, x). Here x = 5, y = {blank}', answer: '2', hint: 'Read the y-coordinate' },
                    { text: 'New x-coordinate = −y = −{blank}', answer: '2', hint: 'Negate the original y' },
                    { text: 'New y-coordinate = x = {blank}', answer: '5', hint: 'Use the original x' },
                    { text: 'Final result: ({blank}, 5)', answer: '-2', hint: 'New x from step 2' }
                ], result: '(5, 2) rotated 90° CCW = (−2, 5)' },
                { type: 'practice', problems: [
                    { question: 'Rotate (2, 7) by 180° about the origin:', choices: ['(−2, −7)', '(7, 2)', '(−7, 2)', '(2, −7)'], correctIndex: 0, explanation: '180°: (x,y) → (−x,−y) = <strong>(−2, −7)</strong>.' },
                    { question: 'Rotate (4, −1) by 90° CCW about the origin:', choices: ['(1, 4)', '(−1, −4)', '(−4, 1)', '(4, 1)'], correctIndex: 0, explanation: '90° CCW: (x,y) → (−y,x) = (1, 4). <strong>(1, 4)</strong>.' },
                    { question: 'Rotate (−3, 2) by 270° CCW about the origin:', choices: ['(2, 3)', '(−2, −3)', '(3, −2)', '(−2, 3)'], correctIndex: 0, explanation: '270° CCW: (x,y) → (y,−x) = (2, 3). <strong>(2, 3)</strong>.' },
                    { question: 'A rotation preserves:', choices: ['Position only', 'Size and shape', 'Only angles', 'Only lengths'], correctIndex: 1, explanation: 'Rotations are rigid motions — they preserve <strong>size and shape</strong>.' },
                ]}
            ]},

            // ---- 18. Congruence ----
            { id: 'congruence', title: 'Congruence', subtitle: 'When shapes are identical', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Congruent Figures</h3><p>Two figures are <strong>congruent</strong> (≅) if they have the same shape AND same size. Corresponding sides and corresponding angles are equal.</p><h3>Triangle Congruence Criteria</h3><p><strong>SSS</strong>: all 3 sides match. <strong>SAS</strong>: 2 sides and the included angle. <strong>ASA</strong>: 2 angles and the included side. <strong>AAS</strong>: 2 angles and a non-included side. <strong>HL</strong>: hypotenuse-leg for right triangles.</p><p>Note: <strong>SSA</strong> (or ASS) is NOT a valid congruence criterion!</p>` },
                { type: 'example', title: 'Identifying Congruence', content: `<p>△ABC and △DEF: AB = DE = 7, BC = EF = 9, AC = DF = 5. All three pairs of sides match → congruent by <strong>SSS</strong>.</p><p>If instead we knew two sides and the angle between them matched, that would be <strong>SAS</strong>.</p>` },
                { type: 'generated_practice', generators: ['congruent-vs-similar'] },
                { type: 'interactive_steps', title: 'Guided: Identify the congruence criterion', description: 'Determine which criterion applies based on what is known.', steps: [
                    { text: 'We know two sides and the angle between them — this is called the {blank} angle', answer: 'included', hint: 'The angle sits between the two known sides' },
                    { text: 'Two sides + included angle gives the {blank} criterion', answer: 'SAS', hint: 'Side-Angle-Side' },
                    { text: 'If instead we knew two angles and the side between them, that would be {blank}', answer: 'ASA', hint: 'Angle-Side-Angle' },
                    { text: 'If all three pairs of sides matched, we would use {blank}', answer: 'SSS', hint: 'Side-Side-Side' }
                ], result: 'SAS: 2 sides + included angle. ASA: 2 angles + included side. SSS: all 3 sides.' },
                { type: 'practice', problems: [
                    { question: 'Which is NOT a triangle congruence criterion?', choices: ['SSS', 'SAS', 'SSA', 'ASA'], correctIndex: 2, explanation: '<strong>SSA</strong> is not valid — it can produce two different triangles (the ambiguous case).' },
                    { question: 'Congruent figures have:', choices: ['Same shape only', 'Same size only', 'Same shape and size', 'Same angles only'], correctIndex: 2, explanation: 'Congruent = <strong>same shape AND same size</strong>.' },
                    { question: 'HL applies only to:', choices: ['Equilateral triangles', 'Right triangles', 'Isosceles triangles', 'Obtuse triangles'], correctIndex: 1, explanation: 'Hypotenuse-Leg works only for <strong>right triangles</strong>.' },
                    { question: 'If △ABC ≅ △DEF and AB = 7, then DE =', choices: ['7', '14', '3.5', 'Cannot tell'], correctIndex: 0, explanation: 'Corresponding sides of congruent triangles are equal: DE = <strong>7</strong>.' },
                ]}
            ]},

            // ---- 19. Similarity ----
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

            // ---- 20. Distance & Midpoint ----
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
                { type: 'graph_tool', title: 'Visualize a Line on the Coordinate Plane', prompt: 'The points (0, 2) and (4, 6) both lie on a line with slope 1 and y-intercept 2. Enter m = 1 and b = 2 to see this line. Notice how the midpoint (2, 4) sits exactly halfway along it.', target: { m: 1, b: 2 } },
                { type: 'practice', problems: [
                    { question: 'Distance between (0, 0) and (3, 4):', choices: ['5', '7', '12', '25'], correctIndex: 0, explanation: '√(9+16) = √25 = <strong>5</strong>.' },
                    { question: 'Midpoint of (2, 8) and (6, 4):', choices: ['(4, 6)', '(8, 12)', '(3, 2)', '(4, 12)'], correctIndex: 0, explanation: '((2+6)/2, (8+4)/2) = <strong>(4, 6)</strong>.' },
                    { question: 'Distance between (−1, 3) and (2, 7):', choices: ['5', '7', '25', '3'], correctIndex: 0, explanation: '√[(3)²+(4)²] = √(9+16) = <strong>5</strong>.' },
                    { question: 'Midpoint of (−4, 0) and (0, 6):', choices: ['(−2, 3)', '(−4, 6)', '(2, 3)', '(4, 6)'], correctIndex: 0, explanation: '((−4+0)/2, (0+6)/2) = <strong>(−2, 3)</strong>.' },
                ]}
            ]},

            // ---- 21. Slope & Parallel/Perpendicular Lines ----
            { id: 'slope-parallel-perp', title: 'Slope & Line Relationships', subtitle: 'Parallel and perpendicular slopes', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Slope Review</h3><p>Slope = rise/run = (y₂ − y₁)/(x₂ − x₁).</p><h3>Parallel Lines</h3><p>Parallel lines have the <strong>same slope</strong>. If m₁ = m₂, the lines are parallel.</p><h3>Perpendicular Lines</h3><p>Perpendicular lines have slopes that are <strong>negative reciprocals</strong>: m₁ × m₂ = −1. If one slope is 2/3, the perpendicular slope is −3/2.</p>` },
                { type: 'example', title: 'Parallel and Perpendicular Slopes', content: `<p>Line with slope 3: a parallel line also has slope <strong>3</strong>; a perpendicular line has slope <strong>−1/3</strong> (negative reciprocal).</p><p>Check: 3 × (−1/3) = −1. ✓</p>` },
                { type: 'steps', title: 'Finding a Perpendicular Slope', steps: ['Write down the slope of the original line (m).', 'Flip it to get the reciprocal (1/m).', 'Change the sign to get the negative reciprocal (−1/m).', 'Verify: original × perpendicular = −1.'] },
                { type: 'generated_practice', generators: ['find-slope', 'slope-parallel-perp'] },
                { type: 'interactive_steps', title: 'Guided: A line has slope 4. Find the perpendicular slope.', description: 'Use the negative reciprocal rule.', steps: [
                    { text: 'Original slope m = {blank}', answer: '4', hint: 'Given in the problem' },
                    { text: 'Reciprocal of 4 = 1/{blank}', answer: '4', hint: 'Flip the fraction' },
                    { text: 'Negate it: perpendicular slope = −1/{blank}', answer: '4', hint: 'Change the sign' },
                    { text: 'Verify: 4 × (−1/4) = {blank}', answer: '-1', hint: 'Must equal −1 for perpendicular lines' }
                ], result: 'Perpendicular slope = −1/4. Product of slopes = −1. ✓' },
                { type: 'graph_tool', title: 'Graph a Line and Its Parallel', prompt: 'Graph the line y = 2x + 1 (m = 2, b = 1). This is your reference line.', target: { m: 2, b: 1 } },
                { type: 'graph_tool', title: 'Graph the Perpendicular Line', prompt: 'Now graph a perpendicular line. The perpendicular slope to 2 is −0.5. Enter m = −0.5, b = 3 to see y = −0.5x + 3 crossing the original.', target: { m: -0.5, b: 3 } },
                { type: 'practice', problems: [
                    { question: 'A line has slope 4. A parallel line has slope:', choices: ['−4', '1/4', '4', '−1/4'], correctIndex: 2, explanation: 'Parallel lines share the same slope: <strong>4</strong>.' },
                    { question: 'A line has slope 2/5. A perpendicular line has slope:', choices: ['5/2', '−5/2', '−2/5', '2/5'], correctIndex: 1, explanation: 'Negative reciprocal of 2/5 is <strong>−5/2</strong>.' },
                    { question: 'Slope between (1, 3) and (4, 9):', choices: ['2', '3', '6', '1/2'], correctIndex: 0, explanation: '(9−3)/(4−1) = 6/3 = <strong>2</strong>.' },
                    { question: 'Lines with slopes 3 and −1/3 are:', choices: ['Parallel', 'Perpendicular', 'Neither', 'Same line'], correctIndex: 1, explanation: '3 × (−1/3) = −1, so they are <strong>perpendicular</strong>.' },
                ]}
            ]},

            // ---- 22. Area of Trapezoids & Composite Shapes ----
            { id: 'composite-area', title: 'Trapezoids & Composite Shapes', subtitle: 'Combining area formulas', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Trapezoid Area</h3><p>A = ½(b₁ + b₂)h, where b₁ and b₂ are the two parallel bases and h is the height.</p><h3>Composite Shapes</h3><p>Break complex shapes into rectangles, triangles, trapezoids, and circles. Find each area, then <strong>add</strong> (for combined shapes) or <strong>subtract</strong> (for holes/cutouts).</p>` },
                { type: 'example', title: 'Trapezoid Area', content: `<p>Bases 6 and 10, height 4: A = ½(6+10)(4) = ½(16)(4) = <strong>32</strong>.</p>` },
                { type: 'steps', title: 'Finding Area of a Composite Shape', steps: ['Sketch the shape and identify which simpler shapes it is made of.', 'Label all dimensions needed for each sub-shape.', 'Calculate the area of each piece separately.', 'Add areas together (or subtract for cutouts).'] },
                { type: 'generated_practice', generators: ['trapezoid-area', 'composite-area', 'shaded-region-area'] },
                { type: 'practice', problems: [
                    { question: 'Trapezoid with bases 5 and 9, height 6. Area =', choices: ['42', '45', '27', '84'], correctIndex: 0, explanation: '½(5+9)(6) = ½(14)(6) = <strong>42</strong>.' },
                    { question: 'An L-shaped room is two rectangles: 4×6 and 3×5. Total area:', choices: ['39', '24', '15', '47'], correctIndex: 0, explanation: '24 + 15 = <strong>39</strong>.' },
                    { question: 'A square with side 10 has a circular hole of radius 3. Shaded area ≈', choices: ['71.7', '100', '28.3', '91'], correctIndex: 0, explanation: '100 − 9π ≈ 100 − 28.3 ≈ <strong>71.7</strong>.' },
                    { question: 'To find the area of a shape with a hole, you:', choices: ['Add inner + outer', 'Subtract inner from outer', 'Multiply inner × outer', 'Ignore the hole'], correctIndex: 1, explanation: '<strong>Subtract</strong> the inner area from the outer area.' },
                ]}
            ]},

            // ---- 23. Surface Area ----
            { id: 'surface-area', title: 'Surface Area', subtitle: '3D shapes: prisms, cylinders, spheres', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Surface Area</h3><p>Surface area is the total area of all faces/surfaces of a 3D shape.</p><p><strong>Rectangular prism</strong>: SA = 2lw + 2lh + 2wh. <strong>Cylinder</strong>: SA = 2πr² + 2πrh. <strong>Sphere</strong>: SA = 4πr².</p>` },
                { type: 'example', title: 'Cylinder Surface Area', content: `<p>r = 3, h = 10: SA = 2π(9) + 2π(3)(10) = 18π + 60π = 78π ≈ <strong>245.04</strong>.</p>` },
                { type: 'steps', title: 'Finding Surface Area of a Cylinder', steps: ['Identify the two circular bases: area = πr² each, so 2πr² total.', 'Find the lateral (side) surface: unrolls into a rectangle with width 2πr and height h → area = 2πrh.', 'Add both parts: SA = 2πr² + 2πrh.', 'Substitute values and simplify.'] },
                { type: 'generated_practice', generators: ['cube-surface-area', 'cylinder-surface-area', 'sphere-surface-area'] },
                { type: 'interactive_steps', title: 'Guided: Cylinder with r = 5, h = 8. Find the surface area.', description: 'Break it into base areas and lateral area.', steps: [
                    { text: 'Area of one circular base = πr² = π({blank})²', answer: '5', hint: 'Radius = 5' },
                    { text: 'π × 25 = {blank}π (one base)', answer: '25', hint: '5² = 25' },
                    { text: 'Two bases total = {blank}π', answer: '50', hint: '2 × 25π' },
                    { text: 'Lateral area = 2πrh = 2π(5)({blank})', answer: '8', hint: 'Height = 8' },
                    { text: 'Lateral area = {blank}π', answer: '80', hint: '2 × 5 × 8 = 80' },
                    { text: 'Total SA = 50π + 80π = {blank}π', answer: '130', hint: 'Add them together' }
                ], result: 'SA = 130π ≈ 408.4 square units' },
                { type: 'practice', problems: [
                    { question: 'SA of a cube with side 4:', choices: ['64', '96', '24', '48'], correctIndex: 1, explanation: '6 × 4² = 6 × 16 = <strong>96</strong>.' },
                    { question: 'SA of a sphere with r = 5:', choices: ['100π', '500π/3', '25π', '20π'], correctIndex: 0, explanation: '4π(25) = <strong>100π</strong>.' },
                    { question: 'A cylinder has two circles and a:', choices: ['Square', 'Rectangle (lateral surface)', 'Triangle', 'Pentagon'], correctIndex: 1, explanation: 'The lateral surface unrolls into a <strong>rectangle</strong>.' },
                    { question: 'SA of a rectangular prism 2×3×5:', choices: ['30', '62', '31', '60'], correctIndex: 1, explanation: '2(6)+2(10)+2(15) = 12+20+30 = <strong>62</strong>.' },
                ]}
            ]},

            // ---- 24. Volume ----
            { id: 'volume', title: 'Volume', subtitle: 'Prisms, cylinders, cones, and spheres', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Volume Formulas</h3><p><strong>Prism/Cylinder</strong>: V = Bh (base area × height). <strong>Cone/Pyramid</strong>: V = ⅓Bh. <strong>Sphere</strong>: V = (4/3)πr³.</p><p>Cube: V = s³. Rectangular prism: V = lwh. Cylinder: V = πr²h. Cone: V = ⅓πr²h.</p>` },
                { type: 'example', title: 'Cone vs. Cylinder', content: `<p>A cone and a cylinder with the same base (r = 3) and height (h = 4): Cylinder V = π(9)(4) = 36π. Cone V = ⅓(36π) = <strong>12π</strong>. The cone holds exactly ⅓ as much.</p>` },
                { type: 'steps', title: 'Choosing the Right Volume Formula', steps: ['Identify the shape (prism, cylinder, cone, pyramid, sphere).', 'For prisms and cylinders: find the base area B, then V = Bh.', 'For cones and pyramids: same as above but multiply by ⅓.', 'For spheres: V = (4/3)πr³. No height needed — just the radius.'] },
                { type: 'generated_practice', generators: ['cube-volume', 'cylinder-volume', 'sphere-volume', 'cone-volume'] },
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
                    { question: 'Volume of a cone with r=3, h=8:', choices: ['24π', '72π', '8π', '36π'], correctIndex: 0, explanation: '⅓π(9)(8) = <strong>24π</strong>.' },
                    { question: 'A cone\'s volume is what fraction of a cylinder\'s (same base, same height)?', choices: ['1/2', '1/3', '2/3', '1/4'], correctIndex: 1, explanation: 'V_cone = <strong>1/3</strong> × V_cylinder.' },
                ]}
            ]},

            // ---- 25. Arcs & Sectors ----
            { id: 'arcs-sectors', title: 'Arcs & Sectors', subtitle: 'Parts of circles', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Arc Length</h3><p>Arc length = (θ/360°) × 2πr, where θ is the central angle in degrees.</p><h3>Sector Area</h3><p>Sector area = (θ/360°) × πr².</p><p>Think of a sector as a "pizza slice" — the fraction of the circle is θ/360.</p>` },
                { type: 'example', title: 'Arc Length and Sector Area', content: `<p>Circle r = 6, θ = 90°: Arc = (90/360) × 2π(6) = ¼ × 12π = <strong>3π</strong>. Sector area = (90/360) × π(36) = ¼ × 36π = <strong>9π</strong>.</p>` },
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

            // ---- 26. Circles: Inscribed Angles & Chords ----
            { id: 'inscribed-angles', title: 'Inscribed Angles & Chords', subtitle: 'Angle relationships in circles', xpReward: 50, sections: [
                { type: 'text', content: `<h3>Central vs. Inscribed Angles</h3><p>A <strong>central angle</strong> has its vertex at the center; it equals its intercepted arc. An <strong>inscribed angle</strong> has its vertex on the circle; it equals <strong>half</strong> its intercepted arc.</p><p>If a central angle = 80°, an inscribed angle intercepting the same arc = 40°.</p><p>An inscribed angle intercepting a semicircle (180° arc) is always <strong>90°</strong>.</p>` },
                { type: 'example', title: 'Inscribed vs. Central Angle', content: `<p>Central angle = 120°. Inscribed angle on the same arc = 120° ÷ 2 = <strong>60°</strong>.</p><p>If the inscribed angle = 45°, the intercepted arc = 45° × 2 = <strong>90°</strong>.</p>` },
                { type: 'generated_practice', generators: ['inscribed-angle'] },
                { type: 'interactive_steps', title: 'Guided: Central angle = 140°. Find the inscribed angle and arc.', description: 'Apply the inscribed angle theorem.', steps: [
                    { text: 'The intercepted arc equals the central angle = {blank}°', answer: '140', hint: 'Central angle = arc measure' },
                    { text: 'Inscribed angle = ½ × arc = ½ × 140° = {blank}°', answer: '70', hint: 'Divide the arc by 2' },
                    { text: 'If another inscribed angle intercepts the same arc, it also equals {blank}°', answer: '70', hint: 'All inscribed angles on the same arc are equal' }
                ], result: 'Inscribed angle = 70°. All inscribed angles on the same arc are equal.' },
                { type: 'practice', problems: [
                    { question: 'Central angle = 100°. Inscribed angle on same arc =', choices: ['100°', '50°', '200°', '25°'], correctIndex: 1, explanation: 'Inscribed angle = ½ × central = <strong>50°</strong>.' },
                    { question: 'An inscribed angle is 35°. Its intercepted arc =', choices: ['17.5°', '35°', '70°', '105°'], correctIndex: 2, explanation: 'Arc = 2 × inscribed = <strong>70°</strong>.' },
                    { question: 'An inscribed angle in a semicircle is always:', choices: ['45°', '60°', '90°', '180°'], correctIndex: 2, explanation: 'Inscribed angle in a semicircle = <strong>90°</strong> (Thales\' theorem).' },
                    { question: 'Two inscribed angles intercept the same arc. They are:', choices: ['Supplementary', 'Complementary', 'Equal', 'Unrelated'], correctIndex: 2, explanation: 'Inscribed angles on the same arc are <strong>equal</strong>.' },
                ]}
            ]},

            // ---- 27. Geometric Probability ----
            { id: 'geometric-probability', title: 'Geometric Probability', subtitle: 'Probability using area and length', xpReward: 45, sections: [
                { type: 'text', content: `<h3>Geometric Probability</h3><p>When outcomes are based on position or location, probability = (favorable area or length) / (total area or length).</p><p>Example: A dart lands randomly on a 10×10 board. A circular target has radius 3. P(hit) = π(9)/100 ≈ 28.3%.</p>` },
                { type: 'example', title: 'Area-Based Probability', content: `<p>A 20×20 square has a 8×8 shaded region in the corner. P(random point lands in shaded region) = 64/400 = <strong>0.16 = 16%</strong>.</p>` },
                { type: 'steps', title: 'Solving a Geometric Probability Problem', steps: ['Identify the total region (entire area or length).', 'Identify the favorable region (the target area or length).', 'Compute the probability: P = favorable / total.', 'Express as a fraction, decimal, or percent as requested.'] },
                { type: 'generated_practice', generators: ['geometric-probability', 'shaded-region-area'] },
                { type: 'practice', problems: [
                    { question: 'A 12×12 square has a 6×6 shaded region. P(landing in shaded) =', choices: ['1/2', '1/4', '1/3', '1/6'], correctIndex: 1, explanation: '36/144 = <strong>1/4</strong>.' },
                    { question: 'A spinner has 3 equal sections. P(landing on one) =', choices: ['1/2', '1/3', '1/4', '1/6'], correctIndex: 1, explanation: 'Equal sections: <strong>1/3</strong>.' },
                    { question: 'A 20 cm segment has a 5 cm red section. P(random point is red) =', choices: ['1/2', '1/3', '1/4', '1/5'], correctIndex: 2, explanation: '5/20 = <strong>1/4</strong>.' },
                    { question: 'Geometric probability always gives values between:', choices: ['−1 and 1', '0 and 1', '0 and 100', '0 and 360'], correctIndex: 1, explanation: 'Probability is always between <strong>0 and 1</strong>.' },
                ]}
            ]},

            // ---- 28. Symmetry & Nets ----
            { id: 'symmetry-nets', title: 'Symmetry & Nets', subtitle: 'Lines of symmetry and 3D nets', xpReward: 40, sections: [
                { type: 'text', content: `<h3>Lines of Symmetry</h3><p>A <strong>line of symmetry</strong> divides a figure into two mirror-image halves. A square has 4 lines of symmetry; an equilateral triangle has 3; a circle has infinitely many.</p><h3>Nets</h3><p>A <strong>net</strong> is a 2D pattern that folds into a 3D shape. A cube net has 6 connected squares. Identifying which net folds into which solid is an important skill.</p>` },
                { type: 'example', title: 'Lines of Symmetry and Net Identification', content: `<p>A regular pentagon has <strong>5</strong> lines of symmetry (one through each vertex and the midpoint of the opposite side).</p><p>A triangular prism net: 2 triangles (the bases) + 3 rectangles (the lateral faces) = <strong>5 faces</strong> total.</p>` },
                { type: 'generated_practice', generators: ['line-symmetry', 'identify-net', 'cross-section-shape'] },
                { type: 'interactive_steps', title: 'Guided: How many lines of symmetry does a regular hexagon have?', description: 'Count the lines of symmetry methodically.', steps: [
                    { text: 'A regular hexagon has {blank} sides', answer: '6', hint: 'Hexa = six' },
                    { text: 'Each vertex connects to the opposite vertex via a line of symmetry. Number of vertex-to-vertex lines: {blank}', answer: '3', hint: '6 vertices → 3 pairs' },
                    { text: 'Each side midpoint also connects to the opposite midpoint. Number of midpoint-to-midpoint lines: {blank}', answer: '3', hint: '6 sides → 3 pairs' },
                    { text: 'Total lines of symmetry: {blank}', answer: '6', hint: '3 + 3 = 6' }
                ], result: 'A regular hexagon has 6 lines of symmetry — matching its 6 sides' },
                { type: 'practice', problems: [
                    { question: 'How many lines of symmetry does a rectangle (non-square) have?', choices: ['0', '1', '2', '4'], correctIndex: 2, explanation: 'A rectangle has <strong>2</strong> lines of symmetry (horizontal and vertical through center).' },
                    { question: 'How many lines of symmetry does a circle have?', choices: ['1', '4', '8', 'Infinite'], correctIndex: 3, explanation: 'A circle has <strong>infinitely many</strong> lines of symmetry.' },
                    { question: 'A cube net consists of how many squares?', choices: ['4', '5', '6', '8'], correctIndex: 2, explanation: 'A cube has 6 faces, so the net has <strong>6</strong> squares.' },
                    { question: 'A cylinder net consists of:', choices: ['2 circles and 1 rectangle', '2 rectangles and 1 circle', '3 circles', '1 circle and 1 triangle'], correctIndex: 0, explanation: 'A cylinder net: <strong>2 circles</strong> (top/bottom) and <strong>1 rectangle</strong> (lateral surface).' },
                ]}
            ]},

            // ---- 29. Geometry Review ----
            { id: 'geometry-review', title: 'Geometry Review & Problem Solving', subtitle: 'Bringing it all together', xpReward: 100, sections: [
                { type: 'text', content: `<h3>Comprehensive Review</h3><p>This final lesson covers the major concepts of the Geometry path: angle relationships, triangle properties, area and volume formulas, coordinate geometry, and transformations.</p>` },
                { type: 'generated_practice', generators: ['find-hypotenuse'] },
                { type: 'generated_practice', generators: ['distance-formula'] },
                { type: 'generated_practice', generators: ['interior-angle-sum'] },
                { type: 'generated_practice', generators: ['sector-area-calc'] },
                { type: 'generated_practice', generators: ['cone-volume'] },
                { type: 'practice', problems: [
                    { question: 'The Pythagorean theorem applies to:', choices: ['All triangles', 'Right triangles only', 'Equilateral triangles', 'Isosceles triangles'], correctIndex: 1, explanation: 'a² + b² = c² applies to <strong>right triangles only</strong>.' },
                    { question: 'Interior angles of a hexagon sum to:', choices: ['540°', '720°', '900°', '1080°'], correctIndex: 1, explanation: '(6−2)×180° = <strong>720°</strong>.' },
                    { question: 'Volume of a cone with r=3, h=8:', choices: ['24π', '72π', '216π', '8π'], correctIndex: 0, explanation: '⅓π(9)(8) = <strong>24π</strong>.' },
                    { question: 'Two similar figures have scale factor 5. Area ratio is:', choices: ['5', '10', '25', '125'], correctIndex: 2, explanation: 'Area ratio = 5² = <strong>25</strong>.' },
                    { question: 'Reflect (−2, 5) over the x-axis:', choices: ['(2, 5)', '(−2, −5)', '(2, −5)', '(−2, 5)'], correctIndex: 1, explanation: 'Over x-axis: y flips → <strong>(−2, −5)</strong>.' },
                ]}
            ]},
        ]
};
