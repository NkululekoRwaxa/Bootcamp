CREATE TABLE Products
(
	product_id bigserial PRIMARY KEY,
	product_name varchar(20) NOT NULL,
	product_price money NOT NULL,
	
	CONSTRAINT price_not_zero CHECK(product_price > CAST(0 AS money))
);

CREATE TABLE Users
(
	user_id bigserial PRIMARY KEY,
	user_name varchar(20) NOT NULL
);

CREATE TABLE Cart
(
	cart_id bigserial PRIMARY KEY,
	product_id bigint REFERENCES Products(product_id) ON DELETE CASCADE,
	qty integer,
	user_id bigint REFERENCES Users(user_id) ON DELETE CASCADE,
	
	CONSTRAINT qty_not_zero CHECK (qty > 0)
);

CREATE TABLE OrderHeader
(
	order_id bigserial PRIMARY KEY,
	order_date timestamp without time zone,
	user_id bigint REFERENCES Users(user_id) ON DELETE CASCADE,
	cart_id bigint REFERENCES Cart(cart_id) ON DELETE CASCADE
);

CREATE TABLE OrderDetails
(
	order_id bigint REFERENCES OrderHeader(order_id) ON DELETE CASCADE,
	product_id bigint REFERENCES Products(product_id) ON DELETE CASCADE,
	qty integer,
	
	CONSTRAINT order_product_key PRIMARY KEY(order_id, product_id)
);











