const ul = document.querySelector('ul');
// list.remove();

const itens = document.querySelectorAll('li');
const button = document.querySelector('button');
const input = document.querySelector('input');

// itens.forEach(item => {
//     item.addEventListener('click',e =>{
//         console.log('event in LI');
//         e.stopPropagation(); // Stop event bubbling up
//         e.target.remove();
//     });
// });

button.addEventListener('click',() =>{
    if(input.value!=''){
        console.log(input.value);
        const li = document.createElement('li');
        li.textContent = input.value;
        ul.append(li);
        // ul.prepend(li);
    }
});

ul.addEventListener('click', e => {
    // console.log('event in UL'); // event bubbling test

    // event delegation 
    console.log(e.target);
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});