// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqDgBcTBwDwxno3isTCagDCPBZAdqMee8",
  authDomain: "practice-57ed8.firebaseapp.com",
  projectId: "practice-57ed8",
  storageBucket: "practice-57ed8.appspot.com",
  messagingSenderId: "194515576058",
  appId: "1:194515576058:web:923e8a5d98affbb6765543",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
