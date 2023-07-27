-- Verify ccapi:invoice on pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    invoice;

ROLLBACK;
