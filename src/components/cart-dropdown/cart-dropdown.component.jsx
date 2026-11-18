import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { Button } from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

export const CartDropdown = () => {
	const { items } = useContext(CartContext);

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{items.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
			</div>
			<Button>GO TO CHECKOUT</Button>
		</div>
	);
};
