// Primitive values 

let score = 50;
let score1 = score;

console.log(`score = ${score},score1 = ${score1}`);
score = 100;
console.log(`score = ${score}, score1 = ${score1}`);

// Reference values 

const user = { name: 'Link', age:12};
const user1 = user;
console.log(user.name,user.age,user1.name,user1.age);

user.age = 18; 

console.log(user.name,user.age,user1.name,user1.age);