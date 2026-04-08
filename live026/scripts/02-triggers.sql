-- \c live026

-- ALTER TABLE customers ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

-- CREATE OR REPLACE FUNCTION update_timestamp()
-- RETURNS TRIGGER AS $$
-- BEGIN
--   NEW.updated_at = CURRENT_TIMESTAMP;
--   RETURN NEW;
-- END;
-- $$ LANGUAGE plpgsql;

-- CREATE TRIGGER update_timestamp_trigger
-- BEFORE UPDATE ON customers
-- FOR EACH ROW
-- EXECUTE FUNCTION update_timestamp();

-- -- Test the trigger
-- UPDATE customers SET first_name = 'UpdatedName' WHERE id = 1;
-- SELECT id, first_name, updated_at FROM customers WHERE id = 1;
