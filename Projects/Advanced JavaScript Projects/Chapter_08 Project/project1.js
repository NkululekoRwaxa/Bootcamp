// scramble a word

let word = "Hello World";

function uniqueIndexes(n) {
    array = [];

    while (array.length < n) {
        let index = Math.floor(Math.random() * n);

        if (array.indexOf(index) === -1) {
            array.push(index);
        }
    }

    return array;
}

function scrambleWord(word) {
    let uniqueIndexesArr = uniqueIndexes(word.length);
    let scrambledWord = "";

    uniqueIndexesArr.forEach(i => {
        scrambledWord += word.charAt(i);
    });

    console.log(scrambledWord);
}

scrambleWord(word);