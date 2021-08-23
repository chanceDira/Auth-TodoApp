import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAzZphQZdnI8ZGkMcImT71zwdyqT0mCwDA",
    authDomain: "to-do-rwcode.firebaseapp.com",
    projectId: "to-do-rwcode",
    storageBucket: "to-do-rwcode.appspot.com",
    messagingSenderId: "986334847999",
    appId: "1:986334847999:web:1f5dd1ec1c4f71663e3dca"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const db = firebase.firestore();
  export { auth, db }