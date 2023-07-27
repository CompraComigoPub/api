-- Deploy ccapi:order_file to pg
BEGIN;

SET search_path TO ccapi;

CREATE TABLE order_file (
    order_id uuid REFERENCES "order",
    file_id uuid REFERENCES file,
    created_at timestamptz DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT order_file_pk PRIMARY KEY (order_id, file_id)
);

COMMIT;
