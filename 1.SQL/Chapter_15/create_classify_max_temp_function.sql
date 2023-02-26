CREATE OR REPLACE FUNCTION classify_max_temp()
RETURNS trigger AS $$
BEGIN
	CASE 
		WHEN NEW.max_temp >= 90 THEN
				NEW.max_temp_group := 'Hot';
		WHEN NEW.max_temp BETWEEN 70 AND 89 THEN
				NEW.max_temp_group := 'Warm';
		WHEN NEW.max_temp BETWEEN 50 AND 69 THEN
				NEW.max_temp_group := 'Pleasant';
		WHEN NEW.max_temp BETWEEN 33 AND 49 THEN
				NEW.max_temp_group := 'Cold';
		WHEN NEW.max_temp BETWEEN 20 AND 32 THEN
				NEW.max_temp_group := 'Freezing';
		ELSE NEW.max_temp_group := 'Inhumane';
	END CASE;
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;	
		
		