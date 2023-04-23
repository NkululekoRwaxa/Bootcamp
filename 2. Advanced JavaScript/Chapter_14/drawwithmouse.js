window.onload = init;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

function init() {
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mousemove", setPosition);
    canvas.addEventListener("mouseenter", setPosition);

}

let pos = {
    x: 0,
    y: 0
};

function setPosition(e) {
    pos.x = e.pageX;
    pos.y = e.pageY;
}

function draw(e) {
    if (e.buttons !== 1) {
        return;
    }

    context.beginPath();
    context.moveTo(pos.x, pos.y);
    setPosition(e);
    context.lineTo(pos.x, pos.y);
    context.lineWidth = 10;
    context.lineCap = "round";
    context.stroke();
}

let color = "pink";
let c = document.getElementById("color");
c.addEventListener("change", function() {
    color = Event.target.value;
});