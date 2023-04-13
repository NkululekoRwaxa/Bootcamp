let max = 5;

let rand = Math.floor(Math.random() * max) + 1;
// while-loop

let isCorrect = false;

let guess = prompt("Enter guess 1-5");
while (isCorrect === false)
//
{
    if (Number(guess) === rand)
    //
    {
        isCorrect = true;
        alert("Guess is correct.");
    }
    //
    else
    //
    {
        if (Number(guess) < rand)
        //
        {
            alert("Guess is low.");
        }
        if (Number(guess) > rand)
        //
        {
            alert("Guess is high.");
        }
        guess = prompt("Enter guess 1-5");
    }
}