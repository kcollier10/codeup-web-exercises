"use strict";


/*********************************************
 *              .map
 ******************************************** */

const numbers = [1,2,3,4,5,6,7,8,9,10];

// let newArray = [];
// numbers.forEach(function(number){
//     newArray.push(number + 1);
// });
//
// console.log(newArray);



// TODO TOGETHER: Let's map through the array of numbers and add 1 to each element. Console log the new copy of the array.

let newArray = numbers.map(function(num) {
    return num + 1;
    });
console.log(newArray);

//TODO: Map through the new array of numbers and this time multiply each element by 3. Console log the new copy.

let secondArray = newArray.map(function(num) {
    return num * 3;
})
console.log(secondArray);

//Bonus: Refactor your functions using ES6

const plusOne = numbers.map(num => num + 1);
console.log(plusOne);

const timesThree = newArray.map(num => num * 3);
console.log(timesThree);


/*********************************************
 *              .filter
 ******************************************** */
const binary = [1,1,1,1,0,0,1,1,1,1];

// TODO TOGETHER: Let's filter through our binary and return all the true values. We'll store the new array in a variable named 'ones'


let ones = binary.filter(function(num){
    return num + 0 !== 0;
});

console.log(ones);

// TODO: filter through binary again and this time, return all the false values.

let zeroes = binary.filter(function(num){
    return !num;
});
console.log(zeroes);

//Bonus: Refactor your functions using ES6
// const timesThree = newArray.map(num => num * 3);

const onesNew = binary.filter(num => num !== 0);
// or x == true
console.log(onesNew);

const zeroesNew = binary.filter(num => num === 0);
// or x == false
console.log(zeroesNew);


const fruitsAndVeggies = [
    {
        name: "banana",
        type: "fruit"
    },
    {
        name: "broccoli",
        type: "vegetable"
    },
    {
        name: "tomato",
        type: "fruit"
    },
    {
        name: "carrot",
        type: "vegetable"
    },
    {
        name: "apple",
        type: "fruit"
    },
    {
        name: "spinach",
        type: "vegetable"
    },
];


// TODO: filter through the array of objects and return all fruit type objects.

const fruits = fruitsAndVeggies.filter(function(fruit) {
        return fruit.type === "fruit";
    });

    console.log(fruits);

// TODO: filter through the array of objects and return all vegetable type objects.

const veggies = fruitsAndVeggies.filter(function(veggies) {
    return veggies.type === "vegetable";
});

console.log(veggies);

const fruitsTwo = fruitsAndVeggies.filter(produce => produce.type === "fruit").map(fruit => fruit.name.toUpperCase())
//when .map was added, turned array of objects into an array of strings
console.log(fruitsTwo);

/*********************************************
 *              .reduce
 ******************************************** */

const numbersArray = [1, 2, 3, 4, 5];

//accumulation = 0
// add 1
//accumulation = 1
//add 2
//accumulation = 3
//add 3
//accumulation = 6
//add 4
//accumulation = 10
//add 5

// final accumulation = 15


// TODO TOGETHER: Let's reduce our original numbers Array into one single value.

const sum = numbersArray.reduce((growingTotal, currentNumber) => {
    return growingTotal + currentNumber;
}, 0);

console.log(sum);

// TODO: Using .reduce, subtract all numbers in the numbers Array from a starting point of 100.
const subtract = numbersArray.reduce((loweringTotal, currentNumber) => (loweringTotal - currentNumber), 100)
console.log(subtract);

const shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    } , {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    } , {
        apples: 4,
        bananas: 0,
        oranges: 12,
        grapes: 10
    }
];

// TODO: Using .reduce, return the total number of apples.

let totalApples = shoppingCarts.reduce((total, cart) => {
    return total + cart.apples;
    // console.log(cart.apples);
}, 0);
console.log(totalApples);


const colors = ['red','orange','red','blue','blue','green','red'];

// TODO: Count the number of times a color appears in this Array. Hint: your initial value should be an empty object.

// function countColors (colors) {
const colorCounts = colors.reduce(function(colorCounts, color) {
    if (typeof colorCounts[color] === 'undefined') {
        colorCounts[color] = 1;
    } else {
        colorCounts[color] += 1;
    }
    return colorCounts;
}, {});
    // return colorCounts;

console.log(colorCounts);


const lyrics = ['we','all','live','in','a','yellow','submarine'];

//TODO TOGETHER: Using reduce, let's turn this into a string.

// const wordString = lyrics.reduce(function(words, word) {
const result = lyrics.reduce((prev, curr) => prev + ' ' + curr )
console.log(result);


// Bonus: Create an Array of all the unique fur colors! Hint: check out the ES6 'Set' data type.

var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];