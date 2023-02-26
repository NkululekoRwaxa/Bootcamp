-- Case Formatting
SELECT upper('nkulu')
SELECT lower('NkULu')
SELECT initcap('i am nkulu from cape town')

-- Character Length
SELECT char_length('i,am;nkulu!from-cape?town5')

-- Removing Characters
SELECT trim('s' from 'strings')
SELECT trim(' ' from 's t r i n g s')
SELECT char_length(trim(' Pat '))

-- Extract and Replace characters 
-- index in SQL start at 1.
SELECT left('703-555-1212', 3) -- start counting from left and print 3 chars to left
SELECT right('703-555-1212', 8) -- start counting from right and print 8 chars to right
SELECT left('abcdefghi', 4)
SELECT right('abcdefghi', 7)

-- to substitute characters in a string use replace(string, from, to)
SELECT replace('bat', 'b', 'c')

-- Regular Expression Notation
-- any character one or more times
SELECT substring('The game starts at 7 p.m. on May 2, 2019.' from '.+');

-- One or two digits followed by a space and a.m. or p.m. in a noncapture group
SELECT substring('The game starts at 7 p.m. on May 2, 2019.' from '\d{1,2} (?:a.m.|p.m.)');

-- one or more word characters at the start
SELECT substring('The game starts at 7 p.m. on May 2, 2019.' from '^\w+');

-- one or more word characters followed by any character at the end
SELECT substring('The game starts at 7 p.m. on May 2, 2019.' from '\w+.$');

-- either of the words May or June
SELECT substring('The game starts at 7 p.m. on May 2, 2019.' from 'May|June');

-- four digits
SELECT substring('The game starts at 7 p.m. on May 2, 2019.' from '\d{4}');

-- May followed by a space, digit, comma, space, and four digits
SELECT substring('The game starts at 7 p.m. on May 2, 2019.' from 'May \d, \d{4}');

-- Creating a Table for Crime Reports
CREATE TABLE crime_reports
(
	crime_id bigserial PRIMARY KEY,
	date_1 timestamptz,
	date_2 timestamptz,
	street varchar(250),
	city varchar(100),
	crime_type varchar(100),
	description text,
	case_number varchar(50),
	original_text text NOT NULL
);

COPY crime_reports(original_text)
FROM 'C:\Users\Bernard Heinze\Documents\Code College\PostgreSQL\Chapters\Chapter 13 Mining Text\crime_reports.csv'
WITH(FORMAT CSV, HEADER OFF, QUOTE '"');

SELECT * FROM crime_reports;

-- Matching Crime Report Date Patterns
SELECT crime_id, (regexp_match(original_text, '\d{1,2}\/\d{1,2}\/\d{2}'))[1] -- indexing to removing {}
FROM crime_reports

SELECT crime_id, regexp_matches(original_text, '\d{1,2}\/\d{1,2}\/\d{2}', 'g')
FROM crime_reports

SELECT crime_id, regexp_match(original_text, '-(\d{1,2}\/\d{1,2}\/\d{1,2})')
FROM crime_reports;

-- Matching Additional Crime Report Elements
-- first hour
SELECT crime_id, regexp_match(original_text, '\/\d{2}\n(\d{4})')
FROM crime_reports;

SELECT crime_id, regexp_match(original_text, '\/\d{2}\n\d{4}-(\d{4})')
FROM crime_reports;

SELECT crime_id, regexp_match(original_text, 'hrs.\n(\d+ .+(?:Sq.|Plz.|Dr.|Ter.|Rd.))')
FROM crime_reports;


SELECT
	regexp_match(original_text, '(?:C0|SO)[0-9]+') AS case_number,
	regexp_match(original_text, '\d{1,2}\/\d{1,2}\/\d{2}') AS date_1,
	regexp_match(original_text, '\n(?:\w+ \w+|\w+)\n(.*):') AS crime_type,
	regexp_match(original_text, '(?:Sq.|Plz.|Dr.|Ter.|Rd.)\n(\w+ \w+|\w+)\n') AS city
FROM crime_reports;

SELECT crime_id, (regexp_match(original_text, '(?:C0|SO)[0-9]+'))[1] AS case_number
FROM crime_reports;


UPDATE crime_reports
 SET date_1 = (
	 			(regexp_match(original_text, '\d{1,2}\/\d{1,2}\/\d{2}'))[1] 
	 			|| ' ' || 
	 			(regexp_match(original_text, '\/\d{2}\n(\d{4})'))[1]
				||' Africa/Johannesburg' )::timestamptz;
SELECT crime_id, date_1, original_text
FROM crime_reports;

-- try change date format to yyyy-mm-dd
WITH 
	-- create temporary table with columns that hold day, month, year
	temp_result(day, month, year) AS( 
	SELECT substring
	( 
		(regexp_match(original_text, '\d{1,2}\/\d{1,2}\/\d{2}'))[1] from '^\d{1,2}'
	),

	substring
	(
		substring( (regexp_match(original_text, '\d{1,2}\/\d{1,2}\/\d{2}'))[1] from '\/\d{1,2}') 
		from '\d{1,2}'
	),

	substring
	( 
		(regexp_match(original_text, '\d{1,2}\/\d{1,2}\/\d{2}'))[1] 
		from '\d{1,2}$'
	)from crime_reports )
	
SELECT year, month, day FROM temp_result;

select (regexp_match(original_text, '\d{1,2}\/\d{1,2}\/\d{2}'))[1] from crime_reports





