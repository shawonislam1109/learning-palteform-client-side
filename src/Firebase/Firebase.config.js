// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId

    apiKey: "AIzaSyCddNgQyG8o0dRSqESezlUM39GmdEUe8nM",
    authDomain: "learning-platform-4eb1d.firebaseapp.com",
    projectId: "learning-platform-4eb1d",
    storageBucket: "learning-platform-4eb1d.appspot.com",
    messagingSenderId: "213456056181",
    appId: "1:213456056181:web:d19d85f388416c17a5ed3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }