\c live023

-- INSERT INTO customers VALUES
--   (DEFAULT, 'John', 'Doe', DEFAULT, 'john.doe@example.com');

-- INSERT INTO customers(first_name, last_name, email) VALUES
--     ('Jane', 'Smith', 'jane.smith@example.com');

--     INSERT INTO customers(first_name, last_name, email) VALUES
--     ('Jane', 'Smith', 'jane.smith@example.com'),
--     ('Alice', 'Johnson', 'alice.johnson@example.com'),
--    ('Bob', 'Brown', 'bob.brown@example.com'); 

    DO $$
    DECLARE 
        i INT := 1;
        customer_id INT;
    BEGIN
        WHILE i <= 20 LOOP
            INSERT INTO customers(first_name, last_name, email) VALUES
                ('Customer' || i, 'LastName' || i, 'customer' || i || '@example.com')
                RETURNING id INTO customer_id;

            INSERT INTO orders(customer_id, amount) VALUES
            (customer_id, RANDOM() * 1000);

            i := i + 1;
        END LOOP;
    END $$;