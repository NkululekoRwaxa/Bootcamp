const one_inch_in_cm = 2.54;
const one_inch_in_m = 0.0254;
const one_lb_in_kg = 0.453592;

let inch = 5.5;
let lb = 143.3;

// convert
let cm = inch * one_inch_in_cm;
let m = inch * one_inch_in_m;
let kg = lb * one_lb_in_kg;

console.log(`${inch} inches is ${cm} cm.`);
console.log(`${inch} inches is ${m} m.`);
console.log(`${lb} pounds is ${kg} kg.`);
console.log(" ");

let bmi = kg / (m ** 2);
console.log("BMI Calculator:", bmi, " kg/m^2");