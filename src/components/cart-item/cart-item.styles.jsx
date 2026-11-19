import { styled } from "styled-components";

export const CartItemContainer = styled("div")({
	width: "100%",
	display: "flex",
	height: "80px",
	marginBottom: "15px",

	img: {
		width: "30%",
	},
});

export const ItemDetails = styled("div")({
	width: "70%",
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	justifyContent: "center",
	padding: "10px 20px",
});

export const Name = styled("span")({
	fontSize: "16px",
});
