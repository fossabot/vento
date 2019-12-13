-- Table: public.departments

-- DROP TABLE public.departments;

CREATE TABLE public.departments
(
    id character varying COLLATE pg_catalog."default" NOT NULL,
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    location character varying(100) COLLATE pg_catalog."default",
    "createdAt" character varying COLLATE pg_catalog."default" NOT NULL,
    "updatedAt" character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT department_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.departments
    OWNER to vento;
COMMENT ON TABLE public.departments
    IS 'This is the table to host all the department information.';