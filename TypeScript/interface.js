"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let johnEmp = { id: 1, name: "John", email: "john@gmail.com", salary: 5500 };
// Object destructuring
let { name: johnEmpName, email: johnEmpEmail } = { id: 1, name: "John", email: "john@gmail.com", salary: 5500 };
console.log(johnEmpName);
console.log(johnEmpEmail);
// Array destructuinh
let [firstEmp, secondEmp] = [
    { id: 1, name: "John", email: "john@gmail.com", salary: 5500 },
    { id: 1, name: "John", email: "john@gmail.com", salary: 5500 },
    { id: 1, name: "John", email: "john@gmail.com", salary: 5500 }
];
console.log(firstEmp);
