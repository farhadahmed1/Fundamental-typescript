"use strict";
{
    const employees1 = {
        name: "jamil",
        age: 24,
        address: "Tehran",
        phone: "09123456789",
        email: "jamil@gmail.com",
        isMarried: false,
        gender: "male",
        company: "Meta",
        joinDate: 2020,
        sector: "IT",
    };
    const user1 = {
        name: "Farhad",
        age: 24,
        address: "Tehran",
        phone: "09123456789",
        email: "farhad@gmail.com",
        isMarried: false,
        gender: "male",
        company: "Meta",
    };
    const user2 = {
        name: "fiha",
        address: "dhaka",
        phone: "09123456789",
        email: "fiha@gmail.com",
        isMarried: false,
        gender: "female",
        company: "amazon",
    };
    // array
    const numbers = [1, 2, 3, 4, 5];
    const friend = ["ahmed", "jamal"];
    const employee = ["ahmed", 23, 12324325, false]; //tuples
    /// function to create
    // normal function to create
    function sum(a, b) {
        return a + b;
    }
    sum(2, 3);
    // arrow function to create
    const mul = (a, b) => a * b;
    mul(2, 3);
    const sub = (a, b) => {
        return a + b;
    };
    sub(23, 2);
    // method  = object ---> function
    const userBalance = {
        name: "ahmed",
        age: 23,
        phone: "09123456789",
        email: "ahmed@gmail.com",
        isMarried: false,
        company: "Meta",
        balance: 0,
        addBalance(balance) {
            return this.balance + balance;
        },
    };
    const newArray = numbers.map((elem) => elem * elem);
}
