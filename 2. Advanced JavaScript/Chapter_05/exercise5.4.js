// nested-loops

myTable = [];

let cols = 5;
let rows = 5;
let counter = 0;

for (let row = 0; row < rows; row++) {
    tempTable = [];
    //myTable.push(tempTable);

    for (let col = 0; col < cols; col++) {
        //myTable[row].push(counter);
        counter++;
    }
    tempTable.push(counter);
    myTable.push(tempTable);
}
console.table(myTable);