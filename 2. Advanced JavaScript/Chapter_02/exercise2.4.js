let a = 6;
let b = 3;
let c = 7;

console.log(`BEFORE updates: a = ${a}, b = ${b}, c = ${c}`);
console.log(" ");

// Add b to a
a += b;
console.log("Add b to a: updated a = ", a);

// Divide a by c
a /= c;
console.log("Divide a by c: updated a = ", a);

// Replace the value of c with the modulus of c and b
c = c % b;
console.log("Replace c with modulus of c and b: updated c = ", c);
console.log(" ");

// Print all three numbers to the console
console.log(`AFTER updates: a = ${a}, b = ${b}, c = ${c}`);