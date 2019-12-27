-- Table: public.rolepermissionmap

-- DROP TABLE public.rolepermissionmap;

CREATE TABLE public.rolepermissionmap
(
    createdAt bigint NOT NULL,
    updatedAt bigint NOT NULL,
    id character varying COLLATE pg_catalog."default" NOT NULL,
    role_id text COLLATE pg_catalog."default",
    permission_id text COLLATE pg_catalog."default",
    CONSTRAINT rolepermissionmap_pkey PRIMARY KEY (id),
    CONSTRAINT fk_roleperm_perm_id FOREIGN KEY (permission_id)
        REFERENCES public.permission (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_roleperm_role_id FOREIGN KEY (role_id)
        REFERENCES public.role (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.rolepermissionmap
    OWNER to vento;