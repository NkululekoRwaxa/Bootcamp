function bubble() {
    console.log(this.innerText);
}

let divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", bubble, true);
}