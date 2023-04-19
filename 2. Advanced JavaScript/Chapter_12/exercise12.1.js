document.getElementById("button").addEventListener("click", function() {
    let sText = document.getElementById("sText").value;
    let rText = document.getElementById("rText").value;
    let text = document.getElementById("output").innerHTML.toString();

    let regExp = new RegExp(sText, "i");

    if (text.match(regExp).length > 0) {
        let update = text.replace(new RegExp(sText), new RegExp(rText));
        document.getElementById("output").innerHTML = update;
        console.log(update);
    }

    console.log(sText);
    console.log(rText);
});