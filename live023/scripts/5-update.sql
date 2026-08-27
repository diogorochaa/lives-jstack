\c live023

UPDATE customers
SET
  first_name = 'Mateus - Edited',
  last_name = 'Silva - Edited',
  email = 'mateus.edited@jstack.com.br'
WHERE id = 1
RETURNING *
;
