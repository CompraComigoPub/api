-- Revert ccapi:attribute_value from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE attribute_value;

COMMIT;
