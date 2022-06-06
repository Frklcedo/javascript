import { initializeApp } from 'firebase/app';
import {
    getFirestore, collection, getDocs, onSnapshot,
    addDoc, deleteDoc, doc,
    query, where, orderBy, serverTimestamp,
    getDoc, updateDoc
} from 'firebase/firestore';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCQXSI3gIyJfO1tAJeqk8STA0qkautQeR8",
    authDomain: "fir-9-dojo-513a1.firebaseapp.com",
    projectId: "fir-9-dojo-513a1",
    storageBucket: "fir-9-dojo-513a1.appspot.com",
    messagingSenderId: "444535098778",
    appId: "1:444535098778:web:907726d862c60dc83bfe23"
};

// init firebase app
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()

//collection ref
const colRef = collection(db, 'books')

//get collection data
// getDocs(colRef).then((snapshot) => {
//     // console.log(snapshot.docs)
//     let books =[]
//     snapshot.docs.forEach((doc) => {
//         books.push({ ...doc.data(), id: doc.id })
//     })
//     console.log(books)
// }).catch(err => {
//     console.log(err)
// })


// queries
// const q = query(colRef, where("author", "==", "Aristofanes"), orderBy('title', 'asc'))
const q = query(colRef, orderBy('createdAt'))


//get realtime collection data
const unsubCol = onSnapshot(q, (snapshot) => {
    // console.log(snapshot.docs)
    let books =[]
    snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
})

// add documents
const addBookForm = document.querySelector('.add');
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault()
    addDoc(colRef, {
        title: addBookForm.title.value,
        author: addBookForm.author.value,
        createdAt : serverTimestamp()
    }).then(() => {
        addBookForm.reset()
    })
})

// deleting documents
const deleteBookForm = document.querySelector('.delete');
deleteBookForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const docRef = doc(db, 'books', deleteBookForm.id.value)

    deleteDoc(docRef).then(() => {
        deleteBookForm.reset()
    })
})

const updateBookForm = document.querySelector('.update');
updateBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const docRef = doc(db, 'books', updateBookForm.id.value)

    updateDoc(docRef, {
        title: 'the hobbit'
    }).then(() => {
        updateBookForm.reset()
    })
})

// get a single document
const docRef = doc(db, 'books', "RlHVnj8xhWszCz3u9iCG")

// getDoc(docRef).then(doc => {
//     console.log(doc.data(), doc.id)
// })

const unsubDoc = onSnapshot(docRef, (doc) => {
    console.log(doc.data(), doc.id)
})


// auth section
const signupForm = document.querySelector('.signup');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = signupForm.email.value
    const password = signupForm.password.value
    createUserWithEmailAndPassword(auth, email, password).then((cred) => {
        console.log('user created: ', cred.user )
    }).catch((err) => {
        console.log(err.message)
    })
})

// logging in and out
const logoutButton = document.querySelector('.logout');
logoutButton.addEventListener('click', (e) => {
    e.preventDefault()

    signOut(auth).then(() => {
        console.log("the user signed out");
    }).catch(err => {
        console.log(err.message)
    })
});

const loginForm = document.querySelector('.login');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    signInWithEmailAndPassword(auth, email, password).then(cred => {
        console.log('user logged in: ', cred.user)
        console.log( cred.user)
        loginForm.reset()
    }).catch(err => {
        console.log(err.message)
    })
})

//subscribing to auth changes
const unsubAuth = onAuthStateChanged(auth, (user) => {
    console.log('user status change changed:', user);
});

// unsubscribing from changes (auth/db)
const unsubButton = document.querySelector('.unsub');
unsubButton.addEventListener('click', () => {
    console.log('unsubscribing...')
    unsubCol()
    unsubDoc()
    unsubAuth()
})