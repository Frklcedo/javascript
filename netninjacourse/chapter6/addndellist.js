const ul = document.querySelector('ul');
// list.remove();

const itens = document.querySelectorAll('li');
const button = document.querySelector('button');
const input = document.querySelector('input');

itens.forEach(item => {
    item.addEventListener('click',e =>{
        e.target.remove();
    });
});

button.addEventListener('click',() =>{
    if(input.value!=''){
        console.log(input.value);
        const li = document.createElement('li');
        li.textContent = input.value;
        li.addEventListener('click',e =>{
            e.target.remove();
        });
    ul.append(li);
    // ul.prepend(li);
    }
});