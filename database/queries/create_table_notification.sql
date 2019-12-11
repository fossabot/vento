-- Table: public.notification

-- DROP TABLE public.notification;

CREATE TABLE public.notification
(
    id character varying COLLATE pg_catalog."default" NOT NULL,
    type character varying COLLATE pg_catalog."default" NOT NULL,
    notes character varying(20148) COLLATE pg_catalog."default",
    definition character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT notification_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.notification
    OWNER to postgres;
COMMENT ON TABLE public.notification
    IS 'Table holds all the notifications.';