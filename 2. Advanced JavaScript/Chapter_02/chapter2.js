// backticks
let lang = "JavaScript";
let msg = `Let's learn ${lang}`;

console.log(msg);
console.log(" ");

// escape characters
let str1 = "Hello, what's your name? Is it \"Mike\"?";
let str2 = 'Hello, what\'s your name? Is it "Mike"?';
let str3 = "New \nline";
let str4 = "I'm containing a backslash \\!";

console.log(str1);
console.log(str2);
console.log(" ");

console.log(str3);
console.log(str4);
console.log(" ");

// symbol
let str5 = "JavaScript is fun!";
let str6 = "JavaScript is fun!";
let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");

console.log("These two strings are the same: ", str5 === str6);
console.log("These two symbols are the same: ", sym1 === sym2);
console.log(" ");

// typeof
let tv = 1;
let tv1 = typeof tv;
let tv2 = typeof(tv);
console.log("typeof ", tv, "is: ", tv1);
console.log("typeof() ", tv, "is: ", tv2);
console.log(" ");

// converting data types
let nr1 = 2;
let nr2 = "2";
console.log(`${nr1} * "${nr2}" is`, nr1 * nr2);
console.log(`${nr1} + "${nr2}" is`, nr1 + nr2);