// company product catalog

// create array to hold inventory
inventory = [];

// create 3 items with attributes name, model, cost, and qty
item1 = {
    naam: "Samsung",
    model: "Galaxy 100",
    cost: 1500,
    qty: 50
};

item2 = {
    naam: "Samsung",
    model: "Galaxy 20",
    cost: 500,
    qty: 2000
};

item3 = {
    naam: "Samsung",
    model: "Galaxy X",
    cost: 3000,
    qty: 5000
};

// add 3 items to inventory
inventory.push(item1);
inventory.push(item2);
inventory.push(item3);
console.log(inventory);

// get quantity element of your third item, and log it to the console.
console.log("qty of item 3:", inventory[2].qty);