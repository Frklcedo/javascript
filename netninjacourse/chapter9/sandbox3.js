const names = [
    'frkl',
    'bipaix',
    'zelda',
    'link',
    'gannon',
    'mario',
    'luigi'
];

console.log(names);

names.sort(); // alphabetical order

console.log(names);

names.reverse(); // reverse the array 

console.log(names);

const scores = [
    5,
    55,
    30,
    35,
    45,
    25,
    10,
    15,
    50
];
scores.sort();
console.log(scores);

scores.sort((a,b) => {
    if (a > b){
        return -1;
    }
    else if (b > a){
        return 1;
    }
    else{sdsdsdsdsdsdsdddd
        return 0;
    }
});

console.log(scores);

scores.sort((a,b) => a - b );

console.log(scores);