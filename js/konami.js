$(function (){

    let code = "3838404037393739666513"
    let userEntry = ""

    $(document).keyup(function(event){
        userEntry += event.keyCode;
        if(userEntry === code){
            alert("you have added 30 lives");}
    else if (userEntry.length === 22 && userEntry !== code){
        userEntry = "";
        alert("try again")
        }
        console.log(event.keyCode)
    });
//↑ ↑ ↓ ↓ ← → ← → b a enter

// 38 38 40 40 37 39 37 39 66 65 13



})

