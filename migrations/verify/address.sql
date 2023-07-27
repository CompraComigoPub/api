-- Verify ccapi:address on pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    address;

ROLLBACK;
