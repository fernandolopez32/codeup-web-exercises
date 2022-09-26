
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


//second assessment prep

const attendance = {
    miami: 32789,
    buffalo: 45678,
    portlanc: 24567
}

function averageAttendance(attendanceObject){
    //bellow we get the values of each key value pair
    let attendanceArray = Object.values(attendanceObject);
    //bellow we set our accumulator
    let total = 0;
    // for loop to loop through all
    for (let i = 0; i < attendance.length; i ++){
        total += attendanceArray [i]
    }
    return total;
}

// FOR IN LOOP
function tottalAttendance1(){
//first reference a properties
for (const prop in attendance){
    console.log(attendance[prop])
}
return total;
}



// return average attendance
function averageAttendance(){
//first reference a properties as a CONST      IN the object
    for (const prop in attendance){
        console.log(attendance[prop])
    }
    return total/Object.keys(attendance.length)
}

// returns object with total and average attendance

function creatObject(attendanceObject){
    for (const prop in attendance){
        console.log(attendance[prop])
    }
    return{
        totalAttendance: total,
        averageAttendance: total/Object.keys(attendance.length)
    }
}

//adding new property to an object

/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/

let address = "8646 Sunny Oaks"

// function convertAddressToObject(addressString){
//     // this return returns an object thanks to the {} brackets
//     return{
//         //substring method to find the first section of the object using index of to find the first space
//         streetNumber: address.substring(0,address.indexOf(" ")),
//         // using method substring from the index of the space +1 and everything after that is now the value of streetName
//         streetName: addressString.substring(addressString.indexOf(" ")+1)
//     }
// }

/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 **/
 let peopleAndPets  =[
       {name: 'Fernando Mendoza', pets: 1},
        {name: 'Douglas Hirsh', pets: 8},
        {name: 'Kenneth Howell', pets: 2}
     ]

// for loop
// function totalPets(arrayOfObjects){
//      // set accumulator
//      let total = 0;
//     // looping through the object that we will receive in the argument
//     for (let i = 0; i < arrayOfObjects.length; i++){
//         // in each iteration we add the number of pets that each person has CALLING IT BY DOT NOTATION (.pets)
//         total += arrayOfObjects[i].pets;
//     }
//     return total;
// }

//for each loop
// function totalPets(arrayOfObjects){
//      // set a accumulator
//      let total = 0
//     arrayOfObjects.forEach(function (object){
//         total += object.pets;
//     })
//     return total;
// }

// .reduce method
// function totalPetsReduce(arrayyOfObjects){
//      return arrayyOfObjects.reduce(function (acc, currentValue){
//          return acc + currentValue.pets;
//      },0)
// }

/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */
let arrayOfNumbers = [1,3,4,6,4,8,9]

// this only returns the max value
function minMax (array) {
    let max = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= max) {
            max = array[i];
        }
    }
    return [max]
}
/**
 * Filter out Strings from an Array
 * Create a function named filterArray that takes an array of non-negative integers and strings and return a new array without the strings.
 *
 * Examples
 *
 * >> filterArray([1, 2, "a", "b"]) ➞ [1, 2]
 * >> filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
 * >> filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
 *
 * Notes
 * Zero is a non-negative integer.
 * The given array only has integers and strings.
 * Numbers in the array should not repeat.
 * The original order must be maintained.
 */

//Second JS assessment study guide
// -- Write a function that takes in an input, checks that input, and returns true or false depending on some feature of the input (what kind of number, what kind of string, what type of data it is)
//

// function that returns a boolean if number is negative
function negativeNumber(number){
    if(number > 0 || number === undefined|| number === false || number === null || number === 0){
        return false ;
    }

}


// function that returns a boolean if number is positive
function positiveNumber(number){
    if(number === false || number === undefined || number === null|| number < 0|| number === "string") {
        return false;
    } else if(number >= 0){
        return true;
    }
}


