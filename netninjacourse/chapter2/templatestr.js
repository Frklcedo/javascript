// template strings - template literal
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatenation way
    // let result = 'The blog called "' + title + '" by ' + author + ' has ' + likes + ' likes'
    // console.log(result);
 
// template string way
// let result = `The blog called "${title}" by ${author} has ${author} likes`;
// console.log(result);

// creating HTML templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;
console.log(html);