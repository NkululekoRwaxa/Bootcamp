// 1. Doing arithmetic with functions
function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

var product = multiply(36325, 9824);
var sum = add(product, 777);
alert("36325 * 9824 + 777 = " + sum);
//alert(add(multiply(36325, 9824), 777));

// 2. Are these arrays the same?
function areArraysSame(array1, array2) {

    var array1String = array1.join("");
    var array2String = array2.join("");

    if (array1String === array2String) {
        return true;
    } else {
        return false;
    }
}
// function areArraysSame(array1, array2) {
//     if (array1.length !== array2.length) {
//         return false;
//     } else {
//         for (var i = 0; i < array1.length; i++) {
//             if (array1[i] !== array2[2]) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }

var array1 = [1, 2, 3];
var array2 = [1, 2, 3];
var areSame = areArraysSame(array1, array2);
alert("Are arrays [" + array1 + "] & [" + array2 + "] same? " + areSame);

// 3. Hangman using functions.

// pick random word
function pickWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}

// answer array
function setUpAnswerArray(word) {
    var answerArray = [];
    for (i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
}

// show player progress
function showPlayerProgress(answerArray) {
    alert(answerArray.join(" "));
}

// prompt user for guess
function getGuess() {
    var guess = prompt("Enter guess, click 'Cancel' to quit:");
    return guess.toLowerCase();
}

// update game state
function updateGameState(guess, word, answerArray) {

    var count = 0;
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess && answerArray[j] === "_") {
            answerArray[j] = guess;
            count++;
        }
    }
    return count;
}

// show and congratulate player
function showAnswerAndCongratulatePlayer(answerArray) {
    alert("Good job! The answer was " + answerArray.join(""));
}

// run Hangman game
var words = ["fish", "javascript", "monkey", "amazing", "pancakes"];
var word = pickWord(words);
var answerArray = setUpAnswerArray(word);
var remainingLetters = word.length;

while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null || guess === "") {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter!");
    } else {
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}

showAnswerAndCongratulatePlayer(answerArray);