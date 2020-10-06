"use strict";

console.log("It worked!");

var pies = ["red", "orange", "yellow", "green", "blue", "purple"]

function lastThree(pies) {
    return pies.slice(3, 6);
}

// or return pies.slice(pies.length - 3);



console.log(lastThree(pies), 'Expected outcome is: ' + ["green", "blue", "purple"]);

pies.reverse();
console.log(pies);


// TODO DEMONSTRATION: Create a function that will take in a formatted string of numbers
//  and return an array of phone numbers without any symbols. Log the output of the returned array.

/* EXAMPLE...
    var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
    cleanPhoneNumbers(phoneNumbers);
    the above code should output the following...
       2105552020
       2305552020
       5125553030
*/

var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';



function cleanPhoneNumbers(phoneNums) {
    var output = [];
    var phoneNumsArr = phoneNums.split('\n');
    phoneNumsArr.forEach(function(phoneNum) {
        var phoneNumArr = phoneNum.split('-');
        var phoneNumberWithoutDashes = phoneNumArr.join('');
        output.push(phoneNumberWithoutDashes);
    })
    return output;
}
//
var cleanNumsArr = cleanPhoneNumbers(phoneNumbers);
//
for (var i = 0; i < cleanNumsArr.length; i += 1) {
    console.log(cleanNumsArr[i]);
}