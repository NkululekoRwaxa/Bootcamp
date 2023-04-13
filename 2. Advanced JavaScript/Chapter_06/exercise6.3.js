// add two numbers based on provided operator

function calculate(x, y, operator) {
    if (operator === '-') {
        return (x > y) ? x - y : y - x;
    } else {
        return x + y;
    }
}

// call function
let num1 = 10;
let num2 = 5;
let opr1 = '+';
let opr2 = '-';
let cal1 = calculate(num1, num2, opr1);
let cal2 = calculate(num1, num2, opr2);

console.log(`${num1} ${opr1} ${num2} is ${cal1}`);
console.log(`${num1} ${opr2} ${num2} is ${cal2}`);