DELETE FROM supervisor_salaries;

/* Add default value to a column during Import */

/* create tempoary table - disappears when your close db */
CREATE TEMPORARY TABLE supervisor_salaries_temp(LIKE supervisor_salaries);

/* import data into temp table */
COPY supervisor_salaries_temp(town, supervisor, salary)
FROM 'C:\Users\Bernard Heinze\Documents\Code College\PostgreSQL\Files\Chapter 4\supervisor_salaries.csv'
WITH(FORMAT CSV, HEADER);

/* populate supervisor_salaries using data from temp table and add 'default value' for County */
INSERT INTO supervisor_salaries(town, county, supervisor, salary)
SELECT town, 'Some County', supervisor, salary
FROM supervisor_salaries_temp;

/* remove temp table */
DROP TABLE supervisor_salaries_temp;

