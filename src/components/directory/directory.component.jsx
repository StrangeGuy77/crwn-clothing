import "./directory.styles.scss";

import categories from "../../assets/categories.json";

import { CategoryItem } from "../category-item/category-item.component";

export const Directory = () => {
	return (
		<div className="directory-container">
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
	);
};
