-- Verify ccapi:user on pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    "user";

ROLLBACK;
