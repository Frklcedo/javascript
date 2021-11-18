const greet = function(name = "Zelda", time = "morning"){
    console.log(`Hello, ${name}! Good ${time}!`);
}

greet('Link', 'night');
greet('Navi');
greet();