// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getFirestore, doc, setDoc, getDoc, collection, query, orderBy, limit, getDocs, updateDoc, increment, arrayUnion, runTransaction, where, onSnapshot } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { lessonPaths } from './lessons.js';
import { generators } from './generators.js';
import { svgVisuals } from './svgVisuals.js';

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
const googleProvider = new GoogleAuthProvider();

// ---- HTML sanitisation helper — prevent XSS when inserting user-supplied text into innerHTML ----
function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Current path and lesson state
let currentPath = null;
let currentLessonId = null;
let currentTopic = null;
let lessonPracticeState = {
    totalProblems: 0,
    completed: 0,
    answeredIndices: new Set()
};


// XP needed to reach a given level from zero
function xpForLevel(level) {
    return Math.floor(100 * Math.pow(1.2, level - 1));
}

// Returns { level, currentXP, nextLevelXP } — single pass, no repeated work
function getLevelInfo(xp) {
    let level = 1;
    let total = 0;
    while (total + xpForLevel(level) <= xp) {
        total += xpForLevel(level);
        level++;
    }
    return { level, currentXP: xp - total, nextLevelXP: xpForLevel(level) };
}

// Convenience wrappers kept for any call-sites that use the old API
function calculateLevel(xp)      { return getLevelInfo(xp).level; }
function getCurrentLevelXP(xp)   { return getLevelInfo(xp).currentXP; }
function getXPForNextLevel(xp)   { return getLevelInfo(xp).nextLevelXP; }

// Badge Definitions
const badges = {
    'first-problem': {
        id: 'first-problem',
        name: 'First Steps',
        icon: '🎯',
        description: 'Complete your first problem',
        requirement: (stats) => stats.totalProblems >= 1
    },
    'ten-problems': {
        id: 'ten-problems',
        name: 'Getting Started',
        icon: '⭐',
        description: 'Complete 10 problems',
        requirement: (stats) => stats.totalProblems >= 10
    },
    'fifty-problems': {
        id: 'fifty-problems',
        name: 'Dedicated Learner',
        icon: '🌟',
        description: 'Complete 50 problems',
        requirement: (stats) => stats.totalProblems >= 50
    },
    'hundred-problems': {
        id: 'hundred-problems',
        name: 'Math Master',
        icon: '💫',
        description: 'Complete 100 problems',
        requirement: (stats) => stats.totalProblems >= 100
    },
    'first-lesson': {
        id: 'first-lesson',
        name: 'Scholar',
        icon: '📖',
        description: 'Complete your first lesson',
        requirement: (stats, userData) => (userData.completedLessons || []).length >= 1
    },
    'five-lessons': {
        id: 'five-lessons',
        name: 'Studious',
        icon: '📚',
        description: 'Complete 5 lessons',
        requirement: (stats, userData) => (userData.completedLessons || []).length >= 5
    },
    'ten-lessons': {
        id: 'ten-lessons',
        name: 'Knowledge Seeker',
        icon: '📕',
        description: 'Complete 10 lessons',
        requirement: (stats, userData) => (userData.completedLessons || []).length >= 10
    },
    'all-lessons': {
        id: 'all-lessons',
        name: 'Completionist',
        icon: '🎓',
        description: 'Complete all lessons',
        requirement: (stats, userData) => (userData.completedLessons || []).length >= 40 // 4 paths × 10 lessons
    },
    'level-5': {
        id: 'level-5',
        name: 'Rising Star',
        icon: '⬆️',
        description: 'Reach Level 5',
        requirement: (stats, userData) => calculateLevel(userData.xp || 0) >= 5
    },
    'level-10': {
        id: 'level-10',
        name: 'Advanced Student',
        icon: '🚀',
        description: 'Reach Level 10',
        requirement: (stats, userData) => calculateLevel(userData.xp || 0) >= 10
    },
    'level-25': {
        id: 'level-25',
        name: 'Expert',
        icon: '🏅',
        description: 'Reach Level 25',
        requirement: (stats, userData) => calculateLevel(userData.xp || 0) >= 25
    },
    'algebra-master': {
        id: 'algebra-master',
        name: 'Algebra Master',
        icon: '📐',
        description: 'Complete all algebra lessons',
        requirement: (stats, userData) => {
            const completed = userData.completedLessons || [];
            return completed.filter(l => l.startsWith('algebra-')).length >= 10;
        }
    },
    'geometry-master': {
        id: 'geometry-master',
        name: 'Geometry Master',
        icon: '📏',
        description: 'Complete all geometry lessons',
        requirement: (stats, userData) => {
            const completed = userData.completedLessons || [];
            return completed.filter(l => l.startsWith('geometry-')).length >= 10;
        }
    },
    'trig-master': {
        id: 'trig-master',
        name: 'Trigonometry Master',
        icon: '📊',
        description: 'Complete all trigonometry lessons',
        requirement: (stats, userData) => {
            const completed = userData.completedLessons || [];
            return completed.filter(l => l.startsWith('trigonometry-')).length >= 10;
        }
    },
    'calculus-master': {
        id: 'calculus-master',
        name: 'Calculus Master',
        icon: '∫',
        description: 'Complete all calculus lessons',
        requirement: (stats, userData) => {
            const completed = userData.completedLessons || [];
            return completed.filter(l => l.startsWith('calculus-')).length >= 10;
        }
    },
    'speed-demon': {
        id: 'speed-demon',
        name: 'Speed Demon',
        icon: '⚡',
        description: 'Complete 10 timed challenges',
        requirement: (stats) => stats.timedChallenges >= 10
    }
};

// ============================================================
// KATEX RENDERING
// ============================================================
function renderMath(el) {
    if (el && window._renderMathInEl) window._renderMathInEl(el);
}

// ============================================================
// SVG VISUAL INJECTION
// Maps lesson topic + lessonId keywords to auto-generated diagrams.
// Injected before the first text section in the lesson.
// ============================================================
function getLessonVisual(topic, lessonId) {
    const id = lessonId.toLowerCase();

    // --- ALGEBRA ---
    if (topic === 'algebra') {
        if (id.includes('graph') || id.includes('slope')) return svgVisuals.coordinateLine({ m: 2, b: 1 });
        if (id.includes('inequal')) return svgVisuals.numberLine({ value: 3, op: '<', min: -2, max: 8 });
        if (id.includes('quadratic')) return svgVisuals.parabola({ a: 1, vertex: [2.5, -0.25], roots: [2, 3] });
        if (id.includes('system')) return svgVisuals.coordinateLine({ m: 1, b: 0, range: 5 });
    }

    // --- GEOMETRY ---
    if (topic === 'geometry') {
        if (id.includes('circle') || id.includes('arc')) return svgVisuals.circle({ r: 5 });
        if (id.includes('pythag')) return svgVisuals.pythSquares({ a: 3, b: 4, c: 5 });
        if (id.includes('triangle') || id.includes('right')) return svgVisuals.rightTriangle({ a: 3, b: 4, c: 5 });
        if (id.includes('angle')) return svgVisuals.angleDiagram({ degrees: 55, type: 'acute' });
        if (id.includes('perimeter') || id.includes('area')) return svgVisuals.areaShape({ shape: 'rectangle', dims: { l: 8, w: 5 } });
        if (id.includes('volume') || id.includes('surface')) return svgVisuals.shape3D({ shape: 'cube', dims: { s: 4 } });
        if (id.includes('transform')) return svgVisuals.transformGrid({
            original: [[1,1],[3,1],[3,3],[1,3]],
            transformed: [[4,3],[6,3],[6,5],[4,5]],
            type: 'translate'
        });
    }

    // --- TRIGONOMETRY ---
    if (topic === 'trigonometry') {
        if (id.includes('unit')) return svgVisuals.unitCircle();
        if (id.includes('graph')) return svgVisuals.sineWave({ func: 'sin', amplitude: 1 });
        if (id.includes('radian')) return svgVisuals.unitCircle();
        return svgVisuals.trigTriangle({ angle: 37, opp: 3, adj: 4, hyp: 5 });
    }

    // --- CALCULUS ---
    if (topic === 'calculus') {
        if (id.includes('deriv') || id.includes('diff') || id.includes('chain')) return svgVisuals.tangentLine();
        if (id.includes('integr') || id.includes('anti') || id.includes('ftc') || id.includes('u-sub')) return svgVisuals.areaUnderCurve({ f: 'x²', a: 0, b: 2 });
        if (id.includes('area')) return svgVisuals.areaUnderCurve({ f: 'x', a: 1, b: 3 });
        if (id.includes('limit')) return svgVisuals.tangentLine();
    }

    return null;
}

// ============================================================
// WORKED EXAMPLE SYSTEM
// ============================================================
let _weSteps = [];
let _weStepIndex = 0;

function showWorkedExample(btn) {
    const genIds = (btn.dataset.genids || '').split(',').map(s => s.trim()).filter(Boolean);
    if (genIds.length === 0) return;

    // Pick a random available generator
    const genId = genIds[Math.floor(Math.random() * genIds.length)];
    const genFunc = generators[genId];
    if (!genFunc) return;

    let prob;
    try { prob = genFunc(); } catch(e) { return; }
    if (!prob) return;

    // Display question
    const qEl = document.getElementById('we-question');
    if (qEl) qEl.innerHTML = prob.question;

    // Parse explanation into steps (split on <br> tags)
    const rawExplanation = prob.explanation || '';
    const correctAnswer = prob.choices ? prob.choices[prob.correctIndex] : '';
    const allStepsRaw = rawExplanation.split(/<br\s*\/?>/i).map(s => s.trim()).filter(Boolean);

    // Prepend the question setup and append the answer
    _weSteps = [
        `<span class="we-step-label">Question:</span> ${prob.question}`,
        ...allStepsRaw.map((s, i) => `<span class="we-step-label">Step ${i + 1}:</span> ${s}`),
        `<span class="we-step-label we-answer-label">✅ Answer:</span> <strong>${correctAnswer}</strong>`
    ];
    _weStepIndex = 0;

    // Clear steps display
    const stepsEl = document.getElementById('we-steps');
    if (stepsEl) stepsEl.innerHTML = '';

    // Reset buttons
    const nextBtn = document.getElementById('we-next-btn');
    const doneBtn = document.getElementById('we-done-btn');
    if (nextBtn) { nextBtn.classList.remove('hidden'); nextBtn.textContent = 'Show Next Step →'; }
    if (doneBtn) doneBtn.classList.add('hidden');

    // Show modal
    const modal = document.getElementById('we-modal-overlay');
    if (modal) modal.classList.remove('hidden');

    // KaTeX render
    if (qEl) renderMath(qEl);
}

function revealNextStep() {
    if (_weStepIndex >= _weSteps.length) return;

    const stepsEl = document.getElementById('we-steps');
    if (!stepsEl) return;

    const step = document.createElement('div');
    step.className = 'we-step we-step-reveal';
    step.innerHTML = _weSteps[_weStepIndex];
    stepsEl.appendChild(step);
    renderMath(step);

    // Scroll to show new step
    step.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    _weStepIndex++;

    const nextBtn = document.getElementById('we-next-btn');
    const doneBtn = document.getElementById('we-done-btn');

    if (_weStepIndex >= _weSteps.length) {
        if (nextBtn) nextBtn.classList.add('hidden');
        if (doneBtn) doneBtn.classList.remove('hidden');
    } else {
        if (nextBtn) nextBtn.textContent =
            _weStepIndex === _weSteps.length - 1 ? 'Show Answer →' : `Show Step ${_weStepIndex + 1} →`;
    }
}

function closeWorkedExample() {
    const modal = document.getElementById('we-modal-overlay');
    if (modal) modal.classList.add('hidden');
    _weSteps = [];
    _weStepIndex = 0;
}

// ============================================================
// REAL-TIME MULTIPLAYER CHALLENGE
// ============================================================
let _challengeUnsubscribe = null;
let _lastChallengeData = null;

function startChallengeListener(code) {
    stopChallengeListener();
    const user = auth.currentUser;
    if (!user || !code) return;

    const overlay = document.getElementById('mp-overlay');
    if (overlay) overlay.classList.remove('hidden');

    _challengeUnsubscribe = onSnapshot(doc(db, 'challenges', code), snap => {
        if (!snap.exists()) return;
        _lastChallengeData = snap.data();
        _updateMultiplayerOverlay(_lastChallengeData, user.uid);
    });
}

function stopChallengeListener() {
    if (_challengeUnsubscribe) { _challengeUnsubscribe(); _challengeUnsubscribe = null; }
    _lastChallengeData = null;
    const overlay = document.getElementById('mp-overlay');
    if (overlay) overlay.classList.add('hidden');
}

function _updateMultiplayerOverlay(data, myUid) {
    // My live score
    const myScore = sessionState.score;
    const total = sessionState.problemCount || 10;
    const myPct = Math.round((myScore / total) * 100);
    const myBar = document.getElementById('mp-you-bar');
    const myScoreEl = document.getElementById('mp-you-score');
    if (myBar) myBar.style.width = myPct + '%';
    if (myScoreEl) myScoreEl.textContent = `${myScore}/${total}`;

    // Find opponent in liveProgress (they're mid-session) or results (they finished)
    const live = data.liveProgress || {};
    const results = data.results || {};
    let opp = null;
    for (const [uid, v] of Object.entries(live)) {
        if (uid !== myUid) { opp = { name: v.name, score: v.score, total: v.total || total, done: false }; break; }
    }
    if (!opp) {
        for (const [uid, v] of Object.entries(results)) {
            if (uid !== myUid) { opp = { name: v.name, score: v.score, total: v.total || total, done: true }; break; }
        }
    }

    const oppBar  = document.getElementById('mp-opp-bar');
    const oppName = document.getElementById('mp-opp-name');
    const oppScoreEl = document.getElementById('mp-opp-score');

    if (opp) {
        const oppPct = Math.round((opp.score / opp.total) * 100);
        if (oppBar) oppBar.style.width = oppPct + '%';
        if (oppName) oppName.textContent = opp.name || 'Opponent';
        if (oppScoreEl) oppScoreEl.textContent = `${opp.score}/${opp.total}${opp.done ? ' ✓' : ''}`;
    } else {
        if (oppName) oppName.textContent = 'Waiting…';
        if (oppScoreEl) oppScoreEl.textContent = '—';
        if (oppBar) oppBar.style.width = '0%';
    }
}

// Push live score to Firestore during a challenge (fire-and-forget)
function _saveLiveChallengeProgress() {
    const user = auth.currentUser;
    if (!user || !sessionState.challengeCode) return;
    const name = user.displayName || 'Player';
    updateDoc(doc(db, 'challenges', sessionState.challengeCode), {
        [`liveProgress.${user.uid}`]: {
            name,
            score: sessionState.score,
            total: sessionState.problemCount,
            updatedAt: new Date().toISOString()
        }
    }).catch(() => {});
    // Update local overlay immediately (optimistic)
    _updateMultiplayerOverlay(_lastChallengeData || { liveProgress: {}, results: {} }, user.uid);
}

