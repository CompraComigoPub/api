-- Verify ccapi:network_company from pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    network_company;

COMMIT;
