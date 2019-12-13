-- Table: public.department

-- DROP TABLE public.department;

CREATE TABLE public.department
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

ALTER TABLE public.department
    OWNER to vento;
COMMENT ON TABLE public.department
    IS 'This is the table to host all the department information.';