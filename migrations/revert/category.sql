-- Revert ccapi:category from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE category;

COMMIT;
