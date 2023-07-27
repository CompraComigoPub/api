-- Deploy ccapi:budget to pg
BEGIN;

SET search_path TO ccapi;

CREATE TABLE budget (
    budget_id uuid DEFAULT public.gen_random_uuid () PRIMARY KEY,
    demand_id uuid REFERENCES demand,
    order_id uuid REFERENCES "order",
    max_date timestamp DEFAULT now() + '7 days' ::interval,
    created_at timestamp DEFAULT now(),
    status varchar(50),
    description text
);

COMMENT ON TABLE budget IS E'Orçamentos gerados a partir do pedido previamente criado';

COMMENT ON COLUMN budget.max_date IS E'Data máxima para validade do pedido, DEFAULT 7 dias';

COMMENT ON COLUMN budget.status IS E'Definição de situação para o orçamento';

COMMIT;
