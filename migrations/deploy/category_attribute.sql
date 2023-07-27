-- Deploy ccapi:category_attribute to pg
BEGIN;

SET search_path TO ccapi;

CREATE TABLE category_attribute (
    category_id uuid REFERENCES category,
    attribute_id uuid REFERENCES attribute,
    created_at timestamptz DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT category_id_attribute_id PRIMARY KEY (category_id, attribute_id)
);

COMMIT;
