let output = document.getElementsByClassName("output");
let message = document.getElementsByClassName("message");

// add div to output
let div = document.createElement("div");
div.innerHTML = "I am clickable";
div.setAttribute("clickable", true);
//div.classList.add("box");
output[0].appendChild(div);

// add instruction text to message div
message[0].innerHTML = "Press to Start";

function random(max) {
    return Math.floor(Math.random() * max) + 10;
}