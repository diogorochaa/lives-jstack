\c live026


-- BASIC TRANSACTIONS

-- CREATE TABLE bank_accounts (
--     id SERIAL PRIMARY KEY,
--     user_id INTEGER NOT NULL,
--     balance NUMERIC(10, 2) NOT NULL CHECK (balance >= 0)
-- );

-- INSERT INTO bank_accounts (user_id, balance) VALUES
--   (1, 1000.00),
--   (2, 500.00);

-- BEGIN;
--   UPDATE bank_accounts SET balance = balance - 200.00 WHERE user_id = 1;
--   UPDATE bank_accounts SET balance = balance + 200.00 WHERE user_id = 2;
-- COMMIT;

-- select * from bank_accounts;


-- SAVEPOINTS AND ROLLBACKS

-- BEGIN;
--   UPDATE bank_accounts SET balance = balance - 200.00 WHERE user_id = 1;
--   SAVEPOINT savepoint_1;
--   UPDATE bank_accounts SET balance = balance + 200.00 WHERE user_id = 2;
--   ROLLBACK TO savepoint_1;
-- COMMIT;

-- select * from bank_accounts;
