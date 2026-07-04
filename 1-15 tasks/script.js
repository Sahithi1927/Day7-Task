let choice = Number(prompt(
`Choose a Task

1. Student Management Systems
2. Employee Salary System
3. Shopping Cart
4. Bank Account
5. Company Login
6. Traffic Signal
7. ATM Machine
8. Cricket Score
9.  Movie Ticket Booking
10. Hospital Appointment
11. Array Method Practice
12. Higher Order Methods
13. String Practice
14. Digital Clock
15. Fake Store API

Enter your choice (1-15):`
));

if (choice === 1) {


//Task 1 - Student Management System
// Student Array

let students = [
    {
        name: "Sahithi",
        id: 101,
        mark: 85
    },
    {
        name: "Sonu",
        id: 102,
        mark: 45
    },
    {
        name: "Vyshu",
        id: 103,
        mark: 25
    }
];


// ------------------------------------
// Task 1 - Print All Students
// ------------------------------------

console.log("Task 1 : Print All Students");

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}


// ------------------------------------
// Task 2 - Print Only Student Names
// ------------------------------------

console.log("Task 2 : Student Names");

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}


// ------------------------------------
// Task 3 - Find Student ID 102
// ------------------------------------

console.log("Task 3 : Find Student ID 102");

for (let i = 0; i < students.length; i++) {

    if (students[i].id === 102) {
        console.log(students[i]);
    }

}


// ------------------------------------
// Task 4 - Print Passed Students
// ------------------------------------

console.log("Task 4 : Passed Students");

for (let i = 0; i < students.length; i++) {

    if (students[i].mark >= 35) {
        console.log(students[i]);
    }

}


// ------------------------------------
// Task 5 - Count Total Students
// ------------------------------------

console.log("Task 5 : Total Students");

console.log(students.length);
}


if (choice === 2) {
//Task 2 - Employee Salary System
// Employee Array

let employees = [
    {
        name: "Sahithi",
        salary: 30000
    },
    {
        name: "Sonu",
        salary: 45000
    },
    {
        name: "Vyshu",
        salary: 60000
    }
];


// ------------------------------------
// Task 1 - Find Highest Salary
// ------------------------------------

console.log("Task 1 : Highest Salary");

let highestSalary = employees[0];

for (let i = 1; i < employees.length; i++) {

    if (employees[i].salary > highestSalary.salary) {
        highestSalary = employees[i];
    }

}

console.log(highestSalary);


// ------------------------------------
// Task 2 - Find Lowest Salary
// ------------------------------------

console.log("Task 2 : Lowest Salary");

let lowestSalary = employees[0];

for (let i = 1; i < employees.length; i++) {

    if (employees[i].salary < lowestSalary.salary) {
        lowestSalary = employees[i];
    }

}

console.log(lowestSalary);


// ------------------------------------
// Task 3 - Add ₹5000 Bonus
// ------------------------------------

console.log("Task 3 : Salary After Bonus");

for (let i = 0; i < employees.length; i++) {

    employees[i].salary = employees[i].salary + 5000;

    console.log(employees[i]);

}


// ------------------------------------
// Task 4 - Print Total Salary
// ------------------------------------

console.log("Task 4 : Total Salary");

let totalSalary = 0;

for (let i = 0; i < employees.length; i++) {

    totalSalary = totalSalary + employees[i].salary;

}

console.log(totalSalary);


// ------------------------------------
// Task 5 - Employees Earning Above ₹40,000
// ------------------------------------

console.log("Task 5 : Employees Earning Above ₹40,000");

for (let i = 0; i < employees.length; i++) {

    if (employees[i].salary > 40000) {

        console.log(employees[i]);

    }

}
}


if (choice === 3) {
//Task 3 - Shopping Cart
// Product Array

let products = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Mouse",
        price: 500
    },
    {
        name: "Keyboard",
        price: 1500
    }
];


// ------------------------------------
// Task 1 - Print Product Names
// ------------------------------------

console.log("Task 1 : Product Names");

for (let i = 0; i < products.length; i++) {

    console.log(products[i].name);

}


// ------------------------------------
// Task 2 - Print Total Bill
// ------------------------------------

console.log("Task 2 : Total Bill");

let totalBill = 0;

for (let i = 0; i < products.length; i++) {

    totalBill = totalBill + products[i].price;

}

console.log("Total Bill =", totalBill);


// ------------------------------------
// Task 3 - Search Product "Mouse"
// ------------------------------------

console.log("Task 3 : Search Product");

for (let i = 0; i < products.length; i++) {

    if (products[i].name === "Mouse") {

        console.log(products[i]);

    }

}


// ------------------------------------
// Task 4 - Apply 10% Discount
// ------------------------------------

console.log("Task 4 : Price After 10% Discount");

for (let i = 0; i < products.length; i++) {

    products[i].price = products[i].price - (products[i].price * 10 / 100);

    console.log(products[i]);

}


// ------------------------------------
// Task 5 - Print Final Bill
// ------------------------------------

console.log("Task 5 : Final Bill");

let finalBill = 0;

for (let i = 0; i < products.length; i++) {

    finalBill = finalBill + products[i].price;

}

