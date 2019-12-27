SELECT * from pg_database where datname = 'inventory';

UPDATE pg_database SET datallowconn = 'false' WHERE datname = 'inventory';

ALTER DATABASE inventory CONNECTION LIMIT 1;

SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = 'inventory';

DROP DATABASE inventory;

DROP ROLE vento;