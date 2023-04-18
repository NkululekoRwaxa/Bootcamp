// make a rainbow
document.getElementById("button").onclick = function() {
    let divs = document.getElementsByTagName("div");
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = divs[i].id;
    }
};
/*
// add class
document.getElementById("disappear").onclick = function() {
    document.getElementById("shape").classList.add("hide");
};


// remove class
document.getElementById("change").onclick = function() {
    document.getElementById("shape").classList.remove("blue");
};*/

// toggle class
document.getElementById("magic").onclick = function() {
    document.getElementById("shape").classList.toggle("hide");
};