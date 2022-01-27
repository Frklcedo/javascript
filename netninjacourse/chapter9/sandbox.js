// filter method
const scores = [ 10, 25, 50, 70, 20 , 45, 30, 100, 35];

const filteredScores = scores.filter(score => score > 35);
console.log(filteredScores);
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
        name: 'Gannon',
        score: 40
    },
    {
        name: 'Link',
        score: 15
    }
];
const filteredUsers = users.filter((user) => user.score > 30 );
filteredUsers.forEach(user => {
    console.log(user.name,user.score);
});

// map
const prices = [ 122.5, 100.00, 58, 200, 85.5, 90, 90.5];
const newPrices = prices.map(price => {
    if(price > 90){
        return price * 90 / 100;
    }
    return price;
});

console.log(newPrices);

const products = [
    {
        name: 'Hard Drive',
        price: 400
    },
    {
        name: 'VGU',
        price: 3550.95
    },
    {
        name: 'CPU',
        price: 1600
    },
    {
        name: 'Cooler',
        price: 50
    }
];

const discountedProducts = products.map(product => {

    // Wrong way (reference variable)
        // if(product.price > 1000){
        //     product.price *= 75/100;
        // }
        // return product;
    
    // Right way

    if (product.price > 1000){
        return {
            name: product.name + ' (discounted)',
            price: product.price * 75 / 100
        };
    }
    else{
        return {
            name: product.name,
            price: product.price
        };

    }
});

console.log(products);
console.log(discountedProducts);