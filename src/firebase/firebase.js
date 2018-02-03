import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCAnXthTgT0r5j8TLhTgZY3TxcBopa9_-o",
  authDomain: "react-firebase-authentic-c2ec3.firebaseapp.com",
  databaseURL: "https://react-firebase-authentic-c2ec3.firebaseio.com",
  projectId: "react-firebase-authentic-c2ec3",
  storageBucket: "react-firebase-authentic-c2ec3.appspot.com",
  messagingSenderId: "639371095633"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth
};
