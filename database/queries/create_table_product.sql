-- Table: public.product

-- DROP TABLE public.product;

CREATE TABLE public.product
(
    "createdAt" bigint,
    "updatedAt" bigint,
    id character varying COLLATE pg_catalog."default" NOT NULL,
    name text COLLATE pg_catalog."default",
    display_name text COLLATE pg_catalog."default",
    department_id text COLLATE pg_catalog."default",
    CONSTRAINT product_pkey PRIMARY KEY (id),
    CONSTRAINT product_department_id_key UNIQUE (department_id)
,
    CONSTRAINT product_display_name_key UNIQUE (display_name)
,
    CONSTRAINT product_name_key UNIQUE (name)

)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.product
    OWNER to vento;