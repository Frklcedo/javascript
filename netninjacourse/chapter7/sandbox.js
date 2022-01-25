const unamePattern = /^[a-zA-Z]{6,}$/;
const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback-info');
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(username.value); // used for the constant username

    // reference obtained based on either id or name html attributes
    console.log(e.target.username.value);
    console.log(form.username.value);

    // validation
    const username = form.username.value;
    const p = document.createElement('p');
    p.textContent = '';
    p.style.textAlign = 'center';
    let result = unamePattern.test(username);
    if(result){
        form.username.setAttribute('class', 'success');
        p.style.color = 'forestgreen';
        p.textContent = 'This username is valid';
    }
    else{
        form.username.setAttribute('class', 'error');
        console.log(result);
        p.style.color = 'crimson';
        p.textContent = 'username must have only letters and be atleast 6 characters long';
    }
    feedback.innerHTML = p.outerHTML;
    console.log(p.outerHTML);
})

// live feedback

form.username.addEventListener('keyup',e => {
    console.log(e.target.value, form.username.value);   // exactly the same thing

    if(e.target.value != ''){
        const result = unamePattern.test(e.target.value);
        if(result){
            form.username.style.color = 'forestgreen';
            form.username.style.fontWeight = '';
        }
        else{
            form.username.style.color = 'crimson';
            form.username.style.fontWeight = 'bold';
        }
    }
    else{
            form.username.style.color = '';
            form.username.style.fontWeight = '';
    }
});