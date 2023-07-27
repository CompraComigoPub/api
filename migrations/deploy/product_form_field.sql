BEGIN;

SET
    search_path TO ccapi;

CREATE TABLE product_form_field (
    product_form_field_id uuid DEFAULT public.gen_random_uuid () PRIMARY KEY,
    label varchar(255) NOT NULL,
    form_id uuid NOT NULL REFERENCES product_form (product_form_id),
    type_id uuid NOT NULL REFERENCES field_type (field_type_id),
    placeholder text NOT NULL,
    default_value varchar(255) NOT NULL,
    required boolean NOT NULL,
    datatype varchar(255) NOT NULL,
    created_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

COMMIT;