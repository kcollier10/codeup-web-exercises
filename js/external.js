"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var color = prompt("What is your favorite color?");
alert("Great! " + color + " is my favorite color, too!");


/* You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear
(for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay? */

var lm = Number(prompt("How many days did you rent The Little Mermaid?"));
console.log(lm);

var bb = Number(prompt("How many days did you rent Brother Bear?"));
console.log(bb);

var h = Number(prompt("How many days did you rent Hercules?"));
console.log(h);

var total = Number(lm + bb + h) * 3;
console.log("Customer total is: " + total);


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

var full = confirm("Click 'OK' if class is not full.");
console.log(full);

var schedule = confirm("Click 'OK' if you have no other courses at this time.")
console.log(schedule);


/* A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
Premium members do not need to buy a specific amount of products. */

var premium = confirm("Click 'OK' if you are a Premium member. Click 'Cancel' if you are not.");
console.log(premium);

var numberItems = confirm("If you have purchased more than two (2) items, please click 'OK.'");
console.log(numberItems);

var expiration = confirm("Is today's date before the expiration date?");
console.log(expiration);



