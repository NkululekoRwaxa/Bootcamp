-- Creating and Querying Views
CREATE OR REPLACE VIEW nevada_counties_pop_2010 AS
	SELECT 
		geo_name,
		state_fips,
		county_fips,
		p0010001 AS pop_2010
	FROM us_counties_2010
	WHERE state_us_abbreviation = 'NV'
	ORDER BY county_fips;
	
SELECT * FROM nevada_counties_pop_2010
LIMIT 5;

CREATE OR REPLACE VIEW county_pop_change_2010_2000 AS
	SELECT 
		c2010.geo_name,
		c2010.state_us_abbreviation AS st,
		c2010.state_fips,
		c2010.county_fips,
		c2010.p0010001 AS pop_2010,
		c2000.p0010001 AS pop_2000,
		round( (CAST(c2010.p0010001 AS numeric(8,1)) - c2000.p0010001)/ c2000.p0010001 * 100, 1 ) AS pct_change_2010_2000
	FROM us_counties_2010 c2010 INNER JOIN us_counties_2000 c2000
	ON c2010.state_fips = c2000.state_fips AND c2010.county_fips = c2000.county_fips
	ORDER BY c2010.state_fips, c2010.county_fips;
	
SELECT 
	geo_name,
	st,
	pop_2010,
	pct_change_2010_2000
FROM county_pop_change_2010_2000
WHERE st = 'NV'
LIMIT 5;

-- Inserting, Updating, and Deleting Data Using a View
CREATE OR REPLACE VIEW employees_tax_dept AS
	SELECT 
		emp_id,
		first_name,
		last_name,
		dept_id
	FROM employees
	WHERE dept_id = 1
	ORDER BY emp_id
 	WITH LOCAL CHECK OPTION;
	
-- Inserting Rows Using the employees_tax_dept View
INSERT INTO employees_tax_dept (first_name, last_name, dept_id)
VALUES ('Suzanne', 'Legere', 1);

INSERT INTO employees_tax_dept (first_name, last_name, dept_id)
VALUES ('Jamil', 'White', 2);

SELECT * FROM employees_tax_dept;
SELECT * FROM employees;

-- Updating Rows Using the employees_tax_dept View
UPDATE employees_tax_dept
SET last_name = 'Le Gere'
WHERE emp_id = 9;

SELECT * FROM employees_tax_dept;

-- Deleting Rows Using the employees_tax_dept View
DELETE FROM employees_tax_dept
WHERE emp_id = 9;

-- Programming Your Own Functions
-- Functions created in separate files

-- Updating Data with a Function
ALTER TABLE teachers ADD COLUMN personal_days integer;

UPDATE teachers
SET hire_date = '2020-01-01'::timestamptz
WHERE first_name = 'Nkulie';

SELECT 
	first_name,
	last_name,
	hire_date,
	personal_days
FROM teachers;

SELECT update_personal_days();

-- Using the Python Language in a Function
CREATE LANGUAGE plpython3u;
CREATE EXTENSION plpythonu;

CREATE OR REPLACE FUNCTION trim_county(input_string text)
RETURNS text AS $$
	import re
	cleaned = re.sub(r' County', '', input_string)
	return cleaned
$$ LANGUAGE plpython3u;

SELECT 
	geo_name,
	trim_county(geo_name)
FROM us_counties_2010
ORDER BY state_fips, county_fips
LIMIT 5;

-- Automating Database Actions with Triggers
-- Creating Tables to Track Grades and Updates
CREATE TABLE grades
(
	student_id bigint,
	course_id bigint,
	course varchar(30) NOT NULL,
	grade varchar(5) NOT NULL,
	PRIMARY KEY(student_id, course_id)
);


INSERT INTO grades
VALUES 
	(1, 1, 'Biology 2', 'F'),
	(1, 2, 'English 11B', 'D'),
	(1, 3, 'World History 11B', 'C'),
	(1, 4, 'Trig 2', 'B');
	
SELECT * FROM grades;

CREATE TABLE grades_history
(
	student_id bigint NOT NULL,
	course_id bigint NOT NULL,
	change_time timestamptz NOT NULL,
	course varchar(30) NOT NULL,
	old_grade varchar(30) NOT NULL,
	new_grade varchar(30) NOT NULL,
	PRIMARY KEY (student_id, course_id, change_time)
);

-- Creating the Function and Trigger in a SEPARATE file
CREATE TRIGGER grades_update
AFTER UPDATE ON grades
FOR EACH ROW
EXECUTE PROCEDURE record_if_grade_changed();

SELECT * FROM grades_history;
SELECT * FROM grades;

UPDATE grades
SET grade = 'C'
WHERE student_id = 1 AND course_id = 1;

SELECT student_id, change_time, course, old_grade, new_grade
FROM grades_history;

-- Automatically Classifying Temperatures
CREATE TABLE temperature_test
(
	station_name varchar(50),
	observation_date date,
	max_temp integer,
	min_temp integer,
	max_temp_group varchar(40),
	PRIMARY KEY(station_name, observation_date)
);

CREATE TRIGGER temperature_insert
BEFORE INSERT ON temperature_test
FOR EACH ROW 
EXECUTE PROCEDURE classify_max_temp();

INSERT INTO temperature_test (station_name, observation_date, max_temp, min_temp)
VALUES
('North Station', '2019-01-19', 10, -3),
('North Station', '2019-03-20', 28, 19),
('North Station', '2019-02-05', 65, 42),
('North Station', '2019-9-8', 93, 74);

SELECT * FROM temperature_test;






















