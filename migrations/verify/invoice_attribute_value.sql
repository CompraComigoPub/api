-- Verify ccapi:invoice_attribute_value from pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    invoice_attribute_value;

COMMIT;
