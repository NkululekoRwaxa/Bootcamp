let allowedPasswords = ["user@codecollege.co.za", "user@code.com", "user@codecollege.com"];

function isValid(password, allowed) {
    if (allowed.indexOf(password) < 0) {
        return false;
    } else {
        return true;
    }
}

function resolveORreject(resolve, reject) {
    let value = isValid("user@code.com", allowedPasswords); //isValid("user@gmail.com", allowedPasswords);
    if (value) {
        resolve(value);
    } else {
        reject(value);
    }
}

function valid(value) {
    console.log("Password is valid.");
}

function invalid(value) {
    console.log("Password is invalid.");
}

let promise = new Promise(resolveORreject);
promise.then(valid, invalid);