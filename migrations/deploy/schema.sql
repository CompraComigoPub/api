-- Deploy ccapi:schema to pg
BEGIN;

CREATE SCHEMA ccapi;

CREATE EXTENSION pgcrypto;

COMMIT;
