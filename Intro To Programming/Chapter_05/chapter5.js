// change body background color
document.body.style.backgroundColor = "lightblue";

// center align text 
document.getElementById("myName").style.textAlign = "center";
document.getElementById("aboutMe").style.textAlign = "center";
document.getElementById("buttonP").style.textAlign = "center";

document.getElementById("changeList").style.width = "300px";
document.getElementById("changeList").style.height = "25px";

// change list on button click
document.getElementById("changeList").onclick = newList;
// change heading on button click
document.getElementById("changeHeading").onclick = newHeading;

var item1;
var item2;
var item3;
var heading;

function newList() {
    item1 = prompt("Enter a new first thing: ");
    item2 = prompt("Enter a new second thing: ");
    item3 = prompt("Enter a new third thing: ");
    updateList();
}

function newHeading() {
    heading = prompt("Enter a new heading: ");
    updateHeading();
}

function updateHeading() {
    if (heading === "" || heading === null) {
        return;
    } else {
        document.getElementById("myName").innerHTML = heading;
    }
}

function updateList() {
    if (item1 === null || item2 === null || item3 === null || item1 === "" || item2 === "" || item3 === "") {
        return;
    } else {
        document.getElementById("firstThing").innerHTML = item1;
        document.getElementById("secondThing").innerHTML = item2;
        document.getElementById("thirdThing").innerHTML = item3;
    }
}