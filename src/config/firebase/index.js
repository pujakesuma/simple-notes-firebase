import firebase from 'firebase/app'
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyBGTZRAGVtpOWou5-FoeptzVFow9uRW9Cs",
    authDomain: "simpel-notes-firebase-2cae2.firebaseapp.com",
    databaseURL: "https://simpel-notes-firebase-2cae2.firebaseio.com",
    projectId: "simpel-notes-firebase-2cae2",
    storageBucket: "simpel-notes-firebase-2cae2.appspot.com",
    messagingSenderId: "179141767460",
    appId: "1:179141767460:web:89412027520ada6a47c3b1",
    measurementId: "G-32E2GTWN6Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase