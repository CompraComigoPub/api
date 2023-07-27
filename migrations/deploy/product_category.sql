-- Deploy ccapi:product_category to pg

BEGIN;


SET
    search_path TO ccapi;

CREATE TABLE product_category (
    product_category_id uuid DEFAULT public.gen_random_uuid () PRIMARY KEY,
    category_id uuid NOT NULL REFERENCES category (category_id),
    product_id uuid NOT NULL REFERENCES product (product_id)
);

COMMIT;
