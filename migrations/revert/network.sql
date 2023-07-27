-- Revert ccapi:network from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE network;

COMMIT;
