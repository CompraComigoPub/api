-- Verify ccapi:invoice_item on pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    invoice_item;

ROLLBACK;
