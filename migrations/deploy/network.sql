-- Deploy ccapi:network to pg
BEGIN;

CREATE TABLE ccapi.network (
    network_id uuid DEFAULT public.gen_random_uuid (),
    name text UNIQUE,
    CONSTRAINT network_id_pkey PRIMARY KEY (network_id)

);

COMMIT;
