-- 1.
CREATE OR REPLACE VIEW nyc_taxi_trips_per_hour AS
    SELECT
         date_part('hour', tpep_pickup_datetime),
         count(date_part('hour', tpep_pickup_datetime))
    FROM nyc_yellow_taxi_trips_2016_06_01
    GROUP BY date_part('hour', tpep_pickup_datetime)
    ORDER BY date_part('hour', tpep_pickup_datetime);

SELECT * FROM nyc_taxi_trips_per_hour;

-- 2.

CREATE OR REPLACE FUNCTION
rate_per_thousand(observed_number numeric,
                  base_number numeric,
                  decimal_places integer DEFAULT 1)
RETURNS numeric(10,2) AS $$
BEGIN
    RETURN
        round(
        (observed_number / base_number) * 1000, decimal_places
        );
END;
$$ LANGUAGE plpgsql;

-- Test the function:

SELECT rate_per_thousand(50, 11000, 2);

-- 3.

ALTER TABLE meat_poultry_egg_inspect ADD COLUMN inspection_date date;

CREATE OR REPLACE FUNCTION add_inspection_date()
    RETURNS trigger AS $$
    BEGIN
       NEW.inspection_date = now() + '6 months'::interval; -- Here, we set the inspection date to six months in the future
    RETURN NEW;
    END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER inspection_date_update
  BEFORE INSERT
  ON meat_poultry_egg_inspect
  FOR EACH ROW
  EXECUTE PROCEDURE add_inspection_date();


INSERT INTO meat_poultry_egg_inspect(est_number, company)
VALUES ('test123', 'testcompany');

SELECT * FROM meat_poultry_egg_inspect
WHERE company = 'testcompany';
