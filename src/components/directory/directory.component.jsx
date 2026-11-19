import categories from "../../assets/categories.json";
import { DirectoryItem } from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles";

export const Directory = () => {
	return (
		<DirectoryContainer>
			{categories.map((category) => (
				<DirectoryItem key={category.id} category={category} />
			))}
		</DirectoryContainer>
	);
};
