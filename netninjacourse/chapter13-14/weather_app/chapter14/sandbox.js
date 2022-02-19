// localStorage

console.log(localStorage);

// adding Items to localStorage

localStorage.setItem('name','Zelda');
localStorage.setItem('age',20);

// getting localStorage Data from the page

let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name,age);
console.log(localStorage);

// updating items

localStorage.setItem('name','link');
localStorage.age = 21;
name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name,age);
console.log(localStorage);

// deleting items 

localStorage.removeItem('age');
console.log(localStorage);
localStorage.clear();
console.log(localStorage);