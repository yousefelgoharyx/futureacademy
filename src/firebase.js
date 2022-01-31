import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyATAGBOne2Arrvg4dX3lPu7umlcITujfFg",
    authDomain: "futureacademy-38b54.firebaseapp.com",
    projectId: "futureacademy-38b54",
    storageBucket: "futureacademy-38b54.appspot.com",
    messagingSenderId: "644070587896",
    appId: "1:644070587896:web:a3be2eb7d644b5f4d9aa0d",
    measurementId: "G-PYEZN91J9N",
};

let Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
