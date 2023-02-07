// create an array of words
var words = ["fish", "javascript", "monkey", "amazing", "pancakes"];

// pick random word
var word = words[Math.floor(Math.random() * words.length)];

// setup answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;
var countGuesses = word.length;
// game loop
while (remainingLetters > 0 && countGuesses > 0) {

    //  show the player their progress
    alert(answerArray.join(" "));
    // show the player number of guesses left
    alert("You have " + countGuesses + " guesses remaining!");

    // guess from a player
    var guess = prompt("Enter guess, press 'Cancel' to quit game.");
    // convert guess into lowercases
    guess = guess.toLowerCase();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        // update game state with guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }

    countGuesses--;
}

// show answer and congratulate a player
alert(answerArray.join(" "));
if (answerArray.join("") === word) {
    alert("Good job! The answer was " + word);
} else {
    alert("Opps, you are out of guesses, the word was " + word);
}