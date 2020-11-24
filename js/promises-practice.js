// we use promises when we need to wait on something
function getAge (personName) {
    let agifyPromise = fetch(`https://api.agify.io/?name=${personName}`);
    return agifyPromise
        .then(response => response.json())
        .then(data => data.age)
        .catch(console.error)
}

// const connorsAge = getAge()
// this is a promise now

// once we know response is okay, we convert to JSON




async function getAgeAsync(personName) {
    try {
        let agifyPromise = await fetch(`https://api.agify.io/?name=${personName}`);
        let person = await agifyPromise.json()
        return person.age

    } catch(err) {
        console.error(err)
    }
}
getAge("Kristen").then(console.log);


getAgeAsync("Kristen").then(console.log);