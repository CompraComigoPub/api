-- Revert ccapi:category_attribute from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE IF EXISTS category_attribute;

COMMIT;
