const msgs = document.querySelectorAll('p');

msgs.forEach(msg => {
    if(msg.textContent.indexOf('error')>=0){
        msg.classList.add('error');
    }
    else if(msg.innerText.indexOf('success')>=0){
        msg.classList.add('success');
    }
});

const title = document.querySelector('.title');
title.classList.toggle('title');
title.classList.toggle('title');