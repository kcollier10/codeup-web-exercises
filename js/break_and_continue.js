"use strict";

var userInput = prompt("Please enter an odd number between 1 and 50.");

// start at 0
//include a break at userInput

// for (var i = 0; i <= 50; i++) {
//     if (i % 2 !== 0) {
//         prompt("Oops, that's an even number. Please pick an odd number.");
//         break;
//     } else if (i % 2 === 0) {
//         console.log("Here is an odd number: " + i);
//     } else if (i === userInput[i]) {
//         console.log("Yikes! Skipping number: " + userInput);
//     }
// }
//
for (var i = 0; i <= 50; i++) {
    var numberToSkip = i;
    if (userInput === numberToSkip) {
        console.log("Number to skip is: " + i);
        break;
    } else if (i % 2 === 0) {
        continue;
    }
    console.log("Here is an odd number: " + i);
}
//
