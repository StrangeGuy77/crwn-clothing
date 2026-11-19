import { styled } from "styled-components";
import {
	DefaultButton,
	GoogleSignInButton,
	InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled("div")({
	position: "absolute",
	width: "240px",
	height: "340px",
	display: "flex",
	flexDirection: "column",
	padding: "20px",
	border: "1px solid black",
	backgroundColor: "white",
	top: "90px",
	right: "40px",
	zIndex: "5",

	[`${DefaultButton}, ${GoogleSignInButton}, ${InvertedButton}`]: {
		marginTop: "auto",
	},
});

export const EmptyMessage = styled("span")({
	fontSize: "18px",
	margin: "50px auto",
});

export const CartItems = styled("div")({
	height: "240px",
	display: "flex",
	flexDirection: "column",
	overflow: "scroll",
});
