import {addTitle, styleBody, contact} from './dom';
// import test from './data'; // you can use any name you want for the default value
import users, {getPremiums} from './data';

styleBody();
addTitle('Hello World from the dom.js file');
console.log(contact);

console.log(users);
const premUsers = getPremiums(users);
console.log(premUsers);
// const greet = (name) => {
//     console.log(`Hello ${name}`);
// };

// greet('mario');
// greet('luigi');
// greet('link');