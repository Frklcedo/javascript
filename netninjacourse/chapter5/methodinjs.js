

let user = {
    name: 'frkl',
    age: 20,
    email: 'frkl@notmyemail.com',
    location: 'Brazil',
    blogs: ['some things in github', 'maybe i will thrive'],

    // methods
    login: function(){
        console.log('The user has logged in');
    },
    logout(){ // same thing as logout: function(){
        console.log('The user has logged out');
    },
    logblocks(){
        // console.log(this); //show local object
        console.log(this.name + ' has written:');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

user.login();
user.logout();

user.logblocks();
// console.log(this); // global object