import bcrypt from "bcryptjs";
import { createAccountQuery } from "../db/utils/createAccount.js";
import { generateToken } from "../utils/tokenGenerator.js";
import { getUsersQuery } from "../db/utils/userQuery.js";


export const createAccount = async (req, res) => {
    try {

        const {username, password, sexe} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const accountCreated = await createAccountQuery(username, hashedPassword, sexe);

        const idUser = accountCreated.rows[0].id_user;

        const [accessToken, refreshToken] = generateToken(idUser, username);

        res.status(201).json({
            success: true,
            accessToken: accessToken,
            refreshToken: refreshToken,
            message: "Account created",
        })
    } catch (error) {
        console.error(error)
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const users = await getUsersQuery();

        const userData = users.rows.find((u) => {
            return u.username === username;
        })

        if (!userData) {
            res.status(400).json({
                message: "User not found"
            })
        }

        const truePassword = await bcrypt.compare(password, userData.password_hashed);

        if (!truePassword) {
            console.log("wrong password.");
            res.status(400).json({
                message: "Wrong password, please try again."
            });
        }

        const [accessToken, refreshToken] = generateToken(userData.userId, username);

        res.status(200).json({
            success: true,
            message: "Welcome",
            accessToken: accessToken,
            refreshToken: refreshToken
        })

    } catch (error) {
        console.error(error);
    }
}