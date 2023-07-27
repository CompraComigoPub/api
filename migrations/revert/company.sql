-- Revert ccapi:company from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE company;

COMMIT;
