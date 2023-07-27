-- Deploy ccapi:user to pg
BEGIN;

SET search_path TO ccapi;

CREATE TABLE "user" (
    user_id uuid DEFAULT public.gen_random_uuid (),
    name varchar NOT NULL,
    email varchar NOT NULL,
    role varchar NOT NULL,
    inviter_id varchar NOT NULL,
    invited_id varchar NULL,
    firebase_id varchar NOT NULL,
    phone varchar NULL,
    photo varchar NULL,
    position varchar NULL,
    cpf varchar NULL,
    company_id uuid, --  Empresa que o COMPRADOR representa
    -- CONSTRAINTS
    CONSTRAINT user_id_pkey PRIMARY KEY (user_id),
    CONSTRAINT company_id_fkey FOREIGN KEY (company_id) REFERENCES company (company_id)
);

COMMIT;
