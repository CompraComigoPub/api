-- Verify ccapi:schema on pg
BEGIN;

SET search_path TO ccapi;

SELECT
    pg_catalog.has_schema_privilege('ccapi', 'usage');

ROLLBACK;
