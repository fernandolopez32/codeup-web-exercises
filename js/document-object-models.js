// let accessTheDOM = document.getElementById("dc");
// let showMe = accessTheDOM.innerHTML;
// console.log(showMe);
//
// let preference = "dc" ;
//
// let marvel = document.getElementById("marvel");
//
// let like = document.getElementById("like");
// let dontLike = document.getElementById("dontLike");
// let output = `${dontLike.innerHTML} ${document.getElementById(preference).innerHTML} movies`;
// console.log(output);
//
// accessTheDOM.innerHTML =  marvel.innerHTML;
//
// marvel.setAttribute('class','hotpink');
//
// let hotPicks = document.getElementsByClassName('hotpink');
//
// hotPicks[1].style.fontSize = '5rem';
//

let submitButton = document.getElementById("colorSubmission");

submitButton.onclick = function (){
    let colorInput = document.getElementById("colorPreference");
    let paragraphs = document.getElementsByTagName("p");
    for(let i = 0; i < paragraphs.length; i++){
        paragraphs[i].style.color = colorInput.value;
    }
}


// reference to the element on the page
let theHulk = document.getElementById("hulk");
// let hulkState = theHulk.getAttribute("data-state");
let hulkStrength = theHulk.dataset.strength;
let hulkState = theHulk.dataset.state;
let hulkIntelligence = theHulk.dataset.intelligence;
let hulkSummary =` The Hulk is in ${hulkState} state. His strength is ${hulkStrength} and his intelligance is ${hulkIntelligence}.`
// theHulk.innerText = hulkSummary

let transformButton = document.getElementById("transformHulk");
transformButton.onclick = function (){
    let theHulk = document.getElementById("hulk");
    let hulkStrength = theHulk.dataset.strength;
    let hulkState = theHulk.dataset.state;
    let hulkIntelligence = theHulk.dataset.intelligence;
    if(hulkState === "hulk"){
        theHulk.dataset.state = "Bruce Banner";
    } else{
        theHulk.dataset.state = "hulk";
    }
    theHulk.innerText = `The Hulk is in ${hulkState} state.`

}


//intent of changing the submit button on mouse over
// submitButton.onmouseover = function (){
//     let form = document.getElementsByName("changeColor");
//     form =
//
// }


