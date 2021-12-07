// object literals

let user = {
    name: 'frkl',
    age: 20,
    email: 'frkl@notmyemail.com',
    location: 'Brazil',
    blogs: ['some things in github', 'maybe i will thrive']
};

console.log(user);

console.log(user.name);
console.log(user.age);
user.age = 22;
console.log(user.age);

// or 

console.log(user['name']);
user['name'] = 'Frklcedo';
console.log(user['name']);

console.log(typeof user);