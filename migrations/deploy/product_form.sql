BEGIN;

SET
    search_path TO ccapi;

CREATE TABLE product_form (
    product_form_id uuid DEFAULT public.gen_random_uuid () PRIMARY KEY,
    name varchar(255) NOT NULL,
    product_id uuid NOT NULL REFERENCES product (product_id),
    created_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

COMMIT;