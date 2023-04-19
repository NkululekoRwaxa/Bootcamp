let starsCollection = document.getElementsByTagName("li");

for (let i = 0; i < starsCollection.length; i++) {
    starsCollection[i].addEventListener("click", function() {

        if (starsCollection[i].classList[1] === "orange") {

            // remove rate
            starsCollection[i].classList.remove("orange");

            let curRates = 0; // current oranges after remove
            for (let j = 0; j < starsCollection.length; j++) {
                if (starsCollection[j].classList[1] === "orange") {
                    curRates++;
                }
            }

            document.getElementsByClassName("output")[0].innerHTML = "You rated this " + curRates + " star(s)";

        } else {
            // add rate
            starsCollection[i].classList.add("orange");

            let curRates = 0; // curent oranges after add
            for (let j = 0; j < starsCollection.length; j++) {
                if (starsCollection[j].classList[1] === "orange") {
                    curRates++;
                }
            }

            document.getElementsByClassName("output")[0].innerHTML = "You rated this " + curRates + " star(s)";
        }
    });

}