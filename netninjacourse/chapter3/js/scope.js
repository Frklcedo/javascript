// block scopes

let age = 30;

if(true){
    let age = 50;
    let name = "frkl";
    console.log('inside the block >>> ' + age, name);
    if(true){
        console.log('inside the second block >>> ' + age, name);
        var secondName = "cedo";
    }
}


console.log('Outside the block >>> ' + age, name, secondName);