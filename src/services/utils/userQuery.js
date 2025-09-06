import { sql } from "../../config/db.js";

export const getUsersQuery = () => {
  return sql.query(`SELECT * from "user";`);
};

export const updateUsernameQuery = (username, idUser) => {
  return sql.query(
    `
        UPDATE "user"
        SET "username" = $1
        WHERE "id_user" = $2
    `,
    [username, idUser],
  );
};

export const updatePasswordQuery = (hashedPassword, idUser) => {
  return sql.query(
    `
        UPDATE "user"
        SET "password_hashed" = $1
        WHERE "id_user" = $2; 
    `,
    [hashedPassword, idUser],
  );
};

export const updateProfilPictureQuery = (profilPicture, idUser) => {
  return sql.query(
    `
        UPDATE "user"
        SET "profil_picture" = $1
        WHERE "id_user" = $2;
    `,
    [profilPicture, idUser],
  );
};

export const updateStatusQuery = (newStatus, idUser) => {
  return sql.query(
    `
    update "user" set "status"=$1 where "id_user" = $2;
`,
    [newStatus, idUser],
  );
};

export const getUserQuery = (idUser) => {
  return sql.query(`SELECT * FROM "user" WHERE "user"."id_user" = $1`, [
    idUser,
  ]);
};

export const deleteUserQuery = (idUser) => {
  return sql.query(
    `DELETE FROM "user"
WHERE "id_user" = $1`,
    [idUser],
  );
};

