import { getCategories } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";

import { CATEGORY_ACTION_TYPES } from "./category.types";

export const fetchCategoriesStart = () =>
	createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) =>
	createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailed = (error) =>
	createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
	dispatch(fetchCategoriesStart());

	await getCategories()
		.then((categories) => {
			fetchCategoriesSuccess(categories);
		})
		.catch((error) => {
			fetchCategoriesFailed(error);
		});
};
