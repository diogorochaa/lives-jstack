\c live025

CREATE INDEX idx_customers_first_name ON customers (first_name);
DROP INDEX idx_customers_first_name;

CREATE INDEX idx_customers_last_name ON customers (last_name);

CREATE INDEX idx_customers_email ON customers (email);

CREATE INDEX idx_customers_phone ON customers (phone);

CREATE INDEX idx_customers_address ON customers (address);

CREATE INDEX idx_customers_city ON customers (city);

select * from pg_indexes where tablename = 'customers';
SELECT * pg_total_relation_size('customers');