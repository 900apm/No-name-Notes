import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDjNbpS_tx3IB1dX2VrokMCUUCh9ttZhPE",
  authDomain: "bookshelf-f0f48.firebaseapp.com",
  databaseURL: "https://bookshelf-f0f48.firebaseio.com",
  projectId: "bookshelf-f0f48",
  storageBucket: "bookshelf-f0f48.appspot.com",
  messagingSenderId: "675686978142"
};
firebase.initializeApp(config);

export default firebase;