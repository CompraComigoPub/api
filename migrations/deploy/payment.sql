-- Deploy ccapi:payment to pg
BEGIN;

SET search_path TO ccapi;

CREATE TABLE payment (
    payment_id uuid NOT NULL,
    integration_id text, --  Código informado pela API que estamos integrando. TEXT??? como ñ sabemos que tipo de código teremos, text é o mais genérico que podemos ter 
    invoice_id uuid, -- paymente_type text, -- PAYMENT_TYPE         ,
    -- CONSTRAINT
    CONSTRAINT payment_pkey PRIMARY KEY (payment_id),
    CONSTRAINT invoice_id_fkey FOREIGN KEY (invoice_id) REFERENCES invoice (invoice_id)
);

COMMIT;
