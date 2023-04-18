document.getElementById("change").onclick = function() {
    document.getElementById("shape").classList.toggle("circle");
    if (document.getElementById("shape").classList[1] === 'circle') {
        document.getElementById("shape").setAttribute("style", "background-color:red;border:1px solid black");
    }
    //console.log(document.getElementById("shape").classList);
    // let elem = document.getElementById("shape");

    // elem.setAttribute("style", "background-color:red;border:1px solid black");
    // elem.setAttribute("id", "new");
    // elem.setAttribute("class", "circle");
};

// event listener
function toggle() {
    document.getElementById("shape").classList.toggle("circle");
}
document.getElementById("change").addEventListener("click", toggle);