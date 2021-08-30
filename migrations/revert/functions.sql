-- Revert boardgame:functions from pg

BEGIN;

DROP FUNCTION update_boardgame(text, text, text, int, int, int, int);
DROP FUNCTION new_boardgame(text, text, text, int, int, int);


COMMIT;
