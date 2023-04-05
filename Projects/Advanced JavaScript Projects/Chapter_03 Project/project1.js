// manipulating an array
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, { test: 'one', score: 55 },
    ['one', 'two']
];

/* 
    Manipulate your array using various methods, such as pop(), push(), shift(), and unshift(), 
    and transform it into the following: ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"] ?
*/

// remove first and last items
theList.shift();
theList.pop();
// ['Svekis', true, 35, null, undefined, { test: 'one', score: 55 }]

// add FIRST to the start of array
theList.unshift("FIRST");
// ['FIRST', 'Svekis', true, 35, null, undefined, { test: 'one', score: 55 }]

// assign 'hello World' to the fourth item value
theList.splice(4, 1, "hello World");
// ['FIRST', 'Svekis', true, 35, "hello World", undefined, { test: 'one', score: 55 }]

// assign MIDDLE to the third index value
theList.splice(3, 1, "MIDDLE");
// ['FIRST', 'Svekis', true, "MIDDLE", "hello World", undefined, { test: 'one', score: 55 }]

// add LAST to the last position in the array
theList.splice(theList.length - 1, 1, "LAST");
// ['FIRST', 'Svekis', true, "MIDDLE", "hello World", undefined, "LAST]

console.log(theList);