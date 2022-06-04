// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log(2.5);
// },1000);

// console.log(3);
// console.log(4);

// async function
const getTodos = (resourse, callback) => {
        
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        // console.log(request,request.readyState);
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined,data);
        }
        else if (request.readyState === 4){
            callback('could not fetch the data',undefined);
        }
    });
    
    request.open('GET',resourse);
    // request.open('GET','todos.json'); // Testing own json file
    
    console.log(request);
    request.send();

};

console.log(1);
console.log(2);
getTodos('todos/zelda.json',(error, data)=>{
    console.log(data);
    getTodos('todos/link.json', (error,data) => {
        console.log(data);
    })
});
console.log(3);
console.log(4);