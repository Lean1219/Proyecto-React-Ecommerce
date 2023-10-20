// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvksr_fpfAQRuzo9GeYe-2MZ0w0qusnK4",
    authDomain: "proyecto-react-3824a.firebaseapp.com",
    projectId: "proyecto-react-3824a",
    storageBucket: "proyecto-react-3824a.appspot.com",
    messagingSenderId: "978753566284",
    appId: "1:978753566284:web:66319fa2de4d56135aa6e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);