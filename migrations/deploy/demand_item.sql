-- Deploy ccapi:demand_item to pg
BEGIN;

SET search_path TO ccapi;

CREATE TABLE demand_item (
    demand_item_id uuid DEFAULT public.gen_random_uuid () PRIMARY KEY,
    demand_id uuid NOT NULL REFERENCES demand,
    company_id uuid NOT NULL REFERENCES company,
    product_id uuid NOT NULL REFERENCES product,
    unity text NOT NULL DEFAULT '',
    price DECIMAL,
    quantity DECIMAL,
    icms DECIMAL,
    ipi DECIMAL,
    description text,
    discount DECIMAL,
    created_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON COLUMN demand_item.company_id IS E' --  Quando apresentado para o fornecedor, esta companhia deve ser anonima.  obs: Seria útil uma tabela intermediaria para evitar vazamento? (anonymous_user)';

COMMIT;
