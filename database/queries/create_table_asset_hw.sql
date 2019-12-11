-- Table: public.asset_hw

-- DROP TABLE public.asset_hw;

CREATE TABLE public.asset_hw
(
    id character varying COLLATE pg_catalog."default" NOT NULL,
    asset_id character varying(50) COLLATE pg_catalog."default" NOT NULL,
    location character varying(10) COLLATE pg_catalog."default",
    type character varying COLLATE pg_catalog."default" NOT NULL,
    ip character varying COLLATE pg_catalog."default" NOT NULL,
    service_tag character varying COLLATE pg_catalog."default" NOT NULL,
    resource_detail character varying COLLATE pg_catalog."default",
    contract_end_date numeric NOT NULL,
    owner character varying COLLATE pg_catalog."default" NOT NULL,
    consumer character varying COLLATE pg_catalog."default",
    product_id character varying COLLATE pg_catalog."default" NOT NULL,
    dept_id character varying COLLATE pg_catalog."default" NOT NULL,
    notes character varying(2048) COLLATE pg_catalog."default",
    notification_id character varying COLLATE pg_catalog."default",
    CONSTRAINT pk_asset_hw_id PRIMARY KEY (id),
    CONSTRAINT fk_consumer FOREIGN KEY (consumer)
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_dept_id FOREIGN KEY (dept_id)
        REFERENCES public.department (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_notification_id FOREIGN KEY (notification_id)
        REFERENCES public.notification (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_owner FOREIGN KEY (owner)
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_product_id FOREIGN KEY (product_id)
        REFERENCES public.product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.asset_hw
    OWNER to postgres;
COMMENT ON TABLE public.asset_hw
    IS 'This table is used for Hardware Assets';