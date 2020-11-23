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


fetch('https://api.github.com/users/kcollier10/events/public', {
    method: 'GET',
    headers: {'Authorization': 'token' + githubID},
})
    .then(response => response.json())
    .then(users => {
         users.forEach(userObj => {
             console.log(userObj.actor);
         })
     })
    .then(console.log)
    .catch(console.error);


function lastCommit () {
    $('#button').on("click", function () {
        let userInput = $('#input').val();
        console.log(userInput)

            //maybe do a resolve here?
    })
}

console.log(lastCommit);

