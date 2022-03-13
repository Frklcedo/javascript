const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');

console.log(symbolOne, typeof symbolOne);
console.log(symbolTwo, typeof symbolTwo);

console.log(symbolOne === symbolTwo);
console.log(symbolOne == symbolTwo);

const ninja = {};

ninja.age = 30;
ninja['belt'] = 'orange';
console.log(ninja);
ninja['belt'] = 'black';
console.log(ninja);
ninja[symbolOne] = 'ryu';
ninja[symbolTwo] = 'ken';
console.log(ninja);