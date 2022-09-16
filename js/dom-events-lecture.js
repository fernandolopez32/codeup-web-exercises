
// 1. Get a reference to the element that will trigger an event
let theButton = document.querySelector("button");
let paragraph = document.querySelector("p");

// 2. Write the function that will be triggered by the event
//this function is called an event handler or also called callback
//contains the instructions that will run when an event is triggered
// function eventHandler(){
//     alert("You clicked me");
// }

function changeParagraph(){
    paragraph.innerHTML = "Cawabunga";
}
// 3. Register the handler

// Add an event listener with two arguments: the type of event and the function that will be triggered

theButton.addEventListener('click', changeParagraph);

//



// document.querySelector("button").addEventListener('click',function (){
//     alert("You clicked me");
// });
//
//
let square = document.querySelector("div");
//
function eventHandler(){
    alert("You the square, my color is: " + window.getComputedStyle(document.querySelector(".square"),null).getPropertyValue('background-color'));
}
//

square.addEventListener('click', function (event){
    // console.log(event.target.style.display );
    console.log(getComputedStyle(event.target).backgroundColor);
});
//
// document.querySelector("div").addEventListener('click',function(){
//     alert("You clicked the square" );
// });


//get user input from a form field
let formInput = document.getElementById("formInput");

formInput.onkeyup = function (){
    console.log(formInput.value);
}