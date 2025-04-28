import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();


export const authenticateUser = (req, res, next) => {
    const token = req.header('Authorization')?.replace("Bearer ", "");
    if (!token) {
        res.status(404).json({
            message: "Please create an account or log."
        })
    } else {
        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            // Data a utiliser au lieu d'utiliser "req" lors des requettes.
            req.user = decoded;
            next();
        } catch (error) {
            console.error(error);
            res.send("invalid token.");
        }
    }
}