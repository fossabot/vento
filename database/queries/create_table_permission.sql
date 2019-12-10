-- Table: public.permission

-- DROP TABLE public.permission;

CREATE TABLE public.permission
(
    id character varying COLLATE pg_catalog."default" NOT NULL,
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    display_name character varying(75) COLLATE pg_catalog."default" NOT NULL,
    description character varying(1024) COLLATE pg_catalog."default",
    CONSTRAINT permission_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.permission
    OWNER to postgres;
COMMENT ON TABLE public.permission
    IS 'Table to hold all the permissions. A Role can have one or more Permissions.';