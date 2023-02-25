-- 1.
CREATE TABLE actors
(
	id integer,
	movie text,
	actor text
);

COPY actors
FROM 'C:\Users\Bernard Heinze\Documents\Code College\PostgreSQL\Files\Chapter 4\movies.txt'
WITH(FORMAT CSV, HEADER, DELIMITER ':', QUOTE '#');

SELECT * FROM actors;

-- 2.
COPY 
(
    SELECT geo_name, state_us_abbreviation, housing_unit_count_100_percent
    FROM us_counties_2010 
	ORDER BY housing_unit_count_100_percent DESC 
	LIMIT 20
)
TO 'C:\Users\Bernard Heinze\Documents\Code College\PostgreSQL\Files\Chapter 4\us_counties_housing_export.txt'
WITH (FORMAT CSV, HEADER);









