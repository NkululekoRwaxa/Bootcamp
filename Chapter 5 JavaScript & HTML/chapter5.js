// change body background color
document.body.style.backgroundColor = "lightblue";

document.getElementById("myName").innerHTML = "Nkululeko";

// center align text 
document.getElementById("myName").style.textAlign = "center";
document.getElementById("aboutMe").style.textAlign = "center";

document.getElementById("changeList").style.width = "300px";
document.getElementById("changeList").style.height = "25px";
// change list on button click
document.getElementById("changeList").onclick = newList;

var item1;
var item2;
var item3;

function newList() {
    item1 = prompt("Enter a new first thing: ");
    item2 = prompt("Enter a new second thing: ");
    item3 = prompt("Enter a new third thing: ");
    updateList();
}

function updateList() {
    if (item1 !== null) {
        document.getElementById("firstThing").innerHTML = item1;
    }
    if (item2 !== null) {
        document.getElementById("secondThing").innerHTML = item2;
    }
    if (item3 !== null) {
        document.getElementById("thirdThing").innerHTML = item3;
    }
}