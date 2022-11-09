import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBqDgBcTBwDwxno3isTCagDCPBZAdqMee8",
  authDomain: "practice-57ed8.firebaseapp.com",
  projectId: "practice-57ed8",
  storageBucket: "practice-57ed8.appspot.com",
  messagingSenderId: "194515576058",
  appId: "1:194515576058:web:923e8a5d98affbb6765543",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
