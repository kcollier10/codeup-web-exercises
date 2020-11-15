"use strict";

$('#facts-list').on('click', function() {
    $('dd').toggleClass('invisible');
    console.log('test');
});

$('dt').on('click', function() {
    $(this).toggleClass('highlight');
    $(this).next().toggleClass('invisible');
    console.log('test')

});

$('#button-parks').on("click", function () {
    $('ul').each(function(i) {
        $(this).children().last().css("background", "yellow");
    })
})
// $('.parks').children().last().css("color", "blue");

$('h3').on("click", function() {
    $(this).next().children().css("font-weight", "bold");
})

$('li').on("click", function () {
    $(this).parent().children().first().css("color", "blue");
})

let left = $('#left');
console.log(left);
let center = $('#center');
console.log(center);
let right = $('#right');
console.log(right);

// $('#x').on("click", function () {
//     $(this).parent().children().hide();
// });

// $('ul').hide().toggleClass('invisible');

('h3').on("click", function () {
    $(this).next().children().slideToggle();
})

// $('#button').click(function() {
//     $('<dd></dd>').toggleClass('invisible');
//     if($('#list').hasClass('invisible')){
//         $(this).text('Show');
//         $('.invisible').css('visibility','visible');
//     } else {
//         $(this).text('Hide');
//         $('.invisible').css('visibility', 'hidden');
//     }
// });


// $('#button').click(function(e) {
//     $('#facts-list').toggleClass('hufflepuff');
//     if($('#hufflepuff-house').hasClass('hufflepuff')){
//         $(this).text('Unlock');
//         $('#hufflepuff').css('background-color','yellow');
//     }else {
//         $(this).text('Lock In');
//         $('#hufflepuff').css('background-color','');
//
//     }
// });