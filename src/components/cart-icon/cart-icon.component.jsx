import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {
	CartIconContainer,
	ItemCounter,
	ShoppingIcon,
} from "./cart-icon.styles";

export const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, itemsCount } = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

	return (
		<CartIconContainer type="button" onClick={toggleIsCartOpen}>
			<ShoppingIcon />
			<ItemCounter>{itemsCount}</ItemCounter>
		</CartIconContainer>
	);
};
