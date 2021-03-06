const getTodos = (resourse) => {

    return new Promise( (resolve, reject) => {

        const request = new XMLHttpRequest();
        
        request.addEventListener('readystatechange', () => {
            // console.log(request,request.readyState);
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if (request.readyState === 4){
                reject('error getting resource');
            }
        });
        
        request.open('GET',resourse);
        // request.open('GET','todos.json'); // Testing own json file
        
        request.send();

    });
        

};

getTodos('todos/link.json').then(data => {
    console.log('promise 1 resolved: ', data);
    return getTodos('todos/zelda.json');
}).then(data => {
    console.log('promise 2 resolved: ', data);
}).catch(error => {
    console.log('promise rejected:', error);
});