-- Deploy ccapi:invoice_item to pg
BEGIN;

SET search_path TO ccapi;

CREATE TABLE invoice_item (
    invoice_item_id uuid DEFAULT public.gen_random_uuid () PRIMARY KEY,
    invoice_id uuid NOT NULL REFERENCES invoice,
    product_id uuid NOT NULL REFERENCES product,
    quantity DECIMAL NOT NULL,
    price DECIMAL NOT NULL
);

COMMIT;
