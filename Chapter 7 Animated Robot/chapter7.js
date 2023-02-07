var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");
var leftArm = document.getElementById("leftarm");

rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;

    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }

}

function moveRightLeft(e) {
    var robotPart = e.target;
    var left = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 59) {
            clearInterval(id);
        }
    }
}

/* animate text using DOM */
var leftOffset = 0;
var rightOffset = 1050;

var moveText1 = function() {
    $("#text1").offset({ left: leftOffset });

    leftOffset++;

    if (leftOffset > 1050) {
        leftOffset = 0;
    }
};

var moveText2 = function() {
    $("#text2").offset({ left: rightOffset });

    rightOffset--;

    if (rightOffset < 0) {
        rightOffset = 1050;
    }
};
setInterval(moveText1, 10);
setInterval(moveText2, 10);