"use strict";
// name-function
function generatePNR(lastName, pnr) {
    return lastName.concat("-").concat(pnr);
}
console.log(generatePNR("HYDER", "657W"));
// name-function
// arrow-function
const subtract = (num1, num2) => num1 - num2;
console.log(subtract(4, 2));
// arrow-function
// function-expression
const multiply = function (num1, num2) {
    return num1 * num2;
};
console.log(multiply(6, 7));
// function-expression
// optional parameter - no required param can come after an optional param
console.log("-------------------optional parameter-----------------------");
function greetUser(customerName, customerSalutation, age) {
    age === undefined || age === null ? console.log("age not given", age) : console.log(age);
    (age !== undefined && age > 19) ? console.log("Adult") : console.log("Juvenile");
    return customerSalutation ? customerSalutation.concat(" ").concat(customerName) : "Hi, ".concat(customerName);
}
console.log(greetUser("Faisal", "Mr"));
console.log(greetUser("Faisal", "Mr", 15));
// required parameter
console.log("--------------------required parameter---------------------");
function greetCustomer(customerName, customerAge = "18", customerSalutation) {
    console.log(customerSalutation.concat(" ").concat(customerName).concat(" - ").concat(customerAge));
}
greetCustomer("Faisal", undefined, "");
greetCustomer("Irfan", "28", "Mr");
function greetCustomer2(customerName, customerAge = "18") {
    console.log((customerName).concat(" - ").concat(customerAge));
}
greetCustomer2("James");
greetCustomer2("Kevin", "28");
// rest parameter - must be the last parameter in the list
console.log("------------------rest parameter-------------------------");
function calculate(num1, num2, ...num3) {
    console.log(num3[0]);
    return num1 + num2;
}
console.log(calculate(1, 2, ...["NED", "SSUET"]));
console.log(calculate(1, 2, "SSUET", "NED", "KU"));
// generic function
console.log("------------------generic function-------------------------");
function concatGeneric(items) {
    return new Array().concat(items);
}
let concatNumbers = concatGeneric([1, 2, 3]);
let concatStrings = concatGeneric(["1,2,3", "Banks"]);
console.log(concatNumbers);
console.log(concatStrings);
function nameFunction(name, lastName) {
    // return name;
}
console.log(nameFunction("-----Faisal", ""));
const arrowFunction = (arg1, arg2) => arg1.concat("" + arg2);
const arrowFunctionVoid = (arg1, arg2) => console.log(arg1 + "" + arg2);
const arrowFunctionNoReturnType = (arg1, arg2) => arg1.concat("" + arg2);
const functionExpression = function (arg1, arg2) {
    return arg1;
};
function genericFunction(input) {
    return new Array().concat(input);
}
