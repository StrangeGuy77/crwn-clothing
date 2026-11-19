import { createContext, useEffect, useState } from "react";
import { getCategories } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
	categoryMap: {},
	setCategoryMap: () => null,
});

export const CategoriesProvider = ({ children }) => {
	const [categoryMap, setCategoryMap] = useState({});

	const value = { categoryMap, setCategoryMap };

	useEffect(() => {
		const getCategoryMap = async () => {
			const newCategoryMap = await getCategories();
			setCategoryMap(newCategoryMap);
		};

		getCategoryMap();
	}, []);

	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
