// create arrays
arr1 = new Array("red", "green", "blue"); // wrong way
arr2 = ["black", "orange", "pink"]; // right way
arr3 = new Array(10);
arr4 = [10];

// finding elements
arr5 = [2, 6, 7, 8];
let findValue1 = arr5.find(function(e) { return e === 6 });
let findValue2 = arr5.find(e => e === 10);
let findIndex1 = arr5.indexOf(6);
let findIndex2 = arr5.indexOf(10);

console.log(findValue1, findValue2);
console.log(findIndex1, findIndex2);