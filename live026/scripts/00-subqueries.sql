\c live026

 SELECT * FROM orders WHERE customer_id IN (
  SELECT id FROM customers WHERE first_name LIKE '%5%'
  );
