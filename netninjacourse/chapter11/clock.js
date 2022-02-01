
const dateDiv = document.querySelector('.date-func');

const tick = () => {

    const now = new Date();

    let h = now.getHours();
    let i = now.getMinutes();
    let s = now.getSeconds();

    if(h >= 0 && h<10) h = '0' + h;
    if(i >= 0 && i<10) i = '0' + i;
    if(s >= 0 && s<10) s = '0' + s;
    

    const html = `
        <span>${h}</span> :
        <span>${i}</span> :
        <span>${s}</span>
    `;

    dateDiv.innerHTML = html;

}

setInterval(tick,1000);