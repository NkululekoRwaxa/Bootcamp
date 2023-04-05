// random number between 0 and 1
let randomNumber = Math.random();
// multiply by 6 to obtain a number between 0 and 5
randomNumber = randomNumber * 6;
// removes digits past decimal place to provide a whole number
RandomNumber = Math.floor(randomNumber);

// prompt string value
let str = prompt("Enter anything");
let response;

switch (RandomNumber) {
    case 0:
        response = "Zero";
        break;
    case 1:
        response = "One.";
        break;
    case 2:
        response = "Two";
        break;
    case 3:
        response = "Three";
        break;
    case 4:
        response = "Four";
        break;
    case 5:
        response = "Five";
        break;
}

console.log("Input was: ", "'" + str + "'", ". Random number response: ", response);