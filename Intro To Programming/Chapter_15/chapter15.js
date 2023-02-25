var dateToday = document.getElementById("dateToday");
var toDoButton = document.getElementById("whatToDo");
toDoButton.addEventListener("click", displayActivity);

var date = new Date();
displayDate();

function displayDate() {
    dateToday.innerHTML = date.toDateString();
}

function displayActivity() {
    var dayOfWeek = date.getDay();
    var youShould;

    switch (dayOfWeek) {
        case 0:
            youShould = "Take it easy. You've earned it.";
            break;
        case 1:
            youShould = "Gotta do what ya gotta do!";
            break;
        case 2:
            youShould = "Take time to smell the roses!";
            break;
        case 3:
            youShould = "Don't forget to eat breakfast!";
            break;
        case 4:
            youShould = "Mhhhh";
            break;
        case 5:
            youShould = "Make a list of things you like to do.";
            break;
        case 6:
            youShould = "Do one thing from your list of things you like to do.";
            break;
        default:
            youShould = "Error Code 456667355e2-Could Not find Day. g35";
            break;
    }
    document.getElementById("thingToDo").innerHTML = youShould;
}