// Toast notification system
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

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
window.showLeaderboard = showLeaderboard;
window.showPath = showPath;
window.openLessonFromPath = openLessonFromPath;
window.closeLessonToPath = closeLessonToPath;
window.completeLesson = completeLesson;
window.handleLessonPractice = handleLessonPractice;
window.selectChoice = selectChoice;
window.nextProblem = nextProblem;
window.quitSession = quitSession;
window.practiceAgain = practiceAgain;
window.backToDashboardFromSummary = backToDashboardFromSummary;
window.startQuickPractice = startQuickPractice;
window.startRetryMissed = startRetryMissed;
window.startRetryMissedFromSummary = startRetryMissedFromSummary;
window.toggleSubtopic = toggleSubtopic;
window.setProblemCount = setProblemCount;
window.resetPassword = resetPassword;
window.signInWithGoogle = signInWithGoogle;
window.createChallenge = createChallenge;
window.joinChallenge = joinChallenge;
window.openChallengeCreator = openChallengeCreator;
window.closeChallengeCreator = closeChallengeCreator;
window.selectChallengeOption = selectChallengeOption;
window.copyChallengeCode = copyChallengeCode;
window.enterChallengeLobby = enterChallengeLobby;
window.triggerCountdown = triggerCountdown;
window.leaveLobby = leaveLobby;
window._quickPlayChallenge = _quickPlayChallenge;
window.switchLeaderboard = switchLeaderboard;
window.showWorkedExample = showWorkedExample;
window.revealNextStep = revealNextStep;
window.closeWorkedExample = closeWorkedExample;
window.showToast = showToast;

// Friendly Firebase error messages
function getFriendlyError(errorCode) {
    const errorMessages = {
        'auth/email-already-in-use': 'An account with this email already exists.',
        'auth/invalid-email': 'Please enter a valid email address.',
        'auth/missing-email': 'Please enter your email address.',
        'auth/missing-password': 'Please enter your password.',
        'auth/weak-password': 'Password must be at least 6 characters.',
        'auth/user-not-found': 'No account found with this email.',
        'auth/wrong-password': 'Incorrect password. Please try again.',
        'auth/invalid-credential': 'Incorrect email or password. Please try again.',
        'auth/too-many-requests': 'Too many attempts. Please try again later.',
        'auth/network-request-failed': 'Network error. Please check your connection.',
        'auth/user-disabled': 'This account has been disabled.',
    };
    return errorMessages[errorCode] || 'Something went wrong. Please try again.';
}

// ---- Shared user-document creator (used by email signup + Google auth) ----
async function createUserDocument(user) {
    await setDoc(doc(db, 'users', user.uid), {
        email: user.email || '',
        displayName: user.displayName || '',
        createdAt: new Date().toISOString(),
        xp: 0,
        weeklyXP: 0,
        weekStart: getWeekStart(),
        completedLessons: [],
        badges: [],
        stats: {
            totalProblems: 0,
            algebra: 0,
            geometry: 0,
            trigonometry: 0,
            calculus: 0,
            timedChallenges: 0
        }
    });
}

// Sign Up Function
async function signup() {
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const errorMessage = document.getElementById('error-message');

    if (!name) {
        errorMessage.textContent = 'Please enter your name.';
        return;
    }
    if (!email) {
        errorMessage.textContent = 'Please enter your email address.';
        return;
    }
    if (!password) {
        errorMessage.textContent = 'Please enter a password.';
        return;
    }
    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters.';
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User created:', userCredential.user);
        errorMessage.textContent = '';
        // Attach displayName so createUserDocument picks it up
        userCredential.user.displayName = name;
        await createUserDocument(userCredential.user);
    } catch (error) {
        errorMessage.textContent = getFriendlyError(error.code);
        console.error('Signup error:', error);
    }
}

// Login Function
async function login() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    const errorMessage = document.getElementById('error-message');

    if (!email) {
        errorMessage.textContent = 'Please enter your email address.';
        return;
    }
    if (!password) {
        errorMessage.textContent = 'Please enter your password.';
        return;
    }

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User logged in:', userCredential.user);
        errorMessage.textContent = '';
    } catch (error) {
        errorMessage.textContent = getFriendlyError(error.code);
        console.error('Login error:', error);
    }
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
async function resetPassword() {
    const email = document.getElementById('login-email').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (!email) {
        errorMessage.textContent = 'Enter your email above, then click Forgot Password.';
        return;
    }

    try {
        await sendPasswordResetEmail(auth, email);
        errorMessage.className = 'error message-success';
        errorMessage.textContent = 'Password reset email sent! Check your inbox.';
    } catch (error) {
        errorMessage.className = 'error';
        errorMessage.textContent = getFriendlyError(error.code);
    }
}

async function signInWithGoogle() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        // Create user doc if first time
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        if (!userSnap.exists()) {
            await createUserDocument(user);
        }
    } catch (error) {
        if (error.code !== 'auth/popup-closed-by-user') {
            errorMessage.textContent = getFriendlyError(error.code);
        }
        console.error('Google sign-in error:', error);
    }
}
// Save Profile
async function saveProfile() {
    const user = auth.currentUser;
    if (!user) return;

    const displayName = document.getElementById('profile-name').value.trim();

    try {
        await updateDoc(doc(db, 'users', user.uid), {
            displayName: displayName,
            updatedAt: new Date().toISOString()
        });

        showToast('Profile saved successfully!');
        toggleEditMode();
        loadProfile(user.uid);
    } catch (error) {
        console.error('Error saving profile:', error);
        showToast('Error saving profile', 'error');
    }
}
function getWeekStart() {
    const now = new Date();
    const day = now.getDay();
    const diff = now.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(now); // clone — don't mutate `now`
    monday.setDate(diff);
    return monday.toISOString().split('T')[0];
}
// Award XP — uses a transaction so concurrent calls can't corrupt weeklyXP
async function awardXP(userId, amount) {
    const userRef = doc(db, 'users', userId);
    const thisWeek = getWeekStart();

    // Single atomic read-modify-write: no more triple-read race condition
    const updatedXP = await runTransaction(db, async (tx) => {
        const snap = await tx.get(userRef);
        const data = snap.exists() ? snap.data() : {};
        const currentXP   = (data.xp || 0) + amount;
        const isNewWeek   = (data.weekStart || '') !== thisWeek;
        const weeklyXP    = isNewWeek ? amount : (data.weeklyXP || 0) + amount;

        tx.update(userRef, { xp: currentXP, weeklyXP, weekStart: thisWeek });
        return currentXP;
    });

    updateXPDisplay(updatedXP);
    await checkAndAwardBadges(userId);
}

// Check and Award Badges
async function checkAndAwardBadges(userId) {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    
    if (!userSnap.exists()) return;
    
    const userData = userSnap.data();
    const currentBadges = userData.badges || [];
    const newBadges = [];
    
    for (const [badgeId, badge] of Object.entries(badges)) {
        if (!currentBadges.includes(badgeId)) {
            if (badge.requirement(userData.stats || {}, userData)) {
                newBadges.push(badgeId);
            }
        }
    }
    
    if (newBadges.length > 0) {
        await updateDoc(userRef, {
            badges: [...currentBadges, ...newBadges]
        });
        
        newBadges.forEach(badgeId => {
            const badge = badges[badgeId];
            showToast(`🎉 New Badge: ${badge.name}!`, 'success');
        });
    }
}

// Load Profile
async function loadProfile(userId) {
    try {
        const docRef = doc(db, 'users', userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            
            document.getElementById('display-name').textContent = data.displayName || 'No name set';
            document.getElementById('display-email').textContent = data.email;
            document.getElementById('user-name').textContent = data.displayName || 'Student';
            
            // Set avatar initial
            const avatarEl = document.getElementById('profile-avatar');
            if (avatarEl) {
                const initials = (data.displayName || '?').charAt(0).toUpperCase();
                avatarEl.textContent = initials;
            }
            
            updateXPDisplay(data.xp || 0);
            
            const stats = data.stats || {};
            document.getElementById('algebra-practice-count').textContent = stats.algebra || 0;
            document.getElementById('geometry-practice-count').textContent = stats.geometry || 0;
            document.getElementById('trigonometry-practice-count').textContent = stats.trigonometry || 0;
            
            const completedLessons = data.completedLessons || [];
            document.getElementById('profile-xp').textContent = `${data.xp || 0} XP`;
            document.getElementById('profile-lessons').textContent = `${completedLessons.length} lessons`;
            document.getElementById('profile-badges').textContent = `${(data.badges || []).length} badges`;
            
            updatePathProgress(completedLessons);
            loadBadges(data.badges || [], data.stats || {}, data);
            
            document.getElementById('profile-name').value = data.displayName || '';
        }
    } catch (error) {
        console.error('Error loading profile:', error);
    }
}

// Update XP Display
function updateXPDisplay(xp) {
    const level = calculateLevel(xp);
    const currentLevelXP = getCurrentLevelXP(xp);
    const nextLevelXP = getXPForNextLevel(xp);
    const progress = (currentLevelXP / nextLevelXP) * 100;
    
    document.getElementById('user-level').textContent = level;
    document.getElementById('current-xp').textContent = currentLevelXP;
    document.getElementById('next-level-xp').textContent = nextLevelXP;
    document.getElementById('xp-bar').style.width = progress + '%';
}

// Update Path Progress
function updatePathProgress(completedLessons) {
    ['algebra', 'geometry', 'trigonometry', 'calculus'].forEach(topic => {
        const pathLessons = lessonPaths[topic].lessons;
        const completed = pathLessons.filter(lesson => 
            completedLessons.includes(`${topic}-${lesson.id}`)
        ).length;
        
        const progress = (completed / pathLessons.length) * 100;
        document.getElementById(`${topic}-completed`).textContent = completed;
        document.getElementById(`${topic}-progress`).style.width = progress + '%';
    });
}

// Load Badges
function loadBadges(earnedBadges, stats, userData) {
    const badgesGrid = document.getElementById('badges-grid');
    badgesGrid.innerHTML = '';
    
    for (const [badgeId, badge] of Object.entries(badges)) {
        const earned = earnedBadges.includes(badgeId);
        const badgeEl = document.createElement('div');
        badgeEl.className = 'badge-item' + (earned ? ' earned' : ' locked');
        badgeEl.innerHTML = `
            <div class="badge-icon">${earned ? badge.icon : '🔒'}</div>
            <div class="badge-name">${badge.name}</div>
            <div class="badge-desc">${badge.description}</div>
        `;
        badgesGrid.appendChild(badgeEl);
    }
}

// Show Path
async function showPath(topic) {
    const user = auth.currentUser;
    if (!user) return;
    
    currentPath = topic;
    const path = lessonPaths[topic];
    
    document.getElementById('path-icon').textContent = path.icon;
    document.getElementById('path-title').textContent = path.name;
    
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);
    const completedLessons = userSnap.exists() ? (userSnap.data().completedLessons || []) : [];
    
    const lessonPathEl = document.getElementById('lesson-path');
    lessonPathEl.innerHTML = '';
    
    path.lessons.forEach((lesson, index) => {
        const lessonKey = `${topic}-${lesson.id}`;
        const isCompleted = completedLessons.includes(lessonKey);
        const isUnlocked = index === 0 || completedLessons.includes(`${topic}-${path.lessons[index - 1].id}`);
        
        const nodeEl = document.createElement('div');
        nodeEl.className = 'lesson-node';
        
        if (isCompleted) {
            nodeEl.classList.add('completed');
        } else if (isUnlocked) {
            nodeEl.classList.add('unlocked');
        } else {
            nodeEl.classList.add('locked');
        }
        
        nodeEl.innerHTML = `
            <div class="node-circle">
                ${isCompleted ? '✓' : isUnlocked ? (index + 1) : '🔒'}
            </div>
            <div class="node-content">
                <h4>${lesson.title}</h4>
                <p>${lesson.subtitle}</p>
                <span class="xp-badge">+${lesson.xpReward} XP</span>
            </div>
        `;
        
        if (isUnlocked) {
            nodeEl.style.cursor = 'pointer';
            nodeEl.onclick = () => openLessonFromPath(topic, lesson.id);
        }
        
        lessonPathEl.appendChild(nodeEl);
        
        if (index < path.lessons.length - 1) {
            const lineEl = document.createElement('div');
            lineEl.className = 'lesson-connector';
            if (isCompleted) lineEl.classList.add('completed');
            lessonPathEl.appendChild(lineEl);
        }
    });
    
    document.getElementById('main-view').classList.add('hidden');
    document.getElementById('practice-session').classList.add('hidden');
    document.getElementById('session-summary').classList.add('hidden');
    document.getElementById('path-view').classList.remove('hidden');
}

