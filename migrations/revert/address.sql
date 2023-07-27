-- Revert ccapi:address from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE address;

COMMIT;