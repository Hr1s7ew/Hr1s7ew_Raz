// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU79YmPB2WUCZbUBvt76EK6IKsygamekM",
  authDomain: "hristew-18941.firebaseapp.com",
  projectId: "hristew-18941",
  storageBucket: "hristew-18941.appspot.com",
  messagingSenderId: "844590791698",
  appId: "1:844590791698:web:e57b9ffe3b6a0e32b6eccb",
  measurementId: "G-M9RVDL9CBE",
  databaseURL: 'https://hristew-18941-default-rtdb.europe-west1.firebasedatabase.app'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);

const RegForm = document.getElementById("register-form");
const RegFName = document.getElementById("register-first-name");
const RegLName = document.getElementById("register-last-name");
const RegEmail = document.getElementById("register-email");
const RegPassword = document.getElementById("register-password");
const RegSubmit = document.getElementById("register-submit-btn");

let RegisterUser = evt => {
  evt.preventDefault();

  createUserWithEmailAndPassword(auth, RegEmail.value, RegPassword.value)
  .then((credentials) => {
    set(ref(db, 'UsersAuthList/' + credentials.user.uid), {
      firstname: RegFName.value,
      lastname: RegLName.value
    })
  })
  .catch((error) => {
    alert(error.code);
    alert(error.message);
  })
}

RegForm.addEventListener('submit', RegisterUser)