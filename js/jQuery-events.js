$(function (){
    // .on event listener is also related yo the off event
    // .on method takes two arguments (event listener) "an event" and a(call back) function that will run when the event happens
    $('#clickMe').on('click', function (){
        alert("You clicked me")
    });

    $('#create-an-element').on('click',function (){
        $(this).after("<button class='will-this-work'>Click Me</button>");
    });

    // this will not work because the buttons do not exist yet
    // $(".will-this-work").on('click', function (){
    //     alert(":( this won't work");
    // })
    // this will not work because the buttons do not exist yet


    //this will work because we register the event with the document because the document does exist at this point
    // $(document).on('click', '.will-this-work',function (){
    //     alert(":) this will work");
    // })

    // delegated event more precise look
    $('#dynamic-content').on('click', '.will-this-work',function () {
        alert(":) this will work");
    })


    // $(".box").hover(function (){
    //     $(this).addClass('hotpink');
    // },
    // function (){
    //     $(this).removeClass('hotpink');
    // });

    //this makes life easier
    $(".box").hover(function (){
        $(this).toggleClass('hotpink')
    });

    //logging the key that is being pressed
    $(document).keydown(function(e){
        // alert("you just pressed a key down");
        console.log(e.originalEvent.key);
    })

    console.log($('div').text());
    console.log($('div').html());

    $('div').text('this is now what is says');
    $("p").before('<ul><li>hello</li></ul>');



})