INSERT INTO Property
(prop_name, prop_desc, address, city, state, zip, image, loan_amt, monthly_mortg, desired_rent, user_id)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
RETURNING *;