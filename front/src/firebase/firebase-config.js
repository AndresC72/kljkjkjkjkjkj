import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDGvfDE7nKSIBazRplYlb4BSIMmzMqsd0o",
    authDomain: "react-app-novoclick.firebaseapp.com",
    databaseURL: "https://react-app-novoclick.firebaseio.com",
    projectId: "react-app-novoclick",
    storageBucket: "react-app-novoclick.appspot.com",
    messagingSenderId: "1094210324364",
    appId: "1:1094210324364:web:1a2c4342a8ab9de5d9f8a9"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

  const auth = fire.auth();



  export {
      db,
      googleAuthProvider,
      facebookAuthProvider,
      firebase,
      auth
      
  }