// Open Lesson from Path
async function openLessonFromPath(topic, lessonId) {
    currentLessonId = `${topic}-${lessonId}`;
    currentTopic = topic;
    const lesson = lessonPaths[topic].lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    // Count all practice problems (static + generated)
    let practiceCount = 0;
    lesson.sections.forEach(s => {
        if (s.type === 'practice') practiceCount += s.problems.length;
        if (s.type === 'generated_practice') practiceCount += s.generators.length;
    });
    lessonPracticeState = { totalProblems: practiceCount, completed: 0, answeredIndices: new Set(), generatedProblems: {} };

    document.getElementById('lesson-topic-badge').textContent = topic.charAt(0).toUpperCase() + topic.slice(1);
    document.getElementById('lesson-title').textContent = lesson.title;
    document.getElementById('lesson-subtitle').textContent = lesson.subtitle;

    let contentHtml = '';
    let practiceGlobalIndex = 0;
    const seenLessonQuestions = new Set(); // Track all questions to prevent duplicates

    // --- SVG Visual injection: get a diagram for this lesson if one is defined ---
    const lessonVisualHtml = getLessonVisual(topic, lessonId) || '';

    // Pre-collect static question keys so generated ones don't duplicate them
    lesson.sections.forEach(section => {
        if (section.type === 'practice') {
            section.problems.forEach(p => {
                seenLessonQuestions.add(p.question.replace(/<[^>]+>/g, '').trim());
            });
        }
    });

    let firstTextSection = true;
    lesson.sections.forEach(section => {
        if (section.type === 'text') {
            // Inject SVG visual after the first text block
            const svgInject = (firstTextSection && lessonVisualHtml)
                ? `<div class="lesson-visual-wrapper">${lessonVisualHtml}</div>` : '';
            firstTextSection = false;
            contentHtml += `<div class="lesson-section">${section.content}${svgInject}</div>`;
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
        } else if (section.type === 'steps') {
            contentHtml += `
                <div class="lesson-steps-block">
                    <h4 class="steps-title">📋 ${section.title}</h4>
                    <div class="steps-container">
                        ${section.steps.map((step, si) => `
                            <div class="step-item" style="animation-delay: ${si * 0.4}s">
                                <div class="step-number">${si + 1}</div>
                                <div class="step-text">${step}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        } else if (section.type === 'practice') {
            // Collect any generator IDs from adjacent generated_practice sections for the Example button
            const nearbyGenIds = lesson.sections
                .filter(s => s.type === 'generated_practice')
                .flatMap(s => s.generators).join(',');
            contentHtml += `<div class="lesson-practice-block">`;
            contentHtml += `<div class="practice-block-header">`;
            contentHtml += `<h4 class="practice-block-title">✏️ Check Your Understanding</h4>`;
            if (nearbyGenIds) {
                contentHtml += `<button class="we-trigger-btn" data-genids="${nearbyGenIds}" onclick="showWorkedExample(this)">📝 See Example</button>`;
            }
            contentHtml += `</div>`;
            section.problems.forEach((prob, i) => {
                const gIdx = practiceGlobalIndex;
                const labels = ['A', 'B', 'C', 'D'];
                contentHtml += `
                    <div class="lesson-practice-item" id="lp-item-${gIdx}">
                        <div class="lp-question-row">
                            <span class="lp-number" id="lp-number-${gIdx}">${gIdx + 1}</span>
                            <span class="lp-question">${prob.question}</span>
                        </div>
                        <div class="lp-choices" id="lp-choices-${gIdx}">
                            ${prob.choices.map((ch, ci) => `
                                <button class="lp-choice" data-gidx="${gIdx}" data-cidx="${ci}" onclick="handleLessonPractice(${gIdx}, ${ci})">
                                    <span class="lp-label">${labels[ci]}</span>${ch}
                                </button>
                            `).join('')}
                        </div>
                        <div class="lp-feedback hidden" id="lp-feedback-${gIdx}"></div>
                    </div>
                `;
                practiceGlobalIndex++;
            });
            contentHtml += `</div>`;
        } else if (section.type === 'generated_practice') {
            const genIdList = section.generators.join(',');
            contentHtml += `<div class="lesson-practice-block generated">`;
            contentHtml += `<div class="practice-block-header">`;
            contentHtml += `<h4 class="practice-block-title">✏️ Try It Yourself</h4>`;
            contentHtml += `<button class="we-trigger-btn" data-genids="${genIdList}" onclick="showWorkedExample(this)">📝 See Example</button>`;
            contentHtml += `</div>`;
            section.generators.forEach(genId => {
                const gIdx = practiceGlobalIndex;
                const labels = ['A', 'B', 'C', 'D'];
                // Call the generator, with dedup retries
                const genFunc = generators[genId];
                if (!genFunc) { practiceGlobalIndex++; return; }
                let prob = null;
                for (let attempt = 0; attempt < 10; attempt++) {
                    const candidate = genFunc();
                    const qKey = candidate.question.replace(/<[^>]+>/g, '').trim();
                    if (!seenLessonQuestions.has(qKey)) {
                        prob = candidate;
                        seenLessonQuestions.add(qKey);
                        break;
                    }
                }
                if (!prob) prob = genFunc(); // last resort: allow duplicate
                // Store for answer checking
                lessonPracticeState.generatedProblems[gIdx] = prob;
                contentHtml += `
                    <div class="lesson-practice-item" id="lp-item-${gIdx}">
                        <div class="lp-question-row">
                            <span class="lp-number" id="lp-number-${gIdx}">${gIdx + 1}</span>
                            <span class="lp-question">${prob.question}</span>
                        </div>
                        <div class="lp-choices" id="lp-choices-${gIdx}">
                            ${prob.choices.map((ch, ci) => `
                                <button class="lp-choice" data-gidx="${gIdx}" data-cidx="${ci}" onclick="handleLessonPractice(${gIdx}, ${ci})">
                                    <span class="lp-label">${labels[ci]}</span>${ch}
                                </button>
                            `).join('')}
                        </div>
                        <div class="lp-feedback hidden" id="lp-feedback-${gIdx}"></div>
                    </div>
                `;
                practiceGlobalIndex++;
            });
            contentHtml += `</div>`;
        }
    });

    // Add practice progress bar if there are practice problems
    if (practiceCount > 0) {
        contentHtml += `
            <div class="lesson-practice-bar" id="lesson-practice-bar">
                <div class="lpb-info">
                    <span class="lpb-icon">✏️</span>
                    <span class="lpb-text">Complete all guided practice to finish this lesson</span>
                    <span class="lpb-counter"><span id="lpb-completed">0</span> / ${practiceCount}</span>
                </div>
                <div class="lpb-progress">
                    <div class="lpb-fill" id="lpb-fill" style="width: 0%"></div>
                </div>
            </div>
        `;
    }

    document.getElementById('lesson-content').innerHTML = contentHtml;
    // Render KaTeX math in lesson content
    renderMath(document.getElementById('lesson-content'));

    // Check if lesson is already completed and update button
    const completeLessonBtn = document.getElementById('complete-lesson-btn');
    const user = auth.currentUser;
    if (user) {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        const completedLessons = userSnap.exists() ? (userSnap.data().completedLessons || []) : [];
        
        if (completedLessons.includes(currentLessonId)) {
            completeLessonBtn.disabled = true;
            completeLessonBtn.textContent = '✓ Lesson Completed';
        } else if (practiceCount > 0) {
            completeLessonBtn.disabled = true;
            completeLessonBtn.textContent = `Complete practice first (0/${practiceCount})`;
        } else {
            completeLessonBtn.disabled = false;
            completeLessonBtn.textContent = 'Complete Lesson';
        }
    }

    document.getElementById('path-view').classList.add('hidden');
    document.getElementById('lesson-viewer').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle a guided practice answer within a lesson
function handleLessonPractice(gIdx, choiceIdx) {
    if (lessonPracticeState.answeredIndices.has(gIdx)) return;

    // Check if this is a generated problem first
    let targetProblem = lessonPracticeState.generatedProblems[gIdx] || null;

    // If not generated, search static practice sections
    if (!targetProblem) {
        const topic = currentTopic;
        const lessonId = currentLessonId.substring(topic.length + 1);
        const lesson = lessonPaths[topic].lessons.find(l => l.id === lessonId);
        if (!lesson) return;

        let practiceGlobalIndex = 0;
        for (const section of lesson.sections) {
            if (section.type === 'practice') {
                for (const prob of section.problems) {
                    if (practiceGlobalIndex === gIdx) {
                        targetProblem = prob;
                        break;
                    }
                    practiceGlobalIndex++;
                }
                if (targetProblem) break;
            } else if (section.type === 'generated_practice') {
                for (const genId of section.generators) {
                    practiceGlobalIndex++;
                }
            }
        }
    }
    if (!targetProblem) return;

    lessonPracticeState.answeredIndices.add(gIdx);
    const isCorrect = choiceIdx === targetProblem.correctIndex;

    // Disable all choices for this problem
    const choicesEl = document.getElementById(`lp-choices-${gIdx}`);
    choicesEl.querySelectorAll('.lp-choice').forEach(btn => {
        btn.classList.add('lp-disabled');
        const ci = parseInt(btn.dataset.cidx);
        if (ci === targetProblem.correctIndex) {
            btn.classList.add('lp-correct');
        }
        if (ci === choiceIdx && !isCorrect) {
            btn.classList.add('lp-incorrect');
        }
    });

    // Show feedback
    const feedbackEl = document.getElementById(`lp-feedback-${gIdx}`);
    feedbackEl.classList.remove('hidden');
    if (isCorrect) {
        feedbackEl.className = 'lp-feedback lp-feedback-correct';
        feedbackEl.innerHTML = `<span class="lp-fb-icon">✅</span> <strong>Correct!</strong> ${targetProblem.explanation}`;
        lessonPracticeState.completed++;
    } else {
        feedbackEl.className = 'lp-feedback lp-feedback-incorrect';
        feedbackEl.innerHTML = `<span class="lp-fb-icon">❌</span> <strong>Not quite.</strong> ${targetProblem.explanation}`;
        // Still count it as done (they learned from the feedback)
        lessonPracticeState.completed++;
    }

    // Update the number badge
    const numEl = document.getElementById(`lp-number-${gIdx}`);
    numEl.textContent = isCorrect ? '✓' : '✗';
    numEl.classList.add(isCorrect ? 'lp-number-correct' : 'lp-number-incorrect');

    // Update progress bar
    const { totalProblems, completed } = lessonPracticeState;
    const completedEl = document.getElementById('lpb-completed');
    const fillEl = document.getElementById('lpb-fill');
    if (completedEl) completedEl.textContent = completed;
    if (fillEl) fillEl.style.width = (completed / totalProblems * 100) + '%';

    // Enable "Complete Lesson" button if all practice done
    if (completed >= totalProblems) {
        const completeLessonBtn = document.getElementById('complete-lesson-btn');
        if (completeLessonBtn.textContent !== '✓ Lesson Completed') {
            completeLessonBtn.disabled = false;
            completeLessonBtn.textContent = 'Complete Lesson ✓';
        }
        // Update the bar text
        const barText = document.querySelector('.lpb-text');
        if (barText) barText.textContent = 'All practice completed! You can finish the lesson.';
    } else {
        const completeLessonBtn = document.getElementById('complete-lesson-btn');
        if (completeLessonBtn.textContent !== '✓ Lesson Completed') {
            completeLessonBtn.disabled = true;
            completeLessonBtn.textContent = `Complete practice first (${completed}/${totalProblems})`;
        }
    }
}

// Close Lesson to Path
function closeLessonToPath() {
    document.getElementById('lesson-viewer').classList.add('hidden');
    document.getElementById('path-view').classList.remove('hidden');
}

// Complete Lesson
async function completeLesson() {
    const user = auth.currentUser;
    if (!user || !currentLessonId) return;

    // Safety check: ensure all practice is done
    if (lessonPracticeState.totalProblems > 0 && lessonPracticeState.completed < lessonPracticeState.totalProblems) {
        showToast('Complete all guided practice problems first!', 'error');
        return;
    }
    
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);
    
    if (!userSnap.exists()) return;
    
    const completedLessons = userSnap.data().completedLessons || [];
    
    if (completedLessons.includes(currentLessonId)) {
        showToast('You already completed this lesson!', 'info');
        return;
    }
    
    // Extract lessonId from currentLessonId (remove topic prefix)
    const lessonId = currentLessonId.substring(currentTopic.length + 1);
    const lesson = lessonPaths[currentTopic].lessons.find(l => l.id === lessonId);
    
    if (!lesson) {
        showToast('Error: Lesson not found', 'error');
        return;
    }
    
    await updateDoc(userRef, {
        completedLessons: arrayUnion(currentLessonId)
    });
    
    await awardXP(user.uid, lesson.xpReward);
    
    showToast(`🎉 Lesson Complete! +${lesson.xpReward} XP`);
    
    await loadProfile(user.uid);
    closeLessonToPath();
    showPath(currentTopic);
}

// Load Leaderboard
let currentLeaderboardTab = 'weekly';

async function loadLeaderboard(tab) {
    tab = tab || currentLeaderboardTab;
    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = '<div class="loading-message">Loading leaderboard...</div>';
    
    const orderField = tab === 'weekly' ? 'weeklyXP' : 'xp';
    
    try {
        const q = query(collection(db, 'users'), orderBy(orderField, 'desc'), limit(10));
        const querySnapshot = await getDocs(q);
        
        leaderboardList.innerHTML = '';
        
        if (querySnapshot.empty) {
            leaderboardList.innerHTML = '<div class="loading-message">No users yet!</div>';
            return;
        }
        
        let rank = 1;
        const currentUser = auth.currentUser;
        querySnapshot.forEach((docSnap) => {
            const data = docSnap.data();
            const level = calculateLevel(data.xp || 0);
            const xpValue = tab === 'weekly' ? (data.weeklyXP || 0) : (data.xp || 0);
            
            const itemEl = document.createElement('div');
            itemEl.className = 'leaderboard-item';
            itemEl.setAttribute('role', 'listitem');
            if (rank <= 3) itemEl.classList.add('top-' + rank);
            if (currentUser && docSnap.id === currentUser.uid) itemEl.classList.add('lb-you');
            
            const rankIcon = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `#${rank}`;
            const youBadge = (currentUser && docSnap.id === currentUser.uid) ? ' <span class="lb-you-tag">You</span>' : '';
            
            itemEl.innerHTML = `
                <div class="rank">${rankIcon}</div>
                <div class="user-info">
                    <div class="user-name">${escapeHtml(data.displayName) || 'Anonymous'}${youBadge}</div>
                    <div class="user-stats">Level ${level} • ${data.xp || 0} total XP</div>
                </div>
                <div class="user-badges">${xpValue} XP</div>
            `;
            
            leaderboardList.appendChild(itemEl);
            rank++;
        });
    } catch (error) {
        console.error('Error loading leaderboard:', error);
        leaderboardList.innerHTML = '<div class="loading-message">Error loading leaderboard</div>';
    }
    
    // Update reset timer
    updateResetTimer();
}

function switchLeaderboard(tab) {
    currentLeaderboardTab = tab;
    document.getElementById('lb-tab-weekly').classList.toggle('active', tab === 'weekly');
    document.getElementById('lb-tab-weekly').setAttribute('aria-selected', tab === 'weekly' ? 'true' : 'false');
    document.getElementById('lb-tab-alltime').classList.toggle('active', tab === 'alltime');
    document.getElementById('lb-tab-alltime').setAttribute('aria-selected', tab === 'alltime' ? 'true' : 'false');
    document.getElementById('lb-subtitle').textContent = tab === 'weekly' ? 'Top students this week' : 'Top students of all time';
    document.getElementById('lb-reset-timer').classList.toggle('hidden', tab !== 'weekly');
    loadLeaderboard(tab);
}

function updateResetTimer() {
    const timerEl = document.getElementById('lb-reset-timer');
    if (!timerEl) return;
    // Calculate time until next Monday 00:00
    const now = new Date();
    const day = now.getDay(); // 0=Sun
    const daysUntilMon = day === 0 ? 1 : (8 - day);
    const nextMonday = new Date(now);
    nextMonday.setDate(now.getDate() + daysUntilMon);
    nextMonday.setHours(0, 0, 0, 0);
    const diff = nextMonday - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    timerEl.textContent = `⏱️ Resets in ${days}d ${hours}h`;
}

// Show Leaderboard
function showLeaderboard() {
    hideAllViews();
    document.getElementById('leaderboard-view').classList.remove('hidden');
    loadLeaderboard();
    loadActiveChallenges();
}

// ============================================================
// CONFETTI ENGINE
// ============================================================
function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = 'block';
    const ctx = canvas.getContext('2d');
    
    const colors = ['#667eea', '#764ba2', '#2ecc71', '#f39c12', '#e74c3c', '#3498db', '#ff6b9d', '#ffd700'];
    const particles = [];
    
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            w: Math.random() * 10 + 5,
            h: Math.random() * 6 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 3 + 2,
            rot: Math.random() * 360,
            rotSpeed: (Math.random() - 0.5) * 8,
            opacity: 1
        });
    }
    
    let frame = 0;
    const maxFrames = 180;
    
    function animate() {
        frame++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const fadeStart = maxFrames * 0.6;
        
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.04; // gravity
            p.rot += p.rotSpeed;
            if (frame > fadeStart) p.opacity = Math.max(0, 1 - (frame - fadeStart) / (maxFrames - fadeStart));
            
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot * Math.PI / 180);
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        });
        
        if (frame < maxFrames) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            canvas.style.display = 'none';
        }
    }
    
    animate();
}


// ============================================================
// FRIEND CHALLENGES (seed-based — both players generate identical problems locally)
// ============================================================

