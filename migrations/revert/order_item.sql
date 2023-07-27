-- Revert ccapi:order_item from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE order_item;

COMMIT;
