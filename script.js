// Initialize an empty array to store employee data
let employeesArray = [];

// Define the employee object template
const Employee = function(firstName, lastName, salary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.salary = salary;
};

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  let stillCollecting = true;
  while (stillCollecting) {
    const firstName = window.prompt("Please provide employee first name: ");
    const lastName = window.prompt("Please provide employee last name: ");
    const salary = parseFloat(window.prompt("Please provide employee salary: "));
    const employee = new Employee(firstName, lastName, salary);
    employeesArray.push(employee);
    stillCollecting = window.confirm("Do you want to add another?");
  }
  // Sort employees by last name alphabetically
  employeesArray.sort((a, b) => a.lastName.localeCompare(b.lastName));
  
  // Return the array of collected employees
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;
  // Calculate the total salary
  for (const employee of employeesArray) {
    totalSalary += employee.salary;
  }
  // Calculate the average salary
  const averageSalary = employeesArray.length > 0 ? totalSalary / employeesArray.length : 0;
  // Display the average salary
  console.log("Average Salary:", averageSalary.toLocaleString("en-US", { style: "currency", currency: "USD" }));
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  if (employeesArray.length === 0) {
    console.log("No employees available.");
    return;
  }
  // Get a random index within the range of employeesArray length
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  // Get the random employee using the randomIndex
  const randomEmployee = employeesArray[randomIndex];
  // Display details of the random employee
  console.log("Random Employee:");
  console.log("First Name:", randomEmployee.firstName);
  console.log("Last Name:", randomEmployee.lastName);
  console.log("Salary:", randomEmployee.salary.toLocaleString("en-US", { style: "currency", currency: "USD" }));
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');
  // Clear the employee table
  employeeTable.innerHTML = '';
  // Loop through the employee data and create a row for each employee
  for (const employee of employeesArray) {
    const newTableRow = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = employee.firstName;
    newTableRow.append(firstNameCell);
    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = employee.lastName;
    newTableRow.append(lastNameCell);
    const salaryCell = document.createElement("td");
    salaryCell.textContent = employee.salary.toLocaleString("en-US", { style: "currency", currency: "USD" });
    newTableRow.append(salaryCell);
    employeeTable.append(newTableRow);
  }
}

// Function to track employee data
const trackEmployeeData = function() {
  // Collect employee data
  const employees = collectEmployees();
  // Display collected employee data
  console.table(employees);
  // Display the average salary of employees
  displayAverageSalary(employees);
  console.log('==============================');
  // Display details of a random employee
  getRandomEmployee(employees);
  // Sort employees by last name
  employees.sort(function(a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });
  // Display sorted employee data in HTML table
  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);