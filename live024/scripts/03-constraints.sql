\c live024

ALTER TABLE customers ALTER COLUMN email SET NOT NULL;

ALTER TABLE customers ADD CONSTRAINT customers_email_unique UNIQUE(email);
ALTER TABLE customers DROP CONSTRAINT customers_email_unique;

ALTER TABLE orders ADD CONSTRAINT orders_amount_positive CHECK (amount > 0);