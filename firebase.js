// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyCmq1nH0b0vTYBGG--JKEHf-tS50x-TV0w",
  authDomain: "loginform-b5421.firebaseapp.com",
  projectId: "loginform-b5421",
  storageBucket: "loginform-b5421.firebasestorage.app",
  messagingSenderId: "195080773071",
  appId: "1:195080773071:web:a5614a297f7d50bf2b46ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  // inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;



  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("creating account")
      window.location.href = "main.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });

})