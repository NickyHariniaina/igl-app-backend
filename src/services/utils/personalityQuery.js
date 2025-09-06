import { sql } from "../../config/db.js";

export const getPersonalityQuery = (idUser) => {
    return sql.query(`select * from "personality" where "id_user" = $1;`, [idUser])
}

export const createPersonalityForCreatedUser = (idUser) => {
    return sql.query(`insert into "personality" ("id_user") values ($1);`, [idUser]);
}

export const updateFavoriteColorQuery = (favoriteColor, idUser) => {
    return sql.query(
        `update "personality"
        set "favorite_color" = $1
        where "id_user" = $2;`
    , [favoriteColor, idUser]);
}

export const updateColorschemeQuery = (colorscheme, idUser) => {
    return sql.query(
        `update "personality"
        set "colorscheme" = $1
        where "id_user" = $2 returning *;`
    , [colorscheme, idUser]);
}

export const updateIsExtrovertQuery = (isExtrovert, idUser) => {
    return sql.query(
        `update "personality"
        set "is_extrovert" = $1
        where "id_user" = $2;`
    , [isExtrovert, idUser]);
}

export const updateIsSingleQuery = (isSingle, idUser) => {
    return sql.query(
        `update "personality"
        set "is_single" = $1
        where "id_user" = $2;`
    , [isSingle, idUser]);
}

export const updateLanguageQuery = (language, idUser) => {
    return sql.query(
        `update "personality"
        set "language" = $1
        where "id_user" = $2 returning *;`
    , [language, idUser]);
}

export const updateHairLengthQuery = (hairLength, idUser) => {
    return sql.query(
        `update "personality"
        set "hair_length" = $1
        where "id_user" = $2;`
    , [hairLength, idUser]);
}

export const updateAttractedByQuery = (attractedBy, idUser) => {
    return sql.query(
        `update "personality"
        set "attracted_by" = $1
        where "id_user" = $2;`
    , [attractedBy, idUser]);
}
