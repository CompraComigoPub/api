BEGIN;

SET
    search_path TO ccapi;

CREATE TABLE product_form_field_option (
    product_form_field_option_id uuid DEFAULT public.gen_random_uuid () PRIMARY KEY,
    product_form_field_id uuid NOT NULL REFERENCES product_form_field (product_form_field_id),
    value text NOT NULL,
    label varchar(255) NOT NULL,
    created_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

COMMIT;