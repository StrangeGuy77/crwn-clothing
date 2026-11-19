import {
	DefaultButton,
	GoogleSignInButton,
	InvertedButton,
} from "./button.styles";

export const BUTTON_TYPES_CLASSES = {
	google: "google-sign-in",
	inverted: "inverted",
	default: "default",
};

const getButton = (buttonType = BUTTON_TYPES_CLASSES.default) => {
	return {
		[BUTTON_TYPES_CLASSES.default]: DefaultButton,
		[BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
		[BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
	}[buttonType];
};

export const Button = ({
	buttonType = BUTTON_TYPES_CLASSES.default,
	...props
}) => {
	const CustomButton = getButton(buttonType);

	return <CustomButton {...props}>{props.children}</CustomButton>;
};
