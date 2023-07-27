-- Revert ccapi:supplier from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE supplier;

COMMIT;