import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBGxP2C4CgoRdsDJuTMcacyesr_8o11Ulg',
  authDomain: 'crwn-store-7a046.firebaseapp.com',
  projectId: 'crwn-store-7a046',
  storageBucket: 'crwn-store-7a046.appspot.com',
  messagingSenderId: '707551559442',
  appId: '1:707551559442:web:e4b329e857d5921a33fdcb',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
