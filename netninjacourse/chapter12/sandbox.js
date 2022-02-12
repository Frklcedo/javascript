// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log(2.5);
// },1000);

// console.log(3);
// console.log(4);

// async function
const getTodos = (callback) => {
    
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
    
    request.open('GET','https://jsonplaceholder.typicode.com/todos/');
    // request.open('GET','todos.json'); // Testing own json file
    
    request.send();

};

console.log(1);
console.log(2);
getTodos((error, data)=>{
    console.log('callback fired');
    // console.log(error,data);
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
});
console.log(3);
console.log(4);