import { useState } from "react";
import {
	signInAuthWithUserAndPassword,
	signInWithGooglePopUp,
} from "../../utils/firebase/firebase.utils";
import { BUTTON_TYPES_CLASSES, Button } from "../button/button.component";
import { FormInput } from "../form-input/form-input.component";

import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles.jsx";

const defaultFormFields = {
	email: "",
	password: "",
};

export const SigninForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const loginGoogleUser = async () => {
		await signInWithGooglePopUp();
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		await signInAuthWithUserAndPassword(email, password).catch((_err) => {
			alert("Wrong email or password");
		});

		setFormFields(defaultFormFields);
	};

	return (
		<SignInContainer>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={onSubmit}>
				<FormInput
					label="Email"
					name="email"
					id="email"
					type="email"
					onChange={handleChange}
					value={email}
					required
				/>

				<FormInput
					label="Password"
					name="password"
					id="password"
					type="password"
					onChange={handleChange}
					value={password}
					required
				/>

				<ButtonsContainer>
					<Button buttonType={BUTTON_TYPES_CLASSES.default} type="submit">
						SIGN IN
					</Button>
					<Button
						buttonType={BUTTON_TYPES_CLASSES.google}
						type="submit"
						onClick={loginGoogleUser}
					>
						GOOGLE SIGN IN
					</Button>
				</ButtonsContainer>
			</form>
		</SignInContainer>
	);
};
