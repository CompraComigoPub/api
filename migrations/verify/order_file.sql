-- Verify ccapi:order_file from pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    order_file;

COMMIT;
