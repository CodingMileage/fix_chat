// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADARiInqYoWVAyjzy08oTlpSyqrxnQaHo",
  authDomain: "fixchat-d196b.firebaseapp.com",
  projectId: "fixchat-d196b",
  storageBucket: "fixchat-d196b.appspot.com",
  messagingSenderId: "924869997456",
  appId: "1:924869997456:web:28286b3c32f94ee84fb915",
  measurementId: "G-7PKX25K8PN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);