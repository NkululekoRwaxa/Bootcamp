// Simple math quiz
function a() {
    return Math.floor(Math.random() * 50);
}

function b() {
    return Math.floor(Math.random() * 50);
}

let x = a();
let y = b();

document.getElementsByClassName("val1")[0].innerHTML = x + "";
document.getElementsByClassName("val2")[0].innerHTML = y + "";

document.getElementById("button").addEventListener("click", function() {
    let sum = x + y;

    let answer = document.getElementsByName("answer")[0].value;

    if (Number(answer) === sum) {
        document.getElementsByClassName("output")[0].classList.add("output");
        document.getElementsByClassName("output")[0].innerHTML = "Correct answer!";
    } else {
        document.getElementsByClassName("output")[0].innerHTML = "Incorrect answer!";
    }

    console.log("guess", Number(answer));
    console.log("sum", sum);
    //setTimeout(location.reload(), 20000);
});