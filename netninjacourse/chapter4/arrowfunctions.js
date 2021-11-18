// regular function
// const calcArea = function(radius){
    // return 3.14 * radius ** 2 ;
// };

// arrow function

const calcArea = radius =>{
    return radius ** 2 * 3.14;
};

const greet = () => 'Hello, World';

const bill = (products,tax) => {
    let total = 0;
    for(let i = 0 ; i<products.length ; i++){
        total += products[i] + products[i] * tax;
    } 
    return total;
};

const area = calcArea(5);

console.log("area is: " + area);
console.log(greet());
console.log(bill([10,15,30], 0.2 ));