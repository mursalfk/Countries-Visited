// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import getAuth
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBhGb_5rQeHqMiQIf-SzWzSE7Skxi4BVE",
  authDomain: "traveleeper.firebaseapp.com",
  projectId: "traveleeper",
  storageBucket: "traveleeper.appspot.com",
  messagingSenderId: "142520451794",
  appId: "1:142520451794:web:1aadb484d631fd24bb230b",
  measurementId: "G-5J38HXX9TC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app); // Initialize Firebase Authentication

export { db, auth };