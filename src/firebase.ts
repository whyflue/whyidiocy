// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyBdVTPUeG56dKgINIajw3Y_y_FgIW29vZM",
  authDomain: "whysocium-alfa.firebaseapp.com",
  projectId: "whysocium-alfa",
  storageBucket: "whysocium-alfa.appspot.com",
  messagingSenderId: "17729361415",
  appId: "1:17729361415:web:8ff11368ee7fbe56d5bca2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();