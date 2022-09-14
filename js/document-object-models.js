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
        paragraphs[i].style.color =
            colorInput.value;
    }
}