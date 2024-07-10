// src/firebase.js
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBERuamswbIgYAAuPhrqfTV4wIh9Y9rneA",
  authDomain: "internettechnologien-27dcc.firebaseapp.com",
  databaseURL: "https://internettechnologien-27dcc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "internettechnologien-27dcc",
  storageBucket: "internettechnologien-27dcc.appspot.com",
  messagingSenderId: "408914822966",
  appId: "1:408914822966:web:8ce31e235b3dc390c35597"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
