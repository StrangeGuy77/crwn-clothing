import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.styles.scss";

export const CheckoutItem = ({ item }) => {
	const { clearItem, addItem, removeItem } = useContext(CartContext);

	const { name, imageUrl, price, quantity } = item;

	const increaseItemHandler = () => addItem(item);
	const decreaseItemHandler = () => removeItem(item);
	const clearItemHandler = () => clearItem(item);

	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<button type="button" className="arrow" onClick={decreaseItemHandler}>
					&#10094;
				</button>
				<span className="value">{quantity}</span>
				<button type="button" className="arrow" onClick={increaseItemHandler}>
					&#10095;
				</button>
			</span>
			<span className="price">{price}</span>

			<button
				type="button"
				className="remove-button"
				onClick={clearItemHandler}
			>
				&#10005;
			</button>
		</div>
	);
};
