\c live023


ALTER TABLE customers
ADD COLUMN email VARCHAR(255);

ALTER TABLE customers ALTER COLUMN first_name SET DATA TYPE VARCHAR(50);

ALTER TABLE customers ADD COLUMN age INT;
ALTER TABLE customers RENAME COLUMN age TO customer_age;
ALTER TABLE customers ALTER COLUMN customer_age SET DEFAULT 18;
ALTER TABLE customers DROP COLUMN customer_age;