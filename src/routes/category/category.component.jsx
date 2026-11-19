import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";
import "./category.styles.scss";

export const Category = () => {
	const [products, setProducts] = useState([]);

	const { category } = useParams();
	const { categoryMap } = useContext(CategoriesContext);

	useEffect(() => {
		if (categoryMap[category]) {
			setProducts(categoryMap[category]);
		}
	}, [category, categoryMap]);

	return (
		<>
			<h2 className="category-title">{category.toUpperCase()}</h2>
			<div className="category-container">
				{products?.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</>
	);
};
