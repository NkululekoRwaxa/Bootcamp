CREATE OR REPLACE FUNCTION record_if_grade_changed()
RETURNS trigger AS $$
BEGIN
	IF NEW.grade <> OLD.grade THEN
	
		INSERT INTO grades_history
		(student_id, course_id, change_time, course, old_grade, new_grade)
		VALUES
		(OLD.student_id, OLD.course_id, now(), OLD.course, OLD.grade, NEW.grade);
	END IF;
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;