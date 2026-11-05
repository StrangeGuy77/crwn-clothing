import { useState } from "react";
import { createAuthUserWithUserAndPassword } from "../../utils/firebase/firebase.utils";
import { FormInput } from "../form-input/form-input.component";

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
		<div>
			<h1>Sign up with your email and password</h1>
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

				<button type="submit">Sign up</button>
			</form>
		</div>
	);
};
