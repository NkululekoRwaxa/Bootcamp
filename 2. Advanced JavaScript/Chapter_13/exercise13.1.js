function greet(fullname) {
    console.log("Hello,", fullname.join());
}

function makeArray(name, callback) {
    callback(name.split());
}

makeArray("Nkulu Rwaxa", greet);