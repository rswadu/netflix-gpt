// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO0k1m1Qi-Vps6SvHCwwwp0nHNsczmnQw",
  authDomain: "netflixgpt-88343.firebaseapp.com",
  projectId: "netflixgpt-88343",
  storageBucket: "netflixgpt-88343.appspot.com",
  messagingSenderId: "718397679478",
  appId: "1:718397679478:web:4b1e68f23aa90a0e6cfc57",
  measurementId: "G-NL7FR1STPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();