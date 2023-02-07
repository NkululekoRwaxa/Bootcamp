// copyrights year
var date = new Date();
document.getElementById("year").innerHTML = date.getFullYear();

// scroll up
var scrollUp = document.getElementById("scroll-up");
scrollUp.addEventListener("click", scrollToTop);

function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}