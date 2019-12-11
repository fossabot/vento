-- Table: public.audit

-- DROP TABLE public.audit;

CREATE TABLE public.audit
(
    id character varying COLLATE pg_catalog."default" NOT NULL,
    type character varying COLLATE pg_catalog."default" NOT NULL,
    message character varying(2048) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT audit_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.audit
    OWNER to postgres;
COMMENT ON TABLE public.audit
    IS 'Table contains all audit(activity) records';