const list = document.querySelector('ul');
// list.remove();

const itens = document.querySelectorAll('li');
const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click',() =>{
    if(input.value!=''){
        const li = document.createElement('li');
        li.textContent =input.value;
        li.addEventListener('click',e =>{
        e.target.remove();
    });
        list.append(li);
        // list.prepend(li);
    }
});
itens.forEach(item => {
    item.addEventListener('click',e =>{
        e.target.remove();
    });
});
