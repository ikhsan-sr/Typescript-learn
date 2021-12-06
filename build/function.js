"use strict";
//  Data type in return function
function getName() {
    return "Hello, my name is Ikhsan";
}
console.log(getName());
function getAge() {
    return 23;
}
console.log(getAge());
// No Returns
function printName() {
    console.log("print name");
}
// Arguments Type
function multiply(val1, val2) {
    return val1 * val2;
}
const result = multiply(2, 3);
console.log(result);
const Add = (val1, val2) => val1 + val2;
console.log(Add(5, 5));
// Default Parameter
const fullName = (firstName, lastName = "Ikhsan") => {
    return firstName + " " + lastName;
};
console.log(fullName("Muhammad"));
// Optional Parameter
const getAddress = (val1, val2) => {
    return val1 + " " + val2;
};
console.log(getAddress("Magelang"));
