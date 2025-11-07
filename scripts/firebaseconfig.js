// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRdCg5-RInAMh9R4ilu_RkH22k73G_Gb8",
    authDomain: "testing-7a891.firebaseapp.com",
    projectId: "testing-7a891",
    storageBucket: "testing-7a891.firebasestorage.app",
    messagingSenderId: "1049880715319",
    appId: "1:1049880715319:web:fdb2431b280d8adb615fb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)