// evaluate a number

// random number between 1 and 10
let number = Math.floor(Math.random() * 10) + 1;

let input = prompt("Guess number between 1 and 10");
let guess = Number(input);

if (guess > number) {
    console.log("Guess is GREATER THAN dynamic number.");
} else if (guess < number) {
    console.log("Guess is LESS THAN dynamic number.");
} else {
    console.log("Guess is EQUAL TO dynamic number.");
}