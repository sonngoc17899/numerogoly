import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyC6L5xdwuEC_iXcT5u8Ov69YHzqQfmlkQc",
    authDomain: "numerogoly.firebaseapp.com",
    projectId: "numerogoly",
    storageBucket: "numerogoly.appspot.com",
    messagingSenderId: "1040017026970",
    appId: "1:1040017026970:web:b13822d325d13f391c9423"
  };
  firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const firebaseAuth = firebase.auth();