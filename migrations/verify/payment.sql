-- Verify ccapi:payment on pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    payment;

ROLLBACK;
