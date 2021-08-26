-- Verify boardgame:init on pg

BEGIN;

SELECT id FROM boardgame WHERE false;

ROLLBACK;
