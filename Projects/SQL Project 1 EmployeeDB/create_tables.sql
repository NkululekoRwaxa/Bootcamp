-- create Department table
CREATE TABLE Department
(
	depart_id integer PRIMARY KEY,
	depart_name varchar(50) NOT NULL,
	depart_city varchar(50) NOT NULL,
	
	-- UNIQUE Constraint
	CONSTRAINT depart_city_unique UNIQUE (depart_name, depart_city)
);

-- create Roles table
CREATE TABLE Roles
(
	role_id integer PRIMARY KEY,
	role varchar(50) NOT NULL,
	
	-- UNIQUE Constarint
	CONSTRAINT id_role_unique UNIQUE(role)
);

-- create Salaries table
CREATE TABLE Salaries
(
	salary_id integer PRIMARY KEY,
	salary_pa money NOT NULL,
	
	-- CHECK Constraint
	CONSTRAINT salary_pa_not_zero CHECK (salary_pa > CAST(0 AS money)),
	
	-- UNIQUE Constarint
	CONSTRAINT id_salary_unique UNIQUE (salary_pa)
);

-- create Overtime Hours table
CREATE TABLE OvertimeHours
(
	overtime_id integer PRIMARY KEY,
	overtime_hours numeric(3,2) NOT NULL,
	
	-- CHECK Constraint
	CONSTRAINT overtime_hours_not_zero CHECK (overtime_hours >= 0),
	
	-- UNIQUE Constraint
	CONSTRAINT id_hours_unique UNIQUE(overtime_hours)
);

-- create Employees table
CREATE TABLE Employees
(
	emp_id bigserial PRIMARY KEY,
	first_name varchar(100) NOT NULL,
	surname varchar(100) NOT NULL,
	gender char(1) NOT NULL,
	address varchar(100) NOT NULL,
	email varchar(100) NOT NULL,
	CONSTRAINT email_has_at CHECK (email LIKE '%@%'),
	
	-- Foreign Keys
	depart_id integer REFERENCES Department (depart_id),
	role_id integer REFERENCES Roles (role_id),
	salary_id integer REFERENCES Salaries (salary_id),
	overtime_id integer REFERENCES OvertimeHours (overtime_id),
	
	-- UNIQUE Constraint
	CONSTRAINT enique_email UNIQUE (email),
	
	-- CHECK Constraint
	CONSTRAINT check_gender CHECK (gender IN('M', 'F'))
);
