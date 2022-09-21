//
$(document).ready(function (){
    $("h3").click(function (){
        $(this).next().slideToggle(500);
    })

});

function init(){
    $("h3").click(function (){
        $(this).next().slideToggle(50);
    })
}

window.onload = init;
