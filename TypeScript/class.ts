import { Login, User } from './interface';

class Employee implements Login {
    // # or private keyword to declate state as private. Accessible only inside the class
    #id: number;
    name: string;
    // accessible only insdie the class or from the sub-class
    protected department: string;
    salary: number;
    // add ! to make variable non mandatory to be initialized either at the time of declaring it or in the constructor
    address!: string;

    get getEmpId(): number {
        return this.#id;
    }

    set setEmpAddress(address: string) {
        this.address = address;
    }

    // If arg-constructor is defined then declaring no-arg constructor will give CTE
    // constructor() {}
    constructor(id: number, name: string, department: string, salary: number) {
        this.#id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    login(): User {
        return { id: 1, name: "John", email: "john@gmail.com" };
    }

    // function key word is not allowed inside a class, else CTE comes.s
    // it is bounded with Employee.Prototype; only 1 instance is ever created, and it is used contectually by the caller instance
    getEmployeeInfo(): string {
        return `This Employee with ID: ${this.#id}, works in: ${this.department} for the salary of ${this.salary}`;
    }

    // This will create a closure based method within the Employee class
    protected getInfoOfEmployee = (): string => {
        return `This Employee with ID: ${this.#id}, works in: ${this.department} for the salary of ${this.salary}`;
    }

    getInfoAboutEmployee = (): string => `This Employee with ID: ${this.#id}, works in: ${this.department} for the salary of ${this.salary}`;


}

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
    #perks: Array<string>;

    constructor(id: number, name: string, department: string, salary: number, perks: string[]) {
        super(id, name, department, salary);
        this.#perks = perks;
    }

    //derived class is allowed to access protected member of parent class
    getManagerDeparment(): string {
        return `This manager manages ${this.department} department!`;
    }

    getManagerPerks(): string {
        return `This manager enjoys ${this.#perks}, befits!`;
    }

    getEmployeeInfo(): string {
        let empInfo = this.getInfoAboutEmployee();
        console.log("Protected method from Parent class", empInfo);
        return `This Manager works in: ${this.department} department for the salary of ${this.salary}`;
    }
}

let kevinManager = new Manager(2, "Kevin", "Software Developemnt", 6500, ["Company Car", "3 weeks international weekend"])
console.log(kevinManager);
console.log(kevinManager.getManagerDeparment());
console.log(kevinManager.getManagerPerks());

console.log(kevinManager.getEmployeeInfo());

