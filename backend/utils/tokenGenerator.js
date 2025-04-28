import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const generateToken = (userId, username) => {
    const accessToken = jwt.sign({userId, username}, process.env.SECRET_KEY, {expiresIn: '3d'});
    const refreshToken = jwt.sign({userId, username}, process.env.REFRESH_KEY, {expiresIn: '30d'});

    return [accessToken, refreshToken];
}