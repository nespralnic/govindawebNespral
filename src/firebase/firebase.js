// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBAY9vZ5tY5lyv99xiMU6d9arjcDlr1tM",
  authDomain: "govindaweb-ef02f.firebaseapp.com",
  projectId: "govindaweb-ef02f",
  storageBucket: "govindaweb-ef02f.appspot.com",
  messagingSenderId: "804571280087",
  appId: "1:804571280087:web:a2c6913e08783fdcd2b692"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);