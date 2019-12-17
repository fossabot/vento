-- Table: public.department

-- DROP TABLE public.department;

CREATE TABLE public.department
(
    "createdAt" bigint,
    "updatedAt" bigint,
    id character varying COLLATE pg_catalog."default" NOT NULL,
    name text COLLATE pg_catalog."default",
    location text COLLATE pg_catalog."default",
    CONSTRAINT department_pkey PRIMARY KEY (id),
    CONSTRAINT department_name_key UNIQUE (name)

)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.department
    OWNER to vento;