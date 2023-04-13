// set timeout order

let one = () => console.log("one");

let two = () => console.log("two");

let three = () => {
    console.log("three");
    one();
    two();
};

let four = () => {
    console.log("four");
    setTimeout(three);
    setTimeout(one);

    function setTimeout(arg) {
        arg();
    }
};

four();