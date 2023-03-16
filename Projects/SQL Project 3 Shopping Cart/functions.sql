-- add to cart by user id and product id
CREATE OR REPLACE FUNCTION addToCart_by_user_product_ids(usr_id bigint, prod_id bigint)
RETURNS void AS $$
BEGIN
	IF EXISTS(SELECT user_id, product_id FROM Cart WHERE user_id = usr_id AND product_id = prod_id)
		THEN
			UPDATE Cart
			SET qty = qty + 1 WHERE user_id = usr_id AND product_id = prod_id;
		ELSE
			INSERT INTO Cart(user_id, product_id, qty)
			VALUES (usr_id, prod_id, 1);
	END IF;
END;
$$ LANGUAGE plpgsql;

-- add to cart by user id and product name
CREATE OR REPLACE FUNCTION addToCart_by_user_id_product_name(usr_id bigint, prod_name varchar)
RETURNS void AS $$
BEGIN
	IF EXISTS(
				SELECT cart.user_id, cart.product_id AS val
			  	FROM Cart cart JOIN Products prod ON cart.product_id = prod.product_id
				WHERE prod.product_name = prod_name
			 )
		THEN
			UPDATE Cart
			SET qty = qty + 1 WHERE user_id = usr_id;
		ELSE
			INSERT INTO Cart(user_id, product_id, qty)
			VALUES (usr_id, val, 1);
	END IF;
END;
$$ LANGUAGE plpgsql;

-- user checkout - create order
-- CREATE OR REPLACE FUNCTION checkout()
-- RETURNS BOOLEAN AS $$
-- BEGIN
-- 	--INSERT INTO OrderHeader(order_date) VALUES(now());
-- 	INSERT INTO OrderHeader(order_date, user_id, cart_id)
-- 	SELECT now(), user_id, cart_id FROM Cart;
-- 	RAISE NOTICE 'User checked out!';
-- 	RETURN true;
-- END;
-- $$ LANGUAGE plpgsql;
-- DROP FUNCTION checkout();
CREATE OR REPLACE FUNCTION checkout()
RETURNS void AS $$
BEGIN
	IF EXISTS(SELECT cart_id FROM OrderHeader)
		THEN 
			UPDATE OrderHeader 
			SET order_date = now();
			
		ELSE
			INSERT INTO OrderHeader(order_date, user_id, cart_id)
			SELECT now(), user_id, cart_id FROM Cart;
	END IF;
	
	INSERT INTO OrderDetails(order_id, product_id, qty)
 	SELECT ord.order_id, crt.product_id, crt.qty
 	FROM OrderHeader ord JOIN Cart crt ON ord.cart_id = crt.cart_id;
END;
$$ LANGUAGE plpgsql;

-- clear Cart by Id
CREATE OR REPLACE FUNCTION clearCart(crt_id bigint)
RETURNS void AS $$
BEGIN
	DELETE FROM Cart WHERE cart_id = cart_id; 
END;
$$ LANGUAGE plpgsql;




















