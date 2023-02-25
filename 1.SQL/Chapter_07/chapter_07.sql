-- Primary Key Syntax
CREATE TABLE natural_key_example 
(
	license_id varchar(10) CONSTRAINT license_key PRIMARY KEY,
	first_name varchar(50),
	last_name varchar(50)
);

DROP TABLE natural_key_example;

CREATE TABLE natural_key_example
(
	license_id varchar(10),
	first_name varchar(50),
	last_name varchar(50),
	CONSTRAINT license_key PRIMARY KEY (license_id)
);

-- Creating a Composite Primary Key
CREATE TABLE natural_key_composite_example 
(
	student_id varchar(10),
	school_day date,
	present boolean,
	CONSTRAINT student_key PRIMARY KEY (student_id, school_day)
);

-- Creating an Auto-Incrementing Surrogate Key
CREATE TABLE surrogate_key_example 
(
	order_number bigserial,
	product_name varchar(50),
	order_date date,
	CONSTRAINT order_key PRIMARY KEY (order_number)
);

INSERT INTO surrogate_key_example (product_name, order_date)
VALUES 
	('Beachball Polish', '2015-03-17'),
	('Wrinkle De-Atomizer', '2017-05-22'),
	('Flux Capacitor', '1985-10-26');
SELECT * FROM surrogate_key_example;

-- Foreign Keys
CREATE TABLE licenses
(
	license_id varchar(10),
	first_name varchar(50),
	last_name varchar(50),
	CONSTRAINT licenses_key PRIMARY KEY (license_id)
);

CREATE TABLE registrations 
(
	registration_id varchar(10),
	registration_date date,
	license_id varchar(10) REFERENCES licenses (license_id),
	CONSTRAINT registration_key PRIMARY KEY (registration_id, license_id)
);

INSERT INTO licenses (license_id, first_name, last_name)
VALUES ('T229901', 'Lynn', 'Malero');

INSERT INTO registrations (registration_id, registration_date, license_id)
VALUES ('A203391', '2017-03-17', 'T229901');

INSERT INTO registrations (registration_id, registration_date, license_id)
VALUES ('A75772', '2017-03-17', 'T000001');

-- Automatically Deleting Related Records with CASCADE
CREATE TABLE registrations 
(
	registration_id varchar(10),
	registration_date date,
	license_id varchar(10) REFERENCES licenses (license_id) ON DELETE CASCADE,
	CONSTRAINT registration_key PRIMARY KEY (registration_id, license_id)
);

-- The CHECK Constraint
CREATE TABLE check_constraint_example 
(
	user_id bigserial,
	user_role varchar(50),
	salary integer,
	CONSTRAINT user_id_key PRIMARY KEY (user_id),
	CONSTRAINT check_role_in_list CHECK (user_role IN('Admin', 'Staff')),
	CONSTRAINT check_salary_not_zero CHECK (salary > 0)
);

-- The UNIQUE Constraint
CREATE TABLE unique_constraint_example 
(
	contact_id bigserial CONSTRAINT contact_id_key PRIMARY KEY,
	first_name varchar(50),
	last_name varchar(50),
	email varchar(200),
	CONSTRAINT email_unique UNIQUE (email)
);

INSERT INTO unique_constraint_example (first_name, last_name, email)
VALUES ('Samantha', 'Lee', 'slee@example.org');

INSERT INTO unique_constraint_example (first_name, last_name, email)
VALUES ('Betty', 'Diaz', 'bdiaz@example.org');

-- Error
-- INSERT INTO unique_constraint_example (first_name, last_name, email)
-- VALUES ('Sasha', 'Lee', 'slee@example.org');

-- The NOT NULL Constraint
CREATE TABLE not_null_example 
(
	student_id bigserial,
	first_name varchar(50) NOT NULL,
	last_name varchar(50) NOT NULL,
	CONSTRAINT student_id_key PRIMARY KEY (student_id)
);

-- Removing Constraints or Adding Them Later
ALTER TABLE not_null_example DROP CONSTRAINT student_id_key;
ALTER TABLE not_null_example ADD CONSTRAINT student_id_key PRIMARY KEY (student_id);
ALTER TABLE not_null_example ALTER COLUMN first_name DROP NOT NULL;
ALTER TABLE not_null_example ALTER COLUMN first_name SET NOT NULL;

-- Speeding Up Queries with Indexes
CREATE TABLE new_york_addresses 
(
	longitude numeric(9,6),
	latitude numeric(9,6),
	street_number varchar(10),
	street varchar(32),
	unit varchar(7),
	postcode varchar(5),
	id integer CONSTRAINT new_york_key PRIMARY KEY
);

COPY new_york_addresses
FROM 'C:\Users\Bernard Heinze\Documents\Code College\PostgreSQL\Chapters\Chapter 07 Table Design that Works for You\city_of_new_york.csv'
WITH (FORMAT CSV, HEADER);

-- Benchmarking Query Performance with EXPLAIN
EXPLAIN ANALYZE SELECT * FROM new_york_addresses
WHERE street = 'BROADWAY';

EXPLAIN ANALYZE SELECT * FROM new_york_addresses
WHERE street = '52 STREET';

EXPLAIN ANALYZE SELECT * FROM new_york_addresses
WHERE street = 'ZWICKY AVENUE';

-- Adding the Index
CREATE INDEX street_idx ON new_york_addresses (street);



