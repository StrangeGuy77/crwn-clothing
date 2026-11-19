import { styled } from "styled-components";

export const CheckoutItemContainer = styled("div")({
	width: "100%",
	display: "flex",
	minHeight: "100px",
	borderBottom: "1px solid darkgrey",
	padding: "15px 0",
	fontSize: "20px",
	alignItems: "center",
});

export const ImageContainer = styled("div")({
	width: "23%",
	paddingRight: "15px",

	img: {
		width: "100%",
		height: "100%",
	},
});

export const Name = styled("span")({
	width: "23%",
});

export const Price = styled("span")({
	width: "23%",
});

export const Quantity = styled("span")({
	display: "flex",
	width: "23%",
});

export const Arrow = styled("button")({
	all: "unset",
	cursor: "pointer",
});

export const Value = styled("span")({
	margin: "4px 10px 0px 10px",
});

export const RemoveButton = styled("button")({
	all: "unset",
	paddingLeft: "12px",
	cursor: "pointer",
});
