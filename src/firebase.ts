// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkrUP6BiIjJislV-KHjCib3AsUC9iICVY",
  authDomain: "whysocium.firebaseapp.com",
  projectId: "whysocium",
  storageBucket: "whysocium.appspot.com",
  messagingSenderId: "865342490148",
  appId: "1:865342490148:web:ef512dd100db9d83bcfab1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()