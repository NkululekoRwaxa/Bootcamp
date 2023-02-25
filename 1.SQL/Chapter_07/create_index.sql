CREATE INDEX street_idx ON New_York_Addresses (street);
EXPLAIN ANALYZE SELECT * FROM new_york_addresses
WHERE street = 'BROADWAY';
EXPLAIN ANALYZE SELECT * FROM new_york_addresses
WHERE street = '52 STREET';
EXPLAIN ANALYZE SELECT * FROM new_york_addresses
WHERE street = 'ZWICKY AVENUE';

