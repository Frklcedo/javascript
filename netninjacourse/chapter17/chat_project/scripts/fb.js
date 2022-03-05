const firebaseConfig = {
    apiKey: "AIzaSyBdgylqs-heteAPUcZBxW8lqplrVad99BI",
    authDomain: "frkl-practice.firebaseapp.com",
    projectId: "frkl-practice",
    storageBucket: "frkl-practice.appspot.com",
    messagingSenderId: "31073850148",
    appId: "1:31073850148:web:ef88238e6aa80d6bbf99b1",
    measurementId: "G-Q0RP662R3M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();