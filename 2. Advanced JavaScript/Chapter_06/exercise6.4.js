function addTwoNumbers(x, y) {
    return x + y;
}

finalArray = [];
for (let counter = 1; counter <= 10; counter++) {
    let num1 = counter * 5;
    let num2 = counter * counter;

    let result = addTwoNumbers(num1, num2);
    finalArray.push(result);
}
console.log(finalArray);