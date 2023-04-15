// Decoding and Encoding URIs
// URI - uniform rsource identifier
// decodeUri() & encodeUri() - fix broken URIs and decode them back into a string - replaces special chars with %

let uri = "https://www.example.com/submit?name=maaike van putten";
let encode_uri = encodeURI(uri);
let decode_uri = decodeURI(encode_uri);

console.log(encode_uri);
console.log(decode_uri);
console.log(" ");

// decoUriComponent() & encodeUriComponent() - retain characters with special meaning
let encode_uri_comp = encodeURIComponent(uri);
let decode_uri_comp = decodeURIComponent(encode_uri_comp);

console.log(encode_uri_comp);
console.log(decode_uri_comp);
console.log(" ");

// parseInt()
let str_int = "6";
let int_int = parseInt(str_int);
console.log("Type of", int_int, "is", typeof int_int);
console.log(" ");

// forEach()
let arr1 = ["grape", 4, "hello", 5.6, true];

function printStuff(element, index) {
    console.log("Printing stuff:", element, "on array position", index);
}

arr1.forEach(printStuff);

// filter() - returns array
let arr2 = ["squirrel", 5, "Tjed", new Date(), true];

function checkString(element, index) {
    return typeof element === "string";
}

let filter = arr2.filter(checkString);
console.log(filter);
console.log(" ");

// every() - check for all elements in array
console.log(arr2.every(checkString)); // check if every arr2 item is a string

let arr3 = ["a", "b", "c"];
console.log(arr3.every(checkString));

// replace part of array with an array
// 0 - target index (where u want to start copy)
// 3 - start of what to copy
// 4/5 - end what to copy NOTE last index is not included

console.log(arr1.copyWithin(0, 3, 4));
console.log(arr1.copyWithin(0, 3, 5));
console.log(" ");

// map() - change values in an array - returns an array
let arr4 = [1, 2, 3, 4];
let map = arr4.map(x => x * 2);
console.log("Map", arr4, "into", map);
console.log(" ");

// Date Methods
let now = new Date();
console.log("Current date:", now);