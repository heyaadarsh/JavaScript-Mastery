// trim() - Used to remove spaces from the strings.
let firstName = "    AADARSH    ";
console.log(firstName.length);
let updatedName = firstName.trim();
console.log(updatedName);
console.log(updatedName.length);
console.log(firstName.length); // It will remain same.

// toUpperCase() - Used to capitalize the string.
let myName = "narendra";
console.log(myName.toUpperCase());

// toLowerCase() - Coverts string into small letters same as toUpperCase()

// slice - Used for getting some particular part from the string.
let newName = "aaditya";
// slice(starting_Index, End_Index + 1)
let newString = newName.slice(0, 4);
console.log(newString);