-- Revert ccapi:purchase_interest from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE purchase_interest;

COMMIT;
