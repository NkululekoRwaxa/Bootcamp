-- 1.
SELECT school, last_name, first_name FROM teachers
ORDER BY school, last_name;

-- 2.
SELECT * FROM teachers
WHERE first_name LIKE 'S%' AND salary > 40000
limit (1);

-- 3.
SELECT * FROM teachers
WHERE hire_date >= '2010-01-01'
ORDER BY salary DESC;
