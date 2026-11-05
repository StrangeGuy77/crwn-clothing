import { useState } from "react";
import { createAuthUserWithUserAndPassword } from "../../utils/firebase/firebase.utils";
import { Button } from "../button/button.component";
import { FormInput } from "../form-input/form-input.component";

import "./sign-up-form.styles.scss";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

export const SignupForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		// Validate password
		if (password !== confirmPassword) return;
		if (password.length < 6) return;

		console.log(formFields);

		await createAuthUserWithUserAndPassword(displayName, email, password).then(
			() => {
				setFormFields(defaultFormFields);
			},
		);
	};

	return (
		<div className="sign-up-container">
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={onSubmit}>
				<FormInput
					label="Display name"
					name="displayName"
					id="display_name"
					type="text"
					onChange={handleChange}
					value={displayName}
					required
				/>

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

				<FormInput
					label="Confirm password"
					name="confirmPassword"
					id="confirm_password"
					type="password"
					onChange={handleChange}
					value={confirmPassword}
					required
				/>

				<Button buttonType="default" type="submit">
					Sign up
				</Button>
			</form>
		</div>
	);
};
