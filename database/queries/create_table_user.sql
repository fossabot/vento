-- Table: public."user"

-- DROP TABLE public."user";

CREATE TABLE public."user"
(
    createdAt bigint NOT NULL,
    updatedAt bigint NOT NULL,
    id character varying COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default",
    username text COLLATE pg_catalog."default",
    password text COLLATE pg_catalog."default",
    first_name text COLLATE pg_catalog."default",
    middle_name text COLLATE pg_catalog."default",
    last_name text COLLATE pg_catalog."default",
    phone text COLLATE pg_catalog."default",
    role_id text COLLATE pg_catalog."default",
    product_id text COLLATE pg_catalog."default",
    dept_id text COLLATE pg_catalog."default",
    CONSTRAINT user_pkey PRIMARY KEY (id),
    CONSTRAINT user_email_key UNIQUE (email),
    CONSTRAINT user_username_key UNIQUE (username),
    CONSTRAINT fk_user_dept_id FOREIGN KEY (dept_id)
        REFERENCES public.department (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_user_prod_id FOREIGN KEY (product_id)
        REFERENCES public.product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_user_role_id FOREIGN KEY (role_id)
        REFERENCES public.role (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."user"
    OWNER to vento;