console.log("Final Bill =", finalBill);
}

if (choice === 4) {
//Task 4 - Bank Account
// Bank Account Object

let account = {
    name: "Sahithi",
    balance: 50000
};


// ------------------------------------
// Task 1 - Deposit ₹10,000
// ------------------------------------

console.log("Task 1 : Deposit ₹10,000");

account.balance = account.balance + 10000;

console.log("Balance After Deposit =", account.balance);


// ------------------------------------
// Task 2 - Withdraw ₹5,000
// ------------------------------------

console.log("Task 2 : Withdraw ₹5,000");

account.balance = account.balance - 5000;

console.log("Balance After Withdrawal =", account.balance);


// ------------------------------------
// Task 3 - Print Current Balance
// ------------------------------------

console.log("Task 3 : Current Balance");

console.log("Current Balance =", account.balance);


// ------------------------------------
// Task 4 - Check Balance Below ₹20,000
// ------------------------------------

console.log("Task 4 : Balance Check");

if (account.balance < 20000) {

    console.log("Balance is below ₹20,000");

} else {

    console.log("Balance is above ₹20,000");

}

// ------------------------------------
// Task 5 - Print Account Details
// ------------------------------------

console.log("Task 5 : Account Details");

console.log(account);
}


if (choice === 5) {
//Task 5 - Company Login
// Company Login

let username = prompt("Enter Username");

let password = prompt("Enter Password");


// Check Username and Password

if (username === "admin" && password === "1234") {

    console.log("Welcome");
    alert("Welcome");

} else {

    console.log("Invalid Username or Password");
    alert("Invalid Username or Password");

}
}


if (choice === 6) {
//Task 6 - Traffic Signal
// Traffic Signal

let signal = prompt("Enter Signal Color (Red, Yellow, Green)");

switch (signal.toLowerCase()) {

    case "red":
        console.log("Stop");
        alert("Stop");
        break;

    case "yellow":
        console.log("Ready");
        alert("Ready");
        break;

    case "green":
        console.log("Go");
        alert("Go");
        break;

    default:
        console.log("Invalid Signal");
        alert("Invalid Signal");
}
}


if (choice === 7) {
//Task 7 - ATM Machine
// ATM Machine

let balance = 50000;
let choice = Number(
    prompt(
        "ATM Menu\n\n" +
        "1. Balance\n" +
        "2. Deposit\n" +
        "3. Withdraw\n" +
        "4. Exit\n\n" +
        "Enter your choice:"
    )
);

switch (choice) {

    case 1:
        console.log("Current Balance = ₹" + balance);
        alert("Current Balance = ₹" + balance);
        break;

    case 2:
        let deposit = Number(prompt("Enter Deposit Amount"));

        balance = balance + deposit;

        console.log("Balance After Deposit = ₹" + balance);
        alert("Balance After Deposit = ₹" + balance);
        break;

    case 3:
        let withdraw = Number(prompt("Enter Withdraw Amount"));

        if (withdraw <= balance) {

            balance = balance - withdraw;

            console.log("Balance After Withdrawal = ₹" + balance);
            alert("Balance After Withdrawal = ₹" + balance);

        } else {

            console.log("Insufficient Balance");
            alert("Insufficient Balance");

        }

        break;

    case 4:
        console.log("Thank You! Visit Again.");
        alert("Thank You! Visit Again.");
        break;

    default:
        console.log("Invalid Choice");
        alert("Invalid Choice");
}
}


if (choice === 8) {
//Task 8 - Cricket Score
// Cricket Score Array

let score = [10, 25, 40, 60, 80, 100];


// ------------------------------------
// Task 1 - Highest Score
// ------------------------------------

console.log("Task 1 : Highest Score");

let highest = score[0];

for (let i = 1; i < score.length; i++) {

    if (score[i] > highest) {
        highest = score[i];
    }

}

console.log(highest);


// ------------------------------------
// Task 2 - Lowest Score
// ------------------------------------

console.log("Task 2 : Lowest Score");

let lowest = score[0];

for (let i = 1; i < score.length; i++) {

    if (score[i] < lowest) {
        lowest = score[i];
    }

}

console.log(lowest);


// ------------------------------------
// Task 3 - Total Score
// ------------------------------------

console.log("Task 3 : Total Score");

let total = 0;

for (let i = 0; i < score.length; i++) {

    total = total + score[i];

}

console.log(total);


// ------------------------------------
// Task 4 - Average Score
// ------------------------------------

console.log("Task 4 : Average Score");

let average = total / score.length;

console.log(average);
}

if (choice === 9) {
//Task 9 - Movie Ticket Booking
// Movie Ticket Booking

let age = Number(prompt("Enter Your Age"));

let booking = confirm("Do you want to book the movie ticket?");

if (booking) {

    if (age >= 18) {

        console.log("Allow Movie");
        alert("Allow Movie");

    } else {

        console.log("Not Allowed");
        alert("Not Allowed");

    }

} else {

    console.log("Booking Cancelled");
    alert("Booking Cancelled");

}
}

