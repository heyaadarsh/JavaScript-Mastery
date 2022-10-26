// Rules for naming variables

// You can't start with a number.
// ex- 01Name (Invalid)
// Name01 (Valid)

// var 1val = 10; (Will give an error)

var val1 = 10;
console.log(val1 * 10);
console.log(val1 ** 10); // double star id used for giving power to a number

// You can only use small/capital letter, undersore(_) or dollor symbol($) as the first letter of variable name.

var firstName = "Ayati"; // Camel case writing: We use capital letter in first letter of words.
var _fisrtName = "Ayati";
var $firstNmae = "Ayati";
var first$Name = "Ayati";
var first_name = "Ayati";

console.log(firstName);
console.log(_fisrtName);
console.log($firstNmae);
console.log(first$Name);
console.log(first_name);

// We can't uses spaces while naming a variable.
// var first Name = "Ayati"; (Invalid)

// General Convention
// Use small letter as first letter of variable name and further use camel case writing.