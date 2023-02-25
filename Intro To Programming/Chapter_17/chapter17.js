var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];

var maxTemp = 100;
var minTemp = 0;

function generateWeather() {
    for (var i = 0; i < days.length; i++) {
        var todayWeather = weather[Math.floor(Math.random() * weather.length)];
        var todayTemp = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
        document.getElementById("5DayWeather").innerHTML +=
            "<div id='" + days[i] + "' class='" + todayWeather + "'><b>Forecast for " + days[i] + ":</b><br><br>" +
            todayWeather + " and " + todayTemp + " degrees.</div>";
    }
}

generateWeather();