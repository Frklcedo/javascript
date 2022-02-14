// fetch api

fetch('todos/link.json').then((response) => {
    console.log(response.status);
    console.log('resolved ', response);
    return response.json();
}).then((data => {
    console.log(data);
})).catch((error) => {
    console.log('rejected ', error);
});