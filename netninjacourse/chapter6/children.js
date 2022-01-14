const parent = document.querySelector('article');

console.log(parent.children);
console.log(Array.from(parent.children));
console.log(parent.children);

Array.from(parent.children).forEach((kid) => {
    kid.classList.add('article-element');
});

const articlet = document.querySelector('h2');

console.log(articlet.parentElement);
console.log(articlet.parentElement.parentElement);
console.log(articlet.nextElementSibling);
console.log(articlet.previousElementSibling);

// Chaining (probably impossible to happen)
console.log(articlet.nextElementSibling.parentElement.children);