-- Deploy ccapi:demand to pg
BEGIN;

SET search_path TO ccapi;

CREATE TABLE demand (
    demand_id uuid DEFAULT public.gen_random_uuid (),
    supplier_id uuid NOT NULL,
    created_by uuid NOT NULL,
    network_id uuid NOT NULL,
    total_price decimal,
    
    -- CONSTRAINT
    CONSTRAINT demand_id_pkey PRIMARY KEY (demand_id),
    CONSTRAINT supplier_id_fkey FOREIGN KEY (supplier_id) REFERENCES company (company_id),
    CONSTRAINT network_id_fkey FOREIGN KEY (network_id) REFERENCES network (network_id)
);

COMMIT;
