// 1. create array with values 1,2, and 3
array = [1, 2, 3];

// 2. nest original array into new array 3 times
newArray = [array, array, array];
//console.log(newArray);

// 3. output the value of 2 from one of the arrays
console.log(newArray[0][array.indexOf(2)]);
console.log(newArray[0][1]);