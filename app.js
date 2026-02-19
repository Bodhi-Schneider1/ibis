// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getFirestore, doc, setDoc, getDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

// Your Firebase configuration
// TODO: Replace this with your actual Firebase config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDB6UH9wG6f8ArJTDAZ7OU7DzfJuzISgVw",
  authDomain: "ibis-fe4a8.firebaseapp.com",
  projectId: "ibis-fe4a8",
  storageBucket: "ibis-fe4a8.firebasestorage.app",
  messagingSenderId: "813764414108",
  appId: "1:813764414108:web:1e54dcbfa2a835c0debb59",
  measurementId: "G-JBJ6CV3QTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Practice session state
let practiceState = {
    topic: null,
    difficulty: null,
    mode: null
};

// Lesson Templates - YOU CAN EDIT THESE!
const lessons = {
    algebra: {
        'linear-equations': {
            title: 'Linear Equations',
            subtitle: 'Learn how to solve equations of the form ax + b = c',
            level: 'Beginner',
            sections: [
                {
                    type: 'text',
                    content: '<h3>What is a Linear Equation?</h3><p>A linear equation is an equation where the highest power of the variable is 1. The general form is <strong>ax + b = c</strong>, where a, b, and c are constants.</p>'
                },
                {
                    type: 'example',
                    title: 'Example 1: Basic Linear Equation',
                    content: '<p><strong>Solve: 2x + 5 = 13</strong></p><p><strong>Step 1:</strong> Subtract 5 from both sides<br>2x = 8</p><p><strong>Step 2:</strong> Divide both sides by 2<br>x = 4</p><p><strong>Answer:</strong> x = 4</p>'
                },
                {
                    type: 'example',
                    title: 'Example 2: Equation with Negative Numbers',
                    content: '<p><strong>Solve: -3x + 7 = -8</strong></p><p><strong>Step 1:</strong> Subtract 7 from both sides<br>-3x = -15</p><p><strong>Step 2:</strong> Divide both sides by -3<br>x = 5</p><p><strong>Answer:</strong> x = 5</p>'
                },
                {
                    type: 'tips',
                    content: '<h4>💡 Key Tips:</h4><ul><li>Always perform the same operation on both sides</li><li>Work backwards from the order of operations</li><li>Check your answer by substituting back into the original equation</li></ul>'
                }
            ]
        },
        'quadratic-equations': {
            title: 'Quadratic Equations',
            subtitle: 'Master equations of the form ax² + bx + c = 0',
            level: 'Intermediate',
            sections: [
                {
                    type: 'text',
                    content: '<h3>What is a Quadratic Equation?</h3><p>A quadratic equation is an equation where the highest power of the variable is 2. The standard form is <strong>ax² + bx + c = 0</strong>.</p>'
                },
                {
                    type: 'text',
                    content: '<h3>The Quadratic Formula</h3><p>The quadratic formula can solve any quadratic equation:</p><p style="font-size: 1.2em; text-align: center; margin: 20px 0;"><strong>x = (-b ± √(b² - 4ac)) / 2a</strong></p>'
                },
                {
                    type: 'example',
                    title: 'Example: Using the Quadratic Formula',
                    content: '<p><strong>Solve: x² - 5x + 6 = 0</strong></p><p>Here a = 1, b = -5, c = 6</p><p><strong>Step 1:</strong> Calculate the discriminant<br>b² - 4ac = (-5)² - 4(1)(6) = 25 - 24 = 1</p><p><strong>Step 2:</strong> Apply the formula<br>x = (5 ± √1) / 2 = (5 ± 1) / 2</p><p><strong>Solutions:</strong><br>x = (5 + 1) / 2 = 3<br>x = (5 - 1) / 2 = 2</p>'
                },
                {
                    type: 'tips',
                    content: '<h4>💡 Quick Methods:</h4><ul><li><strong>Factoring:</strong> Try factoring first if the equation looks simple</li><li><strong>Discriminant:</strong> If b² - 4ac < 0, there are no real solutions</li><li><strong>Check:</strong> Substitute your answers back to verify</li></ul>'
                }
            ]
        },
        'functions': {
            title: 'Functions & Graphs',
            subtitle: 'Understanding function notation and how to graph functions',
            level: 'Intermediate',
            sections: [
                {
                    type: 'text',
                    content: '<h3>What is a Function?</h3><p>A function is a relationship where each input has exactly one output. We write functions as <strong>f(x)</strong>, which means "the function f evaluated at x".</p>'
                },
                {
                    type: 'example',
                    title: 'Example: Evaluating a Function',
                    content: '<p><strong>Given f(x) = 2x + 3, find f(4)</strong></p><p><strong>Solution:</strong><br>f(4) = 2(4) + 3 = 8 + 3 = 11</p>'
                },
                {
                    type: 'tips',
                    content: '<h4>💡 Remember:</h4><ul><li>f(x) is just another way to write y</li><li>The graph of a linear function is always a straight line</li><li>To graph a function, create a table of x and y values</li></ul>'
                }
            ]
        }
    },
    geometry: {
        'triangles': {
            title: 'Triangles',
            subtitle: 'Properties, types, and important theorems about triangles',
            level: 'Beginner',
            sections: [
                {
                    type: 'text',
                    content: '<h3>Triangle Basics</h3><p>A triangle is a polygon with three sides and three angles. The sum of all angles in a triangle is always <strong>180°</strong>.</p>'
                },
                {
                    type: 'text',
                    content: '<h3>Types of Triangles</h3><p><strong>By sides:</strong></p><ul><li><strong>Equilateral:</strong> All sides equal</li><li><strong>Isosceles:</strong> Two sides equal</li><li><strong>Scalene:</strong> All sides different</li></ul><p><strong>By angles:</strong></p><ul><li><strong>Acute:</strong> All angles less than 90°</li><li><strong>Right:</strong> One 90° angle</li><li><strong>Obtuse:</strong> One angle greater than 90°</li></ul>'
                },
                {
                    type: 'example',
                    title: 'Example: Finding a Missing Angle',
                    content: '<p><strong>A triangle has angles of 60° and 80°. Find the third angle.</strong></p><p><strong>Solution:</strong><br>Sum of angles = 180°<br>Third angle = 180° - 60° - 80° = 40°</p>'
                },
                {
                    type: 'tips',
                    content: '<h4>💡 Key Facts:</h4><ul><li>The sum of angles is always 180°</li><li>The longest side is opposite the largest angle</li><li>An exterior angle equals the sum of the two opposite interior angles</li></ul>'
                }
            ]
        },
        'circles': {
            title: 'Circles',
            subtitle: 'Understanding radius, diameter, circumference, and area',
            level: 'Beginner',
            sections: [
                {
                    type: 'text',
                    content: '<h3>Circle Basics</h3><p>A circle is the set of all points that are the same distance from a center point.</p><ul><li><strong>Radius (r):</strong> Distance from center to edge</li><li><strong>Diameter (d):</strong> Distance across the circle through the center (d = 2r)</li><li><strong>Circumference (C):</strong> Distance around the circle</li><li><strong>Area (A):</strong> Space inside the circle</li></ul>'
                },
                {
                    type: 'text',
                    content: '<h3>Important Formulas</h3><p style="font-size: 1.2em;"><strong>Circumference: C = 2πr</strong> or <strong>C = πd</strong></p><p style="font-size: 1.2em;"><strong>Area: A = πr²</strong></p>'
                },
                {
                    type: 'example',
                    title: 'Example: Finding Circumference and Area',
                    content: '<p><strong>A circle has a radius of 5 cm. Find its circumference and area.</strong></p><p><strong>Circumference:</strong><br>C = 2πr = 2π(5) = 10π ≈ 31.4 cm</p><p><strong>Area:</strong><br>A = πr² = π(5)² = 25π ≈ 78.5 cm²</p>'
                }
            ]
        },
        'pythagorean': {
            title: 'Pythagorean Theorem',
            subtitle: 'Understanding and applying a² + b² = c²',
            level: 'Intermediate',
            sections: [
                {
                    type: 'text',
                    content: '<h3>The Pythagorean Theorem</h3><p>In a right triangle, the square of the hypotenuse (longest side) equals the sum of squares of the other two sides.</p><p style="font-size: 1.3em; text-align: center; margin: 20px 0;"><strong>a² + b² = c²</strong></p><p>where c is the hypotenuse and a, b are the other two sides.</p>'
                },
                {
                    type: 'example',
                    title: 'Example: Finding the Hypotenuse',
                    content: '<p><strong>A right triangle has legs of length 3 and 4. Find the hypotenuse.</strong></p><p><strong>Solution:</strong><br>a² + b² = c²<br>3² + 4² = c²<br>9 + 16 = c²<br>25 = c²<br>c = 5</p>'
                },
                {
                    type: 'tips',
                    content: '<h4>💡 Common Pythagorean Triples:</h4><ul><li>3, 4, 5</li><li>5, 12, 13</li><li>8, 15, 17</li><li>7, 24, 25</li></ul><p>Recognizing these can save time!</p>'
                }
            ]
        }
    },
    trigonometry: {
        'intro-trig': {
            title: 'Introduction to Trigonometry',
            subtitle: 'Understanding sine, cosine, and tangent',
            level: 'Beginner',
            sections: [
                {
                    type: 'text',
                    content: '<h3>What is Trigonometry?</h3><p>Trigonometry studies the relationships between angles and sides in triangles. The three main trigonometric functions are sine, cosine, and tangent.</p>'
                },
                {
                    type: 'text',
                    content: '<h3>SOHCAHTOA</h3><p>This memory trick helps remember the ratios:</p><ul><li><strong>SOH:</strong> Sin = Opposite / Hypotenuse</li><li><strong>CAH:</strong> Cos = Adjacent / Hypotenuse</li><li><strong>TOA:</strong> Tan = Opposite / Adjacent</li></ul>'
                },
                {
                    type: 'example',
                    title: 'Example: Finding Sine',
                    content: '<p><strong>In a right triangle, the opposite side is 3 and the hypotenuse is 5. Find sin(θ).</strong></p><p><strong>Solution:</strong><br>sin(θ) = Opposite / Hypotenuse<br>sin(θ) = 3/5 = 0.6</p>'
                },
                {
                    type: 'tips',
                    content: '<h4>💡 Remember:</h4><ul><li>These ratios only work for right triangles</li><li>The hypotenuse is always the longest side</li><li>Make sure your calculator is in the correct mode (degrees or radians)</li></ul>'
                }
            ]
        },
        'unit-circle': {
            title: 'The Unit Circle',
            subtitle: 'Understanding angles and coordinates on the unit circle',
            level: 'Intermediate',
            sections: [
                {
                    type: 'text',
                    content: '<h3>What is the Unit Circle?</h3><p>The unit circle is a circle with radius 1 centered at the origin. It helps us understand trigonometric functions for any angle.</p>'
                },
                {
                    type: 'text',
                    content: '<h3>Key Points to Remember</h3><ul><li>At any angle θ, the coordinates are (cos θ, sin θ)</li><li>0° = 0 radians is at point (1, 0)</li><li>90° = π/2 radians is at point (0, 1)</li><li>180° = π radians is at point (-1, 0)</li><li>270° = 3π/2 radians is at point (0, -1)</li></ul>'
                },
                {
                    type: 'tips',
                    content: '<h4>💡 Quick Reference:</h4><ul><li>To convert degrees to radians: multiply by π/180</li><li>To convert radians to degrees: multiply by 180/π</li><li>Memorize the special angles: 0°, 30°, 45°, 60°, 90°</li></ul>'
                }
            ]
        },
        'identities': {
            title: 'Trigonometric Identities',
            subtitle: 'Essential formulas and relationships',
            level: 'Advanced',
            sections: [
                {
                    type: 'text',
                    content: '<h3>Fundamental Identities</h3><p><strong>Pythagorean Identity:</strong></p><p style="font-size: 1.2em;">sin²θ + cos²θ = 1</p><p><strong>Quotient Identity:</strong></p><p style="font-size: 1.2em;">tan θ = sin θ / cos θ</p>'
                },
                {
                    type: 'text',
                    content: '<h3>Double Angle Formulas</h3><p>sin(2θ) = 2 sin θ cos θ</p><p>cos(2θ) = cos²θ - sin²θ</p>'
                },
                {
                    type: 'example',
                    title: 'Example: Using the Pythagorean Identity',
                    content: '<p><strong>If sin θ = 3/5, find cos θ</strong></p><p><strong>Solution:</strong><br>sin²θ + cos²θ = 1<br>(3/5)² + cos²θ = 1<br>9/25 + cos²θ = 1<br>cos²θ = 16/25<br>cos θ = 4/5</p>'
                },
                {
                    type: 'tips',
                    content: '<h4>💡 Pro Tips:</h4><ul><li>Memorize the fundamental identities</li><li>Practice converting between different forms</li><li>Check your work by substituting specific values</li></ul>'
                }
            ]
        }
    }
};

