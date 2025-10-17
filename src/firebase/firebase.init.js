// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPhVxIwI1_Xnoo-PkdIUFzki3fUIl8sGg",
  authDomain: "fir-conceptual-1-bb4f5.firebaseapp.com",
  projectId: "fir-conceptual-1-bb4f5",
  storageBucket: "fir-conceptual-1-bb4f5.firebasestorage.app",
  messagingSenderId: "894519255247",
  appId: "1:894519255247:web:83fe5d49348dbeeeff57ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);