if (choice === 10) {
//Task 10 - Hospital Appointment
// Hospital Appointment

let token = Number(prompt("Enter Token Number (1, 2, or 3)"));

switch (token) {

    case 1:
        console.log("Doctor A");
        alert("Doctor A");
        break;

    case 2:
        console.log("Doctor B");
        alert("Doctor B");
        break;

    case 3:
        console.log("Doctor C");
        alert("Doctor C");
        break;

    default:
        console.log("Invalid Token");
        alert("Invalid Token");
}
}

if (choice === 11) {
//Task 11 - Array Method Practice
// Array Method Practice

let fruits = ["Apple", "Orange", "Banana"];

console.log("Original Array");
console.log(fruits);


// ------------------------------------
// push()
// ------------------------------------

console.log("After push()");

fruits.push("Mango");

console.log(fruits);


// ------------------------------------
// pop()
// ------------------------------------

console.log("After pop()");

fruits.pop();

console.log(fruits);


// ------------------------------------
// shift()
// ------------------------------------

console.log("After shift()");

fruits.shift();

console.log(fruits);


// ------------------------------------
// unshift()
// ------------------------------------

console.log("After unshift()");

fruits.unshift("Grapes");

console.log(fruits);


// ------------------------------------
// splice()
// ------------------------------------

console.log("After splice()");

fruits.splice(1, 1, "Pineapple");

console.log(fruits);


// ------------------------------------
// slice()
// ------------------------------------

console.log("After slice()");

let newFruits = fruits.slice(0, 2);

console.log(newFruits);

console.log("Original Array After slice()");

console.log(fruits);
}


if (choice === 12) {
//Task 12 - Higher Order Methods

let employeeList = [
    { name: "A", salary: 20000 },
    { name: "B", salary: 35000 },
    { name: "C", salary: 50000 },
    { name: "D", salary: 70000 }
];

// map()
let updatedEmployees = employeeList.map(function(emp) {
    return {
        name: emp.name,
        salary: emp.salary + 5000
    };
});

console.log(updatedEmployees);

// filter()
let highSalaryEmployees = employeeList.filter(function(emp) {
    return emp.salary > 30000;
});

console.log(highSalaryEmployees);

// find()
let foundEmployee = employeeList.find(function(emp) {
    return emp.salary === 50000;
});

console.log(foundEmployee);

// reduce()
let totalSalaryTask12 = employeeList.reduce(function(sum, emp) {
    return sum + emp.salary;
}, 0);

console.log(totalSalaryTask12);

// some()
let hasSalaryAbove60k = employeeList.some(function(emp) {
    return emp.salary > 60000;
});

console.log(hasSalaryAbove60k);

// every()
let allAbove15k = employeeList.every(function(emp) {
    return emp.salary > 15000;
});

console.log(allAbove15k);
}


if (choice === 13) {
//Task 13 - String Practice


let company = " Stackly IT ";

console.log("Original String:", company);

// 1. Convert to uppercase
let upperCase = company.toUpperCase();
console.log("Uppercase:", upperCase);

// 2. Convert to lowercase
let lowerCase = company.toLowerCase();
console.log("Lowercase:", lowerCase);

// 3. Remove spaces
let removeSpaces = company.trim();
console.log("Remove Spaces:", removeSpaces);

// 4. Replace "IT" with "Software"
let replaceWord = company.replace("IT", "Software");
console.log("Replace IT with Software:", replaceWord);

// 5. Check whether "Stackly" exists
let checkWord = company.includes("Stackly");
console.log("Does Stackly exist?", checkWord);

// 6. Split using space
let splitString = company.trim().split(" ");
console.log("Split String:", splitString);
}

if (choice === 14) {
//Task 14 - Digital Clock

console.log("Digital Clock Started");

let count = 0;

let clock = setInterval(function () {

    let currentTime = new Date();

    console.log(currentTime.toLocaleTimeString());

    count++;

    if (count === 10) {

        clearInterval(clock);

        console.log("Digital Clock Stopped");

    }

}, 1000);
}


if (choice === 15) {
//Task 15 - Fake Store API

fetch("https://fakestoreapi.com/products")
.then(function(response) {
    return response.json();
})
.then(function(products) {

    // ------------------------------------
    // Print All Product Titles
    // ------------------------------------

    console.log("All Product Titles");

    products.forEach(function(product) {
        console.log(product.title);
    });


    // ------------------------------------
    // Print Only Prices
    // ------------------------------------

    console.log("Only Prices");

    products.forEach(function(product) {
        console.log(product.price);
    });


    // ------------------------------------
    // Print Products Costing More Than ₹100
    // ------------------------------------

    console.log("Products Costing More Than ₹100");

    products.forEach(function(product) {

        if (product.price > 100) {
            console.log(product);
        }

    });


    // ------------------------------------
    // Count Total Products
    // ------------------------------------

    console.log("Total Products");

    console.log(products.length);


    // ------------------------------------
    // Print Category Names
    // ------------------------------------

    console.log("Category Names");

    products.forEach(function(product) {
        console.log(product.category);
    });

})
.catch(function(error) {

    console.log("Error:", error);

});
}