// Make functions globally available
window.signup = signup;
window.login = login;
window.logout = logout;
window.toggleForms = toggleForms;
window.saveProfile = saveProfile;
window.toggleEditMode = toggleEditMode;
window.showProfile = showProfile;
window.showDashboard = showDashboard;
window.selectTopic = selectTopic;
window.setDifficulty = setDifficulty;
window.setPracticeMode = setPracticeMode;
window.startPractice = startPractice;
window.showLearnView = showLearnView;
window.showPracticeView = showPracticeView;
window.openLesson = openLesson;
window.closeLesson = closeLesson;
window.startPracticeFromLesson = startPracticeFromLesson;

// Sign Up Function
function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const errorMessage = document.getElementById('error-message');

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('User created:', userCredential.user);
            errorMessage.textContent = '';
            
            const userId = userCredential.user.uid;
            setDoc(doc(db, 'users', userId), {
                email: email,
                displayName: '',
                bio: '',
                profilePicture: '',
                createdAt: new Date().toISOString(),
                stats: {
                    algebra: 0,
                    geometry: 0,
                    trigonometry: 0
                }
            });
        })
        .catch((error) => {
            errorMessage.textContent = error.message;
            console.error('Signup error:', error);
        });
}

// Login Function
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorMessage = document.getElementById('error-message');

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('User logged in:', userCredential.user);
            errorMessage.textContent = '';
        })
        .catch((error) => {
            errorMessage.textContent = error.message;
            console.error('Login error:', error);
        });
}

