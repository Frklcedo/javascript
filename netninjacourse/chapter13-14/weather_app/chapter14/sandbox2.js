const todos = [
    {text: 'play dark souls 3', author: 'frklcedo'},
    {text: 'pray to God everyday', author: 'ye'},
    {text: 'practice bass playing', author: 'davie'},
];

console.log(JSON.stringify(todos));

localStorage.setItem('todos',JSON.stringify(todos));

const stored = localStorage.getItem('todos');

console.log('stored',stored);

console.log('stored converted',JSON.parse(stored));