/**
 * Solution from: https://www.encodedna.com/html5/canvas/add-image-to-html5-canvas-using-javascript.htm
 *
window.onload = function() {
    // get the image
    let image = document.getElementById("image");
    
    fillCanvas(image); // fill canvas with the image
    
    function fillCanvas(img) {

        // canvas context
        let canvas = document.getElementById("canvas");
        let context = canvas.getContext("2d");

        canvas.width = img.width;
        canvas.height = img.height;

        context.drawImage(img, 0, 0);
    }

}*/
//  https://educity.app/web-development/how-to-upload-and-draw-an-image-on-html-canvas
let imgInput = document.getElementById('image');
imgInput.addEventListener('change', function(e) {
    if (e.target.files) {
        let imageFile = e.target.files[0]; //here we get the image file
        var reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onloadend = function(e) {
            var myImage = new Image(); // Creates image object
            myImage.src = e.target.result; // Assigns converted image to image object
            myImage.onload = function(ev) {
                var myCanvas = document.getElementById("canvas"); // Creates a canvas object
                var myContext = myCanvas.getContext("2d"); // Creates a contect object
                myCanvas.width = myImage.width; // Assigns image's width to canvas
                myCanvas.height = myImage.height; // Assigns image's height to canvas
                myContext.drawImage(myImage, 0, 0); // Draws the image on canvas
                let imgData = myCanvas.toDataURL("image/*", 0.75); // Assigns image base64 string in jpeg format to a variable
            }
        }
    }
})