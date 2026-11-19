import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import { Button } from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";

import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from "./cart-dropdown.styles.jsx";

export const CartDropdown = () => {
	const { items, setIsCartOpen, isCartOpen } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		setIsCartOpen(!isCartOpen);
		navigate("/checkout");
	};

	return (
		<CartDropdownContainer>
			<CartItems>
				{items.length ? (
					items.map((item) => <CartItem key={item.id} item={item} />)
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
		</CartDropdownContainer>
	);
};
