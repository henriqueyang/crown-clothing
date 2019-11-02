import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD7UJGPIGhIZNTRvGtnT2StaT2XFHN6yVg',
  authDomain: 'crown-db-cd601.firebaseapp.com',
  databaseURL: 'https://crown-db-cd601.firebaseio.com',
  projectId: 'crown-db-cd601',
  storageBucket: 'crown-db-cd601.appspot.com',
  messagingSenderId: '465254255206',
  appId: '1:465254255206:web:3a12b8b0cb8c755b127ba7',
  measurementId: 'G-J6ZEDF5EMG',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
