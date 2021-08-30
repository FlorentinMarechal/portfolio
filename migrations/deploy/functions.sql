-- Deploy boardgame:functions to pg

BEGIN;

-- version longue
-- CREATE FUNCTION new_boardgame(name TEXT, author TEXT, editor TEXT, min_players INT, max_players INT, min_age INT) RETURNS id AS $$
--     INSERT INTO boardgame(name, author, editor, min_players, max_players, min_age) VALUES(name, author, editor, min_players, max_players, min_age) RETURNING id;
-- $$ LANGUAGE SQL STRICT;

--version courte
--                             $1    $2    $3    $4   $5   $6
CREATE FUNCTION new_boardgame(TEXT, TEXT, TEXT, INT, INT, INT) RETURNS INT AS $$
    INSERT INTO boardgame("name", author, editor, min_players, max_players, min_age) VALUES($1, $2, $3, $4, $5, $6) RETURNING id;
$$ LANGUAGE SQL STRICT;

CREATE FUNCTION update_boardgame(TEXT, TEXT, TEXT, INT, INT, INT, INT) RETURNS void AS $$
    UPDATE boardgame SET name=$1, author=$2, editor=$3, min_players=$4, max_players=$5, min_age=$6 WHERE id=$7;
$$ LANGUAGE SQL STRICT;

COMMIT;
