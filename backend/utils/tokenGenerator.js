import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const generateToken = (idUser) => {
    const accessToken = jwt.sign({ idUser }, process.env.SECRET_KEY, {expiresIn: '3d'});
    const refreshToken = jwt.sign({ idUser }, process.env.REFRESH_KEY, {expiresIn: '30d'});

    return [accessToken, refreshToken];
}