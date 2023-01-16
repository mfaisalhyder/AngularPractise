"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id, _Manager_perks;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    get getEmpId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set setEmpAddress(address) {
        this.address = address;
    }
    // If arg-constructor is defined then declaring no-arg constructor will give CTE
    // constructor() {}
    constructor(id, name, department, salary) {
        // # or private keyword to declate state as private. Accessible only inside the class
        _Employee_id.set(this, void 0);
        // This will create a closure based method within the Employee class
        this.getInfoOfEmployee = () => {
            return `This Employee with ID: ${__classPrivateFieldGet(this, _Employee_id, "f")}, works in: ${this.department} for the salary of ${this.salary}`;
        };
        this.getInfoAboutEmployee = () => `This Employee with ID: ${__classPrivateFieldGet(this, _Employee_id, "f")}, works in: ${this.department} for the salary of ${this.salary}`;
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    login() {
        return { id: 1, name: "John", email: "john@gmail.com" };
    }
    // function key word is not allowed inside a class, else CTE comes.s
    // it is bounded with Employee.Prototype; only 1 instance is ever created, and it is used contectually by the caller instance
    getEmployeeInfo() {
        return `This Employee with ID: ${__classPrivateFieldGet(this, _Employee_id, "f")}, works in: ${this.department} for the salary of ${this.salary}`;
    }
}
_Employee_id = new WeakMap();
let empJames = new Employee(1, "James", "Fire Fighting", 5500);
// instance cannot access private fields.
// empJames.id = 1;
console.log(empJames.getEmpId);
empJames.setEmpAddress = ("Mavis Road, Mississauga, ON");
console.log("Login->", empJames.login());
// instance cannot access protected fields.
// empJames.department = "Support";
console.log(empJames);
let info = empJames.getEmployeeInfo();
console.log(info);
// let empJamesInfo = empJames.getInfoOfEmployee();
// console.log(empJamesInfo);
//Inheritence
class Manager extends Employee {
    constructor(id, name, department, salary, perks) {
        super(id, name, department, salary);
        _Manager_perks.set(this, void 0);
        __classPrivateFieldSet(this, _Manager_perks, perks, "f");
    }
    //derived class is allowed to access protected member of parent class
    getManagerDeparment() {
        return `This manager manages ${this.department} department!`;
    }
    getManagerPerks() {
        return `This manager enjoys ${__classPrivateFieldGet(this, _Manager_perks, "f")}, befits!`;
    }
    getEmployeeInfo() {
        let empInfo = this.getInfoAboutEmployee();
        console.log("Protected method from Parent class", empInfo);
        return `This Manager works in: ${this.department} department for the salary of ${this.salary}`;
    }
}
_Manager_perks = new WeakMap();
let kevinManager = new Manager(2, "Kevin", "Software Developemnt", 6500, ["Company Car", "3 weeks international weekend"]);
console.log(kevinManager);
console.log(kevinManager.getManagerDeparment());
console.log(kevinManager.getManagerPerks());
console.log(kevinManager.getEmployeeInfo());
