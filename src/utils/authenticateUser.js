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
      req.user = decoded;
      next();
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token expired." });
      }
      return res.status(401).json({ message: "Invalid token." });
    }
  }
}
