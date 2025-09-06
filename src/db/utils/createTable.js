import { sql } from "../../config/db.js";

// Used in the server.js to create every table at the first deployment of the app.
// The app depends on this.

export const createTable = async () => {
    try {
        const dbInit = await sql.query(`
            CREATE TABLE IF NOT EXISTS "user" (
                "id_user" serial primary key,
                "username" varchar(200) not null,
                "password_hashed" varchar(200) not null,
                "profil_picture" varchar(250),
                "created_at" timestamp default current_date,
                "sexe" char(1) check("sexe" in ('F', 'M', 'O'))
            );
            CREATE TABLE IF NOT EXISTS "personality" (
                "id_personality" serial primary key,
                "id_user" int not null references "user"("id_user"),
                "favorite_color" varchar(250) default 'autre',
                "colorscheme" varchar(250) default 'dark',
                "is_extrovert" boolean default false,
                "is_single" boolean default false,
                "language" varchar(3) check ("language" in ('fr', 'mg', 'eng')),
                "hair_length" varchar(250) check("hair_length" in ('short', 'long', 'medium')),
                "attracted_by" varchar(250) check("attracted_by" in ('F', 'M', 'B'))
            );
            CREATE TABLE IF NOT EXISTS "message" (
                "id_message" serial primary key,
                "receiver_username" varchar(200),
                "sender_username" varchar(200) default '~whoami',
                "content" text not null,
                "hint" varchar(250),
                "sent_at" timestamp default current_timestamp::timestamp(0 ),
                "privacy" varchar(250) default 'private' check ("privacy" in ('public', 'private'))
            );
        `);
    } catch (error) {
        console.log("There is an error initializing database 😶, One of the table may already be in the database...😊.");
        console.error(error);
    }
}