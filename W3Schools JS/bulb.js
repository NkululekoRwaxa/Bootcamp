document.getElementById("on").addEventListener("click", turnOn);
document.getElementById("off").addEventListener("click", tunOff);

document.getElementById("myImage").addEventListener("mouseover", turnOn);
document.getElementById("myImage").addEventListener("mouseout", tunOff);

function turnOn() {
    document.getElementById("myImage").src = "pic_bulbon.gif"
}

function tunOff() {
    document.getElementById("myImage").src = "pic_bulboff.gif";
}

function timeUp() {
    alert("Time Up");
}
setTimeout(timeUp, 2000);
clearTimeout();