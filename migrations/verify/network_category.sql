-- Verify ccapi:network_category on pg

BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    network_company;

ROLLBACK;
