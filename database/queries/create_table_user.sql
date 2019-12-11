-- Table: public."user"

-- DROP TABLE public."user";

CREATE TABLE public."user"
(
    username character varying(30) COLLATE pg_catalog."default" NOT NULL,
    password character varying(30) COLLATE pg_catalog."default" NOT NULL,
    first_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    middle_name character varying(50) COLLATE pg_catalog."default",
    last_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    role_id character varying COLLATE pg_catalog."default" NOT NULL,
    product_id character varying COLLATE pg_catalog."default" NOT NULL,
    dept_id character varying COLLATE pg_catalog."default" NOT NULL,
    email character varying(50) COLLATE pg_catalog."default" NOT NULL,
    phone character varying(13) COLLATE pg_catalog."default" NOT NULL,
    id character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT pk_uid PRIMARY KEY (id),
    CONSTRAINT fk_dept_id FOREIGN KEY (dept_id)
        REFERENCES public.department (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_product_id FOREIGN KEY (product_id)
        REFERENCES public.product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_role_id FOREIGN KEY (role_id)
        REFERENCES public.role (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."user"
    OWNER to postgres;
COMMENT ON TABLE public."user"
    IS 'Table to hold user record. A User must have a role.';