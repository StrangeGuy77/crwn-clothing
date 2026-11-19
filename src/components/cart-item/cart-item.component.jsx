import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles.jsx";

export const CartItem = ({ item }) => {
	const { name, imageUrl, price, quantity } = item;

	return (
		<CartItemContainer>
			<img src={imageUrl} alt={`${name}`} />
			<ItemDetails>
				<Name>{name}</Name>
				<span className="price">
					{quantity} x ${price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
};
