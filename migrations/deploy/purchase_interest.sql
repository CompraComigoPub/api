-- Deploy ccapi:purchase_interest to pg
BEGIN;

SET search_path TO ccapi;

CREATE TABLE purchase_interest (
    interest_id uuid DEFAULT public.gen_random_uuid (),
    "status" text NOT NULL, --- Status pode ser OPEN ou CLOSED
    title TEXT NOT NULL,
    description text NULL,
    leadership_id uuid,
    approved_by uuid,
    network_id uuid,
    created_at timestamptz DEFAULT CURRENT_TIMESTAMP,
    created_by uuid,
    deadline timestamptz NOT NULL,
    category_id uuid,
    photo varchar,
    CONSTRAINT purchase_interest_pkey PRIMARY KEY (interest_id),
    CONSTRAINT leadership_id_fkey FOREIGN KEY (leadership_id) REFERENCES company (company_id),
    CONSTRAINT network_id_fkey FOREIGN KEY (network_id) REFERENCES network (network_id),
    CONSTRAINT category_id_fkey FOREIGN KEY (category_id) REFERENCES category(category_id)
);

COMMENT ON COLUMN purchase_interest. "status" IS E'O STATUS refere-se a etapa posterior onde o FORNECEDOR participa informando VALORES (R$)\n1. INTERESSE\n2. APROVADO\n3. REPROVADO';

COMMENT ON COLUMN purchase_interest.leadership_id IS E'Empresa que iniciou o INTERESSE DE COMPRA';

COMMENT ON COLUMN purchase_interest.approved_by IS E'OPERADOR que aprovou o INTERESSE DE COMPRA';

COMMIT;
