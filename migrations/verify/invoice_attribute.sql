-- Verify ccapi:invoice_attribute from pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    invoice_attribute;

COMMIT;
