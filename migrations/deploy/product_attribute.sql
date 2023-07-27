-- Deploy ccapi:product_attribute to pg
BEGIN;

SET search_path TO ccapi;

CREATE TABLE product_attribute (
    product_id uuid REFERENCES product ON DELETE CASCADE,
    attribute_id uuid REFERENCES attribute ON DELETE CASCADE,
    value varchar NOT NULL,
    created_at timestamptz DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT product_id_attribute_id_pkey PRIMARY KEY (product_id, attribute_id)
);

COMMIT;
