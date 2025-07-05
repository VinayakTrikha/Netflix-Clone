// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ5RJMQaU-xVm7_1VweA6NEeC_n5fXQ3A",
  authDomain: "netflixgpt-c3a2e.firebaseapp.com",
  projectId: "netflixgpt-c3a2e",
  storageBucket: "netflixgpt-c3a2e.firebasestorage.app",
  messagingSenderId: "304151818264",
  appId: "1:304151818264:web:71af4a02cee69c9322d36d",
  measurementId: "G-52HBZEGWF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();