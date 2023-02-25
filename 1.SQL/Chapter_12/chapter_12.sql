-- Generating Values for a Query Expression
SELECT 
	geo_name,
	state_us_abbreviation,
	p0010001
FROM us_countries_2010
WHERE p0010001 >= 
	(
		SELECT percentile_cont(0.9) WITHIN GROUP (ORDER BY p0010001)
		FROM us_countries_2010 
	)
ORDER BY p0010001 DESC;

-- Using a Subquery to Identify Rows to Delete
CREATE TABLE us_counties_2010_top10 AS SELECT * FROM us_counties_2010;

DELETE FROM us_counties_2010_top10
WHERE p0010001 < (
	SELECT percentile_cont(0.9) WITHIN GROUP (ORDER BY p0010001)
	FROM us_counties_2010_top10 );
	
-- Creating Derived Tables with Subqueries
SELECT 
	round(result_table.average, 0) AS average,
	result_table.median,
	round(result_table.average - result_table.median, 0) AS median_average_diff
FROM (
	SELECT avg(p0010001) AS average,
	percentile_cont(.5) WITHIN GROUP (ORDER BY p0010001)::numeric(10,1) AS median
	FROM us_counties_2010) AS result_table;
	
-- Joining Derived Tables
-- 1st Method - this code has 2nd Method later in this file
SELECT 
	census.state_us_abbreviation AS st,
	census.st_population,
	plants.plant_count,
	round((plants.plant_count/census.st_population::numeric(10,1))*1000000, 1) AS plants_per_million
FROM
(
	SELECT st,
	count(*) AS plant_count
	FROM meat_poultry_egg_inspect
	GROUP BY st
) AS plants
JOIN
(
	SELECT state_us_abbreviation,
	sum(p0010001) AS st_population
	FROM us_counties_2010
	GROUP BY state_us_abbreviation
) AS census
ON plants.st = census.state_us_abbreviation
ORDER BY plants_per_million DESC;

-- Generating Columns with Subqueries
SELECT 
	geo_name,
	state_us_abbreviation AS st,
	p0010001 AS total_pop,
	(SELECT percentile_cont(.5) WITHIN GROUP (ORDER BY p0010001) FROM us_counties_2010) AS us_median
FROM us_counties_2010;

SELECT 
	geo_name,
	state_us_abbreviation AS st,
	p0010001 AS total_pop,
	(SELECT percentile_cont(.5) WITHIN GROUP (ORDER BY p0010001)FROM us_counties_2010) AS us_median,
	p0010001 - (SELECT percentile_cont(.5) WITHIN GROUP (ORDER BY p0010001)FROM us_counties_2010) AS diff_from_median

FROM us_counties_2010 

WHERE 
(
	p0010001 - (SELECT percentile_cont(.5) WITHIN GROUP (ORDER BY p0010001)FROM us_counties_2010)
) BETWEEN -1000 AND 1000;

-- Subquery Expressions
SELECT first_name, last_name
FROM employees
WHERE id IN (
	SELECT id
	FROM retirees);
	
SELECT first_name, last_name
FROM employees
WHERE EXISTS (
	SELECT id
	FROM retirees);

SELECT first_name, last_name
FROM employees
WHERE EXISTS (
	SELECT id
	FROM retirees
	WHERE id = employees.id);
	
SELECT first_name, last_name
FROM employees
WHERE NOT EXISTS (
	SELECT id
	FROM retirees
	WHERE id = employees.id);

-- Common Table Expressions: Second Approach to create temporary table using 'WITH clause'
WITH
	-- define temporary table 8 its columns
	temp_table(geo_name, st, p0010001)
AS (
	-- populate columns of temporary table
	SELECT geo_name, state_us_abbreviation, p0010001
	FROM us_counties_2010
	WHERE p0010001 >= 100000
)
-- query from temporary table
SELECT st, count(*)
FROM temp_table
GROUP BY st
ORDER BY count(*) DESC;

SELECT state_us_abbreviation, count(*)
FROM us_counties_2010
WHERE p0010001 >= 100000
GROUP BY state_us_abbreviation
ORDER BY count(*) DESC;

-- 2nd Method
WITH
	counties(st, population) AS
	(
		SELECT state_us_abbreviation, sum(population_count_100_percent)
		FROM us_counties_2010
		GROUP BY state_us_abbreviation
	),
	
	plants(st, plants) AS
	(
		SELECT st, count(*) AS plants
		FROM meat_poultry_egg_inspect
		GROUP BY st
	)