// Logout Function
function logout() {
    signOut(auth)
        .then(() => {
            console.log('User logged out');
        })
        .catch((error) => {
            console.error('Logout error:', error);
        });
}

// Save Profile Function
async function saveProfile() {
    const user = auth.currentUser;
    if (!user) return;

    const displayName = document.getElementById('profile-name').value;
    const bio = document.getElementById('profile-bio').value;
    const profilePicture = document.getElementById('profile-picture').value;

    try {
        await setDoc(doc(db, 'users', user.uid), {
            displayName: displayName,
            bio: bio,
            profilePicture: profilePicture,
            updatedAt: new Date().toISOString()
        }, { merge: true });

        alert('Profile saved successfully!');
        toggleEditMode();
        loadProfile(user.uid);
    } catch (error) {
        console.error('Error saving profile:', error);
        alert('Error saving profile: ' + error.message);
    }
}

// Load Profile Function
async function loadProfile(userId) {
    try {
        const docRef = doc(db, 'users', userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            
            document.getElementById('display-name').textContent = data.displayName || 'No name set';
            document.getElementById('display-bio').textContent = data.bio || 'No bio set';
            document.getElementById('display-email').textContent = data.email;
            document.getElementById('user-name').textContent = data.displayName || 'Student';
            
            const profileImg = document.getElementById('profile-img');
            if (data.profilePicture) {
                profileImg.src = data.profilePicture;
                profileImg.style.display = 'block';
            } else {
                profileImg.style.display = 'none';
            }
            
            document.getElementById('profile-name').value = data.displayName || '';
            document.getElementById('profile-bio').value = data.bio || '';
            document.getElementById('profile-picture').value = data.profilePicture || '';
        }
    } catch (error) {
        console.error('Error loading profile:', error);
    }
}

