var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

var pos = {
    x: 0,
    y: 50
};

function init() {
    draw();
}

function draw() {
    pos.x = pos.x + 5;
    if (pos.x > canvas.width) {
        pos.x = 0;
    }
    if (pos.y > canvas.height) {
        pos.y = 0;
    }

    context.arc(pos.x, pos.y, 20, 0, Math.PI * 2);
    context.stroke();
    window.setTimeout(draw, 50);
}

window.onload = init;