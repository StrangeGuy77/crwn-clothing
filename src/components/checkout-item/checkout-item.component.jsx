import { useDispatch, useSelector } from "react-redux";
import { addItem, clearItem, removeItem } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
	Arrow,
	CheckoutItemContainer,
	ImageContainer,
	Name,
	Price,
	Quantity,
	RemoveButton,
	Value,
} from "./checkout-item.styles";

export const CheckoutItem = ({ item }) => {
	const items = useSelector(selectCartItems);
	const dispatch = useDispatch();

	const { name, imageUrl, price, quantity } = item;

	const decreaseItemHandler = () => dispatch(removeItem(items, item));
	const increaseItemHandler = () => dispatch(addItem(items, item));
	const clearItemHandler = () => dispatch(clearItem(items, item));

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>
			<Name>{name}</Name>
			<Quantity>
				<Arrow type="button" className="arrow" onClick={decreaseItemHandler}>
					&#10094;
				</Arrow>
				<Value className="value">{quantity}</Value>
				<Arrow type="button" className="arrow" onClick={increaseItemHandler}>
					&#10095;
				</Arrow>
			</Quantity>
			<Price>{price}</Price>

			<RemoveButton
				type="button"
				className="remove-button"
				onClick={clearItemHandler}
			>
				&#10005;
			</RemoveButton>
		</CheckoutItemContainer>
	);
};
