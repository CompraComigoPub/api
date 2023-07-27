-- Revert ccapi:schema from pg
BEGIN;

SET search_path TO ccapi;

DROP SCHEMA ccapi;

COMMIT;
