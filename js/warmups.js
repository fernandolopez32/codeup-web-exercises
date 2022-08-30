
//My failed attempt
// let Array = [5,10,15];
//
//
// function average(input){
//     for (let i = 1; i < input.length+1; i++){
//         return (input(i)+input(i));
//     }
//     // if (isANumber(input)){
//     //     return false;
//    // }
// }
//
// function arrayAverage(array){
//     // total accumulator variable
//     let total = 0;
//     for (let i = 0; i < array.length; i++){
//         if(!isNumber(array[i]))
//             {return false;}
//         total += array[i];
//     }
//     return total/array.length;
// }
//
//
// let stringArray = ["jabba", "darth maul", "hondo"];
//
// function longestString(arrayOfString){
//     let longest = '';
//     for (let i = 0; i<arrayOfString.length; i++){
//         if (arrayOfString[i].length > longest.length) longest = arrayOfString[i];
//     }
//     return longest;
// }

// Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.
let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22}
];
// adding a specific property of an object inside an array the .property is interchangeable
function sumOfProperties() {
    let totalStudents = 0;
    for (let i = 0; i < classes.length; i++) {
        totalStudents += classes[i].students;
    }
    return totalStudents;
}

let numericArray = [8,10,20]

function arraySum(array){
    let total  = 0;
    for (let i = 0; i < array.length; i++){
        total += array[i];
    }
    return total;
}

console.log(arraySum(numericArray));

// Write a function called convertToObject that takes in a string that is the name of a class, and a
// number that is the number of students, and returns an object with the properties `class` and `students`
// function convertToObject(nameOfClass,numberOfStudents){
//     return {
//         nameOfClass: nameOfClass,
//         numberOfStudents: numberOfStudents
//     }
// }

const convertToObject = (nameofClass, numberofStudents)=>{
    return{
        class: nameofClass,
        numberOfStudents: numberofStudents
    };
}

//convertToObject("Intro to Programming", 20) returns {class: "Intro to Programming", students: 20}
const neighborhood1 ={
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 6},
        {name: "HS3", rating: 8}
    ]
}

const neighborhood2 ={
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 8},
        {name: "HS3", rating: 8}
    ]
}

const neighborhood3 ={
    neighborhood: "Ginormous Ego Estates",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 9},
        {name: "MS2", rating: 9},
        {name: "HS3", rating: 9}
    ]
}

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the
// median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.
function isDesirable(neighborhoodObject){
    let total  = 0;
    for (let i = 0; i < neighborhoodObject.schools.length; i++){
        total += neighborhoodObject.schools[i].rating;
    }
    return neighborhoodObject.medianHomePrice<300000 && neighborhoodObject.crimeRate === "low"&& total >=24;
}
//Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate,
// you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build,
// the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
//
// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
//
// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
//
//     your referral bonus, and
//
//     the price of a beer can
//
// For example:
//
// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16

// what's the cost of each level? level*level*priceOfCan

// I need a totalCost accumulator variable and some king of level variable
// and keep looping util total cost is grater that the bonus

function beeramid(bonus, price){
    let totalCost = 0;
    let levels = 0;
    while (totalCost <= bonus){
        totalCost += levels * levels *price;
        if(totalCost + ((levels +1) **2 * price) >bonus){break;}
        levels ++;
    }
    return levels;
}

// var fred = {
//     firstName: 'Fred',
//     lastName: 'Smith',
//     email: 'fred@email.com',
//     username: 'fred123',
//     password: 'pass123'
// }
//
// function getSimpleUser(userObject){
//     return {
//         firstName: userObject.firstName.toLowerCase(),
//         lastName: userObject.lastName.toLowerCase()
//     }
// }
//console.log(getSimpleUser(firstNames));

let firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
let lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];

function createNames(firstNamesArray,lastNamesArray){
    let accumulator =[]
    for (let i = 0; i < firstNamesArray.length; i++){
        accumulator.push({
            firstName:firstNamesArray[i],
            lastName: lastNamesArray[i]
        });
    }
    return accumulator;
}

