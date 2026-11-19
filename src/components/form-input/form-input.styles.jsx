import { styled } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyles = {
	top: "-14px",
	fontSize: "12px",
	color: mainColor,
};

export const FormInputLabel = styled("label", {
	shouldForwardProp: (prop) => prop !== "shrink",
})(({ shrink }) => ({
	color: subColor,
	fontSize: "16px",
	fontWeight: "normal",
	position: "absolute",
	pointerEvents: "none",
	left: "5px",
	top: "10px",
	transition: "300ms ease all",

	...(shrink ? shrinkLabelStyles : {}),
}));

export const Input = styled("input")({
	background: "none",
	backgroundColor: "white",
	color: "subColor",
	fontSize: "18px",
	padding: "10px 10px 10px 5px",
	display: "block",
	width: "100%",
	border: "none",
	borderRadius: 0,
	borderBottom: `1px solid ${subColor}`,
	margin: "25px 0",

	"&:focus": {
		outline: "none",
	},

	[`&:focus ~ ${FormInputLabel}`]: {
		...shrinkLabelStyles,
	},
});

export const Group = styled("div")({
	position: "relative",
	margin: "45px 0",

	"input[type='password']": {
		letterSpacing: "0.3em",
	},
});
