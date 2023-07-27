-- Deploy ccapi:company to pg
BEGIN;

SET search_path TO ccapi;

CREATE TABLE company (
    company_id uuid DEFAULT public.gen_random_uuid (),
    name varchar NOT NULL,
    trade_name varchar NULL,
    cnpj varchar NOT NULL,
    logo varchar NULL,
    CONSTRAINT company_id_pkey PRIMARY KEY (company_id)
);

COMMIT;
