// event target
function sendMsg(msg) {
    document.getElementById("welcome").innerHTML = msg;
}

function sendInfo(Event) {
    let p = Event.target.parentElement;
    console.log(p);
    //sendMsg("Welcome " + p.firstname.value + " " + p.surname.value);
    //console.log("Welcome " + p.firstname.value + " " + p.surname.value);
}

document.getElementsByTagName("input").button.Event = sendInfo(Event);