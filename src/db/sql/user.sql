SELECT "user"."username", "user"."password_hached" from "user";

UPDATE "user"
SET "username" = $1
WHERE "id_user" = $2

UPDATE "user"
SET "password_not_hached" = $1, "password_hached" = $2
WHERE "id_user" = $3; 

UPDATE "user"
SET "profil_picture" = $1
WHERE "id_user" = $2;

SELECT * FROM "user" WHERE "user"."id_user" = $1;

DELETE FROM "user"
WHERE "id_user" = $1;