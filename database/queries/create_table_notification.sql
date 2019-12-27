-- Table: public.notification

-- DROP TABLE public.notification;

CREATE TABLE public.notification
(
    createdAt bigint NOT NULL,
    updatedAt bigint NOT NULL,
    id character varying COLLATE pg_catalog."default" NOT NULL,
    type text COLLATE pg_catalog."default",
    notes text COLLATE pg_catalog."default",
    definition text COLLATE pg_catalog."default",
    CONSTRAINT notification_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.notification
    OWNER to vento;