// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// import { getDatabase, get, ref, child } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";


// const firebaseConfig = {
//   apiKey: "AIzaSyCWNHZkGc_agFLtmpZ0GQvetHJEQFmJFV8",
//   authDomain: "proektoop.firebaseapp.com",
//   databaseURL: "https://proektoop-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "proektoop",
//   storageBucket: "proektoop.appspot.com",
//   messagingSenderId: "365758124261",
//   appId: "1:365758124261:web:c2287484940c45284c840c",
//   measurementId: "G-6FCW183K83"
// };


// const app = initializeApp(firebaseConfig);
// const db = getDatabase();
// const auth = getAuth(app);
// const dbref = ref(db);

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, get, ref, child } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
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
const dbref = ref(db);

const LogForm = document.getElementById("login-form");
const LogEmail = document.getElementById("login-email");
const LogPassword = document.getElementById("login-password");
const LogSubmit = document.getElementById("login-submit-btn");

let SignInUser = evt => {
  evt.preventDefault();

  signInWithEmailAndPassword(auth, LogEmail.value, LogPassword.value)
  .then((credentials) => {
    get(child(dbref, 'UsersAuthList/' + credentials.user.uid)).then((snapshot)=>{
      if(snapshot.exists){
        sessionStorage.setItem("user-info", JSON.stringify({
          firstname: snapshot.val().firstname,
          lastname: snapshot.val().lastname
        }))
        sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
        window.location.href = '../html/index.html';
      }
      else{
        console.log('snapshot doesnt exist')
      }
    })
    console.log(credentials)
  })
  .catch((error) => {
    alert(error.code);
    alert(error.message);
  })
}

LogForm.addEventListener('submit', SignInUser)


