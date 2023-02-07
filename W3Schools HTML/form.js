document.getElementById("submit").onclick = submit;

function submit() {
    var name = document.getElementById("name");
    var surname = document.getElementById("surname");
    // check selected radion button
    var gender = getGender;
    if (male) {
        gender = male.value;
    }
    if (female) {
        gender = female.value;
    }

    alert("Name is " + name.value +
        "\nSurname is " + surname.value +
        "\nGender is " + gender);
}

function getGender() {
    var radios = document.getElementsByName("gender");
    for (const radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
}