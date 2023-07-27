-- Verify ccapi:product_attribute on pg
BEGIN;

SET search_path TO ccapi;

SELECT
    product_id,
    attribute_id,
    value
FROM
    product_attribute;

ROLLBACK;
