// By Rwaxa Nkululeko

// generate a random secret number (1-10)
var secret = Math.floor(Math.random() * 10) + 1;

// prompt user for a guess
var answer = prompt("Please guess the secret number(1-10)");

// convert string guess into an integer to compare
var guess = parseInt(answer);

// for incorrect guess, continually ask for a new guess
while (guess !== secret) {
    if (guess < secret) {
        alert("Incorrect, too low.");
    }
    if (guess > secret) {
        alert("Incorrect, too high.")
    }
    // prompt user for a new guess
    answer = prompt("Please guess the secret number(1-10)");
    guess = parseInt(answer);
}

// for a correct guess - alert user. 
alert("Correct!");