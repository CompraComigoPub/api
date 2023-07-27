-- Verify ccapi:aprove on pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    aprove;

ROLLBACK;
