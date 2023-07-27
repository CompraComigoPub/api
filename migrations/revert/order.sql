-- Revert ccapi:order from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE "order";

COMMIT;
