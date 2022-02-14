// async and await

const getTodos = async () => {

    const response = await fetch('todos/zeldas.json');

    if (response.status !== 200){
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();
    return data;
};

console.log(1);
console.log(2);
getTodos()
    .then(data => console.log('resolved', data))
    .catch(error => console.log('rejected', error.message));

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