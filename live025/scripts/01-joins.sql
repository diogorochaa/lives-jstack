\c live025

SELECT * FROM customers
INNER JOIN orders ON customers.id = orders.customer_id
WHERE customers.id = 10;

SELECT * FROM customers
LEFT JOIN orders ON customers.id = orders.customer_id
WHERE customers.id = 10;

SELECT * FROM customers
RIGHT JOIN orders ON customers.id = orders.customer_id
WHERE customers.id = 10;

SELECT * FROM customers
FULL OUTER JOIN orders ON customers.id = orders.customer_id
WHERE customers.id = 10;

SELECT * FROM customers
CROSS JOIN orders
ORDER BY customers.id, orders.id
LIMIT 10
