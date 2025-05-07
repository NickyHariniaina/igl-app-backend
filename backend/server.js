import express, { json } from "express";
import { config } from "dotenv";
import { createTable } from "./db/utils/createTable.js";
import userRoutes from "./routes/userRoutes.js";
import personalityRoutes from "./routes/personalityRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

config();

// Use the 5050 PORT just in case there isn't a .env file.
const PORT = process.env.PORT || 5050;
const app = express();

app.use(json());
app.use(cors(
    {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/personality", personalityRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);


// Launch the server after database
// is initialized (table created).
createTable().then(() => {
    app.listen(PORT, () => {
        console.log("Database created, table created... succesfully 🥱.")
        console.log("Hello, server running on PORT " + PORT + " 💨. \n");
        console.log("Run on the following url: " + `http://localhost:${PORT}.`);
    })
}).catch(() => {
    console.log("Server crashed, database not created.");
})
