\c live023

-- * = ALL
-- SELECT id, first_name AS "firstName", last_name AS "lastName"
-- FROM customers;

-- INSERT INTO customers(first_name, created_at)
-- VALUES ('Ana 2', '2023-05-22 19:11:24.73714');

-- SELECT * FROM customers
-- ORDER BY id ASC
-- OFFSET 20
-- LIMIT 10;

-- SELECT * FROM customers
-- WHERE first_name ILIKE 'aN%'
-- ;

SELECT * FROM customers ORDER BY id;
