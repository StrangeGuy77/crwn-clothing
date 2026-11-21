import { useSelector } from "react-redux";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";
import { Spinner } from "../../components/spinner/spinner.component";
import {
	selectCategoriesIsLoading,
	selectCategoriesMap,
} from "../../store/category/category.selector";

export const CategoriesPreview = () => {
	const categoryMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);

	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				Object.keys(categoryMap).map((title) => {
					const products = categoryMap[title];

					return (
						<CategoryPreview key={title} title={title} products={products} />
					);
				})
			)}
		</>
	);
};
