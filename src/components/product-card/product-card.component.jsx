import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { Button } from "../button/button.component";

import {
	Footer,
	Name,
	Price,
	ProductCardContainer,
} from "./product-card.styles.jsx";

export const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItem } = useContext(CartContext);

	const addProductToCart = () => addItem(product);

	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={name} />
			<Footer>
				<Name>{name}</Name>
				<Price>${price}</Price>
			</Footer>
			<Button buttonType="inverted" onClick={addProductToCart}>
				Add to cart
			</Button>
		</ProductCardContainer>
	);
};
