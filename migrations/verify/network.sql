-- Verify ccapi:network from pg
BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    network;

COMMIT;
