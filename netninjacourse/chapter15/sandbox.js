// Classes in JavaScript
class User {
    constructor(username, email){
        // set up properties 
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore(){
        this.score += 1;    
        console.log(`${this.username} has ${this.score} points`);
        // return used for method chaining
        return this;
    }
}

const userOne = new User('mario', 'mario-mariobros@nin.com');
const userTwo = new User('luigi', 'luigi-mariobros@nin.com');

console.log(userOne, userTwo);
userOne.login();
userOne.logout();
userTwo.login();
userOne.login().incScore().incScore().logout();