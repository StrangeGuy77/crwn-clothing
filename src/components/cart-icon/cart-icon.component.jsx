import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";

import "./cart-icon.styles.scss";

export const CartIcon = () => {
	const { isCartOpen, setIsCartOpen } = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

	return (
		<button
			type="button"
			className="cart-icon-container"
			onClick={toggleIsCartOpen}
		>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-counter">0</span>
		</button>
	);
};
