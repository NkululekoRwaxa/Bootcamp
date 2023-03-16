-- -- populate Department table
INSERT INTO 
	Department (depart_id, depart_name, depart_city)
VALUES 
	(1,'Administration', 'Cape Town'),
	(2,'Marketing', 'Johannesburg'),
	(3,'Human Resources', 'Kimberly'),
	(4,'IT', 'Gqeberha'),
	(5,'Public Relations', 'Polokwane'),
	(6,'Sales', 'Durban'),
	(7,'Executive', 'Pretoria'),
	(8,'Finance', 'Bleomfontain'),
	(9,'Accounting', 'Springbok'),
	(10, 'Purchasing', 'Durban'),
	(11, 'Shipping', 'Cape Town');
	

-- -- populate Roles table
INSERT INTO
 	Roles (role_id, role)
VALUES 
	 (1,'Public Accountant'),
	 (2,'Accounting Manager'),
	 (3,'Administration Assistant'),
	 (4,'President'),
	 (5,'Administration Vice President'),
	 (6,'Accountant'),
	 (7,'Finance Manager'),
	 (8,'Human Resources Representative'),
	 (9,'Programmer'),
	 (10,'Marketing Manager'),
	 (11,'Marketing Representative'),
	 (12,'Public Relations Representative'),
	 (13,'Purchasing Clerk'),
	 (14,'Purchasing Manager'),
	 (15,'Sales Manager'),
	 (16,'Sales Representative'),
	 (17,'Shipping Clerk'),
	 (18,'Stock Clerk'),
	 (19,'Stock Manager');


-- -- populate Salaries table
INSERT INTO 
	Salaries (salary_id, salary_pa)
VALUES
	(1,108000),
	(2,192000),
	(3,72000),
	(4,480000),
	(5,360000),
	(6,126000),
	(7,66000),
	(8,240000),
	(9,144000),
	(10,60000),
	(11,102000);
	
-- -- populate Overtime Hours table
INSERT INTO 
	OvertimeHours (overtime_id, overtime_hours)
VALUES 
	(1, 0),
	(2, 0.50),
	(3, 1.00),
	(4, 1.50),
	(5, 2.00),
	(6, 2.50),
	(7, 3.00),
	(8, 3.50);

-- -- populate Employees table
INSERT INTO 
	Employees(first_name,surname, gender,address, email, depart_id, role_id, salary_id, overtime_id)
VALUES
	('Steven','King', 'M','2014 Jabberwocky Rd', 'steven.king@sqltutorial.org', 9, 4, 5, 1),
	('Neena','Kochhar', 'F', '2011 Interiors Blvd', 'neena.kochhar@sqltutorial.org', 9, 5, 5, 1),
	('Lex','De Haan','M', '2004 Charade Rd','lex.de haan@sqltutorial.org', 9, 13, 10, 2),
	('Alexander','Hunold', 'M', '147 Spadina Ave','alexander.hunold@sqltutorial.org', 6, 15, 9, 6),
	('Bruce','Ernst', 'M', '8204 Arthur St', 'bruce.ernst@sqltutorial.org', 6, 16, 10, 3),
	('David','Austin', 'M','Magdalen Centre, The Oxford Science Park', 'david.austin@sqltutorial.org', 6, 19, 9, 6),
	('Valli','Pataballa', 'F','Schwanthalerstr. 7031','valli.pataballa@sqltutorial.org', 6, 9, 11, 1),
	('Diana','Lorentz', 'F','28 Ivana Rd','diana.lorentz@sqltutorial.org', 6, 9, 11, 6),
	('Nancy','Greenberg', 'F','6 Ave, Summestrand','nancy.greenberg@sqltutorial.org', 10, 14, 9, 6),
	('Daniel','Faviet', 'M','38 Up Hill','daniel.faviet@sqltutorial.org', 10, 13, 10, 3),
	('John','Chen', 'M','3 on Main','john.chen@sqltutorial.org', 10, 13, 10, 6),
	('Ismael','Sciarra', 'M','163 Durban Road','ismael.sciarra@sqltutorial.org', 2, 11, 10, 3),
	('Jose Manuel','Urman','M','14 Jabberwocky Rd','jose manuel.urman@sqltutorial.org', 2, 10, 6, 1),
	('Luis','Popp', 'F','11 Interiors Blvd','luis.popp@sqltutorial.org', 4,  9, 6, 3),
	('Den','Raphaely', 'M','04 Charade Rd','den.raphaely@sqltutorial.org', 4, 3, 3, 1),
	('Alexander','Khoo', 'M','7 Spadina Ave','alexander.khoo@sqltutorial.org', 3, 8, 7, 3),
	('Shelli','Baida','M','4 Arthur St','shelli.baida@sqltutorial.org', 3, 8, 7, 5),
	('Sigal','Tobias', 'F','3 Okavango Rd','sigal.tobias@sqltutorial.org', 3, 8, 7, 6),
	('Guy','Himuro', 'M','23546 Silicon Rd','guy.himuro@sqltutorial.org', 3, 8, 7, 4),
	('Karen','Colmenares', 'F','13 Sandton','karen.colmenares@sqltutorial.org', 3, 3, 3, 8),
	('Matthew','Weiss', 'M','22408 Chikiza Walk','matthew.weiss@sqltutorial.org', 5, 12, 1, 5),
	('Adam','Fripp', 'M','DD123 Oak Park','adam.fripp@sqltutorial.org', 5, 1, 2, 5),
	('Payam','Kaufling', 'F','13 Ilitha Park','payam.kaufling@sqltutorial.org', 1, 2, 8, 5),
	('Shanta','Vollman', 'F','2 Central Park','shanta.vollman@sqltutorial.org', 1, 4, 5, 5),
	('Irene','Mikkilineni', 'F','16 DF Malan Rd','irene.mikkilineni@sqltutorial.org', 2, 10, 11, 5),
	('John','Russell', 'M','38 Mandela Rd','john.russell@sqltutorial.org', 8, 7, 11, 3),
	('Karen','Partners', 'F','2 Main','karen.partners@sqltutorial.org', 8, 6, 9, 2),
	('Jonathon','Taylor', 'M','555 Blackheath','jonathon.taylor@sqltutorial.org', 7, 4, 4, 1),
	('Jack','Livingston', 'M','2nd Ave Rd','jack.livingston@sqltutorial.org', 7,  5, 4, 1),
	('Kimberely','Grant', 'F','1st Ave Rd','kimberely.grant@sqltutorial.org', 6, 16, 10, 4),
	('Charles','Johnson', 'F','014 Jabberwocky Rd','charles.johnson@sqltutorial.org', 8, 6, 6, 3),
	('Sarah','Bell', 'F','011 Interiors Blvd','sarah.bell@sqltutorial.org', 5, 12, 1, 5),
	('Britney','Everett', 'F','01 Interiors Blvd','britney.everett@sqltutorial.org', 11, 17, 9, 5),
	('Jennifer','Whalen', 'F','004 Charade Rd','jennifer.whalen@sqltutorial.org', 11, 17, 9, 1),
	('Michael','Hartstein', 'M','471 Spadina Ave','michael.hartstein@sqltutorial.org', 2, 11, 10, 2),
	('Pat','Fay', 'M','2041 Arthur St','pat.fay@sqltutorial.org', 2, 11, 10, 5),
	('Susan','Mavris', 'F','2049 Cuba St','susan.mavris@sqltutorial.org', 4, 9, 8, 4),
	('Shelley','Higgins', 'F','88 Noth Hill','shelley.higgins@sqltutorial.org', 11, 17, 9, 3);


















	
	
	
	
	