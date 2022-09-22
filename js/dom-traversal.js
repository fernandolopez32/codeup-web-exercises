$(function (){

    const $listItems = $("li");

    // each used for conditional using the index parameter
    $listItems.each(function (index, element ){
        if(index % 2 !== 0){
            $(element).css("font-style", "italic");

        }
    })

    $listItems.first().css("font-size", "larger");

    $("li a ").last().css("text-decoration", "none");

    $("button").on('click',function () {
        $('ul').last().children().children().toggleClass('sansSerif')
    });

    $('h2').css({
        "color": "blue",
        "text-decoration": "underline"
    }).on('click',function (){
        $(this).next().slideToggle();
    });




})