-- Revert ccapi:product_category from pg

BEGIN;

drop table product_category;

COMMIT;
