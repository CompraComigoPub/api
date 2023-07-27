BEGIN;

SET
    search_path TO ccapi;

CREATE TABLE field_type (
    field_type_id uuid DEFAULT public.gen_random_uuid () PRIMARY KEY,
    name varchar(255) NOT NULL,
    created_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

COMMIT;