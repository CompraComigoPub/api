-- Verify ccapi:demand_item on pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    demand_item;

ROLLBACK;
