-- Revert ccapi:budget from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE budget;

COMMIT;
