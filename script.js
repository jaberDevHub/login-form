// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  
  // Register User Function
  async function registerUser() {
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
  
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
  
      // Store user data in Firestore
      await db.collection("users").doc(user.uid).set({
        email: user.email,
        username: email.split('@')[0],  // Default username is the part before '@'
      });
  
      alert("Registration successful! You are now logged in.");
      showWelcomeScreen(user.uid);
    } catch (error) {
      alert("Error: " + error.message);
    }
  }
  
  // Login User Function
  async function loginUser() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
  
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
  
      alert("Login successful! Welcome back.");
      showWelcomeScreen(user.uid);
    } catch (error) {
      alert("Error: " + error.message);
    }
  }
  
  // Show Welcome Screen Function
  async function showWelcomeScreen(uid) {
    // Get user data from Firestore
    const userDoc = await db.collection("users").doc(uid).get();
    if (userDoc.exists) {
      const userData = userDoc.data();
      document.getElementById("displayName").innerText = userData.username;
  
      // Show Welcome Screen and hide other screens
      document.getElementById("welcomeContainer").style.display = "block";
      document.getElementById("loginContainer").style.display = "none";
      document.getElementById("registerContainer").style.display = "none";
    }
  }
  
  // Logout User Function
  function logoutUser() {
    auth.signOut().then(() => {
      alert("Logged out successfully.");
      showLoginScreen();
    }).catch((error) => {
      alert("Error: " + error.message);
    });
  }
  
  // Show Login Screen
  function showLoginScreen() {
    document.getElementById("loginContainer").style.display = "block";
    document.getElementById("registerContainer").style.display = "none";
    document.getElementById("welcomeContainer").style.display = "none";
  }
  
  // Show Register Screen
  function showRegisterScreen() {
    document.getElementById("registerContainer").style.display = "block";
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("welcomeContainer").style.display = "none";
  }
  
  // Check if user is already logged in
  auth.onAuthStateChanged(function(user) {
    if (user) {
      showWelcomeScreen(user.uid);
    } else {
      showLoginScreen();
    }
  });
  