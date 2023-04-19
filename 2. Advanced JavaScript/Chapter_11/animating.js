document.getElementById("button").onclick = function() {
    let block = document.getElementById("block");
    let x = 0;

    setInterval(function() {
        if (x === 600) {
            clearInterval();
            block.style.left = "0px";
        } else {
            x++;
            block.style.left = x + "px";
        }
    }, 5);
};