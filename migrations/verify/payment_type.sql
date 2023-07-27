-- Verify ccapi:payment_type on pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    payment_type;

ROLLBACK;
