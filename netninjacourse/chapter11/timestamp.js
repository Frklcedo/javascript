const dateDiv = document.querySelector('.date-func');
const divFormat = function(func, date){
    const p = document.createElement('p');
    p.textContent = `${func}: ${date}`;
    dateDiv.prepend(p);
}
// timestamp

const before = new Date('February 1 2022 7:30:59');
const now = new Date();

console.log(now, before);
console.log(now.getTime(), before.getTime());
const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round( diff / 1000 / 60);
console.log(mins);
const hours = Math.round( mins / 60);
divFormat('Esse estudo de date() em JS começou em', hours + ' horas atrás');

const days = Math.round(hours/ 24);
divFormat('Esse estudo de date() em JS começou', days + ' dias atrás');