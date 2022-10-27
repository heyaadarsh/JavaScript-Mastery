// typeof - tell the type of data.
let number = 20;
let myName = "Ayati";

console.log(typeof number);
console.log(typeof myName);

// Number to String Conversion
// Method-1
number = number + ""; // It will convert 20 to "20".
console.log(typeof number);

// Method-2
let value = 100;
value = String(value); // It will convert 100 to "100".
console.log(typeof value);

// String to Number Conversion
// Method-1
let $value = "50";
$value = + $value; // It will convert "50" to 50.
console.log(typeof $value);

// Method-2
let _val = "77";
_val = Number(_val); // It will convert "77" to 77.
console.log(typeof _val);