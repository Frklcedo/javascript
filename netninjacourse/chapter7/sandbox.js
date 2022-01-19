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
    const pattern = /^[a-zA-Z]{6,}$/;
    const p = document.createElement('p');
    p.textContent = '';
    p.style.textAlign = 'center';
    let result = pattern.test(username);
    if(result){
        form.username.classList.add('success');
        form.username.classList.remove('error');
        p.style.color = 'forestgreen';
        p.textContent = 'This username is valid';
    }
    else{
        form.username.classList.add('error');
        form.username.classList.remove('success');
        console.log(result);
        p.style.color = 'crimson';
        p.textContent = 'username must have only letters and be atleast 6 characters long';
    }
    feedback.innerHTML = p.outerHTML;
    console.log(p.outerHTML);
})