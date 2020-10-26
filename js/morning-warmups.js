
    "use strict";

    // TODO: the following function writing challenges are already written... incorrectly. Fix them!

    /**
     * Write a function that takes in an array of elements and adds any number threes in the array. Numeric strings should not be added.
     *
     * Example Input: ['a', 3, '3', 3, null]
     * Example Output: 6
     */

    function sum3s(numbers) {
        var output= 0;
        numbers.forEach(function(number) {
            if (number === 3) {
                output += 3;
            }
        });
        return output;
    }
    console.log(sum3s(['a', 3, '3', 3, null])); // should see 6 in the console when written correctly

    /**
     * OPTIONAL EXTRA CHALLENGE!!
     * Write a function that takes in an array of strings and returns an array of the same string values but uppercased.
     *
     * Example Input: ['a', 'cat', 'BOb'];
     * Example Output: ['A', 'CAT', 'BOB'];
     */
    // function upCaseArr(arr) {
    //
    //     arr.forEach(function(element, index, array) {
    //         element = element.toUpperCase();
    //     });
    //     return element;
    // }
    //
    // console.log(upCaseArr(['a', 'cat', 'BOb'])); // should see ['A', 'CAT', 'BOB'] in the console when written correctly


    function trickOrTreat (input) {
        return input.split(' ');
    }

    console.log(trickOrTreat("Trick or Treat"));