
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvDiI_aVawmwFGKQAx2XpefBRygHROlQI",
    authDomain: "g-mail-clone-15af5.firebaseapp.com",
    projectId: "g-mail-clone-15af5",
    storageBucket: "g-mail-clone-15af5.appspot.com",
    messagingSenderId: "132971567885",
    appId: "1:132971567885:web:e9812cc961002f40faae44",
    measurementId: "G-Q4ZQLGCPDY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, provider }

