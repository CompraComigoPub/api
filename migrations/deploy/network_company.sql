-- Deploy ccapi:network_company to pg
BEGIN;

SET search_path TO ccapi;

CREATE TABLE network_company (
    network_company_id uuid,
    company_id uuid REFERENCES company,
    network_id uuid REFERENCES network,
    role text,
    status text,
    created_at timestamptz DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT network_company_pk PRIMARY KEY (network_id, company_id)
);

COMMIT;
