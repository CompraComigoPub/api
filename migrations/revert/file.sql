-- Revert ccapi:file from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE file;

COMMIT;