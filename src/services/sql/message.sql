SELECT "content" from "message" where "id_receiver" = $1;

SELECT "content", "hint", "sender_username", "sent_at", "privacy" from "message" where "id_message" = $1 and "id_receiver" = $2;

insert into "message" 
("recoiver_username", "sender_username", "content", "hint", "sent_at", "privacy") 
values ($1, $2, $3, $4 , $5, $6);