import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCmq1nH0b0vTYBGG--JKEHf-tS50x-TV0w",
  authDomain: "loginform-b5421.firebaseapp.com",
  projectId: "loginform-b5421",
  storageBucket: "loginform-b5421.firebasestorage.app",
  messagingSenderId: "195080773071",
  appId: "1:195080773071:web:a5614a297f7d50bf2b46ba"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("login").addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "profile-setup.html"; // Redirect to main page
    })
    .catch((error) => {
      alert(error.message);
    });
});
