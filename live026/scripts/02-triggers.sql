\c live026

-- ALTER TABLE customers ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

-- select * from customers;

-- CREATE OR REPLACE FUNCTION customers_update_timestamp()
-- RETURNS TRIGGER AS $$
-- BEGIN
--     NEW.updated_at = CURRENT_TIMESTAMP;
--     RAISE NOTICE 'Updated at: %', NEW.updated_at;
--     RETURN NEW;
--  END;
--  $$ LANGUAGE plpgsql;

-- CREATE TRIGGER customers_update_timestamp_trigger
-- BEFORE UPDATE ON customers
-- FOR EACH ROW
-- EXECUTE FUNCTION customers_update_timestamp();

-- -- Test the trigger
-- UPDATE customers SET first_name = 'UpdatedName' WHERE id = 1;
-- SELECT id, first_name, updated_at FROM customers WHERE id = 1;


-- CREATE TABLE bank_accounts_tx_logs (
--     id SERIAL PRIMARY KEY,
--     bank_account_id INT NOT NULL,
--     amount DECIMAL(10, 2) NOT NULL,
--     old_balance DECIMAL(10, 2) NOT NULL,
--     new_balance DECIMAL(10, 2) NOT NULL,
--     created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE OR REPLACE FUNCTION bank_accounts_tx_logs()
-- RETURNS TRIGGER AS $$
-- BEGIN
--     INSERT INTO bank_accounts_tx_logs (bank_account_id, amount, old_balance, new_balance) VALUES (NEW.id, NEW.balance, OLD.balance, NEW.balance);
--     RETURN NEW;
-- END;
-- $$ LANGUAGE plpgsql;

-- CREATE TRIGGER bank_accounts_tx_logs_trigger
-- AFTER UPDATE ON bank_accounts
-- FOR EACH ROW
-- EXECUTE FUNCTION bank_accounts_tx_logs();

select * from bank_accounts_tx_logs;

-- UPDATE bank_accounts SET balance = balance + 100.00 WHERE id = 1;