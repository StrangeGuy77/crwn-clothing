import { useContext } from "react";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../context/cart.context";
import {
	CheckoutContainer,
	CheckoutHeader,
	HeaderBlock,
	Total,
} from "./checkout.styles";

export const Checkout = () => {
	const { items, cartTotal } = useContext(CartContext);

	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>

			{items.map((item) => (
				<CheckoutItem key={item.id} item={item} />
			))}

			<Total>Total: ${cartTotal}</Total>
		</CheckoutContainer>
	);
};
