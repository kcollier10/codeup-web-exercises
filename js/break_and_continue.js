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

    if (i == userInput) {
        console.log("Number to skip is: " + i);
    } else if (i % 2 === 0) {
        continue;
    }
    console.log("Here is an odd number: " + i);
}
//

// DO-WHILE EXAMPLE

do{
    var userInput = Number(prompt("Enter a number."));

    if (userInput < 1 || userInput > 50) {
        alert("Number is invalid. Please try again.");
    } else if (userInput % 2 === 0) {
        alert(userInput + " is not odd, please try again.");
    } else if (isNaN(userInput)) {
        alert(userInput + " is not a number. Please try again!");
    } else {
        alert("Number is between 1-50. Thank you!");
        break;
    }
} while(true);

for (var i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        continue;
    }
    if (userInput === i) {
        console.log("Yikes! Skipping number: " + i);
    } else {
        console.log("Here is an odd number: " + i);
    }
}
