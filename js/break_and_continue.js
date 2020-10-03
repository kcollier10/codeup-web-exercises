"use strict";

var userInput = prompt("Please enter an odd number.");

// start at 0
//include a break at userInput
var i;
for (var i = 0; i <= 50; i++) {
    if (i === userInput) {
        console.log("Number to skip is: " + i);
        break;
    } else if (i % 2 !== 0) {
        console.log("Here is an odd number: " + i);
    }
}