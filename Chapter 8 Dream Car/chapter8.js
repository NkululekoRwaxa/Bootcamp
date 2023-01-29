var dreamCar = {
    make: "Beetle",
    model: "01",
    color: "Tomato",
    year: 2000,
    bodyStyle: "Sports Car",
    price: 6000
};

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;