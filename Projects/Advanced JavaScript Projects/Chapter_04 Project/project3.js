let array = {
    0: "Rock",
    1: "Paper",
    2: "Scissors"
};

// computer selection
let randCom = Math.floor(Math.random() * 3);

// player selection
let randPlayr = Math.floor(Math.random() * 3);

console.log("Computer: ", array[randCom], " , Player: ", array[randPlayr]);
console.log(" ");

if (randCom === randPlayr) {
    console.log("It's a tie.");
}
//
else {
    // Comp: 0, Plyr: 1
    if (randCom === 0 && randPlayr === 1) {
        // Player's Paper beats Computer's Rock
        console.log("Player's ", array[randPlayr], " beats Computer's ", array[randCom]);
    }

    //Comp: 0, Plyr: 2
    if (randCom === 0 && randPlayr === 2) {
        // Computer's Rock beats Player's Scissors
        console.log("Computer's ", array[randCom], " beats Player's ", array[randPlayr]);
    }

    // Comp: 1, Plyr: 0
    if (randCom === 1 && randPlayr === 0) {
        // Computer's Paper beats Player's Rock
        console.log("Computer's ", array[randCom], " beats Player's ", array[randPlayr]);
    }

    // Comp: 1, Plyr: 2
    if (randCom === 1 && randPlayr === 2) {
        // Player's Scissors beats Computer's Paper
        console.log("Player's ", array[randPlayr], " beats Computer's ", array[randCom]);
    }

    // Comp: 2, Plyr: 0
    if (randCom === 2 && randPlayr === 0) {
        // Player's Rock beat Computer's Scissors
        console.log("Player's ", array[randPlayr], " beats Computer's ", array[randCom]);
    }

    // Comp: 2, Plyr: 1
    if (randCom === 2 && randPlayr === 1) {
        // Computer's Scissors beat Player's Paper
        console.log("Computer's ", array[randCom], " beats Player's ", array[randPlayr]);

    }

}