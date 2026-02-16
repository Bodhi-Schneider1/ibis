// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

// Your Firebase configuration
// TODO: Replace this with your actual Firebase config from Firebase Console
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Make functions globally available
window.signup = signup;
window.login = login;
window.logout = logout;
window.toggleForms = toggleForms;

// Sign Up Function
function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const errorMessage = document.getElementById('error-message');

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Account created successfully
            console.log('User created:', userCredential.user);
            errorMessage.textContent = '';
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
            // Logged in successfully
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
    const userEmailSpan = document.getElementById('user-email');

    if (user) {
        // User is logged in
        authContainer.classList.add('hidden');
        dashboard.classList.remove('hidden');
        userEmailSpan.textContent = user.email;
    } else {
        // User is logged out
        authContainer.classList.remove('hidden');
        dashboard.classList.add('hidden');
    }
});
