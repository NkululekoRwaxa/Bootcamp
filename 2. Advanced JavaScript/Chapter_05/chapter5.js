car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
};

keysArr = Object.keys(car);
valuesArr = Object.values(car);
entriesArr = Object.entries(car);

console.log(keysArr);
console.log(valuesArr);
console.log(entriesArr);

for (const [key, value] of entriesArr) {
    console.log(key + " : " + value);
}