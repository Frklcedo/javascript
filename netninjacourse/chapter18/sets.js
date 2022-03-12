const namesArray = ['frkl', 'zelda', 'frkl' , 'link'];
console.log(namesArray);

// Set list
//  Set lists doesn't allow duplicated values
// const namesSet = new Set(['frkl', 'zelda', 'frkl' , 'link']);
// const namesSet = new Set(namesArray);
// console.log(namesSet);

// turn set to arrays
// const uniqueArray = [...namesSet];

const uniqueArray = [...new Set(namesArray)];
console.log(uniqueArray);

// Set methods

const ages = new Set();

ages.add(20).add(25);
ages.add(30);
ages.add(30);
ages.delete(25);

console.log('ages ', ages);
console.log(ages.size);
console.log(ages.has(30),ages.has(25));

ages.clear();
console.log('ages ', ages);

const ninjas = new Set([
    { name: 'Frkl', age: 21},
    { name: 'Link', age: 18},
    { name: 'Gannon', age: 30},
]);

ninjas.forEach(ninja => console.log(ninja));