-- Table: public.role

-- DROP TABLE public.role;

CREATE TABLE public.role
(
    createdAt bigint NOT NULL,
    updatedAt bigint NOT NULL,
    id character varying COLLATE pg_catalog."default" NOT NULL,
    name text COLLATE pg_catalog."default",
    display_name text COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    CONSTRAINT role_pkey PRIMARY KEY (id),
    CONSTRAINT role_display_name_key UNIQUE (display_name),
    CONSTRAINT role_name_key UNIQUE (name)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.role
    OWNER to vento;