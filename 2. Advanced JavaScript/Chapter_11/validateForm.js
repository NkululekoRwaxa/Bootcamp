function msg(m) {
    document.getElementById("wrapper").innerHTML = m;
}

document.getElementById("form").onsubmit = function(Event) {
    let p = Event.target.children;

    if (p.name.value === "") {
        msg("Needs name!");
        return false;
    }
    if (p.surname.value === "") {
        msg("Needs surname!");
        return false;
    }
    if (p.age.value === "") {
        msg("Needs age!");
        return false;
    }

    return true;
};