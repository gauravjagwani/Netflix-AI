// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTjeInPUfqLTK633opEcy75MliAXC6B90",
  authDomain: "netflix-ai-f6543.firebaseapp.com",
  projectId: "netflix-ai-f6543",
  storageBucket: "netflix-ai-f6543.appspot.com",
  messagingSenderId: "42653664329",
  appId: "1:42653664329:web:e6c3da4b406686220b2b98",
  measurementId: "G-HBX8HVP21M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
