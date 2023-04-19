// Form Validator

function validEmail(email) {
    let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;

    if (email.match(emailPattern) === null) {
        return false;
    } else {
        return true;
    }
}

function validPassword(password) {
    let passwordPattern = /[a-zA-Z0-9]/g;

    if (password.match(passwordPattern) === null) {
        return false;
    } else {
        if (password.length >= 3 && password.length <= 8) {
            return true;
        } else {
            return false;
        }
    }
}

function validUsername(username) {
    let usernamePattern = /[a-zA-Z]/g;

    if (username.match(usernamePattern) === null) {
        return false;
    } else {
        return true;
    }
}

document.getElementsByName("submit")[0].addEventListener("click", function(Event) {
    Event.preventDefault();

    // get elements values (inputs)
    let email = document.getElementsByName("email")[0].value;
    let password = document.getElementsByName("password")[0].value;
    let username = document.getElementsByName("username")[0].value;

    if (!validEmail(email)) {
        Event.preventDefault();
        document.getElementsByName("email")[0].classList.add("error");
    }
    if (!validPassword(password)) {
        Event.preventDefault();
        document.getElementsByName("password")[0].classList.add("error");
    }
    if (!validUsername(username)) {
        Event.preventDefault();
        document.getElementsByName("username")[0].classList.add("error");
    }
});