"use strict";
// let text1 = "I like Node & JavaScript!";

// // find single match node or js or react - one appearing first in text1
// console.log(text1.match(/javascript|node|react/i));

// // find all matches - g
// console.log(text1.match(/reach|node|javascript/gi));

// // character options d is not in [abd]
// let text2 = "T";
// console.log(text2.match(/[abc]/gi));
// console.log(text2.match(/[a-d]/gi)); // using range a-d
// console.log(text2.match(/[a-zA-Z]/)); // check in all alphabets big or small

// // global modifier - match any (all) character
// let text3 = "Just somE text.";
// console.log(text3.match(/./g));
// console.log(text3.match(/\./g)); // find dot(.) char

// // find digit(s)
// let text4 = "I am 35 years old.";
// console.log(text4.match(/\d/g));

// // match all whitespaces
// let text5 = "I like coding, it is fun?!";
// console.log(text5.match(/\s/g));

// // GROUPS
// let text6 = "I love JavaScript!";
// console.log(text6.match(/(love|dislike)\s(javascript|spiders)/gi));

// // look for 4 letter words
// console.log(text6.match(/[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]/g));

// // look for character that may or may not be preceded by n
// let text7 = "You are doing great! ag";
// console.log(text7.match(/n?g/gi));

// // get/make more repeatitions
// let text8 = "123123123a";
// console.log(text8.match(/(123)*/));

// // match on 'abc' both once and twice
// let text9 = 'abcabcabc';
// console.log(text9.match(/(abc){1,2}/));

// let text10 = "I love JavaScript";
// console.log(text10.match(/(?<language>javascript)/i));

// Email Validation
/** [name]@[domain].extension
 * 1. [a-zA-Z0-9._-]+
 * 2. @
 * 3. [a-zA-Z0-9._-]+
 * 4. \.
 * 5. [a-zA-Z._-]+
 * regExp : /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g
 */

// let emailPatten = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
// let validEmail = "maaike_123@email.com";
// let invalidEmail = "maaike@maaike@.com";

// console.log(validEmail.match(emailPatten));
// console.log(invalidEmail.match(emailPatten));

// parsing JSON
let string = "{\"name\" : \"Maaike\", \"age\" : \"30\"}";
let obj = JSON.parse(string);
console.log(obj.name, "is", obj.age);

let dog = {
    "name": "bob",
    "breed": "doberman"
};

let dogStr = JSON.stringify(dog);
let dogJSON = JSON.parse(dogStr);