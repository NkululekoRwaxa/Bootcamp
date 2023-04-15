let decodeStr = "How's%20it%20going%3F";
let encodeStr = "How's it going?";

let decodeCompStr = decodeURIComponent(decodeStr);
let encodeCompStr = encodeURIComponent(encodeStr);

let uri = "http: //www.basescripts.com?=Hello World";
let encode_uri = encodeURI(uri);

console.log("Decode Comp:", decodeCompStr);
console.log("Encode Comp:", encodeCompStr);
console.log("Encode:", encode_uri);