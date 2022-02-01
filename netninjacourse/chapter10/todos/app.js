const add = document.querySelector('.add');
const todos = document.querySelector('.todos');
const search = document.querySelector('.search input');

// functions
const addTodo = function(value){
    const newTodo = document.createElement('li');
    newTodo.setAttribute('class','list-group-item d-flex justify-content-between align-items-center text-light');
    newTodo.innerHTML = `
    <span>${value.trim()}</span>
    <i class="fas fa-trash delete"></i>
    `;
    todos.append(newTodo);
}
const filterTodos = function(term){
    const filteredTodos = Array.from(todos.children);
    filteredTodos
        .filter(todo => {
            return !todo.textContent.toLowerCase().includes(term);
        }).forEach(todofiltered => {
            todofiltered.classList.add('filtered');
        });
    filteredTodos
        .filter(todo => {
            return todo.textContent.toLowerCase().includes(term);
        }).forEach(todofiltered => {
            todofiltered.classList.remove('filtered');
        });
}

// events
add.addEventListener('submit', e=>{
    e.preventDefault();
    if(e.target.add.value.length){
        addTodo(e.target.add.value);
    }
    add.reset();
});
todos.addEventListener('click', e => {
    e.stopPropagation();
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});
search.addEventListener('keyup', e => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});