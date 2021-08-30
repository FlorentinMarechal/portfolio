-- Verify boardgame:functions on pg

BEGIN;

SELECT new_boardgame('', '', '', 1, 2, 3);
SELECT update_boardgame('', '', '', 1, 2, 3, 4);

ROLLBACK;
