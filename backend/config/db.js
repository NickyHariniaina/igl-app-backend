import { Pool } from "pg";
import { config } from "dotenv";

config();

// I've used my own supabase database.
// Feel free to change it, use your own server. 
// DON'T CHANGE THE NAME OF THE CONST !!!

export const sql = new Pool(
    {
        connectionString: process.env.DATABASE_URL,
    }    
)