// combining switch cases

let prize = prompt("Enter a between 0 and 10");
let msg = "My selection: ";

switch (Number(prize)) {
    case 0:
    case 1:
        msg += "Biggest prize.";
        break;
    case 2:
    case 3:
    case 4:
        msg += "Car prize";
        break;
    case 5:
    case 6:
    case 7:
    case 8:
        msg += "Cruize ship prize.";
        break;
    case 9:
    case 10:
        msg += "Grocery prize.";
        break;
}
console.log(msg);