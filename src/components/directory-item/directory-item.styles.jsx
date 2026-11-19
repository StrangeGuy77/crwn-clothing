import { styled } from "styled-components";

export const BackgroundImage = styled("div", {
	shouldForwardProp: (prop) => prop !== "imageUrl",
})(({ imageUrl }) => ({
	width: "100%",
	height: "100%",
	backgroundSize: "cover",
	backgroundPosition: "center",
	backgroundImage: `url(${imageUrl})`,
}));

export const Body = styled("div")({
	height: "90px",
	padding: "0 25px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	border: "1px solid black",
	backgroundColor: "white",
	opacity: 0.7,
	position: "absolute",

	h2: {
		margin: "0 6px 0",
		fontWeight: "bold",
		fontSize: "22px",
		color: "#4a4a4a",
		textTransform: "capitalize",
	},

	p: {
		fontWeight: "lighter",
		fontSize: "16px",
	},
});

export const DirectoryItemContainer = styled("div")({
	minWidth: "30%",
	height: "340px",
	flex: "1 1 auto",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	border: "1px solid black",
	margin: "0 7.5px 15px",
	overflow: "hidden",

	"&:hover": {
		cursor: "pointer",

		[`& ${BackgroundImage}`]: {
			transform: "scale(1.1)",
			transition: "transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)",
		},

		[`& ${Body}`]: {
			opacity: 0.9,
		},
	},

	"&:first-child": {
		marginRight: "7.5px",
	},

	"&:last-child": {
		marginLeft: "7.5px",
	},
});
