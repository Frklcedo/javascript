const now = new Date();
const randomDay = new Date(4134325439);

console.log(dateFns.isToday(now));
console.log(dateFns.isToday(randomDay));

console.log(dateFns.format(now,'YYYY'));
console.log(dateFns.format(now,'MMMM'));
console.log(dateFns.format(now,'MMM'));
console.log(dateFns.format(now,'MM'));
console.log(dateFns.format(now,'dddd'));
console.log(dateFns.format(now,'Do'));
console.log(dateFns.format(now,'MMMM, Do YYYY.'));

// comparing dates

const before = new Date('February 1 2022 7:30:59');
console.log(dateFns.distanceInWords(now,before));
console.log(dateFns.distanceInWords(now,before, {addSuffix: true}));