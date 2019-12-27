-- Table: public.audit

-- DROP TABLE public.audit;

CREATE TABLE public.audit
(
    id character varying COLLATE pg_catalog."default" NOT NULL,
    type character varying COLLATE pg_catalog."default" NOT NULL,
    message character varying(2048) COLLATE pg_catalog."default" NOT NULL,
    createdAt bigint NOT NULL,
    updatedAt bigint NOT NULL,
    severity character varying COLLATE pg_catalog."default" NOT NULL,
    createdBy character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT audit_pkey PRIMARY KEY (id),
    CONSTRAINT fk_audit_created_by FOREIGN KEY (createdBy)
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.audit
    OWNER to vento;
COMMENT ON TABLE public.audit
    IS 'Table contains all audit(activity) records';