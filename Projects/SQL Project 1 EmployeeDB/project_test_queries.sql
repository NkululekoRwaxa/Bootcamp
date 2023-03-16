-- show all data in Departments table
SELECT * FROM Department;

-- show all data in Roles table
SELECT * FROM Roles;

-- show all data in Salaries table
SELECT * FROM Salaries;

-- show all data in Overtime Hours table
SELECT * FROM OvertimeHours;

-- show all data in Employees table
SELECT * FROM Employees;

-- count number of males, and females employees
SELECT
	DISTINCT gender, COUNT(gender) AS "Total"
FROM
	Employees
GROUP BY gender;

-- list all female employees
SELECT * 
FROM Employees
WHERE gender = 'F';

-- list first name, surname, city, and role of all employees that earn R100 000 and above
SELECT
	emp.first_name, emp.surname, dep.depart_city, rol.role
FROM
	Employees AS emp 
	INNER JOIN Department AS dep ON emp.depart_id = dep.depart_id 
	INNER JOIN Roles AS rol ON 	emp.role_id = rol.role_id
	INNER JOIN Salaries AS sal ON emp.salary_id = sal.salary_id
WHERE
	sal.salary_pa >= CAST( 100000 AS money);

/* list employee id, first_name, email, gender, and the name of department in which the employee works,
for all employees with names that contain  'n', sort in desc order of emp id, then by department name */
SELECT 
	emp.emp_id, emp.first_name, emp.email, emp.gender, dep.depart_name
FROM
	Employees AS emp INNER JOIN Department AS dep
ON	emp.depart_id = dep.depart_id
WHERE emp.first_name ILIKE '%n%'
ORDER BY emp.emp_id DESC, dep.depart_name;

-- project 1 query
SELECT
	emp.emp_id, dep.depart_name, rol.role, sal.salary_pa, ova.overtime_hours
FROM
	Employees AS emp LEFT JOIN Department AS dep ON emp.depart_id = dep.depart_id
	LEFT JOIN Roles AS rol ON emp.role_id = rol.role_id
	LEFT JOIN Salaries AS sal ON emp.salary_id = sal.salary_id
	LEFT JOIN OvertimeHours AS ova ON emp.overtime_id = ova.overtime_id;
	
	
	
	