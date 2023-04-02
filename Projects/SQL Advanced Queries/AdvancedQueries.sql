-- 3. Create Commands to Set Up PostgreSQL Tables
CREATE TABLE CLASSES (
	CLASS_CODE varchar(5) PRIMARY KEY,
	CRS_CODE varchar REFERENCES COURSES(CRS_CODE),
	CLASS_SECTION varchar(2),
	CLASS_TIME varchar(20),
	ROOM_CODE varchar(8),
	PROF_NUM int
);


CREATE TABLE COURSES (
	CRS_CODE varchar(10) PRIMARY KEY,
	DEPT_CODE varchar(10),
	CRS_DESCRIPTION varchar(35),
	CRS_CREDIT int
);

-- NOTE: Professor is HEAD of Department. Thats the only relationship these tables demonstrate.
CREATE TABLE DEPARTMENTS (
	DEPT_CODE varchar(10) PRIMARY KEY,
	DEPT_NAME varchar(30),
	SCHOOL_CODE varchar(8),
	EMP_NUM int,
	DEPT_ADDRESS varchar(20),
	DEPT_EXTENSION varchar(4)
);

CREATE TABLE EMPLOYEES (
	EMP_NUM int PRIMARY KEY,
	EMP_LNAME varchar(15),
	EMP_FNAME varchar(12),
	EMP_INITIAL varchar(1),
	EMP_JOBCODE varchar(5),
	EMP_HIREDATE date,
	EMP_DOB date
);

CREATE TABLE ENROLL (
	CLASS_CODE varchar REFERENCES CLASSES(CLASS_CODE),
	STU_NUM int REFERENCES STUDENTS(STU_NUM),
	ENROLL_GRADE varchar(50)
);

CREATE TABLE PREREQ (
	CRS_CODE varchar(8),
	PRE_TAKE varchar(8)
);

CREATE TABLE PROFESSORS (
	EMP_NUM int PRIMARY KEY,
	DEPT_CODE varchar REFERENCES DEPARTMENTS(DEPT_CODE),
	PROF_OFFICE varchar(50),
	PROF_EXTENSION varchar(4),
	PROF_HIGH_DEGREE varchar(5)
);

CREATE TABLE STUDENTS(
	STU_NUM int PRIMARY KEY,
	STU_LNAME varchar(15),
	STU_FNAME varchar(12),
	STU_INIT varchar(1),
	STU_BOD date,
	STU_HRS int,
	STU_CLASS varchar(3),
	STU_GPA numeric(3,2),
	STU_TRANSFER varchar(1),
	DEPT_CODE varchar(10), 
	STU_PHONE varchar(10),
	PROF_NUM int
);
-------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------
-- 4. Insert Data into a PostgreSQL Table

INSERT INTO COURSES 
VALUES
	('ACCT-211','ACCT','Accounting I',3),
	('ACCT-212','ACCT','Accounting II',3),
	('CIS-220','CIS','Intro. to Microcomputing',3),
	('CIS-420','CIS','Database Design and Implementation',4),
	('MATH-243','MATH','Mathematics for Managers',3),
	('QM-261','CIS','Intro. to Statistics',3),
	('QM-362','CIS','Statistical Applications',4);

INSERT INTO CLASSES 
VALUES
	('10012','ACCT-211','1','MWF 8:00-8:50 a.m.','BUS311',105),
	('10013','ACCT-211','2','MWF 9:00-9:50 a.m.','BUS200',105),
	('10014','ACCT-211','3','TTh 2:30-3:45 p.m.','BUS252','342'),
	('10015','ACCT-212','1','MWF 10:00-10:50 a.m.','BUS311',301),
	('10016','ACCT-212','2','Th 6:00-8:40 p.m.','BUS252',301),
	('10017','CIS-220','1','MWF 9:00-9:50 a.m.','KLR209',228),
	('10018','CIS-220','2','MWF 9:00-9:50 a.m.','KLR211',114),
	('10019','CIS-220','3','MWF 10:00-10:50 a.m.','KLR209',228),
	('10020','CIS-420','1','W 6:00-8:40 p.m.','KLR209',162),
	('10021','QM-261','1','MWF 8:00-8:50 a.m.','KLR200',114),
	('10022','QM-261','2','TTh 1:00-2:15 p.m.','KLR200',114),
	('10023','QM-362','1','MWF 11:00-11:50 a.m.','KLR200',162),
	('10024','QM-362','2','TTh 2:30-3:45 p.m.','KLR200','162'),
	('10025','MATH-243','1','Th 6:00-8:40 p.m.','DRE155','325');
	
