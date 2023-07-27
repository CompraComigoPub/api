-- Verify ccapi:category_attribute on pg
BEGIN;

SET search_path TO ccapi;

SELECT
    category_id,
    attribute_id,
    created_at
FROM
    category_attribute;

ROLLBACK;
