-- Database: inventory

-- DROP DATABASE inventory;

CREATE DATABASE inventory
    WITH 
    OWNER = vento
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE inventory
    IS 'This is the Database for the inventory project called,  Vento';