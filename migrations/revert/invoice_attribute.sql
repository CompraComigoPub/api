-- Revert ccapi:invoice_attribute from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE invoice_attribute;

COMMIT;