COPY STUDENTS
FROM '~YOUR ROOT\Project 0 - Advanced Queries\STUDENT.txt'
WITH(FORMAT CSV, HEADER ON);

INSERT INTO ENROLL
VALUES
	(10014,321452,'C'),
	(10014,324257,'B'),
	(10018,321452,'A'),
	(10018,324257,'B'),
	(10021,321452,'C'),
	(10021,324257,'C');
	
INSERT INTO EMPLOYEES 
VALUES
	(100,'Worley','James','F','CUST','1998/02/23','1970/6/12'),
	(101,'Ramso','Henry','B','CUST','2014/11/15','1981/11/2'),
	(102,'Edwards','Rosemary','D','TECH','2010/07/23','1973/7/3'),
	(103,'Donelly','Ronald','O','PROF','2007/07/01','1972/10/2'),
	(104,'Yukon','Preston','D','PROF','2012/05/01','1968/2/23'),
	(105,'Heffington','Arnelle','B','PROF','2011/07/01','1970/11/2'),
	(106,'Washington','Ross','E','PROF','1996/08/01','1961/3/4'),
	(108,'Robertson','Elaine','W','TECH','2003/10/18','1981/6/20'),
	(110,'Thieu','Van','S','PROF','2009/8/1','1971/8/19'),
	(114,'Graztevski','Gerald','B','PROF','1998/8/1','1959/3/18'),
	(122,'Wilson','Todd','H','CUST','2010/11/6','1986/10/19'),
	(123,'Jones','Suzanne','B','TECH','2014/1/5','1987/12/30'),
	(124,'Smith','Elsa','K','CLRK','2002/12/16','1963/9/13'),
	(126,'Ardano','James','G','CLRK','2014/10/1','1990/3/12');

INSERT INTO DEPARTMENTS
VALUES
	('ACCT','Accounting','BUS','114','KLR 211, Box 52','3119'),
	('ART','Fine Arts','A&SCI','435','BBG 185, Box 128','2278'),
	('BIOL','Biology','A&SCI','387','AAK 230, Box 415','4117'),
	('CIS','Computer Info. Systems','BUS','209','KLR 333, Box 56','3245'),
	('ECON/FIN','Economics/Finance','BUS','299','KLR 284, Box 63','3126'),
	('ENG','English','A&SCI','160','DRE 102, Box 223','1004'),
	('HIST','History','A&SCI','103','DRE 156, Box 284','1867'),
	('MATH','Mathematics','A&SCI','297','AAK 194, Box 422','4234'),
	('MKT/MGT','Marketing/Management','BUS','106','KLR 126, Box 55','3342'),
	('PSYCH','Psychology','A&SCI','195','AAK 297, Box 438','4110'),
	('SOC','Sociology','A&SCI','342','BBG 208, Box 132','2008');

INSERT INTO PROFESSORS 
VALUES
	(103,'HIST','DRE 156','6783','Ph.D.'),
	(104,'ENG','DRE 102','5561','MA'),
	(105,'ACCT','KLR 229D','8665','Ph.D.'),
	(106,'MKT/MGT','KLR 126','3899','Ph.D.'),
	(110,'BIOL','AAK 160','3412','Ph.D.'),
	(114,'ACCT','KLR 211','4436','Ph.D.'),
	(155,'MATH','AAK 201','4440','Ph.D.'),
	(160,'ENG','DRE 102','2248','Ph.D.'),
	(162,'CIS','KLR 203E','2359','Ph.D.'),
	(191,'MKT/MGT','KLR 409B','4016','DBA'),
	(195,'PSYCH','AAK 297','3550','Ph.D.'),
	(209,'CIS','KLR 333','3421','Ph.D.'),
	(228,'CIS','KLR 300','3000','Ph.D.'),
	(297,'MATH','AAK 194','1145','Ph.D.'),
	(299,'ECON/FIN','KLR 284','2851','Ph.D.'),
	(301,'ACCT','KLR 244','4683','Ph.D.'),
	(335,'ENG','DRE 208','2000','Ph.D.'),
	(342,'SOC','BBG 208','5514','Ph.D.'),
	(387,'BIOL','AAK 230','8665','Ph.D.'),
	(401,'HIST','DRE 156','6783','MA'),
	(425,'ECON/FIN','KLR 284','2851','MBA'),
	(435,'ART','BBG 185','2278','Ph.D.');
	
