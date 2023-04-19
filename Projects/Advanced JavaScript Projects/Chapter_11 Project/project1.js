// build your own analytics
let main = document.getElementsByClassName("container");
let divs = document.getElementsByClassName("box");

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function() {
        let tag = divs[i].localName;
        let klass = divs[i].attributes.getNamedItem("class");
        let id = divs[i].attributes.getNamedItem("id");
        let text = divs[i].innerHTML;

        console.log("My class is " + "\"" + klass.value + "\"");
        console.log("My id is " + "\"" + id.value + "\"");
        console.log("My tag is" + "\"" + tag + "\"");
        console.log("My textContent is " + "\"" + text + "\"");
        console.log(" ");
    });
}

//console.log(div);