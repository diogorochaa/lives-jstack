\c live023

DELETE FROM customers
WHERE id = 27
RETURNING id, first_name AS "firstName"
;
