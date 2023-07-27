-- Deploy ccapi:address to pg
BEGIN;

SET search_path TO ccapi;

CREATE TABLE address (
    address_id uuid DEFAULT public.gen_random_uuid () PRIMARY KEY,
    street varchar NOT NULL,
    neighborhood varchar NOT NULL,
    city varchar NOT NULL,
    state varchar NOT NULL,
    zipcode varchar NOT NULL,
    numeric_indentifier int,
    complement text,
    company_id uuid NOT NULL REFERENCES company
);

COMMIT;
