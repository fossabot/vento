-- Table: public.asset

-- DROP TABLE public.asset;

CREATE TABLE public.asset
(
    createdAt bigint NOT NULL,
    updatedAt bigint NOT NULL,
    id character varying COLLATE pg_catalog."default" NOT NULL,
    hardware_asset_id character varying COLLATE pg_catalog."default" NOT NULL,
    hardware_location character varying COLLATE pg_catalog."default" NOT NULL,
    hardware_type character varying COLLATE pg_catalog."default" NOT NULL,
    hardware_ip character varying COLLATE pg_catalog."default" NOT NULL,
    hardware_server_tag character varying COLLATE pg_catalog."default" NOT NULL,
    hardware_resource_details character varying COLLATE pg_catalog."default" NOT NULL,
    hardware_state boolean NOT NULL,
    hardware_os_version character varying COLLATE pg_catalog."default" NOT NULL,
    hardware_os_patch character varying COLLATE pg_catalog."default",
    software_name character varying COLLATE pg_catalog."default" NOT NULL,
    software_version character varying COLLATE pg_catalog."default",
    asset_type character varying COLLATE pg_catalog."default" NOT NULL,
    contract_end_date bigint NOT NULL,
    notes character varying COLLATE pg_catalog."default",
    product_id character varying COLLATE pg_catalog."default"  DEFAULT 'bbb3a2e0-52e2-11ea-9422-1978c4a70a50'NOT NULL,
    department_id character varying COLLATE pg_catalog."default" DEFAULT '283802a0-52e1-11ea-b891-cd988dbdc9bf' NOT NULL,
    owner_id character varying COLLATE pg_catalog."default"  DEFAULT '69dea7ba-2878-11ea-978f-2e728ce88125' NOT NULL,	
    CONSTRAINT asset_pkey PRIMARY KEY (id),
    CONSTRAINT fk_asset_depart_id FOREIGN KEY (department_id)
        REFERENCES public.department (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE SET NULL,
    CONSTRAINT fk_asset_product_id FOREIGN KEY (product_id)
        REFERENCES public.product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE SET NULL,
    CONSTRAINT fk_asset_owner_id FOREIGN KEY (owner_id)
        REFERENCES public.user (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE SET NULL,    
    CONSTRAINT check_types 
        CHECK (asset_type = 'Hardware' OR asset_type = 'Software')
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.asset
    OWNER to vento;