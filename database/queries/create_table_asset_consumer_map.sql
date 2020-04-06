-- Table: public.assetconsumermap

-- DROP TABLE public.assetconsumermap;

CREATE TABLE public.assetconsumermap
(
    createdat bigint NOT NULL,
    updatedat bigint NOT NULL,
    id character varying COLLATE pg_catalog."default" NOT NULL,
    asset_id character varying COLLATE pg_catalog."default" NOT NULL,
    consumer_id character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT assetusermap_pkey PRIMARY KEY (id),
    CONSTRAINT fk_assetuser_asset_consumer FOREIGN KEY (consumer_id)
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT fk_assetuser_asset_id FOREIGN KEY (asset_id)
        REFERENCES public.asset (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE public.assetconsumermap
    OWNER to vento;