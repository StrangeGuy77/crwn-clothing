import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { Button } from "../button/button.component";

import {
	Footer,
	Name,
	Price,
	ProductCardContainer,
} from "./product-card.styles.jsx";

export const ProductCard = ({ product }) => {
	const items = useSelector(selectCartItems);
	const dispatch = useDispatch();
	const { name, price, imageUrl } = product;

	const addProductToCart = () => dispatch(addItem(items, product));

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
