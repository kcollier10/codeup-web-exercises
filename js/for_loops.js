"use strict";

function showMultiplicationTable(userInput) {
    for(var i = 0; i <= 70; i++) {
        if (i % 7 === 0) {
            console.log();
        }
    }
}

// for this problem above, ask about the console log portion!
// answer:

showMultiplicationTable(7);




var randomNumber= Math.floor((Math.random() * (200 - 20 + 1)) + 20);

for(i = 0; i <= 10; i++) {
    if (randomNumber % 2 !== 0) {
        console.log(randomNumber + ' is odd.')
    } else {
        console.log(randomNumber + ' is even.')
    }
}
//for problem above, ask about how to log the 10 numbers without console.log-ing ten separate times
// answer:


// var i = 100;
//
// while (i > 0) {
//     console.log(i);
//     i-=5;
// }
for(var i = 0; i > 0; i--){
    if(i % 5 === 0) {
        console.log(i);
    }
}


function generatePyramid() {
    var numberOfRows = 9;
    var extraSpace = '';

    for (var i = 1; i <= numberOfRows; i++) {
        for (var a = 1; a <= i; a++) {
            extraSpace += i + '';
        }
        console.log(extraSpace);
        extraSpace = '';
    }
}
generatePyramid();

// for(i = 1; i <= 1; i++) {
//     if (i === 1) {
//         console.log();
//         console.log(1);
//         console.log(22);
//         console.log(333);
//         console.log(4444);
//         console.log(55555);
//         console.log(666666);
//         console.log(7777777);
//         console.log(88888888);
//         console.log(999999999);
//     }
// }

