let holderItem;

document.getElementById("box1").addEventListener("drop", function(Event) {
    Event.preventDefault;
    if (Event.target.className === "box") {
        Event.target.appendChild(holderItem);
    }
});

document.getElementById("box2").addEventListener("drop", function(Event) {
    Event.preventDefault;
    if (Event.target.className === "box") {
        Event.target.appendChild(holderItem);
    }
});

document.getElementById("box1").addEventListener("dragover", function(Event) { Event.preventDefault; });
document.getElementById("box2").addEventListener("dragover", function(Event) { Event.preventDefault; });

document.getElementById("dragme").addEventListener("dragstart", function(Event) { holderItem = Event.target; });