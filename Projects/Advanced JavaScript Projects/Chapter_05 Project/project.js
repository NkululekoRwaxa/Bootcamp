// Math Multiplication Table

finalTable = [];
let values = 12;

for (let row = 1; row <= values; row++) {
    tempArr = [];
    for (let col = 1; col <= values; col++) {
        // perform multiplication inside push()
        tempArr.push((row * col));
    }
    finalTable.push(tempArr);
}

//console.table(finalTable);
console.log(finalTable);