function numCheck1() {
    message("Number: " + !isNaN(Event.key));
    return !isNaN(Event.event);
}

function numCheck2() {
    message("Not a number: " + isNaN(Event.key));
    return isNaN(Event.event);
}

function message(m) {
    document.getElementById("wrapper").innerHTML = m;
}

document.getElementById("num1").addEventListener("keypress", numCheck1);
document.getElementById("num2").addEventListener("keypress", numCheck2);