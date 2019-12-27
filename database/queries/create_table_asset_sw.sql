-- Table: public.softwareasset

-- DROP TABLE public.softwareasset;

CREATE TABLE public.softwareasset
(
    id character varying COLLATE pg_catalog."default" NOT NULL,
    createdAt bigint NOT NULL,
    updatedAt bigint NOT NULL,
    software character varying COLLATE pg_catalog."default" NOT NULL,
    version character varying COLLATE pg_catalog."default",
    date_of_expiry bigint,
    notes character varying(1024) COLLATE pg_catalog."default",
    owner character varying COLLATE pg_catalog."default" NOT NULL,
    consumer character varying COLLATE pg_catalog."default",
    department_id character varying COLLATE pg_catalog."default" NOT NULL,
    product_id character varying COLLATE pg_catalog."default" NOT NULL,
    notification_id character varying COLLATE pg_catalog."default",
    CONSTRAINT pk_software_asset PRIMARY KEY (id),
    CONSTRAINT fk_sw_asset_consumer FOREIGN KEY (consumer)
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_sw_asset_dept_id FOREIGN KEY (department_id)
        REFERENCES public.department (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_sw_asset_not_id FOREIGN KEY (notification_id)
        REFERENCES public.notification (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_sw_asset_owner FOREIGN KEY (owner)
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_sw_asset_prod_id FOREIGN KEY (product_id)
        REFERENCES public.product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.softwareasset
    OWNER to vento;