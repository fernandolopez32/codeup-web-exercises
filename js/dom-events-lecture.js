
// 1. Get a reference to the element that will trigger an event
// let theButton = document.querySelector("button");

// 2. Write the function that will be triggered by the event
//this function is called an event handler or also called callback
//contains the instructions that will run when an event is triggered
// function eventHandler(){
//     alert("You clicked me");
// }

// 3. Register the handler

// Add an event listener with two arguments: the type of event and the function that will be triggered

// theButton.addEventListener('click', eventHandler);

//



// document.querySelector("button").addEventListener('click',function (){
//     alert("You clicked me");
// });
//
//
let square = document.querySelector("div");
//
function eventHandler(){
    alert("You clicked me ")
}
//
square.addEventListener('click',eventHandler);
//
// document.querySelector("div").addEventListener('click',function(){
//     alert("You clicked the square" );
// });
