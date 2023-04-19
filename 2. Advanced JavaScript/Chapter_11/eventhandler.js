// mouse event handlers
document.getElementById("div").onmouseover = function() {
    document.getElementById("div").style.backgroundColor = "blue";
};
document.getElementById("div").onmouseleave = function() {
    document.getElementById("div").style.backgroundColor = "pink"
};

window.onload = function() {
    console.log("hi1");

    document.getElementById("div").addEventListener("mousedown", function() { changeColor(this, "green"); });
    document.getElementById("div").addEventListener("mouseup", function() { changeColor(this, "yellow"); });
    document.getElementById("div").addEventListener("dbclick", function() { changeColor(this, "black"); });
    document.getElementById("div").addEventListener("mouseout", function() { changeColor(this, "blue"); });
};

console.log("hi2");

function changeColor(element, color) {
    element.style.backgroundColor = color;
}