// email extractor
let ta1 = document.getElementsByName("textarea1");
let ta2 = document.getElementsByName("textarea2");

document.getElementById("button").addEventListener("click", function() {
    let input = ta1[0].value;
    let pattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;

    let validEmails = input.match(pattern);
    let uniqueEmails = []

    for (let i = 0; i < validEmails.length; i++) {
        if (uniqueEmails.indexOf(validEmails[i]) < 0) {
            uniqueEmails.push(validEmails[i]);
        }
    }

    let allEmals = uniqueEmails.join("\n");
    ta2[0].innerHTML = allEmals;
});