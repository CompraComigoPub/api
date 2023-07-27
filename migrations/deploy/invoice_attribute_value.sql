-- Deploy ccapi:invoice_attribute_value to pg
BEGIN;

SET search_path TO ccapi;

CREATE TABLE invoice_attribute_value (
    invoice_attribute_id uuid DEFAULT public.gen_random_uuid () PRIMARY KEY,
    company_id uuid NOT NULL REFERENCES company (company_id),
    value text NOT NULL
);

COMMIT;
