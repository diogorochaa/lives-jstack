\c live023 

--SELECT id, first_name, last_name, email FROM customers;

--SELECT id AS customer_id, first_name AS name FROM customers;

--SELECT first_name AS "primeiro nome" FROM customers;

SELECT * FROM customers
ORDER BY first_name DESC 
LIMIT 5
OFFSET 5;

SELECT * FROM customers
WHERE id = 10;

-- IN(10, 15, 20)
SELECT * FROM customers
WHERE id IN (10, 15, 20);

-- BETWEEN 10 AND 20
SELECT * FROM customers
WHERE id BETWEEN 10 AND 20;

-- NOT BETWEEN 10 AND 20
SELECT * FROM customers
WHERE id NOT BETWEEN 10 AND 20;

-- IS NULL
SELECT * FROM customers
WHERE email IS NULL;

-- LIKE 
SELECT * FROM customers
WHERE email LIKE '%@example.com';

-- ILIKE (case-insensitive)
SELECT * FROM customers
WHERE email ILIKE '%@EXAMPLE.COM'; 

--SELECT * FROM orders;