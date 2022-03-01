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
const list = document.querySelector('#ullist');
const form = document.querySelector('form');
const unsubbtn = document.querySelector('.unsub'); 

// list loading
const addRecipe = (recipe, id) => {
    let time = recipe.created_at.toDate();

    let html = `
        <li data-id="${id}">
            <div>${recipe.title}</div>
            <div>${time}</div>
            <button class="btn btn-danger btn-sm my-2">delete</button>
        </li>
    `;

    list.innerHTML += html;
}
const deleteRecipe = (id) => {
    const recipes = Array.from(list.children);
    // const recipes = document.querySelectorAll('li');
    console.log(recipes);
    recipes.forEach((recipe) => {
        if(recipe.getAttribute('data-id') === id){
            recipe.outerHTML = '';
            // recipe.remove();
        }
    });
}

// form submitting
form.addEventListener('submit', (e) => {
    const now = new Date();
    e.preventDefault();
    const recipe = {
        created_at: firebase.firestore.Timestamp.fromDate(now),
        title: e.target.recipe.value.trim()
    } 
    db.collection('recipes').add(recipe).then(() => {
        console.log('recipe added');
    }).catch((err) => {
        console.log(err);
    });
});

//// database collection
const unsub = db.collection('recipes').onSnapshot(snapshot => {
    console.log(snapshot.docChanges());
    snapshot.docChanges().forEach((change) => {
        const doc = change.doc;
        if(change.type === 'added'){
            addRecipe(doc.data(), doc.id);
        }
        else if (change.type === 'removed'){
            deleteRecipe(doc.id);
        }
    });
});
    // db.collection('recipes').get().then((snapshot) => {
    //     // When we have the data
    //     snapshot.docs.forEach(doc => {
    //         addRecipe(doc.data(),doc.id);
    //     });
    // }).catch((err) =>{
    //     console.log(err);
    // });

// list removing 
list.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON'){
        // e.target.parentElement.outerHTML = ''; // personal
        const id = e.target.parentElement.getAttribute("data-id");
        db.collection('recipes').doc(id).delete().then(() => {
            console.log('recipe deleted');
        });
    }
})

// unsub from database changes 
unsubbtn.addEventListener('click', () => {
    unsub();
    console.log('unsubscribed from collection changes');
});