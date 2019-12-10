-- Table: public.role

-- DROP TABLE public.role;

CREATE TABLE public.role
(
    id character varying COLLATE pg_catalog."default" NOT NULL,
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    display_name character varying(75) COLLATE pg_catalog."default" NOT NULL,
    description character varying(1024) COLLATE pg_catalog."default",
    CONSTRAINT role_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.role
    OWNER to postgres;
COMMENT ON TABLE public.role
    IS 'Table to have role information';