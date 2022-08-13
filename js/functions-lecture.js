
////The parts of a function
// 1. function keyword
// 2. The name of the function
// 3. parentheses (have zero or more parameters)
// 4. If more than one parameter, the list is comma separeted
// 5. Curly braces contain the function body
// 6. the function boy contains the code that runs when the function is invoked

//// function sayHello(greeting, name){
//     return console.log(`${greeting}, ${name}`);
// }
// // local scope
// // console.log will result in an error
// function localOrGlobal(){
//     let number = 20;
// }
// // global scope
// // console.log will work
// let number = 30;
// function localOrGlobal2(){
//     console.log(number);
// }
// // global and local at the same time
// function declaring
// let number = 20;
// function localOrGlobal(){
//     let number = 10;
//     console.log(number);
//     anotherNumber = 20;
// }
// localOrGlobal();
// console.log(number);
// console.log(anotherNumber);

// // function expression
// // will not get hoisted
// const bark = function(){
//     console.log("woof!");
// }
// // Function Declaration will get hoisted
// yap();
//  function yap(){
//     console.log("yip yip");
// }


// Arrow Functions
// function declaration
// function add(num1, num2){
//     return num1 + num2;
// }
// // function expression
// add = function(num1, num2){
//     return num1 + num2;
// }
// Arrow Functoins
const add = (num1, num2) => num1+num2;
// if there is onl one parameter, you do not need parentheses
const addTen = number => number + 10;
// if there is no parameters, you use empty parentheses
const helloWorld = () =>"hello world"






