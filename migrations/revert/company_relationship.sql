-- Revert ccapi:company_relationship from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE company_relationship;

COMMIT;
