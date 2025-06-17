import { config } from "dotenv";
import { Pool } from "pg";

config();

// I've used my own supabase database.
// Feel free to change it, use your own server. 
// DON'T CHANGE THE NAME OF THE CONST !!!

export const sql = new Pool(
  {
    connectionString: process.env.DATABASE_URL,
    // host: process.env.HOST,
    // database: process.env.DATABASE,
    // port: process.env.DATABASE_PORT,
    // password: process.env.PASSWORD,
    // user: process.env.USER
    ssl: { rejectUnauthorized: false },
    host: 'db.neon.tech', // ou le domaine exact de ton Neon
    port: 5432,
    family: 4 // <-- 👈 Force IPv4
  }
)
