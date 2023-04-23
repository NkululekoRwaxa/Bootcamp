let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = 200;
canvas.height = 200;

let penColor = document.getElementById("squareColor");
penColor.addEventListener("change", function(e) {
    color = e.target.value;
    draw(color);
});

document.getElementById("save").addEventListener("click", function(e) {
    let dataURL = canvas.toDataURL();
    document.getElementById("holder").src = dataURL;
});

function draw(color) {
    context.fillStyle = color;
    context.fillRect(70, 70, 100, 100);
}