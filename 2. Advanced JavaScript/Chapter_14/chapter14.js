// local file reader
let msg = document.getElementById("msg");
let out = document.getElementById("output");

if (window.FileReader) {
    msg.innerHTML = "Go to go!<br>";
} else {
    msg.innerHTML = "No FileReader! :(<br>";
}

// uploading a file
document.getElementById("file").onchange = function() {
    let files = this.files;
    for (let i = 0; i < files.length; i++) {
        console.log("Name:", files[i].name);
        console.log("Type:", files[i].type);

        msg.innerHTML += files[i].name + "<br>";
    };

    uploadAndRead(files);
};

// reading files
function uploadAndRead(files) {
    let read = new FileReader();

    read.onload = function(e) {
        out.innerHTML = e.target.result;
    };

    read.readAsText(files[0]);
}