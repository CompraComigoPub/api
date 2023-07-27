-- Verify ccapi:purchase_interest on pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    purchase_interest;

ROLLBACK;
