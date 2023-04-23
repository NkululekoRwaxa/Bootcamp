// EVENT LISTENER FOR IMAGE UPLOAD
document.getElementById("image").addEventListener("change", function(e) {
    // LOAD IMAGE CONVERT INTO DataURL
    if (e.target.files) {
        let imageFile = e.target.files[0]; // GET IMAGE FILE

        let fileReader = new FileReader();
        fileReader.readAsDataURL(imageFile); // READ IMAGE FILE INTO DataURL

        fileReader.onloadend = function(e) {
            // DRAW IMAGE INTO CANVAS
            var imageObj = new Image();
            imageObj.src = e.target.result; // ASSIGN CONVERTED IMAGE INTO IMAGE OBJECT

            imageObj.onload = function(event) {
                var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");

                canvas.width = imageObj.width;
                canvas.height = imageObj.height;

                context.drawImage(imageObj, 0, 0);
            }
        }
    }
});