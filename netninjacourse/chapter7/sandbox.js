const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(username.value); // used for the constant username

    // reference obtained based on either id or name html attributes
    console.log(e.target.username.value);
    console.log(target.username.value);
})