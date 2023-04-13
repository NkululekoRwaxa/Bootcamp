function addNumbers(x, y) {
    return x + y;
}

// call function addNumbers()
let num1 = 10;
let num2 = 3;
let num3 = 6;
let sum1 = addNumbers(num1, num2);
let sum2 = addNumbers(sum1, num3);
console.log(`Sum of ${num1} and ${num2} is ${sum1}`);
console.log(`Sum of ${sum1} and ${num3} is ${sum2}`);