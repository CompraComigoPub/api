-- Revert ccapi:operator from pg
BEGIN;

SET search_path TO ccapi;

DROP TABLE OPERATOR;

COMMIT;
