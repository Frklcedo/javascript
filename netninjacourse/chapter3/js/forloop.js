// for loops
// for(let i = 0; i<5; i++){
    // console.log('in loop: ' + i);
// }
// console.log('loop finished');

const names = ['Frank', 'ninja', 'js'];
for(let i = 0; i<names.length;i++){
    let html = `
    <div>
        ${names[i]}
    </div>
    `; 
    console.log(html);
}