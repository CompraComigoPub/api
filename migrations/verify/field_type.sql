BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    field_type

ROLLBACK;