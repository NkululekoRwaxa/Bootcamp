var money = 20;
var lunches = 0;

document.getElementById("money").innerHTML = money;

document.getElementById("placeOrder").addEventListener("click", buyLuches);

function buyLuches() {
    resetForm();
    var day = 0;
    while (money > 0) {
        day++;
        var priceToday = getSandwichPrice();
        var numSandwiches = document.getElementById("numSandwiches").value;
        var totalPrice = priceToday * numSandwiches;

        if (money >= totalPrice) {
            money -= totalPrice;
            lunches++;

            document.getElementById("receipt").innerHTML +=
                "<p>On day " + day + ", sandwiches are: $" + priceToday + ". You have $" + money.toFixed(2) + " left.</p>";
        } else {
            document.getElementById("receipt").innerHTML += "<p>Today, sandwiches are: $" + priceToday + ". You don't have enough money. Maybe your sister will give you some of her sandwich.</p>";
            money = 0;
        }
    }
    document.getElementById("receipt").innerHTML += "<p>You bought " + lunches + " lunches this week.</p>";
}

function resetForm() {
    money = 20;
    lunches = 0;
    document.getElementById("receipt").innerHTML = "";
}

function getSandwichPrice() {
    var sandwichPrice = (Math.random() * (5 - 1) + 1).toFixed(2);
    return sandwichPrice;
}