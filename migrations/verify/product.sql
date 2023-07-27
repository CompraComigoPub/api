-- Verify ccapi:product on pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    product;

ROLLBACK;
