-- Rule: virtual_delete_assetconsumermap ON public.assetconsumermap

-- DROP Rule virtual_delete_assetconsumermap ON public.assetconsumermap;

CREATE OR REPLACE RULE virtual_delete_assetconsumermap AS
    ON DELETE TO public.assetconsumermap
    DO INSTEAD
UPDATE assetconsumermap SET updatedat = (date_part('epoch'::text, CURRENT_TIMESTAMP)::numeric * 1000::bigint::numeric)
  WHERE assetconsumermap.id::text = old.id::text;

-- Rule: virtual_delete_asset ON public.asset

-- DROP Rule virtual_delete_asset ON public.asset;

CREATE OR REPLACE RULE virtual_delete_asset AS
    ON DELETE TO public.asset
    DO INSTEAD
UPDATE asset SET updatedat = (date_part('epoch'::text, CURRENT_TIMESTAMP)::numeric * 1000::bigint::numeric)
  WHERE asset.id::text = old.id::text;

-- Rule: virtual_delete_department ON public.department

-- DROP Rule virtual_delete_department ON public.department;

CREATE OR REPLACE RULE virtual_delete_department AS
    ON DELETE TO public.department
    DO INSTEAD
UPDATE department SET updatedat = (date_part('epoch'::text, CURRENT_TIMESTAMP)::numeric * 1000::bigint::numeric)
  WHERE department.id::text = old.id::text;

-- Rule: virtual_delete_permission ON public.permission

-- DROP Rule virtual_delete_permission ON public.permission;

CREATE OR REPLACE RULE virtual_delete_permission AS
    ON DELETE TO public.permission
    DO INSTEAD
UPDATE permission SET updatedat = (date_part('epoch'::text, CURRENT_TIMESTAMP)::numeric * 1000::bigint::numeric)
  WHERE permission.id::text = old.id::text;

-- Rule: virtual_delete_product ON public.product

-- DROP Rule virtual_delete_product ON public.product;

CREATE OR REPLACE RULE virtual_delete_product AS
    ON DELETE TO public.product
    DO INSTEAD
UPDATE product SET updatedat = (date_part('epoch'::text, CURRENT_TIMESTAMP)::numeric * 1000::bigint::numeric)
  WHERE product.id::text = old.id::text;

-- Rule: virtual_delete_role ON public.role

-- DROP Rule virtual_delete_role ON public.role;

CREATE OR REPLACE RULE virtual_delete_role AS
    ON DELETE TO public.role
    DO INSTEAD
UPDATE role SET updatedat = (date_part('epoch'::text, CURRENT_TIMESTAMP)::numeric * 1000::bigint::numeric)
  WHERE role.id::text = old.id::text;

-- Rule: virtual_delete_rule ON public."user"

-- DROP Rule virtual_delete_rule ON public."user";

CREATE OR REPLACE RULE virtual_delete_user AS
    ON DELETE TO public."user"
    DO INSTEAD
UPDATE "user" SET updatedat = (date_part('epoch'::text, CURRENT_TIMESTAMP)::numeric * 1000::bigint::numeric)
  WHERE "user".id::text = old.id::text;