-- Revert ccapi:permission from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE permission;

COMMIT;
