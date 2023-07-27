-- Verify ccapi:order on pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    "order";

ROLLBACK;
