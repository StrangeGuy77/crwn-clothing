import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleIsCartOpen } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { Button } from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";

import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from "./cart-dropdown.styles.jsx";

export const CartDropdown = () => {
	const items = useSelector(selectCartItems);

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		dispatch(toggleIsCartOpen());
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
