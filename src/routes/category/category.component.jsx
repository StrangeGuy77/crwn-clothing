import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/product-card/product-card.component";
import { Spinner } from "../../components/spinner/spinner.component";
import {
	selectCategoriesIsLoading,
	selectCategoriesMap,
} from "../../store/category/category.selector";
import { CategoryContainer, Title } from "./category.styles";

export const Category = () => {
	const [products, setProducts] = useState([]);

	const { category } = useParams();
	const categoryMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);

	useEffect(() => {
		if (categoryMap[category]) {
			setProducts(categoryMap[category]);
		}
	}, [category, categoryMap]);

	return (
		<>
			<Title>{category.toUpperCase()}</Title>
			{isLoading ? (
				<Spinner />
			) : (
				<CategoryContainer>
					{products?.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</CategoryContainer>
			)}
		</>
	);
};
