const test0 = /[a-z]{6,}/;
const test1 = /^[a-z]{6,}$/;

let myname = 'Frklcedo';

let result = test0.test(myname);

console.log(myname,0,result);

result = test1.test(myname);

console.log(myname,1,result);

result = myname.search(test0);

console.log(myname,0,result);

result = myname.search(test1);

console.log(myname,1,result);

myname = 'frklcedo';

result = test0.test(myname);

console.log(myname,0,result);

result = test1.test(myname);

console.log(myname,1,result);

result = myname.search(test0);

console.log(myname,0,result);

result = myname.search(test1);

console.log(myname,1,result);

