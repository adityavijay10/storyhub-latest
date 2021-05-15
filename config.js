import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAmeJeTxQirR8gVszGgYylhxgOoyokVUQ0",
    authDomain: "story-hub-ecb85.firebaseapp.com",
    projectId: "story-hub-ecb85",
    storageBucket: "story-hub-ecb85.appspot.com",
    messagingSenderId: "746451987495",
    appId: "1:746451987495:web:7b7bb0008f32259e5b3202",
    measurementId: "G-PME2GS5WP8"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
