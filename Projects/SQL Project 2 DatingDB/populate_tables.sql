COPY Interests(interest)
FROM 'C:\Users\Bernard Heinze\Documents\Code College\PostgreSQL\Projects\Project 2 - DatingDB\interests.txt' 
WITH(FORMAT CSV, HEADER);
	
	
COPY Profession(profession)
FROM 'C:\Users\Bernard Heinze\Documents\Code College\PostgreSQL\Projects\Project 2 - DatingDB\professions.txt' 
WITH(FORMAT CSV, HEADER);

COPY Seeking(seeking)
FROM 'C:\Users\Bernard Heinze\Documents\Code College\PostgreSQL\Projects\Project 2 - DatingDB\seeking.txt' 
WITH(FORMAT CSV, HEADER);

COPY Status(status)
FROM 'C:\Users\Bernard Heinze\Documents\Code College\PostgreSQL\Projects\Project 2 - DatingDB\status.txt' 
WITH(FORMAT CSV, HEADER);

COPY Zip_Code(city, province)
FROM 'C:\Users\Bernard Heinze\Documents\Code College\PostgreSQL\Projects\Project 2 - DatingDB\zip_code.txt' 
WITH(FORMAT CSV, HEADER);

COPY My_Contacts(last_name, first_name, phone, email, gender, birthday, profession, city, province, status, interest, seeking)
FROM 'C:\Users\Bernard Heinze\Documents\Code College\PostgreSQL\Projects\Project 2 - DatingDB\data.txt' 
WITH(FORMAT CSV, HEADER, QUOTE '''');

COPY My_Contacts(last_name,first_name,phone,email,gender,birthday,profession,city,province,status,seeking,interest,prof_id,zip_code,status_id)
FROM 'C:\Users\Bernard Heinze\Documents\Code College\PostgreSQL\Projects\Project 2 - DatingDB\data1.txt' 
WITH(FORMAT CSV, HEADER);

-- populate bridge entities
INSERT INTO Contact_Interest(contact_id, interest_id)
SELECT my.contact_id, intr.interest_id FROM My_Contacts my, Interests intr;

INSERT INTO Contact_Seeking(contact_id, seeking_id)
SELECT my.contact_id, seek.seeking_id FROM My_Contacts my, Seeking seek;

-- all contacts
SELECT * FROM My_Contacts;
SELECT last_name, gender, profession, status, seeking FROM My_Contacts;

-- find match for one contact
SELECT last_name, gender, profession, status, seeking
FROM My_Contacts
WHERE status = 'Single' AND gender = 'F';

SELECT findMatch('Single', 'female', 'M');
SELECT * FROM findMatch('Single', 'Male', 'F');

-- Project query
SELECT DISTINCT ON(My_Contacts.contact_id) 
	prof.profession, 
	zip.zip_code, 
	zip.city, 
	zip.province, 
	st.status, 
	intr.interest, 
	seeking
FROM My_Contacts
	LEFT JOIN Profession AS prof ON My_Contacts.prof_id = prof.prof_id 
	LEFT JOIN Zip_Code AS zip ON My_Contacts.zip_code = zip.zip_code
	LEFT JOIN Status AS st ON My_Contacts.status_id = st.status_id
	LEFT JOIN Contact_Interest ON My_Contacts.contact_id = Contact_Interest.contact_id
	LEFT JOIN Interests intr ON Contact_Interest.interest_id = intr.interest_id;
		
		
		
		
		
		
		
		
		
		
		
		
		

