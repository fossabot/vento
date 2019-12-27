-- Table: public.permission

-- DROP TABLE public.permission;

CREATE TABLE public.permission
(
    createdAt bigint NOT NULL,
    updatedAt bigint NOT NULL,
    id character varying COLLATE pg_catalog."default" NOT NULL,
    name text COLLATE pg_catalog."default",
    display_name text COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    CONSTRAINT permission_pkey PRIMARY KEY (id),
    CONSTRAINT permission_display_name_key UNIQUE (display_name),
    CONSTRAINT permission_name_key UNIQUE (name)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.permission
    OWNER to vento;