// Seeded PRNG (mulberry32) — given the same seed, produces the same sequence on every client
function _seededRng(seed) {
    let s = seed | 0;
    return function () {
        s = (s + 0x6D2B79F5) | 0;
        let t = Math.imul(s ^ (s >>> 15), 1 | s);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

// Seeded shuffle — deterministic given the same seed
function _seededShuffle(arr, rng) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function generateChallengeCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
    return code;
}

// Every generator ID organised by topic — used for challenges (no lesson-completion filter)
const _challengeGensByTopic = {
    algebra: ['eval-expression','identify-parts','solve-linear','solve-linear-subtract','solve-inequality','inequality-flip','find-slope','identify-slope-intercept','solve-system','find-discriminant','solve-quadratic-simple','factor-trinomial','factor-diff-squares','exponent-product','exponent-evaluate','evaluate-function','evaluate-function-squared','simplify-rational','find-excluded-value','expression-vs-equation','simplify-like-terms','check-solution','y-intercept-from-eq','substitution-system','count-solutions','gcf-factor','exponent-power-rule','zero-neg-exponent','domain-check'],
    geometry: ['geo-basic-definitions','supplementary-angle','complementary-angle','triangle-missing-angle','quad-missing-angle','circle-area','circle-circumference','rectangle-area','triangle-area','find-hypotenuse','find-leg','scale-factor','cube-volume','cube-surface-area','translate-point','identify-transformation','classify-triangle-sides','classify-angle','identify-quadrilateral','diameter-radius','perimeter-rectangle','trapezoid-area','is-right-triangle','congruent-vs-similar','cylinder-volume','sphere-volume','reflection-point'],
    trigonometry: ['trig-ratio-from-sides','trig-find-side','special-45-45-90','special-30-60-90','unit-circle-coords','deg-to-rad','rad-to-deg','trig-amplitude','trig-period','pythagorean-identity','inverse-trig-eval','law-of-sines-calc','law-of-cosines-calc','sohcahtoa-which-func','which-trig-function','quadrant-id','inverse-trig-range','reciprocal-identity','trig-double-angle','law-choice'],
    calculus: ['calc-limit-eval','calc-limit-concept','calc-derivative-def','calc-power-rule','calc-diff-rules','calc-chain-rule','calc-deriv-app','calc-increasing-decreasing','calc-antiderivative','calc-integral-rules','calc-ftc','calc-ftc-concept','calc-u-sub','calc-area-between','calc-integral-app']
};

// ---------- Challenge creation state ----------
const challengeCreatorState = { topic: 'mixed', difficulty: 'medium', count: 10 };
let _lobbyUnsubscribe = null;
let _lobbyCode = null;
let _countdownTimer = null;
let _challengeLaunched = false;

function selectChallengeOption(btn, field) {
    btn.parentElement.querySelectorAll('.fc-chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    challengeCreatorState[field] = field === 'count' ? parseInt(btn.dataset.value) : btn.dataset.value;
}
function openChallengeCreator() {
    document.getElementById('fc-actions-default').classList.add('hidden');
    document.getElementById('fc-creator').classList.remove('hidden');
}
function closeChallengeCreator() {
    document.getElementById('fc-creator').classList.add('hidden');
    document.getElementById('fc-actions-default').classList.remove('hidden');
}
function copyChallengeCode() {
    navigator.clipboard.writeText(_lobbyCode || '');
    showToast('Code copied!');
}

// ---------- Generate problems from a shared seed (deterministic) ----------
// Both clients call this with the same seed+topic+count and get identical problems.
// We temporarily override Math.random so generators.js produces the same output.
function _generateSeededProblems(seed, topic, count) {
    const rng = _seededRng(seed);

    // Override Math.random with seeded version
    const origRandom = Math.random;
    Math.random = rng;

    let genIds = [];
    if (topic === 'mixed') {
        const allTopics = Object.keys(_challengeGensByTopic);
        for (const t of _seededShuffle(allTopics, rng)) {
            genIds.push(..._seededShuffle(_challengeGensByTopic[t], rng).slice(0, Math.ceil(count / allTopics.length) + 1));
        }
    } else {
        genIds = _seededShuffle([...(_challengeGensByTopic[topic] || [])], rng);
    }

    genIds = genIds.filter(gId => typeof generators !== 'undefined' && generators[gId]);

    const problems = [];
    const seen = new Set();
    for (let i = 0; problems.length < count && i < count * 5; i++) {
        const gId = genIds[i % genIds.length];
        try {
            const p = generators[gId]();
            if (p && p.choices && p.correctIndex >= 0) {
                const key = p.question.replace(/<[^>]+>/g, '').trim();
                if (!seen.has(key)) {
                    seen.add(key);
                    problems.push({
                        question: p.question,
                        correctAnswer: p.choices[p.correctIndex],
                        wrongAnswers: p.choices.filter((_, j) => j !== p.correctIndex),
                        explanation: p.explanation || ''
                    });
                }
            }
        } catch (e) { /* skip */ }
    }

    // Restore real Math.random
    Math.random = origRandom;
    return problems;
}

// ---------- Create challenge ----------
async function createChallenge() {
    const user = auth.currentUser;
    if (!user) { showToast('Please log in first', 'error'); return; }

    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);
    const userData = userSnap.exists() ? userSnap.data() : {};
    const displayName = userData.displayName || 'Anonymous';

    const { topic, difficulty, count } = challengeCreatorState;

    // Generate a random seed (32-bit integer)
    const seed = Math.floor(Math.random() * 2147483647) + 1;

    // Verify the seed produces enough problems before saving
    const testProblems = _generateSeededProblems(seed, topic, count);
    if (testProblems.length === 0) {
        showToast('Could not generate problems for that topic. Try "Mixed".', 'error');
        return;
    }

    const code = generateChallengeCode();
    const topicLabels = { mixed: 'Mixed', algebra: 'Algebra', geometry: 'Geometry', trigonometry: 'Trigonometry', calculus: 'Calculus' };

    try {
        await setDoc(doc(db, 'challenges', code), {
            code,
            creatorId: user.uid,
            creatorName: displayName,
            createdAt: new Date().toISOString(),
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
            status: 'waiting',
            topic,
            topicLabel: topicLabels[topic] || topic,
            difficulty,
            problemCount: testProblems.length,
            seed,                                   // shared seed — both clients regenerate identical problems
            participants: [user.uid],
            playerNames: { [user.uid]: displayName },
            results: {},
            liveProgress: {},
            startAt: null
        });
        closeChallengeCreator();
        enterChallengeLobby(code, true);
        loadActiveChallenges();
    } catch (error) {
        console.error('Error creating challenge:', error);
        if (error.code === 'permission-denied') {
            showToast('Permission denied — update Firestore rules for the "challenges" collection', 'error');
        } else {
            showToast(`Error: ${error.message || error.code || 'unknown'}`, 'error');
        }
    }
}

// ---------- Join challenge ----------
async function joinChallenge() {
    const user = auth.currentUser;
    if (!user) { showToast('Please log in first', 'error'); return; }

    const code = document.getElementById('fc-join-code').value.trim().toUpperCase();
    if (!code || code.length !== 6) { showToast('Enter a valid 6-character challenge code', 'error'); return; }

    try {
        const challengeRef = doc(db, 'challenges', code);
        const snap = await getDoc(challengeRef);
        if (!snap.exists()) { showToast('Challenge not found', 'error'); return; }

        const data = snap.data();
        if (new Date(data.expiresAt) < new Date()) { showToast('This challenge has expired', 'error'); return; }
        if (data.results && data.results[user.uid]) { showToast('You already completed this challenge!', 'info'); return; }

        if (data.creatorId === user.uid) {
            document.getElementById('fc-join-code').value = '';
            enterChallengeLobby(code, true);
            return;
        }

        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        const displayName = userSnap.exists() ? (userSnap.data().displayName || 'Anonymous') : 'Anonymous';

        await updateDoc(challengeRef, {
            participants: arrayUnion(user.uid),
            [`playerNames.${user.uid}`]: displayName,
            status: 'ready'
        });

        document.getElementById('fc-join-code').value = '';
        enterChallengeLobby(code, false);
        showToast(`Joined ${escapeHtml(data.creatorName)}'s challenge!`);
    } catch (error) {
        console.error('Error joining challenge:', error);
        showToast(`Error: ${error.message || error.code || 'unknown'}`, 'error');
    }
}

// ---------- Lobby ----------
function enterChallengeLobby(code, isCreator) {
    _lobbyCode = code;
    _challengeLaunched = false;
    const user = auth.currentUser;
    if (!user) return;

    document.getElementById('fc-actions-default').classList.add('hidden');
    document.getElementById('fc-creator').classList.add('hidden');
    document.getElementById('fc-lobby').classList.remove('hidden');
    document.getElementById('fc-lobby-code').textContent = code;
    document.getElementById('fc-lobby-status').textContent = isCreator
        ? 'Share the code — waiting for a friend to join...'
        : 'Waiting for host to start...';

    if (_lobbyUnsubscribe) _lobbyUnsubscribe();
    _lobbyUnsubscribe = onSnapshot(doc(db, 'challenges', code), snap => {
        if (!snap.exists()) { leaveLobby(); return; }
        _updateLobbyUI(snap.data(), user.uid);
    });
}

function _updateLobbyUI(data, myUid) {
    if (_challengeLaunched) return;

    const topicLabels = { mixed:'🎲 Mixed', algebra:'📐 Algebra', geometry:'📏 Geometry', trigonometry:'📊 Trig', calculus:'♾️ Calculus' };
    const diffLabels  = { easy:'🟢 Easy', medium:'🟡 Medium', hard:'🔴 Hard' };

    document.getElementById('fc-lobby-topic').textContent = topicLabels[data.topic] || data.topic;
    document.getElementById('fc-lobby-diff').textContent  = diffLabels[data.difficulty] || data.difficulty;
    document.getElementById('fc-lobby-count').textContent  = `${data.problemCount} problems`;

    const names = data.playerNames || {};
    const participants = data.participants || [];

    const p1El = document.getElementById('fc-lobby-p1');
    const p1Name = names[data.creatorId] || 'Creator';
    p1El.querySelector('.fc-lobby-avatar').textContent = p1Name.charAt(0).toUpperCase();
    p1El.querySelector('.fc-lobby-pname').textContent  = p1Name + (data.creatorId === myUid ? ' (You)' : '');
    p1El.classList.add('fc-lobby-player-joined');

    const p2El = document.getElementById('fc-lobby-p2');
    const challengerUid = participants.find(uid => uid !== data.creatorId);
    if (challengerUid) {
        const p2Name = names[challengerUid] || 'Opponent';
        p2El.querySelector('.fc-lobby-avatar').textContent = p2Name.charAt(0).toUpperCase();
        p2El.querySelector('.fc-lobby-pname').textContent  = p2Name + (challengerUid === myUid ? ' (You)' : '');
        p2El.classList.add('fc-lobby-player-joined');
    } else {
        p2El.querySelector('.fc-lobby-avatar').textContent = '?';
        p2El.querySelector('.fc-lobby-pname').textContent  = 'Waiting...';
        p2El.classList.remove('fc-lobby-player-joined');
    }

    const statusEl = document.getElementById('fc-lobby-status');

    if (data.startAt) {
        _runCountdown(new Date(data.startAt).getTime(), data);
    } else if (participants.length >= 2) {
        if (data.creatorId === myUid) {
            statusEl.innerHTML = 'Both players ready! <button class="fc-btn fc-start-countdown" onclick="triggerCountdown()">🚀 Start!</button>';
        } else {
            statusEl.textContent = 'Both players ready — waiting for host to start...';
        }
    } else {
        statusEl.textContent = data.creatorId === myUid
            ? 'Share the code — waiting for a friend to join...'
            : 'Waiting in lobby...';
    }
}

async function triggerCountdown() {
    if (!_lobbyCode) return;
    try {
        await updateDoc(doc(db, 'challenges', _lobbyCode), {
            startAt: new Date(Date.now() + 4000).toISOString(),
            status: 'countdown'
        });
    } catch (e) {
        console.error('Error starting countdown:', e);
        showToast('Error starting countdown', 'error');
    }
}

function _runCountdown(startTime, challengeData) {
    if (_challengeLaunched) return;

    const countdownEl = document.getElementById('fc-lobby-countdown');
    const numberEl    = document.getElementById('fc-countdown-number');
    const statusEl    = document.getElementById('fc-lobby-status');
    countdownEl.classList.remove('hidden');
    statusEl.textContent = 'Get ready!';

    // Only one timer at a time
    if (_countdownTimer) clearInterval(_countdownTimer);
    _countdownTimer = setInterval(() => {
        if (_challengeLaunched) { clearInterval(_countdownTimer); _countdownTimer = null; return; }
        const diff = Math.ceil((startTime - Date.now()) / 1000);
        if (diff > 0) {
            numberEl.textContent = diff;
            numberEl.classList.remove('fc-countdown-animate');
            void numberEl.offsetWidth;
            numberEl.classList.add('fc-countdown-animate');
        } else {
            clearInterval(_countdownTimer);
            _countdownTimer = null;
            numberEl.textContent = 'GO!';
            setTimeout(() => {
                if (!_challengeLaunched) _launchChallengeSession(challengeData);
            }, 400);
        }
    }, 200);
}

function _launchChallengeSession(data) {
    if (_challengeLaunched) return;
    _challengeLaunched = true;

    // Capture lobby code before cleanup
    const challengeCode = _lobbyCode;

    // Kill lobby listener + UI
    if (_lobbyUnsubscribe) { _lobbyUnsubscribe(); _lobbyUnsubscribe = null; }
    if (_countdownTimer) { clearInterval(_countdownTimer); _countdownTimer = null; }
    document.getElementById('fc-lobby').classList.add('hidden');
    document.getElementById('fc-lobby-countdown').classList.add('hidden');
    document.getElementById('fc-actions-default').classList.remove('hidden');
    _lobbyCode = null;

    // Mark active
    if (challengeCode) {
        updateDoc(doc(db, 'challenges', challengeCode), { status: 'active' }).catch(() => {});
    }

    const user = auth.currentUser;
    if (!user) { _challengeLaunched = false; return; }

    // Generate problems locally from the shared seed (deterministic — both players get the same set)
    let problems = [];
    if (data.seed && data.topic && data.problemCount) {
        problems = _generateSeededProblems(data.seed, data.topic, data.problemCount);
    }

    if (problems.length === 0) {
        showToast('Could not generate challenge problems. The challenge may need to be recreated.', 'error');
        _challengeLaunched = false;
        return;
    }

    const diffLabels = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
    const topicLabel = data.topicLabel || data.topic || 'Challenge';
    const names = data.playerNames || {};
    const opponentName = Object.entries(names).find(([uid]) => uid !== user.uid)?.[1] || 'Friend';

    practiceState.topic = data.topic || 'mixed';
    launchSession(
        problems,
        `⚔️ ${topicLabel} vs ${escapeHtml(opponentName)}`,
        diffLabels[data.difficulty] || '',
        'timed',
        problems.length,
        challengeCode,
        data
    );
}

function leaveLobby() {
    if (_lobbyUnsubscribe) { _lobbyUnsubscribe(); _lobbyUnsubscribe = null; }
    if (_countdownTimer) { clearInterval(_countdownTimer); _countdownTimer = null; }
    _lobbyCode = null;
    _challengeLaunched = false;
    document.getElementById('fc-lobby').classList.add('hidden');
    document.getElementById('fc-lobby-countdown').classList.add('hidden');
    document.getElementById('fc-actions-default').classList.remove('hidden');
}

// ---------- Record result ----------
async function recordChallengeResult(code, score, total) {
    const user = auth.currentUser;
    if (!user) return;

    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);
    const displayName = userSnap.exists() ? (userSnap.data().displayName || 'Anonymous') : 'Anonymous';

    try {
        const challengeRef = doc(db, 'challenges', code);
        await updateDoc(challengeRef, {
            [`results.${user.uid}`]: {
                name: displayName, score, total,
                accuracy: Math.round((score / total) * 100),
                completedAt: new Date().toISOString()
            },
            participants: arrayUnion(user.uid)
        });

        const updatedSnap = await getDoc(challengeRef);
        if (updatedSnap.exists()) {
            const updatedResults = Object.values(updatedSnap.data().results || {});
            if (updatedResults.length >= 2) {
                await updateDoc(challengeRef, { status: 'completed' }).catch(() => {});
                const sorted = [...updatedResults].sort((a, b) => b.score - a.score);
                const myResult = updatedResults.find(r => r.name === displayName);
                const topScore = sorted[0].score;
                if (myResult && myResult.score === topScore && sorted.filter(r => r.score === topScore).length === 1) {
                    showToast(`🏆 You won the challenge! (${score}/${total})`, 'success');
                } else if (myResult && myResult.score === topScore) {
                    showToast(`🤝 It's a tie! (${score}/${total})`, 'success');
                } else {
                    showToast(`${sorted[0].name} wins this round! Better luck next time.`, 'info');
                }
                if (document.getElementById('leaderboard-view') && !document.getElementById('leaderboard-view').classList.contains('hidden')) {
                    loadActiveChallenges();
                }
            } else {
                showToast(`Result saved! Waiting for your opponent to finish.`, 'success');
            }
        }
    } catch (error) {
        console.error('Error recording challenge result:', error);
    }
}

