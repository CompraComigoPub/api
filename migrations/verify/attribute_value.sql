-- Verify ccapi:attribute_value from pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    attribute_value;

COMMIT;
