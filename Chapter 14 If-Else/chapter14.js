var placeOrder = document.getElementById("placeOrder");
placeOrder.addEventListener("click", placeTheOrder);

function placeTheOrder() {
    var pizzas = document.getElementById("numPizzas").value;
    var kind = document.getElementById("typePizza").value;
    var place = document.getElementById("deliveryCity").value;

    var orderPrice = calculatePrice(pizzas, kind);
    var deliveryPrice = calculateDelivery(orderPrice, place);

    // create outut
    var theOutput = "<p>Thank you for your order.</p>";
    theOutput += "<p>Your total is R:" + (orderPrice + deliveryPrice) + "</p>";

    // display output
    document.getElementById("displayTotal").innerHTML = theOutput;
}

function calculatePrice(pizzas, type) {
    var orderPrice = Number(pizzas) * 10;
    var extraCharge = 0;

    // todo: calculate extraCharge, if there is one.

    return orderPrice;
}

function calculateDelivery(orderPrice, deliveryCity) {
    var deliveryPrice = 0;

    // todo: calculate delivery price, if there is one

    return deliveryPrice;
}