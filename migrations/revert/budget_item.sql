-- Revert ccapi:budget_item from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE budget_item;

COMMIT;
