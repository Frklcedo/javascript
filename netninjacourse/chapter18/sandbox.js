// rest parameter
const double = (...nums) => { // useful when we don't know how many arguments we're gonna take in 
    console.log(nums);
    return nums.map(num => num*2);
}

const result = double(1,2,5,6,12,32,432,22,11);
console.log(result);

// spread syntax (arrays)

const people = ['frkl', 'zelda', 'aggro'];

console.log(...people);  // spread the values of an array into individual values 

const members = ['link', 'dk' , ...people];

console.log(members);

// spread syntax (objects)

const person = {
    name: 'frkl',
    age: 21,
    job: 'student'
}
console.log(person);

// const personClone = person;
const student = {
    ...person, // spreads out new attributes into a new object
    grades: [ 10, 8, 9 ]
}; // new object
console.log(student);