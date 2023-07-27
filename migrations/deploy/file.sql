-- Deploy ccapi:file to pg
BEGIN;

SET search_path TO ccapi;

CREATE TABLE file (
    file_id uuid DEFAULT public.gen_random_uuid () PRIMARY KEY,
    mimetype varchar NOT NULL,
    encoding varchar NOT NULL,
    filename varchar NOT NULL,
    created_at timestamp DEFAULT now()
);

COMMIT;
