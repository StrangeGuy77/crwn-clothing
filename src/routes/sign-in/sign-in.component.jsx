import { SignupForm } from "../../components/sign-up-form/sign-up-form.component";
import {
	createUserDocumentFromAuth,
	signInWithGooglePopUp,
} from "../../utils/firebase/firebase.utils";

export const SignIn = () => {
	const loginGoogleUser = async () => {
		const response = await signInWithGooglePopUp();
		await createUserDocumentFromAuth(response.user);
	};

	return (
		<div>
			<h1>Sign In Page</h1>
			<button onClick={loginGoogleUser} type="button">
				Sign with with Google
			</button>
			<SignupForm />
		</div>
	);
};