// -- Write a function that takes in an input, does something to it, and returns the modified data (do a mathematical operation on it, do a string method to modify it, use an array method to modify an array)
//
function addNumbers(arg,arg2){
    return arg + arg2
}

function lastOfArray(array){
    return array.slice(3);
}
// -- Write a function that takes in an array and returns the array modified in some way -- certain elements removed, certain elements modified in a regular way (example, every numerical value doubled, every string uppercased)
//
// -- Write a function that accepts an array of objects where each object has at least one property with a numeric value, be able to return the total or average of the numeric values
//
// -- Write a function that accepts a string, breaks down the string into components, and returns an object where each component of the string has become the value of a property
//
// -- Write a function that analyzes a string, returning the results of the analysis, example, return the length of the string
//
// -- Write a function that analyzes a string, returning an object that contains several properties with information about the string, example, length, firstLetter, and lastLetter properties
//
//
// -- Write a function that takes in a string and modifies it in some way.  Example write a function that takes in a string and replaces every instance of the letter e with the number 3, and every instance of the letter i with the number 1, and every instance of the letter o with the number 0, and a with 4.  Write a function that capitalizes every other letter in the string starting with the first letter, counting blank spaces as characters.  Try the same not counting blank spaces as characters.  Write a function that capitalizes the last letters of every word in a string.
//
// /**
//  * Get Sum of People's Budget
//  * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
//  *
//  * Examples
//  *
//  * >> getBudgets([
//  *        { name: "John", age: 21, budget: 23000 },
//  *        { name: "Steve",  age: 32, budget: 40000 },
//  *        { name: "Martin",  age: 16, budget: 2700 }
//  *    ]) ➞ 65700
//  * >> getBudgets([
//  *        { name: "John",  age: 21, budget: 29000 },
//  *        { name: "Steve",  age: 32, budget: 32000 },
//  *        { name: "Martin",  age: 16, budget: 1600 }
//  *    ]) ➞ 62600
//  */
//
//
//  /**
//  * Get Student Top Notes
//  * Create a function named getStudentTopNotes that takes an array of students and returns an array of their top notes.
//  * If the student does not have notes then let's assume their top note is equal to 0.
//  *
//  * Examples
//  *
//  * >> getStudentTopNotes([
//  *      {
//  *         id: 1,
//  *         name: "Jacek",
//  *         notes: [5, 3, 4, 2, 5, 5]
//  *       },
//  *      {
//  *         id: 2,
//  *         name: "Ewa",
//  *         notes: [2, 3, 3, 3, 2, 5]
//  *       },
//  *      {
//  *         id: 3,
//  *         name: "Zygmunt",
//  *         notes: [2, 2, 4, 4, 3, 3]
//  *       }
//  *    ]) ➞ [5, 5, 4]
//  */
//
//
//
//  /**
//  * TODO:
//  * Remove the Letters ABC
//  * Create a function named removeABC that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
//  *
//  * Examples
//  * >> removeABC("This might be a bit hard") ➞ "This might e  it hrd"
//  * >> removeABC("hello world!") ➞ null
//  * >> removeABC("") ➞ null
//  *
//  * Notes
//  * If the given string does not contain "a", "b", or "c", return null.
//  */
//
//
//  Write a function called removeBs that takes in an array of strings and returns an array of strings with all b's removed from each string. Assume the array contains only string elements.
//
// Examples...
//
// removeBs(['abc', 'ab', 'cat', 'Bay']) // returns ['ac', 'a', 'cat', 'ay']
//
//
//
//
//
// Write a function that accepts the top three bowling scores and returns the average.
//
//  Write a function that accepts the top three bowling scores and returns the average.
//  1. write a function
//  2. pass in parameters
//  3. 3 scores ( variables)
//  4. return something (number)
//
// let first = 120;
// let second = 234;
// let third = 90;
//
// Modify the function to accept an array of bowling scores and return the average
//
// Write a function that accepts an array of bowling scores and returns the highest
//
// Write a function that accepts an array of bowling scores and returns true if the highest score is divisible by 3