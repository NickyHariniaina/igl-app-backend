import { Pool } from "pg";
import { config } from "dotenv";

config();

const { USER, PASSWORD, HOST, PORT, DATABASE_PORT, DATABASE } = process.env;

// I've used my own supabase database.
// Feel free to change it, use your own server. 
// DON'T CHANGE THE NAME OF THE CONST !!!

export const sql = new Pool(
    {
        user: USER,
        password: PASSWORD,
        host: HOST,
        port: DATABASE_PORT,
        database: DATABASE, 
    }    
)