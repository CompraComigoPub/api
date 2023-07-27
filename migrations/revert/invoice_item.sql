-- Revert ccapi:invoice_item from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE invoice_item;

COMMIT;