INSERT INTO PREREQ
VALUES
	('CIS-240', 'CIS-220'),
	('QM-261', 'MATH-243'),
	('QM-362', 'MATH-243'),
	('QM-362', 'QM-261');

-------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------
-- Query Tables using Advanced Techniques

-- 1. Find Duplicate Rows in a PostgreSQL Table

SELECT PROF_NUM, COUNT(PROF_NUM)
FROM STUDENTS
GROUP BY PROF_NUM
HAVING COUNT(PROF_NUM) > 1
ORDER BY PROF_NUM;

-- 5. How to Use PostgreSQL Recursive Queries
WITH RECURSIVE cohort AS 
(
	SELECT STU_NUM, PROF_NUM, STU_LNAME
	FROM STUDENTS
	WHERE STU_NUM = 324257
	UNION
	SELECT e.STU_NUM, e.PROF_NUM, e.STU_LNAME
	FROM STUDENTS e
	INNER JOIN cohort s ON s.STU_NUM = e.PROF_NUM
)
SELECT * FROM cohort;

-- 6. PostgreSQL FETCH Command to Limit Query Results

SELECT EMP_NUM, PROF_HIGH_DEGREE
FROM PROFESSORS
ORDER BY EMP_NUM
FETCH FIRST ROW ONLY;

-- 7. Expert Inner Join Queries in PostgreSQL

SELECT e.EMP_NUM, EMP_FNAME
FROM EMPLOYEES e
INNER JOIN PROFESSORS pr ON pr.EMP_NUM = e.EMP_NUM
ORDER BY e.EMP_NUM;

-- 9. Full Outer Join Query

SELECT e.DEPT_CODE, e.DEPT_NAME
FROM DEPARTMENTS e
FULL OUTER JOIN PROFESSORS d ON d.DEPT_CODE = e.DEPT_CODE;

-- 10. Advanced Where Clause in Full Outer Join Query

SELECT e.STU_NUM, e.STU_FNAME
FROM STUDENTS e
FULL OUTER JOIN PROFESSORS d ON d.EMP_NUM = e.PROF_NUM 
WHERE STU_INIT IS NULL;

-- 11. PostgreSQL Advanced Query Using the LEFT JOIN Clause

SELECT
e.EMP_LNAME,
e.EMP_FNAME,
d.EMP_NUM,
d.PROF_HIGH_DEGREE
FROM EMPLOYEES e
LEFT JOIN PROFESSORS d ON d.EMP_NUM = e.EMP_NUM ;

-- 13. Elegant NATURAL JOIN Query in PostgreSQL

SELECT * FROM STUDENTS NATURAL JOIN CLASSES;

-- 18. Querying Stats on the Postgre DB: suppose we want to know the largest table in our DB
SELECT relname, relpages FROM pg_class ORDER BY
relpages DESC limit 1;

-------------------------------------------------------------------------------------------------------------
-- Object-Oriented SQL for Data Complexity
-------------------------------------------------------------------------------------------------------------
-- 1. ROLLUP

SELECT EMP_NUM, EMP_JOBCODE, COUNT(*)
FROM EMPLOYEES
GROUP BY ROLLUP(EMP_NUM, EMP_JOBCODE);

-- 2. CUBE

SELECT STU_NUM, PROF_NUM, COUNT(*)
FROM STUDENTS
GROUP BY CUBE(STU_NUM, PROF_NUM);

-- 6. Missing values in SEQUENCE

SELECT EMP_NUM + 1
FROM EMPLOYEES e
WHERE NOT EXISTS
(
	SELECT NULL FROM EMPLOYEES f
	WHERE e.EMP_NUM = f.EMP_NUM + 1
)
ORDER BY EMP_NUM;


