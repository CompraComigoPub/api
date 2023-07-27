-- Deploy ccapi:invoice to pg
BEGIN;

SET search_path TO ccapi;

CREATE TABLE invoice (
    invoice_id uuid DEFAULT public.gen_random_uuid (),
    budget_id uuid NOT NULL,
    status text NOT NULL,
    homologation boolean,
    -- CONSTRAINT
    CONSTRAINT invoice_pkey PRIMARY KEY (invoice_id),
    CONSTRAINT budget_id_fkey FOREIGN KEY (budget_id) REFERENCES budget (budget_id) ON DELETE CASCADE
);

COMMIT;
