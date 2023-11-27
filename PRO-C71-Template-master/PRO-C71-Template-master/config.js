import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyD0msOWxD5ydhYfNBiBlfDpRFXvcI3JKDs",
    authDomain: "e-ride-bda85.firebaseapp.com",
    projectId: "e-ride-bda85",
    storageBucket: "e-ride-bda85.appspot.com",
    messagingSenderId: "1034084820992",
    appId: "1:1034084820992:web:b456e86c9803cfe9b590e5"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
