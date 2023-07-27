-- Deploy ccapi:order_item to pg
BEGIN;

SET search_path TO ccapi;

CREATE TABLE order_item (
    order_item_id uuid DEFAULT public.gen_random_uuid (),
    product_id uuid NOT NULL,
    order_id uuid NOT NULL,
    cost DECIMAL, --  Valor que o COMPRADOR paga atualmente quantity DECIMAL,
    icms DECIMAL,
    ipi DECIMAL,
    unity text, --  KG UNIDADE
    quantity DECIMAL,
    description text,
    address_id uuid NOT NULL,
    deadline_at text,
    shipping_at timestamp,
    shipping_type text NOT NULL,
    supplier_name text,
    supplier_email text,
    supplier_phone text,
    created_at timestamptz DEFAULT CURRENT_TIMESTAMP,
    -- CONSTRAINT
    CONSTRAINT order_item_id_pkey PRIMARY KEY (order_item_id),
    CONSTRAINT product_id_fkey FOREIGN KEY (product_id) REFERENCES product (product_id),
    CONSTRAINT address_id_fkey FOREIGN KEY (address_id) REFERENCES "address" (address_id),
    CONSTRAINT order_id_fkey FOREIGN KEY (order_id) REFERENCES "order" (order_id)
);

COMMIT;
