
// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.
//
//
// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:
//
//     5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

var allCones = Math.floor(Math.random() * 50) + 50;
var conesSold = Math.floor(Math.random() * 5) + 1;

do {
    if (allCones < conesSold) {
        console.log("Sorry, I can't sell you " + conesSold + ", I only have " + allCones + " cones left!");
    } else if (allCones > conesSold) {
        console.log("You may buy some cones!");
    } else {
        console.log("Yay! I sold them all!");
    }


} while(allCones <= 50);

//

