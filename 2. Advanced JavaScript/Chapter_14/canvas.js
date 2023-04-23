let canvas = document.getElementById("canvas1");
let context = canvas.getContext("2d");

// canvas size
canvas.width = 500;
canvas.height = 500;

context.fillStyle = "pink";
// fillRect(x,y, width, height)
context.fillRect(50, 50, 100, 100);