-- Revert ccapi:demand_item from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE demand_item;

COMMIT;
