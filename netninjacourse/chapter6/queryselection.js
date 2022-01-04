const para = document.querySelector('p');
console.log(para);

const para2 = document.querySelector('.error');
console.log(para2);

const paras = document.querySelectorAll('p');
console.log(paras);
console.log(paras[1]);
paras.forEach( (paraUnique,index) => {
    console.log(index, '=>', paraUnique);
});