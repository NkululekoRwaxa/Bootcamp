window.onload = function() {
    var trainSpeed = 250;
    var trainPostion = 0;
    var animation;

    // get train & add click listener
    var train = document.getElementById("train");
    train.addEventListener('click', speedUp);

    // stop train
    var stopButton = document.getElementById("stopButton");
    stopButton.addEventListener("click", stopTrain);

    function speedUp() {
        if (trainSpeed > 10) {
            trainSpeed -= 10;
        }
        console.log("trian speed: " + trainSpeed);

        clearInterval(animation); // stop animation
        // setInterval(function, milliseconds)
        animation = setInterval(frame, trainSpeed); // show frame every specified time(in milli seconds)
        function frame() {
            // move train by 2px to the right until end of screen
            trainPostion += 2;
            train.style.left = trainPostion + 'px';
            console.log(trainPostion);
            checkPosition(trainPostion);
        }
    }

    function checkPosition(currentPosition) {
        if (currentPosition === 260) {
            alert(":0!");
            console.log("Crash!");
            clearInterval(animation); // stop animation
        }
    }

    function stopTrain() {
        if (trainPostion < 260) {
            clearInterval(animation);
            console.log("Whew! That was close!");
        }
    }
}