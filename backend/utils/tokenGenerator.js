import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const generateToken = (idUser, username) => {

  const accessToken = jwt.sign({ idUser, username }, process.env.SECRET_KEY, { expiresIn: '7d' });
  const refreshToken = jwt.sign({ idUser, username }, process.env.REFRESH_KEY, { expiresIn: '30d' });

  return [accessToken, refreshToken];
}
