// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwO2CWKGGAeCIVgdBKLVtPWASls0pjVfo",
    authDomain: "react-and-firebase-recap.firebaseapp.com",
    projectId: "react-and-firebase-recap",
    storageBucket: "react-and-firebase-recap.appspot.com",
    messagingSenderId: "249065750072",
    appId: "1:249065750072:web:11552b0be22af1adb0f0cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;