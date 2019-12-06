CREATE TABLE public.product
(
    id character varying NOT NULL,
    name character varying(50) NOT NULL,
    display_name character varying(75) NOT NULL,
    department_id character varying NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_id FOREIGN KEY (department_id)
        REFERENCES public.department (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.product
    OWNER to postgres;
COMMENT ON TABLE public.product
    IS 'Table for keeping all the product information for a Department. A Department can have one or more products.';