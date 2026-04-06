\c live024

CREATE VIEW customer_sales_summary AS
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

  CREATE VIEW OR REPLACE VIEW product_sales_summary AS
    SELECT
      product_id,
      COUNT(id)::INT AS total_sales,
      SUM(amount)::FLOAT AS total_revenue,
      MAX(amount)::FLOAT AS max_revenue,
      MIN(amount)::FLOAT AS min_revenue,
      ROUND(AVG(amount), 2) AS avg_revenue
      FROM orders
      GROUP BY product_id
      HAVING product_id > 5
      ORDER BY product_id
      ;

      DROP VIEW IF EXISTS customer_sales_summary;