-- query the 2 temporary tables: counties & plants
SELECT 
	counties.st, 
	population,
	plants,
	round((plants/population::numeric(10,1)) * 1000000, 1) AS per_million
FROM counties JOIN plants
ON counties.st = plants.st
ORDER BY per_million DESC;

WITH 
	us_median AS
	(
		SELECT percentile_cont(.5) WITHIN GROUP (ORDER BY p0010001) AS us_median_pop
		FROM us_counties_2010
	)
SELECT 
	geo_name,
	state_us_abbreviation AS st,
	p0010001 AS total_pop,
	us_median_pop,
	p0010001 - us_median_pop AS diff_from_median
FROM us_counties_2010 CROSS JOIN us_median
WHERE (p0010001 - us_median_pop) BETWEEN -1000 AND 1000;

-- Cross Tabulations: Installing the crosstab() Function
CREATE EXTENSION tablefunc;

-- Tabulating Survey Results
CREATE TABLE ice_cream_survey
(
	response_id integer PRIMARY KEY,
	office varchar(20),
	flavor varchar(20)
);

COPY ice_cream_survey
FROM 'C:\Users\Bernard Heinze\Documents\Code College\PostgreSQL\Chapters\Chapter 12 Advanced Query Techniques\ice_cream_survey.csv'
WITH(FORMAT CSV, HEADER);

SELECT *
FROM ice_cream_survey
LIMIT 5;

-- crosstab()
SELECT * 

FROM crosstab
(
	'SELECT office, flavor, count(*) FROM ice_cream_survey GROUP BY office, flavor ORDER BY office',
	'SELECT flavor FROM ice_cream_survey GROUP BY flavor ORDER BY flavor'
)
AS( office varchar(20), chocolate bigint, strawberry bigint, vanilla bigint )

-- Tabulating City Temperature Readings
CREATE TABLE temperature_readings 
(
	reading_id bigserial,
	station_name varchar(50),
	observation_date date,
	max_temp integer,
	min_temp integer
);

COPY temperature_readings
(station_name, observation_date, max_temp, min_temp)
FROM 'C:\Users\Bernard Heinze\Documents\Code College\PostgreSQL\Chapters\Chapter 12 Advanced Query Techniques\temperature_readings.csv'
WITH (FORMAT CSV, HEADER);

SELECT *
FROM crosstab(
		'SELECT
			station_name,
			date_part(''month'', observation_date),
			percentile_cont(.5) WITHIN GROUP (ORDER BY max_temp)
			FROM temperature_readings
			GROUP BY station_name, date_part(''month'', observation_date)
			ORDER BY station_name',
	
			'SELECT month
			FROM generate_series(1,12) month')
AS (
	station varchar(50),
	jan numeric(3,0),
	feb numeric(3,0),
	mar numeric(3,0),
	apr numeric(3,0),
	may numeric(3,0),
	jun numeric(3,0),
	jul numeric(3,0),
	aug numeric(3,0),
	sep numeric(3,0),
	oct numeric(3,0),
	nov numeric(3,0),
	dec numeric(3,0)
);

-- Reclassifying Values with CASE
SELECT 
	max_temp,
	CASE 
		WHEN max_temp >= 90 THEN 'Hot'
		WHEN max_temp BETWEEN 70 AND 89 THEN 'Warm'
		WHEN max_temp BETWEEN 50 AND 69 THEN 'Pleasant'
		WHEN max_temp BETWEEN 33 AND 49 THEN 'Cold'
		WHEN max_temp BETWEEN 20 AND 32 THEN 'Freezing'
		ELSE 'Inhumane'
	END AS temparature_group
	
FROM temperature_readings;

-- Using CASE in a Common Table Expression
WITH 
	temps_collapsed (station_name, max_temperature_group) AS
	(SELECT 
	 	station_name,
		CASE WHEN max_temp >= 90 THEN 'Hot'
			 WHEN max_temp BETWEEN 70 AND 89 THEN 'Warm'
			 WHEN max_temp BETWEEN 50 AND 69 THEN 'Pleasant'
			 WHEN max_temp BETWEEN 33 AND 49 THEN 'Cold'
			 WHEN max_temp BETWEEN 20 AND 32 THEN 'Freezing'
			 ELSE 'Inhumane'
		END
	FROM temperature_readings)
SELECT station_name, max_temperature_group, count(*)
FROM temps_collapsed
GROUP BY station_name, max_temperature_group
ORDER BY station_name, count(*) DESC;
