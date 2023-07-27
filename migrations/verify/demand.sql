-- Verify ccapi:demand on pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    demand;

ROLLBACK;
