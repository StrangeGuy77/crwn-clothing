import { styled } from "styled-components";

export const ProductCardContainer = styled("div")({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	height: "350px",
	alignItems: "center",
	position: "relative",

	img: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		marginBottom: "5px",
	},

	button: {
		width: "80%",
		opacity: "0.7",
		position: "absolute",
		top: "255px",
		display: "none",
	},

	"&:hover": {
		img: {
			opacity: 0.8,
		},

		button: {
			opacity: 0.85,
			display: "flex",
		},
	},
});

export const Footer = styled("div")({
	width: "100%",
	height: "5%",
	display: "flex",
	justifyContent: "space-between",
	fontSize: "18px",
});

export const Name = styled("span")({
	width: "90%",
	marginBottom: "15px",
});

export const Price = styled("span")({
	width: "10%",
});
