// If-Else statements

// prompt user for age
let input = prompt("What is your age?");

// convert response to a number
let age = Number(input);

// variable to hold console msg
let msg;

if (age >= 21) {
    msg = "Permitted to enter and buy alcohol."
} else if (age >= 19) {
    msg = "Permitted to enter but cannot buy alcohol."
} else {
    msg = "Not permitted to enter or but alcohol."
}

console.log(msg);