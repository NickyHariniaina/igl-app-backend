import { sql } from "../config/db.js";
import { getUsersQuery, updateUsernameQuery, updatePasswordQuery, updateProfilPictureQuery, getUserQuery, deleteUserQuery} from "../db/utils/userQuery.js";
import bcrypt from "bcryptjs";

// These controllers are easy to maintain.
// They have the same structure, just depends on the query method.
// All the log in this files are used in case you got error using any controllers.

export const getUsers = async (req, res) => {
    try {
        const users = await getUsersQuery();
        res.status(200).json(users.rows);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

export const updateUsername = async (req, res) => {
    try {
        const { newUsername } = req.body;
        const idUser = req.user.idUser;
        const users = await getUsersQuery();
        if ((users.rows.some(user => user.username === newUsername))) {
            return res.status(400).json({
                success: false,
                message: "This username already exist"
            })
        }
        const user = await getUserQuery(idUser);
        const lastUsername = user.rows[0].username;
        await sql.query(`
           UPDATE "message"
           SET "receiver_username" = $1
           WHERE "receiver_username" = $2 
            `, [newUsername, lastUsername]);
        await updateUsernameQuery(newUsername, idUser);
        console.log("Username updated succes`fully.");
        res.status(202).json({
            success: true,
            message: "Username changed succesfully."
        });
    } catch (error) {
        console.log(error)
        res.status(404).json({
            success: false,
            message: "Username not changed."
        });
    }
}

export const updatePassword = async (req, res) => {
    try {
        const { password } = req.body;
        const idUser = req.user.idUser;
        const hashedPassword = await bcrypt.hash(password, 10);
        await updatePasswordQuery(hashedPassword, idUser);
        res.status(202).json({
            success: true,
            message: "Password changed succesfully."
        })
    } catch (error) {
        console.log("Password not changed, too weak", error);
        res.status(404).json({
            success: false,
            message: "Password not changed"
        })
    }
}
export const updateProfilPicture = async (req, res) => {
    try {
        const { profil_picture } = req.body;
        const idUser = req.user.idUser;
        await updateProfilPictureQuery(profil_picture, idUser);
        res.status(200).json({
            succecs: true,
            message: "Profil picture updated succesfully"
        })
    } catch (error) {
        console.log("Profil picture not changed", error);
        res.status(404).json({
            success: false,
            message: "Profil picture not changed"
        })
    }
}


// -----------------------------------------
// This controllers is not really used in the front, i don't know why.

export const getUser = async (req, res) => {
    try {
        const idUser = req.user.idUser;
        const currentUser = await getUserQuery(idUser);
        res.status(200).json({
            success: true,
            data: currentUser.rows
        })
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: "User not found"
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const idUser = req.user.idUser;
        await deleteUserQuery(idUser);
        res.status(200).json({
            success: true,
            message: "User deleted succesfully"
        })
    } catch (error) {
        console.error("User not found.");
        res.status(400).json({
            success: false,
            message: "User not found"
        })
    }
}