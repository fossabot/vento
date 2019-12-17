-- Table: public.rolepermissionmap

-- DROP TABLE public.rolepermissionmap;

CREATE TABLE public.rolepermissionmap
(
    "createdAt" bigint,
    "updatedAt" bigint,
    id character varying COLLATE pg_catalog."default" NOT NULL,
    role_id text COLLATE pg_catalog."default",
    permission_id text COLLATE pg_catalog."default",
    CONSTRAINT rolepermissionmap_pkey PRIMARY KEY (id),
    CONSTRAINT rolepermissionmap_permission_id_key UNIQUE (permission_id)
,
    CONSTRAINT rolepermissionmap_role_id_key UNIQUE (role_id)

)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.rolepermissionmap
    OWNER to vento;