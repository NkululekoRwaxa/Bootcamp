// for of loop
array = [];

for (let i = 0; i < 10; i++) {
    array.push(i);
}

console.log(array);

for (let i = 0; i < array.length / 2; i++) {
    console.log(array[i]);
}

for (let x of array) {
    console.log(x + " ");
}