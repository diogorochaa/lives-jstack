-- create database
DROP DATABASE IF EXISTS live026;
CREATE DATABASE live026;

\c live026
-- create tables
DROP TABLE IF EXISTS customers;
CREATE TABLE IF NOT EXISTS customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(60),
    email VARCHAR(255) UNIQUE
);

DROP TABLE IF EXISTS orders;
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL,
    customer_id INT NOT NULL REFERENCES customers(id),
    amount NUMERIC(10, 2) NOT NULL CHECK (amount >= 0)
);

-- insert data
DO $$
    DECLARE
        i INT := 1;
        customer_id INT;
    BEGIN
        WHILE i <= 50 LOOP
            INSERT INTO customers(first_name, last_name, email) VALUES
                ('Customer' || i, 'LastName' || i, 'customer' || i || '@example.com')
                RETURNING id INTO customer_id;

            INSERT INTO orders(customer_id, amount) VALUES
            (customer_id, RANDOM() * 1000);

            i := i + 1;
        END LOOP;
        RAISE NOTICE '% customers inserted', i - 1;
    END $$;
