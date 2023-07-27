-- Deploy ccapi:invoice_attribute to pg
BEGIN;

SET search_path TO ccapi;

CREATE TABLE invoice_attribute (
    invoice_attribute_id uuid DEFAULT public.gen_random_uuid () PRIMARY KEY,
    invoice_id uuid NOT NULL REFERENCES invoice (invoice_id),
    label varchar NOT NULL,
    datatype varchar NOT NULL
);

COMMIT;
