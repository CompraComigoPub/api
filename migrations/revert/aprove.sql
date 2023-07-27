-- Revert ccapi:aprove from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE aprove;

COMMIT;
