/**
 * Main methods in local storage: key(), setItem(), removeItem(), getItem(), and clear()
 */

/**
 * using key() - get value of 2nd item in storage
 */
console.log(localStorage.key(1));

/**
 * using setItem() - set key-value pair
 */
localStorage.setItem("school", "code college");
localStorage.setItem("grade", "one");
console.log(localStorage.key(1)); // grade
console.log(localStorage.length);

/** 
 * example: NOTE before storing any onjects - covert into JSON.stringify()
 */
const Car = {
    brand: "BMW",
    color:"red",
    price:100
};
/** 
 * store Car object as a string with key = car
 */
localStorage.setItem("car", JSON.stringify(Car));
console.log(localStorage.getItem("car"));

/**
 * to use object in a code: convert into an object with JSON.parse()
 */
const carObj = JSON.parse(localStorage.getItem("car"));
console.log(carObj.color);

/**
 * removeItem()
 */

/**
 * clear()
 */