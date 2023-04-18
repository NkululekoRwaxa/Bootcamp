// accessing elements by ID
let elem = document.getElementById("two");

// accessing elements by tag name
let tags = document.getElementsByTagName("div");

/**
 * document.getElementsByTagName("div").item(1)
 * document.getElementsByTagName("div").namedItem("one")
 * document.getElementsByTagName("h1")
 */

// accessing by class name
let clas = document.getElementsByClassName("example");

// accessing elements by CSS selector
// console.log(document.querySelectorAll("p"));
// console.log(document.querySelector("div"));
// console.log(document.querySelectorAll("div"));

// event handler
function toggle() {
    let p = document.getElementsByTagName("p");
    if (p.style.display === "none") {
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
}

function stop() {
    alert("Ouch! Stop it!");
}

document.getElementById("three").onclick = function() {
    alert("Ouch!");
};