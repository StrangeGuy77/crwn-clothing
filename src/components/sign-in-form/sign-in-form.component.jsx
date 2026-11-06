import { useContext, useState } from "react";
import { UserContext } from "../../context/user.context";
import {
	createUserDocumentFromAuth,
	signInAuthWithUserAndPassword,
	signInWithGooglePopUp,
} from "../../utils/firebase/firebase.utils";
import { Button } from "../button/button.component";
import { FormInput } from "../form-input/form-input.component";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
	email: "",
	password: "",
};

export const SigninForm = () => {
	const { setCurrentUser } = useContext(UserContext);
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const loginGoogleUser = async () => {
		const response = await signInWithGooglePopUp();
		await createUserDocumentFromAuth(response.user);

		setCurrentUser(response.user);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		const response = await signInAuthWithUserAndPassword(email, password).catch(
			(_err) => {
				alert("Wrong email or password");
			},
		);

		if (response.user) setCurrentUser(response.user);

		setFormFields(defaultFormFields);
	};

	return (
		<div className="sign-in-container">
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

				<div className="buttons-container">
					<Button buttonType="default" type="submit">
						SIGN IN
					</Button>
					<Button buttonType="google" type="submit" onClick={loginGoogleUser}>
						GOOGLE SIGN IN
					</Button>
				</div>
			</form>
		</div>
	);
};
