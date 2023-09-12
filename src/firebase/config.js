// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "bandor-love",
  storageBucket: "bandor-love.appspot.com",
  messagingSenderId: "653515644838",
  appId: "1:653515644838:web:61cb997624070aba85b967"
};
// Initialize Firebase
initializeApp(firebaseConfig);