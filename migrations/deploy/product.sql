-- Deploy ccapi:product to pg
BEGIN;

SET
    search_path TO ccapi;

CREATE TABLE product (
    product_id uuid DEFAULT public.gen_random_uuid () PRIMARY KEY,
    category_id uuid REFERENCES category,
    sku text NOT NULL,
    name varchar,
    photo varchar,
    description text,
    created_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

COMMIT;