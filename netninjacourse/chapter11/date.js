const dateDiv = document.querySelector('.date-func');
const divFormat = function(func, date){
    const p = document.createElement('p');
    p.textContent = `${func}: ${date}`;
    dateDiv.prepend(p);
}

// dates & time
const now = new Date();

console.log(now);
console.log(typeof now);

// years months days & times
divFormat('getFullYear', now.getFullYear());
divFormat('getMonth', now.getMonth());
divFormat('getDate', now.getDate());
divFormat('getDay', now.getDay());
divFormat('getHours', now.getHours());
divFormat('getMinutes', now.getMinutes());
divFormat('getSeconds', now.getSeconds());

//only hours
const clock = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
divFormat('full clock', clock);

// only full dates
const fullDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
divFormat('full date', fullDate);

// Full format
divFormat('Full format', fullDate + " " + clock);

// get timestamp
divFormat('get the timestamp', now.getTime());

//toStrings
divFormat('toDateString', now.toDateString());
divFormat('toTimeString', now.toTimeString());
divFormat('toLocaleString', now.toLocaleString());