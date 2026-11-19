import { styled } from "styled-components";

export const DefaultButton = styled("button")({
	minWidth: "165px",
	width: "auto",
	height: "50px",
	letterSpacing: "0.5px",
	lineHeight: "50px",
	padding: "0 35px 0 35px",
	fontSize: "15px",
	backgroundColor: "black",
	color: "white",
	textTransform: "uppercase",
	fontFamily: "Open Sans Condensed",
	fontWeight: "bolder",
	border: "none",
	cursor: "pointer",
	display: "flex",
	justifyContent: "center",

	"&:hover": {
		backgroundColor: "white",
		color: "black",
		border: "1px solid black",
	},
});

export const GoogleSignInButton = styled(DefaultButton)({
	backgroundColor: "#4285f4",
	color: "white",

	"&:hover": {
		backgroundColor: "#357ae8",
		border: "none",
	},
});

export const InvertedButton = styled(DefaultButton)({
	backgroundColor: "white",
	color: "black",
	border: "1px solid black",

	"&:hover": {
		backgroundColor: "black",
		color: "white",
		border: "none",
	},
});
