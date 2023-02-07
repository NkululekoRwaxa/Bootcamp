var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;

function add_selection(x) {

    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    // debug - recalculate total order amount based on current order
    var currentOrderAmt = 0;
    for (var i = 0; i < totals.length; i++) {
        currentOrderAmt += totals[i];

    }
    // update global variable
    totalOrderAmt = currentOrderAmt;
    //totalOrderAmt += prices[x];

    display_all();
}

// debug - remove selection
function remove_selection(x) {
    // decrement and update quantities - prevent negative values
    if (quantities[x] > 0) {
        quantities[x]--;
        // update totals
        totals[x] = totals[x] - prices[x];
        // debug - recalculate total order amount based on current order
        var currentOrderAmt = 0;
        for (var i = 0; i < totals.length; i++) {
            currentOrderAmt += totals[i];
        }
        // update global variable
        totalOrderAmt = currentOrderAmt;
        //totalOrderAmt += prices[x];
    }

    display_all();
}

function display_all() {

    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    // debug - change add title to remove title
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";

    for (var i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        // debug - change add button to a remove buttom
        myTable += "<td><button onclick='remove_selection(" + i + ")'>Remove</button></td>";

    }

    myTable += "</table>";
    document.getElementById("demo").innerHTML = myTable;
    //document.getElementById("total").innerHTML = "Total order amount is R" + totalOrderAmt;
}

function calculateOrderAmt() {
    return totalOrderAmt;
}

// event listener for checkout button
document.getElementById("checkout").onclick = function() {
    document.getElementById("total").innerHTML = "Total order amount is R" + calculateOrderAmt();
};

window.onload = function() {
    display_all();
}