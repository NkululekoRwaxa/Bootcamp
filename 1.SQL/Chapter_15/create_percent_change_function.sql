CREATE OR REPLACE FUNCTION
percent_change(new_value numeric, old_value numeric, decimal_places integer DEFAULT 1)
RETURNS numeric AS
'SELECT round( ( (new_value - old_value) / old_value ) * 100, decimal_places );'
LANGUAGE SQL
IMMUTABLE
RETURNS NULL ON NULL INPUT;