\c live023

UPDATE customers
SET email = 'updated_' || email
WHERE id IN (1, 2, 3);