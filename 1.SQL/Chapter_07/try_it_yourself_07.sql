-- Not complete
CREATE TABLE albums 
(
	album_id bigserial PRIMARY KEY,
	album_catalog_code varchar(100) NOT NULL,
	album_title text NOT NULL,
	album_artist text NOT NULL,	
	album_release_date date NOT NULL,
	album_genre varchar(40) NOT NULL,
	album_description text NOT NULL,
	
	--song_id integer REFERENCES songs(song_id)
);

CREATE TABLE songs 
(
	song_id bigserial PRIMARY KEY,
	song_title text NOT NULL,
	song_artist text NOT NULL,
	album_id integer REFERENCES albums(album_id)
);