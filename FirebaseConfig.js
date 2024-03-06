// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPlGQKjE6YBjizHLxI2pEMPOOKSXVB7R0",
  authDomain: "muvidb-dbe85.firebaseapp.com",
  projectId: "muvidb-dbe85",
  storageBucket: "muvidb-dbe85.appspot.com",
  messagingSenderId: "539950300753",
  appId: "1:539950300753:web:3d41dc59a13d87fe234270"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH= getAuth(FIREBASE_APP)