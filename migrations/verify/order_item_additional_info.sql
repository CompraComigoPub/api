-- Verify ccapi:order_item_additional_info on pg

BEGIN;

SELECT
    *
FROM
    order_item_additional_info;

ROLLBACK;
