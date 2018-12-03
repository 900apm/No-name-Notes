import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDcxNpHPNqbeDF6-dejHmE5Gu3bWfAj9Fk",
  authDomain: "no-name-notes.firebaseapp.com",
  databaseURL: "https://no-name-notes.firebaseio.com",
  projectId: "no-name-notes",
  storageBucket: "no-name-notes.appspot.com",
  messagingSenderId: "1018587907185"
};
firebase.initializeApp(config);

export default firebase;