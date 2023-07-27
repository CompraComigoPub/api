-- Revert ccapi:network_category from pg

BEGIN;

SET search_path TO ccapi;

DROP TABLE network_category;

COMMIT;
