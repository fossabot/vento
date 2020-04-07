# database
Vento uses [PostgreSql](https://www.postgresql.org/) as data store.

To Prepare the db with database, tables and seed data follow the instructions [here](scripts/README.md).

## ER-Diagram
Entity Relation Diagram

![ERD](erd/db_erd_diag.png)

##### Info about few tables
The assetconsumermap table tracks the usage of assets by various users.
The assetnotificationmap table associates assets to various notifications enabled for it.
The rolepermissionmap table indicates the permissions assigned for each role.