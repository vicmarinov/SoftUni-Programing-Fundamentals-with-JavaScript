function printEmployeesInfo (employeesNamesArr) {
    class Employee {
        constructor (name) {
            this.name = name;
            this.personalNo = name.length;
        }

        printEmployeeInfo () {
            console.log(`Name: ${this.name} -- Personal Number: ${this.personalNo}`);
        }
    }

    let employees = [];

    for (let employeesName of employeesNamesArr) {
        employees.push(new Employee(employeesName));
    }

    for (let employee of employees) {
        employee.printEmployeeInfo();
    }
}

printEmployeesInfo(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);
printEmployeesInfo(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);