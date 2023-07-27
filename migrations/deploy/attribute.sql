-- Deploy ccapi:attribute to pg
BEGIN;

SET search_path TO ccapi;

--  Tipo de dado suportado pelo POSTGRES, este campo deverá ser um tipo pré-definido para garantir integridade.  ATTRIBUTE_TYPE:   - VARCHAR   - DECIMAL   - TEXT  E quando for consumido pela API, o valor que for salvo em ccapi.attribute_value.value deverá 'sofrer' um casting, value::varchar
CREATE TYPE datatype AS enum (
    'VARCHAR',
    'DECIMAL',
    'BOOLEAN'
);

CREATE TABLE attribute (
    attribute_id uuid DEFAULT public.gen_random_uuid (),
    label text NOT NULL,
    content_type datatype NOT NULL,
    CONSTRAINT attribute_pkey PRIMARY KEY (attribute_id)
);

COMMIT;
