// get an element by id
let title = document.getElementById('page-title');
console.log(title);

// get element by their class name
let errors = document.getElementsByClassName('error');
console.log(errors); // html colection - foreach does not work 
console.log(errors[0]);

// get element by their tag name
let paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);