-- Revert ccapi:payment_type from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE payment_type;

COMMIT;
