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

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const languagesArray = users.filter(function(language, ){
    if (language.languages.length > 2) {
        return language.languages;
    }

});

console.log(languagesArray)

// Use .map to create an array of strings where each element is a user's email address

const emailArray = users.map(function(email) {
    return email.email;
})
console.log(emailArray);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const yearsExperience = users.reduce((total, years) => {
    return total + years.yearsOfExperience;
}, 0);

console.log(yearsExperience)

const average = yearsExperience/users.length;
console.log(average);

// Use .reduce to get the longest email from the list of users.

const longestEmail = emailArray.reduce(function(current, user) {
    if(user.length > current.length) {
        current = user;
    }
        return current;
}, "");

console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// const instructors = users.reduce(function(singleString, user) {
//     return `${singleString} ${user.name}`;
// }, 'Your instructors are');
// console.log(instructors);
