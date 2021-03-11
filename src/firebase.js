// global js file so firebase can be called anywhere in the project
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
    apiKey: "AIzaSyDP7HDZk3P3OwsRb3lr9Ozb8b0e2AzwGy0",
    authDomain: "watch-list-a77d4.firebaseapp.com",
    projectId: "watch-list-a77d4",
    storageBucket: "watch-list-a77d4.appspot.com",
    messagingSenderId: "624200194514",
    appId: "1:624200194514:web:98aa5b6362af2b912f100b",
    measurementId: "G-7YS06WY7MS"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;