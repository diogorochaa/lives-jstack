\c live024

-- CONCAT() function to concatenate first_name and last_name into full_name
SELECT id, CONCAT(first_name, ' ', last_name) AS full_name FROM customers;

--COUNT() function to count the total number of customers in the customers table
SELECT COUNT(*) AS total_customers FROM customers;
SELECT COUNT(DISTINCT email) AS unique_emails FROM customers;

-- SUM() function to calculate the total sales amount from the orders table
SELECT
  customer_id,
  COUNT(id) AS total_sales,
  SUM(amount) AS total_revenue,
  MAX(amount) AS max_revenue,
  MIN(amount) AS min_revenue,
  ROUND(AVG(amount), 2) AS avg_revenue
  FROM orders
  GROUP BY customer_id
  HAVING customer_id > 10
  ORDER BY customer_id
  ;