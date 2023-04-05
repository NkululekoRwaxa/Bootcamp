myCar = {
    make: "BMW",
    model: "SUV",
    color: "white",
    engine: "manual",
    forSale: false
};

let variable = "color";
myCar[variable] = "red";

variable = "forSale";
myCar[variable] = true;

console.log("make: " + myCar.make);
console.log("model: " + myCar.model);
console.log("forSale: " + myCar.forSale);