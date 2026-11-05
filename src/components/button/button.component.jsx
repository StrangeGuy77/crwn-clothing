import "./button.styles.scss";

const BUTTON_TYPES_CLASSES = {
	google: "google-sign-in",
	inverted: "inverted",
	default: "default",
};

export const Button = ({ buttonType = "default", ...props }) => {
	return (
		<button
			className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
			{...props}
		>
			{props.children}
		</button>
	);
};
