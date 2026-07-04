// ==========================
// Employee Payroll System
// ==========================

// Employee Data
let employees = [
    {
        id: 101,
        name: "Sahithi",
        department: "HR",
        salary: 35000
    },
    {
        id: 102,
        name: "Swetha",
        department: "Developer",
        salary: 60000
    },
    {
        id: 103,
        name: "Krishna",
        department: "Testing",
        salary: 45000
    },
    {
        id: 104,
        name: "Priya",
        department: "Manager",
        salary: 80000
    }
];


// =====================================
// 1. View Employees
// =====================================

console.log("===== Employee List =====");

employees.forEach(function(employee) {
    console.log(employee);
});


// =====================================
// 2. Search Employee by ID
// =====================================

let employeeId = 102;

let employee = employees.find(function(emp) {
    return emp.id === employeeId;
});

console.log("===== Search Employee =====");
console.log(employee);


// =====================================
// 3. Add Bonus
// =====================================

let bonus = 5000;

let updatedEmployees = employees.map(function(emp) {

    return {
        ...emp,
        salary: emp.salary + bonus
    };

});

console.log("===== Employees After Bonus =====");
console.log(updatedEmployees);


// =====================================
// 4. Find Highest Salary
// =====================================

let highestSalary = employees.reduce(function(max, emp) {

    if (emp.salary > max.salary) {
        return emp;
    } else {
        return max;
    }

});

console.log("===== Highest Salary Employee =====");
console.log(highestSalary);


// =====================================
// 5. Find Lowest Salary
// =====================================

let lowestSalary = employees.reduce(function(min, emp) {

    if (emp.salary < min.salary) {
        return emp;
    } else {
        return min;
    }

});

console.log("===== Lowest Salary Employee =====");
console.log(lowestSalary);


// =====================================
// 6. Calculate Total Salary
// =====================================

let totalSalary = employees.reduce(function(total, emp) {

    return total + emp.salary;

}, 0);

console.log("===== Total Salary =====");
console.log(totalSalary);


// =====================================
// 7. Filter Salary Above 40000
// =====================================

let salaryAbove40000 = employees.filter(function(emp) {

    return emp.salary > 40000;

});

console.log("===== Salary Above 40000 =====");
console.log(salaryAbove40000);


// =====================================
// 8. Print Employee Report
// =====================================

console.log("===== Employee Report =====");

employees.forEach(function(emp) {

    console.log(`
ID          : ${emp.id}
Name        : ${emp.name}
Department  : ${emp.department}
Salary      : ₹${emp.salary}
-------------------------------
`);

});


// =====================================
// 9. Display Current Date & Time
// =====================================

let today = new Date();

console.log("===== Current Date & Time =====");
console.log(today);


// =====================================
// 10. Fetch Employee Data from API
// =====================================

fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response) {
    return response.json();
})
.then(function(data) {

    console.log("===== Employee Data From API =====");

    data.forEach(function(emp) {

        console.log(`
ID      : ${emp.id}
Name    : ${emp.name}
Email   : ${emp.email}
`);

    });

})
.catch(function(error) {
    console.log(error);
});