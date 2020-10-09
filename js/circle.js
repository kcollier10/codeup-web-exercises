(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            return (Math.PI * Math.pow(circle.radius, 2));
        },

        logInfo: function (doRounding) {
            if (doRounding === false) {
                return circle.getArea(this.radius);
            } else {
                return Math.round(circle.getArea(this.radius));
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
        }
        // console.log("Area of a circle with radius: " + circle.radius + ", is: " + circle.getArea(circle.radius));
    };

    // console.log("Area of a circle with radius: " + circle.radius + ", is: " + circle.getArea(circle.radius));

    // log info about the circle
    console.log("Raw circle information: " + (circle.getArea(circle.radius)));
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number: " + circle.logInfo(circle.getArea));
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Area of a circle with radius: " + circle.radius + ", is: " + circle.getArea(circle.radius));
    console.log("Raw circle information: " + (circle.getArea(circle.radius)));
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number: " + circle.logInfo(circle.getArea));
    circle.logInfo(true);
})();
