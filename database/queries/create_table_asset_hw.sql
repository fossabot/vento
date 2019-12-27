-- Table: public.hardwareasset

-- DROP TABLE public.hardwareasset;

CREATE TABLE public.hardwareasset
(
    createdAt bigint NOT NULL,
    updatedAt bigint NOT NULL,
    id character varying COLLATE pg_catalog."default" NOT NULL,
    asset_id character varying COLLATE pg_catalog."default" NOT NULL,
    location character varying COLLATE pg_catalog."default" NOT NULL,
    type character varying COLLATE pg_catalog."default" NOT NULL,
    ip character varying COLLATE pg_catalog."default" NOT NULL,
    server_tag character varying COLLATE pg_catalog."default" NOT NULL,
    resource_details character varying COLLATE pg_catalog."default" NOT NULL,
    contract_end_date bigint NOT NULL,
    owner character varying COLLATE pg_catalog."default" NOT NULL,
    consumer character varying COLLATE pg_catalog."default",
    state boolean NOT NULL,
    os_version character varying COLLATE pg_catalog."default" NOT NULL,
    os_patch character varying COLLATE pg_catalog."default",
    notes character varying COLLATE pg_catalog."default",
    product_id character varying COLLATE pg_catalog."default" NOT NULL,
    department_id character varying COLLATE pg_catalog."default" NOT NULL,
    notification_id character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT hardwareasset_pkey PRIMARY KEY (id),
    CONSTRAINT fk_hw_asset_consumer FOREIGN KEY (consumer)
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_hw_asset_depart_id FOREIGN KEY (department_id)
        REFERENCES public.department (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_hw_asset_not_id FOREIGN KEY (notification_id)
        REFERENCES public.notification (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_hw_asset_owner FOREIGN KEY (owner)
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_hw_asset_product_id FOREIGN KEY (product_id)
        REFERENCES public.product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.hardwareasset
    OWNER to vento;