 \c live024

ALTER TABLE orders ADD CONSTRAINT fk_orders_customers FOREIGN KEY (customer_id) REFERENCES customers(id);

ALTER TABLE orders 
ADD CONSTRAINT orders_fkey FOREIGN KEY (customer_id) 
REFERENCES customers(id)
ON DELETE CASCADE
ON UPDATE CASCADE;