

INSERT INTO Products(product_name, product_price)
VALUES 
	('Coke', 7.5),
	('Kit Kat', 9.5),
	('Bar One', 8.5),
	('Fanta', 7.5);
SELECT * FROM Products;

INSERT INTO Users(user_name)
VALUES
	('Arnold'),
	('Sheryl'),
	('Nkulu');
SELECT * FROM Users; 

-- 1.  User adds product(s) to cart by user id and product id.
SELECT addToCart_by_user_product_ids(1,1);
SELECT addToCart_by_user_product_ids(1,1);
SELECT addToCart_by_user_product_ids(1,2);

-- User adds to product(s) to cart by user id and product name.
SELECT addToCart_by_user_id_product_name(1,'Coke');
SELECT addToCart_by_user_id_product_name(1,'Kit Kat');
SELECT user_id, product_id,qty FROM Cart;

--2. User checks out (completes transaction) - creates order.

-- after order is placed update OrderDetails
SELECT * FROM OrderHeader;
SELECT * FROM OrderDetails;

-- check out
SELECT checkout();
SELECT * FROM OrderHeader;
SELECT DISTINCT ON(user_id) user_id, order_date FROM OrderHeader WHERE user_id IS NOT NULL;

SELECT DISTINCT ON(product_id) product_id, qty FROM OrderDetails;

