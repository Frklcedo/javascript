const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.youtube.com/c/TheNetNinja/playlists');
link.innerText = link.innerText.slice(0,link.innerText.indexOf('google')) + "net ninja's channel";
console.log(link.getAttribute('href'));

const validMsg = document.querySelector('.error');

validMsg.setAttribute('class', 'success');
validMsg.setAttribute('style','color: green');

// Changing css

console.log(validMsg.style);

validMsg.style.margin = '20px';
validMsg.style.color = 'darkgreen';
validMsg.style.fontWeight = 'bold';
console.log(validMsg.style);
validMsg.style.margin = '';