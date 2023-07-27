-- Revert ccapi:invoice_attribute_value from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE invoice_attribute_value;

COMMIT;
