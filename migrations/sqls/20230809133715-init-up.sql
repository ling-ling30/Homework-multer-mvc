/* Replace with your SQL commands */
CREATE SEQUENCE users_id_seq
START 101;

UPDATE users
SET id = nextval('users_id_seq');

ALTER TABLE users
ALTER COLUMN id
SET
DEFAULT nextval
('users_id_seq');

ALTER TABLE users
ADD PRIMARY KEY (id);


-- CREATE SEQUENCE movies_id_seq
-- START 101;

-- UPDATE movies
-- SET id = nextval('users_id_seq');

-- ALTER TABLE movies
-- ALTER COLUMN id
-- SET
-- DEFAULT nextval
-- ('movies_id_seq');
SELECT setval('movies_id_seq', 100, true);

DELETE FROM movies WHERE title='test123';

ALTER TABLE movies
ADD PRIMARY KEY (id);

ALTER TABLE users
    ALTER COLUMN password TYPE
VARCHAR
(255);

ALTER TABLE movies
    ALTER COLUMN photo TYPE
VARCHAR
(255);