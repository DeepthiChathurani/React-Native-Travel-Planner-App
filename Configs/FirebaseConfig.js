// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDuu8ROdDmUBiFK5EYyjPsdX_BBsvDWSLs",
    authDomain: "travel-planner-app-c3acb.firebaseapp.com",
    projectId: "travel-planner-app-c3acb",
    storageBucket: "travel-planner-app-c3acb.appspot.com",
    messagingSenderId: "336162539909",
    appId: "1:336162539909:web:241f9ef18dc11c96cfdcec",
    measurementId: "G-PTGCY9EFTP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
