-- Revert ccapi:user from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE "user";

COMMIT;
