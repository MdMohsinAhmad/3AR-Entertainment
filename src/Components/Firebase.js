// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA2GwbjuqSkz9XchPPbPVnOP4tcgsoPNKI",
    authDomain: "ar-entertainment-15dc4.firebaseapp.com",
    projectId: "ar-entertainment-15dc4",
    storageBucket: "ar-entertainment-15dc4.appspot.com",
    messagingSenderId: "845244196186",
    appId: "1:845244196186:web:b8a82e7da6af4b368f3f63",
    measurementId: "G-9PER0KZQF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
const analytics = getAnalytics(app);
export { db };
export {auth}