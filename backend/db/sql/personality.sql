select * from "personality" where "id_user" = $1;

update "personality"
set "favorite_color" = $1
where "id_user" = $2;

update "personality"
set "colorscheme" = $1
where "id_user" = $2;

update "personality"
set "is_extrovert" = $1
where "id_user" = $2;

update "personality"
set "is_single" = $1
where "id_user" = $2;

update "personality"
set "language" = $1
where "id_user" = $2;

update "personality"
set "hair_length" = $1
where "id_user" = $2;

update "personality"
set "attracted_by" = $1
where "id_user" = $2;