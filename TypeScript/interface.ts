interface Address {
    streetAddress: string;
    postalCode: string;
    city: string;
    province: string,
    country: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
}

// this makes this interface able to used outside this file
export interface Login {
    login(): User;
    // logout(userInfo: { id: string, email: string }): void;
}

interface IEmployee extends User {
    salary: number
}

let johnEmp: IEmployee = { id: 1, name: "John", email: "john@gmail.com", salary: 5500 };

// Object destructuring
let { name: johnEmpName, email: johnEmpEmail }: IEmployee = { id: 1, name: "John", email: "john@gmail.com", salary: 5500 };
console.log(johnEmpName);
console.log(johnEmpEmail);

// Array destructuinh
let [firstEmp, secondEmp]: Array<IEmployee> = [
    { id: 1, name: "John", email: "john@gmail.com", salary: 5500 },
    { id: 1, name: "John", email: "john@gmail.com", salary: 5500 },
    { id: 1, name: "John", email: "john@gmail.com", salary: 5500 }
];
console.log(firstEmp);