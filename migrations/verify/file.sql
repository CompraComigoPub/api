-- Verify ccapi:file from pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    file;

COMMIT;
