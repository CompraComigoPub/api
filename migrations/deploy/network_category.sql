-- Deploy ccapi:network_category to pg

BEGIN;

SET
    search_path TO ccapi;

CREATE TABLE network_category (
    network_category_id uuid DEFAULT public.gen_random_uuid () PRIMARY KEY,
    category_id uuid NOT NULL REFERENCES category (category_id),
    network_id uuid NOT NULL REFERENCES network (network_id)
);

COMMIT;
