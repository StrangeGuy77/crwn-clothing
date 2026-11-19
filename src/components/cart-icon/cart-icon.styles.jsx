import { styled } from "styled-components";

import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled("button")({
	// Reset default button styles.
	all: "unset",

	border: "none",
	width: "45px",
	height: "45px",
	position: "relative",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	cursor: "pointer",
});

export const ShoppingIcon = styled(ShoppingSvg)({
	width: "24px",
	height: "24px",
});

export const ItemCounter = styled("span")({
	position: "absolute",
	fontSize: "10px",
	fontWeight: "bold",
	bottom: "12px",
});
