-- Deploy ccapi:category to pg
BEGIN;

SET search_path TO ccapi;

CREATE TABLE category (
    category_id uuid DEFAULT public.gen_random_uuid () PRIMARY KEY,
    label varchar,
    parent_category_id uuid references category_id,
    photo varchar,
    description text 
);

COMMIT;
