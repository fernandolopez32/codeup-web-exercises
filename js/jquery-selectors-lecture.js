
// the new #(document).ready
$(function (){
    const $refToLibrary = $('#library')
    //ID selector to alter content
    //  $refToLibrary.text("jQuery makes life easier");
    // //
    // console.log($refToLibrary.text());
    let li3Text = $refToLibrary.text();
    $refToLibrary.text(li3Text + " makes life easier");

    // class selectors and css methods to alert styles
    $(".framework").css({
        'border': '1px solid black',
        'width': 'fit-content'
    });
    // type list with chained mothods
    $("p, li").text("i've taken over.").css("color", "hotpink");

})

