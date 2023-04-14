// employee tracking app
class Employee {
	#firstname;
	#lastname;
	#years;

    constructor(firstname, lastname, years) {
        this.#firstname = firstname;
        this.#lastname = lastname;
        this.#years = years;
    }

    get getFullName() { return this.#firstname + " " + this.#lastname; }
    get getYears() { return this.#years; }
}

employees = [];
let emp1 = new Employee("Nkulu", "Rwaxa", 2);
let emp2 = new Employee("Nana", "Ivy", 18);
let emp3 = new Employee("Vava", "Rang", 5);
employees.push(emp1, emp2, emp3);

Employee.prototype.employeeDetails = function() {
    return "Employee's fullname is " + this.getFullName + ", service year(s): " + this.getYears;
};

employees.forEach( employee =>{
	console.log(employee.employeeDetails());	
});


/*for(let i = 0; i < employees.length; i++)
{
	console.log(employees[i].employeeDetails());
}*/















