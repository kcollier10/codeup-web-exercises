"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(colorName) {
    if (colorName === "blue") {
        return "Nice, the sky is blue!";
    } else if (colorName === "red") {
        return "Nice, ladybugs are red!";
    } else if (colorName === "cyan") {
        return "My printer talks about cyan.";
    } else {
        return "You did not pick blue, red, or cyan.";
    }
}

analyzeColor("blue");

console.log(analyzeColor("blue"));
console.log(analyzeColor("green"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log("random color is: " + randomColor);
console.log(analyzeColor(randomColor));

// function colorGame(randomColor) {
//     if (randomColor === "red") {
//         return "Roses are red.";
//     } else if (randomColor === "orange") {
//         return "Cheetos are orange.";
//     } else if (randomColor === "yellow") {
//         return "Bananas are yellow";
//     } else if (randomColor === "green") {
//         return "Grass is green (sometimes).";
//     } else if (randomColor === "blue") {
//         return "The sky is blue.";
//     } else if (randomColor === "indigo") {
//         return "The 'I' in ROYGBIV";
//     } else if (randomColor === "violet") {
//         return "Violets are blue?";
//     } else {
//         return "No color.";
//     }
// }


//
// console.log(colorGame(randomColor));
// console.log(colorGame(randomColor));
// console.log(colorGame(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// selfnote** dont forget you can just use return instead of doing the var + break! silly goose

function analyzeColorSwitch(colorName) {
    var colorMessage;

    switch (colorName) {
        case "blue":
            colorMessage = "Nice! The sky is blue.";
            break;
        case "red":
            colorMessage = "Ladybugs are red.";
            break;
        case "cyan" :
            colorMessage = "My printer talks about cyan.";
            break;
        default:
            colorMessage = "Wut?";
            break;
    }
    return colorMessage;
}

console.log((analyzeColorSwitch(randomColor)));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userInput = prompt("Please enter a color!");
analyzeColor(userInput);
alert(analyzeColor(userInput));
console.log((analyzeColor(userInput)));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNum, totalAmount) {
    var discountedPrice;
    if(luckyNum === 0) {
        discountedPrice = totalAmount;
    } else if (luckyNum === 1){
        discountedPrice = totalAmount - (totalAmount * .1);
    } else if (luckyNum === 2) {
        discountedPrice = totalAmount - (totalAmount * .25);
    } else if (luckyNum === 3) {
        discountedPrice = totalAmount - (totalAmount * .35);
    } else if (luckyNum === 4) {
        discountedPrice = totalAmount - (totalAmount * .50);
    } else if (luckyNum === 5) {
        discountedPrice = 0;
    } return discountedPrice;
}

console.log(calculateTotal(4, 400));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
 // Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var userBill = Number(prompt("What was your total bill?")).toFixed(2)

var totalAfterDiscount = calculateTotal(luckyNumber, userBill);
alert("Your lucky number is: " + luckyNumber);
alert("Before the discount, your price was: " + userBill)
alert("Your total bill, after discount, is: " + totalAfterDiscount);


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// self-note*** you can put vars in their own if/else statements instead of all in the top above 'if'

function playAGame() {
    var play = confirm("Would you like to play a game?");
    if (play) {
        var userNumber = prompt("Please enter a whole number.");
        if(isNaN(userNumber)) {
            alert("Sorry, that was not a whole number.");
        } else {
            var evenOrOdd = (userNumber % 2 === 0) ? "Your number is even." : "Your number is odd.";
            var positiveOrNegative = (userNumber > 0) ? "Your number is positive." : "Your number is negative.";
            alert(evenOrOdd);
            alert("Your number, plus 100, is: " + (parseInt(userNumber) + 100));
            alert(positiveOrNegative);
        }
    }
}

playAGame();

