-- Deploy ccapi:order to pg
BEGIN;

SET search_path TO ccapi;

CREATE TABLE "order" (
    order_id uuid DEFAULT public.gen_random_uuid (),
    company_id uuid NOT NULL,
    interest_id uuid NULL, --  Depende de aprovação do OPERADOR status text NOT NULL, --  Quando o OPERADOR considera válido um pedido, o mesmo poderá gerar um INTERESSE DE COMPRA ou ser adicionado a um pré-existente. ------------- 1. VALIDO  2. INVÁLIDO created_by uuid NOT NULL, --  Usuário responsável pela criação do Pedido created_at timestamp NOT NULL,
    status TEXT, 
    type TEXT,
    updated_by uuid, --  OPERADOR que mudou o status o pedido
    network_id uuid NOT NULL REFERENCES network, -- Rede em que o pedido foi feito
    updated_at timestamp DEFAULT CURRENT_TIMESTAMP, 
    created_at timestamptz DEFAULT CURRENT_TIMESTAMP,
    created_by uuid NOT NULL,
    -- CONSTRAINTS
    CONSTRAINT order_pkey PRIMARY KEY (order_id),
    CONSTRAINT company_id_fkey FOREIGN KEY (company_id) REFERENCES company (company_id)

);

COMMENT ON TABLE "order" IS 'Tabela de pedidos';

COMMENT ON COLUMN "order"."interest_id" IS 'Depende de aprovação do OPERADOR';

COMMENT ON COLUMN "order"."company_id" IS 'Companhia criadora do pedido';

COMMENT ON COLUMN "order"."status" IS 'Quando o OPERADOR considera válido um pedido, o mesmo poderá gerar um INTERESSE DE COMPRA ou ser adicionado a um pré-existente - 1. VALIDO  2. INVÁLIDO';

COMMIT;