// Toggle Edit Mode
function toggleEditMode() {
    const displaySection = document.getElementById('profile-display');
    const editSection = document.getElementById('profile-edit');
    
    displaySection.classList.toggle('hidden');
    editSection.classList.toggle('hidden');
}

// Show Profile View
function showProfile() {
    document.getElementById('main-view').classList.add('hidden');
    document.getElementById('profile-view').classList.remove('hidden');
    document.getElementById('lesson-viewer').classList.add('hidden');
}

// Show Dashboard View
function showDashboard() {
    document.getElementById('main-view').classList.remove('hidden');
    document.getElementById('profile-view').classList.add('hidden');
    document.getElementById('lesson-viewer').classList.add('hidden');
}

// Show Learn View
function showLearnView() {
    document.getElementById('learn-view').classList.remove('hidden');
    document.getElementById('practice-view').classList.add('hidden');
    document.getElementById('learn-toggle').classList.add('active');
    document.getElementById('practice-toggle').classList.remove('active');
}

// Show Practice View
function showPracticeView() {
    document.getElementById('learn-view').classList.add('hidden');
    document.getElementById('practice-view').classList.remove('hidden');
    document.getElementById('learn-toggle').classList.remove('active');
    document.getElementById('practice-toggle').classList.add('active');
}

