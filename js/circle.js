(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            var area = Math.PI * Math.pow(circle.radius, 2);
            // TODO: complete this method
            // hint: area = pi * radius^2

            return area; // TODO: return the proper value
        },

        logInfo: function (isRounding) {
            // TODO: complete this method.
            if (circle.getArea % 2 === 0) {
                return "Raw circle information: " + circle.getArea;
            } else {
                return "Circle information rounded to the nearest whole number: " + Math.round(circle.getArea);
            }

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

        }
    };
    console.log("Area of a circle with radius: " + circle.radius + ", is: " + circle.getArea);

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
