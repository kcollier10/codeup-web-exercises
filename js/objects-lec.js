"use strict";
console.log("Welcome to Intro to Objects!");

/*********************************************
*              INTRO TO OBJECTS
******************************************** */

/**
 * Objects are an unordered collection of related data in the form of
 * key:value pairs
 */


/*********************************************
 *              CREATING NEW OBJECTS
 ******************************************** */

/**
 * Objects can be created in JavaScript through the use of the 'new
 * Object()' constructor, or Object literal notation using curly braces.
 */

/**
 * TODO TOGETHER: Create a new variable (of type Object) and call it 'myPhone'. Use either the constructor or Object literal notation.
 */

var myPhone = {}

/**
 * TODO: Create a new Object and call it 'myMac'. use either the constructor or Object literal notation.
 */

var myMac = new Object();

/*********************************************
 *              PROPERTIES
 ******************************************** */

/**
 * TO DO TOGETHER: Using dot notation, assign these properties to your phone
 * Object: 'model', 'color', 'storage'. Console log your phone variable to
 * check that the information was stored properly.
 */

myPhone.model = "iPhone 10";
myPhone.color = "turquoise";
myPhone.storage = "16GB";
myPhone.apps = ["Photos", "Twitter", "YouTube", "Little Alchemy"];
myPhone.ring = function () {
    alert("You used to call me on my cell phone...")
}
myPhone.name = {
    firstName: "Kristen",
    lastName: "Collier"
}
myPhone.login = {
    username: "k10",
    fakePassword: "yolo",
    email: "kristencollier10@gmail.com"
}

myPhone.ring();
console.log(myPhone);
console.log(myPhone.name.firstName); // logs 'kristen' only
console.log(myPhone.name.lastName); // logs 'collier' only
console.log(myPhone.name); // logs whole object
/**
 * TO DO: Using dot notation, assign these properties to your Mac
 * Object: 'model', 'size', 'year', Console log the Object to check if the
 * information was stored properly
 */

myMac.model = "Macbook Air";
myMac.size = "13in";
myMac.year = "2020";
myMac.playMusic = function() {
    alert("Dudududududu!!");
}
myMac.playMusic();
console.log(myMac);

/**
 * TO DO TOGETHER: Assign a 'name' property to your phone. This should be of
 * type Object and store properties for the user's 'firstName' and
 * 'lastName'. Use console log to access the user's 'lastName'
 */


/**
 * TO DO: Using dot notation, assign a property called 'folders' that stores
 * an Array representing different folders in your system.
 */

myPhone.apps.forEach(function(app){
    console.log(app);
})

/**
 * TO DO: Assign a 'login' property. This should be an object that stores
 * 'username','fakePassword' and 'email'
 */

/*********************************************
 *                  METHODS
 ******************************************** */

/**
 * TO DO TOGETHER: We are going to add functionality to our phone Object.
 * Using the dot notation, add a method named 'call' that console logs the
 * message: "Dialing..."
 */

myPhone.call = "Dialing...";
console.log(myPhone.call);

/**
 * TO DO: Let's add functionality to our Mac Object. Create a method named
 * 'powerOn'. When called, this should display a console message that says
 * "Powering on..."
 */

myMac.poweringOn = "Powering on..."
console.log(myMac.poweringOn);

/**
 * TO DO TOGETHER: Let's add one more piece of functionality. Create a
 * method on the phone object that returns a message displaying the user's
 * firstName and lastName. Hint: use the 'this' keyword.
 */

myPhone.phoneUser = function () {
    alert("The owner of this phone is: " + this.name.firstName + " " + this.name.lastName);
}

myPhone.phoneUser();

/**
 * TO DO: One last thing. Let's add a 'currentUser' method that displays the
 * Mac user's 'username' and 'email'. Use the 'this' keyword to reference
 * the properties we created earlier.
 */

myPhone.currentUser = function () {
    alert("The person logged into this phone is: " + this.login.username + ". " + "Email: " + this.login.email);
}

myPhone.currentUser();


/*********************************************
 *                  NESTED VALUES
 ******************************************** */

/**
 * Because an Object is a collection of data and functionality, very often
 * we will see nested values. This can mean an Array of Objects containing
 * Arrays, Objects containing other Objects and so on.
 *
 * It is important to understand the shape of our data so that we can
 * navigate through it.
 */

var chooseYourFighter = [
    {
        name: {
            firstName: "Spongebob",
            lastName: "Squarepants"
        },
        catchphrase: function (){
            return "I'm Ready!";
        },
        abilities: ["blow bubbles!!", "karate!!", "jellyfishing!!"]
    },
    {
        name: {
            firstName: "Patrick",
            lastName: "Star"
        },
        catchphrase: function (){
            return "No, this is Patrick.";
        },
        abilities: ["not construction", "rock hiding", "wumbo"]
    },
    {
        name: {
            firstName: "Eugene",
            lastName: "Krabs"
        },
        catchphrase: function () {
            return "Agagagagga";
        },
        abilities: ["money", "hide money", "tiny violin"]
    },
    {
        name: {
            firstName: "Squidward",
            lastName: "Tentacles"
        },
        catchphrase: function () {
            return "*nasal sounds*";
        },
        abilities: ["bad music", "bad art", "nag"]
    }
    ];

chooseYourFighter.forEach(function(fighter){
    console.log(fighter.name.firstName + ": " + fighter.catchphrase());
    fighter.abilities.forEach(function(ability) {
    console.log(ability);
});
console.log("------------");
});



/*********************************************
 *                  ARRAYS OF OBJECTS
 ******************************************** */

/**
 * If we have an Array of Objects, we can iterate through it to access each
 * Object element and pull the properties and methods that we need.
 */
