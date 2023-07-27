-- Verify ccapi:budget_item on pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    budget_item;

ROLLBACK;
