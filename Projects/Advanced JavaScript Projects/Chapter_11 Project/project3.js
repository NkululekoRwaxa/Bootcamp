// on mouse over - add active
document.getElementById("box").addEventListener("mouseover", function() {
    document.getElementById("box").classList.add("active");

});

// on mouse out - remove active
document.getElementById("box").addEventListener("mouseout", function() {
    document.getElementById("box").classList.remove("active");

});

// on mouse move - track mouse postion
document.getElementById("box").addEventListener("mousemove", function(Event) {
    if (document.getElementById("box").classList[1] === "active") {
        let x = Event.clientX;
        let y = Event.clientY;
        document.getElementById("output").innerHTML = "Current position: X: " + x + " Y: " + y;
    }
});