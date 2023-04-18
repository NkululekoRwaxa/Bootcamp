// Collapsible accordion component

let titles = document.querySelectorAll(".title");
//console.log(titles);

let myTexts = document.querySelectorAll(".myText");
//console.log(myTexts);

titles.forEach(title => {
    title.addEventListener(
        "click",
        function() {
            title.nextElementSibling.classList.toggle("active");
        });
});