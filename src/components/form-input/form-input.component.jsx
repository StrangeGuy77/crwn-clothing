import { FormInputLabel, Group, Input } from "./form-input.styles";

export const FormInput = ({ label, ...inputProps }) => {
	return (
		<Group>
			<Input {...inputProps} />
			{label && (
				<FormInputLabel
					shrink={inputProps.value.length}
					htmlFor={inputProps.id}
				>
					{label}
				</FormInputLabel>
			)}
		</Group>
	);
};
