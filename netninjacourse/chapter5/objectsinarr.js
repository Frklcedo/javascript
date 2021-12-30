
// const blogs = [
//     {
//         title: 'some things in github',
//         likes:30
//     },
//     {
//         title: 'maybe i will thrive',
//         likes:50
//     },
// ];

let user = {
    name: 'frkl',
    age: 20,
    email: 'frkl@notmyemail.com',
    location: 'Brazil',
    blogs: [
        {
        title: 'some things in github',
        likes:30
        },
        {
        title: 'maybe i will thrive',
        likes:50
        }
    ],

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
            console.log(blog.title,blog.likes);
        })
    }
};

user.login();
user.logout();

user.logblocks();
// console.log(this); // global object