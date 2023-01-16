//=========//
//DataTypes
//=========//

// string
let customerName: string;
customerName = "Faisal";
let newCustoemr = customerName.toUpperCase();

console.log(newCustoemr);


// number
let age: number;
age = 25;
age = 25.5;
console.log(age);
let dob = "25";

let result: number;
result = parseInt("23");
console.log("Result->", result);

console.log("DOB->", parseInt(dob));

// Boolean
let active: boolean;
// console.log(active);

active = false;
console.log(active);

// array
let employees = [];
let employeesName: string[];
employeesName = ["Faisal", "James", "Mukesh"];
let employeesArray: Array<string>;


let numList = [1, 23, 4, 5, 6];
let numsGreaterThan2 = numList.filter(num => num > 2);
console.log("numsGreaterThan2->", numsGreaterThan2);
let num = numList.find(number => number == 2);
let num2 = numList.find(number => number == 4);

console.log(num);
console.log(num2);

console.log(num == undefined);
console.log(num2 === num);

let sum = numList.reduce((acc, nums) => acc + nums);
console.log(sum);

// enum
const enum Days {
    Monday, Tuesday, Wednesday
}

let today: Days = Days.Monday;
console.log((today));

// tuple
let swapNumbs: [number, number];

function argFunction(n1: number, n2: number): string[] {
    return ["Alpha","Beta","Gamma"];
}

function swapNumbers(n1: number, n2: number): number[] {
    return [1,2,3,];
}

function tupleFunction(n1: number, n2: number): [number, number, string] {
    return [n2, n1, "3rd param"];
}

let response = swapNumbers(2, 3);
let tupleResponse = tupleFunction(3,4);
console.log(response);
console.log(tupleResponse);

// any

let schoolName;
schoolName = "Nasra school";
schoolName = 123;