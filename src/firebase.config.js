// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhsxJ9O6WlFcRAB1wc12Tmg7g5SbJWxIw",
  authDomain: "simple-firebase-part-3.firebaseapp.com",
  projectId: "simple-firebase-part-3",
  storageBucket: "simple-firebase-part-3.appspot.com",
  messagingSenderId: "544612328854",
  appId: "1:544612328854:web:bf4530c102db062005a9b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;