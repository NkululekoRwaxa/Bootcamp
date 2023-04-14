// Menu Items Price Calculator

class Item {
    #itemName;
    #itemPrice;

    constructor(itemName, itemPrice) {
        this.#itemName = itemName;
        this.#itemPrice = itemPrice;
    }

    get getItemName() {
        return this.#itemName;
    }

    get getItemPrice() {
        return this.#itemPrice;
    }

    get getItem() {
        return "Name: " + this.getItemName + ", Price: " + this.getItemPrice;
    }
}

class ItemList {
    #itemList; // items list
    #itemNames; // store names of items in item list

    constructor() {
        this.#itemList = [];
        this.#itemNames = [];
    }

    // menu selection - add new item to a list, update item count for existing item in list
    set addItem(item) {

        // first item in items list
        if (this.#itemNames.length === 0) {
            // temporary array to store item and count in items list
            let temp = [];
            temp.push(item, 1);

            this.#itemNames.push(item.getItemName);
            this.#itemList.push(temp);
        }
        // item is not the first in items list
        else {

            // item does not exist in items list
            if (this.#itemNames.indexOf(item.getItemName) < 0) {
                let temp = [];
                temp.push(item, 1);
                this.#itemNames.push(item.getItemName);
                this.#itemList.push(temp);
            }
            // items is already in items list
            else {

                // find where the item is in the items list
                this.#itemList.forEach(curArray => {
                    if (curArray[0].getItemName === item.getItemName) {
                        // update item count
                        curArray[1] += 1;
                    }
                });
            }
        }
    }

    /*get getItemList() {
        console.log(this.#itemList);
    }*/

    get checkOut() {
        let totalCost = 0;

        this.#itemList.forEach(curArray => {
            // calculate total cost
            totalCost += curArray[0].getItemPrice * curArray[1];
        });

        console.log("Total Cost: R", totalCost);
        console.log("Items purchased:");
        this.#itemList.forEach(curArray => {
            console.log("\t", curArray[0].getItem, ",Qty", curArray[1]);
        });
    }
}

// store selected menu items
let list = new ItemList();

// declare items and prices
let item1 = new Item("Coke", 10);
let item2 = new Item("Kit-Kat", 8);
let item3 = new Item("Water", 5);

// select items from menu
list.addItem = item1;
list.addItem = item2;
list.addItem = item2;
list.addItem = item3;
list.addItem = item1;

// checkout
list.checkOut;