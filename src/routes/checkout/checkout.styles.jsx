import { styled } from "styled-components";

export const CheckoutContainer = styled("div")({
	width: "55%",
	minHeight: "90vh",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	margin: "50px auto 0",
});

export const CheckoutHeader = styled("div")({
	width: "100%",
	padding: "10px 0",
	display: "flex",
	justifyContent: "space-between",
	borderBottom: "1px solid darkgrey",
});

export const HeaderBlock = styled("div")({
	textTransform: "capitalize",
	width: "23%",

	"&:last-child": {
		width: "8%",
	},
});

export const Total = styled("span")({
	marginTop: "30px",
	marginLeft: "auto",
	fontSize: "36px",
});
