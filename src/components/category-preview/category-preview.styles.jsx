import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const CategoryPreviewContainer = styled("div")({
	display: "flex",
	flexDirection: "column",
	marginBottom: "30px",
});

export const Title = styled(Link)({
	fontSize: "28px",
	marginBottom: "25px",
	cursor: "pointer",
});

export const Preview = styled("div")({
	display: "grid",
	gridTemplateColumns: "repeat(4, 1fr)",
	columnGap: "20px",
});
