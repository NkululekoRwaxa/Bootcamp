// canvas 1
let c1 = document.getElementById("canvas1");
let cx1 = c1.getContext("2d");
cx1.strokeRect(5, 5, 150, 100);

// canvas 2
let c2 = document.getElementById("canvas2");
cx2 = c2.getContext("2d");
cx2.beginPath();
cx2.arc(60, 60, 20, 0, Math.PI * 2);
cx2.stroke();

// canvas 3
let c3 = document.getElementById("canvas3");
cx3 = c3.getContext("2d");
cx3.drawImage(c1, 10, 10);
cx3.drawImage(c2, 10, 10);