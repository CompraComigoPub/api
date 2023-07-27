-- Verify ccapi:attribute on pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    attribute;

ROLLBACK;
