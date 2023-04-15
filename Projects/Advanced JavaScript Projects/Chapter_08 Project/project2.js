// time remaining until target date

class specialDate {
    constructor(days, hours, minutes, seconds) {
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
}

function countDown(endDate) {
    let today = new Date();
    endDate = Date.parse(endDate);

    totalMilliseconds = today.getTime() - endDate;

    // take out milliseconds
    totalMilliseconds = totalMilliseconds / 1000;

    let seconds = Math.floor(totalMilliseconds % 60);
    totalMilliseconds = totalMilliseconds / 60;

    let minutes = Math.floor(totalMilliseconds % 60);
    totalMilliseconds = totalMilliseconds / 60;

    let hours = Math.floor(totalMilliseconds % 24);

    let days = Math.floor(totalMilliseconds / 24);

    return new specialDate(days, hours, minutes, seconds);
}

function timeRemaining() {
    // time remaining until end date as an object
    let obj = countDown("2010/10/01");

    // show count time
    console.log("Time remaining...");
    console.log("\tDays:", obj.days);
    console.log("\tHours:", obj.hours);
    console.log("\tMinutes:", obj.minutes);
    console.log("\tSeconds:", obj.seconds);
}

setTimeout(timeRemaining, 1000);