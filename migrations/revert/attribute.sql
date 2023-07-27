-- Revert ccapi:attribute from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE attribute;

DROP TYPE datatype;

COMMIT;
