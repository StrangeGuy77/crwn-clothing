import { useSelector } from "react-redux";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/category/category.selector";

export const CategoriesPreview = () => {
	const categoryMap = useSelector(selectCategoriesMap);

	return (
		<>
			{Object.keys(categoryMap).map((title) => {
				const products = categoryMap[title];

				return (
					<CategoryPreview key={title} title={title} products={products} />
				);
			})}
		</>
	);
};
