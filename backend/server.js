import express, { json } from "express";
import { config } from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import bcrypt from "bcryptjs";
import cors from "cors";
import { createTable } from "./db/utils/createTable.js";

import userRoutes from "./routes/userRoutes.js";
import personalityRoutes from "./routes/personalityRoutes.js";
import authRoutes from "./routes/authRoutes.js";

config();

const PORT = process.env.PORT;

const app = express();

app.use(json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/personality", personalityRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

createTable().then(() => {
    app.listen(PORT, () => {
        console.log("Database created, table created... succesfully 🥱.")
        console.log("Hello, server running on PORT " + PORT + " 💨.");
        console.log("");
        console.log("Run on the following url: " + `http://localhost:${PORT}.`);
    })
}).catch(() => {
    console.log("Server crashed, database not created.");
})
