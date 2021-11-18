// Functions in actions
const ul = document.querySelector('.people');

const people = ['Zelda', 'Link', 'Ganondorf', 'Ashen', 'Agro'];

let html = ``;

people.forEach(person => {
    // create html template
    html += `<li>${person}</li>`;
});

console.log(html);

ul.innerHTML = html;