-- Revert ccapi:demand from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE demand;

COMMIT;
