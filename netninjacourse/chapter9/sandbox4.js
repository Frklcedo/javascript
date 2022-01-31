const insertDiv = document.querySelector('.insert-here');
const products = [
    {name: 'gold star', price:30},
    {name:'green shell', price:10},
    {name:'red shell', price:40},
    {name:'banana skin',price: 5},
    {name:'mushroom',price:50}
];

// const filtered = products.filter( product => product.price > 20);

// const promos = filtered.map(product => {
//     return `the ${product.name} is R$${product.price / 2}`;
// });

// console.log(promos);
// promos.forEach(promo => {
//     insertDiv.innerHTML += '<p>' + promo + '</p>';
// });

// const promos = products.filter(products => products.price>20).map(product => `the ${product.name} is R$${product.price / 2}`); // the same thing
const promos = products
    .filter(products => products.price>20)
    .map(product => `the ${product.name} is R$${product.price / 2}`);

console.log(promos);
promos.forEach(promo => {
    insertDiv.innerHTML += '<p>' + promo + '</p>';
});