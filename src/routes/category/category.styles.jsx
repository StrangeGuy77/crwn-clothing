import { styled } from "styled-components";

export const CategoryContainer = styled("div")({
	display: "grid",
	gridTemplateColumns: "repeat(4, 1fr)",
	columnGap: "20px",
	rowGap: "50px",
});

export const Title = styled("h2")({
	fontSize: "38px",
	marginBottom: "25px",
	textAlign: "center",
});
