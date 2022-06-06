import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB_1vSSQ-0ElTm-saXu6q0etiuxmO81Po4",
  authDomain: "fb-test-users-baca5.firebaseapp.com",
  projectId: "fb-test-users-baca5",
  storageBucket: "fb-test-users-baca5.appspot.com",
  messagingSenderId: "621470167656",
  appId: "1:621470167656:web:3b0b69b4117a70862081dd"
};

const fb = initializeApp(firebaseConfig)

// inicializando servidores
const db = getFirestore()
const auth = getAuth()

// referencia da collection
const colRef = collection(db, 'usuarios')

export { fb as default, db, auth, colRef};