-- Table: public."role-permission-map"

-- DROP TABLE public."role-permission-map";

CREATE TABLE public."role-permission-map"
(
    role_id character varying COLLATE pg_catalog."default" NOT NULL,
    permission_id character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT pk_id PRIMARY KEY (role_id, permission_id),
    CONSTRAINT fk_perm_id FOREIGN KEY (permission_id)
        REFERENCES public.permission (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_role_id FOREIGN KEY (role_id)
        REFERENCES public.role (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."role-permission-map"
    OWNER to postgres;
COMMENT ON TABLE public."role-permission-map"
    IS 'This is the table for keeping map between role and permission. One role can have multiple permissions and the each of the permissions can be present for one or more Roles.';