const User = function(username){
    this.username = username;
    this.test = function(){
        console.log('this function is out of the prototype');
    }
} 
User.prototype.login = function(){
    console.log(`${this.username} has logged in`);
    return this;
}
User.prototype.logout = function(){
    console.log(`${this.username} has logged out`);
    return this;
}

function Admin(username, email){
    User.call(this, username);
    this.email = email;
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(){
    console.log('user deleted');
}

const userProt = new User('zelda');
const adminProt = new Admin('boss', 'bigboss@mgs.com');
console.log(userProt);
userProt.login();
userProt.logout();
userProt.test();
console.log(adminProt);
adminProt.deleteUser();