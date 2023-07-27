-- Revert ccapi:order_file from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE order_file;

COMMIT;