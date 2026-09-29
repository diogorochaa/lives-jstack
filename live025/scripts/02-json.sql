\c live025

SELECT cus.*, 
    no_empty_array(COUNT(ord.id), JSON_AGG(
        JSON_STRIP_NULLS(
            JSON_BUILD_OBJECT(
                'id', ord.id,
                'amount', ord.amount
            )
        )
    )) AS orders
FROM customers AS cus
LEFT JOIN orders AS ord ON ord.customer_id = cus.id 
WHERE cus.id = 9
GROUP BY cus.id;



