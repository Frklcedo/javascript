const copy = document.querySelector('.copy-me');

copy.addEventListener('copy',e => {
    console.log('Copyright alert');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
    // console.log(e);
    // console.log(e.offsetX, e.offsetY);
    box.textContent = "( x = " + e.offsetX + ", y = " + e.offsetY + " )";
});

document.addEventListener('wheel', e => {
    // console.log(e);
    console.log(e.pageX, e.pageY);
});