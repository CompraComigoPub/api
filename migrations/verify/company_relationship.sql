-- Verify ccapi:company_relationship from pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    company_relationship;

COMMIT;
