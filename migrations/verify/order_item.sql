-- Verify ccapi:order_item on pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    order_item;

ROLLBACK;
