-- Table: public.product

-- DROP TABLE public.product;

CREATE TABLE public.product
(
    createdAt bigint NOT NULL,
    updatedAt bigint NOT NULL,
    id character varying COLLATE pg_catalog."default" NOT NULL,
    name text COLLATE pg_catalog."default",
    display_name text COLLATE pg_catalog."default",
    department_id text COLLATE pg_catalog."default",
    CONSTRAINT product_pkey PRIMARY KEY (id),
    CONSTRAINT product_display_name_key UNIQUE (display_name),
    CONSTRAINT product_name_key UNIQUE (name),
    CONSTRAINT fk_product_dept_id FOREIGN KEY (department_id)
        REFERENCES public.department (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.product
    OWNER to vento;