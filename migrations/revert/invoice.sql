-- Revert ccapi:invoice from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE invoice;

COMMIT;
