-- findMatch(status, seeking, gender_seeking)
-- DROP FUNCTION findmatch(varchar, varchar, varchar);

CREATE OR REPLACE FUNCTION findMatch(st varchar, sk varchar, gs varchar)
RETURNS TABLE(Name varchar, Profession varchar, Status varchar) AS $$
BEGIN
	RETURN QUERY (SELECT mc.last_name, mc.profession, mc.status FROM My_Contacts mc
	WHERE mc.status = st AND mc.seeking ILIKE '%' || st || '%' AND mc.gender = gs);
END;
$$ LANGUAGE plpgsql;