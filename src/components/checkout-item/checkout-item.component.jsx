import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
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
	const { clearItem, addItem, removeItem } = useContext(CartContext);

	const { name, imageUrl, price, quantity } = item;

	const increaseItemHandler = () => addItem(item);
	const decreaseItemHandler = () => removeItem(item);
	const clearItemHandler = () => clearItem(item);

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
