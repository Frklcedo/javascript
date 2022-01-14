const button = document.querySelector('button');

button.addEventListener('click',() => {
    console.log("You've clicked me");
});

const list = document.querySelectorAll('li');

list.forEach(item => {
   item.addEventListener('click',(e) => {
        // console.log(`'${item.innerText}' clicked`);
        // console.log(e);    
        // console.log(e.target);    
        // console.log(item);    
        e.target.style.textDecoration = 'line-through'
   });
});