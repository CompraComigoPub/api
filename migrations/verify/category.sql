-- Verify ccapi:category on pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    category;

ROLLBACK;
