var addButton = document.getElementById("addIt");
addButton.addEventListener("click", addTheThing);

var printButton = document.getElementById("printable");
printButton.addEventListener("click", printView);

var myList = [];
var myListArea = document.getElementById("wishList");

function addTheThing() {
    var theThing = document.getElementById("iWant");
    // validate input
    if (!theThing.value.replace(/\s/g, '').length) {
        alert("Please enter valid input.");
        resertInput(theThing);
        return;
    } else {
        addToTheList(theThing);
        resertInput(theThing);
    }
}

function addToTheList(thingToAdd) {
    myList.push(thingToAdd.value);

    // add thingToAdd on webpage
    var newListItem = document.createElement("li");
    newListItem.innerHTML = myList[myList.length - 1];
    myListArea.appendChild(newListItem);

}

function resertInput(inputToReset) {
    inputToReset.value = "";
}

function printView() {
    var listPage = document.getElementById("listPage");
    var formArea = document.getElementById("formArea");

    formArea.style.display = "none";
    listPage.className = "print";
    myListArea.innerHTML = "";
    myList.sort();

    for (var i = 0; i < myList.length; i++) {
        wishList.innerHTML += "<li>" + myList[i] + "</li>";
    }
    window.print();
}