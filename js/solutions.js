function truncateString (str, num) {
    if (typeof str !== "string") {
        return str;
    }
    else if (str.length <= num) {
        return str;
    }
    else if (str.length > num) {
        return str.slice(0, num) + "..."
    } else {
        return false;
    }
}

console.log(truncateString);