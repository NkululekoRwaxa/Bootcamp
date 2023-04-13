function startCountDown1(n) {
    console.log("Current value: ", n);

    if (n < 1) {
        return 0;
    } else {
        startCountDown(n - 1);
    }
}

function startCountDown2(n) {
    console.log("Current value: ", n);

    if (n > 0) {
        startCountDown2(n - 1);
    } else {
        return 0;
    }
}
//startCountDown1(10);
startCountDown2(10);