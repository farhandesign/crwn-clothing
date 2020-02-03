import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCrAbCGxFNvq3jvVd2u8LacmjdQNESgVzs",
    authDomain: "crwn-db-ed2f3.firebaseapp.com",
    databaseURL: "https://crwn-db-ed2f3.firebaseio.com",
    projectId: "crwn-db-ed2f3",
    storageBucket: "crwn-db-ed2f3.appspot.com",
    messagingSenderId: "704524281067",
    appId: "1:704524281067:web:3f3175518ec802ee404aae",
    measurementId: "G-FX0XNCM0SJ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
