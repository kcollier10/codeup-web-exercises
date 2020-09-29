"use strict";

console.log("hello from redo-conditionals.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin

var isAdmin = true;
var notAdmin = false;

if(notAdmin) {
    //don't log in
}

//TODO Together: Send a 20% off coupon if its users birthday

var userBirthday = true;

if(userBirthday) {
    alert("It's your birthday!")//send a coupon
}

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true

var isRaining = true;

if(isRaining) {
    alert("It's raining!"); //alerts it is raining
}

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.

var itemCost = 100;
var currentBalance = 50;


if(itemCost > currentBalance) {
    alert("You may not purchase this item. Not enough funds.")//alerts the user they have enough money
} else {
    alert("Hooray! Nice purchase.")
}

purchase(50, 100)

function purchase(itemCost, currentBalance) {
    if (itemCost > currentBalance) {
        return false;
        alert("You may not purchase this item. Not enough funds.")//alerts the user they have enough money
    } else {
        return true;
        alert("Hooray! Nice purchase.")
    }
}


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0

var numberOfLives = 1;

if(numberOfLives > 0) {
    alert("Play again?");
} else {
    alert("Sorry, game over!");
}

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

var isSnowing = true;

if(isSnowing) {
    alert("Weeee, it's snowing!")
} else {
    alert("No snow today.")
}

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

var numberInput = 10;

function number(numberInput) {
    if (numberInput > 10) {
        return false;
        alert("Number is greater than 10.")
    } else {
        return true;
        alert("Number is not greater than 10.")
    }
}

number(19);


//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar

var isAdmin = true;

if(isAdmin){
    console.log("is admin")
} else {
    console.log("regular user")
}

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"

var isRainy = false;

if(isRainy){
    alert("It's raining!")
} else {
    alert("Have a nice day!")
}




//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

var numberOfLives = 0;

if(numberOfLives) {
    alert("Sorry, game over");
} else {
    alert("Next Level!");
}

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

var isSnowing = true;

if (isSnowing) {
    alert("It's snowing!");
} else {
    alert("Check back later for more details!")
}

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

var numberInput = 4;

if(numberInput > 10) {
    alert("True, number is greater than ten.")
} else {
    alert("The number is less than or equal to ten.")
}
//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.

function checkIfGameOver(numberOfLives) {
    if (numberOfLives > 0) {
        return "Keep going!";
    } else {
        return "Sorry, game over"
    }
}

console.log(checkIfGameOver(7));

//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.



// SHOULD WE DELETE STUFF EXAMPLE

var weShouldDeleteStuff = confirm("Are you sure you want to delete everything?");

console.log("The confirm value is: " + weShouldDeleteStuff)

if(weShouldDeleteStuff) {
    //delete everything
    alert("We are deleting everything.");
} else {
    alert("Operation cancelled.");
}


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

var isOldEnough = confirm("Are you 13 years of age or older?");

console.log("The confirm value is: " + isOldEnough);

if(isOldEnough) {
    //allow into site
    alert("You may proceed!");
} else {
    alert("Sorry, you are unable to proceed.");
}

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

var weather = "snowing";

function checkWeather(weather) {
    if (weather === "snowing") {
        return "It's snowing!";
    } else if (weather === "raining") {
        return "It's raining!";
    } else {
        return "Have a nice day!";
    }
}

console.log(checkWeather("hail"));
console.log(checkWeather("raining"));

//TODO Together: refactor the above statement as a function

// Together: PIZZA PREFERENCE EXAMPLE

var pizzaPreference = (prompt("What kind of pizza do you like?").toLowerCase);
console.log("User pizza input: " + pizzaPreference);

function whatKindOfPizza (pizzaPreference) {
    if (pizzaPreference === "pineapple and hot sauce") {
        return "What a coincidence, that's my favorite!";
    } else if (pizzaPreference === "cheese") {
        return "Just plain cheese? Okay...";
    } else if (pizzaPreference === "ham") {
        return "Ham is easy to spell and awesome!";
    } else if (pizzaPreference === "pepperoni") {
        return "I love pepperoni as well!";
    } else {
        return pizzaPreference + " isn't my favorite, but let's order some!";
    }
}

console.log(whatKindOfPizza("pepperoni"));
console.log(whatKindOfPizza("ham"));
console.log(whatKindOfPizza("cheese"));


//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

var trafficLightColor = prompt("What color is the traffic light?");

function whatToDo(trafficLightColor) {
    if (trafficLightColor === "red") {
        return "STOP!";
    } else if (trafficLightColor === "yellow") {
        return "SLOW DOWN!";
    } else if (trafficLightColor === "green") {
        return "GO!";
    } else {
        return "That light is broken!";
    }
}

console.log(whatToDo("blinking"));
console.log(whatToDo("red"));
console.log(whatToDo("green"));
console.log(whatToDo("yellow"));


// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are
// eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit,
// they are eligible for license, if they are 16 or older and do not have a permit, they are not eligible for a license.


// var userAge = Number(prompt("How old are you?"));

var userAge = 16;
var hasPermit = true;
//16 && hasPermit === true --> eligible for license

if(userAge < 15) {
    alert("You are not eligible for a learner's permit.");
} else {
    // 15 or older
    // eligible for license
    if (userAge === 15) {
        alert("You are eligible for a permit!");
    } else if (userAge >= 16 && hasPermit === true) {
        // user is greater than 16 or older, and have a permit
        alert("You can get a license.");
    } else if(userAge >= 16 && hasPermit === false) {
        //user is of age for a license, but have not had a permit
        alert("You need a permit.");
    } else {
        alert("Please call support!");
    }
}




// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

var weather = "sunny";
var weatherMessage;

if(weather === "rainy"){
   weatherMessage = "It's raining!";
} else {
    weatherMessage = "Have a nice day!";
}

//WRITE YOUR TERNARY STATEMENT HERE!

var weather = (false)
var weatherMessage = (weather === "rainy") ? "It's raining" : "Have a nice day!";
console.log(weatherMessage);

// =============== SWITCH STATEMENT ================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.

var typeOfWeather = "windy";

switch (typeOfWeather){
    case "rainy":
        alert("It is rainy.");
        break;
    case "sunny":
        alert("It is sunny.");
        break;
    case "snow":
        alert("It is snowy.");
        break;
    default:
        alert("Oh the weather outside is weather.");
        break;
}

//TODO: Rewrite the intersection function from earlier as a switch statement.


function checkIntersection(trafficLightColor) {
    switch (trafficLightColor)  {
        case "red":
            return "STOP!";
        case "yellow":
            return "SLOW DOWN!";
        case "green":
            return "GO!";
        default:
            return "That light is broken!";
    }
}

function checkIntersection(trafficLightColor) {
    var returnMessage;
    switch (trafficLightColor)  {
        case "red":
            returnMessage = "STOP!";
            break;
        case "yellow":
            returnMessage  = "SLOW DOWN!";
            break;
        case "green":
            returnMessage = "GO!";
            break;
        default:
            returnMessage = "That light is broken!";
            break;
    }
}

console.log(checkIntersection("green"));

// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html

var choresDone = true;

if(choresDone) {
    alert("Give child five dollars.");
} else {
    alert("No allowance increase");
}


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html
