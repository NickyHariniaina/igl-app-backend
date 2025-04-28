import { Pool } from "pg";
import { config } from "dotenv";

config();

const { USER, PASSWORD, HOST, PORT, DATABASE_PORT, DATABASE } = process.env;

export const sql = new Pool(
    {
        user: USER,
        password: PASSWORD,
        host: HOST,
        port: DATABASE_PORT,
        database: DATABASE, 
    }    
)