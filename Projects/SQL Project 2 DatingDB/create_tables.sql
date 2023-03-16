
CREATE TABLE Interests
(
	interest_id bigserial PRIMARY KEY,
	interest varchar(300) NOT NULL
);

CREATE TABLE Profession
(
	prof_id bigserial PRIMARY KEY,
	profession varchar(100) NOT NULL,
	CONSTRAINT unique_profession UNIQUE (profession)
);

CREATE TABLE Seeking
(
	seeking_id bigserial PRIMARY KEY,
	seeking varchar(300) NOT NULL
);

CREATE TABLE Status
(
	status_id bigserial PRIMARY KEY,
	status varchar(100) NOT NULL
);

CREATE TABLE Zip_Code
(
	zip_code bigserial PRIMARY KEY,
	city varchar(100) NOT NULL,
	province varchar(100) NOT NULL
	CONSTRAINT check_zip_code_length CHECK (LENGTH(CAST(zip_code AS TEXT)) <= 4)
);

CREATE TABLE My_Contacts
(
	contact_id bigserial PRIMARY KEY,
	last_name varchar(100) NOT NULL,
	first_name varchar(100) NOT NULL, 
	phone char(10) NOT NULL, 
	email varchar(100) NOT NULL, 
	gender varchar(1) NOT NULL, 
	birthday date NOT NULL,
	profession varchar(100) NOT NULL,
	city varchar(100) NOT NULL,
	province varchar(100) NOT NULL,
	status varchar(100) NOT NULL,
	interest varchar(300) NOT NULL,
	seeking varchar(300) NOT NULL,
	-- Constraints
	CONSTRAINT unique_phone UNIQUE (phone),
	CONSTRAINT unique_email UNIQUE (email),
	CONSTRAINT email_has_at CHECK( email LIKE '%@%' ),
	CONSTRAINT check_gender CHECK(gender IN ('M', 'F')),
	-- Foreign Keys
	prof_id integer REFERENCES Profession (prof_id),
	zip_code integer REFERENCES Zip_Code (zip_code),
	status_id integer REFERENCES Status (status_id)
);

CREATE TABLE Contact_Interest
(
	contact_id integer REFERENCES My_Contacts(contact_id),
	interest_id integer REFERENCES Interests(interest_id),
	CONSTRAINT contact_interest_key PRIMARY KEY (contact_id, interest_id)
);

CREATE TABLE Contact_Seeking
(
	contact_id integer REFERENCES My_Contacts(contact_id),
	seeking_id integer REFERENCES Seeking(seeking_id),
	CONSTRAINT contact_seeking_key PRIMARY KEY(contact_id, seeking_id)
);




