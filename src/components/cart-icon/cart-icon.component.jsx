import { useDispatch, useSelector } from "react-redux";
import { toggleIsCartOpen } from "../../store/cart/cart.action";
import { selectCartItemsCount } from "../../store/cart/cart.selector";
import {
	CartIconContainer,
	ItemCounter,
	ShoppingIcon,
} from "./cart-icon.styles";

export const CartIcon = () => {
	const itemsCount = useSelector(selectCartItemsCount);
	const dispatch = useDispatch();

	const toggleIsCartOpenHandler = () => dispatch(toggleIsCartOpen());

	return (
		<CartIconContainer type="button" onClick={toggleIsCartOpenHandler}>
			<ShoppingIcon />
			<ItemCounter>{itemsCount}</ItemCounter>
		</CartIconContainer>
	);
};
