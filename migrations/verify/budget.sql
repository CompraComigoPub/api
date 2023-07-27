-- Verify ccapi:budget on pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    budget;

ROLLBACK;
