import { getUsersQuery, updateUsernameQuery, updatePasswordQuery, updateProfilPictureQuery, getUserQuery, deleteUserQuery, getCurrentUsers } from "../db/utils/userQuery.js";
import bcrypt from "bcryptjs";

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
        const username = req.user.username;
        const userData = await getCurrentUsers(username);
        const idUser = userData.rows[0].id_user;
        await updateUsernameQuery(newUsername, idUser);
        console.log("Username updated succesfully.");
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
        const username = req.user.username;
        const userData = await getCurrentUsers(username);
        const idUser = userData.rows[0].id_user;
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
        const username = req.user.username;
        const userData = await getCurrentUsers(username);
        const idUser = userData.rows[0].id_user;
        await updateProfilPictureQuery(profil_picture, idUser);
        res.status(202).json({
            succecs: true,
            message: "Profil picture updated succesfully"
        })
    } catch (error) {
        console.log("Profil picture not changed, too weak", error);
        res.status(404).json({
            success: false,
            message: "Profil picture not changed"
        })
    }
}
export const getUser = async (req, res) => {
    try {
        const username = req.user.username;
        const userData = await getCurrentUsers(username);
        const idUser = userData.rows[0].id_user;
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
        const username = req.user.username;
        const userData = await getCurrentUsers(username);
        const idUser = userData.rows[0].id_user;
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