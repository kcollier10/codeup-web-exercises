"use strict";

const wait = (ms) => new Promise(
    (resolve) => setTimeout(resolve, ms)
);

// or

function waitTwo (ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms)
    })
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

waitTwo(1000).then(() => console.log('You\'ll see this after 1 second wee'));
waitTwo(3000).then(() => console.log('You\'ll see this after 3 seconds wee'));



// -------------------------------------------------------
// EXERCISE 2
const github = fetch('https://api.github.com/users', {headers: {'Authorization': 'token 1fd6f0de11c18a90b2c9e772f473cbfc1747fc40'}});

function lastCommit () {
    let userInput = $('#input').val();
    $('#button').on("click", function () {
        if(userInput !== "") {
            //maybe do a resolve here?
        }
    })
}

console.log($('#input').val());
// const myPromise = fetch('https://api.github.com/users');