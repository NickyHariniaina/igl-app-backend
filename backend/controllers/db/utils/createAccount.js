import { sql } from "../../config/db.js"

export const createAccountQuery = (username, hachedPassword, sexe) => {
    return sql.query(`
            INSERT INTO "user" ("username", "password_hashed", "sexe") 
            VALUES ($1, $2, $3) RETURNING *;
        `, [username, hachedPassword, sexe]);
}