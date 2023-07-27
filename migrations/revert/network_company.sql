-- Revert ccapi:network_company from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE network_company;

COMMIT;
