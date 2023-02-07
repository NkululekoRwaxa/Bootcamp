// show current time 
var displayTime = document.getElementById("clock");
// show alarm set
var feedback = document.getElementById("feedback");

// set and clear alarm
document.getElementById("set").addEventListener("click", setAlarm);
document.getElementById("clear").addEventListener("click", clearAlarm);

// alarm ref: https://mixkit.co/free-sound-effects/alarm/
var audio = new Audio("alarm.wav");
audio.loop = true;

// set and clear alarm variables
var alarmTime = null;
var alarmTimeout = null;

function setAlarmTime(value) {
    alarmTime = value;
}

function setAlarm() {
    if (alarmTime) {
        var currentTime = new Date();
        var timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > currentTime) {
            var timeout = timeToAlarm.getTime() - currentTime.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            feedback.innerHTML = "Alarm is set to " + `${timeToAlarm.getHours()}` + " : " + `${timeToAlarm.getMinutes()}`;
            alert("Alarm is set.");
        } else {
            alert("Select time in the future.");
        }
    }
}

function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert("Alarm is cleared.");
        feedback.innerHTML = "";
    } else {
        alert("No alarm was set.");
    }
}

function showTime() {
    var date = new Date();
    var hours = formatTime(date.getHours());
    var minutes = formatTime(date.getMinutes());
    var seconds = formatTime(date.getSeconds());

    displayTime.innerText = `${hours} : ${minutes} : ${seconds}`;
}

function formatTime(time) {
    if (time < 10) {
        return "0" + time;
    }
    return time;
}
// update clock every second
setInterval(showTime, 1000);