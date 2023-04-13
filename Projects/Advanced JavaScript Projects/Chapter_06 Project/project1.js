// create recursive function

function doCountUp(start) {
    console.log(start);

    if (start < 10) {
        doCountUp(start + 1);
    } else {
        return 10;
    }
}

doCountUp(0);