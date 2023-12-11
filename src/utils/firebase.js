// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsQNpu32Qdgk5F9z2NA3mkIhyiuYdQA0o",
  authDomain: "netflix-gpt-6e158.firebaseapp.com",
  projectId: "netflix-gpt-6e158",
  storageBucket: "netflix-gpt-6e158.appspot.com",
  messagingSenderId: "147014745931",
  appId: "1:147014745931:web:3b5b15adab77a3953232ce",
  measurementId: "G-QHWPQRHP6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();