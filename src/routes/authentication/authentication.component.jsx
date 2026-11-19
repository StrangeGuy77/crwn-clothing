import { SigninForm } from "../../components/sign-in-form/sign-in-form.component";
import { SignupForm } from "../../components/sign-up-form/sign-up-form.component";
import { AuthenticationContainer } from "./authentication.styles";

export const Authentication = () => {
	return (
		<AuthenticationContainer>
			<SigninForm />
			<SignupForm />
		</AuthenticationContainer>
	);
};
