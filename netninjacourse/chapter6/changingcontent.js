const para = document.querySelector('p');

console.log(para.innerText);

para.innerText = 'far over the mist mountains cold...';
console.log(para.innerText);
para.innerText += 'Through dungeons deep and caverns old';
console.log(para.innerText);

const paras = document.querySelectorAll('p');
paras.forEach(para =>{
    console.log(para.innerText);
    para.innerText += ' badum';
});

const content = document.querySelector('.content');
console.log(content.innerHTML);
content.innerHTML = '<h2>New content available NOW</h2>';
console.log(content.innerHTML);

const people = [
    'Aragorn',
    'Legolas',
    'Gimli',
    'Gandalf',
    'Boromir',
    'Frodo',
    'Samwise',
    'Pinpin',
    'Meriadoc'
]
people.forEach(person => {
    content.innerHTML += `
        <p>${person}</p>
    `;
});