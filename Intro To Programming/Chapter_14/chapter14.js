var placeOrder = document.getElementById("placeOrder");
placeOrder.addEventListener("click", placeTheOrder);

function placeTheOrder() {
    var pizzas = document.getElementById("numPizzas").value;
    var kind = document.getElementById("typePizza").value;
    var place = document.getElementById("deliveryCity").value;
    var birthday = document.getElementById("birthday").value;

    var orderPrice = calculatePrice(pizzas, kind);
    var deliveryPrice = calculateDelivery(orderPrice, place, birthday);

    // create outut
    var theOutput = "<p>Thank you for your order.</p>";
    if (deliveryPrice === 0) {
        theOutput += "<p>You get free delivery.</p>" + "<p>Your total is R:" + (orderPrice) + "</p>";
    } else {
        theOutput += "<p>Your delivery price is R: " + deliveryPrice + "</p>" + "<p>Your total is R:" + (orderPrice + deliveryPrice) + "</p>";
    }

    // display output
    document.getElementById("displayTotal").innerHTML = theOutput;
}

function calculatePrice(pizzas, type) {
    var orderPrice = Number(pizzas) * 10;
    var extraCharge = 0;

    // todo: calculate extraCharge, if there is one.
    if (type === "supreme") {
        extraCharge = Number(pizzas) * 2;
        orderPrice += extraCharge;
    }
    return orderPrice;
}

function calculateDelivery(orderPrice, deliveryCity, birthDay) {
    var deliveryPrice = 0;

    // todo: calculate delivery price, if there is one
    if (((deliveryCity === "anytown") && (orderPrice > 10)) || (birthday === "yes")) {
        deliveryPrice = 0;
    } else {
        deliveryPrice = 5;
    }

    return deliveryPrice;
}