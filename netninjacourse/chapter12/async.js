// async and await

const getTodos = async () => {

    const response = await fetch('todos/zelda.json');
    const data = await response.json();
    console.log(data);
    return data;
};

console.log(1);
console.log(2);
getTodos()
    .then(data => console.log('resolved', data));

console.log(3);
console.log(4);
// fetch api

// fetch('todos/link.json').then((response) => {
//     console.log(response.status);
//     console.log('resolved ', response);
//     return response.json();
// }).then((data => {
//     console.log(data);
// })).catch((error) => {
//     console.log('rejected ', error);
// });