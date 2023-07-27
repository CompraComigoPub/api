BEGIN;

SET search_path TO ccapi;

SELECT
    *
FROM
    product_form_field

ROLLBACK;