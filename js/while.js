var i = 2;

while (i <= 65536) {
    console.log(i);
    i*=2;
}

var allCones = Math.floor(Math.random() * 50) + 50;
var random = Math.floor(Math.random() * 5) + 1;

do {
    console.log('cones sold')

} while (allCones > random)

// allCones is the starting point
// random is the decrement value
// end point is 0, but only if they have enough cones
