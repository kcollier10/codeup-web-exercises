"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var color = prompt("What is your favorite color?");
var alertMessage = "Great! " + color + " is my favorite color, too!";
alert(alertMessage);


/* You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear
(for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay? */

var dailyRentalRate = Number(prompt("How much is the daily rate?"));

var lm = Number(prompt("How many days did you rent The Little Mermaid?"));
console.log(lm);

var bb = Number(prompt("How many days did you rent Brother Bear?"));
console.log(bb);

var h = Number(prompt("How many days did you rent Hercules?"));
console.log(h);

var total = (lm + bb + h) * dailyRentalRate;
var totalAlert = "You owe: $" + total.toFixed(2);
alert(totalAlert);


/* Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours
for Google and 4 hours for Amazon. */


var google = prompt("How many hours did you work for Google?");
var amazon = prompt("How many hours did you work for Amazon?");
var facebook = prompt("How many hours did you work for Facebook?");

console.log(google);
console.log(amazon);
console.log(facebook);

var googlePay = prompt("How much were you paid by Google?");
var amazonPay = prompt("How much were you paid by Amazon?");
var facebookPay = prompt("How much were you paid by Facebook?");

console.log(googlePay);
console.log(amazonPay);
console.log(facebookPay);

var payment = Number((google * googlePay) + (amazon * amazonPay) + (facebook * facebookPay));
console.log(payment);


/* A student can be enrolled in a class only if the class is not full and the class schedule does not
conflict with her current schedule. */

var notFull = confirm("Class is not full");

var scheduleNoConflict = confirm("Schedule does not conflict");

var enrolled = notFull && scheduleNoConflict
var enrollmentAlert = "Student is enrolled?:" + enrolled;
alert(enrollmentAlert);


/* A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
Premium members do not need to buy a specific amount of products. */

/*
1. offer must be valid no matter what
2a. if they are a premium member, number of items does not matter
2b. if they aren't premium, they must buy two items (use an OR operator)

*/

var numberItems = Number(prompt("How many items have you purchased?"));
var validOffer = confirm("Is the offer valid?");
var premium = confirm("Are you a Premium member?");

var discount = validOffer && (numberItems > 2 || premium);
alert("Discount available?: " + discount);