// ---------- Active challenges list ----------
async function loadActiveChallenges() {
    const user = auth.currentUser;
    if (!user) return;
    const listEl = document.getElementById('fc-active-list');
    if (!listEl) return;

    try {
        const q = query(
            collection(db, 'challenges'),
            where('participants', 'array-contains', user.uid),
            orderBy('createdAt', 'desc'),
            limit(8)
        );
        const snap = await getDocs(q);
        const relevant = [];
        snap.forEach(d => { const dd = d.data(); if (new Date(dd.expiresAt) > new Date()) relevant.push(dd); });

        if (relevant.length === 0) { listEl.innerHTML = ''; return; }

        const topicIcons = { mixed:'🎲', algebra:'📐', geometry:'📏', trigonometry:'📊', calculus:'♾️' };

        listEl.innerHTML = '<h4 class="fc-active-title">Your Challenges</h4>' +
            relevant.map(ch => {
                const resultEntries = Object.values(ch.results || {});
                const iAmCreator = ch.creatorId === user.uid;
                const icon = topicIcons[ch.topic] || '📝';

                let statusBadge = '';
                if (ch.status === 'completed' || resultEntries.length >= 2) statusBadge = '<span class="fc-badge fc-badge-done">Complete</span>';
                else if (ch.status === 'waiting') statusBadge = '<span class="fc-badge fc-badge-waiting">Waiting</span>';
                else statusBadge = '<span class="fc-badge fc-badge-live">Live</span>';

                let resultsHtml;
                if (resultEntries.length === 0) {
                    resultsHtml = '<span class="fc-waiting">No scores yet</span>';
                } else if (resultEntries.length === 1) {
                    const r = resultEntries[0];
                    resultsHtml = `<span class="fc-result-single">${escapeHtml(r.name)}: ${r.score}/${r.total} (${r.accuracy}%)</span><span class="fc-waiting"> — waiting</span>`;
                } else {
                    const sorted = [...resultEntries].sort((a, b) => b.score - a.score);
                    const top = sorted[0].score;
                    const tie = sorted.filter(r => r.score === top).length > 1;
                    resultsHtml = sorted.map((r, i) => {
                        const w = !tie && i === 0, t = tie && r.score === top;
                        return `<span class="fc-result ${w?'fc-winner':''} ${t?'fc-tied':''}">${w?'🏆 ':t?'🤝 ':''}${escapeHtml(r.name)}: ${r.score}/${r.total} (${r.accuracy}%)</span>`;
                    }).join('<span class="fc-vs"> vs </span>');
                }

                const myResult = ch.results && ch.results[user.uid];
                const canPlay = !myResult && new Date(ch.expiresAt) > new Date();
                let actionBtn = '';
                if (canPlay && ch.status === 'waiting' && iAmCreator)
                    actionBtn = `<button class="fc-btn fc-play-mini" onclick="enterChallengeLobby('${ch.code}', true)">🔗 Lobby</button>`;
                else if (canPlay && ['active','ready','countdown'].includes(ch.status))
                    actionBtn = `<button class="fc-btn fc-play-mini" onclick="_quickPlayChallenge('${ch.code}')">▶ Play</button>`;

                return `<div class="fc-active-item"><div class="fc-active-header"><span class="fc-active-icon">${icon}</span><span class="fc-active-code">${ch.code}</span><span class="fc-active-role">${iAmCreator ? 'Created by you' : `by ${escapeHtml(ch.creatorName)}`}</span>${statusBadge}${actionBtn}</div><div class="fc-active-results">${resultsHtml}</div></div>`;
            }).join('');
    } catch (error) {
        console.error('Error loading challenges:', error);
    }
}

async function _quickPlayChallenge(code) {
    const user = auth.currentUser;
    if (!user) return;
    const snap = await getDoc(doc(db, 'challenges', code));
    if (!snap.exists()) { showToast('Challenge not found', 'error'); return; }
    const data = snap.data();
    if (data.results && data.results[user.uid]) { showToast('You already played!', 'info'); return; }
    _lobbyCode = code;
    _challengeLaunched = false;
    _launchChallengeSession(data);
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
    hideAllViews();
    document.getElementById('profile-view').classList.remove('hidden');
}

// Show Dashboard View
function showDashboard() {
    hideAllViews();
    document.getElementById('main-view').classList.remove('hidden');
}

// Show Learn View
function showLearnView() {
    document.getElementById('learn-view').classList.remove('hidden');
    document.getElementById('practice-view').classList.add('hidden');
    document.getElementById('learn-toggle').classList.add('active');
    document.getElementById('learn-toggle').setAttribute('aria-selected', 'true');
    document.getElementById('practice-toggle').classList.remove('active');
    document.getElementById('practice-toggle').setAttribute('aria-selected', 'false');
}

// Show Practice View
function showPracticeView() {
    document.getElementById('learn-view').classList.add('hidden');
    document.getElementById('practice-view').classList.remove('hidden');
    document.getElementById('learn-toggle').classList.remove('active');
    document.getElementById('learn-toggle').setAttribute('aria-selected', 'false');
    document.getElementById('practice-toggle').classList.add('active');
    document.getElementById('practice-toggle').setAttribute('aria-selected', 'true');
    updateQuickPracticeBtn();
    updateRetryMissedBtn();
    updateMasteryRings();
    updateDailyGoal();
}

// ============================================================
// PRACTICE ENGINE — powered by generators.js
// ============================================================

const TIMER_DURATIONS = { easy: 30, medium: 45, hard: 60 };
const DAILY_GOAL = 10;

// Practice setup state (smart defaults so user only needs to pick a topic)
let practiceState = {
    topic: null,
    subtopics: [],       // selected lesson IDs (empty = all)
    difficulty: 'medium',
    mode: 'regular',
    problemCount: 10
};

// Session state
let sessionState = {
    problems: [],
    currentIndex: 0,
    score: 0,
    answers: [],
    topic: null,
    difficulty: null,
    mode: null,
    timerInterval: null,
    timeLeft: 0,
    answered: false,
    streak: 0,
    bestStreak: 0,
    problemCount: 10
};

// Daily progress (resets each day — persisted in localStorage)
let dailyProgress = { date: new Date().toDateString(), solved: 0 };

// Missed questions queue (persists across page loads via localStorage)
let missedQueue = [];

// ============================================================
// PERSISTENCE HELPERS  (missedQueue + dailyProgress)
// ============================================================
function loadPersistedState() {
    try {
        const mq = localStorage.getItem('ibis_missedQueue');
        if (mq) missedQueue = JSON.parse(mq);
    } catch(e) { missedQueue = []; }

    try {
        const dp = localStorage.getItem('ibis_dailyProgress');
        if (dp) {
            const parsed = JSON.parse(dp);
            const today = new Date().toDateString();
            // Discard saved state if it's from a previous day
            dailyProgress = parsed.date === today ? parsed : { date: today, solved: 0 };
        }
    } catch(e) { /* use default */ }
}

function saveMissedQueue() {
    try { localStorage.setItem('ibis_missedQueue', JSON.stringify(missedQueue)); } catch(e) {}
}

function saveDailyProgress() {
    try { localStorage.setItem('ibis_dailyProgress', JSON.stringify(dailyProgress)); } catch(e) {}
}

// ============================================================
// ADAPTIVE DIFFICULTY
// ============================================================
let adaptiveLevel = 'medium'; // 'easy', 'medium', 'hard'

function updateAdaptiveLevel() {
    const { streak, answers } = sessionState;
    const recent5 = answers.slice(-5);
    const recentCorrect = recent5.filter(a => a.correct).length;
    if (streak >= 3 || recentCorrect >= 4) adaptiveLevel = 'hard';
    else if (recent5.length >= 3 && recentCorrect <= 1) adaptiveLevel = 'easy';
    else adaptiveLevel = 'medium';
}

// ============================================================
// SPACED REPETITION
// ============================================================
async function getSpacedRepetitionProblems(currentTopic, count, completedLessons) {
    const allTopics = ['algebra', 'geometry', 'trigonometry', 'calculus'];
    const otherTopics = allTopics.filter(t => t !== currentTopic);
    const topicsWithLessons = otherTopics.filter(t =>
        completedLessons.some(l => l.startsWith(t + '-'))
    );
    if (topicsWithLessons.length === 0) return [];
    const user = auth.currentUser;
    if (!user) return [];
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) return [];
    const stats = userSnap.data().stats || {};
    // Sort by least practiced
    const ranked = topicsWithLessons
        .map(t => ({ topic: t, total: stats[`${t}Total`] || 0 }))
        .sort((a, b) => a.total - b.total);
    const reviewTopics = ranked.slice(0, 2).map(r => r.topic);
    const reviewCount = Math.min(count, Math.max(1, Math.floor(count * 0.25)));
    const reviewProblems = [];
    for (const rt of reviewTopics) {
        if (reviewProblems.length >= reviewCount) break;
        const problems = generateProblemsFromGenerators(rt, Math.ceil(reviewCount / reviewTopics.length), completedLessons);
        problems.forEach(p => { p.isReview = true; p.reviewTopic = rt; });
        reviewProblems.push(...problems);
    }
    return reviewProblems.slice(0, reviewCount);
}

// --- Utility helpers (shared with lesson practice) ---
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Build subtopic map: topic → [ { id, title, gens: [...] } ]
function getSubtopicMap() {
    const map = {};
    ['algebra', 'geometry', 'trigonometry', 'calculus'].forEach(topic => {
        map[topic] = lessonPaths[topic].lessons.map(lesson => {
            const gens = [];
            lesson.sections.forEach(s => {
                if (s.type === 'generated_practice') gens.push(...s.generators);
            });
            return { id: lesson.id, title: lesson.title, gens: [...new Set(gens)] };
        });
    });
    return map;
}

// ============================================================
// DAILY GOAL
// ============================================================
function updateDailyGoal() {
    const today = new Date().toDateString();
    if (dailyProgress.date !== today) {
        dailyProgress = { date: today, solved: 0 };
    }
    const pct = Math.min(100, Math.round((dailyProgress.solved / DAILY_GOAL) * 100));
    const fill = document.getElementById('dg-progress-fill');
    const label = document.getElementById('dg-label');
    const flame = document.getElementById('dg-flame');
    if (fill) fill.style.width = pct + '%';
    if (label) label.textContent = `${dailyProgress.solved} / ${DAILY_GOAL} problems`;
    if (flame) {
        flame.classList.toggle('done', dailyProgress.solved >= DAILY_GOAL);
        flame.textContent = dailyProgress.solved >= DAILY_GOAL ? '✅' : '🔥';
    }
}

function incrementDailyGoal(count) {
    const today = new Date().toDateString();
    if (dailyProgress.date !== today) dailyProgress = { date: today, solved: 0 };
    dailyProgress.solved += count;
    updateDailyGoal();
    saveDailyProgress();
}

// ============================================================
// MASTERY RINGS
// ============================================================
async function updateMasteryRings() {
    const user = auth.currentUser;
    if (!user) return;
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) return;
    const stats = userSnap.data().stats || {};

    ['algebra', 'geometry', 'trigonometry', 'calculus'].forEach(topic => {
        const correct = stats[topic] || 0;
        const total = stats[`${topic}Total`] || 0;
        const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

        // Update counts
        const countEl = document.getElementById(`${topic}-practice-count`);
        const totalEl = document.getElementById(`${topic}-total-count`);
        if (countEl) countEl.textContent = correct;
        if (totalEl) totalEl.textContent = total;

        // Update ring
        const arcEl = document.getElementById(`${topic}-mastery-arc`);
        const pctEl = document.getElementById(`${topic}-mastery-pct`);
        const ringEl = document.getElementById(`${topic}-mastery-ring`);

        if (arcEl) arcEl.setAttribute('stroke-dasharray', `${pct} ${100 - pct}`);
        if (pctEl) pctEl.textContent = total > 0 ? `${pct}%` : '—';
        if (ringEl) {
            ringEl.classList.remove('low', 'mid', 'high', 'perfect');
            if (total > 0) {
                if (pct >= 90) ringEl.classList.add('perfect');
                else if (pct >= 70) ringEl.classList.add('high');
                else if (pct >= 50) ringEl.classList.add('mid');
                else ringEl.classList.add('low');
            }
        }
    });
}

// ============================================================
// MISSED QUESTIONS QUEUE
// ============================================================
function addToMissedQueue(problem) {
    // Avoid duplicates (check question text)
    if (!missedQueue.find(p => p.question === problem.question)) {
        missedQueue.push({ ...problem });
        if (missedQueue.length > 50) missedQueue.shift(); // cap at 50
        saveMissedQueue();
    }
}

function updateRetryMissedBtn() {
    const btn = document.getElementById('retry-missed-btn');
    const label = document.getElementById('retry-missed-label');
    if (!btn) return;
    const count = missedQueue.length;
    btn.disabled = count === 0;
    if (label) label.textContent = count > 0 ? `${count} problem${count > 1 ? 's' : ''} to review` : 'No missed problems';
}

function startRetryMissed() {
    if (missedQueue.length === 0) return;
    const problems = shuffle([...missedQueue]).slice(0, 10);
    practiceState.topic = 'mixed';
    practiceState.difficulty = 'medium';
    launchSession(problems, 'Retry Missed', 'Review', 'regular', problems.length);
}

function startRetryMissedFromSummary() {
    // Gather missed from the just-completed session
    const missed = [];
    sessionState.answers.forEach((a, i) => {
        if (!a.correct) missed.push(sessionState.problems[i]);
    });
    if (missed.length === 0) return;
    practiceState.topic = sessionState.topic || 'mixed';
    practiceState.difficulty = 'medium';
    launchSession(missed, 'Retry Missed', 'Review', 'regular', missed.length);
}

// --- SETUP UI ---

function selectTopic(topic, el) {
    practiceState.topic = topic;
    practiceState.subtopics = [];
    document.querySelectorAll('.topic-card').forEach(c => c.classList.remove('active'));
    // el is the clicked .topic-card element (passed as 'this' from inline onclick)
    const card = el.closest ? el.closest('.topic-card') || el : el;
    card.classList.add('active');

    // Show subtopic chips, settings, and start button
    showSubtopicChips(topic);
    document.getElementById('practice-settings').classList.remove('hidden');
    document.getElementById('start-section').classList.remove('hidden');
    updateStartButton();
}

