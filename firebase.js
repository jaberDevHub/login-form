// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD2w25UmXFmR7bnxgtX3yytBgOwqDuYgcY",
  authDomain: "social-media-ddb94.firebaseapp.com",
  projectId: "social-media-ddb94",
  storageBucket: "social-media-ddb94.firebasestorage.app",
  messagingSenderId: "985987459318",
  appId: "1:985987459318:web:a3a741545284cc92efa4d7",
  measurementId: "G-X5CJSY15RY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);