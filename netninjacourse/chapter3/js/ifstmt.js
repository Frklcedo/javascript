// if statements
const age = 25;

if(age > 20){
    console.log('you are over 20 years old ');
}

const password = "passsssw@sas";
if(password.length >= 12 && password.includes('@')){
    console.log('your password is super strong');

}
else if(password.length >= 8 || password.includes('@') && password.length >5){
    console.log('your password is strong enough');
}
else{
    console.log('your password is too weak');
}

console.log(false);
console.log(!false);
console.log(!true);
console.log(true);