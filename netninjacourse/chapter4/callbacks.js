// callbacks

const funcao = (call) => {
    let value = 50;
    call(value);
};

// funcao(function(value){
//     console.log(value*2);
// });

funcao(value => {
    console.log(value*2);
});

// foreach 

let names = ['Zelda', 'Link', 'Ganondorf', 'Ashen', 'Agro'];

// names.forEach((name, index)=> {
//     console.log(index, name);
// });

const sayName = (name, index) => {
    console.log(
        `${index} - >>> ${name}`
    );
}

names.forEach(sayName);