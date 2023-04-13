function askName() {
    let input = prompt("Enter your name");
    return input;
}
array = ["happy", "sad", "hungry", "thirsty"];
let index = Math.floor(Math.random() * array.length);

console.log(askName() + " is " + array[index]);