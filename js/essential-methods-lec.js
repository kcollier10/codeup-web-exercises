"use strict";

$(document).ready(function() {

    //Name input goes through random sorting here. No need to change this code.
    $('#sort-wizard').click(function(e){
        let house = Math.floor(Math.random() * 4);
        let newWizard = $('#new-wizard');
        let newMember = $('<li></li>').text(newWizard.val());
        switch(house){
            case 0:
                $('#gryffindor').append(newMember);
                break;
            case 1:
                $('#slytherin').append(newMember);
                break;
            case 2:
                $('#ravenclaw').append(newMember);
                break;
            default:
                $('#hufflepuff').append(newMember);
                break;
        }
        newWizard.val('');
    });

    /**********************************************
     * 			Attributes and CSS
     *********************************************/

    /************
    *   HTML
    *************/

    // var gryffindor = $('#gryffindor').html();
    // console.log(gryffindor);

    // TODO TOGETHER: store the html of #main-heading in a variable named mainHeading

    // var mainHeading = $('#main-heading').html();
    // TODO: uncomment the line below
    // alert(mainHeading);

    // TODO TOGETHER: using the css method, grab the current width of the sorting hat img. Console log your results
    // let currentWidth = $('.banner').css("width");
    // console.log(currentWidth);

    /************
     *   CSS
     ************/

    // TODO TOGETHER:  Using an event listener and css method, increase the font-size of 'Sorting Hat' when clicked.
    //    How can font size be changed using .html()?
    // can use .html to set to a different tag


    // $('#main-heading').on('click', function () {
    //     $(this).css('fontSize', "50px");
    // })

    // TODO: Using a css method, change the banner background-color to black
    //  Hint: make sure you use the right selector

    // $('.banner').css("backgroundColor", "black");

    /**********************
     *  Class Manipulation
     **********************/

    // TODO TOGETHER: When the 'Houses' button is clicked, add the class 'house' to anything with a class of 'house-name'

    // $('#highlight-houses').on('click', function() {
    //     $('.house-name').addClass('house');
    // });

    // TODO TOGETHER: Comment out the code above. Add the class of 'house' to all the 'house-names'

    // $('.house-name').addClass('house');

    // TODO: Write the event listener to remove the class instead

    // $('#highlight-houses').on('click', function() {
    //     $('.house-name').removeClass('house');
    // })


    // TODO TOGETHER: Refactor your addClass and removeClass methods to toggle the 'house' class instead

    $('#highlight-houses').on('click', function() {
        $('.house-name').toggleClass('house');
    });


    // This provides the 'Lock In' functionality. Selected my button -> add an event listener
    $('#lock-g').click(function(e){
        //select heading to toggle background-color assigned in CSS
        $('#gryffindor-house').toggleClass('gryffindor');
        //conditional that changes the message in button depending on class property
        if($('#gryffindor-house').hasClass('gryffindor')){
            $(this).text('Unlock');
            $('#gryffindor').css('background-color','red');
        }else {
            $(this).text('Lock In');
            $('#gryffindor').css('background-color','');
        }
    });

    $('#lock-s').click(function(e) {
        $('#slytherin-house').toggleClass('slytherin');
        if($('#slytherin-house').hasClass('slytherin')){
            $(this).text('Unlock');
            $('#slytherin').css('background-color','green');
        }else {
            $(this).text('Lock In');
            $('#slytherin').css('background-color','');

        }
    });

    //TODO TOGETHER: complete the Lock In functionality for Slytherin
    //TODO: Add the Lock In functionality for Ravenclaw and Hufflepuff

    $('#lock-h').click(function(e) {
        $('#hufflepuff-house').toggleClass('hufflepuff');
        if($('#hufflepuff-house').hasClass('hufflepuff')){
            $(this).text('Unlock');
            $('#hufflepuff').css('background-color','yellow');
        }else {
            $(this).text('Lock In');
            $('#hufflepuff').css('background-color','');

        }
    });
    $('#lock-r').click(function(e) {
        $('#ravenclaw-house').toggleClass('ravenclaw');
        if($('#ravenclaw-house').hasClass('ravenclaw')){
            $(this).text('Unlock');
            $('#ravenclaw').css('background-color','purple');
        }else {
            $(this).text('Lock In');
            $('#ravenclaw').css('background-color','');

        }
    });

    /**********************************************
     * 			       Traversing
     *********************************************/

    //TODO TOGETHER: Using the each method, highlight every other list item in the Ravenclaw house

    $('#ravenclaw').children().each(function(i) {
        if(i % 2 === 0) {
            $(this).css("color", "gray");
        }
    });

    //TODO TOGETHER: Change the font color of the first list element in Hufflepuff

    $('#hufflepuff').children().first().css("color", "blue");

    //TODO TOGETHER: Change the font color of the last list element in Slytherin

    $('#slytherin').children().last().css("color", "blue");


    //TODO TOGETHER: When the 'Witches' button is clicked, highlight all names that have been assigned the class of 'witches'
    $('#highlight-witches').click(function(e){
        $('li').each(function(){
            if($(this).hasClass('witches')){
                $(this).toggleClass(('witch'))
            }
        });
    });

    $('#highlight-wizards').click(function(e){
        $('li').each(function(){
            if($(this).hasClass('wizards')){
                $(this).toggleClass(('wizard'));
                $(this).next().css('color', 'orange');
            }
        });
    });

    //BONUS: .prev() method

    // $('ul').click(function(e){
    //     $(this).prev().addClass('gryffindor');
    // });

});