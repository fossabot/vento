-- Table: public.assetnotificationmap

-- DROP TABLE public.assetnotificationmap;

CREATE TABLE public.assetnotificationmap
(
    createdAt bigint NOT NULL,
    updatedAt bigint NOT NULL,
    id character varying COLLATE pg_catalog."default" NOT NULL,
    asset_id character varying COLLATE pg_catalog."default" NOT NULL,
    notification_id character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT assetnotificationmap_pkey PRIMARY KEY (id),
    CONSTRAINT fk_assetnot_not_id FOREIGN KEY (notification_id)
        REFERENCES public.notification (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT fk_assetnot_asset_id FOREIGN KEY (asset_id)
        REFERENCES public.asset (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.assetnotificationmap
    OWNER to vento;