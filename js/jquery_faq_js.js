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