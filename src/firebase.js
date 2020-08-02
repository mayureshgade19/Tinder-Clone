import  firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBFKtobLzQPC_49HRhSMZNmrAk1NMoa0Ls",
    authDomain: "tinder-clone-d97aa.firebaseapp.com",
    databaseURL: "https://tinder-clone-d97aa.firebaseio.com",
    projectId: "tinder-clone-d97aa",
    storageBucket: "tinder-clone-d97aa.appspot.com",
    messagingSenderId: "980027277900",
    appId: "1:980027277900:web:585b3a0cf6cd25abbfaae9",
    measurementId: "G-GG22NJQPWT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;