async function showSubtopicChips(topic) {
    const section = document.getElementById('subtopic-section');
    const chipsEl = document.getElementById('subtopic-chips');
    const subtopicMap = getSubtopicMap();
    const subtopics = subtopicMap[topic] || [];

    // Check which lessons are completed/unlocked
    let completedLessons = [];
    const user = auth.currentUser;
    if (user) {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        completedLessons = userSnap.exists() ? (userSnap.data().completedLessons || []) : [];
    }

    chipsEl.innerHTML = subtopics.map((st, i) => {
        const isUnlocked = i === 0 || completedLessons.includes(`${topic}-${subtopics[i-1].id}`);
        const hasGens = st.gens.length > 0;
        const locked = !isUnlocked || !hasGens;
        return `<button class="subtopic-chip ${locked ? 'locked' : ''}"
            data-lesson-id="${st.id}"
            ${locked ? 'disabled' : `onclick="toggleSubtopic('${st.id}', this)"`}>
            ${st.title}${locked ? '<span class="chip-lock">🔒</span>' : ''}
        </button>`;
    }).join('');

    section.classList.remove('hidden');
}

function toggleSubtopic(lessonId, btn) {
    btn.classList.toggle('active');
    const idx = practiceState.subtopics.indexOf(lessonId);
    if (idx >= 0) practiceState.subtopics.splice(idx, 1);
    else practiceState.subtopics.push(lessonId);
    updateStartButton();
}

