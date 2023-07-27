-- Revert ccapi:product_attribute from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE product_attribute;

COMMIT;
