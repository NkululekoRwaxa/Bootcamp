// Arrow functions

/*  no parameter:
 *   () => body of function
 */

function sayHello() { console.log("Hello."); }
let sayHi = () => console.log("Hello hi.");

//
/*  one parameter:
 *   param => body of function
 */
//

function oneParameter(x) {
    console.log("Parameter is ", x);
}
let oneParam = x => console.log("Paramter is ", x);

//
/** multi-param:
 *  (param1, param2) => body of function
 * 
 */

function addTwoNumbers(x, y) {
    return x + y;
}
let addTwo = (x, y) => x + y;
//console.log(addTwo(2, 3));

// Spread Operator: access individual elements using 3 dots
let spread = ["so", "much", "fun"];
let msg = ["Javascript", "is", ...spread, "and", "very", "powerful"]
let arr = [2, 4];
//console.log(msg);
//console.log(addTwo(...arr));

// Rest Operator: change parameter list dynamically
function addAll(...rest) {
    var sum = 0;
    for (let i = 0; i < rest.length; i++) {
        sum = sum + Number(rest[i]);
    }
    return sum;
}
let Sum = addAll(1, 2, 3);
//console.log(Sum);

// IIFE - Immediately Invoke FunctionExpression - anonymous function
(
    function() {
        console.log("I am IIFE.");
    }
)();

(
    () => {
        console.log("Run right away!");
    }
)();

// Recursive Functions
function getRecursive(n) {
    console.log(n);
    if (n > 0) {
        getRecursive(--n);
    }
}
//getRecursive(5);

function logRecursive(n) {
    console.log("Started function: ", n);

    if (n > 0) {
        logRecursive(n - 1);
    } else {
        console.log("Done with recursion.");
    }

    console.log("Ended function: ", n);
}
//logRecursive(3);

// Nested functions

function outerFunction(n) {
    console.log("Outer function");
    innerFunction(n);

    function innerFunction(x) {
        console.log("Inner function: ", x + 7);
        console.log("Inner function accesses outer variable:", x);
    }
}
//outerFunction(2);

// Anonymous functions
// function () {
//     console.log("Anonymous function");
// };

let fv = function() {
    console.log("Anonymous function");
};

fv();