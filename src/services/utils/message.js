import { sql } from "../../config/db.js";

export const getMessagesQuery = (idReceiver) => {
    return sql.query(`SELECT * from "message" where "receiver_username" = $1;`, [idReceiver]);
}

export const getMessageQuery = (idMessage, idUser) => {
    return sql.query(`SELECT "content", "hint", "sender_username", "sent_at", "privacy" from "message" where "id_message" = $1 and "receiver_username" = $2;`, [idMessage, idUser]);
}

export const sendMessageQuery = (receiverUsername, senderUsername, content, hint, privacy) => {
    return sql.query(`insert into "message" 
("receiver_username", "sender_username", "content", "hint", "privacy") 
values ($1, $2, $3, $4 ,$5);`, [receiverUsername, senderUsername, content, hint, privacy]);
}