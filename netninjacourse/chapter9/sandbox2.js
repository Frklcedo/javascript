const scores = [ 10, 50, 80, 30, 50, 60, 20];

const result = scores.reduce((acc,curr) => {
    if(curr > 50){
        acc++;
    }
    return acc;
}, 0 /* initial accumulator's value */);

console.log(result);

const users = [
    {
        name: 'Frklcedo',
        score: 35
    },
    {
        name: 'Zelda',
        score: 20
    },
    {
        name: 'Bipaix',
        score: 50
    },
    {
        name: 'Frklcedo',
        score: 40
    },
    {
        name: 'Link',
        score: 15
    }
];

const totalFrk = users.reduce((acc, curr) => {
    if(curr.name === 'Frklcedo'){
        acc += curr.score;
    }
    return acc;
},0);
console.log(totalFrk);

const firstGreatValue = scores.find(score => score>50);
console.log(firstGreatValue);

const maxGrade = users.find(user => {
    return user.score > 40;
});

console.log(maxGrade);
maxGrade.score = 80;
console.log(users);