-- Deploy ccapi:attribute_value to pg
BEGIN;

SET search_path TO ccapi;

CREATE TABLE attribute_value (
    attribute_value_id uuid DEFAULT public.gen_random_uuid () PRIMARY KEY,
    attribute_id uuid NOT NULL REFERENCES attribute (attribute_id),
    product_id uuid NOT NULL REFERENCES product (product_id),
    value text NOT NULL
);

COMMIT;
