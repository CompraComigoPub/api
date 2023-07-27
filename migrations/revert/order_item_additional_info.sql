-- Revert ccapi:order_item_additional_info from pg

BEGIN;
SET search_path TO ccapi;

DROP TABLE order_item_additional_info;

COMMIT;
