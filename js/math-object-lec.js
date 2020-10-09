let inputString = "Trick or Treat";
let inputArray = inputString.split(' ');

inputArray.forEach(function(element, index) {
    console.log("[" + index + "] " + element);

});

// Math.random()

let randomNum = Math.random() * 2;
console.log(randomNum);
// never going up to 3; use math.floor to get to 2

// Math.round()

// console.log(Math.round(randomNum));

// we can't use a decimal when referring to an array index, so let's round it to the nearest integer

let index = Math.round(randomNum);
console.log("Normal rounding: " + index);

// once we have that integer, let's choose a random string from our halloween array


// Math.floor()
// round down (floor)

index = Math.floor(randomNum);
console.log("Rounding down: " + index);


// Math.ceil()
// round up (ceiling)
// if we want to round UP, no matter what the decimal place is, we use Math.ceil()
// ex. 0.00000001 => 1
// ex 3.000000000001 => 4

index = Math.ceil(randomNum);
console.log("Rounding up: " + index);
let randomWord = inputArray[index];
console.log(randomWord);
console.log(index);


// say we want a random number between 74 and including 186
let numBetween = Math.ceil(Math.random() * 74) + 112;
// can do the exact same thing by switching the numbers
numBetween = Math.floor(Math.random() * 113) + 74;
// 113 would include 186
// correct solution

console.log(numBetween);
// set to 74 to account for 73


// Math.pow
// This is used to raise one number to the power of another number
// ex. 4 ^ 2 = 16
// ex. 8 ^ 3 = 512

// Math.sqrt()

let exponentResult = Math.pow(4, 2);
// 4-squared (4^2)
console.log(exponentResult);

let base = 8;
let exponent = 6;
let result = base;
for (let i = 1; i < exponent; i++) {
    // 8, 8*8=64, 8*8*8=64*8
    result = result * base;
}
console.log(base + " to the " + exponent + " power = " + result);

console.log(Math.sqrt(16));

// **CONSTANTS**

//Math.PI

//3.14...

console.log("Math.PI = " + Math.PI);

// used often in financial stuff

console.log("Math.E = " + Math.E);

// if we want to write scientific notation:
// 4.58 x e^9
console.log("The actual number represented by 4.58 X e^39 = " + Math.ceil(4.58*Math.pow(Math.E, 39)).toFixed(2));
console.log("The actual number represented by 4.58 X e^39 = " + Math.floor(4.58*Math.pow(Math.E, 39)).toFixed(2));

// 4.58 x 10^9

console.log("The actual number represented by 4.58 X 10^9 = " + (4.58*Math.pow(10, 9)).toFixed(2));

// toFixed will round


// want between 2000 and 3000
let randSelection = Math.random() * 2000 + 1000
// min would be 0 + 1000 = 1000
// max would be 2000 + 1000 = 3000
// get a result => min < chosenNum < max
                    // 2000 < chosenNum < 3000





