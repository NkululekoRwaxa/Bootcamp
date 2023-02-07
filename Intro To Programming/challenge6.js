// 1. Awesome Animals
var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

console.log(animals);
for (var i = 0; i < animals.length; i++) {
    animals[i] = "Awesome " + animals[i];
}
console.log(animals);

// 2. Random String Generator
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomString = "";

while (randomString.length < 6) {
    var letter = alphabet[Math.floor(Math.random() * alphabet.length)];
    randomString += letter;
}

console.log(randomString);

// 3.H4CK3R SP34Kv
var input = "javascript is awesome";
var output = "";

for (var i = 0; i < input.length; i++) {
    var char = input[i];
    if (char === "a") {
        output = output + 4;
    } else if (char === "e") {
        output = output + 3;
    } else if (char === "o") {
        output = output + 0;
    } else {
        output = output + char;
    }
}
console.log(output);