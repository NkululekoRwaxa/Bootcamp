let canvas = document.getElementById("canvas1");
let context = canvas.getContext("2d");

// rectangle
// context.fillStyle = "red";
// context.lineWidth = 2;
// context.moveTo(0, 20);
// context.lineTo(50, 100);
// context.stroke();
// context.fillRect(10, 5, 280, 140);
// context.clearRect(30, 15, 240, 120);

// circle

// context.beginPath();
// // arc(x,y,radius, start-angle, end-angle)
// context.font = "24px Arial";

// context.fillText("Hello canvas!", 50, 15);
// context.arc(150, 80, 50, 0, Math.PI * 2);
// context.stroke();

// add image to canvas
let img = document.getElementById("img");
context.drawImage(img, 10, 10);