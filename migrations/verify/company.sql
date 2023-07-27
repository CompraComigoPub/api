-- Verify ccapi:company on pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    company;

ROLLBACK;
