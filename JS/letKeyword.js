// 'let' keyword
// Declare variables with 'let' keyword (Recommended) | Block scope vs Function Scope: Will cover in upcoming chapters.

let value = 10;
console.log(value + 11);

// Important example:

var firstName = "Adarsh";
var firstName = "AD"; // Re-assigning 'firstName' using 'var' keyword is VALID.
console.log(firstName);

let first$Name = "Aadarsh";
let first$Name = "AD"; // Re-assigning 'first$Name' using 'let' keyword is NOT VALID.
console.log(first$Name); // It will give an error.

