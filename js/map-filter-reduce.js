"use strict";

// ---------------------------------------------------------------------
// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// ---------------------------------------------------------------------
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const languagesArray = users.filter(function(user, ){
    return user.languages.length > 2
});

// or

const languagesArray2 = users.filter(user => user.languages.length > 2);
// return true; return !user;
// should return a boolean value
// can also do !object to return false
// still returns an empty array
// if true, it doesn't filter anything out

console.log(languagesArray);
console.log(languagesArray2);


// ---------------------------------------------------------------------
// Use .map to create an array of strings where each element is a user's email address

// if we put false in the return, we should have an array of false values
const emailArray = users.map(function(user) {
    return user.email;
});
console.log(emailArray);

// or

const emailArray2 = users.map(user => user.email);
console.log(emailArray2);


// ---------------------------------------------------------------------
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalYears = users.reduce((total, years) => {
    return total + years.yearsOfExperience;
}, 0);

// or

const totalYears2 = users.reduce((accumYears, {yearsOfExperience}) => accumYears + yearsOfExperience, 0);


console.log(totalYears)
console.log(totalYears2)

const average = totalYears/users.length;
console.log(average);


// ---------------------------------------------------------------------
// Use .reduce to get the longest email from the list of users.

const longestEmail = emailArray.reduce(function(current, user) {
    if(user.length > current.length) {
        current = user;
    }
        return current;
}, "");

// or

const longestEmail2 = emailArray.reduce((current, user) => {
    return (user.length > current.length) ? user : current;
}, '')

console.log(longestEmail);
console.log(longestEmail2);


// ---------------------------------------------------------------------
// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const instructors = users.reduce((singleString, user) => {
    return `${singleString} ${user.name}`;
}, 'Your instructors are:')
console.log(instructors);

// or

const instructors2 = users.reduce((singleString, user) => `${singleString} ${user.name}`, 'Your instructors are:');
console.log(instructors2);

// or

const instructors3 = users.reduce((singleString, {name}) => {
    return `${singleString} ${name}`;
}, 'Your instructors are:');
console.log(instructors3);

// or

const instructors4 = users.reduce((singleString, {name}) => {
    return singleString + name + ", ";
}, "instructors are: ").slice(0, -2).concat('.');
console.log(instructors4);


// ---------------------------------------------------------------------
// Bonus using the Set feature

let uniqueUserLanguages = users.reduce((languageSet,user) => {
    let userLanguages = user.languages;
    for(let language of userLanguages){
        languageSet.add(languageSet)
    }
    return languageSet;
}, new Set);

console.log(uniqueUserLanguages);

// APPROACH :
// create a long array of all languages using reduce
// convert the array into a set
// will take out any duplicates and return a unique array


// STEPS:
// add all languages using reduce
// convert to Set
// convert Set back to array

const allLanguages = users.reduce((languageSet, user) => {
    return languageSet.concat(user.languages)
}, []);
console.log(allLanguages)

const uniqueLanguages = new Set(allLanguages);
console.log(uniqueLanguages);
const arrUnique = Array.from(uniqueLanguages);
console.log(arrUnique);

// or

const unique = users.reduce((languageSet, user) => {
    user.languages.forEach(language =>
    languageSet.includes(language) ? languageSet : languageSet.push(language)
    )
    return languageSet
}, [])

console.log(unique);


