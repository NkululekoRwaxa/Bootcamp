// callbacks - function that takes another function as an argument
function getGrade(score, callback) {
    let grade;
    switch (true) {
        case score >= 90:
            grade = "A";
            break;
        case score >= 80:
            grade = "B";
            break;
        case score >= 70:
            grade = "C";
            break;
        case score >= 60:
            grade = "D";
            break;
        default:
            grade = "F";
    }

    callback(grade);
}

function judge(grade) {
    switch (true) {
        case grade == "A":
            console.log("You got an", grade, ": amazing!");
            break;
        case grade == "B":
            console.log("You got a", grade, ": well done!");
            break;
        case grade == "C":
            console.log("You got a", grade, ": alright.");
            break;
        case grade == "D":
            console.log("You got a", grade, ": hmmm...");
            break;
        default:
            console.log("An", grade, "! What?!");
    }
}

getGrade(48, judge);

/**
 * Promises - A Promise is a special object that connects code that needs to produce
 * a result and the code that needs to use this result in the next step.
 */
// function resolveORreject(resolve, reject) {
//     let x = 10;
//     if (x > 20) {
//         resolve(x); // success(x)
//     } else {
//         reject("Too low"); // reject("Too low")
//     }
// }

// function success(value) {
//     console.log("Success:", value); // value = x = 10
// }

// function reject(value) {
//     console.log("Error:", value); // value = "Too low"
// }
// let promise = new Promise(resolveORreject);

// promise.then(success, reject); // call resolveORreject(success, reject)


// const promise = new Promise((resolve, reject) => { resolve("success!"); })
//     .then(value => {
//         console.log(value);
//         return "we";
//     })
//     .then(value => {
//         console.log(value);
//         return "can";
//     })
//     .then(value => {
//         console.log(value);
//         return "chain";
//     })
//     .then(value => {
//         console.log(value);
//         return "promises";
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(value => {
//         console.log(value);
//     });

function saySomething(x) {
    return new Promise(
        resolve => {
            setTimeout
                (
                    () => {
                        resolve("something " + x);
                    }, 2000
                );
        }
    );
}
async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
}
talk(2);
talk(4);
talk(8);