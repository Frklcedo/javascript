import firebase from 'firebase';

import 'firebase/compat/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB_1vSSQ-0ElTm-saXu6q0etiuxmO81Po4",
  authDomain: "fb-test-users-baca5.firebaseapp.com",
  projectId: "fb-test-users-baca5",
  storageBucket: "fb-test-users-baca5.appspot.com",
  messagingSenderId: "621470167656",
  appId: "1:621470167656:web:3b0b69b4117a70862081dd"
};

if(firebase.app.length === 0){
  // Initialize Firebase
  console.log(firebase.app)
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;