// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw5o8vLAnCtkSD7Wn8vkvsvddnfBLcHtQ",
  authDomain: "react-notes-1f051.firebaseapp.com",
  projectId: "react-notes-1f051",
  storageBucket: "react-notes-1f051.appspot.com",
  messagingSenderId: "915667822523",
  appId: "1:915667822523:web:2b8ad12239910b2240869e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
