\c live023

-- INSERT INTO customers
-- VALUES(DEFAULT, 'Mateus', 'Silva', DEFAULT, 'mateus@jstack.com.br');

-- INSERT INTO customers(email, first_name, last_name)
-- VALUES('jose@jstack.com.br', 'José', 'Silva');

-- INSERT INTO customers(first_name, last_name, email)I
-- VALUES
--   ('Rose', 'Silva', 'rose@jstack.com.br'),
--   ('Eduardo', 'Silva', 'edu@jstack.com.br'),
--   ('Dani', 'Silva', 'dani@jstack.com.br'),
--   ('Matheus', 'Silva', 'matheus@jstack.com.br')
-- RETURNING *;

-- INSERT INTO customers(first_name, last_name, email)
-- VALUES
--   ('Rose', 'Silva', 'rose@jstack.com.br'),
--   ('Eduardo', 'Silva', 'edu@jstack.com.br'),
--   ('Dani', 'Silva', 'dani@jstack.com.br'),
--   ('Matheus', 'Silva', 'matheus@jstack.com.br')
-- ;

-- INSERT INTO customers(first_name, last_name, email)
-- VALUES ('AopaskdopapoasdkopasAopaskdopapoasdkopasAopaskdopapoasdkopa61', 'Silva', 'rose@jstack.com.br');

DO $$
DECLARE
  i INT := 1;
  customer_id INT;
  created_customers INT := 0;
BEGIN
  WHILE i <= 20 LOOP
    INSERT INTO customers(first_name, last_name, email)
    VALUES('Customer-' || i, 'Doe-' || i, 'customer.' || i || '@email.com')
    RETURNING id INTO customer_id;

    INSERT INTO orders(amount, customer_id)
    VALUES(RANDOM() * 1000, customer_id);

    i := i + 1;
    created_customers := created_customers + 1;
  END LOOP;

  RAISE NOTICE '% customers succesfully created', created_customers;
END $$;
