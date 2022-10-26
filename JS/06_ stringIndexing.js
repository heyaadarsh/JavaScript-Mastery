// String Indexing

// In string indexing starts from zero.
// A A D A R S H
// 0 1 2 3 4 5 6

let myName = "AADARSH";
console.log(myName[0]); // It will print A
console.log(myName[1]); // It will print A
console.log(myName[2]); // It will print D
console.log(myName[3]); // It will print A
console.log(myName[4]); // It will print R
console.log(myName[5]); // It will print S
console.log(myName[6]); // It will print H

// Length of string
console.log(myName.length); // It will print the length of the string. (In this length = 7) Spaces will aslo be counted in the total length.

// last index = (length - 1)
console.log(myName[myName.length - 1]); // It will print the last element.
console.log(myName[myName.length - 2]); // It will print the 2nd last element.
console.log(myName[myName.length - 3]); // It will print the 3rd last element.
// and so on....