document.getElementById("img").onchange = function() {
    let files = this.files;

    displayImage(files)
};

function displayImage(files) {
    let read = new FileReader();
    read.onload = function(e) {
        document.getElementById("output").innerHTML = e.target.result;
        document.getElementById("output").classList.add("thump");
    };

    read.readAsDataURL(files[0]);
}