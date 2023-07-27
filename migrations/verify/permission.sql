-- Verify ccapi:permission on pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    permission;

ROLLBACK;
