-- Revert ccapi:payment from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE payment;

COMMIT;