// Open Lesson
function openLesson(topic, lessonId) {
    const lesson = lessons[topic][lessonId];
    if (!lesson) return;

    // Update lesson header
    document.getElementById('lesson-topic-badge').textContent = topic.charAt(0).toUpperCase() + topic.slice(1);
    document.getElementById('lesson-title').textContent = lesson.title;
    document.getElementById('lesson-subtitle').textContent = lesson.subtitle;

    // Build lesson content
    let contentHtml = '';
    lesson.sections.forEach(section => {
        if (section.type === 'text') {
            contentHtml += `<div class="lesson-section">${section.content}</div>`;
        } else if (section.type === 'example') {
            contentHtml += `
                <div class="lesson-example">
                    <h4>📝 ${section.title}</h4>
                    ${section.content}
                </div>
            `;
        } else if (section.type === 'tips') {
            contentHtml += `
                <div class="lesson-tips">
                    ${section.content}
                </div>
            `;
        }
    });

    document.getElementById('lesson-content').innerHTML = contentHtml;

    // Show lesson viewer
    document.getElementById('main-view').classList.add('hidden');
    document.getElementById('lesson-viewer').classList.remove('hidden');

    // Store current lesson for practice
    practiceState.currentLesson = { topic, lessonId };
}

// Close Lesson
function closeLesson() {
    document.getElementById('main-view').classList.remove('hidden');
    document.getElementById('lesson-viewer').classList.add('hidden');
}

// Start Practice from Lesson
function startPracticeFromLesson() {
    const { topic } = practiceState.currentLesson;
    
    // Switch to practice view
    closeLesson();
    showPracticeView();
    
    // Pre-select the topic
    selectTopic(topic);
    
    // Scroll to difficulty selection
    document.querySelector('.difficulty-section').scrollIntoView({ behavior: 'smooth' });
}

// Select Topic
function selectTopic(topic) {
    practiceState.topic = topic;
    
    document.querySelectorAll('.topic-card').forEach(card => {
        card.classList.remove('active');
    });
    
    event.target.closest('.topic-card').classList.add('active');
    
    updateStartButton();
}

// Set Difficulty
function setDifficulty(difficulty) {
    practiceState.difficulty = difficulty;
    
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.target.classList.add('active');
    
    updateStartButton();
}

// Set Practice Mode
function setPracticeMode(mode) {
    practiceState.mode = mode;
    
    document.querySelectorAll('.mode-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.target.classList.add('active');
    
    updateStartButton();
}

// Update Start Button
function updateStartButton() {
    const startBtn = document.getElementById('start-btn');
    const { topic, difficulty, mode } = practiceState;
    
    if (topic && difficulty && mode) {
        startBtn.disabled = false;
        const topicName = topic.charAt(0).toUpperCase() + topic.slice(1);
        const modeName = mode === 'timed' ? 'Timed Challenge' : 'Practice';
        startBtn.innerHTML = `Start ${topicName} - ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} (${modeName})`;
    } else {
        startBtn.disabled = true;
        const missing = [];
        if (!topic) missing.push('topic');
        if (!difficulty) missing.push('difficulty');
        if (!mode) missing.push('mode');
        startBtn.innerHTML = `Select ${missing.join(', ')} to start`;
    }
}

// Start Practice
function startPractice() {
    const { topic, difficulty, mode } = practiceState;
    
    if (!topic || !difficulty || !mode) {
        alert('Please select a topic, difficulty, and mode first!');
        return;
    }
    
    alert(`Starting ${topic} practice!\nDifficulty: ${difficulty}\nMode: ${mode}\n\nComing soon: Practice problems will appear here!`);
    
    console.log('Practice started:', practiceState);
}

// Toggle between login and signup forms
function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const errorMessage = document.getElementById('error-message');
    
    loginForm.classList.toggle('hidden');
    signupForm.classList.toggle('hidden');
    errorMessage.textContent = '';
}

// Check authentication state
onAuthStateChanged(auth, (user) => {
    const authContainer = document.getElementById('auth-container');
    const dashboard = document.getElementById('dashboard');

    if (user) {
        authContainer.classList.add('hidden');
        dashboard.classList.remove('hidden');
        loadProfile(user.uid);
    } else {
        authContainer.classList.remove('hidden');
        dashboard.classList.add('hidden');
    }
});
