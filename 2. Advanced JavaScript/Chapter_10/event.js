window.onload = function() {
    function random() {
        return Math.floor(Math.random() * 256);
    }

    function changeColor() {
        let red = random();
        let green = random();
        let blue = random();

        this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }

    function addRandomNumber() {
        let elem = document.createElement("p");
        elem.innerText = Math.floor(Math.random() * 100);
        document.body.appendChild(elem);
    }

    document.getElementById("square").addEventListener("click", changeColor);
    document.getElementById("button").addEventListener("click", addRandomNumber);
};