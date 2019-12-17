-- Table: public."user"

-- DROP TABLE public."user";

CREATE TABLE public."user"
(
    "createdAt" bigint,
    "updatedAt" bigint,
    id character varying COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default",
    username text COLLATE pg_catalog."default",
    password text COLLATE pg_catalog."default",
    first_name text COLLATE pg_catalog."default",
    middle_name text COLLATE pg_catalog."default",
    last_name text COLLATE pg_catalog."default",
    phone text COLLATE pg_catalog."default",
    role_id text COLLATE pg_catalog."default",
    product_id text COLLATE pg_catalog."default",
    dept_id text COLLATE pg_catalog."default",
    CONSTRAINT user_pkey PRIMARY KEY (id),
    CONSTRAINT user_email_key UNIQUE (email)
,
    CONSTRAINT user_username_key UNIQUE (username)

)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."user"
    OWNER to vento;