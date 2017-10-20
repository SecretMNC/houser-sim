select * from property
join user on property.user_id = user.user_id
where desired_rent >= $1;