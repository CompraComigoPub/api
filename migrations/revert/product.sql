-- Revert ccapi:product from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE product;

COMMIT;
