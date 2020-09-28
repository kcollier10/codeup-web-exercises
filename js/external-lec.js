"use strict";

console.log("This is the external js file!");
console.log("This is the second message!");

var myAge = 50;
console.log(myAge);

alert("Message goes here!");

alert("Codeup is really cool!");

var confirmed = confirm("Are you sure you want to do this?");
console.log(confirmed);

alert("The user selected: " + confirmed);

var popup = confirm("Is this a pop-up?");
console.log(popup);

var userInput = prompt('Please type something :)');
console.log('The user entered: ' + userInput);
console.log(typeof userInput);

var userNumber = Number(prompt("What is your favorite number?"));
console.log(userNumber);
console.log(typeof userNumber);


var message = prompt('How is your day going?');
console.log('User has entered: ' + message);