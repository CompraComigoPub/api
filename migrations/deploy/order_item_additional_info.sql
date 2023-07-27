-- Deploy ccapi:order_item_additional_info to pg

BEGIN;

SET
    search_path TO ccapi;

CREATE TABLE order_item_additional_info (
    order_item_additional_info_id uuid DEFAULT public.gen_random_uuid () PRIMARY KEY,
    form_field_id uuid NOT NULL REFERENCES product_form_field (product_form_field_id),
    order_item_id uuid NOT NULL REFERENCES order_item (order_item_id),
    value text NOT NULL
);

COMMIT;
