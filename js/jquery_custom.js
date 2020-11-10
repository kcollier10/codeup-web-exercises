$(document).ready(function() {
    "use strict";

    // alert("The DOM has finished loading!");

    // let red = $("#red").html();
    // alert("The contents are: " + red);

    // $('#codeup').css("border", "3px double red");
    // $( ".codeup" ).css( "border", "3px double red" );

    $('li').css("fontSize", "20px");

    // $('h1').css("background", "yellow");
    // $('p').css("background", "yellow");
    // $('li').css("background", "yellow");

    $('h1, p, li').css("background", "yellow");

    let h1alert = $('h1').text();
    alert("The contents of h1 are: " + h1alert);


});