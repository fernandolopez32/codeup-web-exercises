// let currentWeather = {
//     humidity:77,
//     temp: 82.33,
//     feels_like: 88.73,
//     clouds: 75,
//     description: "cloudy"
// }
// // arrays of objects
// let hourlyWeather = [
//     {
//         time: "08:00",
//         temperature: 78.91,
//         feels_like: 78.91
//     },
//     {
//         time: "09:00",
//         temperature: 79.57,
//         feels_like: 79.57
//     },
//     {
//         time: "10:00",
//         temperature: 81.46,
//         feels_like: 86.04
//     },
//     {
//         time: "11:00",
//         temperature: 84.49,
//         feels_like: 89.24
//     }
// ];

// Loop over an array of objects for loop
// for (let i = 0; i <hourlyWeather.length; i++){
//     console.log(`At ${hourlyWeather[i].time} the temperature will be ${hourlyWeather[i].temperature}`);
// }

// for Each loop
// hourlyWeather.forEach(function (forecast){
//     console.log(`At${forecast.time} the temperature will be ${forecast.temperature} and feel like ${forecast.feels_like}   `)
// });

// forEach loop with arrow syntax

// hourlyWeather.forEach(forecast =>
//     console.log(`At${forecast.time} the temperature will be ${forecast.temperature} and feel like ${forecast.feels_like}   `)
// );
//
// // Array of objects where the objects have properties that are objects
//
// let texasInfo = [
//     {
//         city: "San Antonio",
//         latitude: 29.423017,
//         longitude: -98.48527,
//         timezone: "America/Chicago",
//         currentWeather: {
//             humidity: 77,
//             temp: 82.33,
//             feels_like: 88.79,
//             clouds: 75
//         }
//     },
//     {
//         city: "Houston",
//         latitude: 29.7915,
//         longitude: -95.093,
//         timezone: "America/Chicago",
//         currentWeather: {
//             humidity: 68,
//             temp: 87.44,
//             feels_like: 97.7,
//             clouds: 75
//         }
//     }
// ];
//
// console.log("The temperature in " + texasInfo[1].city + " is "+texasInfo[1].currentWeather.temp);

// use dot notation to access property values for most cases

// console.log(currentWeather.temp);
// console.log(currentWeather.description);
// console.log(currentWeather.feels_like);

// use bracket notation to access property values

// console.log(currentWeather["humidity"]);
// let userChoice = "clouds";
// console.log(currentWeather[userChoice]);
// userChoice = "temp";
// console.log(currentWeather[userChoice]);
// console.log("The current weather is " + currentWeather.temp);
// if(isSecureContext.temp> 95) {
//     console.log("Its kind of hot ");
// }else{
//     console.log("its cold for Texas today ");
// }

// loop through an Object with for in loop
// for(let property in currentWeather){
//     console.log(property+ " " + currentWeather[property]);
// }
// currentWeather.uvIndex = 9.79;
// console.log(currentWeather.uvIndex);

//
// let fighter = {
//     name: "Arata",
//     hitPoints: 18,
//     maxDamage: 8,
//     attack: function (opponent){
//         console.log((opponent.name + " has " + opponent.hitPoints + " hit points"))
//         console.log(this.name + " attack!");
//         let damage = Math.ceil(Math.random() * this.maxDamage);
//         console.log((this.name + " does "+ damage + " points of damage"));
//         opponent.hitPoints -= damage;
//         console.log(opponent.name + " now has "+ opponent.hitPoints + " hit points.");
//     }
// }
//
// let monster = {
//     name: "goblin",
//     hitPoints: 8,
//     maxDamage: 6,
//     attack: function () {
//         console.log(this.name + " attack!");
//     }
// }

// method definitions cannot use arrow functions if you are not using "this."

// let's create a controller object to handle anything players or game objects do that affects the state of the game.
// The controller might handle taking user input and calculating the inputs effect on the game.


let controller = {
    attack: function (attacker, defender){
        let defenderHPBeforeAttack = defender.hitPoints;
        let damage = Math.ceil(Math.random() * attacker.maxDamage);
        defender.hitPoints -= damage;
        view.displayAttackResults(attacker,defender,defenderHPBeforeAttack,damage);

    }
}

let view = {
    displayAttackResults: function(attacker, defender, defenderHPBeforeAttack, damage){
        console.log(`${defender.name} has ${defenderHPBeforeAttack} hit points`);
        console.log(attacker.name + " attacks!");
        console.log(`${attacker.name} does ${damage} hit points of damage!`);
        console.log(`${defender.name} now has ${defenderHPBeforeAttack - damage} hit points.`);
        console.log("-----------------");
    }
}


let model = {
    fighter: {
        name: "Arata",
        hitPoints: 18,
        maxDamage: 8,
    },
    monster: {
        name: "goblin",
        hitPoints: 8,
        maxDamage: 6,
    }
}

// controller.attack(fighter,monster);
// controller.attack(monster,fighter);

// Creating objects
//Define a empty object and create properties dynamically
let goblin = {}
goblin.name = "Goblin";

//Create a function that returns objects

function makeMonster(name, hitPoints, maxDamage){
   return{
   name: name,
   hitPoints: hitPoints,
   maxDamage: maxDamage
   }
}

// model.hobgoblin = makeMonster("Hobgoblin",11 ,11);
// controller.attack(model.hobgoblin,model.fighter);

// use an object constructor

function Monster(name, hitPoints, maxDamage){
    this.name = name ;
    this.hitPonts = hitPoints;
    this.maxDamage = maxDamage;
}

model.hobgoblinCaptain = new Monster("Hobgoblin Captain", 39, 14);
controller.attack(model.hobgoblinCaptain, model.fighter);

// for (let property in model){
//     console.log(model[property].name);
// }

// Object Destructuring

const car= {
    make: "Toyota",
    model: "Tacoma",
    year: 2020,
    mileage: 12657
}

// let make = car.make;
// let carModel = car.model;
// console.log(make);
// console.log(carModel);

const{ make, carModel, year, mileage} = car;
console.log(make);
console.log(model);
console.log(year);
console.log(mileage);

const outputCarInfo = ({make, model,year,mileage}= car) =>
{console.log(`${year} ${make} ${model} with ${mileage}`)}
outputCarInfo(car);