function setDifficulty(difficulty, event) {
    practiceState.difficulty = difficulty;
    document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

function setPracticeMode(mode, event) {
    practiceState.mode = mode;
    document.querySelectorAll('.mode-button').forEach(b => b.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

function setProblemCount(count, event) {
    practiceState.problemCount = count;
    document.querySelectorAll('.count-btn').forEach(b => b.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

function updateStartButton() {
    const btn = document.getElementById('start-btn');
    const { topic, subtopics } = practiceState;
    if (!topic) return;
    const name = topic.charAt(0).toUpperCase() + topic.slice(1);
    const focus = subtopics.length > 0
        ? ` — ${subtopics.length} subtopic${subtopics.length > 1 ? 's' : ''}`
        : ' — All Topics';
    btn.textContent = `Start ${name}${focus} Practice`;
}

// Quick Practice button
async function updateQuickPracticeBtn() {
    const btn = document.getElementById('quick-practice-btn');
    const user = auth.currentUser;
    if (!user) { btn.disabled = true; return; }
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);
    const completed = userSnap.exists() ? (userSnap.data().completedLessons || []) : [];
    btn.disabled = completed.length === 0;
    const label = btn.querySelector('.pac-text span');
    if (completed.length > 0 && label) {
        label.textContent = `10 mixed from ${completed.length} lesson${completed.length > 1 ? 's' : ''}`;
    }
}

// Start Quick Practice — mix from all completed lessons
async function startQuickPractice() {
    const user = auth.currentUser;
    if (!user) return;
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);
    const completed = userSnap.exists() ? (userSnap.data().completedLessons || []) : [];
    if (completed.length === 0) return;

    // Gather all generators from completed lessons
    const allGenIds = [];
    ['algebra', 'geometry', 'trigonometry', 'calculus'].forEach(topic => {
        lessonPaths[topic].lessons.forEach(lesson => {
            if (completed.includes(`${topic}-${lesson.id}`)) {
                lesson.sections.forEach(s => {
                    if (s.type === 'generated_practice') {
                        s.generators.forEach(gId => {
                            if (generators[gId]) allGenIds.push(gId);
                        });
                    }
                });
            }
        });
    });

    if (allGenIds.length === 0) {
        showToast('Complete some lessons first!', 'error');
        return;
    }

    // Generate 10 random problems (deduplicated)
    const problems = [];
    const seenQuestions = new Set();
    const shuffled = shuffle([...allGenIds]);
    for (let i = 0; i < 10; i++) {
        const gId = shuffled[i % shuffled.length];
        let prob = null;
        for (let attempt = 0; attempt < 10; attempt++) {
            const p = generators[gId]();
            const qKey = p.question.replace(/<[^>]+>/g, '').trim();
            if (!seenQuestions.has(qKey)) {
                seenQuestions.add(qKey);
                prob = p;
                break;
            }
        }
        if (!prob) {
            // Try any generator
            for (const fbId of shuffle([...allGenIds])) {
                try {
                    const fp = generators[fbId]();
                    const fqKey = fp.question.replace(/<[^>]+>/g, '').trim();
                    if (!seenQuestions.has(fqKey)) { seenQuestions.add(fqKey); prob = fp; break; }
                } catch(e) {}
            }
        }
        if (prob) {
            problems.push({
                question: prob.question,
                correctAnswer: prob.choices[prob.correctIndex],
                wrongAnswers: prob.choices.filter((_, j) => j !== prob.correctIndex),
                explanation: prob.explanation
            });
        }
    }

    practiceState.topic = 'mixed';
    practiceState.difficulty = 'medium';
    launchSession(problems, 'Mixed Review', 'Medium', 'regular', 10);
}

// --- PROBLEM GENERATION (using generators.js) ---

function convertGenProblem(gp) {
    return {
        question: gp.question,
        correctAnswer: gp.choices[gp.correctIndex],
        wrongAnswers: gp.choices.filter((_, i) => i !== gp.correctIndex),
        explanation: gp.explanation
    };
}

function generateProblemsFromGenerators(topic, count, completedLessons) {
    const subtopicMap = getSubtopicMap();
    let available = subtopicMap[topic] || [];

    // Filter to selected subtopics if any
    if (practiceState.subtopics.length > 0) {
        available = available.filter(st => practiceState.subtopics.includes(st.id));
    }
    // Filter to completed lessons only (if list provided)
    else if (completedLessons && completedLessons.length > 0) {
        available = available.filter(st => completedLessons.includes(`${topic}-${st.id}`));
    }

    // Collect all valid generator IDs (deduplicated)
    let allGenIds = [...new Set(
        available.flatMap(st => st.gens.filter(gId => generators[gId]))
    )];

    if (allGenIds.length === 0) return [];

    const problems = [];
    const seenQuestions = new Set();
    const shuffledGens = shuffle([...allGenIds]);

    for (let i = 0; i < count; i++) {
        const gId = shuffledGens[i % shuffledGens.length];
        let prob = null;
        for (let attempt = 0; attempt < 10; attempt++) {
            try {
                prob = generators[gId]();
                if (prob && prob.choices && prob.correctIndex >= 0) {
                    // Dedup: check if we already have this question
                    const qKey = prob.question.replace(/<[^>]+>/g, '').trim();
                    if (!seenQuestions.has(qKey)) {
                        seenQuestions.add(qKey);
                        break;
                    }
                }
                prob = null;
            } catch(e) { prob = null; }
        }
        if (prob) {
            problems.push(convertGenProblem(prob));
        } else {
            // Fallback: try any random generator we haven't exhausted
            let found = false;
            for (const fbId of shuffle([...allGenIds])) {
                try {
                    const fp = generators[fbId]();
                    const fqKey = fp.question.replace(/<[^>]+>/g, '').trim();
                    if (!seenQuestions.has(fqKey)) {
                        seenQuestions.add(fqKey);
                        problems.push(convertGenProblem(fp));
                        found = true;
                        break;
                    }
                } catch(e) {}
            }
            if (!found && prob) problems.push(convertGenProblem(prob)); // last resort: allow dup
        }
    }
    return problems;
}

// Legacy inline generators as fallback (already in app.js below)
function generateProblemsLegacy(topic, difficulty, count) {
    if (!problemGenerators || !problemGenerators[topic] || !problemGenerators[topic][difficulty]) return [];
    const gens = problemGenerators[topic][difficulty];
    const problems = [];
    for (let i = 0; i < count; i++) {
        const gen = gens[i % gens.length];
        let problem = gen();
        let attempts = 0;
        while ((!problem || !problem.correctAnswer) && attempts < 5) {
            problem = pickRandom(gens)();
            attempts++;
        }
        if (problem) problems.push(problem);
    }
    return problems;
}

// --- SESSION MANAGEMENT ---

async function startPractice() {
    const { topic, mode, problemCount } = practiceState;
    if (!topic) {
        showToast('Please select a topic first!', 'error');
        return;
    }
    const user = auth.currentUser;
    if (!user) return;

    // Get completed lessons to filter generators
    let completedLessons = [];
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) completedLessons = userSnap.data().completedLessons || [];

    // Use generators.js, filtered to completed lessons
    const mainCount = Math.max(1, problemCount);
    let problems = generateProblemsFromGenerators(topic, mainCount, completedLessons);
    if (problems.length === 0) {
        problems = generateProblemsLegacy(topic, 'medium', problemCount);
    }
    if (problems.length === 0) {
        showToast('Complete some lessons first to unlock practice!', 'error');
        return;
    }

    // Spaced repetition: inject ~25% review from other completed topics
    try {
        const reviewProblems = await getSpacedRepetitionProblems(topic, problemCount, completedLessons);
        if (reviewProblems.length > 0) {
            // Replace last N main problems with review problems
            const replaceCount = Math.min(reviewProblems.length, problems.length);
            problems.splice(problems.length - replaceCount, replaceCount, ...reviewProblems.slice(0, replaceCount));
            // Shuffle so review isn't always at the end
            for (let i = problems.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [problems[i], problems[j]] = [problems[j], problems[i]];
            }
        }
    } catch(e) { /* proceed without review problems */ }

    // Reset adaptive difficulty for new session
    adaptiveLevel = 'medium';

    const topicLabel = topic.charAt(0).toUpperCase() + topic.slice(1);
    launchSession(problems, topicLabel, '', mode, problems.length);
}

function launchSession(problems, topicLabel, diffLabel, mode, total, challengeCode = null, challengeData = null) {
    sessionState = {
        problems,
        currentIndex: 0,
        score: 0,
        answers: [],
        topic: practiceState.topic || 'mixed',
        difficulty: practiceState.difficulty || 'medium',
        mode,
        timerInterval: null,
        timeLeft: 0,
        answered: false,
        streak: 0,
        bestStreak: 0,
        problemCount: total,
        // Challenge context — carried through the whole session so endSession can save the result
        challengeCode,
        challengeData
    };

    // Setup header
    document.getElementById('session-topic').textContent = topicLabel;
    const diffBadge = document.getElementById('session-difficulty');
    if (diffLabel) {
        diffBadge.textContent = diffLabel;
        diffBadge.className = 'session-badge session-diff-badge';
        diffBadge.classList.remove('hidden');
    } else {
        diffBadge.classList.add('hidden');
    }
    document.getElementById('session-total').textContent = total;
    document.getElementById('session-score').textContent = '0';
    document.getElementById('session-streak').classList.add('hidden');

    // Timer visibility
    const timerEl = document.getElementById('session-timer');
    if (mode === 'timed') timerEl.classList.remove('hidden');
    else timerEl.classList.add('hidden');

    hideAllViews();
    document.getElementById('practice-session').classList.remove('hidden');
    showProblem(0);

    // Start real-time multiplayer listener for friend challenges
    if (challengeCode) {
        startChallengeListener(challengeCode);
    } else {
        stopChallengeListener();
    }
}

function showProblem(index) {
    const problem = sessionState.problems[index];
    const total = sessionState.problemCount;
    sessionState.answered = false;

    // Progress
    document.getElementById('session-progress-text').textContent = `Problem ${index + 1} of ${total}`;
    document.getElementById('session-progress-fill').style.width = ((index) / total * 100) + '%';

    // Question with optional review tag
    const reviewHtml = problem.isReview
        ? `<span class="review-tag">🔄 Review: ${problem.reviewTopic}</span><br>`
        : '';
    document.getElementById('problem-question').innerHTML = reviewHtml + problem.question;

    // Shuffled choices
    const allChoices = [
        { text: problem.correctAnswer, correct: true },
        ...problem.wrongAnswers.map(w => ({ text: w, correct: false }))
    ];
    const shuffled = shuffle(allChoices);
    const labels = ['A', 'B', 'C', 'D'];
    document.getElementById('problem-choices').innerHTML = shuffled.map((ch, i) => `
        <button class="choice-btn" data-correct="${ch.correct}" data-index="${i}" onclick="selectChoice(this)">
            <span class="choice-label">${labels[i]}</span>${ch.text}
        </button>
    `).join('');

    // Hide feedback & next
    document.getElementById('feedback-area').classList.add('hidden');
    document.getElementById('next-problem-btn').classList.add('hidden');
    document.getElementById('xp-float').classList.add('hidden');

    if (sessionState.mode === 'timed') startTimer();
}

function selectChoice(btn) {
    if (sessionState.answered) return;
    sessionState.answered = true;

    if (sessionState.timerInterval) {
        clearInterval(sessionState.timerInterval);
        sessionState.timerInterval = null;
    }

    const isCorrect = btn.dataset.correct === 'true';

    // Highlight correct/incorrect
    document.querySelectorAll('.choice-btn').forEach(b => {
        b.classList.add('disabled');
        if (b.dataset.correct === 'true') b.classList.add('correct');
    });

    if (isCorrect) {
        btn.classList.add('correct');
        sessionState.score++;
        sessionState.streak++;
        if (sessionState.streak > sessionState.bestStreak) sessionState.bestStreak = sessionState.streak;
        sessionState.answers.push({ correct: true, timeout: false });

        // XP float animation
        const xp = sessionState.mode === 'timed' ? 15 : 10;
        const floatEl = document.getElementById('xp-float');
        floatEl.textContent = `+${xp} XP`;
        floatEl.className = 'xp-float animate';
        setTimeout(() => floatEl.classList.add('hidden'), 1200);

        // Remove from missed queue if present
        const q = sessionState.problems[sessionState.currentIndex].question;
        missedQueue = missedQueue.filter(p => p.question !== q);
        saveMissedQueue();
    } else {
        btn.classList.add('incorrect');
        sessionState.streak = 0;
        sessionState.answers.push({ correct: false, timeout: false });

        // Add to missed queue
        addToMissedQueue(sessionState.problems[sessionState.currentIndex]);
    }

    updateStreakDisplay();
    updateAdaptiveLevel();
    document.getElementById('session-score').textContent = sessionState.score;
    showFeedback(isCorrect, false);
    document.getElementById('next-problem-btn').classList.remove('hidden');

    // Save live progress for real-time multiplayer overlay
    if (sessionState.challengeCode) _saveLiveChallengeProgress();
}

function updateStreakDisplay() {
    const el = document.getElementById('session-streak');
    const cnt = document.getElementById('streak-count');
    if (sessionState.streak >= 2) {
        el.classList.remove('hidden');
        cnt.textContent = sessionState.streak;
        el.style.animation = 'none';
        el.offsetHeight;
        el.style.animation = '';
    } else {
        el.classList.add('hidden');
    }
}

function showFeedback(isCorrect, isTimeout) {
    const feedbackArea = document.getElementById('feedback-area');
    const banner = document.getElementById('feedback-banner');
    const icon = document.getElementById('feedback-icon');
    const text = document.getElementById('feedback-text');
    const explanation = document.getElementById('feedback-explanation');

    feedbackArea.classList.remove('hidden');
    banner.className = 'feedback-banner';

    if (isTimeout) {
        banner.classList.add('timeout');
        icon.textContent = '⏱️';
        text.textContent = "Time's up!";
    } else if (isCorrect) {
        banner.classList.add('correct');
        icon.textContent = '✅';
        const msgs = ['Correct!', 'Great job!', 'Nailed it!', 'Perfect!', 'Well done!'];
        if (sessionState.streak >= 3) msgs.push(`🔥 ${sessionState.streak} in a row!`);
        text.textContent = pickRandom(msgs);
    } else {
        banner.classList.add('incorrect');
        icon.textContent = '❌';
        text.textContent = pickRandom(["Not quite.", "That's not right.", "Incorrect.", "Almost!"]);
    }

    const problem = sessionState.problems[sessionState.currentIndex];
    explanation.innerHTML = `<strong>Explanation:</strong><br>${problem.explanation}`;
}

function nextProblem() {
    sessionState.currentIndex++;
    if (sessionState.currentIndex >= sessionState.problemCount) {
        endSession();
    } else {
        showProblem(sessionState.currentIndex);
    }
}

// --- TIMER ---
function startTimer() {
    const duration = TIMER_DURATIONS[sessionState.difficulty] || 30;
    sessionState.timeLeft = duration;
    const timerEl = document.getElementById('session-timer');
    const timerVal = document.getElementById('timer-value');
    timerVal.textContent = duration;
    timerEl.className = 'session-timer';

    if (sessionState.timerInterval) clearInterval(sessionState.timerInterval);
    sessionState.timerInterval = setInterval(() => {
        sessionState.timeLeft--;
        timerVal.textContent = sessionState.timeLeft;
        if (sessionState.timeLeft <= 10) timerEl.className = 'session-timer danger';
        else if (sessionState.timeLeft <= 15) timerEl.className = 'session-timer warning';
        if (sessionState.timeLeft <= 0) {
            clearInterval(sessionState.timerInterval);
            sessionState.timerInterval = null;
            handleTimeout();
        }
    }, 1000);
}

function handleTimeout() {
    if (sessionState.answered) return;
    sessionState.answered = true;
    sessionState.streak = 0;
    updateStreakDisplay();
    sessionState.answers.push({ correct: false, timeout: true });
    // Add to missed queue
    addToMissedQueue(sessionState.problems[sessionState.currentIndex]);
    document.querySelectorAll('.choice-btn').forEach(b => {
        b.classList.add('disabled');
        if (b.dataset.correct === 'true') b.classList.add('correct');
    });
    showFeedback(false, true);
    document.getElementById('next-problem-btn').classList.remove('hidden');
}

// --- SESSION END ---
async function endSession() {
    if (sessionState.timerInterval) {
        clearInterval(sessionState.timerInterval);
        sessionState.timerInterval = null;
    }

    // Stop real-time multiplayer listener
    stopChallengeListener();

    const { score, answers, topic, mode, bestStreak, problemCount } = sessionState;
    const total = problemCount;
    const accuracy = Math.round((score / total) * 100);
    const xpPerProblem = mode === 'timed' ? 15 : 10;
    const xpEarned = score * xpPerProblem;

    // Update daily goal
    incrementDailyGoal(total);

    // Update Firebase
    const user = auth.currentUser;
    if (user) {
        if (xpEarned > 0) await awardXP(user.uid, xpEarned);
        const userRef = doc(db, 'users', user.uid);
        const updateData = {
            [`stats.totalProblems`]: increment(score),
            [`stats.${topic}`]: increment(score),
            [`stats.${topic}Total`]: increment(total),
            [`stats.totalAttempted`]: increment(total)
        };
        if (mode === 'timed') updateData['stats.timedChallenges'] = increment(1);
        await updateDoc(userRef, updateData);
        await loadProfile(user.uid);
    }

    // Show summary
    hideAllViews();
    document.getElementById('session-summary').classList.remove('hidden');

    let summaryIcon, summaryTitle, summarySubtitle;
    if (accuracy === 100) {
        summaryIcon = '🏆'; summaryTitle = 'Perfect Score!'; summarySubtitle = "Incredible — you didn't miss a single one!";
    } else if (accuracy >= 80) {
        summaryIcon = '🎉'; summaryTitle = 'Great Job!'; summarySubtitle = "You're mastering this material!";
    } else if (accuracy >= 60) {
        summaryIcon = '👍'; summaryTitle = 'Good Effort!'; summarySubtitle = 'Keep practicing to improve!';
    } else if (accuracy >= 40) {
        summaryIcon = '💪'; summaryTitle = 'Keep Going!'; summarySubtitle = "Review the explanations and try again.";
    } else {
        summaryIcon = '📚'; summaryTitle = 'Time to Study!'; summarySubtitle = "Check out the Learn section for help.";
    }

    document.getElementById('summary-icon').textContent = summaryIcon;
    document.getElementById('summary-title').textContent = summaryTitle;
    document.getElementById('summary-subtitle').textContent = summarySubtitle;
    document.getElementById('summary-correct').textContent = score;
    document.getElementById('summary-total-problems').textContent = total;
    document.getElementById('summary-accuracy').textContent = accuracy + '%';
    document.getElementById('summary-xp').textContent = `+${xpEarned} XP`;

    // Best streak
    const streakStat = document.getElementById('summary-streak-stat');
    if (bestStreak >= 2) {
        document.getElementById('summary-best-streak').textContent = bestStreak;
        streakStat.classList.remove('hidden');
    } else {
        streakStat.classList.add('hidden');
    }

    // Show/hide retry missed button
    const incorrect = answers.filter(a => !a.correct).length;
    const retryBtn = document.getElementById('retry-summary-btn');
    if (retryBtn) {
        if (incorrect > 0) {
            retryBtn.classList.remove('hidden');
            retryBtn.textContent = `🔄 Retry ${incorrect} Missed Problem${incorrect > 1 ? 's' : ''}`;
        } else {
            retryBtn.classList.add('hidden');
        }
    }

    // Confetti on great scores
    if (accuracy >= 80) {
        launchConfetti();
    }

    // Save challenge result if this was a friend challenge
    if (sessionState.challengeCode) {
        await recordChallengeResult(sessionState.challengeCode, score, total);
        sessionState.challengeCode = null;
        sessionState.challengeData = null;
    }

    // Review heading
    document.getElementById('review-heading').textContent = incorrect > 0
        ? 'Problem Review — tap to see explanations'
        : 'Problem Review — all correct!';

    // Expandable breakdown
    const breakdownEl = document.getElementById('summary-breakdown');
    breakdownEl.innerHTML = answers.map((a, i) => {
        const p = sessionState.problems[i];
        const cls = a.timeout ? 'timeout-item' : a.correct ? 'correct-item' : 'incorrect-item';
        const icon = a.timeout ? '⏱️' : a.correct ? '✅' : '❌';
        const shortQ = p.question.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        const qDisplay = shortQ.length > 80 ? shortQ.substring(0, 80) + '…' : shortQ;
        return `<div class="breakdown-item ${cls}" onclick="this.classList.toggle('open')">
            <span class="breakdown-icon">${icon}</span>
            <div class="breakdown-content">
                <div class="breakdown-q">${i + 1}. ${qDisplay}</div>
                <span class="breakdown-toggle">${a.correct ? 'show explanation' : 'show answer & explanation'}</span>
                <div class="breakdown-explain">${!a.correct ? `<strong>Correct answer:</strong> ${p.correctAnswer}<br><br>` : ''}${p.explanation}</div>
            </div>
        </div>`;
    }).join('');
}

function quitSession() {
    if (sessionState.timerInterval) {
        clearInterval(sessionState.timerInterval);
        sessionState.timerInterval = null;
    }
    stopChallengeListener();
    hideAllViews();
    document.getElementById('main-view').classList.remove('hidden');
    showPracticeView();
}

function practiceAgain() {
    hideAllViews();
    document.getElementById('main-view').classList.remove('hidden');
    showPracticeView();
}

// ============================================================
// LEGACY INLINE GENERATORS (fallback when generators.js has no match)
// ============================================================

function roundNice(n, decimals = 2) { return parseFloat(n.toFixed(decimals)); }
function generateDistractors(correct, count = 3, isDecimal = false) {
    const distractors = new Set();
    const step = isDecimal ? 0.5 : 1;
    const candidates = [
        correct + step, correct - step, correct + step * 2, correct - step * 2,
        correct + step * 3, correct - step * 3, correct * 2, correct + 10,
        Math.abs(correct - 10), -correct
    ].map(v => isDecimal ? roundNice(v) : Math.round(v));
    for (const c of shuffle(candidates)) {
        if (c !== correct && !distractors.has(c) && (c > 0 || correct <= 0)) distractors.add(c);
        if (distractors.size >= count) break;
    }
    while (distractors.size < count) {
        const offset = randInt(1, 8) * (Math.random() < 0.5 ? 1 : -1);
        const val = isDecimal ? roundNice(correct + offset * 0.5) : correct + offset;
        if (val !== correct && !distractors.has(val)) distractors.add(val);
    }
    return [...distractors].slice(0, count);
}
function formatAnswer(val) { return Number.isInteger(val) ? String(val) : String(roundNice(val)); }
function buildProblem(question, correctVal, explanation, isDecimal = false) {
    const correct = isDecimal ? roundNice(correctVal) : Math.round(correctVal);
    const wrongs = generateDistractors(correct, 3, isDecimal);
    return { question, correctAnswer: formatAnswer(correct), wrongAnswers: wrongs.map(formatAnswer), explanation };
}

// --- PROBLEM GENERATORS ---

const problemGenerators = {
    algebra: {
        easy: [
            () => {
                const a = randInt(2, 9);
                const x = randInt(1, 12);
                const b = randInt(1, 15);
                const c = a * x + b;
                return buildProblem(
                    `Solve for x:<div class="math-expression">${a}x + ${b} = ${c}</div>`,
                    x,
                    `${a}x + ${b} = ${c}<br>${a}x = ${c - b}<br>x = ${(c - b)} ÷ ${a} = <strong>${x}</strong>`
                );
            },
            () => {
                const x = randInt(2, 10);
                const a = randInt(2, 7);
                const b = randInt(1, 15);
                const answer = a * x + b;
                return buildProblem(
                    `If x = ${x}, evaluate:<div class="math-expression">${a}x + ${b}</div>`,
                    answer,
                    `${a}(${x}) + ${b} = ${a * x} + ${b} = <strong>${answer}</strong>`
                );
            },
            () => {
                const a = randInt(2, 8);
                const b = randInt(1, 6);
                const answer = a + b;
                return buildProblem(
                    `Simplify:<div class="math-expression">${a}x + ${b}x</div><p>What is the coefficient of x?</p>`,
                    answer,
                    `${a}x + ${b}x = (${a} + ${b})x = <strong>${answer}x</strong>`
                );
            },
            () => {
                const a = randInt(2, 9);
                const x = randInt(1, 10);
                const c = a * x;
                return buildProblem(
                    `Solve for x:<div class="math-expression">${a}x = ${c}</div>`,
                    x,
                    `x = ${c} ÷ ${a} = <strong>${x}</strong>`
                );
            },
            () => {
                const x = randInt(1, 8);
                const b = randInt(1, 10);
                const c = x + b;
                return buildProblem(
                    `Solve for x:<div class="math-expression">x + ${b} = ${c}</div>`,
                    x,
                    `x = ${c} - ${b} = <strong>${x}</strong>`
                );
            }
        ],
        medium: [
            () => {
                const a = randInt(2, 5);
                const b = randInt(1, 10);
                const c = randInt(1, 3);
                const d = randInt(1, 10);
                const x = (d - b) / (a - c);
                if (!Number.isInteger(x) || a === c) return problemGenerators.algebra.medium[1]();
                return buildProblem(
                    `Solve for x:<div class="math-expression">${a}x + ${b} = ${c}x + ${d}</div>`,
                    x,
                    `${a}x - ${c}x = ${d} - ${b}<br>${a - c}x = ${d - b}<br>x = <strong>${x}</strong>`
                );
            },
            () => {
                const r1 = randInt(1, 8);
                const r2 = randInt(1, 8);
                const a = 1;
                const b = -(r1 + r2);
                const c = r1 * r2;
                const sign1 = b >= 0 ? '+' : '-';
                const sign2 = c >= 0 ? '+' : '-';
                return buildProblem(
                    `Find the <strong>larger</strong> root of:<div class="math-expression">x² ${sign1} ${Math.abs(b)}x ${sign2} ${Math.abs(c)} = 0</div>`,
                    Math.max(r1, r2),
                    `Factor: (x - ${r1})(x - ${r2}) = 0<br>x = ${r1} or x = ${r2}<br>Larger root: <strong>${Math.max(r1, r2)}</strong>`
                );
            },
            () => {
                const x = randInt(1, 6);
                const y = randInt(1, 6);
                const a1 = 1, b1 = 1;
                const c1 = x + y;
                const a2 = randInt(2, 4);
                const c2 = a2 * x + y;
                return buildProblem(
                    `Solve the system. What is x?<div class="math-expression">x + y = ${c1}<br>${a2}x + y = ${c2}</div>`,
                    x,
                    `Subtract equation 1 from 2:<br>${a2}x + y - x - y = ${c2} - ${c1}<br>${a2 - 1}x = ${c2 - c1}<br>x = <strong>${x}</strong>`
                );
            },
            () => {
                const base = randInt(2, 5);
                const exp1 = randInt(2, 4);
                const exp2 = randInt(1, 3);
                const answer = exp1 + exp2;
                return buildProblem(
                    `Simplify. What is the exponent?<div class="math-expression">${base}<sup>${exp1}</sup> × ${base}<sup>${exp2}</sup></div>`,
                    answer,
                    `When multiplying same bases, add exponents:<br>${base}<sup>${exp1}</sup> × ${base}<sup>${exp2}</sup> = ${base}<sup>${exp1}+${exp2}</sup> = ${base}<sup><strong>${answer}</strong></sup>`
                );
            }
        ],
        hard: [
            () => {
                const a = randInt(1, 3);
                const b = randInt(-8, 8);
                const c = randInt(-10, 5);
                const disc = b * b - 4 * a * c;
                if (disc < 0) return problemGenerators.algebra.hard[1]();
                const r1 = (-b + Math.sqrt(disc)) / (2 * a);
                const r2 = (-b - Math.sqrt(disc)) / (2 * a);
                const answer = roundNice(Math.max(r1, r2));
                const bSign = b >= 0 ? '+' : '-';
                const cSign = c >= 0 ? '+' : '-';
                return buildProblem(
                    `Using the quadratic formula, find the <strong>larger</strong> root:<div class="math-expression">${a === 1 ? '' : a}x² ${bSign} ${Math.abs(b)}x ${cSign} ${Math.abs(c)} = 0</div>`,
                    answer,
                    `Discriminant = ${b}² - 4(${a})(${c}) = ${disc}<br>x = (${-b} ± √${disc}) / ${2 * a}<br>Larger root: <strong>${answer}</strong>`,
                    !Number.isInteger(answer)
                );
            },
            () => {
                const x = randInt(2, 8);
                const a = randInt(2, 5);
                const b = randInt(1, 10);
                const result = a * x * x + b;
                return buildProblem(
                    `If f(x) = ${a}x² + ${b}, find f(${x}):<div class="math-expression">f(${x}) = ?</div>`,
                    result,
                    `f(${x}) = ${a}(${x})² + ${b} = ${a}(${x * x}) + ${b} = ${a * x * x} + ${b} = <strong>${result}</strong>`
                );
            },
            () => {
                const n = randInt(2, 5);
                const d = randInt(2, 4);
                const answer = n * d;
                return buildProblem(
                    `Simplify:<div class="math-expression">(x² + ${n + d}x + ${n * d}) / (x + ${d})</div><p>The result is (x + ?). Find the missing value.</p>`,
                    n,
                    `Factor the numerator:<br>x² + ${n + d}x + ${n * d} = (x + ${n})(x + ${d})<br>(x + ${n})(x + ${d}) / (x + ${d}) = x + <strong>${n}</strong>`
                );
            },
            () => {
                const a = randInt(2, 6);
                const b = randInt(1, 10);
                const c = randInt(2, 5);
                const d = randInt(1, 10);
                const x = randInt(1, 5);
                const lhs = a * x - b;
                const rhs = c * x + d;
                const answer = lhs + rhs;
                return buildProblem(
                    `Evaluate when x = ${x}:<div class="math-expression">(${a}x - ${b}) + (${c}x + ${d})</div>`,
                    answer,
                    `(${a}(${x}) - ${b}) + (${c}(${x}) + ${d})<br>= (${a * x} - ${b}) + (${c * x} + ${d})<br>= ${lhs} + ${rhs} = <strong>${answer}</strong>`
                );
            }
        ]
    },

    geometry: {
        easy: [
            () => {
                const w = randInt(3, 15);
                const h = randInt(3, 15);
                return buildProblem(
                    `Find the area of a rectangle:<div class="math-expression">Width = ${w}, Height = ${h}</div>`,
                    w * h,
                    `Area = width × height = ${w} × ${h} = <strong>${w * h}</strong>`
                );
            },
            () => {
                const w = randInt(3, 12);
                const h = randInt(3, 12);
                const p = 2 * (w + h);
                return buildProblem(
                    `Find the perimeter of a rectangle:<div class="math-expression">Width = ${w}, Height = ${h}</div>`,
                    p,
                    `Perimeter = 2(w + h) = 2(${w} + ${h}) = 2(${w + h}) = <strong>${p}</strong>`
                );
            },
            () => {
                const b = randInt(4, 16);
                const h = randInt(3, 12);
                const area = (b * h) / 2;
                return buildProblem(
                    `Find the area of a triangle:<div class="math-expression">Base = ${b}, Height = ${h}</div>`,
                    area,
                    `Area = ½ × base × height = ½ × ${b} × ${h} = <strong>${area}</strong>`,
                    !Number.isInteger(area)
                );
            },
            () => {
                const a = randInt(30, 80);
                const b = randInt(30, 90);
                const c = 180 - a - b;
                return buildProblem(
                    `Two angles of a triangle are ${a}° and ${b}°. What is the third angle?<div class="math-expression">? °</div>`,
                    c,
                    `Sum of angles in a triangle = 180°<br>${a}° + ${b}° + ? = 180°<br>? = 180° - ${a}° - ${b}° = <strong>${c}°</strong>`
                );
            },
            () => {
                const s = randInt(3, 12);
                return buildProblem(
                    `Find the area of a square with side length ${s}:<div class="math-expression">Side = ${s}</div>`,
                    s * s,
                    `Area = side² = ${s}² = <strong>${s * s}</strong>`
                );
            }
        ],
        medium: [
            () => {
                const a = randInt(3, 12);
                const b = randInt(4, 15);
                const c = roundNice(Math.sqrt(a * a + b * b));
                return buildProblem(
                    `Find the hypotenuse of a right triangle:<div class="math-expression">a = ${a}, b = ${b}</div>`,
                    c,
                    `c² = a² + b² = ${a}² + ${b}² = ${a * a} + ${b * b} = ${a * a + b * b}<br>c = √${a * a + b * b} ≈ <strong>${c}</strong>`,
                    true
                );
            },
            () => {
                const r = randInt(2, 10);
                const area = roundNice(Math.PI * r * r);
                return buildProblem(
                    `Find the area of a circle (round to 2 decimal places):<div class="math-expression">Radius = ${r}</div>`,
                    area,
                    `Area = πr² = π × ${r}² = π × ${r * r} ≈ <strong>${area}</strong>`,
                    true
                );
            },
            () => {
                const r = randInt(2, 10);
                const circ = roundNice(2 * Math.PI * r);
                return buildProblem(
                    `Find the circumference of a circle (round to 2 decimal places):<div class="math-expression">Radius = ${r}</div>`,
                    circ,
                    `C = 2πr = 2 × π × ${r} ≈ <strong>${circ}</strong>`,
                    true
                );
            },
            () => {
                const c = randInt(5, 15);
                const a = randInt(3, c - 1);
                const bSquared = c * c - a * a;
                if (bSquared <= 0) return problemGenerators.geometry.medium[0]();
                const b = roundNice(Math.sqrt(bSquared));
                return buildProblem(
                    `A right triangle has hypotenuse ${c} and one leg ${a}. Find the other leg:<div class="math-expression">c = ${c}, a = ${a}, b = ?</div>`,
                    b,
                    `b² = c² - a² = ${c * c} - ${a * a} = ${bSquared}<br>b = √${bSquared} ≈ <strong>${b}</strong>`,
                    !Number.isInteger(b)
                );
            }
        ],
        hard: [
            () => {
                const r = randInt(2, 8);
                const h = randInt(5, 15);
                const vol = roundNice(Math.PI * r * r * h);
                return buildProblem(
                    `Find the volume of a cylinder (round to 2 decimal places):<div class="math-expression">Radius = ${r}, Height = ${h}</div>`,
                    vol,
                    `V = πr²h = π × ${r}² × ${h} = π × ${r * r} × ${h} ≈ <strong>${vol}</strong>`,
                    true
                );
            },
            () => {
                const s = randInt(2, 8);
                const sa = 6 * s * s;
                return buildProblem(
                    `Find the surface area of a cube:<div class="math-expression">Side = ${s}</div>`,
                    sa,
                    `Surface Area = 6s² = 6 × ${s}² = 6 × ${s * s} = <strong>${sa}</strong>`
                );
            },
            () => {
                const r = randInt(2, 8);
                const vol = roundNice((4 / 3) * Math.PI * r * r * r);
                return buildProblem(
                    `Find the volume of a sphere (round to 2 decimal places):<div class="math-expression">Radius = ${r}</div>`,
                    vol,
                    `V = (4/3)πr³ = (4/3) × π × ${r}³ ≈ <strong>${vol}</strong>`,
                    true
                );
            },
            () => {
                const scale = randInt(2, 5);
                const side = randInt(3, 10);
                const answer = side * scale;
                return buildProblem(
                    `Two similar triangles have a scale factor of ${scale}:1. If a side of the smaller triangle is ${side}, what is the corresponding side of the larger?<div class="math-expression">Scale = ${scale}:1, Side = ${side}</div>`,
                    answer,
                    `Corresponding side = ${side} × ${scale} = <strong>${answer}</strong>`
                );
            }
        ]
    },

    trigonometry: {
        easy: [
            () => {
                const angles = [
                    { deg: 30, sin: '0.5', cos: '0.87', tan: '0.58' },
                    { deg: 45, sin: '0.71', cos: '0.71', tan: '1' },
                    { deg: 60, sin: '0.87', cos: '0.5', tan: '1.73' }
                ];
                const a = pickRandom(angles);
                const func = pickRandom(['sin', 'cos', 'tan']);
                const correct = parseFloat(a[func]);
                return buildProblem(
                    `What is the value of (rounded to 2 decimal places)?<div class="math-expression">${func}(${a.deg}°)</div>`,
                    correct,
                    `${func}(${a.deg}°) = <strong>${correct}</strong><br>This is one of the special angle values to memorize.`,
                    true
                );
            },
            () => {
                const opp = randInt(3, 12);
                const hyp = randInt(opp + 1, opp + 10);
                const sinVal = roundNice(opp / hyp);
                return buildProblem(
                    `In a right triangle, the opposite side is ${opp} and the hypotenuse is ${hyp}. Find sin(θ):<div class="math-expression">sin(θ) = opposite / hypotenuse</div>`,
                    sinVal,
                    `sin(θ) = opposite / hypotenuse = ${opp} / ${hyp} ≈ <strong>${sinVal}</strong>`,
                    true
                );
            },
            () => {
                const adj = randInt(3, 12);
                const hyp = randInt(adj + 1, adj + 10);
                const cosVal = roundNice(adj / hyp);
                return buildProblem(
                    `In a right triangle, the adjacent side is ${adj} and the hypotenuse is ${hyp}. Find cos(θ):<div class="math-expression">cos(θ) = adjacent / hypotenuse</div>`,
                    cosVal,
                    `cos(θ) = adjacent / hypotenuse = ${adj} / ${hyp} ≈ <strong>${cosVal}</strong>`,
                    true
                );
            },
            () => {
                const opp = randInt(3, 10);
                const adj = randInt(3, 10);
                const tanVal = roundNice(opp / adj);
                return buildProblem(
                    `In a right triangle, the opposite side is ${opp} and the adjacent side is ${adj}. Find tan(θ):<div class="math-expression">tan(θ) = opposite / adjacent</div>`,
                    tanVal,
                    `tan(θ) = opposite / adjacent = ${opp} / ${adj} ≈ <strong>${tanVal}</strong>`,
                    true
                );
            }
        ],
        medium: [
            () => {
                const deg = pickRandom([30, 45, 60]);
                const hyp = randInt(5, 20);
                const sinVal = deg === 30 ? 0.5 : deg === 45 ? Math.SQRT2 / 2 : Math.sqrt(3) / 2;
                const opp = roundNice(hyp * sinVal);
                return buildProblem(
                    `Find the opposite side using sin(${deg}°):<div class="math-expression">Hypotenuse = ${hyp}, θ = ${deg}°</div>`,
                    opp,
                    `opposite = hypotenuse × sin(θ) = ${hyp} × sin(${deg}°) ≈ ${hyp} × ${roundNice(sinVal)} ≈ <strong>${opp}</strong>`,
                    true
                );
            },
            () => {
                const degs = pickRandom([30, 45, 60, 90, 120, 180, 270, 360]);
                const rads = { 30: 'π/6', 45: 'π/4', 60: 'π/3', 90: 'π/2', 120: '2π/3', 180: 'π', 270: '3π/2', 360: '2π' };
                const numericRad = roundNice(degs * Math.PI / 180);
                return buildProblem(
                    `Convert ${degs}° to radians (as a decimal, round to 2 places):<div class="math-expression">${degs}° = ? radians</div>`,
                    numericRad,
                    `Multiply by π/180:<br>${degs}° × π/180 = ${rads[degs]} ≈ <strong>${numericRad}</strong>`,
                    true
                );
            },
            () => {
                const angle = pickRandom([0, 30, 45, 60, 90]);
                const vals = { 0: { s: 0, c: 1 }, 30: { s: 0.5, c: 0.87 }, 45: { s: 0.71, c: 0.71 }, 60: { s: 0.87, c: 0.5 }, 90: { s: 1, c: 0 } };
                const v = vals[angle];
                const result = roundNice(v.s * v.s + v.c * v.c);
                return buildProblem(
                    `Evaluate sin²(${angle}°) + cos²(${angle}°):<div class="math-expression">sin²(${angle}°) + cos²(${angle}°) = ?</div>`,
                    1,
                    `By the Pythagorean identity, sin²(θ) + cos²(θ) = <strong>1</strong> for all θ. This is always true!`
                );
            },
            () => {
                const deg = pickRandom([30, 45, 60]);
                const adj = randInt(5, 20);
                const cosVal = deg === 30 ? Math.sqrt(3) / 2 : deg === 45 ? Math.SQRT2 / 2 : 0.5;
                const hyp = roundNice(adj / cosVal);
                return buildProblem(
                    `Find the hypotenuse given adjacent = ${adj} and θ = ${deg}°:<div class="math-expression">cos(${deg}°) = ${adj} / hypotenuse</div>`,
                    hyp,
                    `hypotenuse = adjacent / cos(θ) = ${adj} / cos(${deg}°) ≈ ${adj} / ${roundNice(cosVal)} ≈ <strong>${hyp}</strong>`,
                    true
                );
            }
        ],
        hard: [
            () => {
                const A = randInt(30, 80);
                const a = randInt(5, 15);
                const B = randInt(30, 120 - A);
                const b = roundNice(a * Math.sin(B * Math.PI / 180) / Math.sin(A * Math.PI / 180));
                return buildProblem(
                    `Using the Law of Sines, find side b:<div class="math-expression">A = ${A}°, a = ${a}, B = ${B}°</div><p>a/sin(A) = b/sin(B)</p>`,
                    b,
                    `b = a × sin(B) / sin(A)<br>b = ${a} × sin(${B}°) / sin(${A}°)<br>b ≈ ${a} × ${roundNice(Math.sin(B * Math.PI / 180))} / ${roundNice(Math.sin(A * Math.PI / 180))}<br>b ≈ <strong>${b}</strong>`,
                    true
                );
            },
            () => {
                const a = randInt(4, 12);
                const b = randInt(4, 12);
                const C = pickRandom([30, 45, 60, 90, 120]);
                const cSquared = a * a + b * b - 2 * a * b * Math.cos(C * Math.PI / 180);
                if (cSquared <= 0) return problemGenerators.trigonometry.hard[0]();
                const c = roundNice(Math.sqrt(cSquared));
                return buildProblem(
                    `Using the Law of Cosines, find side c:<div class="math-expression">a = ${a}, b = ${b}, C = ${C}°</div><p>c² = a² + b² - 2ab·cos(C)</p>`,
                    c,
                    `c² = ${a}² + ${b}² - 2(${a})(${b})cos(${C}°)<br>c² = ${a * a} + ${b * b} - ${2 * a * b} × ${roundNice(Math.cos(C * Math.PI / 180))}<br>c² ≈ ${roundNice(cSquared)}<br>c ≈ <strong>${c}</strong>`,
                    true
                );
            },
            () => {
                const val = pickRandom([0, 0.5, Math.SQRT2 / 2, Math.sqrt(3) / 2, 1]);
                const answers = { 0: 0, 0.5: 30, [Math.SQRT2 / 2]: 45, [Math.sqrt(3) / 2]: 60, 1: 90 };
                const deg = answers[val];
                return buildProblem(
                    `Find the angle in degrees:<div class="math-expression">arcsin(${roundNice(val)}) = ?°</div>`,
                    deg,
                    `arcsin(${roundNice(val)}) = <strong>${deg}°</strong><br>Because sin(${deg}°) = ${roundNice(val)}`
                );
            },
            () => {
                const angle = pickRandom([30, 45, 60]);
                const sinV = { 30: 0.5, 45: roundNice(Math.SQRT2 / 2), 60: roundNice(Math.sqrt(3) / 2) };
                const cosV = { 30: roundNice(Math.sqrt(3) / 2), 45: roundNice(Math.SQRT2 / 2), 60: 0.5 };
                const sin2 = roundNice(2 * sinV[angle] * cosV[angle]);
                return buildProblem(
                    `Using the double angle formula, find sin(2 × ${angle}°):<div class="math-expression">sin(2θ) = 2·sin(θ)·cos(θ)</div>`,
                    sin2,
                    `sin(2 × ${angle}°) = 2 × sin(${angle}°) × cos(${angle}°)<br>= 2 × ${sinV[angle]} × ${cosV[angle]}<br>= <strong>${sin2}</strong>`,
                    true
                );
            }
        ]
    }
};


function backToDashboardFromSummary() {
    hideAllViews();
    document.getElementById('main-view').classList.remove('hidden');
    showLearnView();
}

function hideAllViews() {
    const views = ['main-view', 'path-view', 'lesson-viewer', 'profile-view', 'leaderboard-view', 'practice-session', 'session-summary'];
    views.forEach(id => document.getElementById(id).classList.add('hidden'));
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
        loadPersistedState(); // restore missedQueue + dailyProgress from localStorage
        loadProfile(user.uid);
    } else {
        authContainer.classList.remove('hidden');
        dashboard.classList.add('hidden');
    }
});
