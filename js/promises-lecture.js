$.get("data/murals.json",function (data){
    console.log(data);
});

// Fetch API

// fetch("data/murals.json").then(function (response){
//     return response.json();
// }).then(function (data){
//     console.log(data);
// });

// abbreviated Fetch request using arrow functions

// fetch("data/murals.json").then(resp => resp.json()).then(data => console.log(data));

// callback: a function passed as an argument to another function. it can run after another function has finished running
//
// function sayHello(greeting, name ){
//     greeting =  `${greeting}, ${name}`
//     displayOutput(greeting);
// }
// sayHello("Hello", "Javier")
//
// // let greeting = sayHello('Hola', 'Fernando');
//
// function displayOutput(output){
//     $('#output').html(output);
// }
// // displayOutput(greeting);

// function greeter(greeting, name, displayFunction){
//     greeting = `${greeting}, ${name}!`;
//     displayFunction(greeting);
// }
//
function displayToOutputDiv(output){
    $('#output').html(output);
}
//
// // greeter('Hello','Ferndog',displayToOutputDiv);
// //
// // setTimeout( () => greeter('hello', 'Max', displayToOutputDiv,300000));
// // setTimeout(function (){
// //     greeter('Aloha','felipe',displayToOutputDiv)
// // },300);
//
// // simplification of above functions
// setTimeout(greeter, 200,'yo','dude',displayToOutputDiv)

const greetings = [ "Salutations", "Shoutout", "Hello", "Hullo", "Hail", "Hey", "Hi", "Aloha", "Hola", "Bonjour", "Howdy", "Namaste", "Ohayo", "Ni hao"];
const names = ['David', 'Jay', 'Bianca', 'Laura', 'Kenneth', 'Cody', 'Justin', 'Javier', 'Dane', 'Casey', 'Mark', 'Ry', 'Jordy'];
function generateGreeting(greetingsArray, namesArray, displayFunction){
    let greeting = greetingsArray[Math.floor(Math.random() * greetingsArray.length)];
    const name = namesArray[Math.floor(Math.random() * namesArray.length)];
    greeting = `${greeting}, ${name}!`;
    displayFunction(greeting);
}

// setInterval(generateGreeting,1000,greetings,names,displayToOutputDiv);

const aPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(Math.random() > 0.5){
            resolve("I Was fufilled");
        } else {
            reject("I was rejected!")
        }
    },2000);
});

aPromise.then(value => console.log(value)).catch(error => console.log(error));


// a fetch call returns an object
const myFetchPromise = fetch("data/murals.json").then(respose => {
        console.log(respose.url);
        console.log(respose.headers);
        console.log(respose.status);
        return respose.json()
    }
    ).then(data => console.log(data)).catch(error => console.log("Oh no, it didnt work")).finally(()=>console.log("I'm gonna happen no matter what"));

console.log(myFetchPromise);






